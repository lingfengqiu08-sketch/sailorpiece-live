import Link from "next/link";
import { activeCodes, expiredCodes, codes as codesData } from "@/lib/codes";
import { CodeTable } from "@/components/CodeTable";
import { FAQ } from "@/components/FAQ";
import { FreshnessBanner } from "@/components/FreshnessBanner";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/date";

const ACTIVE_COUNT = activeCodes().length;
const FEATURED_CODES = activeCodes().slice(0, 6).map((code) => code.code);

export const metadata = buildMetadata({
  title: `Sailor Piece Codes May 2026 - ${ACTIVE_COUNT} Working Codes Checked Daily`,
  description:
    `Copy ${ACTIVE_COUNT} working Sailor Piece codes for May 2026, including ${FEATURED_CODES.slice(0, 4).join(", ")}. Checked daily with source links, level filters, rewards and expired codes.`,
  path: "/codes",
});

const FAQS = [
  {
    q: "Are there any working Sailor Piece codes today?",
    a: "Yes. The active table at the top of this page lists working Sailor Piece codes we have source-checked or redeem-tested, with the latest verification timestamp shown beside each code.",
  },
  {
    q: "How do I redeem Sailor Piece codes?",
    a: "Launch Sailor Piece on Roblox, open the in-game menu, find the Codes section, paste an active code, and press Redeem. Rewards appear in your inventory immediately.",
  },
  {
    q: "Why aren't my Sailor Piece codes working?",
    a: "The code may be expired, already used on this account, mistyped, locked behind a minimum level, or temporarily disabled by the developer. Refresh the page and copy the code again before troubleshooting further.",
  },
  {
    q: "How often are new Sailor Piece codes released?",
    a: "Codes usually drop with major updates, raid releases, server-restart compensations, and milestone celebrations such as visits, likes, and follows. We re-check listed sources daily because older codes can stop working fast after an update goes live.",
  },
  {
    q: "What does verified mean on this page?",
    a: "We tag each code with the most recent time it was confirmed in current public sources or successfully redeemed on a test account. We only use Redeem tested after a real in-game redemption, and the badge color shows freshness.",
  },
  {
    q: "Can low level players use every Sailor Piece code?",
    a: "Not always. Some codes are level-locked or restricted to newer servers. If a reliable level gate is published, we show it in the table; otherwise we label it as Level gate unverified.",
  },
];

const HOWTO = {
  name: "How to redeem Sailor Piece codes",
  steps: [
    "Launch Sailor Piece on Roblox.",
    "Open the in-game settings or menu.",
    "Scroll to the Codes section.",
    "Paste an active code from this page.",
    "Press Redeem to claim your rewards.",
  ],
};

export default function CodesPage() {
  const active = activeCodes();
  const expired = expiredCodes();

  return (
    <>
      <JsonLd
        path="/codes"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Codes", url: "/codes" },
        ]}
        faq={FAQS}
        howto={HOWTO}
        itemList={{
          name: "Active Sailor Piece Codes",
          items: active.map((c) => c.code),
        }}
      />

      <header className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Sailor Piece Codes May 2026 - {active.length} Working Codes
        </h1>
        <FreshnessBanner
          lastCheckedAt={codesData.last_checked_at}
          checkFrequencyHours={codesData.check_frequency_hours}
          activeCount={active.length}
          expiredCount={expired.length}
        />
        <p className="text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          Copy working Sailor Piece codes for spins, boosts, currency, and update rewards.
          Source links are shown for each active code, and we only mark a code as Redeem tested after a real in-game redemption.
          Type your in-game level to filter only the codes you can redeem right now.
        </p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Current working Sailor Piece codes">
          {active.slice(0, 6).map((code) => (
            <code key={code.code} className="badge badge-source font-mono">
              {code.code}
            </code>
          ))}
        </div>
      </header>

      <CodeTable active={active} expired={expired} />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">How to Redeem Sailor Piece Codes</h2>
        <p className="mb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          Use the copy button first, then redeem inside the Roblox game. If a working code fails, try a fresh server and check the level requirement or new-server restriction before assuming the code expired.
        </p>
        <ol className="surface p-5 list-decimal list-inside space-y-2 text-[var(--color-text-muted)]">
          {HOWTO.steps.map((s, i) => (
            <li key={i}><span className="text-[var(--color-text)]">{s}</span></li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Why Sailor Piece Codes May Not Work</h2>
        <ul className="surface p-5 space-y-2 text-sm text-[var(--color-text-muted)] list-disc list-inside">
          <li><strong className="text-[var(--color-text)]">Expired.</strong> Codes are removed quickly when new updates drop. Check our active list above.</li>
          <li><strong className="text-[var(--color-text)]">Already used.</strong> Each Roblox account can claim each code only once.</li>
          <li><strong className="text-[var(--color-text)]">Case sensitive.</strong> Codes must be typed exactly as shown — copy them with the button instead of typing.</li>
          <li><strong className="text-[var(--color-text)]">Level locked or server-limited.</strong> Some codes need a minimum level or only work in newer servers, and current public sources do not always publish the exact gate.</li>
          <li><strong className="text-[var(--color-text)]">Server pending.</strong> After a major update, codes sometimes take 10-30 minutes to propagate to all servers.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Where to Find More Sailor Piece Codes</h2>
        <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
          The fastest sources for new Sailor Piece codes are the official channels. Use our{" "}
          <Link href="/official-links">Sailor Piece official links page</Link> if you need the
          current Trello, Discord or Roblox game link.
        </p>
        <ul className="space-y-2 text-sm text-[var(--color-text-muted)] list-disc list-inside">
          <li>The official <Link href="/official-links">Sailor Piece Discord</Link> — codes drop minutes after they're created.</li>
          <li>The official <Link href="/official-links">Sailor Piece Trello</Link> — useful for patch notes, systems, and progression info, but its codes section can lag behind Discord.</li>
          <li>The <strong className="text-[var(--color-text)]">Roblox game page</strong> — milestone codes during livestreams.</li>
        </ul>
        <p className="mt-4 text-sm">
          Want the bigger picture? Compare our <Link href="/tier-list">Sailor Piece tier list</Link>, the <Link href="/races">races guide</Link>, or the <Link href="/guide">beginner guide</Link> while you wait for the next code.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Spend Your Code Rewards Wisely</h2>
        <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
          Codes give you rerolls, gems and shards — but where you spend them decides your account power.
          These progression guides cover the systems most worth investing in:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "/leveling", label: "Leveling Route", text: "Fastest path through Sea 1 and Sea 2 to the level cap." },
            { href: "/bosses", label: "Boss Guide", text: "Which bosses to farm for drops, rerolls and keys." },
            { href: "/boss-keys", label: "Boss Keys", text: "How to farm Boss Keys and which summon to spend on." },
            { href: "/runes", label: "Runes", text: "Best damage, luck and survival runes for your build." },
            { href: "/accessories", label: "Accessories", text: "Boss-drop accessories and the E0–E10 enchant route." },
            { href: "/specs", label: "Specs & Passives", text: "Fighting styles and the level 10,000 Spec Passive unlock." },
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

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={FAQS} />
      </section>
    </>
  );
}
