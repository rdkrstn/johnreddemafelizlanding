"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { Search, Compass, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search size={28} strokeWidth={1.5} aria-hidden="true" />,
    title: "Discovery",
    description:
      "We audit your current flow \u2014 ads, landing pages, follow-ups, tools \u2014 and identify where leads drop off.",
  },
  {
    number: "02",
    icon: <Compass size={28} strokeWidth={1.5} aria-hidden="true" />,
    title: "Architecture",
    description:
      "I map out the complete system: lead capture, CRM pipeline, automated sequences, and tracking dashboard.",
  },
  {
    number: "03",
    icon: <Wrench size={28} strokeWidth={1.5} aria-hidden="true" />,
    title: "Build",
    description:
      "I build everything \u2014 custom funnels, CRM setup, AI chatbots, payment integration, automations \u2014 and connect it all.",
  },
  {
    number: "04",
    icon: <Rocket size={28} strokeWidth={1.5} aria-hidden="true" />,
    title: "Launch & Optimize",
    description:
      "We go live, monitor the metrics, and fine-tune until your pipeline runs like clockwork.",
  },
] as const;

export default function Process() {
  return (
    <section
      id="process"
      aria-label="How It Works"
      className="py-24 md:py-32 lg:py-40 bg-secondary"
    >
      <Container>
        {/* Section header */}
        <ScrollReveal variant="fade">
          <SectionHeader
            label="How It Works"
            title="From Diagnosis to Launch in 4 Steps"
            align="center"
            titleClassName="text-balance"
            className="mb-20"
          />
        </ScrollReveal>

        {/* Process timeline */}
        <StaggerChildren
          staggerDelay={0.12}
          className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connecting line - horizontal on desktop, vertical on mobile */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop horizontal connector */}
                  <div
                    className="absolute top-10 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] lg:block"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-accent-teal), var(--color-accent-cyan))",
                      opacity: 0.3,
                    }}
                    aria-hidden="true"
                  />
                  {/* Mobile / tablet vertical connector */}
                  <div
                    className="absolute -bottom-6 left-1/2 block h-12 w-px -translate-x-1/2 lg:hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, var(--color-accent-teal), var(--color-accent-cyan))",
                      opacity: 0.3,
                    }}
                    aria-hidden="true"
                  />
                </>
              )}

              {/* Step number badge */}
              <span className="mb-4 font-mono text-xs font-bold text-accent-teal tracking-widest">
                {step.number}
              </span>

              {/* Icon container */}
              <div className="group mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-elevated)">
                <span className="text-accent-teal transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 font-display text-lg font-bold text-foreground">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mx-auto max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
