"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/container";

const trustItems = [
  {
    label: "Founder-Led",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    label: "Systems-First",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
  {
    label: "Data-Driven",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Scalable Infrastructure",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
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
