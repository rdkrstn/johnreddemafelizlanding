"use client";

import FadeIn from "@/components/animations/FadeIn";

const checkpoints = [
  "Unified CRM & Sales Automation",
  "Advanced Lead Attribution Models",
  "Automated Client Onboarding Flows",
] as const;

export default function SolutionFrame() {
  return (
    <section className="py-28 sm:py-32 md:py-40" aria-label="The Solution">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          {/* Left column - Visual frame */}
          <FadeIn direction="left">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-primary shadow-2xl">
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,23,41,0.9) 0%, rgba(20,184,166,0.3) 50%, rgba(6,182,212,0.2) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                aria-hidden="true"
              />

              {/* Floating glass card centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="flex flex-col items-center gap-3 rounded-xl border border-white/15 px-8 py-6"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Revenue Architecture icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-teal/20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/90">
                    Revenue Architecture
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right column - Text content */}
          <div>
            <FadeIn>
              <p className="section-label text-accent-cyan">
                The Solution
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="section-title">
                Revenue Systems as a Product
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mb-10 text-lg leading-relaxed text-slate-500">
                I don&apos;t just &ldquo;consult.&rdquo; I build the
                infrastructure your revenue depends on. Every system is
                engineered to capture, nurture, and convert &mdash; without
                adding headcount or ad spend.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mb-10 flex flex-col space-y-5">
                {checkpoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-teal"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <p className="text-base font-medium text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a
                href="#framework"
                className="inline-block rounded bg-primary px-10 py-4 font-bold text-white transition-colors hover:bg-accent-teal"
                aria-label="View the framework"
              >
                View The Framework
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
