import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

const LAST_MODIFIED = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_CONFIG.url}/Bikes/Hero BG web and Tab home page.png`,
        `${SITE_CONFIG.url}/Bikes/Scooter png 1.jpg`,
        `${SITE_CONFIG.url}/Second Logo for Winev.png`,
      ],
    },
    {
      url: `${SITE_CONFIG.url}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}/faq`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${SITE_CONFIG.url}/Arun 1.jpeg`],
    },
    {
      url: `${SITE_CONFIG.url}/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_CONFIG.url}/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
