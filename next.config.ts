import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["picsum.photos", "www.svgrepo.com"],
  },
};

export default nextConfig;
