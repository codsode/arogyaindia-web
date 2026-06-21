import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow blog cover images served from S3 and the backend API host.
    remotePatterns: [
      { protocol: "https", hostname: "**.amazonaws.com" },
      { protocol: "https", hostname: "api.arogyaindia.org" },
    ],
  },
};

export default nextConfig;
