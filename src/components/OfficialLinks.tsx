"use client";

import siteLinks from "@/data/site-links.json";
import { trackEvent } from "@/lib/analytics";

const ICONS: Record<string, string> = {
  roblox: "🎮",
  discord: "💬",
  trello: "📋",
};

export function OfficialLinks() {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {siteLinks.official.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("official_link_click", {
              link_label: l.label,
              link_url: l.url,
            })
          }
          className="surface p-4 hover:border-[color-mix(in_srgb,var(--color-accent)_45%,var(--color-border))] transition-colors !no-underline !text-[var(--color-text)]"
        >
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-2xl">{ICONS[l.icon] ?? "🔗"}</span>
            <span className="font-semibold">{l.label}</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">{l.description}</p>
        </a>
      ))}
    </div>
  );
}
