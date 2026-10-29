import type { MetadataRoute } from "next";
import { siteData } from "@/data/data";
import { districts } from "@/data/districts";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = siteData.seo.lastUpdated;

  const staticPages: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/rezervasyon", priority: 0.9 },
    { path: "/transfer", priority: 0.9 },
    { path: "/havalimani-rehberi", priority: 0.8 },
    { path: "/arac-ozellikleri", priority: 0.6 },
    { path: "/sss", priority: 0.7 },
    { path: "/hakkimizda", priority: 0.5 },
    { path: "/iletisim", priority: 0.8 },
    { path: "/kvkk", priority: 0.2 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified,
      priority: p.priority,
    })),
    ...districts.map((d) => ({
      url: absoluteUrl(`/transfer/${d.slug}`),
      lastModified,
      priority: 0.8,
    })),
  ];
}
