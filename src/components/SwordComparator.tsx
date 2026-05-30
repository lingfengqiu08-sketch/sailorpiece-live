"use client";

import { useMemo, useState } from "react";
import {
  STAT_KEYS,
  compareSwords,
  swordNames,
  swordStats,
} from "@/lib/sword-stats";
import { trackEvent } from "@/lib/analytics";

const ALL_NAMES = swordNames();

function StatBar({ value, highlight }: { value: number; highlight: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 rounded-full bg-[var(--color-surface-2)] overflow-hidden">
        <div
          className={
            "h-full rounded-full " +
            (highlight ? "bg-[var(--color-accent)]" : "bg-[var(--color-text-muted)]")
          }
          style={{ width: `${value * 10}%` }}
        />
      </div>
      <span
        className={
          "text-xs font-mono w-6 text-right " +
          (highlight ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-text-muted)]")
        }
      >
        {value}
      </span>
    </div>
  );
}

export function SwordComparator({
  defaultA = "Sin of Pride",
  defaultB = "Ice Queen",
}: {
  defaultA?: string;
  defaultB?: string;
}) {
  const [aName, setAName] = useState(defaultA);
  const [bName, setBName] = useState(defaultB);

  const result = useMemo(() => compareSwords(aName, bName), [aName, bName]);

  function onPick(side: "a" | "b", value: string) {
    if (side === "a") setAName(value);
    else setBName(value);
    trackEvent("sword_compare", { sword_a: side === "a" ? value : aName, sword_b: side === "b" ? value : bName });
  }

  if (!result) {
    return (
      <div className="surface p-6 text-[var(--color-text-muted)]">
        Select two swords to compare.
      </div>
    );
  }

  const { a, b, perStat, aTotal, bTotal, overall } = result;
  const winnerName = overall === "a" ? aName : overall === "b" ? bName : null;

  return (
    <div className="surface p-5 sm:p-6">
      {/* Pickers */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-6">
        <select
          aria-label="First sword"
          value={aName}
          onChange={(e) => onPick("a", e.target.value)}
          className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-accent)]"
        >
          {ALL_NAMES.map((n) => (
            <option key={n} value={n} disabled={n === bName}>
              {n}
            </option>
          ))}
        </select>
        <span className="text-sm font-bold text-[var(--color-text-muted)]">vs</span>
        <select
          aria-label="Second sword"
          value={bName}
          onChange={(e) => onPick("b", e.target.value)}
          className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-accent)]"
        >
          {ALL_NAMES.map((n) => (
            <option key={n} value={n} disabled={n === aName}>
              {n}
            </option>
          ))}
        </select>
      </div>

      {/* Headers with tier */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-4">
        <div className="text-center">
          <div className="font-bold">{aName}</div>
          <span className={`tier-${a.tier} inline-block mt-1 rounded px-2 py-0.5 text-xs font-bold`}>
            {a.tier} Tier
          </span>
        </div>
        <div />
        <div className="text-center">
          <div className="font-bold">{bName}</div>
          <span className={`tier-${b.tier} inline-block mt-1 rounded px-2 py-0.5 text-xs font-bold`}>
            {b.tier} Tier
          </span>
        </div>
      </div>

      {/* Per-stat bars */}
      <div className="space-y-3">
        {perStat.map((stat) => (
          <div key={stat.key} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="flex flex-row-reverse">
              <div className="w-full max-w-[180px] scale-x-[-1]">
                <StatBar value={stat.a} highlight={stat.winner === "a"} />
              </div>
            </div>
            <div className="text-[10px] uppercase tracking-wide text-[var(--color-text-muted)] w-20 text-center">
              {stat.label}
            </div>
            <div>
              <div className="w-full max-w-[180px]">
                <StatBar value={stat.b} highlight={stat.winner === "b"} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-5 pt-4 border-t border-[var(--color-border)]">
        <div className={"text-center font-bold " + (overall === "a" ? "text-[var(--color-accent)]" : "")}>
          {aTotal}
        </div>
        <div className="text-[10px] uppercase tracking-wide text-[var(--color-text-muted)] w-20 text-center">
          Total
        </div>
        <div className={"text-center font-bold " + (overall === "b" ? "text-[var(--color-accent)]" : "")}>
          {bTotal}
        </div>
      </div>

      {/* Verdict */}
      <div className="mt-5 surface-2 p-4">
        {winnerName ? (
          <p className="text-sm">
            <strong className="text-[var(--color-accent)]">{winnerName}</strong> wins overall
            ({Math.max(aTotal, bTotal)} vs {Math.min(aTotal, bTotal)}).
          </p>
        ) : (
          <p className="text-sm">
            <strong className="text-[var(--color-accent)]">It&apos;s a tie</strong> on total score — pick based on the stat you need most.
          </p>
        )}
        <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed">
          <strong className="text-[var(--color-text)]">{aName}:</strong> {a.verdict}
        </p>
        <p className="text-xs text-[var(--color-text-muted)] mt-1.5 leading-relaxed">
          <strong className="text-[var(--color-text)]">{bName}:</strong> {b.verdict}
        </p>
      </div>

      <p className="mt-4 text-xs text-[var(--color-text-muted)]">{swordStats.scale_note}</p>
    </div>
  );
}
