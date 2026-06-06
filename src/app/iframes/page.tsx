import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/FAQ";
import { CodesInlineWidget } from "@/components/CodesInlineWidget";
import { buildMetadata } from "@/lib/seo";
import { swordStats } from "@/lib/sword-stats";

export const metadata = buildMetadata({
  title: "What Are Iframes in Sailor Piece? (Meaning + Best Iframe Swords)",
  description:
    "Iframes in Sailor Piece are invincibility frames — short moments during a move when you take no damage. Learn what they mean, how to use them, and which swords have the best iframes.",
  path: "/iframes",
});

// Build the iframe ranking from sword-stats (our unique data — no competitor
// quantifies this). Sort swords by their iframe score, show the meaningful top.
const IFRAME_RANKING = Object.entries(swordStats.swords)
  .map(([name, s]) => ({ name, iframes: s.iframes, tier: s.tier, verdict: s.verdict }))
  .sort((a, b) => b.iframes - a.iframes);

const TOP_IFRAME_SWORDS = IFRAME_RANKING.slice(0, 6);

const FAQS = [
  {
    q: "What are iframes in Sailor Piece?",
    a: "Iframes (invincibility frames) are short moments during a sword move, dash or skill when your character cannot take damage. They are not the same as the web 'iframe' HTML element — in Roblox combat games, iframe means a brief window of invincibility you can use to dodge boss attacks and PvP burst.",
  },
  {
    q: "What does iframe mean in Sailor Piece?",
    a: "It means invincibility frames. During certain moves your character flashes through an attack and takes zero damage. Learning which moves give iframes — and timing them against boss wind-ups — is one of the biggest skill jumps in the game.",
  },
  {
    q: "Which sword has the best iframes in Sailor Piece?",
    a: `${TOP_IFRAME_SWORDS[0].name} and ${TOP_IFRAME_SWORDS[1].name} have the strongest iframes right now. Both let you stay aggressive against bosses and PvP without dying, which is why they rank highly even beyond raw damage.`,
  },
  {
    q: "Do iframes make you fully invincible?",
    a: "No. Iframes only cover a short window during a specific move. They do not make you immune to all damage, do not block every crowd-control effect, and are not the same as damage reduction. Mistiming them still gets you hit.",
  },
  {
    q: "How do I use iframes against bosses?",
    a: "Watch the boss wind-up animation, then trigger an iframe move right as the hit lands — not before. The goal is to overlap your invincibility window with the boss's damage frame so you keep attacking instead of running away.",
  },
];

const MISCONCEPTIONS = [
  ["Iframe ≠ full invincibility", "Iframes only cover the move's active window — a fraction of a second, not the whole fight."],
  ["Iframe ≠ immune to crowd control", "Some stuns, grabs and slows can still land. Iframes mainly negate damage, not every effect."],
  ["Iframe ≠ damage reduction", "It is all-or-nothing during the window: zero damage if timed right, full damage if mistimed. It is not a defensive stat."],
  ["Iframe ≠ the web HTML iframe", "If you searched this expecting code, this is the game mechanic: invincibility frames in Sailor Piece combat."],
];

