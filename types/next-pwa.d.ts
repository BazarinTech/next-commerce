declare module "next-pwa" {
    import type { NextConfig } from "next";
  
    type RuntimeCaching = {
      handler: string;
      urlPattern: RegExp | string;
      method?: string;
      options?: Record<string, any>;
    };
  
    interface PWAOptions {
      dest: string;
      disable?: boolean;
      register?: boolean;
      skipWaiting?: boolean;
      buildExcludes?: RegExp[];
      runtimeCaching?: RuntimeCaching[];
      [key: string]: any;
    }
  
    export default function withPWA(config: NextConfig & { pwa?: PWAOptions }): NextConfig;
  }
  