import Link from "next/link";
import { notFound } from "next/navigation";
import { CodesInlineWidget } from "@/components/CodesInlineWidget";
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
      "Use this Sailor Piece sword tier list to pick the current best sword for endgame DPS, bosses, raids, PvP, iframe safety and starter progression without rerolling blindly.",
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

const SWORD_GOAL_ROWS = [
  ["Best current sword", "Shadow Monarch", "Safest all-around S-tier pick for damage, AoE and endgame routes.", "Keep if you have it; build around damage traits and runes."],
  ["Boss farming", "Rimuru, Shadow Monarch, Sin of Pride", "Sustained DPS and uptime matter more than narrow PvP control.", "Use damage runes until boss clears are fast."],
  ["PvP control", "True Manipulator, Abyssal Empress, Ice Queen", "Control, iframes and disruption matter more than raw damage.", "Pair with PvP clans and mobility support."],
  ["AoE and raids", "Shadow Monarch, Atomic, Great Mage", "Wide attacks and short cooldowns clear waves faster.", "Use when raid or dungeon density is the bottleneck."],
  ["Highest raw damage", "Dragon Goddess", "Strong base damage when the rest of the setup supports it.", "Best after your race, title and passive support are stable."],
  ["Mid-game bridge", "Ragna, Shadow, Ichigo, Aizen", "Strong enough to progress while you save resources for S tier.", "Do not reroll a stable A-tier sword too early."],
];

const SWORD_IFRAME_ROWS = [
  ["Iframes", "Short invulnerability windows during a move or animation.", "They let a sword survive boss hits, PvP burst or dangerous raid moments."],
  ["Why they matter", "A sword with iframes can feel stronger than a higher-damage sword in hard content.", "This is why Shadow Monarch and True Manipulator stay valuable outside pure DPS tests."],
  ["How to judge them", "Do not judge only by damage numbers.", "Test whether the sword lets you keep attacking without dying or losing uptime."],
];

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
  if (category === "swords") {
    return buildMetadata({
      title: "Sailor Piece Sword Tier List - Best Swords, Iframes & PvP",
      description:
        "Current Sailor Piece sword tier list with best swords for bosses, PvP, raids, iframes, AoE and progression, including Shadow Monarch, Rimuru and True Manipulator.",
      path: TIER_PAGE_PATHS[category],
    });
  }

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
    ...(category === "swords"
      ? [
          {
            q: "What is the current best sword in Sailor Piece?",
            a: "Shadow Monarch is the safest current best sword overall because it combines S-tier damage, AoE and iframe value. Rimuru is the best boss-melt alternative.",
          },
          {
            q: "What are iframes in Sailor Piece swords?",
            a: "Iframes are short invulnerability windows during a move or animation. They matter because they help you survive boss hits, PvP burst and raid damage while keeping uptime.",
          },
          {
            q: "Which Sailor Piece sword is best for PvP?",
            a: "True Manipulator is the clearest PvP control pick, with Abyssal Empress and Ice Queen also strong when you need control, slows or disruption.",
          },
        ]
      : []),
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

      <CodesInlineWidget context={`before rerolling ${copy.plural}`} />

      <TierRows tab={tab} />

      {category === "swords" && (
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
            <h2 className="text-2xl font-bold mb-3">What Are Iframes in Sailor Piece?</h2>
            <p className="mb-4 text-[var(--color-text-muted)] leading-relaxed">
              Some searches ask about iframes because the strongest swords are not judged only by
              damage. Iframes can make a sword safer for bosses, PvP and raids.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {SWORD_IFRAME_ROWS.map(([title, text, note]) => (
                <article key={title} className="surface p-5">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{text}</p>
                  <p className="mt-3 text-xs text-[var(--color-text-muted)] leading-relaxed">{note}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 surface p-6">
            <h2 className="text-xl font-bold mb-3">Next Sword Build Steps</h2>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              After choosing a sword, compare the broader <Link href="/swords">Sailor Piece swords guide</Link>,
              then tune your <Link href="/races">race</Link>, <Link href="/clans">clan</Link>,{" "}
              <Link href="/traits">trait</Link> and <Link href="/runes">rune</Link> around the activity
              you are farming.
            </p>
          </section>
        </>
      )}

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
