"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Systems", href: "/#solution" },
  { label: "Case Studies", href: "/#results" },
  { label: "Founder", href: "/#about" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-slate-200 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-7"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 select-none"
          aria-label="Johnred Demafeliz - Home"
        >
          {/* Layers icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-primary uppercase">
            Johnred Demafeliz
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/book-a-call"
          className="hidden items-center bg-primary text-white px-6 py-2.5 text-sm font-bold uppercase rounded tracking-wider transition-all duration-200 hover:opacity-90 hover:-translate-y-px md:inline-flex"
        >
          Book Call
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center text-slate-500 transition-colors duration-200 hover:text-primary md:hidden"
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">
            {mobileOpen ? "Close menu" : "Open menu"}
          </span>
          <span
            className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
              mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
              mobileOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
              mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <div className="mx-auto max-w-6xl px-5 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-primary"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4">
            <Link
              href="/book-a-call"
              className="flex w-full items-center justify-center rounded bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:opacity-90"
              onClick={closeMobile}
            >
              Book Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
