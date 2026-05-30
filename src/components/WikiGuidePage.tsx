import Link from "next/link";
import { CodesInlineWidget } from "@/components/CodesInlineWidget";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { codes } from "@/lib/codes";
import { formatDate } from "@/lib/date";
import { type WikiGuide } from "@/lib/wiki-guides";

export function WikiGuidePage({ guide }: { guide: WikiGuide }) {
  const lastChecked = formatDate(codes.last_checked_at);

  return (
    <>
      <JsonLd
        path={guide.path}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/guide" },
          { name: guide.title, url: guide.path },
        ]}
        faq={guide.faq}
        howto={guide.howTo}
        itemList={guide.itemList}
      />

      <header className="mb-8">
        <p className="inline-block badge badge-fresh mb-3">{guide.badge} - Updated {lastChecked}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{guide.title}</h1>
        <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          {guide.intro}
        </p>
      </header>

      <section className="surface p-6 mb-10">
        <h2 className="text-xl font-bold mb-3">Quick Answer</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed">{guide.quickAnswer}</p>
      </section>

      <CodesInlineWidget context="before planning this guide" />

      <section className="grid sm:grid-cols-3 gap-3 mb-10">
        {guide.facts.map((fact) => (
          <article key={fact.label} className="surface p-4">
            <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">{fact.label}</p>
            <h2 className="mt-2 text-lg font-bold">{fact.value}</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{fact.note}</p>
          </article>
        ))}
      </section>

      <div className="space-y-10">
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

              {section.links && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.links.map((link) => (
                    <Link key={link.href} href={link.href} className="btn-ghost text-sm">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {guide.tables && (
        <div className="mt-12 space-y-10">
          {guide.tables.map((table) => (
            <section key={table.id} id={table.id} className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-3">{table.title}</h2>
              {table.intro && (
                <p className="mb-4 text-[var(--color-text-muted)] leading-relaxed">{table.intro}</p>
              )}
              <div className="surface overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
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

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <FAQ items={guide.faq} />
      </section>

      <section className="mt-12 surface p-6">
        <h2 className="text-xl font-bold mb-3">Next Steps</h2>
        <div className="flex flex-wrap gap-2">
          {guide.nextSteps.map((link) => (
            <Link key={link.href} href={link.href} className="btn-ghost text-sm">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
