import { execFileSync } from "node:child_process";

const propertyId = process.env.GA4_PROPERTY_ID || "537560408";
const baseUrl = `https://analyticsadmin.googleapis.com/v1beta/properties/${propertyId}`;

const dimensions = [
  {
    parameterName: "level_bucket",
    displayName: "Level bucket",
    description: "Sailor Piece level bucket used by codes eligibility events.",
  },
  {
    parameterName: "code",
    displayName: "Copied code",
    description: "Sailor Piece code copied by the user.",
  },
  {
    parameterName: "tab",
    displayName: "Tier tab",
    description: "Tier list tab selected by the user.",
  },
  {
    parameterName: "link_label",
    displayName: "Official link label",
    description: "Official link label clicked by the user.",
  },
  {
    parameterName: "has_level",
    displayName: "Has level filter",
    description: "Whether the event had a user level filter set.",
  },
];

const metrics = [
  {
    parameterName: "code_count",
    displayName: "Code count",
    description: "Number of eligible Sailor Piece codes copied.",
    measurementUnit: "STANDARD",
  },
];

const keyEvents = ["copy_code", "copy_all_eligible"];

function accessToken() {
  if (process.env.GOOGLE_ACCESS_TOKEN) return process.env.GOOGLE_ACCESS_TOKEN;
  return execFileSync("gcloud", ["auth", "application-default", "print-access-token"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

const token = accessToken();

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  const json = text ? JSON.parse(text) : {};

  if (!response.ok) {
    const message = json?.error?.message || response.statusText;
    const reason = json?.error?.details?.[0]?.reason;
    throw new Error(`${options.method || "GET"} ${path} HTTP ${response.status}: ${message}${reason ? ` (${reason})` : ""}`);
  }

  return json;
}

async function ensureCustomDimensions() {
  const current = await request("customDimensions");
  const existing = new Set((current.customDimensions || []).map((item) => item.parameterName));

  for (const dimension of dimensions) {
    if (existing.has(dimension.parameterName)) {
      console.log(`OK custom dimension exists: ${dimension.parameterName}`);
      continue;
    }

    const created = await request("customDimensions", {
      method: "POST",
      body: JSON.stringify({ ...dimension, scope: "EVENT" }),
    });
    console.log(`CREATED custom dimension: ${created.parameterName}`);
  }
}

async function ensureCustomMetrics() {
  const current = await request("customMetrics");
  const existing = new Set((current.customMetrics || []).map((item) => item.parameterName));

  for (const metric of metrics) {
    if (existing.has(metric.parameterName)) {
      console.log(`OK custom metric exists: ${metric.parameterName}`);
      continue;
    }

    const created = await request("customMetrics", {
      method: "POST",
      body: JSON.stringify({ ...metric, scope: "EVENT" }),
    });
    console.log(`CREATED custom metric: ${created.parameterName}`);
  }
}

async function ensureKeyEvents() {
  const current = await request("keyEvents");
  const existing = new Set((current.keyEvents || []).map((item) => item.eventName));

  for (const eventName of keyEvents) {
    if (existing.has(eventName)) {
      console.log(`OK key event exists: ${eventName}`);
      continue;
    }

    const created = await request("keyEvents", {
      method: "POST",
      body: JSON.stringify({ eventName, countingMethod: "ONCE_PER_EVENT" }),
    });
    console.log(`CREATED key event: ${created.eventName}`);
  }
}

try {
  await ensureCustomDimensions();
  await ensureCustomMetrics();
  await ensureKeyEvents();
  console.log("GA4 event assets are ready.");
} catch (error) {
  console.error(String(error.message || error));
  console.error(
    "If this says ACCESS_TOKEN_SCOPE_INSUFFICIENT, re-run gcloud ADC login with analytics.edit scope, then run pnpm ga4:assets again.",
  );
  process.exit(1);
}
