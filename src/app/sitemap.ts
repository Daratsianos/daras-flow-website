import type { MetadataRoute } from "next";

const baseUrl = "https://darasflow.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/apps", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/vibe-coding", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
