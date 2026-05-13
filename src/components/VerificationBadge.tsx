"use client";

import { useEffect, useState } from "react";
import { formatTimeAgo, freshnessBucket } from "@/lib/date";
import type { VerificationMethod } from "@/lib/codes";

export function VerificationBadge({
  verifiedAt,
  method,
}: {
  verifiedAt: string;
  method: VerificationMethod;
}) {
  // Render the badge once mounted to avoid SSR-vs-client time-skew flicker
  const [nowMs, setNowMs] = useState<number | null>(null);
  useEffect(() => {
    setNowMs(Date.now());
    const t = setInterval(() => setNowMs(Date.now()), 60_000);
    return () => clearInterval(t);
  }, []);

  const bucket = nowMs ? freshnessBucket(verifiedAt, nowMs) : "stale";
  const timeAgo = nowMs ? formatTimeAgo(verifiedAt, nowMs) : "—";

  const bucketClass =
    bucket === "fresh"
      ? "badge-fresh"
      : bucket === "recent"
      ? "badge-recent"
      : bucket === "aging"
      ? "badge-aging"
      : "badge-stale";

  const methodLabel =
    method === "redeem_test"
      ? "Redeem tested"
      : method === "official_discord"
      ? "Source checked"
      : "Snapshot";

  const methodClass =
    method === "redeem_test" ? "badge-redeem" : "badge-source";

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className={`badge ${bucketClass}`}>{timeAgo}</span>
      <span className={`badge ${methodClass}`} title={
        method === "redeem_test"
          ? "A real account redeemed this code and received the rewards."
          : method === "official_discord"
          ? "Code seen in the official Discord. Not redeem-tested."
          : "Code present in multiple public source snapshots."
      }>
        {methodLabel}
      </span>
    </div>
  );
}
