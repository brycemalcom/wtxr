import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Standalone pages consolidated into homepage sections.
    return [
      { source: "/about", destination: "/#company", permanent: true },
      { source: "/operations", destination: "/#operations", permanent: true },
      { source: "/technology", destination: "/#technology", permanent: true },
    ];
  },
};

export default nextConfig;
