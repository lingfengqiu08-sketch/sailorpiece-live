import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sailorpiece.live" }],
        destination: "https://sailorpiece.live/:path*",
        permanent: true,
      },
      // Cannibalization fix: /guides hub duplicated /guide intent; Google
      // indexed /guide and skipped /guides. Consolidate to /guide.
      {
        source: "/guides",
        destination: "/guide",
        permanent: true,
      },
      // Cannibalization fix (2026-06): every game system had two pages
      // (category /fruits + tier /tier-list/fruits) fighting the same
      // intent. Google indexed the category pages and refused the tier
      // subpages (crawl: never). Converge each system onto ONE canonical
      // category page that now carries the full S–D tier ranking.
      // /tier-list itself stays as a navigation hub.
      { source: "/tier-list/fruits", destination: "/fruits", permanent: true },
      { source: "/tier-list/swords", destination: "/swords", permanent: true },
      { source: "/tier-list/clans", destination: "/clans", permanent: true },
      { source: "/tier-list/haki", destination: "/haki", permanent: true },
      { source: "/tier-list/traits", destination: "/traits", permanent: true },
      { source: "/tier-list/races", destination: "/races", permanent: true },
    ];
  },
};

export default nextConfig;
