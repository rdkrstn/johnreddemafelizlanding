import { defineField, defineType } from "sanity";

export default defineType({
  name: "jdCaseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand / Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "brandName", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
      rows: 3,
      description: "What was broken before? Keep it to one sentence.",
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 4,
      description: "What did you build/fix? 1-2 sentences.",
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "string",
      description: "The achieved outcome. e.g. '58% show-up rate in 60 days'",
    }),
    defineField({
      name: "keyMetric",
      title: "Key Metric",
      type: "string",
      description: "Big number displayed prominently. e.g. '2.5x', '40%', '10x'",
    }),
    defineField({
      name: "metricLabel",
      title: "Metric Label",
      type: "string",
      description: "What the metric measures. e.g. 'attendance increase'",
    }),
    defineField({
      name: "context",
      title: "Context (Detail Page)",
      type: "text",
      rows: 4,
      description: "Background context for the full case study page.",
    }),
    defineField({
      name: "metrics",
      title: "Metrics Grid",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "value", type: "string", title: "Value" },
          ],
        },
      ],
      description: "4 metrics shown on the detail page grid.",
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "brandName", subtitle: "keyMetric" },
  },
});
