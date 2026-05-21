import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CATEGORY_PAGE_PATHS, TAB_ORDER, TIER_PAGE_PATHS } from "@/lib/tier-list";
import { WIKI_GUIDES } from "@/lib/wiki-guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/codes", changeFrequency: "daily", priority: 0.95 },
    { path: "/trello", changeFrequency: "weekly", priority: 0.94 },
    { path: "/official-links", changeFrequency: "weekly", priority: 0.93 },
    { path: "/guides", changeFrequency: "weekly", priority: 0.92 },
    { path: "/tier-list", changeFrequency: "weekly", priority: 0.9 },
    ...TAB_ORDER.map((key) => ({
      path: TIER_PAGE_PATHS[key],
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...TAB_ORDER.map((key) => ({
      path: CATEGORY_PAGE_PATHS[key],
      changeFrequency: "weekly" as const,
      priority: key === "races" ? 0.88 : 0.84,
    })),
    ...Object.values(WIKI_GUIDES).map((guide) => ({
      path: guide.path,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
    { path: "/guide", changeFrequency: "weekly", priority: 0.8 },
  ] as const;

  return routes.map((path) => ({
    url: `${SITE_URL}${path.path}`,
    lastModified: now,
    changeFrequency: path.changeFrequency,
    priority: path.priority,
  }));
}
