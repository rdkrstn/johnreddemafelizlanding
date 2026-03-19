"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How long does a build take?",
    answer:
      "Most projects go from first call to launch in 2\u20134 weeks, depending on complexity. A simple funnel with CRM can be live in under 2 weeks. A full-stack build with custom integrations typically takes 3\u20134 weeks.",
  },
  {
    question: "What if I already have a funnel or CRM?",
    answer:
      "Great \u2014 we\u2019ll audit what you have. If your existing tools work, I\u2019ll build around them. If they\u2019re holding you back, I\u2019ll recommend alternatives. I never rip out something that\u2019s working just to use my preferred stack.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every build is scoped to your needs and budget. I\u2019ll give you a clear quote after our strategy call \u2014 no surprises, no hidden fees. I offer flexible payment terms for larger builds.",
  },
  {
    question: "Do you work with clients outside the Philippines?",
    answer:
      "Yes. I work with clients globally \u2014 Philippines, Australia, US, and beyond. Everything is done remotely, and I\u2019m flexible with time zones.",
  },
  {
    question: "What happens after launch?",
    answer:
      "I don\u2019t disappear after launch. Every build includes a handover session where I walk you through everything. Optional ongoing support is available if you want me to monitor and optimize your system.",
  },
  {
    question: "I\u2019m not technical. Will I be able to manage the system?",
    answer:
      "Absolutely. I build systems that non-technical founders can manage day-to-day. You\u2019ll get a Sanity CMS dashboard for content, your preferred CRM (GoHighLevel, HubSpot, or whatever you already use), and a metrics dashboard \u2014 all with training.",
  },
] as const;

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-24 md:py-32 lg:py-40 bg-secondary"
    >
      <Container>
        <ScrollReveal variant="fade">
          <SectionHeader
            label="Common Questions"
            title="Everything You Need to Know"
            align="center"
            titleClassName="text-balance"
            className="mb-20"
          />
        </ScrollReveal>

        <ScrollReveal variant="slide-up">
          <div className="mx-auto max-w-3xl">
            <Accordion className="divide-y-0">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  className="border-b border-border/60 last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-base leading-relaxed pb-4">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
