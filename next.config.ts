import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextco.xgramm.com",
        port: "",
        pathname: "/admin/uploads/**",
      },
    ],
  },
};

export default nextConfig;
