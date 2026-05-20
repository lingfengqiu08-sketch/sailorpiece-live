import Link from "next/link";
import siteLinks from "@/data/site-links.json";
import { codes } from "@/lib/codes";
import { formatDate } from "@/lib/date";

export function Footer() {
  const lastChecked = formatDate(codes.last_checked_at);

  return (
    <footer className="mt-20 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 grid-cols-2 sm:grid-cols-4 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Sailor Piece</h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Verified codes, tier lists and guides for the Roblox anime RPG by Shadowrise Devs.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-1.5">
            <li><Link href="/codes">Codes</Link></li>
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/tier-list">Tier List</Link></li>
            <li><Link href="/races">Races</Link></li>
            <li><Link href="/fruits">Fruits</Link></li>
            <li><Link href="/swords">Swords</Link></li>
            <li><Link href="/clans">Clans</Link></li>
            <li><Link href="/haki">Haki</Link></li>
            <li><Link href="/traits">Traits</Link></li>
            <li><Link href="/leveling">Leveling</Link></li>
            <li><Link href="/bosses">Bosses</Link></li>
            <li><Link href="/boss-keys">Boss Keys</Link></li>
            <li><Link href="/runes">Runes</Link></li>
            <li><Link href="/accessories">Accessories</Link></li>
            <li><Link href="/specs">Specs</Link></li>
            <li><Link href="/bloodlines">Bloodlines</Link></li>
            <li><Link href="/guide">Guide</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Official</h3>
          <ul className="space-y-1.5">
            {siteLinks.official.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Not affiliated with Shadowrise Devs or Roblox Corporation. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] py-4 text-center text-xs text-[var(--color-text-muted)]">
        © 2026 sailorpiece.live · Last checked from listed sources on {lastChecked}
      </div>
    </footer>
  );
}
