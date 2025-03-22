import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "", // Leave empty if using default port 80
        pathname: "/next_backend/media/**",
      },
    ],
  },
};

export default nextConfig;
