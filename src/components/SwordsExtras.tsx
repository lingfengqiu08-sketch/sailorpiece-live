import Link from "next/link";
import { SwordComparator } from "@/components/SwordComparator";
import { FEATURED_COMPARISONS, compareSwords } from "@/lib/sword-stats";

const SWORD_GOAL_ROWS = [
  ["Best current sword", "Shadow Monarch", "Safest all-around S-tier pick for damage, AoE and endgame routes.", "Keep if you have it; build around damage traits and runes."],
  ["Boss farming", "Rimuru, Shadow Monarch, Sin of Pride", "Sustained DPS and uptime matter more than narrow PvP control.", "Use damage runes until boss clears are fast."],
  ["PvP control", "True Manipulator, Abyssal Empress, Ice Queen", "Control, iframes and disruption matter more than raw damage.", "Pair with PvP clans and mobility support."],
  ["AoE and raids", "Shadow Monarch, Atomic, Great Mage", "Wide attacks and short cooldowns clear waves faster.", "Use when raid or dungeon density is the bottleneck."],
  ["Highest raw damage", "Dragon Goddess", "Strong base damage when the rest of the setup supports it.", "Best after your race, title and passive support are stable."],
  ["Mid-game bridge", "Ragna, Shadow, Ichigo, Aizen", "Strong enough to progress while you save resources for S tier.", "Do not reroll a stable A-tier sword too early."],
];

/**
 * Sword-specific deep-dive content: best-by-goal table, iframes explainer,
 * interactive comparator, and pre-rendered popular comparisons.
 *
 * Lives on /swords (the canonical sword authority page). The interactive
 * comparator targets the "is X better than Y" long-tail cluster that
 * already ranks pos 3-9 in GSC.
 */
export function SwordsExtras() {
  return (
    <>
      <section className="mt-12" id="best-sword-by-goal">
        <h2 className="text-2xl font-bold mb-3">Best Sailor Piece Sword by Goal</h2>
        <p className="mb-4 text-[var(--color-text-muted)] leading-relaxed">
          Use this table before rerolling or farming. The current best sword depends on whether
          you need boss damage, PvP control, iframe safety, AoE clear or a stable mid-game bridge.
        </p>
        <div className="surface overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-[var(--color-surface-2)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Goal</th>
                <th className="px-4 py-3 font-semibold">Best sword</th>
                <th className="px-4 py-3 font-semibold">Why</th>
                <th className="px-4 py-3 font-semibold">Build note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {SWORD_GOAL_ROWS.map(([goal, sword, why, note]) => (
                <tr key={goal} className="align-top">
                  <td className="px-4 py-3 font-semibold">{goal}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)]">{sword}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{why}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12" id="iframes">
        <h2 className="text-2xl font-bold mb-3">Iframes Matter as Much as Damage</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          The strongest swords are not judged on damage alone. Iframes — short invincibility
          windows during a move — let a sword survive boss hits, PvP burst and raid damage, which
          is why Shadow Monarch and True Manipulator stay valuable beyond pure DPS. The iframe
          score is built into every sword&apos;s rating in the tier list above.
        </p>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          New to the mechanic? Read the full{" "}
          <Link href="/iframes">what are iframes in Sailor Piece</Link> guide for the meaning,
          timing tips and the best iframe swords ranked.
        </p>
      </section>

      <section className="mt-12" id="compare">
        <h2 className="text-2xl font-bold mb-3">Sailor Piece Sword Comparison Tool</h2>
        <p className="mb-4 text-[var(--color-text-muted)] leading-relaxed">
          Not sure which sword is better? Pick any two swords to compare their damage, AoE,
          PvP control, iframe safety, mobility and boss-farming scores side by side. Scores
          are directional ratings from current public source consensus, not exact in-game DPS.
        </p>
        <SwordComparator defaultA="Sin of Pride" defaultB="Ice Queen" />
      </section>

      <section className="mt-12" id="popular-comparisons">
        <h2 className="text-2xl font-bold mb-3">Popular Sailor Piece Sword Comparisons</h2>
        <p className="mb-4 text-[var(--color-text-muted)] leading-relaxed">
          The most-asked &quot;is X better than Y&quot; questions, answered with the same
          scoring used in the tool above.
        </p>
        <div className="space-y-4">
          {FEATURED_COMPARISONS.map(([aName, bName]) => {
            const cmp = compareSwords(aName, bName);
            if (!cmp) return null;
            const winner = cmp.overall === "a" ? aName : cmp.overall === "b" ? bName : null;
            const winnerSword = cmp.overall === "a" ? cmp.a : cmp.b;
            return (
              <article key={`${aName}-${bName}`} className="surface p-5">
                <h3 className="font-semibold">
                  Is {aName} better than {bName} in Sailor Piece?
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {winner ? (
                    <>
                      <strong className="text-[var(--color-accent)]">{winner}</strong> scores higher
                      overall ({Math.max(cmp.aTotal, cmp.bTotal)} vs {Math.min(cmp.aTotal, cmp.bTotal)}).{" "}
                      {winnerSword.verdict}
                    </>
                  ) : (
                    <>
                      {aName} and {bName} tie on total score ({cmp.aTotal} each) — choose based on
                      whether you need {cmp.a.verdict}
                    </>
                  )}
                </p>
                <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                  {aName}: {cmp.a.tier} tier · {bName}: {cmp.b.tier} tier
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
