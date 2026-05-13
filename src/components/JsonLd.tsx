import { SITE_NAME, SITE_URL } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQPair {
  q: string;
  a: string;
}

export function JsonLd({
  pageType = "default",
  path = "/",
  breadcrumbs,
  faq,
  howto,
  itemList,
}: {
  pageType?: "default" | "codes" | "tier-list";
  path?: string;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQPair[];
  howto?: { name: string; steps: string[] };
  itemList?: { name: string; items: string[] };
}) {
  const graph: object[] = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}#webpage`,
      url: `${SITE_URL}${path}`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en",
    },
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.url}`,
      })),
    });
  }

  if (faq && faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  if (howto) {
    graph.push({
      "@type": "HowTo",
      name: howto.name,
      step: howto.steps.map((s) => ({
        "@type": "HowToStep",
        text: s,
      })),
    });
  }

  if (itemList) {
    graph.push({
      "@type": "ItemList",
      name: itemList.name,
      itemListElement: itemList.items.map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
