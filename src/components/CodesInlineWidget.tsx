import Link from "next/link";
import { activeCodes, codes as codesData } from "@/lib/codes";
import { formatDate } from "@/lib/date";
import { CopyCodeButton } from "./CopyCodeButton";

/**
 * Inline "active codes today" widget for cross-page injection.
 *
 * Designed for pages that already rank for non-codes intent (Trello, Swords,
 * Clans, Tier List, Races, Runes). Shows the freshest 3 active codes with
 * copy buttons. This gives users an immediate conversion path without
 * leaving the page, and strengthens internal linking to /codes.
 *
 * Visual: compact card, distinct from main page hero, clear "View all" CTA.
 */
export function CodesInlineWidget({
  context,
  limit = 3,
}: {
  /**
   * Short context phrase shown in the headline — e.g. "before opening Trello".
   * Used to make the widget feel contextual rather than generic.
   */
  context?: string;
  limit?: number;
}) {
  const list = activeCodes().slice(0, limit);
  const lastChecked = formatDate(codesData.last_checked_at);

  if (list.length === 0) return null;

  return (
    <aside
      aria-label="Latest verified Sailor Piece codes"
      className="surface p-5 mb-10 border-l-4 border-l-[var(--color-accent)]"
    >
      <header className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg font-bold leading-tight">
            Copy verified Sailor Piece codes{context ? ` ${context}` : ""}
          </h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            Source-checked {lastChecked} · {activeCodes().length} active total
          </p>
        </div>
        <Link href="/codes" className="text-sm font-semibold">
          View all codes →
        </Link>
      </header>

      <ul className="space-y-2">
        {list.map((c) => (
          <li
            key={c.code}
            className="flex items-center justify-between gap-3 surface-2 p-3"
          >
            <div className="min-w-0 flex-1">
              <code className="font-mono text-[var(--color-accent)] text-sm">
                {c.code}
              </code>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5 truncate">
                {c.rewards}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {c.min_level !== null && (
                <span className="badge badge-fresh whitespace-nowrap">
                  Lv {c.min_level.toLocaleString()}+
                </span>
              )}
              <CopyCodeButton code={c.code} />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-[var(--color-text-muted)]">
        Use the <Link href="/codes">level eligibility filter</Link> on the codes page to
        copy only the codes your account can actually redeem.
      </p>
    </aside>
  );
}
