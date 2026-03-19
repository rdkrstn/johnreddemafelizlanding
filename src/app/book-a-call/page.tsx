import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Container } from "@/components/ui/container";
import { Clock, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Book a free 30-minute strategy call with Johnred Demafeliz. Get a system blueprint for your workshop or high-ticket program — from ad click to enrollment.",
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/flow-systems/strategy-call";

const benefits = [
  {
    icon: <Clock className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />,
    title: "30-min deep architecture session",
    description: "We will map your entire flow: ads, landing pages, workshop registration, follow-up, and enrollment.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />,
    title: "No pitch, pure strategy",
    description: "This is a diagnostic, not a sales call. You will leave with a system blueprint whether we work together or not.",
  },
  {
    icon: <Zap className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />,
    title: "Immediate clarity",
    description: "See exactly where leads are dropping off in your current process and what to build first.",
  },
];

export default function BookACallPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* ---- LEFT COLUMN ---- */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Badge */}
              <ScrollReveal variant="fade">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-teal/15 text-teal px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
                  </span>
                  3 spots per quarter
                </span>
              </ScrollReveal>

              {/* Headline */}
              <TextReveal
                text="Let's Map Your Revenue System"
                as="h1"
                className="display-xl"
              />

              {/* Subtitle */}
              <ScrollReveal variant="fade" delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  You run workshops and high-ticket programs. Pick a time below
                  and in 30 minutes I will map out the exact funnel
                  infrastructure your business needs &mdash; from the ads
                  driving traffic to the system that turns attendees into
                  paying clients.
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

              {/* Promise */}
              <ScrollReveal variant="fade" delay={0.3}>
                <div className="border-t border-border pt-8 mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I take on 3 builds per quarter to ensure every client gets
                    my full attention. This call is free, no obligation, and you
                    will walk away with a clear picture of what your system
                    should look like.
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
