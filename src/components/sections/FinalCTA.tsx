"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function FinalCTA() {
  return (
    <section aria-label="Call to action" className="px-6 py-28 sm:py-32 md:py-40">
      <FadeIn>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-primary p-16 text-center md:p-24">
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-primary via-primary to-accent-teal/20 opacity-50"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display mb-12 text-5xl font-black leading-tight text-white md:text-6xl" style={{ letterSpacing: "-0.03em" }}>
              Ready to see what your systems should be doing?
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-slate-400 md:text-xl">
              Book a free 15-minute diagnostic call to identify the top 3 gaps
              in your current systems.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/book-a-call"
                className="rounded-lg bg-accent-teal px-8 py-4 font-bold uppercase tracking-wider text-white shadow-lg shadow-accent-teal/20 transition-all duration-300 hover:opacity-90"
              >
                Book a Strategy Call
              </a>
              <a
                href="/#results"
                className="rounded-lg border border-white/10 bg-white/10 px-8 py-4 font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                See the Evidence
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
