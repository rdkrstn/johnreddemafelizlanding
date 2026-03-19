"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function FounderSection() {
  return (
    <section
      aria-label="About the founder"
      className="border-t border-slate-200 py-28 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* Left - Photo */}
          <FadeIn direction="left">
            <div className="relative">
              <div
                className="aspect-[4/5] overflow-hidden rounded-lg bg-slate-200 shadow-lg grayscale"
                role="img"
                aria-label="Johnred Demafeliz - Professional photo"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 rounded-lg bg-accent-teal p-6 text-white shadow-xl">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest">
                  Systems Built
                </p>
                <p className="font-display text-4xl font-black">250+</p>
              </div>
            </div>
          </FadeIn>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <FadeIn>
              <p className="section-label text-slate-400">
                The Architect
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="section-title mb-10">
                Why I Build Systems
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-7">
                <p className="font-sans text-lg leading-relaxed text-slate-600">
                  I spent the last decade seeing great companies hit a
                  &ldquo;systems ceiling.&rdquo; They have product-market fit,
                  they have a solid team, but their backend is held together by
                  spreadsheets and hope.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-600">
                  My work is building the revenue infrastructure that allows
                  growth without friction. I approach every project with
                  operational polish and fintech-grade precision.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-600">
                  This isn&apos;t about quick hacks. It&apos;s about building the
                  infrastructure for your next phase of growth.
                </p>
              </div>
            </FadeIn>

            {/* Tech icons */}
            <FadeIn delay={0.25}>
              <div className="mt-12 flex gap-6 opacity-50 grayscale">
                {/* Terminal icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-500"
                  aria-hidden="true"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>

                {/* Database icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-500"
                  aria-hidden="true"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>

                {/* API / globe icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-500"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
