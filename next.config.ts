import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextco.xgramm.com",
        port: "", // Leave empty if using default port 80
        pathname: "/admin/uploads/**",
      },
    ],
  },
};

export default nextConfig;
