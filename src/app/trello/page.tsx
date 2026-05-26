import Link from "next/link";
import siteLinks from "@/data/site-links.json";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { OfficialLinks } from "@/components/OfficialLinks";
import { buildMetadata } from "@/lib/seo";
import { codes } from "@/lib/codes";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Sailor Piece Trello - Official Link, Discord & Codes",
  description:
    "Official Sailor Piece Trello link with notes on Discord, Roblox, codes, patch notes, update tracking, safe links and which source to check first.",
  path: "/trello",
});

const trelloLink = siteLinks.official.find((link) => link.icon === "trello") ?? siteLinks.official[2];

const FAQS = [
  {
    q: "What is the official Sailor Piece Trello?",
    a: "The official Sailor Piece Trello is the public board for game systems, update notes and progression references from the Sailor Piece team.",
  },
  {
    q: "Does the Sailor Piece Trello have codes?",
    a: "Trello is better for systems and update references. For fresh codes, check the official Discord first, then use the codes page here for source-checked active and expired codes.",
  },
  {
    q: "Is this the official Sailor Piece Trello website?",
    a: "No. This is a community guide page that links to the official Trello, Discord and Roblox game page. It is not affiliated with Shadowrise Devs or Roblox Corporation.",
  },
  {
    q: "How do I avoid fake Sailor Piece Trello links?",
    a: "Avoid shortened links and comment-section invites. Use this page or the official links page, and never enter your Roblox password on a third-party page.",
  },
  {
    q: "Should I use Trello or Discord for new updates?",
    a: "Use Discord for fast announcements and code drops. Use Trello when you need slower reference information about systems, bosses, specs, progression or updates.",
  },
];

const HOW_TO = {
  name: "How to use the official Sailor Piece Trello safely",
  steps: [
    "Open the verified Sailor Piece Trello link from this page.",
    "Use Trello for game systems, update notes, mechanics and progression references.",
    "Check the official Discord when you need brand-new code drops or live maintenance notices.",
    "Use the Sailor Piece codes page to verify active and expired codes before redeeming.",
    "Avoid shortened links, fake invites and any page asking for your Roblox password.",
  ],
};

const SOURCE_ROWS = [
  ["Official Trello", "Systems, update notes and progression references", "Use when you need mechanics or route context", "Can lag behind live announcements"],
  ["Official Discord", "New codes, maintenance and announcements", "Use first during updates or code drops", "Fastest source, but messages can move quickly"],
  ["Roblox Game", "Playing the game and checking official description", "Use when verifying the live game page or max-level notes", "Only trust the real Roblox game page"],
  ["sailorpiece.live Codes", "Source-checked active and expired codes", "Use when redeeming codes or copying eligible rewards", "Community guide, not an official source"],
  ["Swords Tier List", "Best swords, iframes and PvP or boss picks", "Use after checking Trello systems and before spending rerolls", "Community ranking page with reviewed tier notes"],
  ["Races Tier List", "Race reroll planning and build direction", "Use before spending race rerolls from codes or events", "Community ranking page for build planning"],
];

export default function TrelloPage() {
  const lastChecked = formatDate(codes.last_checked_at);

  return (
    <>
      <JsonLd
        path="/trello"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Official Links", url: "/official-links" },
          { name: "Trello", url: "/trello" },
        ]}
        faq={FAQS}
        howto={HOW_TO}
        itemList={{
          name: "Sailor Piece Official Sources",
          items: ["Official Trello", "Official Discord", "Roblox Game", "Sailor Piece Codes"],
        }}
      />

      <header className="mb-8">
        <p className="inline-block badge badge-fresh mb-3">Checked {lastChecked}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Sailor Piece Trello
        </h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          Use this page to open the official Sailor Piece Trello safely, understand when Trello is
          useful, and know when Discord or the codes page is the better source.
        </p>
      </header>

      <section className="surface p-6 mb-10">
        <h2 className="text-xl font-bold mb-3">Quick Answer</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          The Sailor Piece Trello is best for systems, update notes and progression references.
          For new codes, check Discord first and then verify rewards on the{" "}
          <Link href="/codes">Sailor Piece codes page</Link>.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={trelloLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open Official Trello
          </a>
          <Link href="/official-links" className="btn-ghost">
            View all official links
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Official Sailor Piece Links</h2>
        <OfficialLinks />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Trello vs Discord vs Codes</h2>
        <div className="surface overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-[var(--color-surface-2)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Source</th>
                <th className="px-4 py-3 font-semibold">Best for</th>
                <th className="px-4 py-3 font-semibold">Use first when</th>
                <th className="px-4 py-3 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {SOURCE_ROWS.map(([source, bestFor, useWhen, note]) => (
                <tr key={source} className="align-top">
                  <td className="px-4 py-3 font-semibold">{source}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{bestFor}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{useWhen}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Next Pages After Trello</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { href: "/codes", label: "Codes", text: "Check today's working rewards before spending rerolls." },
            { href: "/official-links", label: "Official Links", text: "Open the verified Roblox, Discord and Trello links." },
            { href: "/tier-list/swords", label: "Swords Tier List", text: "Compare best swords, iframes, boss damage and PvP control." },
            { href: "/tier-list/races", label: "Races Tier List", text: "Plan race rerolls around farming, raids and PvP builds." },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface p-4 hover:border-[var(--color-accent)] transition-colors !no-underline !text-[var(--color-text)]"
            >
              <h3 className="font-semibold">{item.label}</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What to Check on Trello</h2>
        <ul className="surface p-5 space-y-2 text-sm text-[var(--color-text-muted)] list-disc list-inside">
          <li><strong className="text-[var(--color-text)]">Systems:</strong> use Trello to understand game mechanics before spending rerolls or rare resources.</li>
          <li><strong className="text-[var(--color-text)]">Updates:</strong> check Trello for slower reference notes after a patch lands.</li>
          <li><strong className="text-[var(--color-text)]">Progression:</strong> compare Trello notes with the <Link href="/guide">wiki guide</Link> and <Link href="/leveling">leveling guide</Link>.</li>
          <li><strong className="text-[var(--color-text)]">Codes:</strong> use <Link href="/codes">codes</Link> for tested rewards instead of assuming every Trello note is a working code.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Pages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { href: "/codes", label: "Codes", text: "Active rewards with source checks and copy buttons." },
            { href: "/official-links", label: "Official Links", text: "Roblox, Discord and Trello in one page." },
            { href: "/tier-list/swords", label: "Swords Tier List", text: "Best swords, current picks and iframe notes." },
            { href: "/tier-list/races", label: "Races Tier List", text: "Race reroll planning for builds and progression." },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface p-4 hover:border-[var(--color-accent)] transition-colors !no-underline !text-[var(--color-text)]"
            >
              <h3 className="font-semibold">{item.label}</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={FAQS} />
      </section>
    </>
  );
}
