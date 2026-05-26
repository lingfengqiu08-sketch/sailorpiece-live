import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { TierRows } from "@/components/TierRows";
import { CATEGORY_GUIDES, type GuideCategory } from "@/lib/category-guides";
import {
  CATEGORY_PAGE_PATHS,
  TAB_LABELS,
  TIER_PAGE_PATHS,
  flattenItems,
  getTab,
  tierList,
} from "@/lib/tier-list";

export function CategoryGuidePage({ category }: { category: GuideCategory }) {
  const guide = CATEGORY_GUIDES[category];
  const tab = getTab(category);
  if (!tab) return null;

  const flatItems = flattenItems(tab);
  const topItems = tab.S?.slice(0, 5) ?? [];

  return (
    <>
      <JsonLd
        path={CATEGORY_PAGE_PATHS[category]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: guide.title, url: CATEGORY_PAGE_PATHS[category] },
        ]}
        faq={guide.faq}
        howto={guide.howTo}
        itemList={{
          name: `${guide.title} Tier Highlights`,
          items: flatItems.map(({ tier, item }) => `${item.name} (${tier} Tier)`),
        }}
      />

      <header className="mb-8">
        <p className="inline-block badge badge-fresh mb-3">{guide.badge}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{guide.title}</h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          {guide.intro} Last reviewed on{" "}
          <strong className="text-[var(--color-text)]">{tierList.last_reviewed_at}</strong>.
        </p>
      </header>

      {guide.quickAnswer && (
        <section className="surface p-6 mb-10">
          <h2 className="text-xl font-bold mb-3">Quick Answer</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {guide.quickAnswer}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={TIER_PAGE_PATHS[category]} className="btn-primary text-sm">
              Open {TAB_LABELS[category].toLowerCase()} tier list
            </Link>
            <Link href="/codes" className="btn-ghost text-sm">
              Get reroll codes
            </Link>
          </div>
        </section>
      )}

      <section className="surface p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">Best Sailor Piece {TAB_LABELS[category]}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {topItems.map((item) => (
            <article key={item.name} className="surface-2 p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-[var(--color-accent)] mt-1 uppercase tracking-wide">
                Best for: {item.best_use}
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                {item.why_ranked}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          Full rankings are also available on the{" "}
          <Link href={TIER_PAGE_PATHS[category]}>{TAB_LABELS[category].toLowerCase()} tier list</Link>.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="surface p-6">
          <h2 className="text-xl font-bold mb-3">{guide.chooseTitle}</h2>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)] list-disc list-inside">
            {guide.chooseTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
        <div className="surface p-6">
          <h2 className="text-xl font-bold mb-3">{guide.farmingTitle}</h2>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)] list-disc list-inside">
            {guide.farmingTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      {guide.sections && (
        <div className="space-y-10 mb-10">
          {guide.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <div className="surface p-6">
                <div className="space-y-3 text-[var(--color-text-muted)] leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-2 text-sm text-[var(--color-text-muted)] list-disc list-inside">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      )}

      {guide.tables && (
        <div className="space-y-10 mb-10">
          {guide.tables.map((table) => (
            <section key={table.id} id={table.id} className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-3">{table.title}</h2>
              {table.intro && (
                <p className="mb-4 text-[var(--color-text-muted)] leading-relaxed">{table.intro}</p>
              )}
              <div className="surface overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                  <thead className="bg-[var(--color-surface-2)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                    <tr>
                      {table.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-semibold">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    {table.rows.map((row) => (
                      <tr key={row.join("|")} className="align-top">
                        {row.map((cell, index) => (
                          <td
                            key={`${row.join("|")}-${index}`}
                            className={
                              "px-4 py-3 leading-relaxed " +
                              (index === 0 ? "font-semibold text-[var(--color-text)]" : "text-[var(--color-text-muted)]")
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      )}

      <section className="mb-10">
        <div className="flex items-end justify-between gap-3 mb-4">
          <h2 className="text-2xl font-bold">{TAB_LABELS[category]} Tier List</h2>
          <Link href={TIER_PAGE_PATHS[category]} className="text-sm">
            Open full page →
          </Link>
        </div>
        <TierRows tab={tab} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={guide.faq} />
      </section>

      <section className="mt-12 surface p-6">
        <h2 className="text-xl font-bold mb-3">Next steps</h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Redeem the latest <Link href="/codes">Sailor Piece codes</Link>, compare the full{" "}
          <Link href="/tier-list">tier list hub</Link>, then cross-check the broader{" "}
          <Link href="/guides">guide hub</Link> before spending rerolls.
        </p>
      </section>
    </>
  );
}
