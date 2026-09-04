import type { MetadataRoute } from "next";

const baseUrl = "https://www.darasflow.com";

// Update when a page's content actually changes; a build timestamp would
// re-stamp every page on every deploy.
const LAST_MODIFIED = "2026-09-04";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = LAST_MODIFIED;

  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/lab", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
