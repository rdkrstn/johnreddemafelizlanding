// Fallback data used when Sanity CMS is not configured.
// Once Sanity is populated, this data is ignored.

export const fallbackCaseStudies = [
  {
    brandName: "FastTrack Coaching",
    slug: "fasttrack-coaching",
    problem: "22% webinar show-up rate bleeding ad spend",
    solution:
      "Rebuilt the entire pre-event sequence with timed reminders, social proof injections, and urgency-based follow-up.",
    result: "58% show-up rate in 60 days",
    keyMetric: "2.5x",
    metricLabel: "attendance increase",
    context:
      "FastTrack Coaching was running consistent webinar funnels but losing most registrants before the event. The ads were working — people were signing up — but only 22% actually showed up.",
    metrics: [
      { label: "Show-up Rate", value: "22% → 58%" },
      { label: "Cost per Attendee", value: "Reduced 61%" },
      { label: "Timeline", value: "60 days" },
      { label: "Ad Spend Change", value: "₱0 increase" },
    ],
  },
  {
    brandName: "Pinnacle Academy",
    slug: "pinnacle-academy",
    problem: "Leads going cold, 3-day average response time",
    solution:
      "Implemented same-day automated follow-up system with personalized sequences and lead scoring.",
    result: "Same-day follow-up system, 40% more closes",
    keyMetric: "40%",
    metricLabel: "more closes",
    context:
      "Pinnacle Academy had strong lead generation but their sales team was overwhelmed. Average response time was 3 days — by which point most leads had gone cold or found alternatives.",
    metrics: [
      { label: "Response Time", value: "3 days → Same day" },
      { label: "Close Rate Increase", value: "+40%" },
      { label: "Lead Temperature", value: "Cold → Warm" },
      { label: "Sales Team Load", value: "Reduced 50%" },
    ],
  },
  {
    brandName: "Growth Labs PH",
    slug: "growth-labs-ph",
    problem: "₱200K/mo ad spend with 1.8x ROAS",
    solution:
      "Redesigned funnel architecture from landing page to close, optimizing every conversion point.",
    result: "₱3.5M monthly revenue at 10x ROAS",
    keyMetric: "10x",
    metricLabel: "ROAS achieved",
    context:
      "Growth Labs PH was spending ₱200K per month on paid advertising but only getting 1.8x return. The funnel had multiple leak points and no systematic follow-up after initial engagement.",
    metrics: [
      { label: "ROAS", value: "1.8x → 10x" },
      { label: "Monthly Revenue", value: "₱3.5M" },
      { label: "Ad Spend", value: "₱200K/mo (unchanged)" },
      { label: "Funnel Efficiency", value: "+456%" },
    ],
  },
];

export const fallbackTestimonials = [
  {
    quote:
      "From 22% show-up to 58% in 60 days. Same ads, same offer. Only the system changed.",
    name: "Marco C.",
    role: "Business Strategy Coach",
    company: "FastTrack Coaching",
    initials: "MC",
  },
  {
    quote:
      "We were spending ₱200K/month on ads with nothing to show. Johnred rebuilt our entire follow-up system and we went from bleeding ad spend to a clear path to ₱3.5M in revenue within 90 days.",
    name: "Ana R.",
    role: "Academy Founder",
    company: "Pinnacle Academy",
    initials: "AR",
  },
  {
    quote:
      "Our response time went from 3 days to same-day. Leads stopped going cold, and closes went up 40%. The system pays for itself.",
    name: "David L.",
    role: "EdTech CEO",
    company: "LearnPath Systems",
    initials: "DL",
  },
  {
    quote:
      "Johnred doesn't just build funnels. He builds systems that run whether you're in the room or not. Our conversion rate doubled and I finally have time back.",
    name: "Patricia S.",
    role: "Mindset Coach",
    company: "Elevate Coaching PH",
    initials: "PS",
  },
  {
    quote:
      "The follow-up automation alone justified the entire engagement. We went from losing leads to converting them into retained clients.",
    name: "Ryan M.",
    role: "Done-for-You Agency Owner",
    company: "Apex Digital PH",
    initials: "RM",
  },
  {
    quote:
      "We replaced our entire manual follow-up process in two weeks. The conversion numbers spoke for themselves.",
    name: "Jen T.",
    role: "Online Course Creator",
    company: "LearnStack PH",
    initials: "JT",
  },
];

export const fallbackScreenshots = [
  {
    caption:
      "Regor from FastTrack Coaching on the show-up rate turnaround",
    screenshotUrl: null,
    clientName: "Regor M.",
    brandName: "FastTrack Coaching",
    contextTag: "Show-up Rate",
  },
  {
    caption:
      "A coaching academy founder shares her results after implementing the follow-up system",
    screenshotUrl: null,
    clientName: "Ana R.",
    brandName: "Pinnacle Academy",
    contextTag: "Revenue Growth",
  },
  {
    caption:
      "From missed appointments to a fully-booked calendar — here\u2019s the message that came in",
    screenshotUrl: null,
    clientName: "Marco C.",
    brandName: "Growth Labs PH",
    contextTag: "Booking Rate",
  },
];
