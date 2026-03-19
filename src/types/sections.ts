// TypeScript interfaces for Sanity document types

export interface JDHeroType {
  badge: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface JDProofMetricType {
  _id: string;
  value: string;
  label: string;
  order: number;
}

export interface JDProblemFrameType {
  sectionLabel: string;
  title: string;
  body: unknown[]; // Portable Text
  ctaLabel: string;
  ctaHref: string;
}

export interface JDServiceType {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface JDCaseStudyType {
  _id: string;
  brandName: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  image?: { asset: { url: string } };
  slug: { current: string };
  featured: boolean;
}

export interface JDTestimonialType {
  _id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  outcome: string;
  initials: string;
}

export interface JDScreenshotProofType {
  _id: string;
  caption: string;
  screenshot: { asset: { url: string } };
  clientName: string;
  brandName: string;
  contextTag?: string;
  order: number;
}

export interface JDFounderType {
  name: string;
  title: string;
  bio: unknown[]; // Portable Text
  image?: { asset: { url: string } };
}

export interface JDFaqItemType {
  _id: string;
  question: string;
  answer: string;
}

export interface JDFooterType {
  brandTagline: string;
  copyright: string;
  contactEmail: string;
  socials: {
    url: string;
    icon?: { asset: { url: string } };
  }[];
  navLinks: { label: string; href: string }[];
}
