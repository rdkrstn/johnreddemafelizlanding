import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a strategy call with Johnred Demafeliz. Let's identify the bottlenecks in your growth engine and build a scalable roadmap for your business.",
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/flow-systems/strategy-call";

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
    description: "Laser-focused strategy session. No filler.",
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
    description: "Pure value, no sales pressure.",
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
    title: "Immediate Action Plan",
    description: "Walk away with clear next steps.",
  },
];

export default function BookACallPage() {
  return (
    <>
      <Navbar />

      <main className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* ---- LEFT COLUMN ---- */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Badge */}
              <ScrollReveal variant="fade">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                  Available for Consultation
                </span>
              </ScrollReveal>

              {/* Headline */}
              <TextReveal
                text="Optimize Your Revenue Systems"
                as="h1"
                className="display-xl"
              />

              {/* Subtitle */}
              <ScrollReveal variant="fade" delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Let&apos;s identify the bottlenecks in your growth engine and
                  build a scalable roadmap for your business. A
                  distraction-free deep dive into your operations.
                </p>
              </ScrollReveal>

              {/* Benefit Cards */}
              <StaggerChildren className="flex flex-col gap-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group p-4 rounded-xl bg-card border border-border shadow-sm flex items-start gap-4 transition-all duration-300 hover:shadow-md"
                  >
                    <span className="shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                      {benefit.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {benefit.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </StaggerChildren>

              {/* Testimonial */}
              <ScrollReveal variant="fade" delay={0.3}>
                <div className="border-t border-border pt-8 mt-4">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;The most productive 15 minutes of our quarter. Johnred
                    dismantled our churn problem in minutes.&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-bold text-foreground">
                    &mdash; Growth Lead @ TechScale
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* ---- RIGHT COLUMN: Calendly ---- */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="slide-right" delay={0.2}>
                <div className="bg-card rounded-xl border border-border shadow-xl overflow-hidden">
                  <CalendlyEmbed url={CALENDLY_URL} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
