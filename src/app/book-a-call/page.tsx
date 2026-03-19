import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a strategy call with Johnred Demafeliz. Let's identify the bottlenecks in your growth engine and build a scalable roadmap for your business.",
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/johnred/strategy-call";

const benefits = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "15-min deep dive",
    description: "Structured strategy session. No filler.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "No-pitch strategy",
    description: "Diagnostic-first. No pitch.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Immediate action plan",
    description: "Leave with a prioritized list of fixes for your system",
  },
];

export default function BookACallPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ---- LEFT COLUMN ---- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Badge */}
            <FadeIn>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                Available for Consultation
              </span>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.05}>
              <h1 className="font-display text-5xl font-black leading-tight tracking-tighter text-foreground">
                Optimize Your
                <br />
                Revenue Systems
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Let&apos;s identify the three highest-leverage gaps in your
                current systems and map the fix.
              </p>
            </FadeIn>

            {/* Benefit Cards */}
            <div className="flex flex-col gap-3">
              {benefits.map((benefit, i) => (
                <FadeIn key={benefit.title} delay={0.15 + i * 0.07}>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 transition-all duration-300 hover:shadow-md">
                    <span className="shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                      {benefit.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {benefit.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Testimonial */}
            <FadeIn delay={0.4}>
              <div className="border-t border-slate-200 pt-8 mt-4">
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  &ldquo;From 22% show-up to 58% in 60 days. Same ads, same
                  offer. The system changed everything.&rdquo;
                </p>
                <p className="mt-3 text-sm font-bold text-foreground">
                  &mdash; Marco C., Business Strategy Coach
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ---- RIGHT COLUMN: Calendly ---- */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} direction="right">
              <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">
                <CalendlyEmbed url={CALENDLY_URL} />
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
