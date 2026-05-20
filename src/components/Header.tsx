import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/codes", label: "Codes" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/official-links", label: "Links" },
  { href: "/races", label: "Races" },
  { href: "/guides", label: "Guides" },
];

export function Header() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_85%,transparent)] backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--color-bg)_75%,transparent)] sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group !text-[var(--color-text)] !no-underline">
          <span className="relative h-9 w-9 shrink-0">
            <Image
              src="/logo-sailor-piece-icon.png"
              alt=""
              width={36}
              height={36}
              priority
              className="h-9 w-9 object-contain"
            />
          </span>
          <span className="font-semibold tracking-tight">
            Sailor Piece <span className="text-[var(--color-accent)]">Guide</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="!text-[var(--color-text-muted)] hover:!text-[var(--color-text)] !no-underline px-2 sm:px-3 py-1.5 rounded-md hover:bg-[var(--color-surface)] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
