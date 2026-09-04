import { SITE_URL } from "@/lib/apps";

// Per-page Open Graph block. A page-level `openGraph` replaces the layout's
// object wholesale, so every page passes its own url through this helper;
// Next fills og:title and og:description from the page's own metadata.
export function og(path: string) {
  return {
    url: path,
    siteName: "Daras Flow",
    locale: "en_GB",
    type: "website" as const,
  };
}

export { SITE_URL };
