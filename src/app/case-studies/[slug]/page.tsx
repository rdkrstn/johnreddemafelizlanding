import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/animations/SectionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { sanityClient, isSanityConfigured, queries } from "@/utils/sanityClient";
import { fallbackCaseStudies } from "@/data/fallback";

interface CaseStudy {
  brandName: string;
  slug: string;
  problem: string;
  solution: string;
  result: string;
  keyMetric: string;
  metricLabel: string;
  context: string;
  metrics: { label: string; value: string }[];
}

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  if (isSanityConfigured) {
    try {
      const data = await sanityClient.fetch(queries.caseStudyBySlug, { slug });
      if (data) return data;
    } catch {
      // fall through to fallback
    }
  }
  return fallbackCaseStudies.find((cs) => cs.slug === slug) || null;
}

async function getAllSlugs(): Promise<string[]> {
  if (isSanityConfigured) {
    try {
      const data = await sanityClient.fetch(
        `*[_type == "jdCaseStudy"]{ "slug": slug.current }`
      );
      if (data?.length) return data.map((d: { slug: string }) => d.slug);
    } catch {
      // fall through
    }
  }
  return fallbackCaseStudies.map((cs) => cs.slug);
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) return { title: "Case Study Not Found" };
  return {
    title: `${cs.brandName} Case Study`,
    description: `${cs.problem} → ${cs.result}`,
  };
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);

  if (!cs) {
    return (
      <>
        <Navbar />
        <SectionWrapper bg="dark" maxWidth="max-w-3xl">
          <h1 className="font-display text-2xl font-semibold text-soft-white">
            Case study not found.
          </h1>
          <Link
            href="/case-studies"
            className="text-teal hover:text-cyan text-sm mt-4 inline-block"
          >
            &larr; Back to all case studies
          </Link>
        </SectionWrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <SectionWrapper bg="dark" maxWidth="max-w-3xl">
        <FadeIn>
          <Link
            href="/case-studies"
            className="text-teal hover:text-cyan text-sm mb-8 inline-block font-medium"
          >
            &larr; All Case Studies
          </Link>

          <p className="section-label">CASE STUDY</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-soft-white mb-4">
            {cs.brandName}
          </h1>

          <div className="font-display text-5xl md:text-6xl font-bold text-cyan tracking-tight mb-2">
            {cs.keyMetric}
          </div>
          <p className="text-cool-gray/60 text-sm mb-12">{cs.metricLabel}</p>
        </FadeIn>

        {/* Metrics Grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {cs.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-card-bg border border-border-cyan rounded-xl p-4 text-center"
              >
                <div className="font-display text-lg font-bold text-cyan">
                  {m.value}
                </div>
                <div className="text-[11px] text-cool-gray/60 mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Context */}
        <FadeIn delay={0.2}>
          <div className="mb-10">
            <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-teal mb-3">
              Context
            </h2>
            <p className="text-[15px] text-cool-gray leading-relaxed">
              {cs.context}
            </p>
          </div>
        </FadeIn>

        {/* Problem */}
        <FadeIn delay={0.3}>
          <div className="mb-10">
            <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-teal mb-3">
              Problem
            </h2>
            <p className="text-[15px] text-cool-gray leading-relaxed">
              {cs.problem}
            </p>
          </div>
        </FadeIn>

        {/* Solution */}
        <FadeIn delay={0.4}>
          <div className="mb-10">
            <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-teal mb-3">
              Solution
            </h2>
            <p className="text-[15px] text-cool-gray leading-relaxed">
              {cs.solution}
            </p>
          </div>
        </FadeIn>

        {/* Result */}
        <FadeIn delay={0.5}>
          <div className="mb-12">
            <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-teal mb-3">
              Result
            </h2>
            <p className="text-[16px] text-soft-white font-medium">
              {cs.result}
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="bg-primary rounded-2xl p-12 text-center">
            <h3 className="font-display text-xl font-semibold text-white mb-3">
              Similar problem? Let&apos;s diagnose it.
            </h3>
            <p className="text-[14px] text-slate-400 mb-6">
              Book a 15-minute diagnostic and I&apos;ll identify the top gaps
              in your current system.
            </p>
            <Link href="/book-a-call" className="btn-primary">
              Book a Strategy Call
            </Link>
          </div>
        </FadeIn>
      </SectionWrapper>

      <Footer />
    </>
  );
}
