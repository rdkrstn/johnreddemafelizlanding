import type { MetadataRoute } from "next";
import { sanityClient, isSanityConfigured } from "@/utils/sanityClient";
import { fallbackCaseStudies } from "@/data/fallback";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://johnred.dev";
  const lastModified = new Date("2026-03-19");

  // Fetch case study slugs from Sanity, falling back to static data
  let caseStudySlugs: string[] = [];

  try {
    if (isSanityConfigured && sanityClient) {
      const studies = await sanityClient.fetch<{ slug: string }[]>(
        `*[_type == "jdCaseStudy"] | order(order asc) { "slug": slug.current }`
      );
      caseStudySlugs = studies.map((s) => s.slug);
    }
  } catch {
    // Sanity fetch failed — fall through to fallback
  }

  // Use fallback slugs if Sanity returned nothing
  if (caseStudySlugs.length === 0) {
    caseStudySlugs = fallbackCaseStudies.map((s) => s.slug);
  }

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/book-a-call`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic case study detail pages
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudySlugs.map(
    (slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...caseStudyRoutes];
}
