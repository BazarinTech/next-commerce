import type { NextConfig } from "next";
import withPWA from "next-pwa";

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
  // Other custom Next.js config can go here too
};

export default withPWA({
  ...nextConfig,
  dest: "public",
  register: true,
  skipWaiting: true,
});
