import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const codesPath = join(root, "src/data/codes.json");
const codes = JSON.parse(readFileSync(codesPath, "utf8"));
const checkDate = String(codes.last_checked_at || "").slice(0, 10);
const evidencePath = join(root, "src/data/code-source-checks", `${checkDate}.json`);
const errors = [];

if (!checkDate || checkDate.length !== 10) {
  errors.push("codes.json last_checked_at must be an ISO timestamp");
}

if (!existsSync(evidencePath)) {
  errors.push(`missing evidence archive: src/data/code-source-checks/${checkDate}.json`);
} else {
  const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
  const sourceCount = Array.isArray(evidence.sources) ? evidence.sources.length : 0;
  const reviewedCodes = new Set(Array.isArray(evidence.codes_reviewed) ? evidence.codes_reviewed : []);
  const activeCodes = Array.isArray(codes.active) ? codes.active.map((item) => item.code) : [];
  const missingReviewed = activeCodes.filter((code) => !reviewedCodes.has(code));

  if (!String(evidence.checked_at || "").startsWith(checkDate)) {
    errors.push("evidence checked_at must match codes.json last_checked_at date");
  }

  if (sourceCount === 0) {
    errors.push("evidence sources must include at least one source");
  }

  for (const [index, source] of (evidence.sources || []).entries()) {
    if (!source.name || !source.url || !source.accessed_at) {
      errors.push(`evidence source ${index + 1} must include name, url, and accessed_at`);
    }
  }

  if (missingReviewed.length > 0) {
    errors.push(`evidence codes_reviewed missing active codes: ${missingReviewed.join(", ")}`);
  }

  if (errors.length === 0) {
    console.log(
      `Code evidence archive present for ${checkDate} (${activeCodes.length} active codes, ${sourceCount} sources)`,
    );
  }
}

if (errors.length > 0) {
  console.error(`Code evidence archive invalid:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
