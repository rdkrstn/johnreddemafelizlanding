"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { LayoutGrid, CircleCheckBig } from "lucide-react";

const checkpoints = [
  "Automated lead capture from every ad and landing page",
  "Smart follow-up sequences that nurture workshop attendees into buyers",
  "Real-time dashboard showing exactly which ads drive enrollments",
  "AI-powered chatbot that qualifies leads and books calls while you sleep",
] as const;

export default function SolutionFrame() {
  return (
    <section className="py-24 md:py-32 lg:py-40" aria-label="The Solution">
      <Container>
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left column - Visual frame */}
          <ScrollReveal variant="scale">
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
                <GlassPanel
                  glow
                  className="flex flex-col items-center gap-3 rounded-xl px-8 py-6"
                >
                  {/* Revenue Architecture icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-teal/20">
                    <LayoutGrid size={24} strokeWidth={2} className="text-accent-teal" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/90">
                    Funnel Architecture
                  </span>
                </GlassPanel>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column - Text content */}
          <div>
            <ScrollReveal variant="slide-right" delay={0}>
              <p className="section-label text-accent-cyan">
                The Solution
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.1}>
              <h2 className="section-title">
                The System Behind Full Programs
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.15}>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                Your flow should work like this: ad click &rarr; landing page
                &rarr; workshop registration &rarr; automated follow-up &rarr;
                program enrollment. I build the actual infrastructure that makes
                this happen &mdash; from CRM pipelines to nurture sequences to
                payment integration. No advice from the sidelines. Just working
                systems.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.2}>
              <div className="mb-10 flex flex-col space-y-5">
                {checkpoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-accent-teal" aria-hidden="true" />
                    <p className="text-base font-medium text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.3}>
              <a
                href="/book-a-call"
                className="btn-primary"
                aria-label="Book a free strategy call"
              >
                Book a Free Strategy Call &rarr;
              </a>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
