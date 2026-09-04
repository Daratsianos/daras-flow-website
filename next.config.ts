import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev-server lockfile lives inside distDir, so a second dev server
  // (e.g. a sandboxed preview) can only run beside the main one if it gets
  // its own dist dir.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  async redirects() {
    // Old routes from the "apps studio" era of the site.
    return [
      { source: "/apps", destination: "/lab", permanent: true },
      { source: "/vibe-coding", destination: "/lab", permanent: true },
    ];
  },
};

export default nextConfig;
