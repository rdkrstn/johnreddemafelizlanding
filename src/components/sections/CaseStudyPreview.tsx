"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

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
    <section className="overflow-hidden bg-primary py-28 sm:py-32 md:py-40 text-white" aria-label="Case Study Results">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header row */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <FadeIn>
              <p className="section-label text-accent-cyan">
                Success Stories
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="section-title text-white">
                Precision in Practice
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <Link
              href="/case-studies"
              className="hidden border-b border-accent-cyan text-sm font-bold text-accent-cyan transition-colors hover:text-white hover:border-white sm:inline-block"
            >
              View All Case Studies
            </Link>
          </FadeIn>
        </div>

        {/* Cards grid - 2 columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {data.map((study, index) => (
            <FadeIn key={study.slug} delay={0.15 + index * 0.1}>
              <Link href={`/case-studies/${study.slug}`} className="group cursor-pointer block">
                {/* Image area */}
                <div className="relative mb-6 aspect-16/10 overflow-hidden rounded-xl bg-slate-800">
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
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
                      className={`${tagColors[index % tagColors.length]} inline-block rounded px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white`}
                    >
                      {study.keyMetric}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-accent-teal">
                  {study.brandName}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400">
                  {study.result}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile "View All" link */}
        <FadeIn delay={0.5}>
          <div className="mt-8 sm:hidden">
            <Link
              href="/case-studies"
              className="border-b border-accent-cyan text-sm font-bold text-accent-cyan"
            >
              View All Case Studies
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
