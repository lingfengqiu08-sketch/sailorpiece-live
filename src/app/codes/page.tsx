import Link from "next/link";
import { activeCodes, expiredCodes, codes as codesData } from "@/lib/codes";
import { CodeTable } from "@/components/CodeTable";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Sailor Piece Codes Today — Active & Verified Rewards",
  description:
    "Copy all working Sailor Piece codes for May 2026. Filter by your level, check rewards, status, source and real verification timestamps.",
  path: "/codes",
});

const FAQS = [
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
    a: "Codes typically drop with major updates (Sea 2, Anti-Magic, Huge Update), raid events, server-restart compensations, and milestone celebrations (visits, likes, followers). We re-check listed sources daily.",
  },
  {
    q: "What does verified mean on this page?",
    a: "We tag each code with the most recent time it was confirmed in the official Discord (Source checked) or successfully redeemed on a test account (Redeem tested). The badge color shows freshness.",
  },
  {
    q: "Can low level players use every Sailor Piece code?",
    a: "No. For example ANTIMAGICUPDATE requires level 8,500. Type your level into the filter to hide codes you can't redeem yet.",
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
        <p className="inline-block badge badge-fresh mb-3">Checked {formatDate(codesData.last_checked_at)}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Sailor Piece Codes Today
        </h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          {active.length} active and {expired.length} expired Sailor Piece codes. Last source check on{" "}
          <strong className="text-[var(--color-text)]">{formatDate(codesData.last_checked_at)}</strong>.
          Source links are shown for each active code, and we only use Redeem tested after a real in-game redemption.
          Type your in-game level to filter only the codes you can redeem right now.
        </p>
      </header>

      <CodeTable active={active} expired={expired} />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">How to Redeem Sailor Piece Codes</h2>
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
          <li><strong className="text-[var(--color-text)]">Level locked.</strong> Some milestone codes require a minimum level (e.g. ANTIMAGICUPDATE needs 8,500).</li>
          <li><strong className="text-[var(--color-text)]">Server pending.</strong> After a major update, codes sometimes take 10-30 minutes to propagate to all servers.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Where to Find More Sailor Piece Codes</h2>
        <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
          The fastest sources for new Sailor Piece codes are the official channels:
        </p>
        <ul className="space-y-2 text-sm text-[var(--color-text-muted)] list-disc list-inside">
          <li>The official <strong className="text-[var(--color-text)]">Sailor Piece Discord</strong> — codes drop minutes after they're created.</li>
          <li>The official <strong className="text-[var(--color-text)]">Sailor Piece Trello</strong> — patch notes and update roadmaps.</li>
          <li>The <strong className="text-[var(--color-text)]">Roblox game page</strong> — milestone codes during livestreams.</li>
        </ul>
        <p className="mt-4 text-sm">
          Want the bigger picture? Compare our <Link href="/tier-list">Sailor Piece tier list</Link> or the <Link href="/races">races guide</Link> while you wait for the next code.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={FAQS} />
      </section>
    </>
  );
}
