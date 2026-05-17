import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/FAQ";
import { OfficialLinks } from "@/components/OfficialLinks";
import { UpdateTimeline } from "@/components/UpdateTimeline";
import { buildMetadata } from "@/lib/seo";
import { codes } from "@/lib/codes";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Sailor Piece Wiki Guide — Islands, Fruits, Haki & Sea 2",
  description:
    "A practical Sailor Piece wiki guide for May 2026: devil fruits, islands, level cap, haki, runes, bosses, Sea 2 progression and official Trello / Discord links.",
  path: "/guide",
});

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
      />

      <header className="mb-8">
        <p className="inline-block badge badge-fresh mb-3">Updated {lastChecked}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sailor Piece Wiki Guide</h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          Everything new players need to know about Sailor Piece — devil fruits, islands, leveling, haki, bosses, and the Sea 2 expansion.
        </p>
      </header>

      <nav className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12" aria-label="Sailor Piece guide shortcuts">
        {[
          { href: "/leveling", label: "Leveling", text: "Fast quest, boss and Sea 2 route" },
          { href: "/bosses", label: "Bosses", text: "Boss types, farming order and drops" },
          { href: "/runes", label: "Runes", text: "Damage, luck and secret-rune goals" },
          { href: "/guides", label: "All Guides", text: "Every guide page in one index" },
        ].map((item) => (
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
