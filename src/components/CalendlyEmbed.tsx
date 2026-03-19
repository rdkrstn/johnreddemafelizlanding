"use client";

import { InlineWidget } from "react-calendly";

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-white shadow-xl"
      role="region"
      aria-label="Schedule a strategy call"
    >
      <InlineWidget
        url={url}
        styles={{ height: "700px", minWidth: "320px" }}
        iframeTitle="Schedule a strategy call with Johnred Demafeliz"
        pageSettings={{
          backgroundColor: "f6f7f8",
          primaryColor: "0f1729",
          textColor: "0f1729",
          hideLandingPageDetails: false,
          hideEventTypeDetails: false,
          hideGdprBanner: true,
        }}
      />
    </div>
  );
}
