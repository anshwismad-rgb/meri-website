import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep old wismad.com URLs (and their search rankings) working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/blog-details/:slug(.+)\\.html", destination: "/blog/:slug", permanent: true },
      { source: "/:slug([a-z0-9-]+)\\.html", destination: "/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
