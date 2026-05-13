import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", "/codes", "/tier-list", "/races", "/guide"];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/codes" ? "daily" : "weekly",
    priority: path === "/" ? 1.0 : path === "/codes" ? 0.95 : 0.8,
  }));
}