export default function IframesPage() {
  return (
    <>
      <JsonLd
        path="/iframes"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Swords", url: "/swords" },
          { name: "Iframes", url: "/iframes" },
        ]}
        faq={FAQS}
        itemList={{
          name: "Best Iframe Swords in Sailor Piece",
          items: TOP_IFRAME_SWORDS.map((s) => `${s.name} (iframe ${s.iframes}/10)`),
        }}
      />

      <header className="mb-6">
        <p className="inline-block badge badge-fresh mb-3">Combat mechanic</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          What Are Iframes in Sailor Piece?
        </h1>
      </header>

      <section className="surface p-6 mb-10">
        <h2 className="text-xl font-bold mb-3">Quick Answer</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          <strong className="text-[var(--color-text)]">Iframes (invincibility frames)</strong> are
          short moments during a sword move, dash or skill when your character takes{" "}
          <strong className="text-[var(--color-text)]">no damage</strong>. They are a game combat
          mechanic — not the web HTML iframe. Timing an iframe move so it overlaps a boss or PvP
          attack lets you keep attacking without dying. The best iframe swords right now are{" "}
          <strong className="text-[var(--color-text)]">{TOP_IFRAME_SWORDS[0].name}</strong> and{" "}
          <strong className="text-[var(--color-text)]">{TOP_IFRAME_SWORDS[1].name}</strong>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">What Iframes Actually Mean</h2>
        <div className="surface p-6 space-y-3 text-[var(--color-text-muted)] leading-relaxed">
          <p>
            &ldquo;Iframe&rdquo; is short for <strong className="text-[var(--color-text)]">invincibility frame</strong>.
            In Sailor Piece, several sword moves and dashes briefly make your character invincible —
            during those frames, boss hits, PvP combos and raid attacks deal zero damage to you.
          </p>
          <p>
            A lot of players search &ldquo;iframes meaning&rdquo; expecting a coding answer. In a
            Roblox combat game it has nothing to do with web pages. It is purely a{" "}
            <strong className="text-[var(--color-text)]">timing tool</strong>: the difference between
            a player who face-tanks a boss and one who phases through the hit and keeps their damage
            uptime.
          </p>
          <p>
            That is why a sword with strong iframes can feel better than a higher-damage sword in
            hard content — survival uptime beats raw numbers when a single mistake ends your run.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Best Iframe Swords (Ranked)</h2>
        <p className="mb-4 text-[var(--color-text-muted)] leading-relaxed">
          We score every sword&apos;s iframe reliability from 1–10 as part of our{" "}
          <Link href="/swords">sword tier list</Link>. Higher means safer, more forgiving
          invincibility windows. This is the iframe-only ranking:
        </p>
        <div className="surface overflow-x-auto">
          <table className="w-full min-w-[480px] text-sm">
            <thead className="bg-[var(--color-surface-2)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Sword</th>
                <th className="px-4 py-3 font-semibold">Iframe score</th>
                <th className="px-4 py-3 font-semibold">Tier</th>
                <th className="px-4 py-3 font-semibold">Why it ranks here</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {TOP_IFRAME_SWORDS.map((s) => (
                <tr key={s.name} className="align-top">
                  <td className="px-4 py-3 font-semibold">{s.name}</td>
                  <td className="px-4 py-3">
                    <span className="badge badge-fresh">{s.iframes}/10</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`tier-${s.tier} rounded px-2 py-0.5 text-xs font-bold`}>{s.tier}</span>
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{s.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          Want the full damage / AoE / PvP picture? Compare any two swords side by side with the{" "}
          <Link href="/swords#compare">sword comparison tool</Link>.
        </p>
      </section>

      <CodesInlineWidget context="before chasing an iframe sword" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">How to Use Iframes (Timing)</h2>
        <div className="surface p-6 space-y-3 text-[var(--color-text-muted)] leading-relaxed">
          <p>
            Knowing <em>what</em> an iframe is matters less than knowing <em>when</em> to press it.
            The rule is simple but hard to master:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong className="text-[var(--color-text)]">Watch the wind-up</strong>, not the cooldown. Bosses telegraph big hits with an animation — that is your cue.</li>
            <li><strong className="text-[var(--color-text)]">Trigger the iframe move as the hit lands</strong>, not the moment you see the wind-up. Early = window expires before the hit.</li>
            <li><strong className="text-[var(--color-text)]">Overlap, don&apos;t retreat.</strong> The point of an iframe is to keep attacking through a hit you would otherwise have to dodge by running.</li>
            <li><strong className="text-[var(--color-text)]">In PvP</strong>, save your iframe move for the enemy&apos;s burst combo, not for poke damage.</li>
          </ol>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Common Iframe Misconceptions</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {MISCONCEPTIONS.map(([title, body]) => (
            <article key={title} className="surface p-4">
              <h3 className="font-semibold text-[var(--color-text)]">{title}</h3>
              <p className="mt-1.5 text-sm text-[var(--color-text-muted)] leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={FAQS} />
      </section>

      <section className="surface p-6">
        <h2 className="text-xl font-bold mb-3">Next steps</h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Pick an iframe sword from the <Link href="/swords">Sailor Piece sword tier list</Link>,
          compare two options with the <Link href="/swords#compare">comparison tool</Link>, then grab
          reroll resources from the latest <Link href="/codes">Sailor Piece codes</Link>.
        </p>
      </section>
    </>
  );
}
