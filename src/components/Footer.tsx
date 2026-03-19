"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/johnred" },
  { label: "Twitter", href: "https://twitter.com/johnred" },
  { label: "Privacy", href: "/privacy" },
] as const;

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-slate-200"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-16 sm:flex-row sm:px-10">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="text-primary"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-tight text-primary">
            Johnred Demafeliz &copy; 2026
          </span>
        </div>

        {/* Right: Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
