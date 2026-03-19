"use client";

const steps = [
  "Lead clicks your ad",
  "Lands on your funnel page",
  "Books a workshop seat",
  "CRM captures & tags the lead",
  "AI follows up automatically",
  "Attendee enrolls in your program",
] as const;

export default function AfterDiagram() {
  return (
    <div
      aria-hidden="true"
      className="w-full flex flex-col items-center gap-3"
    >
      {steps.map((step, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-2.5 text-sm text-slate-700 shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-sm select-none"
        >
          <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-teal-50 text-teal-600 text-xs font-bold">
            {i + 1}
          </span>
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}
