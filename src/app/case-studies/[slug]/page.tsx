import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import { Container } from "@/components/ui/container";
import {
  sanityClient,
  isSanityConfigured,
  queries,
} from "@/utils/sanityClient";
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
        <main id="main-content" className="py-20">
          <Container className="max-w-3xl">
            <h1 className="font-display text-2xl font-semibold text-foreground">
              Case study not found.
            </h1>
            <Link
              href="/case-studies"
              className="text-accent-teal hover:text-accent-cyan text-sm mt-4 inline-block"
            >
              &larr; Back to all case studies
            </Link>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main id="main-content" className="py-12 md:py-20">
        <Container className="max-w-3xl">
          {/* Back link */}
          <ScrollReveal variant="fade">
            <Link
              href="/case-studies"
              className="text-accent-teal hover:text-accent-cyan text-sm mb-8 inline-block font-medium transition-colors duration-200"
            >
              &larr; All Case Studies
            </Link>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal variant="slide-up" delay={0.05}>
            <p className="section-label">Case Study</p>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={0.1}>
            <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">
              {cs.brandName}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={0.15}>
            <div className="mb-2">
              <span className="display-xl text-accent-teal">
                {cs.keyMetric}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-12">
              {cs.metricLabel}
            </p>
          </ScrollReveal>

          {/* Metrics Grid */}
          <ScrollReveal variant="slide-up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-card border border-border rounded-xl p-4 text-center"
                >
                  <div className="font-display text-lg font-bold text-accent-teal">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Context */}
          <ScrollReveal variant="slide-up" delay={0.25}>
            <div className="mb-10">
              <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-accent-teal mb-3">
                Context
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {cs.context}
              </p>
            </div>
          </ScrollReveal>

          {/* Problem */}
          <ScrollReveal variant="slide-up" delay={0.1}>
            <div className="mb-10">
              <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-accent-teal mb-3">
                Problem
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {cs.problem}
              </p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal variant="slide-up" delay={0.1}>
            <div className="mb-10">
              <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-accent-teal mb-3">
                Solution
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {cs.solution}
              </p>
            </div>
          </ScrollReveal>

          {/* Result */}
          <ScrollReveal variant="slide-up" delay={0.1}>
            <div className="mb-12">
              <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-accent-teal mb-3">
                Result
              </h2>
              <p className="text-[16px] text-foreground font-medium">
                {cs.result}
              </p>
            </div>
          </ScrollReveal>

          {/* Bottom CTA */}
          <ScrollReveal variant="fade" delay={0.1}>
            <div className="bg-gradient-cta rounded-2xl p-12 text-center">
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                Similar problem? Let&apos;s diagnose it.
              </h3>
              <p className="text-[14px] text-white/60 mb-6">
                Book a 15-minute diagnostic and I&apos;ll identify the top gaps
                in your current system.
              </p>
              <Link href="/book-a-call" className="btn-accent">
                Book a Strategy Call
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </main>

      <Footer />
    </>
  );
}
