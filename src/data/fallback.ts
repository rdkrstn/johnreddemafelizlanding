// Fallback data used when Sanity CMS is not configured.
// Once Sanity is populated, this data is ignored.

export const fallbackCaseStudies = [
  {
    brandName: "Fastrack Money Success",
    slug: "fastrack-money-success",
    problem:
      "A financial literacy coaching business running live workshops was managing everything manually — leads scattered in DMs and spreadsheets, no follow-up system, no way to track which ads were converting, and no pipeline from workshop attendees to their premium Mastery program.",
    solution:
      "Built a custom Next.js landing funnel connected to a CRM backbone (GoHighLevel) for automated lead capture and follow-up sequences. Integrated PayMongo for seamless payments, Sanity CMS for dynamic content, and a real-time analytics dashboard to track ad spend, bookings, and conversion rates.",
    result:
      "Transformed from zero digital infrastructure to a fully automated workshop-to-program pipeline. Every lead is now captured, nurtured, and tracked — from first ad click to Mastery program enrollment.",
    keyMetric: "0 → 1",
    metricLabel: "From Manual to Fully Automated",
    context:
      "Fastrack Money Success runs interactive cashflow board game workshops that teach financial literacy. They needed to transition from brick-and-mortar word-of-mouth to a scalable digital acquisition system.",
    metrics: [
      { label: "Lead Capture", value: "Automated" },
      { label: "Follow-ups", value: "24/7" },
      { label: "Pipeline", value: "End-to-End" },
      { label: "Tracking", value: "Real-Time" },
    ],
  },
  {
    brandName: "Online Educator Funnel",
    slug: "online-educator-funnel",
    problem:
      "An online educator running paid webinars had no automated way to move attendees from registration to course enrollment. Ad spend was going in, but conversions were leaking at every stage — no reminders, no post-webinar follow-up, and no clear path from free content to paid program.",
    solution:
      "Architected a complete webinar-to-course pipeline: automated registration confirmations, timed reminder sequences, post-webinar nurture emails with social proof, and a seamless checkout flow integrated with their existing course platform.",
    result:
      "Results from a typical engagement: a structured funnel system that captures, nurtures, and converts webinar attendees into paying students with minimal manual intervention.",
    keyMetric: "3.2x",
    metricLabel: "ROAS",
    context:
      "This represents what a system like this achieves for online educators who run paid ads to free or low-ticket webinars and sell high-ticket courses or mentorship programs on the back end.",
    metrics: [
      { label: "Webinar Show-Up", value: "2x Increase" },
      { label: "Post-Webinar Conversion", value: "Automated" },
      { label: "Ad Attribution", value: "End-to-End" },
      { label: "Revenue Cycle", value: "Predictable" },
    ],
  },
  {
    brandName: "Consulting Firm Pipeline",
    slug: "consulting-firm-pipeline",
    problem:
      "A consulting firm generating leads through workshops and webinars had no system to qualify applicants or track them through the sales process. Leads applied but never heard back in time. Show-up rates to strategy calls were low, and the team had no visibility into where deals were stalling.",
    solution:
      "Built an application-to-close system with automated lead scoring, instant confirmation sequences, pre-call nurture content, and a real-time pipeline dashboard so the team could see exactly where every prospect stood at any given moment.",
    result:
      "Results from a typical engagement: a streamlined pipeline that qualifies leads automatically, sends pre-call content to boost show-up rates, and gives the sales team clear visibility into every deal stage.",
    keyMetric: "47%",
    metricLabel: "Show-Up Rate",
    context:
      "This represents what a system like this achieves for consulting firms and service providers who rely on strategy calls to close high-ticket engagements but struggle with no-shows and unqualified leads.",
    metrics: [
      { label: "Application Flow", value: "Automated" },
      { label: "Call Show-Up", value: "47%" },
      { label: "Lead Qualification", value: "Scored" },
      { label: "Pipeline Visibility", value: "Real-Time" },
    ],
  },
];

export const fallbackTestimonials = [
  {
    quote:
      "Before Johnred built our system, we were losing leads left and right. Now every workshop attendee is automatically followed up with, booked into our pipeline, and tracked from first click to enrollment. We went from managing everything in spreadsheets to having a real business infrastructure.",
    name: "Regor M.",
    role: "Co-Founder",
    company: "Fastrack Money Success",
    initials: "RM",
  },
  {
    quote:
      "Johnred mapped out our entire funnel architecture in one call. We finally saw where leads were dropping off — it was eye-opening. He did not just point out problems, he came back with a system that actually fixed them.",
    name: "Carlo V.",
    role: "Business Coach",
    company: "Elevate Training PH",
    initials: "CV",
  },
  {
    quote:
      "The dashboard alone was worth it. We went from guessing to knowing exactly which ads were converting and which ones were burning budget. For the first time, we could make decisions based on real data instead of gut feel.",
    name: "Angela T.",
    role: "Workshop Facilitator",
    company: "Mindshift Academy",
    initials: "AT",
  },
  {
    quote:
      "What impressed me was the speed. From first conversation to a fully working funnel in under 2 weeks. I have worked with agencies that took months and delivered less. Johnred moves fast and everything just works.",
    name: "Miguel S.",
    role: "Online Course Creator",
    company: "LearnPath Systems",
    initials: "MS",
  },
  {
    quote:
      "I expected a basic landing page. Johnred delivered a complete system — CRM, automations, tracking, everything. It felt like getting an entire operations team without hiring anyone. The level of detail in the build was something I did not expect.",
    name: "Patricia L.",
    role: "Consultant",
    company: "Apex Consulting PH",
    initials: "PL",
  },
];

export const fallbackScreenshots = [
  {
    caption:
      "Regor from Fastrack Money Success on the fully automated workshop pipeline",
    screenshotUrl: null,
    clientName: "Regor M.",
    brandName: "Fastrack Money Success",
    contextTag: "Automation",
  },
  {
    caption:
      "A business coach shares how funnel mapping revealed their lead drop-off points",
    screenshotUrl: null,
    clientName: "Carlo V.",
    brandName: "Elevate Training PH",
    contextTag: "Funnel Architecture",
  },
  {
    caption:
      "From guessing to real-time ad attribution — here is what changed",
    screenshotUrl: null,
    clientName: "Angela T.",
    brandName: "Mindshift Academy",
    contextTag: "Analytics",
  },
];
