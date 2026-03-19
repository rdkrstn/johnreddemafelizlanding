import { createClient, type SanityClient } from "next-sanity";

// Check if Sanity is configured (has a project ID)
export const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_ID;

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-06-21",
  useCdn: process.env.NODE_ENV === "production",
};

// Only create the client if Sanity is configured
export const sanityClient: SanityClient = isSanityConfigured
  ? createClient(sanityConfig)
  : (null as unknown as SanityClient);

// GROQ Queries
export const queries = {
  featuredCaseStudies: `*[_type == "jdCaseStudy" && featured == true] | order(order asc) [0...3] {
    brandName,
    "slug": slug.current,
    problem,
    solution,
    result,
    keyMetric,
    metricLabel
  }`,

  allCaseStudies: `*[_type == "jdCaseStudy"] | order(order asc) {
    brandName,
    "slug": slug.current,
    problem,
    solution,
    result,
    keyMetric,
    metricLabel
  }`,

  caseStudyBySlug: `*[_type == "jdCaseStudy" && slug.current == $slug][0] {
    brandName,
    "slug": slug.current,
    problem,
    solution,
    result,
    keyMetric,
    metricLabel,
    context,
    metrics
  }`,

  featuredTestimonials: `*[_type == "jdTestimonial" && featured == true] | order(order asc) {
    quote,
    name,
    role,
    company,
    initials
  }`,

  allTestimonials: `*[_type == "jdTestimonial"] | order(order asc) {
    quote,
    name,
    role,
    company,
    initials
  }`,

  screenshotProofs: `*[_type == "jdScreenshotProof"] | order(order asc) {
    caption,
    "screenshotUrl": screenshot.asset->url,
    clientName,
    brandName,
    contextTag
  }`,
};
