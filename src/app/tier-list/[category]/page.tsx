import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { TierRows } from "@/components/TierRows";
import { buildMetadata } from "@/lib/seo";
import {
  TAB_LABELS,
  TAB_ORDER,
  TIER_PAGE_PATHS,
  flattenItems,
  getTab,
  isTabKey,
  tierList,
  type TabKey,
} from "@/lib/tier-list";

type Props = {
  params: Promise<{ category: string }>;
};

const CATEGORY_COPY: Record<TabKey, { singular: string; plural: string; intro: string }> = {
  races: {
    singular: "Race",
    plural: "races",
    intro:
      "Compare every Sailor Piece race by endgame strength, farming value, PvP utility, and how well it pairs with current swords and clans.",
  },
  fruits: {
    singular: "Fruit",
    plural: "devil fruits",
    intro:
      "Rank every Sailor Piece devil fruit by mobility, AoE clear, boss damage, and how useful it feels while leveling through Sea 1 and Sea 2.",
  },
  swords: {
    singular: "Sword",
    plural: "swords",
    intro:
      "Use this Sailor Piece sword tier list to pick endgame DPS, raid, PvP, and starter weapon options without rerolling blindly.",
  },
  clans: {
    singular: "Clan",
    plural: "clans",
    intro:
      "Compare Sailor Piece clans by damage scaling, PvP control, raid value, and current Huge Update source consensus.",
  },
  haki: {
    singular: "Haki",
    plural: "haki colors",
    intro:
      "Rank Sailor Piece haki options by PvP pressure, boss defense, dodge utility, and general progression usefulness.",
  },
  traits: {
    singular: "Trait",
    plural: "traits",
    intro:
      "Compare Sailor Piece traits by raw stat value, survivability, burst windows, speed, and endgame scaling.",
  },
};

export function generateStaticParams() {
  return TAB_ORDER.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  if (!isTabKey(category)) {
    return buildMetadata({
      title: "Sailor Piece Tier List",
      description: "Sailor Piece tier list rankings for races, fruits, swords, clans, haki and traits.",
      path: "/tier-list",
    });
  }

  const copy = CATEGORY_COPY[category];
  return buildMetadata({
    title: `Sailor Piece ${copy.singular} Tier List — Best ${TAB_LABELS[category]} Ranked`,
    description: `${copy.intro} Last reviewed ${tierList.last_reviewed_at}.`,
    path: TIER_PAGE_PATHS[category],
  });
}

export default async function TierCategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isTabKey(category)) notFound();

  const tab = getTab(category);
  if (!tab) notFound();

  const copy = CATEGORY_COPY[category];
  const flatItems = flattenItems(tab);
  const topItems = tab.S?.slice(0, 3).map((item) => item.name) ?? [];
  const faq = [
    {
      q: `What are the best Sailor Piece ${copy.plural}?`,
      a:
        topItems.length > 0
          ? `${topItems.join(", ")} currently lead the S tier for ${TAB_LABELS[category].toLowerCase()}.`
          : `The ${TAB_LABELS[category].toLowerCase()} tier list is still being reviewed.`,
    },
    {
      q: `How is the Sailor Piece ${copy.singular.toLowerCase()} tier list ranked?`,
      a: tierList.ranking_method,
    },
    {
      q: `When was this ${copy.singular.toLowerCase()} tier list last reviewed?`,
      a: `This page was last reviewed on ${tierList.last_reviewed_at}. Individual entries keep their own last-changed dates.`,
    },
  ];

  return (
    <>
      <JsonLd
        path={TIER_PAGE_PATHS[category]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Tier List", url: "/tier-list" },
          { name: `${TAB_LABELS[category]} Tier List`, url: TIER_PAGE_PATHS[category] },
        ]}
        faq={faq}
        itemList={{
          name: `Sailor Piece ${TAB_LABELS[category]} Tier List`,
          items: flatItems.map(({ tier, item }) => `${item.name} (${tier} Tier)`),
        }}
      />

      <header className="mb-6">
        <p className="inline-block badge badge-fresh mb-3">Reviewed {tierList.last_reviewed_at}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Sailor Piece {copy.singular} Tier List
        </h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          {copy.intro} Top picks:{" "}
          <strong className="text-[var(--color-text)]">
            {topItems.length > 0 ? topItems.join(", ") : "review pending"}
          </strong>.
        </p>
      </header>

      <nav className="grid sm:grid-cols-3 gap-2 mb-8" aria-label="Tier list categories">
        {TAB_ORDER.map((key) => (
          <Link
            key={key}
            href={TIER_PAGE_PATHS[key]}
            className={
              "surface p-3 !no-underline transition-colors " +
              (key === category
                ? "border-[var(--color-accent)] !text-[var(--color-text)]"
                : "!text-[var(--color-text-muted)] hover:!text-[var(--color-text)] hover:border-[var(--color-accent)]")
            }
          >
            <span className="font-semibold">{TAB_LABELS[key]}</span>
            <span className="block mt-1 text-xs">
              {flattenItems(tierList.tabs[key]).length} ranked entries
            </span>
          </Link>
        ))}
      </nav>

      <TierRows tab={tab} />

      <section className="mt-12 surface p-6">
        <h2 className="text-xl font-bold mb-3">How to use this tier list</h2>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          S tier means the pick is strong across the current meta. A tier is competitive with the right build.
          B and C are situational, while D is mainly for starter or reroll scenarios.
        </p>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          Before changing your build, redeem the latest <Link href="/codes">Sailor Piece codes</Link> and compare other{" "}
          <Link href="/tier-list">tier list categories</Link>.
        </p>
      </section>
    </>
  );
}
