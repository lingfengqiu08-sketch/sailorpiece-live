import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { WIKI_GUIDES } from "@/lib/wiki-guides";

export const metadata = buildMetadata({
  title: "Sailor Piece Guides Hub - Codes, Leveling, Bosses & Builds",
  description:
    "All Sailor Piece guides in one hub: codes, leveling, bosses, boss keys, runes, accessories, specs, bloodlines, tier lists and build pages.",
  path: "/guides",
});

const CORE_GUIDES = [
  {
    href: "/codes",
    title: "Codes",
    text: "Active codes with level filter, copy-all button and real source timestamps.",
  },
  {
    href: "/leveling",
    title: WIKI_GUIDES.leveling.title,
    text: WIKI_GUIDES.leveling.metaDescription,
  },
  {
    href: "/tier-list",
    title: "Tier List",
    text: "Races, fruits, swords, clans, haki and traits ranked for the current meta.",
  },
  {
    href: "/guide",
    title: "Wiki Guide",
    text: "The broad starter guide for islands, fruits, haki, Sea 2 and official links.",
  },
];

const FARMING_GUIDES = [
  WIKI_GUIDES.bosses,
  WIKI_GUIDES["boss-keys"],
  WIKI_GUIDES.runes,
  WIKI_GUIDES.accessories,
  WIKI_GUIDES.specs,
  WIKI_GUIDES.bloodlines,
];

const BUILD_GUIDES = [
  { href: "/races", title: "Races", text: "Race rankings, reroll strategy and high-search race picks." },
  { href: "/fruits", title: "Fruits", text: "Best fruits for mobility, AoE farming and boss damage." },
  { href: "/swords", title: "Swords", text: "Sword picks for raids, bosses, PvP and late-game damage." },
  { href: "/clans", title: "Clans", text: "Clan synergy for damage, control, farming and PvP." },
  { href: "/haki", title: "Haki", text: "Armament, Observation and Conqueror unlock priority." },
  { href: "/traits", title: "Traits", text: "Passive traits for damage, survivability and endgame scaling." },
];

function GuideCard({ href, title, text }: { href: string; title: string; text: string }) {
  return (
    <Link
      href={href}
      className="surface p-4 hover:border-[var(--color-accent)] transition-colors !no-underline !text-[var(--color-text)]"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">{text}</p>
    </Link>
  );
}

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        path="/guides"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/guides" },
        ]}
        itemList={{
          name: "Sailor Piece Guides",
          items: [
            ...CORE_GUIDES.map((guide) => guide.title),
            ...FARMING_GUIDES.map((guide) => guide.title),
            ...BUILD_GUIDES.map((guide) => guide.title),
          ],
        }}
      />

      <header className="mb-8">
        <p className="inline-block badge badge-fresh mb-3">Guide hub</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sailor Piece Guides</h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          Start with codes and leveling, then move into bosses, keys, runes, accessories, specs,
          bloodlines and build-specific tier lists.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Start Here</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CORE_GUIDES.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Farming and Progression</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FARMING_GUIDES.map((guide) => (
            <GuideCard
              key={guide.path}
              href={guide.path}
              title={guide.title}
              text={guide.metaDescription}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Build Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {BUILD_GUIDES.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>
    </>
  );
}
