"use client";

import FadeIn from "@/components/animations/FadeIn";
import { fallbackTestimonials } from "@/data/fallback";

const wallTestimonials = fallbackTestimonials.slice(1);

function getCardStyle(index: number) {
  const mod = index % 4;
  if (mod === 1) return "dark" as const;
  if (mod === 3) return "accent" as const;
  return "default" as const;
}

export default function ScreenshotProof() {
  return (
    <section aria-label="Wall of Love" className="py-28 sm:py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-20 text-center">
            <span className="section-label">
              Proof
            </span>
            <h2 className="section-title mt-4">
              Wall of Love
            </h2>
          </div>
        </FadeIn>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {wallTestimonials.map((t, index) => {
            const style = getCardStyle(index);
            const isDark = style === "dark";
            const isAccent = style === "accent";

            return (
              <FadeIn key={t.name} delay={index * 0.08}>
                <div
                  className={`group break-inside-avoid rounded-xl p-10 transition-shadow hover:shadow-xl ${
                    isDark
                      ? "border-t border-white/10 bg-primary text-white shadow-sm"
                      : isAccent
                        ? "border-2 border-accent-cyan/20 bg-accent-cyan/5 shadow-sm"
                        : "border border-slate-100 bg-white shadow-sm"
                  }`}
                >
                  {/* Quote icon */}
                  <svg
                    className="mb-5 text-accent-cyan transition-transform group-hover:scale-110"
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
                    className={`mb-8 text-lg font-medium leading-relaxed ${
                      isDark ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {t.quote}
                  </p>

                  {/* Author row */}
                  <div
                    className={`flex items-center gap-3 border-t pt-5 ${
                      isDark ? "border-white/10" : "border-slate-100"
                    }`}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-xs font-bold text-white"
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-bold ${
                          isDark ? "text-white" : "text-primary"
                        }`}
                      >
                        {t.name}
                      </p>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-widest ${
                          isDark ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
