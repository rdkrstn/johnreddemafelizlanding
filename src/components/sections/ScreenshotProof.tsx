"use client";

import { fallbackTestimonials } from "@/data/fallback";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const wallTestimonials = fallbackTestimonials.slice(1);

function getCardStyle(index: number) {
  const mod = index % 4;
  if (mod === 1) return "dark" as const;
  if (mod === 3) return "accent" as const;
  return "default" as const;
}

export default function ScreenshotProof() {
  return (
    <section
      aria-label="Wall of Love"
      className="py-24 md:py-32 lg:py-40"
    >
      <Container>
        <ScrollReveal variant="slide-up">
          <div className="mb-20">
            <SectionHeader
              label="Proof"
              title="Wall of Love"
              align="center"
            />
          </div>
        </ScrollReveal>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {wallTestimonials.map((t, index) => {
            const style = getCardStyle(index);
            const isDark = style === "dark";
            const isAccent = style === "accent";

            return (
              <ScrollReveal
                key={t.name}
                variant="fade"
                delay={index * 0.08}
              >
                <div
                  className={cn(
                    "group break-inside-avoid rounded-xl p-10 transition-all duration-300",
                    isDark && [
                      "border border-accent-teal/20 bg-primary text-white shadow-sm",
                      "hover:border-accent-teal/40 hover:shadow-[var(--shadow-glow-teal)]",
                    ],
                    isAccent && [
                      "border-2 border-accent-cyan/20 bg-accent-cyan/5 shadow-sm",
                      "hover:border-accent-cyan/40 hover:shadow-[var(--shadow-glow-cyan)]",
                    ],
                    !isDark && !isAccent && [
                      "border border-slate-100 bg-white shadow-sm",
                      "hover:shadow-[var(--shadow-elevated)]",
                    ],
                  )}
                >
                  {/* Quote icon */}
                  <svg
                    className="mb-5 text-accent-cyan transition-transform duration-300 group-hover:scale-110"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>

                  {/* Quote text */}
                  <p
                    className={cn(
                      "mb-8 text-lg font-medium leading-relaxed",
                      isDark ? "text-white" : "text-slate-700"
                    )}
                  >
                    {t.quote}
                  </p>

                  {/* Author row */}
                  <div
                    className={cn(
                      "flex items-center gap-3 border-t pt-5",
                      isDark ? "border-white/10" : "border-slate-100"
                    )}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-xs font-bold text-white"
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p
                        className={cn(
                          "text-sm font-bold",
                          isDark ? "text-white" : "text-primary"
                        )}
                      >
                        {t.name}
                      </p>
                      <p
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-widest",
                          isDark ? "text-slate-300" : "text-slate-500"
                        )}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
