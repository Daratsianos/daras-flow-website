import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev-server lockfile lives inside distDir, so a second dev server
  // (e.g. a sandboxed preview) can only run beside the main one if it gets
  // its own dist dir.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
};

export default nextConfig;
