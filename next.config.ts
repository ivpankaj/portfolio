import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "aceternity.com",
    ],
  },
};

export default nextConfig;
 