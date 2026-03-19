"use client";

import { Container } from "@/components/ui/container";
import ScrollReveal from "@/components/animations/ScrollReveal";

import StaggerChildren from "@/components/animations/StaggerChildren";
import { Terminal, Database, Layers } from "lucide-react";

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
                  Approach
                </p>
                <p className="font-display text-2xl font-black">
                  Builder
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
              <h2 className="section-title mb-10">I Build What Most Consultants Only Talk About</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-7">
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  Most consultants will give you a strategy deck and wish you
                  luck. I am not that person. I am a systems architect who writes
                  the code, wires the automations, and delivers working
                  infrastructure you can use the same week.
                </p>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  My stack combines custom-built Next.js applications with
                  your preferred CRM &mdash; whether that&apos;s GoHighLevel,
                  HubSpot, or something else &mdash; alongside Sanity CMS and
                  payment integrations like PayMongo. You get the power of
                  custom code with the speed of proven platforms. I adapt to
                  your budget and needs, not the other way around.
                </p>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  I understand your world: workshops that sell through trust,
                  high-ticket programs that close through relationships, and
                  the network-based selling that makes your business unique.
                  What you need is someone who builds the system behind all of
                  it so you can focus on what you do best.
                </p>
              </div>
            </ScrollReveal>

            {/* Tech icons */}
            <StaggerChildren staggerDelay={0.1} className="mt-12 flex gap-6">
              <Terminal
                size={32}
                strokeWidth={1.5}
                className="opacity-60 hover:opacity-100 hover:text-accent-teal transition-all duration-300"
                aria-hidden="true"
              />
              <Database
                size={32}
                strokeWidth={1.5}
                className="opacity-60 hover:opacity-100 hover:text-accent-teal transition-all duration-300"
                aria-hidden="true"
              />
              <Layers
                size={32}
                strokeWidth={1.5}
                className="opacity-60 hover:opacity-100 hover:text-accent-teal transition-all duration-300"
                aria-hidden="true"
              />
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </section>
  );
}
