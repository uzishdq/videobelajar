import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      new URL("https://picsum.photos/seed/**"),
      new URL("https://www.svgrepo.com/show/***"),
    ],
  },
};

export default nextConfig;
