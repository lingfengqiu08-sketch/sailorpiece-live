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
    ];
  },
};

export default nextConfig;
