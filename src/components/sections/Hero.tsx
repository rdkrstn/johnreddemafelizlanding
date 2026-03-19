"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-32 px-6 border-b border-slate-100"
      aria-label="Hero"
    >
      {/* Large blur glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left column */}
          <div>
            <FadeIn>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-teal/10 text-accent-teal text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
                </span>
                Currently accepting engagements
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              {/* Headline */}
              <h1 className="font-display text-6xl md:text-8xl font-black leading-[1.05] text-primary mb-6" style={{ letterSpacing: "-0.04em" }}>
                Fix the gaps that are{" "}
                <em className="italic text-accent-teal">costing</em>{" "}
                you leads.
              </h1>
            </FadeIn>

            {/* Thin horizontal rule */}
            <div className="border-b border-slate-100 mb-6" aria-hidden="true" />

            <FadeIn delay={0.2}>
              {/* Subtitle */}
              <p className="font-sans text-xl text-slate-500 max-w-lg leading-relaxed mb-10">
                Revenue Systems Consultant for coaches, educators, and service
                founders. I build the infrastructure your revenue depends on.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/book-a-call"
                  className="bg-primary text-white px-8 py-4 font-bold rounded-lg shadow-xl shadow-primary/20 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  aria-label="Book a strategy call"
                >
                  Book a Strategy Call &rarr;
                </a>
                <a
                  href="/#results"
                  className="border-2 border-slate-200 px-8 py-4 font-bold rounded-lg transition-all duration-300 hover:bg-slate-50"
                  aria-label="View case studies"
                >
                  View Case Studies
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right column - 2x2 metric cards */}
          <FadeIn delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-5">
              {/* Column 1 — offset down */}
              <div className="flex flex-col gap-5 mt-10">
                {/* Card 1: Lead Conversion */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-3">
                    Lead Conversion
                  </p>
                  <p className="font-display text-4xl font-black text-primary">
                    +42%
                  </p>
                </div>

                {/* Card 3: Admin Time */}
                <div className="bg-accent-teal text-white rounded-xl shadow-lg p-8">
                  <p className="text-teal-100 text-xs uppercase font-bold tracking-widest mb-3">
                    Admin Time
                  </p>
                  <p className="font-display text-4xl font-black text-accent-cyan">
                    -60%
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-5">
                {/* Card 2: ROI Tracking */}
                <div className="bg-primary text-white rounded-xl shadow-xl p-8">
                  <p className="text-teal-100 text-xs uppercase font-bold tracking-widest mb-3">
                    ROI Tracking
                  </p>
                  <p className="font-display text-4xl font-black">100%</p>
                </div>

                {/* Card 4: Placeholder image */}
                <div className="bg-slate-200 rounded-xl aspect-square" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
