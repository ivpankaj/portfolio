import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "aceternity.com",
      "ik.imagekit.io",
      "avatar.vercel.sh",
      "cdn.jsdelivr.net",
    ],
  },
};

export default nextConfig;
