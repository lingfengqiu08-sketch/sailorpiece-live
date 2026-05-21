import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/FAQ";
import { OfficialLinks } from "@/components/OfficialLinks";
import { UpdateTimeline } from "@/components/UpdateTimeline";
import { buildMetadata } from "@/lib/seo";
import { codes } from "@/lib/codes";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Sailor Piece Wiki Guide - Codes, Trello, Leveling & Builds",
  description:
    "A practical Sailor Piece wiki guide for May 2026: active codes, official Trello and Discord links, leveling, fruits, haki, bosses, runes, builds and Sea 2.",
  path: "/guide",
});

const GUIDE_SHORTCUTS = [
  { href: "/codes", label: "Codes", text: "Claim rewards with level eligibility filtering" },
  { href: "/trello", label: "Trello", text: "Official Trello, Discord and source notes" },
  { href: "/leveling", label: "Leveling", text: "Fast quest, boss and Sea 2 route" },
  { href: "/bosses", label: "Bosses", text: "Boss types, farming order and drops" },
  { href: "/runes", label: "Runes", text: "Damage, luck and secret-rune goals" },
  { href: "/tier-list", label: "Tier List", text: "Races, fruits, swords, clans, haki and traits" },
  { href: "/guides", label: "All Guides", text: "Every guide page in one index" },
  { href: "/traits", label: "Traits", text: "Passive rolls for boss farming and PvP" },
];

const START_ROUTE = [
  {
    step: "1",
    title: "Claim current codes",
    text: "Use the level filter first so you only copy codes your account can actually redeem.",
    href: "/codes",
    link: "Open codes",
  },
  {
    step: "2",
    title: "Verify official sources",
    text: "Use official Roblox, Discord and Trello links before trusting a code, patch note or mechanic change.",
    href: "/trello",
    link: "Open Trello guide",
  },
  {
    step: "3",
    title: "Follow the leveling route",
    text: "Quest until mob grinding slows down, then rotate bosses, keys and dungeon routes for better account progress.",
    href: "/leveling",
    link: "Read leveling route",
  },
  {
    step: "4",
    title: "Lock one stable build",
    text: "Choose one usable fruit, sword, race, clan and trait before spending rerolls on narrow PvP or secret-drop goals.",
    href: "/tier-list",
    link: "Compare builds",
  },
];

const BUILD_CHECKLIST = [
  ["Early game", "Codes, fruit, race, basic sword", "Get mobility and damage before chasing rare rerolls.", "/codes"],
  ["Mid game", "Leveling, bosses, haki, boss keys", "Move from quest grinding into repeatable boss routes.", "/bosses"],
  ["Late game", "Runes, accessories, specs, bloodlines", "Improve damage, luck and survival before long drop farms.", "/runes"],
  ["Endgame", "Sea 2, raids, world bosses, secret runes", "Only chase rare systems after your clear speed is stable.", "/guides"],
];

const GUIDE_HOW_TO = {
  name: "How to start Sailor Piece progression",
  steps: [
    "Check active Sailor Piece codes and redeem every code eligible for your current level.",
    "Use official Roblox, Discord and Trello links to verify current game systems and code sources.",
    "Follow the leveling route until your current quest bracket slows down.",
    "Upgrade one stable fruit, sword, race, clan and trait setup before spending rerolls casually.",
    "Move into boss farming, boss keys, runes and accessories once normal mob grinding becomes inefficient.",
    "Use the guide hub and tier lists to decide the next build upgrade instead of rerolling every system at once.",
  ],
};

const GUIDE_ITEM_LIST = {
  name: "Sailor Piece Wiki Topics",
  items: [
    "Active Sailor Piece codes",
    "Official Sailor Piece Trello and Discord links",
    "Leveling and Sea 2 progression",
    "Devil fruits and fruit tier list",
    "Bosses, boss keys and rare drops",
    "Runes, accessories, specs and bloodlines",
    "Races, swords, clans, haki and traits",
  ],
};

