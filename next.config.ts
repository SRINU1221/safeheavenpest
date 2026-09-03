import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow any images from local public/ folder
    remotePatterns: [],
    // For dev: allow unoptimized images if the images don't exist yet
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
