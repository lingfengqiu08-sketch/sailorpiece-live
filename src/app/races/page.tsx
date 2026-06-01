import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/FAQ";
import { buildMetadata } from "@/lib/seo";
import { tierList, TIER_ORDER } from "@/lib/tier-list";

export const metadata = buildMetadata({
  title: "Sailor Piece Races Guide & Race Tier List",
  description:
    "Compare every Sailor Piece race including Shinigami, Shadowborn, SwordBlessed, Galevorn, Sunborn and Leviathan with tier rankings, best builds and reroll tips.",
  path: "/races",
});

const FEATURED = ["Shinigami", "Shadowborn", "SwordBlessed", "Galevorn", "Sunborn", "Leviathan", "Kitsune"];

const FAQS = [
  {
    q: "What is the best race in Sailor Piece?",
    a: "In May 2026, Leviathan, Kitsune and Servant lead the S tier for general use. SwordBlessed is the best race for sword mains, Luckborn for farming, and Sunborn for burst damage.",
  },
  {
    q: "How do I get a specific race in Sailor Piece?",
    a: "Races are rolled at character creation and re-rolled with Race Rerolls. Race Rerolls drop from milestone codes, raid rewards and the Anti-Magic event chest.",
  },
  {
    q: "Can I reroll my race in Sailor Piece?",
    a: "Yes. Open the Race menu, spend Race Reroll tokens (available from codes and events), and re-spin. Rarer S tier races have lower roll rates — stockpile rerolls before spending.",
  },
  {
    q: "Is Shinigami good in Sailor Piece?",
    a: "Shinigami sits in A tier in May 2026. It is a competitive choice for sword and reaper builds, especially when paired with Shadow Monarch or Ichigo swords.",
  },
  {
    q: "Is Shadowborn worth rerolling for?",
    a: "Shadowborn is solid in A tier. It scales well for stealth and damage builds, but S tier races (Leviathan, Kitsune, Servant, Slime, SwordBlessed) outperform it in raids.",
  },
];

export default function RacesPage() {
  const racesTab = tierList.tabs.races;

  // Build a quick name -> tier lookup
  const tierLookup: Record<string, string> = {};
  for (const tier of TIER_ORDER) {
    const items = racesTab[tier];
    if (!items) continue;
    for (const item of items) tierLookup[item.name] = tier;
  }
  // And a name -> item lookup
  const itemLookup = new Map<string, { tier: string; best_use: string; why_ranked: string }>();
  for (const tier of TIER_ORDER) {
    for (const item of racesTab[tier] ?? []) {
      itemLookup.set(item.name, { tier, best_use: item.best_use, why_ranked: item.why_ranked });
    }
  }

  return (
    <>
      <JsonLd
        path="/races"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/guide" },
          { name: "Races", url: "/races" },
        ]}
        faq={FAQS}
        itemList={{
          name: "Sailor Piece Races",
          items: Object.keys(tierLookup),
        }}
      />

      <header className="mb-6">
        <p className="inline-block badge badge-fresh mb-3">May 2026 meta</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sailor Piece Races Guide</h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          Sailor Piece has 23 playable races, from common Human picks to ultra-rare Leviathan and Kitsune.
          This guide ranks them, breaks down the most-searched picks, and explains how rerolls work.
        </p>
      </header>

      {/* Race tier list section */}
      <section id="race-tier-list" className="surface p-5 mb-10">
        <h2 className="text-xl font-bold mb-3">Sailor Piece Race Tier List</h2>
        <p className="text-sm text-[var(--color-text-muted)] mb-5">
          Last reviewed {tierList.last_reviewed_at}. Full breakdown on the <Link href="/races">tier list page</Link>.
        </p>
        <div className="space-y-3">
          {TIER_ORDER.map((tier) => {
            const items = racesTab[tier];
            if (!items || items.length === 0) return null;
            return (
              <div key={tier} className="flex flex-wrap items-center gap-2">
                <span className={`tier-${tier} rounded-md px-2.5 py-0.5 text-xs font-bold tracking-wide`}>
                  {tier}
                </span>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {items.map((i) => i.name).join(", ")}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured races (high-search long-tail entities) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Best Sailor Piece Races</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURED.map((name) => {
            const item = itemLookup.get(name);
            if (!item) return null;
            const slug = name.toLowerCase().replace(/\s+/g, "-");
            return (
              <article
                key={name}
                id={slug}
                className="surface p-5 scroll-mt-20"
              >
                <header className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <span className={`tier-${item.tier} rounded-md px-2 py-0.5 text-xs font-bold`}>
                    {item.tier} Tier
                  </span>
                </header>
                <p className="text-xs text-[var(--color-accent)] mb-2 uppercase tracking-wide">
                  Best for: {item.best_use}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.why_ranked}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* How to reroll */}
      <section className="mb-10 surface p-6">
        <h2 className="text-xl font-bold mb-3">How to Get or Reroll Races</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--color-text-muted)]">
          <li><strong className="text-[var(--color-text)]">Get Race Rerolls.</strong> Redeem milestone <Link href="/codes">codes</Link> like RAIDS or HUGEUPDATEWWW for 50-85 Race Rerolls each.</li>
          <li><strong className="text-[var(--color-text)]">Open the Race menu</strong> from the in-game menu.</li>
          <li><strong className="text-[var(--color-text)]">Spend a Race Reroll token</strong> to spin a new race.</li>
          <li><strong className="text-[var(--color-text)]">Keep or reroll.</strong> S tier races (Leviathan, Kitsune, Servant) have lower drop rates — stockpile rerolls before spending.</li>
        </ol>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          Tip: pair your race with the best <Link href="/swords">sword</Link> and <Link href="/clans">clan</Link> for your build before reroll-locking.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={FAQS} />
      </section>
    </>
  );
}
