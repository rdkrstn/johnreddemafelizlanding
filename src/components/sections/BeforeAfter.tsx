"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { X, XCircle, CheckCircle2, CircleCheckBig } from "lucide-react";

const painPoints = [
  "Leads tracked in spreadsheets and DMs",
  "Manual follow-ups (if they happen at all)",
  "No idea which ads are working",
  "Workshop attendees lost after the event",
  "Hours wasted on repetitive admin",
] as const;

const outcomes = [
  "Every lead automatically captured and tagged",
  "Smart follow-up sequences running 24/7",
  "Real-time dashboard showing ad \u2192 enrollment metrics",
  "Workshop attendees nurtured into program buyers",
  "You focus on coaching, the system handles the rest",
] as const;

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      aria-label="The Transformation"
      className="py-24 md:py-32 lg:py-40 bg-white"
    >
      <Container>
        <ScrollReveal variant="fade">
          <SectionHeader
            label="The Transformation"
            title="From Manual Chaos to Automated Pipeline"
            align="center"
            titleClassName="text-balance"
            className="mb-20"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Before Column */}
          <ScrollReveal variant="slide-left">
            <div className="rounded-2xl border border-red-200/60 bg-red-50/40 p-8 md:p-10 h-full">
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <X size={20} className="text-red-500" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-red-600">
                  Before
                </h3>
              </div>

              {/* Pain Points List */}
              <ul className="space-y-4 mb-10" role="list">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <XCircle
                      size={20}
                      className="text-red-400/70 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Placeholder Screenshot */}
              <div className="bg-slate-100 rounded-xl aspect-video border-2 border-dashed border-red-300/50 flex items-center justify-center">
                <span className="text-slate-400 text-sm font-medium">
                  Your current setup
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* After Column */}
          <ScrollReveal variant="slide-right">
            <div className="rounded-2xl border border-teal-200/60 bg-teal-50/40 p-8 md:p-10 h-full">
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100">
                  <CheckCircle2
                    size={20}
                    className="text-teal-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-teal-700">
                  After
                </h3>
              </div>

              {/* Outcomes List */}
              <ul className="space-y-4 mb-10" role="list">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CircleCheckBig
                      size={20}
                      className="text-teal-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 text-base leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Placeholder Screenshot */}
              <div className="bg-teal-50 rounded-xl aspect-video border-2 border-dashed border-teal-300/50 flex items-center justify-center">
                <span className="text-teal-500/70 text-sm font-medium">
                  Your system after we build
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
