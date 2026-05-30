import swordData from "@/data/sword-stats.json";

export type SwordStatKey = "damage" | "aoe" | "pvp" | "iframes" | "mobility" | "boss";

export interface SwordStats {
  tier: string;
  damage: number;
  aoe: number;
  pvp: number;
  iframes: number;
  mobility: number;
  boss: number;
  source: string;
  verdict: string;
}

export interface SwordStatsData {
  last_reviewed_at: string;
  scale_note: string;
  stat_labels: Record<SwordStatKey, string>;
  swords: Record<string, SwordStats>;
}

export const swordStats = swordData as SwordStatsData;

export const STAT_KEYS: SwordStatKey[] = ["damage", "aoe", "pvp", "iframes", "mobility", "boss"];

export function swordNames(): string[] {
  return Object.keys(swordStats.swords);
}

export function getSword(name: string): SwordStats | null {
  return swordStats.swords[name] ?? null;
}

export function slugifySword(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function swordTotal(s: SwordStats): number {
  return STAT_KEYS.reduce((sum, k) => sum + s[k], 0);
}

/**
 * Compare two swords across all stats. Returns per-stat winner + overall.
 */
export function compareSwords(aName: string, bName: string) {
  const a = getSword(aName);
  const b = getSword(bName);
  if (!a || !b) return null;

  const perStat = STAT_KEYS.map((key) => {
    const av = a[key];
    const bv = b[key];
    return {
      key,
      label: swordStats.stat_labels[key],
      a: av,
      b: bv,
      winner: av === bv ? "tie" : av > bv ? "a" : "b",
    };
  });

  const aTotal = swordTotal(a);
  const bTotal = swordTotal(b);
  const overall = aTotal === bTotal ? "tie" : aTotal > bTotal ? "a" : "b";

  return { a, b, aName, bName, perStat, aTotal, bTotal, overall };
}

/**
 * Curated high-search comparisons to pre-render for SEO. Each maps to
 * "is X better than Y" queries we already rank for (GSC pos 3-9).
 */
export const FEATURED_COMPARISONS: [string, string][] = [
  ["Sin of Pride", "Ice Queen"],
  ["True Manipulator", "Ice Queen"],
  ["Shadow Monarch", "Rimuru"],
  ["Rimuru", "Dragon Goddess"],
  ["Shadow Monarch", "True Manipulator"],
  ["Atomic", "Great Mage"],
];
