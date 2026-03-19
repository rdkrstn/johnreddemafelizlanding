"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "The Solution", href: "/#solution" },
  { label: "About", href: "/#about" },
  { label: "Book a Call", href: "/book-a-call" },
] as const;

const CONNECT_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/johnred",
    external: true,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/johnred",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hello@johnred.dev",
    external: false,
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 md:py-20" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                className="text-accent-teal"
              >
                <path d="M6 22h12l4-4H10L6 22Z" fill="currentColor"/>
                <path d="M8 16h12l4-4H12L8 16Z" fill="currentColor"/>
                <path d="M10 10h12l4-4H14l-4 4Z" fill="currentColor"/>
              </svg>
              <span className="text-sm font-bold tracking-tight text-foreground">
                Johnred Demafeliz
              </span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Funnel infrastructure for workshop leaders, educators, and
              high-ticket program owners who need systems that convert
              attendees into clients.
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Johnred Demafeliz. All rights
              reserved.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">
              Connect
            </h3>
            <ul className="space-y-3">
              {CONNECT_LINKS.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-12 flex justify-end">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-accent-teal hover:text-accent-teal"
            aria-label="Back to top"
          >
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
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </Container>
    </footer>
  );
}
