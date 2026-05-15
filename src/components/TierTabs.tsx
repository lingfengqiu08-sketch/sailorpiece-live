"use client";

import { useEffect, useState } from "react";
import { TierRows } from "@/components/TierRows";
import { TAB_LABELS, TAB_ORDER, type TabKey, tierList } from "@/lib/tier-list";
import { trackEvent } from "@/lib/analytics";

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
      <div className="mt-6">
        {tab ? <TierRows tab={tab} /> : null}
      </div>
    </div>
  );
}
