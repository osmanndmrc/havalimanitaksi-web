import type { MetadataRoute } from "next";
import { siteData } from "@/data/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteData.seo.siteUrl}/sitemap.xml`,
  };
}
