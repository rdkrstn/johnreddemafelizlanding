"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import CountUp from "@/components/animations/CountUp";
import MagneticButton from "@/components/animations/MagneticButton";
import StaggerChildren from "@/components/animations/StaggerChildren";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-32 px-6 border-b border-slate-100"
      aria-label="Hero"
    >
      {/* Background glow orbs */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-32 w-80 h-80 bg-accent-teal/8 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <ScrollReveal variant="fade">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-teal/15 text-teal text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
                </span>
                Currently accepting engagements
              </span>
            </ScrollReveal>

            {/* Headline */}
            <TextReveal
              text="Fix the gaps that are costing you leads."
              as="h1"
              className="display-2xl text-primary mb-6"
              delay={0.1}
              staggerDelay={0.05}
            />

            {/* Thin horizontal rule */}
            <div className="border-b border-slate-100 mb-6" aria-hidden="true" />

            {/* Subtitle */}
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="font-sans text-xl text-slate-600 max-w-lg leading-relaxed mb-10">
                Revenue Systems Consultant for coaches, educators, and service
                founders. I build the infrastructure your revenue depends on.
              </p>
            </ScrollReveal>

            {/* Dual CTAs */}
            <ScrollReveal variant="slide-up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <Link
                    href="/book-a-call"
                    className="btn-primary"
                    aria-label="Book a strategy call"
                  >
                    Book a Strategy Call &rarr;
                  </Link>
                </MagneticButton>
                <Link
                  href="/#results"
                  className="btn-secondary"
                  aria-label="View case studies"
                >
                  View Case Studies
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - 2x2 metric cards */}
          <ScrollReveal variant="slide-right" delay={0.2}>
            <StaggerChildren staggerDelay={0.12} className="grid grid-cols-2 gap-5">
              {/* Column 1 - offset down */}
              <div className="flex flex-col gap-5 mt-10">
                {/* Card 1: Lead Conversion */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-3">
                    Lead Conversion
                  </p>
                  <CountUp
                    end={42}
                    prefix="+"
                    suffix="%"
                    className="font-display text-4xl font-black text-primary"
                  />
                </div>

                {/* Card 3: Admin Time */}
                <div className="bg-accent-teal text-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  <p className="text-white/80 text-xs uppercase font-bold tracking-widest mb-3">
                    Admin Time
                  </p>
                  <CountUp
                    end={60}
                    prefix="-"
                    suffix="%"
                    className="font-display text-4xl font-black text-white"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-5">
                {/* Card 2: ROI Tracking */}
                <div className="bg-primary text-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                  <p className="text-slate-300 text-xs uppercase font-bold tracking-widest mb-3">
                    ROI Tracking
                  </p>
                  <CountUp
                    end={100}
                    suffix="%"
                    className="font-display text-4xl font-black"
                  />
                </div>

                {/* Card 4: Pipeline Velocity */}
                <div className="bg-white border border-accent-teal/20 rounded-xl shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-accent-teal/40">
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-3">
                    Pipeline Velocity
                  </p>
                  <CountUp
                    end={3}
                    suffix="x"
                    className="font-display text-4xl font-black text-accent-teal"
                  />
                </div>
              </div>
            </StaggerChildren>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
