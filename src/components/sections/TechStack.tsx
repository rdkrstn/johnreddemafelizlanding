"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import {
  Code2,
  Atom,
  Users,
  FileText,
  CreditCard,
  Triangle,
  Palette,
  FileCode,
  Bot,
} from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    icon: <Code2 size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    name: "React",
    icon: <Atom size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    name: "CRM Platforms",
    icon: <Users size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    name: "Sanity CMS",
    icon: <FileText size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    name: "PayMongo",
    icon: <CreditCard size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    name: "Vercel",
    icon: <Triangle size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    name: "Tailwind CSS",
    icon: <Palette size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    name: "TypeScript",
    icon: <FileCode size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    name: "Conversational AI",
    icon: <Bot size={32} strokeWidth={1.5} aria-hidden="true" />,
  },
] as const;

export default function TechStack() {
  return (
    <section
      aria-label="Technology stack"
      className="py-16 md:py-20 border-y border-border"
    >
      <Container>
        {/* Section header */}
        <ScrollReveal variant="fade">
          <SectionHeader
            label="Built With"
            title="The Stack Behind Your System"
            align="center"
            titleClassName="text-balance"
            className="mb-14"
          />
        </ScrollReveal>

        {/* Tech grid */}
        <ScrollReveal variant="fade" delay={0.15}>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-9">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-3 rounded-xl border border-transparent px-4 py-6 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-(--shadow-card)"
              >
                <span className="text-muted-foreground transition-colors duration-300 group-hover:text-accent-teal">
                  {tech.icon}
                </span>
                <span className="text-xs font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
