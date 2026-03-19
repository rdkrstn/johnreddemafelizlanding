"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/container";
import { Layers, Code, Globe, Wrench } from "lucide-react";

const trustItems = [
  {
    label: "Custom-Built Systems",
    icon: <Layers size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    label: "Full-Stack Architecture",
    icon: <Code size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    label: "PH & Global",
    icon: <Globe size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    label: "Builder, Not Advisor",
    icon: <Wrench size={20} strokeWidth={2} aria-hidden="true" />,
  },
] as const;

export default function ProofStrip() {
  return (
    <section
      aria-label="Trust indicators"
      className="py-12 md:py-16 border-b border-slate-100 bg-white/50"
    >
      <Container>
        <ScrollReveal variant="fade" duration={0.5}>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            {trustItems.map((item) => (
              <span
                key={item.label}
                className="group flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.3em] text-slate-600 hover:text-slate-900 transition-colors duration-300 cursor-default"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                {item.label}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
