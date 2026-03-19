import { defineField, defineType } from "sanity";

export default defineType({
  name: "jdScreenshotProof",
  title: "Screenshot Proof",
  type: "document",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description:
        "Founder-voice intro. e.g. 'Regor from FastTrack Coaching on the show-up rate turnaround'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "screenshot",
      title: "Screenshot Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brandName",
      title: "Brand / Company",
      type: "string",
    }),
    defineField({
      name: "contextTag",
      title: "Context Tag",
      type: "string",
      description:
        "Optional tag like 'Show-up Rate', 'Revenue Growth', 'Booking Rate'",
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
    select: { title: "clientName", subtitle: "brandName", media: "screenshot" },
  },
});
