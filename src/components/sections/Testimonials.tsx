"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

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
    <section className="py-28 sm:py-32 md:py-40" aria-label="Featured testimonial">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-16 shadow-sm">
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
                <p className="mb-10 text-3xl font-medium italic leading-relaxed text-slate-700 md:text-4xl">
                  &ldquo;{featured.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar circle */}
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-primary">
                  {featured.initials}
                </div>
                <div>
                  <p className="font-bold text-primary">
                    {featured.name}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                    {featured.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom links */}
        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center justify-between">
            <Link
              href="/testimonials"
              className="font-sans text-sm font-medium text-accent-teal transition-colors hover:text-accent-cyan"
            >
              See All Testimonials <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/book-a-call"
              className="inline-block rounded bg-primary px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-accent-teal"
            >
              Book a Strategy Call <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
