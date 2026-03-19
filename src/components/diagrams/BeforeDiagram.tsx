"use client";

const steps = [
  { text: "Have an idea for a workshop", rotate: -12, x: "5%", y: "2%" },
  { text: "Post on Facebook", rotate: 8, x: "38%", y: "6%" },
  { text: "Wait for DMs", rotate: -5, x: "12%", y: "18%" },
  { text: "Copy names to spreadsheet", rotate: 15, x: "42%", y: "22%" },
  { text: "Forget to follow up", rotate: -20, x: "2%", y: "38%" },
  { text: "Manually text each lead", rotate: 6, x: "35%", y: "42%" },
  { text: "Lose track of who paid", rotate: -8, x: "8%", y: "58%" },
  { text: "Wonder why no one showed up", rotate: 12, x: "30%", y: "62%" },
  { text: "Repeat", rotate: 90, x: "75%", y: "35%" },
] as const;

const circledNumbers = ["\u2460", "\u2461", "\u2462", "\u2463", "\u2464", "\u2465", "\u2466", "\u2467", "\u2468"];

export default function BeforeDiagram() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full min-h-85 md:min-h-90"
    >
      {steps.map((step, i) => (
        <div
          key={i}
          className="absolute bg-red-50 border border-red-200/60 rounded-full px-4 py-2 text-sm text-red-800/70 whitespace-nowrap shadow-sm select-none"
          style={{
            transform: `rotate(${step.rotate}deg)`,
            left: step.x,
            top: step.y,
          }}
        >
          <span className="mr-1.5 text-red-400/80 font-medium">
            {circledNumbers[i]}
          </span>
          {step.text}
        </div>
      ))}
    </div>
  );
}
