"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Container } from "@/components/ui/container";
import { Search, Compass, Wrench, Rocket } from "lucide-react";
import { type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface WorkflowNode {
  number: string;
  icon: ReactNode;
  title: string;
  subNodes: string[];
  glow?: boolean;
}

const workflowNodes: WorkflowNode[] = [
  {
    number: "01",
    icon: <Search size={26} strokeWidth={1.5} aria-hidden="true" />,
    title: "Discovery",
    subNodes: ["Ad Audit", "Funnel Review", "Lead Flow Map"],
  },
  {
    number: "02",
    icon: <Compass size={26} strokeWidth={1.5} aria-hidden="true" />,
    title: "Architecture",
    subNodes: ["System Blueprint", "CRM Pipeline", "Automation Map"],
  },
  {
    number: "03",
    icon: <Wrench size={26} strokeWidth={1.5} aria-hidden="true" />,
    title: "Build",
    subNodes: ["Custom Funnel", "CRM Setup", "AI Chatbot"],
    glow: true,
  },
  {
    number: "04",
    icon: <Rocket size={26} strokeWidth={1.5} aria-hidden="true" />,
    title: "Launch",
    subNodes: ["Go Live", "Dashboard", "Optimize"],
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

/** Small branching sub-node card */
function SubNode({ label, delay }: { label: string; delay: number }) {
  return (
    <ScrollReveal variant="scale" delay={delay} duration={0.4}>
      <div className="relative flex items-center justify-center rounded-lg border border-white/6 bg-white/3 px-3 py-2 text-xs text-white/60 backdrop-blur-sm transition-colors duration-300 hover:border-white/10 hover:bg-white/6 hover:text-white/80">
        {label}
      </div>
    </ScrollReveal>
  );
}

/** Horizontal connector line between main nodes (desktop only) */
function HorizontalConnector() {
  return (
    <div className="hidden lg:flex items-center self-start mt-13 -mx-2 xl:-mx-4" aria-hidden="true">
      {/* Left dot */}
      <div className="h-2 w-2 shrink-0 rounded-full bg-accent-teal/60" />
      {/* Line */}
      <div className="h-px w-full min-w-4 flex-1 connector-line" />
      {/* Right dot */}
      <div className="h-2 w-2 shrink-0 rounded-full bg-accent-cyan/60" />
    </div>
  );
}

/** Vertical connector line between main nodes (mobile only) */
function VerticalConnector() {
  return (
    <div className="flex lg:hidden flex-col items-center py-2" aria-hidden="true">
      {/* Top dot */}
      <div className="h-2 w-2 shrink-0 rounded-full bg-accent-teal/60" />
      {/* Line */}
      <div className="w-px h-8 connector-line-vertical" />
      {/* Bottom dot */}
      <div className="h-2 w-2 shrink-0 rounded-full bg-accent-cyan/60" />
    </div>
  );
}

/** Dotted line connecting main node to sub-nodes */
function SubNodeConnector() {
  return (
    <div className="mx-auto my-3 h-6 w-px border-l border-dashed border-white/10" aria-hidden="true" />
  );
}

/** Main workflow node card */
function MainNode({ node }: { node: WorkflowNode }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Main card */}
      <div
        className={[
          "group relative w-full max-w-60 rounded-xl border border-white/10 bg-white/5 px-6 py-7 backdrop-blur-md transition-all duration-500",
          "hover:border-white/20 hover:bg-white/8 hover:-translate-y-1",
          node.glow ? "glow-node" : "",
        ].join(" ")}
      >
        {/* Step number badge */}
        <span className="absolute -top-3 left-4 rounded-full border border-accent-teal/30 bg-bg-dark px-2.5 py-0.5 font-mono text-[0.65rem] font-bold tracking-widest text-accent-teal">
          {node.number}
        </span>

        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-accent-teal transition-transform duration-300 group-hover:scale-110">
          {node.icon}
        </div>

        {/* Title */}
        <h3 className="font-display text-base font-bold text-white sm:text-lg">
          {node.title}
        </h3>
      </div>

      {/* Dotted line to sub-nodes */}
      <SubNodeConnector />

      {/* Sub-nodes */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-[16rem]">
        {node.subNodes.map((label, i) => (
          <SubNode key={label} label={label} delay={0.3 + i * 0.08} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function Process() {
  return (
    <section
      id="process"
      aria-label="How It Works"
      className="relative overflow-hidden bg-gradient-cta py-24 md:py-32 lg:py-40"
    >
      {/* Subtle radial glow behind the section */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(20,184,166,0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal variant="fade">
          <div className="mb-16 text-center md:mb-20">
            <p className="section-label text-accent-teal!">How It Works</p>
            <h2 className="section-title text-white! text-balance">
              From Diagnosis to Launch in 4 Steps
            </h2>
          </div>
        </ScrollReveal>

        {/* ---- Desktop / Tablet workflow (md+) ---- */}

        {/* Desktop: horizontal 4-col flow */}
        <StaggerChildren
          staggerDelay={0.15}
          className="hidden lg:flex items-start justify-center"
        >
          {workflowNodes.map((node, idx) => (
            <div key={node.number} className="contents">
              <MainNode node={node} />
              {idx < workflowNodes.length - 1 && <HorizontalConnector />}
            </div>
          ))}
        </StaggerChildren>

        {/* Tablet: 2x2 grid */}
        <StaggerChildren
          staggerDelay={0.12}
          className="hidden md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:hidden!"
        >
          {workflowNodes.map((node) => (
            <MainNode key={node.number} node={node} />
          ))}
        </StaggerChildren>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col items-center md:hidden">
          <StaggerChildren staggerDelay={0.12} className="flex flex-col items-center w-full">
            {workflowNodes.map((node, idx) => (
              <div key={node.number} className="flex flex-col items-center w-full">
                <MainNode node={node} />
                {idx < workflowNodes.length - 1 && <VerticalConnector />}
              </div>
            ))}
          </StaggerChildren>
        </div>
      </Container>

      {/* Scoped under #process so global styles don't leak */}
      <style jsx global>{`
        #process .connector-line {
          background: linear-gradient(
            90deg,
            var(--color-accent-teal),
            var(--color-accent-cyan)
          );
          opacity: 0.35;
          animation: process-connector-pulse 3s ease-in-out infinite;
        }

        #process .connector-line-vertical {
          background: linear-gradient(
            180deg,
            var(--color-accent-teal),
            var(--color-accent-cyan)
          );
          opacity: 0.35;
          animation: process-connector-pulse 3s ease-in-out infinite;
        }

        #process .glow-node {
          box-shadow: 0 0 30px rgba(20, 184, 166, 0.12),
            0 0 80px rgba(6, 182, 212, 0.06);
        }

        #process .glow-node:hover {
          box-shadow: 0 0 40px rgba(20, 184, 166, 0.2),
            0 0 100px rgba(6, 182, 212, 0.1);
        }

        @keyframes process-connector-pulse {
          0%,
          100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.5;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #process .connector-line,
          #process .connector-line-vertical {
            animation: none !important;
            opacity: 0.35;
          }
        }
      `}</style>
    </section>
  );
}
