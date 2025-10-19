import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  typescript: { 
    ignoreBuildErrors: true, // keep type checking if you want
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ skip linting during `next build`
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
