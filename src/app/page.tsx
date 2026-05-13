import Link from "next/link";
import { activeCodes } from "@/lib/codes";
import { CopyCodeButton } from "@/components/CopyCodeButton";
import { VerificationBadge } from "@/components/VerificationBadge";
import { OfficialLinks } from "@/components/OfficialLinks";
import { UpdateTimeline } from "@/components/UpdateTimeline";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { tierList } from "@/lib/tier-list";

export const metadata = buildMetadata({
  title: "Sailor Piece Codes, Wiki, Tier List & Official Links",
  description:
    "Active Sailor Piece codes, race / fruit / sword tier lists, wiki guide basics, Trello, Discord, Roblox game links and the latest update notes.",
  path: "/",
});

const FAQS = [
  {
    q: "What is Sailor Piece?",
    a: "Sailor Piece is a Roblox anime RPG by Shadowrise Devs, released on November 17, 2025. Players sail across multiple seas, collect devil fruits, train haki, reroll races and clans, and progress through the Sea 2 expansion with a level cap of 16,000.",
  },
  {
    q: "Where do I get the latest Sailor Piece codes?",
    a: "New codes drop in the official Discord and are usually mirrored on Trello within hours. We re-check sources at least every 48 hours and timestamp every code below.",
  },
  {
    q: "How often are new Sailor Piece codes released?",
    a: "Roughly once per major update, raid event, or milestone (visits, likes, followers). Older codes can expire within hours of a new patch, so always redeem fresh codes first.",
  },
  {
    q: "Do Sailor Piece codes have level requirements?",
    a: "Some do. For example ANTIMAGICUPDATE requires level 8,500. Use the level filter on the codes page to see only codes you can redeem.",
  },
  {
    q: "Is this the official Sailor Piece wiki?",
    a: "No. This site is community-run and not affiliated with Shadowrise Devs or Roblox Corporation. Always cross-check codes with the official Discord before redeeming.",
  },
];

export default function Home() {
  const codes = activeCodes().slice(0, 5);
  const races = tierList.tabs.races.S ?? [];

  return (
    <>
      <JsonLd
        path="/"
        breadcrumbs={[{ name: "Home", url: "/" }]}
        faq={FAQS}
      />

      <section className="text-center sm:text-left">
        <p className="inline-block badge badge-fresh mb-4">May 2026 · checked today</p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
          Sailor Piece <span className="text-[var(--color-accent)]">Codes</span>, Wiki &amp; Tier List
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl">
          Active rewards checked with real source timestamps. Find codes by your level.
          Compare races, fruits, swords and clans. Jump to Trello, Discord or the Roblox game.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
          <Link href="/codes" className="btn-primary">View all codes →</Link>
          <Link href="/tier-list" className="btn-ghost">Open tier list</Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">Latest Sailor Piece Codes</h2>
          <Link href="/codes" className="text-sm">See all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {codes.map((c) => (
            <article key={c.code} className="surface p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <code className="font-mono text-[var(--color-accent)] text-base">{c.code}</code>
                <CopyCodeButton code={c.code} />
              </div>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">
                {c.rewards}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                {c.min_level === null ? (
                  <span className="text-xs text-[var(--color-text-muted)]">Any level</span>
                ) : (
                  <span className="badge badge-fresh">Lv {c.min_level.toLocaleString()}</span>
                )}
                <VerificationBadge verifiedAt={c.verified_at} method={c.verification_method} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">Sailor Piece Tier Lists</h2>
          <Link href="/tier-list" className="text-sm">Full tier list →</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link href="/tier-list#races" className="surface p-4 hover:border-[var(--color-accent)] transition-colors !no-underline !text-[var(--color-text)]">
            <h3 className="font-semibold">Race Tier List</h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">23 races ranked S → D</p>
            <p className="mt-3 text-sm text-[var(--color-accent)]">
              Top S: {races.slice(0, 3).map(r => r.name).join(" · ")}
            </p>
          </Link>
          <Link href="/tier-list#fruits" className="surface p-4 hover:border-[var(--color-accent)] transition-colors !no-underline !text-[var(--color-text)]">
            <h3 className="font-semibold">Fruit Tier List</h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">All devil fruits ranked</p>
            <p className="mt-3 text-sm text-[var(--color-accent)]">Top S: Light · Quake</p>
          </Link>
          <Link href="/tier-list#swords" className="surface p-4 hover:border-[var(--color-accent)] transition-colors !no-underline !text-[var(--color-text)]">
            <h3 className="font-semibold">Sword Tier List</h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">19 swords ranked</p>
            <p className="mt-3 text-sm text-[var(--color-accent)]">Top S: Shadow Monarch · Rimuru</p>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">What is Sailor Piece?</h2>
        <div className="surface p-6 leading-relaxed text-[var(--color-text-muted)]">
          <p>
            <strong className="text-[var(--color-text)]">Sailor Piece</strong> is a Roblox anime RPG inspired by pirate adventure progression and crossover combat styles. Released by Shadowrise Devs on November 17, 2025, the game features:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mt-4 list-disc list-inside">
            <li>30+ devil fruits across multiple rarity tiers</li>
            <li>18+ islands forming the Sea 1 and Sea 2 maps</li>
            <li>Level cap of 6,250 (Sea 1) → 16,000 (Sea 2)</li>
            <li>Races, clans, bloodlines, traits and haki colors</li>
            <li>World bosses, raid keys and the Anti-Magic system</li>
            <li>Active live-ops with weekly milestone codes</li>
          </ul>
          <p className="mt-4 text-sm">
            New to the game? Start with our <Link href="/guide">Sailor Piece guide</Link>, then redeem fresh <Link href="/codes">codes</Link> and pick a strong <Link href="/races">race</Link>.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Official Links</h2>
        <OfficialLinks />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Latest Sailor Piece Updates</h2>
        <UpdateTimeline limit={5} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <FAQ items={FAQS} />
      </section>
    </>
  );
}
