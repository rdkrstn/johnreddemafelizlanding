"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface CaseStudy {
  brandName: string;
  slug: string;
  problem: string;
  result: string;
  keyMetric: string;
}

interface CaseStudyPreviewProps {
  data: CaseStudy[];
}

const tagColors = [
  "bg-accent-teal",
  "bg-accent-cyan",
] as const;

export default function CaseStudyPreview({ data }: CaseStudyPreviewProps) {
  return (
    <section
      className="overflow-hidden bg-primary py-24 md:py-32 lg:py-40 text-white"
      aria-label="Case Study Results"
    >
      <Container>
        {/* Header row */}
        <div className="mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <ScrollReveal variant="slide-up">
            <div>
              <p className="section-label text-accent-cyan">
                Success Stories
              </p>
              <h2 className="section-title text-white">
                Real Systems. Measurable Revenue.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.2}>
            <Link
              href="/case-studies"
              className={cn(
                "group/link hidden sm:inline-flex items-center gap-2",
                "border-b border-accent-cyan pb-0.5",
                "text-sm font-bold text-accent-cyan",
                "transition-colors duration-300 hover:text-white hover:border-white"
              )}
            >
              View All Case Studies
              <span
                className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Cards grid */}
        <StaggerChildren
          staggerDelay={0.15}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {data.map((study, index) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block cursor-pointer"
            >
              {/* Image area */}
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-slate-800">
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #0F766E 0%, #06B6D4 100%)"
                        : "linear-gradient(135deg, #1E3A5F 0%, #0F766E 100%)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-black/20"
                  aria-hidden="true"
                />

                {/* Tag badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span
                    className={cn(
                      tagColors[index % tagColors.length],
                      "inline-block rounded px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                    )}
                  >
                    {study.keyMetric}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent-teal">
                {study.brandName}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300">
                {study.result}
              </p>
            </Link>
          ))}
        </StaggerChildren>

        {/* Mobile "View All" link */}
        <ScrollReveal variant="fade" delay={0.4}>
          <div className="mt-10 sm:hidden">
            <Link
              href="/case-studies"
              className="group/link inline-flex items-center gap-2 border-b border-accent-cyan pb-0.5 text-sm font-bold text-accent-cyan"
            >
              View All Case Studies
              <span
                className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