const FAQS = [
  {
    q: "What is Sailor Piece on Roblox?",
    a: "Sailor Piece is a Roblox anime RPG by Shadowrise Devs that combines One Piece-style pirate progression with crossover combat styles. It launched November 17, 2025 and quickly became one of the platform's top-rated RPGs.",
  },
  {
    q: "What is the max level in Sailor Piece?",
    a: "Sea 1 ends at level 6,250. The official Roblox game page currently lists Sailor Piece Max Level as 20,000, with Sea 2 carrying the late-game progression.",
  },
  {
    q: "How do I get devil fruits in Sailor Piece?",
    a: "Devil fruits spawn under trees every 60 minutes and despawn after 20 minutes. You can also buy them with coins or gems from the Fruit Dealer NPC, or earn them as rare drops from bosses.",
  },
  {
    q: "What is Sea 2 in Sailor Piece?",
    a: "Sea 2 is the major late-game expansion with new specs, a bounty 50M target, Guilds, new bloodlines, World Bosses, and progression toward the current 20,000 max level. It went live in early 2026.",
  },
  {
    q: "How do I get haki in Sailor Piece?",
    a: "Armament Haki unlocks via the first major boss after Sea 1's mid-game. Observation Haki unlocks through the Observation trainer NPC. Conqueror Haki is rare — it activates on certain races / clans after specific quest milestones.",
  },
  {
    q: "Where is the official Sailor Piece Trello?",
    a: "Use the official links page on this site to open the verified Sailor Piece Roblox, Discord and Trello sources. This avoids fake code pages and outdated community mirrors.",
  },
  {
    q: "What should beginners do first in Sailor Piece?",
    a: "Start with active codes, then secure one usable fruit or sword, follow the leveling route, and only spend rerolls after your current build can clear bosses consistently.",
  },
  {
    q: "Should I follow the tier list or the wiki guide first?",
    a: "Use this wiki guide first to understand progression, then use the tier list when choosing a specific race, fruit, sword, clan, haki or trait.",
  },
];

