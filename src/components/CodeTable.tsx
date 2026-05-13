"use client";

import { useMemo, useState } from "react";
import { CopyCodeButton } from "./CopyCodeButton";
import { VerificationBadge } from "./VerificationBadge";
import { LevelEligibilityFilter } from "./LevelEligibilityFilter";
import type { ActiveCode, ExpiredCode } from "@/lib/codes";
import { eligibleForLevel, sortActiveCodes } from "@/lib/codes";

export function CodeTable({
  active,
  expired,
}: {
  active: ActiveCode[];
  expired: ExpiredCode[];
}) {
  const [userLevel, setUserLevel] = useState<number | null>(null);
  const [eligibleOnly, setEligibleOnly] = useState(false);
  const [showExpired, setShowExpired] = useState(false);

  const filtered = useMemo(() => {
    let list = sortActiveCodes(active, userLevel);
    if (eligibleOnly && userLevel !== null) {
      list = list.filter((c) => eligibleForLevel(userLevel, c));
    }
    return list;
  }, [active, userLevel, eligibleOnly]);

  const eligibleCount = useMemo(() => {
    if (userLevel === null) return active.length;
    return active.filter((c) => eligibleForLevel(userLevel, c)).length;
  }, [active, userLevel]);

  function copyAllEligible() {
    const list =
      userLevel !== null
        ? active.filter((c) => eligibleForLevel(userLevel, c))
        : active;
    const txt = list.map((c) => c.code).join("\n");
    navigator.clipboard.writeText(txt).catch(() => {});
  }

  return (
    <div className="space-y-6">
      {/* Sticky toolbar */}
      <div className="surface p-4 sm:p-5 sticky top-[64px] z-20 backdrop-blur">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <LevelEligibilityFilter onChange={setUserLevel} />
            {userLevel !== null && (
              <label className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] select-none">
                <input
                  type="checkbox"
                  checked={eligibleOnly}
                  onChange={(e) => setEligibleOnly(e.target.checked)}
                  className="accent-[var(--color-accent)]"
                />
                Eligible only
              </label>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--color-text-muted)]">
              {userLevel !== null
                ? `${eligibleCount} codes available for your level`
                : `${active.length} active · ${expired.length} expired`}
            </span>
            <button
              onClick={copyAllEligible}
              className="btn-primary text-xs"
              type="button"
            >
              Copy {userLevel !== null ? "eligible" : "all"}
            </button>
          </div>
        </div>
      </div>

      {/* Active codes — cards on mobile, table on desktop */}
      <div className="space-y-3 sm:hidden">
        {filtered.map((c) => (
          <CodeCardMobile key={c.code} code={c} userLevel={userLevel} />
        ))}
        {filtered.length === 0 && <EmptyState />}
      </div>

      <div className="hidden sm:block surface overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[var(--color-surface-2)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
            <tr>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Rewards</th>
              <th className="px-4 py-3">Level</th>
              <th className="px-4 py-3">Verified</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => {
              const eligible = userLevel === null ? true : eligibleForLevel(userLevel, c);
              return (
                <tr
                  key={c.code}
                  className={
                    "border-t border-[var(--color-border)] " +
                    (!eligible ? "opacity-55" : "")
                  }
                >
                  <td className="px-4 py-3">
                    <code className="font-mono text-[var(--color-accent)]">{c.code}</code>
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] max-w-md">
                    {c.rewards}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {c.min_level === null ? (
                      <span className="text-xs text-[var(--color-text-muted)]">Any level</span>
                    ) : (
                      <span className={
                        "badge " + (eligible ? "badge-fresh" : "badge-danger")
                      }>
                        Lv {c.min_level.toLocaleString()}{!eligible && " required"}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <VerificationBadge verifiedAt={c.verified_at} method={c.verification_method} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <CopyCodeButton code={c.code} />
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8">
                  <EmptyState />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Expired (collapsed) */}
      <div className="surface p-5">
        <button
          onClick={() => setShowExpired((v) => !v)}
          type="button"
          className="w-full flex items-center justify-between text-left"
        >
          <span className="font-semibold">
            Expired Sailor Piece codes ({expired.length})
          </span>
          <span className="text-sm text-[var(--color-text-muted)]">
            {showExpired ? "Hide" : "Show"}
          </span>
        </button>
        {showExpired && (
          <ul className="mt-4 grid sm:grid-cols-2 gap-y-1.5 text-sm text-[var(--color-text-muted)]">
            {expired.map((c) => (
              <li key={c.code} className="font-mono">
                <span className="text-[var(--color-text)] mr-2">{c.code}</span>
                <span className="text-xs">— last seen {c.last_seen_active}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function CodeCardMobile({
  code,
  userLevel,
}: {
  code: ActiveCode;
  userLevel: number | null;
}) {
  const eligible = userLevel === null ? true : eligibleForLevel(userLevel, code);
  return (
    <div className={"surface p-4 " + (!eligible ? "opacity-60" : "")}>
      <div className="flex items-center justify-between gap-3">
        <code className="font-mono text-[var(--color-accent)] text-base">{code.code}</code>
        <CopyCodeButton code={code.code} />
      </div>
      <p className="mt-2 text-xs text-[var(--color-text-muted)] leading-relaxed">{code.rewards}</p>
      <div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
        {code.min_level === null ? (
          <span className="text-xs text-[var(--color-text-muted)]">Any level</span>
        ) : (
          <span className={"badge " + (eligible ? "badge-fresh" : "badge-danger")}>
            Lv {code.min_level.toLocaleString()}
          </span>
        )}
        <VerificationBadge verifiedAt={code.verified_at} method={code.verification_method} />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-8 text-[var(--color-text-muted)]">
      <p className="font-semibold text-[var(--color-text)]">No codes match your filter.</p>
      <p className="text-sm mt-1">Try clearing the level filter or checking back after the next update.</p>
    </div>
  );
}
