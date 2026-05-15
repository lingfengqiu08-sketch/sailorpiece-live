import tierData from "@/data/tier-list.json";

export type TierLetter = "S" | "A" | "B" | "C" | "D";

export interface TierItem {
  name: string;
  best_use: string;
  why_ranked: string;
  last_changed: string;
}

export type TierTab = {
  name: string;
} & Partial<Record<TierLetter, TierItem[]>>;

export interface TierListData {
  last_reviewed_at: string;
  ranking_method: string;
  tabs: Record<string, TierTab>;
}

export const tierList = tierData as TierListData;

export const TAB_ORDER = ["races", "fruits", "swords", "clans", "haki", "traits"] as const;
export type TabKey = (typeof TAB_ORDER)[number];

export const TIER_ORDER: TierLetter[] = ["S", "A", "B", "C", "D"];

export const TAB_LABELS: Record<TabKey, string> = {
  races: "Races",
  fruits: "Fruits",
  swords: "Swords",
  clans: "Clans",
  haki: "Haki",
  traits: "Traits",
};

export const TIER_PAGE_PATHS: Record<TabKey, string> = {
  races: "/tier-list/races",
  fruits: "/tier-list/fruits",
  swords: "/tier-list/swords",
  clans: "/tier-list/clans",
  haki: "/tier-list/haki",
  traits: "/tier-list/traits",
};

export const CATEGORY_PAGE_PATHS: Record<TabKey, string> = {
  races: "/races",
  fruits: "/fruits",
  swords: "/swords",
  clans: "/clans",
  haki: "/haki",
  traits: "/traits",
};

export function isTabKey(value: string): value is TabKey {
  return (TAB_ORDER as readonly string[]).includes(value);
}

export function getTab(key: TabKey): TierTab | null {
  return tierList.tabs[key] ?? null;
}

export function flattenItems(tab: TierTab): { tier: TierLetter; item: TierItem }[] {
  const out: { tier: TierLetter; item: TierItem }[] = [];
  for (const tier of TIER_ORDER) {
    const items = tab[tier];
    if (!items) continue;
    for (const item of items) {
      out.push({ tier, item });
    }
  }
  return out;
}
