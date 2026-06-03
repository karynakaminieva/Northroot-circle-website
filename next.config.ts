import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "northroot.co" },
    ],
  },
};

export default nextConfig;
