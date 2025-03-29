import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "backend.nextco.africa",
        port: "", // Leave empty if using default port 80
        pathname: "/admin/uploads/**",
      },
    ],
  },
};

export default nextConfig;
