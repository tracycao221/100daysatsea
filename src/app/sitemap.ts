import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/codes", changeFrequency: "daily", priority: 0.95 },
  { path: "/codes/20pearls", changeFrequency: "daily", priority: 0.82 },
  { path: "/tier-list", changeFrequency: "weekly", priority: 0.9 },
  { path: "/trello", changeFrequency: "weekly", priority: 0.72 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/how-to-play", changeFrequency: "weekly", priority: 0.74 },
  { path: "/guides/beginner-guide", changeFrequency: "weekly", priority: 0.74 },
  { path: "/guides/tips", changeFrequency: "weekly", priority: 0.72 },
  { path: "/guides/survival-strategy", changeFrequency: "weekly", priority: 0.73 },
  { path: "/guides/walkthrough", changeFrequency: "weekly", priority: 0.72 },
  { path: "/guides/classes", changeFrequency: "daily", priority: 0.74 },
  { path: "/guides/companions", changeFrequency: "daily", priority: 0.74 },
  { path: "/guides/locations", changeFrequency: "daily", priority: 0.75 },
  { path: "/guides/rival-rigs", changeFrequency: "daily", priority: 0.75 },
  { path: "/guides/badges", changeFrequency: "daily", priority: 0.74 },
  { path: "/guides/faq", changeFrequency: "weekly", priority: 0.7 },
  { path: "/wiki", changeFrequency: "weekly", priority: 0.8 },
  { path: "/updates", changeFrequency: "daily", priority: 0.75 },
  { path: "/updates/ice-region", changeFrequency: "daily", priority: 0.76 },
  { path: "/sources", changeFrequency: "monthly", priority: 0.5 },
];

function canonicalUrl(path: string) {
  const normalizedPath = path === "" || path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return `${siteConfig.domain}${normalizedPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return routes
    .map((route) => ({
      url: canonicalUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
    .filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
}
