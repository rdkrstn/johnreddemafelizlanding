"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { Layout, TrendingUp, Layers, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Layout size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: "Funnel Foundation",
    tagline: "For founders launching their first digital funnel",
    includes: [
      "Custom landing page",
      "Lead capture forms",
      "Basic CRM setup",
      "Payment integration",
      "1 follow-up sequence",
    ],
    bestFor: "First-time digital launches",
    popular: false,
  },
  {
    icon: <TrendingUp size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: "Growth Engine",
    tagline: "For established programs ready to scale",
    includes: [
      "Full ad-to-enrollment funnel",
      "CRM setup + automations (GHL, HubSpot, or your preferred tool)",
      "AI-powered lead qualification chatbot",
      "Multi-step follow-up sequences",
      "Analytics dashboard",
      "Workshop/webinar registration system",
    ],
    bestFor: "Programs with existing ad spend",
    popular: true,
  },
  {
    icon: <Layers size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: "Full Architecture",
    tagline: "For businesses that need the complete infrastructure",
    includes: [
      "Everything in Growth Engine",
      "Custom Next.js frontend",
      "API integrations (payments, SMS, email)",
      "Conversational AI for automated follow-up & booking",
      "Sanity CMS for content management",
      "Ongoing optimization & support",
    ],
    bestFor: "High-volume programs scaling aggressively",
    popular: false,
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      aria-label="What I Build"
      className="py-24 md:py-32 lg:py-40"
    >
      <Container>
        {/* Section header */}
        <ScrollReveal variant="fade">
          <SectionHeader
            label="What I Build"
            title="Systems Tailored to Your Stage"
            align="center"
            titleClassName="text-balance"
            className="mb-20"
          />
        </ScrollReveal>

        {/* Service cards */}
        <StaggerChildren
          staggerDelay={0.12}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-2xl border bg-card p-10 shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-elevated) ${
                service.popular
                  ? "border-accent-teal ring-1 ring-accent-teal/20"
                  : "border-border"
              }`}
            >
              {/* Most Popular badge */}
              {service.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-accent-teal px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                  service.popular
                    ? "bg-accent-teal/10 text-accent-teal"
                    : "bg-secondary text-foreground"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                {service.title}
              </h3>

              {/* Tagline */}
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                {service.tagline}
              </p>

              {/* Feature list */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {service.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-accent-teal"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Best for tag */}
              <p className="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Best for:{" "}
                <span className="text-foreground">{service.bestFor}</span>
              </p>

              {/* CTA */}
              <Link
                href="/book-a-call"
                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all duration-300 ${
                  service.popular
                    ? "bg-accent-teal text-white shadow-(--shadow-glow-teal) hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]"
                    : "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-muted-foreground"
                }`}
              >
                Book a Call
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
