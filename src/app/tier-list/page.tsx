import Link from "next/link";
import { TierTabs } from "@/components/TierTabs";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { TAB_LABELS, TAB_ORDER, TIER_PAGE_PATHS, flattenItems, tierList } from "@/lib/tier-list";

export const metadata = buildMetadata({
  title: "Sailor Piece Tier List — Fruits, Races, Swords & Clans",
  description:
    "Ranked Sailor Piece tier lists for races, fruits, swords, clans, haki and traits, with best use, why ranked notes, and last-changed dates for May 2026.",
  path: "/tier-list",
});

const FAQS = [
  {
    q: "How is the Sailor Piece tier list decided?",
    a: tierList.ranking_method,
  },
  {
    q: "When was the Sailor Piece tier list last updated?",
    a: `The tier rankings on this page were last fully reviewed on ${tierList.last_reviewed_at} after the Huge Update patch. Each item also shows its individual last-changed date.`,
  },
  {
    q: "What is the best race in Sailor Piece?",
    a: "Leviathan, Kitsune and Servant top the S tier in May 2026. Luckborn is the best farming race, while SwordBlessed pairs with the top-tier swords.",
  },
  {
    q: "What is the best fruit in Sailor Piece?",
    a: "Light is the best devil fruit for mobility and ranged damage. Quake is the best AoE farming fruit. Both sit in S tier.",
  },
  {
    q: "What is the best sword in Sailor Piece?",
    a: "Shadow Monarch and Rimuru lead the S tier for raids and PvE. Dragon Goddess has the highest base damage when paired with the Dragon Queen title.",
  },
];

export default function TierListPage() {
  return (
    <>
      <JsonLd
        path="/tier-list"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Tier List", url: "/tier-list" },
        ]}
        faq={FAQS}
        itemList={{
          name: "Sailor Piece Tier List",
          items: [
            ...(tierList.tabs.races.S?.map((r) => `${r.name} (Race · S Tier)`) ?? []),
            ...(tierList.tabs.fruits.S?.map((r) => `${r.name} (Fruit · S Tier)`) ?? []),
            ...(tierList.tabs.swords.S?.map((r) => `${r.name} (Sword · S Tier)`) ?? []),
          ],
        }}
      />

      <header className="mb-6">
        <p className="inline-block badge badge-fresh mb-3">May 2026 meta</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Sailor Piece Tier List
        </h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          Tier rankings for every Sailor Piece system: races, devil fruits, swords, clans, haki and traits.
          Last reviewed on <strong className="text-[var(--color-text)]">{tierList.last_reviewed_at}</strong> after the Huge Update patch.
        </p>
      </header>

      <nav className="grid sm:grid-cols-3 gap-2 mb-8" aria-label="Tier list category pages">
        {TAB_ORDER.map((key) => (
          <Link
            key={key}
            href={TIER_PAGE_PATHS[key]}
            className="surface p-3 !no-underline !text-[var(--color-text-muted)] hover:!text-[var(--color-text)] hover:border-[var(--color-accent)] transition-colors"
          >
            <span className="font-semibold">{TAB_LABELS[key]}</span>
            <span className="block mt-1 text-xs">
              Open {flattenItems(tierList.tabs[key]).length} ranked entries
            </span>
          </Link>
        ))}
      </nav>

      <TierTabs defaultTab="races" />

      <section className="mt-12 surface p-6">
        <h2 className="text-xl font-bold mb-3">How rankings are decided</h2>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          {tierList.ranking_method}
        </p>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          Tier lists are opinionated by nature — what matters in PvP raids may differ from solo farming.
          Treat S+ as &ldquo;always strong&rdquo;, A as &ldquo;competitive&rdquo;, B-C as &ldquo;situational&rdquo;, and D as &ldquo;starter only&rdquo;.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={FAQS} />
      </section>

      <section className="mt-12 surface p-6">
        <h2 className="text-xl font-bold mb-3">Keep exploring</h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Stack your S-tier picks with the latest <Link href="/codes">Sailor Piece codes</Link>, then use the{" "}
          <Link href="/guide">guide hub</Link> for leveling, bosses, runes, accessories, specs and bloodlines.
        </p>
      </section>
    </>
  );
}
