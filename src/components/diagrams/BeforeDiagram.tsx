"use client";

export default function BeforeDiagram() {
  return (
    <>
      <style>{`
        @keyframes lost-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .lost-badge {
          animation: lost-pulse 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .lost-badge {
            animation: none;
          }
        }
      `}</style>
      <svg
        viewBox="0 0 480 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-full h-auto"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        {/* Dashed chaotic connection lines */}
        {/* Facebook Ads -> Spreadsheet (crossing path) */}
        <path
          d="M 115 55 C 160 100, 200 30, 270 135"
          stroke="#fca5a5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        {/* Instagram -> DMs */}
        <path
          d="M 130 130 L 210 175"
          stroke="#fca5a5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        {/* DMs -> Phone (crossing) */}
        <path
          d="M 275 185 C 310 160, 280 120, 350 105"
          stroke="#fca5a5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        {/* Spreadsheet -> Workshop (wobbly) */}
        <path
          d="M 310 145 C 340 160, 330 200, 380 230"
          stroke="#fca5a5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        {/* Facebook Ads -> DMs (long crossing line) */}
        <path
          d="M 90 65 C 120 130, 180 200, 230 175"
          stroke="#fca5a5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        {/* Phone has NO connection to Workshop - represents lost lead */}
        {/* Instagram has a dangling line going nowhere */}
        <path
          d="M 85 140 L 50 175"
          stroke="#fca5a5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          strokeOpacity="0.5"
        />

        {/* Node: Facebook Ads (top-left, slightly tilted feel via position) */}
        <rect x="30" y="28" width="100" height="36" rx="8" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="80" y="51" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="500">
          Facebook Ads
        </text>

        {/* Node: Instagram (left, lower) */}
        <rect x="45" y="108" width="95" height="36" rx="8" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="92" y="131" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="500">
          Instagram
        </text>

        {/* Node: DMs (center, offset) */}
        <rect x="200" y="160" width="80" height="36" rx="8" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="240" y="183" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="500">
          DMs
        </text>
        {/* ? badge on DMs - lost leads */}
        <circle cx="272" cy="162" r="10" fill="#fecaca" stroke="#f87171" strokeWidth="1" className="lost-badge" />
        <text x="272" y="166" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="700">
          ?
        </text>

        {/* Node: Spreadsheet (center-right) */}
        <rect x="230" y="110" width="100" height="36" rx="8" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="280" y="133" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="500">
          Spreadsheet
        </text>

        {/* Node: Phone (right, upper) */}
        <rect x="330" y="70" width="80" height="36" rx="8" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="370" y="93" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="500">
          Phone
        </text>
        {/* ? badge on Phone - lost leads */}
        <circle cx="402" cy="72" r="10" fill="#fecaca" stroke="#f87171" strokeWidth="1" className="lost-badge" />
        <text x="402" y="76" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="700">
          ?
        </text>

        {/* Node: Workshop (bottom-right, isolated feel) */}
        <rect x="340" y="210" width="100" height="36" rx="8" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="390" y="233" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="500">
          Workshop
        </text>

        {/* "Leads lost" annotation at bottom-left */}
        <text x="30" y="260" fill="#ef4444" fontSize="10" fontWeight="600" opacity="0.7">
          Leads fall through the cracks
        </text>
        <line x1="30" y1="264" x2="190" y2="264" stroke="#fca5a5" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    </>
  );
}
