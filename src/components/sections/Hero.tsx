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
      className="relative overflow-hidden pt-28 pb-32 px-6 border-b border-border"
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
                Accepting 3 new builds this quarter
              </span>
            </ScrollReveal>

            {/* Headline */}
            <TextReveal
              text="You fill rooms. Your funnel should fill your pipeline."
              as="h1"
              className="display-2xl text-primary mb-6"
              delay={0.1}
              staggerDelay={0.05}
            />

            {/* Thin horizontal rule */}
            <div className="border-b border-border mb-6" aria-hidden="true" />

            {/* Subtitle */}
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="font-sans text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
                You run workshops, webinars, and high-ticket programs. I build
                custom funnels, CRM automation, and AI-powered follow-up
                that captures every lead from your ads and turns attendees
                into paying enrollees &mdash; automatically.
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
                    Book a Free Strategy Call &rarr;
                  </Link>
                </MagneticButton>
                <Link
                  href="/#solution"
                  className="btn-secondary"
                  aria-label="See how it works"
                >
                  See How It Works
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - 2x2 metric cards */}
          <ScrollReveal variant="slide-right" delay={0.2}>
            <StaggerChildren staggerDelay={0.12} className="grid grid-cols-2 gap-5">
              {/* Column 1 - offset down */}
              <div className="flex flex-col gap-5 mt-10">
                {/* Card 1: Lead Capture */}
                <div className="bg-card border border-border rounded-xl shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <p className="text-muted-foreground text-xs uppercase font-bold tracking-widest mb-3">
                    Lead Capture
                  </p>
                  <CountUp
                    end={100}
                    suffix="%"
                    className="font-display text-4xl font-black text-primary"
                  />
                </div>

                {/* Card 3: Manual Work */}
                <div className="bg-accent-teal text-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  <p className="text-white/80 text-xs uppercase font-bold tracking-widest mb-3">
                    Manual Work
                  </p>
                  <CountUp
                    end={80}
                    prefix="-"
                    suffix="%"
                    className="font-display text-4xl font-black text-white"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-5">
                {/* Card 2: Ad Tracking */}
                <div className="bg-primary text-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                  <p className="text-primary-foreground/60 text-xs uppercase font-bold tracking-widest mb-3">
                    Ad Visibility
                  </p>
                  <span className="font-display text-4xl font-black">Full</span>
                </div>

                {/* Card 4: Follow-up */}
                <div className="bg-card border border-accent-teal/20 rounded-xl shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-accent-teal/40">
                  <p className="text-muted-foreground text-xs uppercase font-bold tracking-widest mb-3">
                    Follow-Up
                  </p>
                  <span className="font-display text-4xl font-black text-accent-teal">Auto</span>
                </div>
              </div>
            </StaggerChildren>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
