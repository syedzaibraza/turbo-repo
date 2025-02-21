import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export", // Enables static export mode for client-side apps
  reactStrictMode: true, // Optional but recommended
  images: {
    unoptimized: true, // Ensures images work properly in static export mode
  },
};

export default nextConfig;
