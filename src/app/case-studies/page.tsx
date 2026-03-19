import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Container } from "@/components/ui/container";
import {
  sanityClient,
  isSanityConfigured,
  queries,
} from "@/utils/sanityClient";
import { fallbackCaseStudies } from "@/data/fallback";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real businesses. See how revenue systems drive measurable growth.",
};

interface CaseStudy {
  slug: string;
  brandName: string;
  problem: string;
  solution: string;
  result: string;
  keyMetric: string;
  metricLabel: string;
  context?: string;
  metrics?: { label: string; value: string }[];
}

async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!isSanityConfigured) return fallbackCaseStudies;
  try {
    const data = await sanityClient.fetch(queries.allCaseStudies);
    return data?.length ? data : fallbackCaseStudies;
  } catch {
    return fallbackCaseStudies;
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  const featured = caseStudies[0];
  const panels = caseStudies.slice(1);

  return (
    <>
      <Navbar />

      {/* ── Header ── */}
      <section className="pt-12 md:pt-20 pb-12">
        <Container>
          <ScrollReveal variant="fade">
            <p className="section-label mb-4">Portfolio Archive</p>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={0.05}>
            <h1 className="font-display text-5xl md:text-6xl font-black tracking-tighter text-foreground mb-6">
              Case Studies
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={0.1}>
            <div className="border-l-2 border-accent-teal pl-6 max-w-xl">
              <p className="text-base text-muted-foreground leading-relaxed">
                Every engagement is different. But the approach is the same:
                diagnose the system, fix the leaks, measure the results. These
                exhibits document the methodology in action.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Featured Exhibit ── */}
      <section className="pb-16">
        <Container>
          <ScrollReveal variant="scale">
            <Link
              href={`/case-studies/${featured.slug}`}
              className="group block"
            >
              <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Metric area */}
                  <div className="aspect-video lg:aspect-auto bg-linear-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-accent-teal/5 to-accent-cyan/5" />
                    <div className="text-center p-12 relative z-10">
                      <p className="font-display text-6xl md:text-7xl font-black text-accent-teal mb-2">
                        {featured.keyMetric}
                      </p>
                      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                        {featured.metricLabel}
                      </p>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent-teal mb-4">
                      Exhibit 01
                    </p>

                    <h2 className="font-display text-2xl md:text-3xl font-black tracking-tight text-foreground mb-6">
                      {featured.brandName}
                    </h2>

                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          Problem
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {featured.problem}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          Solution
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {featured.solution}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          Result
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          {featured.result}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300">
                      View Full Case Study
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Evidence Panels ── */}
      <section className="pb-16">
        <Container>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {panels.map((cs, i) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block h-full"
              >
                <div className="bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full flex flex-col">
                  {/* Metric area */}
                  <div className="h-64 bg-linear-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-accent-teal/5 to-accent-cyan/5" />
                    <div className="text-center relative z-10">
                      <p className="font-display text-5xl font-black text-accent-teal mb-1">
                        {cs.keyMetric}
                      </p>
                      <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                        {cs.metricLabel}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent-teal mb-3">
                      Exhibit {String(i + 2).padStart(2, "0")}
                    </p>

                    <h3 className="font-display text-xl font-black tracking-tight text-foreground mb-5">
                      {cs.brandName}
                    </h3>

                    <div className="space-y-3 mb-6 flex-1">
                      <div className="border-l-2 border-border pl-4">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                          Problem
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {cs.problem}
                        </p>
                      </div>
                      <div className="border-l-2 border-accent-teal/30 pl-4">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                          Solution
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {cs.solution}
                        </p>
                      </div>
                      <div className="border-l-2 border-accent-cyan/30 pl-4">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                          Result
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          {cs.result}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300">
                      Read Exhibit
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* ── Footer CTA ── */}
      <section className="pb-20">
        <Container>
          <ScrollReveal variant="fade">
            <div className="text-center bg-muted py-20 rounded-2xl border border-border px-8">
              <p className="text-lg text-muted-foreground mb-6">
                Interested in the methodology?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#solution" className="btn-primary">
                  View the Framework
                </Link>
                <Link href="/book-a-call" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <Footer />
    </>
  );
}
