"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";

const problems = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2v6l3-3" />
        <path d="M12 8l-3-3" />
        <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
        <path d="M12 12v4" />
        <circle cx="12" cy="20" r="0.5" />
      </svg>
    ),
    title: "Leaking Funnels",
    description:
      "Warm leads slip through broken follow-up sequences, costing you revenue before the first conversation even happens.",
    accentColor: "border-t-red-500",
    iconColor: "text-red-500",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Manual Bottlenecks",
    description:
      "Hours burned weekly on repetitive admin tasks that should be fully automated, pulling focus from high-impact work.",
    accentColor: "border-t-orange-500",
    iconColor: "text-orange-500",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8h2m2 0h2m2 0h2" />
        <path d="M7 11h10" />
      </svg>
    ),
    title: "Fragmented Data",
    description:
      "No single source of truth. Leads scattered across spreadsheets, CRMs, and inboxes make it impossible to act decisively.",
    accentColor: "border-t-yellow-500",
    iconColor: "text-yellow-500",
  },
] as const;

export default function ProblemFrame() {
  return (
    <section aria-label="The Diagnosis" className="py-24 md:py-32 lg:py-40 bg-secondary">
      <Container>
        {/* Centered heading */}
        <ScrollReveal variant="fade">
          <SectionHeader
            label="The Diagnosis"
            title="The High Cost of Broken Systems"
            align="center"
            titleClassName="text-balance"
            className="mb-20"
          />
        </ScrollReveal>

        {/* 3-column card grid */}
        <StaggerChildren
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((problem) => (
            <div
              key={problem.title}
              className={`group p-10 bg-card border border-border rounded-xl shadow-(--shadow-card) hover:-translate-y-1 hover:shadow-(--shadow-elevated) transition-all duration-300 border-t-4 ${problem.accentColor}`}
            >
              {/* Icon */}
              <div className={`${problem.iconColor} mb-8 transition-transform duration-300 group-hover:scale-110`}>
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold mb-5 text-foreground">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
