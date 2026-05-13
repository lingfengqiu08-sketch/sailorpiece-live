import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sailorpiece.live" }],
        destination: "https://sailorpiece.live/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
