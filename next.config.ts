import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/alan-engineering-works',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
