import Link from "next/link";
import siteLinks from "@/data/site-links.json";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { OfficialLinks } from "@/components/OfficialLinks";
import { buildMetadata } from "@/lib/seo";
import { codes } from "@/lib/codes";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Sailor Piece Trello, Discord & Official Links",
  description:
    "Official Sailor Piece Trello, Discord and Roblox game links checked with notes on codes, updates, patch notes, safety and which link to use first.",
  path: "/official-links",
});

const FAQS = [
  {
    q: "What is the official Sailor Piece Trello?",
    a: "The official Sailor Piece Trello is the public board used to track update notes, systems and game information. It is useful for checking mechanics, but fresh codes can appear in Discord first.",
  },
  {
    q: "Where is the official Sailor Piece Discord?",
    a: "Use the official Discord link on this page. It is the fastest place to check announcements, code drops, maintenance notes and community discussion.",
  },
  {
    q: "Is sailorpiece.live the official Sailor Piece website?",
    a: "No. This is a community guide site. We link to the official Roblox game, Discord and Trello, but we are not affiliated with Shadowrise Devs or Roblox Corporation.",
  },
  {
    q: "Which official link should I use for new Sailor Piece codes?",
    a: "Check Discord first for fresh drops, then use our codes page for source-checked active and expired codes with copy buttons and level filtering.",
  },
  {
    q: "How do I avoid fake Sailor Piece Discord or Trello links?",
    a: "Use a trusted page like this one, avoid links from random comments or shortened URLs, and never enter your Roblox password on a third-party site.",
  },
];

const LINK_ROWS = [
  {
    name: "Official Discord",
    bestFor: "New codes, announcements, maintenance and community discussion.",
    useFirstWhen: "You want the newest code or update message as soon as it drops.",
    note: "Discord is usually faster than static guide pages during live updates.",
  },
  {
    name: "Official Trello",
    bestFor: "Systems, patch notes, progression notes and broader game references.",
    useFirstWhen: "You need to understand a feature, boss, route, spec or update system.",
    note: "Trello can lag behind Discord for brand-new codes, so cross-check codes before redeeming.",
  },
  {
    name: "Roblox Game",
    bestFor: "Playing Sailor Piece and checking the official game description.",
    useFirstWhen: "You want to join the game, check max level notes or verify the current live game page.",
    note: "Only trust the Roblox page for game launch and platform-level details.",
  },
];

export default function OfficialLinksPage() {
  const lastChecked = formatDate(codes.last_checked_at);

  return (
    <>
      <JsonLd
        path="/official-links"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Official Links", url: "/official-links" },
        ]}
        faq={FAQS}
        itemList={{
          name: "Official Sailor Piece Links",
          items: siteLinks.official.map((link) => link.label),
        }}
      />

      <header className="mb-8">
        <p className="inline-block badge badge-fresh mb-3">Checked {lastChecked}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Sailor Piece Trello, Discord &amp; Official Links
        </h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          Use these official Sailor Piece links to open the Roblox game, check the Discord for
          new codes and announcements, and read Trello notes for updates, systems and progression.
          This page is checked alongside our code source review so you do not need to trust random
          invite links from comments.
        </p>
      </header>

      <section className="surface p-6 mb-10">
        <h2 className="text-xl font-bold mb-3">Quick Answer</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          For new Sailor Piece codes, open Discord first. For mechanics, progression and update
          notes, use Trello. For playing the game or checking official Roblox details, use the
          Roblox game page. For source-checked working codes with copy buttons, use our{" "}
          <Link href="/codes">Sailor Piece codes page</Link>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Official Sailor Piece Links</h2>
        <OfficialLinks />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Which Official Link Should You Use?</h2>
        <div className="surface overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-[var(--color-surface-2)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Link</th>
                <th className="px-4 py-3 font-semibold">Best For</th>
                <th className="px-4 py-3 font-semibold">Use First When</th>
                <th className="px-4 py-3 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {LINK_ROWS.map((row) => (
                <tr key={row.name} className="align-top">
                  <td className="px-4 py-3 font-semibold">{row.name}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{row.bestFor}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{row.useFirstWhen}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Safety Checklist</h2>
        <ul className="surface p-5 space-y-2 text-sm text-[var(--color-text-muted)] list-disc list-inside">
          <li><strong className="text-[var(--color-text)]">Avoid random invites.</strong> Use the links above instead of shortened links or comment-section invites.</li>
          <li><strong className="text-[var(--color-text)]">Never enter your Roblox password.</strong> Official Discord and Trello links do not need your Roblox password.</li>
          <li><strong className="text-[var(--color-text)]">Check codes before redeeming.</strong> Codes can expire after updates, so compare Discord drops with the <Link href="/codes">active codes table</Link>.</li>
          <li><strong className="text-[var(--color-text)]">Use Trello for systems, not instant alerts.</strong> Trello is useful for guides and update notes, but Discord is usually faster for new announcements.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Sailor Piece Pages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { href: "/codes", label: "Codes", text: "Working codes, expired codes and level filter." },
            { href: "/guides", label: "Guides", text: "All wiki, build and farming guides." },
            { href: "/tier-list", label: "Tier List", text: "Races, fruits, swords, clans, haki and traits." },
            { href: "/guide", label: "Wiki Guide", text: "Starter guide with islands, fruits, haki and Sea 2." },
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
