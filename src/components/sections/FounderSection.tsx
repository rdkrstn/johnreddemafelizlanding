"use client";

import { Container } from "@/components/ui/container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

export default function FounderSection() {
  return (
    <section
      aria-label="About the founder"
      className="border-t border-border py-24 md:py-32 lg:py-40"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* Left - Photo */}
          <ScrollReveal variant="slide-left">
            <div className="relative">
              <div
                className="aspect-4/5 overflow-hidden rounded-2xl bg-linear-to-br from-slate-200 via-slate-100 to-slate-300 shadow-lg"
                role="img"
                aria-label="Johnred Demafeliz - Professional photo"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent-teal p-6 text-white shadow-xl">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest">
                  Systems Built
                </p>
                <p className="font-display text-4xl font-black">
                  <CountUp end={250} suffix="+" />
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <p className="section-label text-muted-foreground">The Architect</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-10">Why I Build Systems</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-7">
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  I spent the last decade seeing great companies hit a
                  &ldquo;systems ceiling.&rdquo; They have product-market fit,
                  they have a solid team, but their backend is held together by
                  spreadsheets and hope.
                </p>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  My work is building the revenue infrastructure that allows
                  growth without friction. I approach every project with
                  operational polish and fintech-grade precision.
                </p>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  This isn&apos;t about quick hacks. It&apos;s about building the
                  infrastructure for your next phase of growth.
                </p>
              </div>
            </ScrollReveal>

            {/* Tech icons */}
            <StaggerChildren staggerDelay={0.1} className="mt-12 flex gap-6">
              {/* Terminal icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60 hover:opacity-100 hover:text-accent-teal transition-all duration-300"
                aria-hidden="true"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>

              {/* Database icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60 hover:opacity-100 hover:text-accent-teal transition-all duration-300"
                aria-hidden="true"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>

              {/* API / layers icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60 hover:opacity-100 hover:text-accent-teal transition-all duration-300"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </section>
  );
}
