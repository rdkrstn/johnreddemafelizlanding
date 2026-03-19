"use client";

export default function AfterDiagram() {
  return (
    <>
      <style>{`
        @keyframes flow-pulse {
          0% { stroke-dashoffset: 16; }
          100% { stroke-dashoffset: 0; }
        }
        .flow-line {
          stroke-dasharray: 8 8;
          animation: flow-pulse 1.2s linear infinite;
        }
        .ai-glow {
          filter: drop-shadow(0 0 6px rgba(20, 184, 166, 0.4));
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-line {
            animation: none;
            stroke-dasharray: none;
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
        <defs>
          {/* Arrowhead marker */}
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M 0 0 L 8 3 L 0 6 Z" fill="#2dd4bf" />
          </marker>
          {/* Arrowhead for dashboard connections (lighter) */}
          <marker
            id="arrowhead-light"
            markerWidth="6"
            markerHeight="5"
            refX="5"
            refY="2.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M 0 0 L 6 2.5 L 0 5 Z" fill="#99f6e4" />
          </marker>
        </defs>

        {/* === Main horizontal flow connections === */}
        {/* Ads -> Landing Page */}
        <line
          x1="68" y1="85" x2="107" y2="85"
          stroke="#2dd4bf"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="flow-line"
        />
        {/* Landing Page -> Registration */}
        <line
          x1="187" y1="85" x2="207" y2="85"
          stroke="#2dd4bf"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="flow-line"
        />
        {/* Registration -> CRM */}
        <line
          x1="287" y1="85" x2="313" y2="85"
          stroke="#2dd4bf"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="flow-line"
        />
        {/* CRM -> AI Bot */}
        <path
          d="M 363 100 L 363 132"
          stroke="#2dd4bf"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="flow-line"
        />
        {/* AI Bot -> Follow-up */}
        <path
          d="M 363 168 L 363 190"
          stroke="#2dd4bf"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="flow-line"
        />
        {/* Follow-up -> Enrollment */}
        <path
          d="M 395 210 L 425 210"
          stroke="#2dd4bf"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="flow-line"
        />

        {/* === Dashboard connections (from bottom node upward) === */}
        {/* Dashboard -> Ads */}
        <path
          d="M 180 250 C 120 250, 48 180, 48 105"
          stroke="#99f6e4"
          strokeWidth="1"
          strokeDasharray="3 3"
          markerEnd="url(#arrowhead-light)"
          fill="none"
        />
        {/* Dashboard -> Registration */}
        <path
          d="M 210 240 L 250 110"
          stroke="#99f6e4"
          strokeWidth="1"
          strokeDasharray="3 3"
          fill="none"
        />
        {/* Dashboard -> CRM */}
        <path
          d="M 240 240 L 345 105"
          stroke="#99f6e4"
          strokeWidth="1"
          strokeDasharray="3 3"
          fill="none"
        />
        {/* Dashboard -> Enrollment */}
        <path
          d="M 250 250 C 340 255, 440 250, 455 230"
          stroke="#99f6e4"
          strokeWidth="1"
          strokeDasharray="3 3"
          fill="none"
        />

        {/* === Nodes === */}

        {/* Node: Ads */}
        <rect x="18" y="67" width="50" height="36" rx="8" fill="white" stroke="#5eead4" strokeWidth="1" />
        <text x="43" y="90" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">
          Ads
        </text>

        {/* Node: Landing Page */}
        <rect x="110" y="67" width="77" height="36" rx="8" fill="white" stroke="#5eead4" strokeWidth="1" />
        <text x="148" y="90" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">
          Landing Page
        </text>

        {/* Node: Registration */}
        <rect x="210" y="67" width="77" height="36" rx="8" fill="white" stroke="#5eead4" strokeWidth="1" />
        <text x="248" y="90" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">
          Registration
        </text>

        {/* Node: CRM */}
        <rect x="316" y="67" width="60" height="36" rx="8" fill="white" stroke="#5eead4" strokeWidth="1" />
        <text x="346" y="90" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">
          CRM
        </text>

        {/* Node: AI Bot (special styling - teal filled, glowing) */}
        <rect
          x="328" y="135" width="70" height="32" rx="8"
          fill="#14b8a6" stroke="#0d9488" strokeWidth="1"
          className="ai-glow"
        />
        {/* Bot icon (simple robot face) */}
        <rect x="336" y="144" width="12" height="10" rx="2" fill="white" fillOpacity="0.9" />
        <circle cx="339" cy="148" r="1.5" fill="#14b8a6" />
        <circle cx="345" cy="148" r="1.5" fill="#14b8a6" />
        <line x1="340" y1="142" x2="344" y2="142" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <text x="373" y="156" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">
          AI Bot
        </text>

        {/* Node: Follow-up */}
        <rect x="320" y="192" width="75" height="36" rx="8" fill="white" stroke="#5eead4" strokeWidth="1" />
        <text x="358" y="215" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">
          Follow-up
        </text>

        {/* Node: Enrollment */}
        <rect x="425" y="192" width="45" height="36" rx="8" fill="#f0fdfa" stroke="#5eead4" strokeWidth="1.5" />
        <text x="448" y="208" textAnchor="middle" fill="#0f766e" fontSize="9" fontWeight="700">
          Enroll-
        </text>
        <text x="448" y="220" textAnchor="middle" fill="#0f766e" fontSize="9" fontWeight="700">
          ment
        </text>

        {/* Node: Dashboard (bottom, connected to all) */}
        <rect x="155" y="235" width="100" height="36" rx="8" fill="#f0fdfa" stroke="#5eead4" strokeWidth="1.5" />
        {/* Small chart icon */}
        <rect x="165" y="249" width="3" height="10" rx="1" fill="#14b8a6" />
        <rect x="170" y="245" width="3" height="14" rx="1" fill="#14b8a6" />
        <rect x="175" y="247" width="3" height="12" rx="1" fill="#14b8a6" />
        <text x="215" y="258" textAnchor="middle" fill="#0f766e" fontSize="10" fontWeight="600">
          Dashboard
        </text>

        {/* "Full visibility" label */}
        <text x="155" y="224" fill="#0d9488" fontSize="9" fontWeight="500" opacity="0.7">
          Full visibility
        </text>
      </svg>
    </>
  );
}
