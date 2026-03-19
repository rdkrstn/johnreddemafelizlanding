import { defineField, defineType } from "sanity";

export default defineType({
  name: "jdTestimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "e.g. 'Business Strategy Coach', 'Academy Founder'",
    }),
    defineField({
      name: "company",
      title: "Company / Brand",
      type: "string",
    }),
    defineField({
      name: "initials",
      title: "Initials (for avatar)",
      type: "string",
      description: "e.g. 'MC' for Marco C.",
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "featured",
      title: "Show on Homepage",
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
    select: { title: "name", subtitle: "company" },
  },
});
