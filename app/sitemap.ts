import type { MetadataRoute } from "next";
import { SERVICES, COUNTRIES, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/+$/, "");
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/countries", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/free-assessment", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/process", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/success-stories", priority: 0.8, changeFrequency: "weekly" as const },
  ].map((item) => ({
    url: `${base}${item.path}`,
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const countryPages = COUNTRIES.map((c) => ({
    url: `${base}/countries/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...countryPages];
}
