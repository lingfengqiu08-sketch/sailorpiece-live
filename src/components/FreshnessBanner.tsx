"use client";

import { useEffect, useState } from "react";
import { freshnessBucket } from "@/lib/date";

/**
 * Prominent freshness banner for codes page hero.
 *
 * Server-rendered initial value (for SEO + first paint), client-hydrated
 * for live "X minutes ago" updates every 60s.
 *
 * Strategy: surface the JSON-LD dateModified data point as a human-visible
 * trust signal. Editorial sites show only a static "Updated May 28" — we
 * show "Verified live 2 hours ago" which both reassures users and gives
 * Google a visible freshness anchor matching our structured data.
 */
export function FreshnessBanner({
  lastCheckedAt,
  checkFrequencyHours,
  activeCount,
  expiredCount,
}: {
  lastCheckedAt: string;
  checkFrequencyHours: number;
  activeCount: number;
  expiredCount: number;
}) {
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    setNowMs(Date.now());
    const interval = setInterval(() => setNowMs(Date.now()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const checkedAt = new Date(lastCheckedAt).getTime();
  const ageMs = nowMs ? Math.max(0, nowMs - checkedAt) : 0;
  const ageHours = Math.floor(ageMs / 3_600_000);
  const ageMinutes = Math.floor((ageMs % 3_600_000) / 60_000);
  const nextCheckMs = checkFrequencyHours * 3_600_000 - ageMs;
  const nextCheckHours = Math.max(0, Math.floor(nextCheckMs / 3_600_000));
  const nextCheckMinutes = Math.max(
    0,
    Math.floor((nextCheckMs % 3_600_000) / 60_000),
  );

  const bucket = nowMs ? freshnessBucket(lastCheckedAt, nowMs) : "stale";
  const isOverdue = nextCheckMs <= 0;

  // Build human-readable age string. Server-renders as "..." until hydrated
  // so we don't ship a wrong absolute timestamp in HTML.
  const ageDisplay =
    nowMs === null
      ? formatStaticAge(checkedAt)
      : ageHours === 0
      ? ageMinutes === 0
        ? "just now"
        : `${ageMinutes} min ago`
      : ageHours < 24
      ? `${ageHours}h ${ageMinutes}m ago`
      : `${Math.floor(ageHours / 24)} day${Math.floor(ageHours / 24) === 1 ? "" : "s"} ago`;

  const nextCheckDisplay = isOverdue
    ? "Source recheck overdue"
    : nextCheckHours === 0
    ? `Next source check in ${nextCheckMinutes} min`
    : `Next source check in ~${nextCheckHours}h`;

  const dotColor =
    bucket === "fresh"
      ? "bg-[var(--color-accent)]"
      : bucket === "recent"
      ? "bg-[#5ec5ff]"
      : bucket === "aging"
      ? "bg-[var(--color-accent-2)]"
      : "bg-[var(--color-text-muted)]";

  const pulseClass = bucket === "fresh" ? "animate-pulse" : "";

  return (
    <aside
      aria-label="Sailor Piece codes freshness"
      className="surface p-4 sm:p-5 mb-6 border-l-4 border-l-[var(--color-accent)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`relative inline-flex h-3 w-3 rounded-full ${dotColor}`}
            aria-hidden="true"
          >
            <span
              className={`absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75 ${pulseClass}`}
            />
          </span>
          <div>
            <p className="text-sm font-semibold">
              Verified live · Source checked{" "}
              <time dateTime={lastCheckedAt} className="text-[var(--color-accent)]">
                {ageDisplay}
              </time>
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
              {activeCount} active · {expiredCount} expired · {nextCheckDisplay}
            </p>
          </div>
        </div>
        <div className="text-xs text-[var(--color-text-muted)] text-right">
          <p>
            Recheck cadence:{" "}
            <strong className="text-[var(--color-text)]">
              every {checkFrequencyHours}h
            </strong>
          </p>
          <p className="mt-0.5">
            Faster than most editorial sites (3-24h)
          </p>
        </div>
      </div>
    </aside>
  );
}

/**
 * Server-only fallback when `nowMs` is null (pre-hydration).
 * Render an approximation based on the build time so the initial HTML
 * contains a reasonable string rather than placeholder dots.
 */
function formatStaticAge(checkedAt: number): string {
  // Treat the build-time "now" as roughly current; in practice the
  // checkedAt is always in the past, so this gives a positive offset.
  // We can't call Date.now() in a server component RSC build either, so
  // we fall back to "recent" wording.
  if (Number.isNaN(checkedAt)) return "recently";
  return "recently";
}
