import type { MetadataRoute } from "next";
import { SERVICES, COUNTRIES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nakshglobalvisa.com";
  const staticPages = [
    "", "/about", "/services", "/countries",
    "/process", "/success-stories", "/free-assessment", "/contact",
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const countryPages = COUNTRIES.map((c) => ({
    url: `${base}/countries/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...countryPages];
}
