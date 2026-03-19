import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import StaggerChildren from "@/components/animations/StaggerChildren";
import TextReveal from "@/components/animations/TextReveal";
import { Container } from "@/components/ui/container";
import {
  sanityClient,
  isSanityConfigured,
  queries,
} from "@/utils/sanityClient";
import { fallbackTestimonials } from "@/data/fallback";

export const metadata: Metadata = {
  title: "Testimonials | The Trust Wall",
  description:
    "A premium collection of client success stories and high-conviction proof of work. No fluff, just measurable impact.",
};

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  initials: string;
}

async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured) return fallbackTestimonials;
  try {
    const data = await sanityClient.fetch(queries.allTestimonials);
    return data?.length ? data : fallbackTestimonials;
  } catch {
    return fallbackTestimonials;
  }
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  const featured = testimonials[0];
  const deepDive = testimonials[1] || featured;
  const wallTestimonials = testimonials.slice(2);

  return (
    <>
      <Navbar />

      {/* -- Hero Section -- */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            {/* Left */}
            <div className="flex-1">
              <ScrollReveal variant="fade">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
                  </span>
                  High Conviction Proof
                </span>
              </ScrollReveal>

              <div className="mt-6 mb-5">
                <TextReveal
                  text="The Trust Wall."
                  as="h1"
                  className="display-xl"
                />
              </div>

              <ScrollReveal variant="fade" delay={0.1}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
                  A premium collection of client success stories and
                  high-conviction proof of work. No fluff, just measurable
                  impact.
                </p>
              </ScrollReveal>

              {/* Stats row */}
              <ScrollReveal variant="fade" delay={0.15}>
                <div className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12">
                  <div>
                    <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-1">
                      Client Retention
                    </p>
                    <CountUp
                      end={98}
                      suffix="%"
                      className="font-display text-3xl font-black text-accent-teal"
                    />
                  </div>
                  <div className="w-px bg-border hidden sm:block" />
                  <div>
                    <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-1">
                      Revenue Generated
                    </p>
                    <CountUp
                      end={35}
                      suffix="M+"
                      prefix="₱"
                      className="font-display text-3xl font-black text-accent-cyan"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Featured testimonial card */}
            <div className="flex-1 max-w-md w-full">
              <ScrollReveal variant="slide-right">
                <div className="relative">
                  {/* Gradient glow behind card */}
                  <div
                    className="absolute -inset-4 rounded-2xl bg-linear-to-br from-accent-teal/20 to-accent-cyan/20 blur-2xl opacity-50 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative bg-card border border-border p-8 rounded-xl shadow-2xl">
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="text-accent-teal" />
                      ))}
                    </div>

                    <p className="text-base text-muted-foreground italic leading-relaxed mb-6">
                      &ldquo;{featured.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-accent-teal to-accent-cyan flex items-center justify-center font-bold text-sm text-white shrink-0">
                        {featured.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">
                          {featured.name}
                        </p>
                        <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                          {featured.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* -- Deep Dive Testimonial -- */}
      <section className="pb-16">
        <Container>
          <ScrollReveal variant="scale">
            <div className="py-16 bg-primary rounded-2xl text-center px-8 sm:px-12 md:px-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex gap-0.5 justify-center mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="text-accent-teal" />
                  ))}
                </div>

                <blockquote>
                  <p className="font-display text-xl sm:text-2xl md:text-3xl text-primary-foreground italic leading-snug tracking-tight mb-8">
                    &ldquo;{deepDive.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent-teal to-accent-cyan flex items-center justify-center font-bold text-base text-white shrink-0">
                    {deepDive.initials}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-base text-primary-foreground">
                      {deepDive.name}
                    </p>
                    <p className="font-mono text-xs tracking-wide text-primary-foreground/60 uppercase">
                      {deepDive.role}
                    </p>
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 bg-card text-foreground font-bold text-sm uppercase rounded px-8 py-4 shadow-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ letterSpacing: "0.05em" }}
                >
                  Read the Full Case Study
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* -- Wall of Love -- */}
      <section className="pb-16">
        <Container>
          <ScrollReveal variant="fade">
            <p className="section-label mb-6">Wall of Love</p>
          </ScrollReveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {wallTestimonials.map((t, i) => {
              const variant = i % 5;
              const isDark = variant === 1;
              const isCyanAccent = variant === 3;

              const cardBg = isDark
                ? "bg-primary text-primary-foreground"
                : isCyanAccent
                  ? "bg-accent-cyan/5 border border-border"
                  : "bg-card border border-border";

              const quoteColor = isDark
                ? "text-primary-foreground/80"
                : "text-muted-foreground";

              const nameColor = isDark
                ? "text-primary-foreground"
                : "text-foreground";

              const roleColor = isDark
                ? "text-primary-foreground/50"
                : "text-muted-foreground";

              const quoteIconColor = isDark
                ? "text-primary-foreground/10"
                : "text-border";

              return (
                <ScrollReveal key={t.name} variant="fade" delay={i * 0.06}>
                  <div
                    className={`${cardBg} rounded-xl p-7 break-inside-avoid transition-all duration-300 hover:shadow-lg`}
                  >
                    <QuoteIcon className={`${quoteIconColor} mb-3`} />

                    <p
                      className={`text-sm leading-relaxed italic mb-6 ${quoteColor}`}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-linear-to-br from-accent-teal to-accent-cyan flex items-center justify-center font-bold text-xs text-white shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <p className={`font-bold text-sm ${nameColor}`}>
                          {t.name}
                        </p>
                        <p
                          className={`font-mono text-[10px] tracking-widest uppercase ${roleColor}`}
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

      {/* -- Bottom CTA -- */}
      <section className="pb-20">
        <Container>
          <ScrollReveal variant="scale">
            <div className="text-center bg-secondary py-20 rounded-2xl border border-border px-8">
              <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4">
                Ready to build your success story?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg mx-auto mb-8">
                Join the business owners who stopped guessing and started
                scaling with systems that work.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/book-a-call" className="btn-primary">
                  Book a Strategy Call <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <Footer />
    </>
  );
}
