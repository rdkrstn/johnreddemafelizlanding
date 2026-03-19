"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";

export default function FinalCTA() {
  return (
    <section aria-label="Call to action" className="section-padding px-6">
      <Container>
        <ScrollReveal variant="scale">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-cta p-12 md:p-20 lg:p-24 text-center">
            {/* Background gradient overlay */}
            <div
              className="absolute inset-0 bg-linear-to-tr from-primary via-primary to-accent-teal/20 opacity-50"
              aria-hidden="true"
            />

            {/* Glow orb */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-2xl">
              <TextReveal
                text="Your next cohort is waiting. Let's make sure they find you."
                as="h2"
                className="display-xl text-white mb-12"
              />

              <ScrollReveal variant="fade" delay={0.3}>
                <p className="mb-12 text-lg leading-relaxed text-slate-300 md:text-xl">
                  In 30 minutes, I will map out the exact system your business
                  needs &mdash; from ad click to program enrollment. No pitch,
                  just architecture. You will leave with a clear blueprint
                  whether we work together or not.
                </p>
              </ScrollReveal>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton>
                  <Link href="/book-a-call" className="btn-accent">
                    Book Your Free Strategy Call &rarr;
                  </Link>
                </MagneticButton>
              </div>

              <ScrollReveal variant="fade" delay={0.5}>
                <p className="mt-6 text-sm text-slate-400">
                  I take on 3 builds per quarter. Let&apos;s see if yours is next.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
