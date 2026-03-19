"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface TestimonialsProps {
  data: Testimonial[];
}

function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#14b8a6"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Testimonials({ data }: TestimonialsProps) {
  const featured = data[0];

  if (!featured) return null;

  return (
    <section
      className="py-24 md:py-32 lg:py-40"
      aria-label="Featured testimonial"
    >
      <Container>
        <ScrollReveal variant="scale">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl",
              "border border-slate-200 bg-white",
              "p-10 sm:p-14 md:p-16",
              "shadow-[var(--shadow-card)]"
            )}
          >
            {/* Giant quote icon - top right */}
            <div
              className="pointer-events-none absolute -top-4 right-8 select-none font-display leading-none text-primary opacity-5"
              style={{ fontSize: "280px" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
              {/* 5 stars in teal */}
              <div className="mb-8 flex gap-1.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <blockquote>
                <p className="mb-10 text-2xl font-medium italic leading-relaxed text-slate-700 sm:text-3xl md:text-4xl">
                  &ldquo;{featured.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar circle with gradient ring */}
                <div className="rounded-full ring-2 ring-accent-teal/30 ring-offset-2 ring-offset-white">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-primary">
                    {featured.initials}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-primary">
                    {featured.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {featured.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom links */}
        <ScrollReveal variant="fade" delay={0.2}>
          <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/testimonials"
              className="group/link inline-flex items-center gap-2 font-sans text-sm font-medium text-accent-teal transition-colors duration-300 hover:text-accent-cyan"
            >
              See All Testimonials
              <span
                className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
            <Link
              href="/book-a-call"
              className="btn-primary"
            >
              Get Results Like These
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
