"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { Droplets, Clock, LayoutDashboard } from "lucide-react";

const problems = [
  {
    icon: <Droplets size={40} strokeWidth={1.5} aria-hidden="true" />,
    title: "Lost Leads After Workshops",
    description:
      "Your workshop was fire. But half the attendees never heard from you again. No follow-up sequence, no nurture emails, no next step. They were interested -- and then they forgot.",
    accentColor: "border-t-red-500",
    iconColor: "text-red-500",
  },
  {
    icon: <Clock size={40} strokeWidth={1.5} aria-hidden="true" />,
    title: "Manual Everything",
    description:
      "You are spending hours on spreadsheets, DMs, and manual follow-ups instead of coaching your clients. Every hour you spend managing leads is an hour you are not delivering your program.",
    accentColor: "border-t-orange-500",
    iconColor: "text-orange-500",
  },
  {
    icon: <LayoutDashboard size={40} strokeWidth={1.5} aria-hidden="true" />,
    title: "No Visibility on Ad Spend",
    description:
      "You cannot tell which ads are actually filling your programs. Your leads live in spreadsheets, your pipeline lives in your head, and you are guessing where your ad budget should go.",
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
            title="Your Workshops Work. Your Backend Doesn't."
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