export default function GuidePage() {
  const lastChecked = formatDate(codes.last_checked_at);

  return (
    <>
      <JsonLd
        path="/guide"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Guide", url: "/guide" },
        ]}
        faq={FAQS}
        howto={GUIDE_HOW_TO}
        itemList={GUIDE_ITEM_LIST}
      />

      <header className="mb-8">
        <p className="inline-block badge badge-fresh mb-3">Updated {lastChecked}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sailor Piece Wiki Guide</h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          The practical starting point for Sailor Piece: claim active codes, verify official Trello and Discord links, follow the leveling route, then choose the next build upgrade without wasting rerolls.
        </p>
      </header>

      <nav className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12" aria-label="Sailor Piece guide shortcuts">
        {GUIDE_SHORTCUTS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="surface p-4 hover:border-[var(--color-accent)] transition-colors !no-underline !text-[var(--color-text)]"
          >
            <h2 className="font-semibold">{item.label}</h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">{item.text}</p>
          </Link>
        ))}
      </nav>

      <section id="quick-start" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-3">Quick Start Route</h2>
        <div className="grid lg:grid-cols-4 gap-3">
          {START_ROUTE.map((item) => (
            <article key={item.step} className="surface p-5">
              <p className="text-xs uppercase text-[var(--color-text-muted)]">Step {item.step}</p>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{item.text}</p>
              <Link href={item.href} className="btn-ghost text-sm mt-4 inline-flex">
                {item.link}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="progression-checklist" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-3">Progression Checklist</h2>
        <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
          Use this order before rerolling. Sailor Piece rewards stable progression more than constantly chasing one rare system.
        </p>
        <div className="surface overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[var(--color-surface-2)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Stage</th>
                <th className="px-4 py-3 font-semibold">Focus</th>
                <th className="px-4 py-3 font-semibold">Why it matters</th>
                <th className="px-4 py-3 font-semibold">Next page</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {BUILD_CHECKLIST.map(([stage, focus, reason, href]) => (
                <tr key={stage} className="align-top">
                  <td className="px-4 py-3 font-semibold">{stage}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)]">{focus}</td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)] leading-relaxed">{reason}</td>
                  <td className="px-4 py-3">
                    <Link href={href}>Open guide</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What is Sailor Piece */}
      <section id="what-is" className="mb-12 surface p-6 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-3">What Is Sailor Piece?</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          <strong className="text-[var(--color-text)]">Sailor Piece</strong> is a Roblox anime RPG released by Shadowrise Devs on November 17, 2025.
          It blends One Piece-style sailing and devil-fruit progression with crossover combat styles drawn from popular shonen anime. As of May 2026, the game page highlights frequent updates, live events and a 20,000 max level.
        </p>
        <p className="text-[var(--color-text-muted)] leading-relaxed mt-3">
          The game is structured around two seas, with Sea 2 carrying the late-game path toward level 20,000 and introducing four new combat specs, World Bosses, Raids, Bloodlines and the Anti-Magic system.
        </p>
        <p className="text-[var(--color-text-muted)] leading-relaxed mt-3">
          If you came here from a code or Trello search, use this page as the broad route and then open the specific page you need: <Link href="/codes">codes</Link>, <Link href="/official-links">official links</Link>, <Link href="/leveling">leveling</Link>, <Link href="/bosses">bosses</Link> or <Link href="/tier-list">tier list</Link>.
        </p>
      </section>

      {/* Devil fruits */}
      <section id="fruits" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-3">Devil Fruits</h2>
        <div className="surface p-6">
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Sailor Piece has 30+ devil fruits split across Rare, Epic, Legendary and Mythical rarities. The top two fruits in the May 2026 meta are <strong className="text-[var(--color-text)]">Light</strong> (flight + ranged beams) and <strong className="text-[var(--color-text)]">Quake</strong> (massive AoE).
          </p>
          <h3 className="mt-5 mb-2 font-semibold">How to get devil fruits</h3>
          <ul className="text-sm text-[var(--color-text-muted)] list-disc list-inside space-y-1.5">
            <li>Fruits spawn under trees every 60 minutes; they despawn after 20 minutes.</li>
            <li>Buy fruits from the Coin Fruit Dealer or Gems Fruit Dealer NPCs on the starting island.</li>
            <li>Defeat raid bosses and world bosses for small chances at Legendary / Mythical drops.</li>
          </ul>
          <p className="mt-3 text-sm">
            See the <Link href="/fruits">full fruit guide</Link> or the <Link href="/tier-list/fruits">fruit tier list</Link>.
          </p>
        </div>
      </section>

      {/* Islands & leveling */}
      <section id="islands" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-3">Islands and Leveling</h2>
        <div className="surface p-6 space-y-3 text-[var(--color-text-muted)] leading-relaxed">
          <p>
            The Sailor Piece world is split across 18+ islands forming the Sea 1 and Sea 2 maps. Each island has its own level bracket, quests, NPCs and unique bosses.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Level cap:</strong> Sea 1 ends at 6,250, then unlocks Sea 2 progression toward the current 20,000 max level.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Fastest leveling path:</strong> redeem all eligible <Link href="/codes">codes</Link>, pick a strong race like Luckborn or Sunborn, equip A+ tier swords, then follow the detailed <Link href="/leveling">leveling guide</Link> once mob grinding slows down.
          </p>
        </div>
      </section>

      {/* Haki / runes / bosses */}
      <section id="haki" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-3">Haki, Runes and Bosses</h2>
        <div className="surface p-6 space-y-3 text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">Haki</strong> in Sailor Piece comes in three flavors: Armament (defense + damage), Observation (dodge + tracking), and Conqueror (intimidation + AoE stun). Armament unlocks from a mid-game boss; Observation via the Observation trainer; Conqueror is restricted to certain race / clan combinations.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Runes</strong> are passive items that can support damage, survivability or luck. Use the <Link href="/runes">runes guide</Link> before committing to a long drop-farming route.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Bosses</strong> include open-world, spawnable, dungeon, world and event routes. Use the <Link href="/bosses">bosses guide</Link> and <Link href="/boss-keys">boss key guide</Link> before spending keys.
          </p>
          <p className="text-sm">
            Compare <Link href="/haki">haki</Link>, <Link href="/swords">swords</Link>, <Link href="/clans">clans</Link>, <Link href="/traits">traits</Link>, <Link href="/accessories">accessories</Link>, <Link href="/specs">specs</Link> and <Link href="/bloodlines">bloodlines</Link> before locking your build.
          </p>
        </div>
      </section>

      {/* Sea 2 + updates */}
      <section id="sea-2" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-3">Sea 2 and Major Updates</h2>
        <UpdateTimeline limit={6} />
      </section>

      {/* Official links */}
      <section id="official-links" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-3">Official Sailor Piece Links</h2>
        <p className="text-[var(--color-text-muted)] mb-4">
          Always cross-check codes and patch notes against the official sources before redeeming:
        </p>
        <OfficialLinks />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={FAQS} />
      </section>
    </>
  );
}
