import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CATEGORY_PAGE_PATHS, TAB_ORDER, TIER_PAGE_PATHS } from "@/lib/tier-list";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/codes", changeFrequency: "daily", priority: 0.95 },
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
    { path: "/guide", changeFrequency: "weekly", priority: 0.8 },
  ] as const;

  return routes.map((path) => ({
    url: `${SITE_URL}${path.path}`,
    lastModified: now,
    changeFrequency: path.changeFrequency,
    priority: path.priority,
  }));
}
