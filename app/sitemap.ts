import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { legalPages } from "@/lib/legal";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about-us", "/contact-us", "/portfolio", "/reviews", "/career", "/courses", "/blog", "/faq"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/${s.slug}`, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, priority: 0.6 })),
    ...legalPages.map((l) => ({ url: `${site.url}/${l.slug}`, priority: 0.3 })),
  ];
}
