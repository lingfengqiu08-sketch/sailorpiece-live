import { TIER_ORDER, type TierTab } from "@/lib/tier-list";

export function TierRows({ tab }: { tab: TierTab }) {
  return (
    <div className="space-y-6">
      {TIER_ORDER.map((tier) => {
        const items = tab[tier];
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
                <article key={item.name} className="surface-2 p-3 sm:p-4">
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
  );
}
