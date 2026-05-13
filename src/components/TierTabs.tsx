"use client";

import { useEffect, useState } from "react";
import { TAB_ORDER, TIER_ORDER, type TabKey, tierList } from "@/lib/tier-list";
import { trackEvent } from "@/lib/analytics";

const TAB_LABELS: Record<TabKey, string> = {
  races: "Races",
  fruits: "Fruits",
  swords: "Swords",
  clans: "Clans",
  haki: "Haki",
  traits: "Traits",
};

export function TierTabs({ defaultTab = "races" as TabKey }: { defaultTab?: TabKey }) {
  const [active, setActive] = useState<TabKey>(defaultTab);

  // Sync with URL hash on mount + listen to hash changes
  useEffect(() => {
    function sync() {
      const hash = window.location.hash.replace("#", "");
      if (TAB_ORDER.includes(hash as TabKey)) {
        setActive(hash as TabKey);
      }
    }
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function pick(tab: TabKey) {
    setActive(tab);
    trackEvent("tier_tab_click", { tab });
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${tab}`);
    }
  }

  const tab = tierList.tabs[active];

  return (
    <div>
      {/* Tab strip */}
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-1.5 min-w-max">
          {TAB_ORDER.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => pick(key)}
              className={
                "px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap " +
                (active === key
                  ? "bg-[var(--color-accent)] text-[#06121f]"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]")
              }
            >
              {TAB_LABELS[key]}
            </button>
          ))}
        </div>
      </div>

      {/* Tier rows */}
      <div className="mt-6 space-y-6">
        {TIER_ORDER.map((tier) => {
          const items = tab?.[tier];
          if (!items || items.length === 0) return null;
          return (
            <section key={tier} className="surface p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`tier-${tier} rounded-md px-3 py-1 text-sm font-bold tracking-wide`}>
                    {tier} Tier
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)] uppercase">
                    {items.length} {items.length === 1 ? "entry" : "entries"}
                  </span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {items.map((item) => (
                  <article
                    key={item.name}
                    className="surface-2 p-3 sm:p-4"
                  >
                    <header className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="text-base font-semibold">{item.name}</h3>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        Updated {item.last_changed}
                      </span>
                    </header>
                    <p className="text-xs text-[var(--color-accent)] mb-2 uppercase tracking-wide">
                      Best for: {item.best_use}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {item.why_ranked}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
