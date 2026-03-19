"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/animations/MagneticButton";

const NAV_LINKS = [
  { label: "Systems", href: "/#solution" },
  { label: "Case Studies", href: "/#results" },
  { label: "Founder", href: "/#about" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    // Check initial scroll position on mount
    handleScroll();
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

  /**
   * Determine if a nav link is "active":
   * - Hash links (/#solution) are active when on homepage
   * - Path links (/case-studies) match the current pathname
   */
  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-out",
        scrolled
          ? "glass-panel-strong border-b border-slate-200/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-7"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 select-none group"
          aria-label="Johnred Demafeliz - Home"
        >
          {/* Brand mark — ascending system bars */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="text-primary transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M6 22h12l4-4H10L6 22Z" fill="currentColor"/>
            <path d="M8 16h12l4-4H12L8 16Z" fill="currentColor"/>
            <path d="M10 10h12l4-4H14l-4 4Z" fill="currentColor"/>
          </svg>
          <span className="font-display text-xl font-bold tracking-tight text-primary uppercase">
            Johnred Demafeliz
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-slate-500 hover:text-primary"
                )}
              >
                {link.label}
                {/* Active indicator line */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left bg-accent-teal transition-transform duration-300 ease-out",
                    isActive(link.href) ? "scale-x-100" : "scale-x-0"
                  )}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <MagneticButton className="hidden md:block">
          <Link
            href="/book-a-call"
            className="btn-primary text-xs"
          >
            Free Audit
          </Link>
        </MagneticButton>

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
            className={cn(
              "absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
              mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
              mobileOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
              mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          scrolled
            ? "glass-panel-strong"
            : "bg-white/95 backdrop-blur-xl",
          mobileOpen
            ? "max-h-80 opacity-100 border-t border-slate-200/60"
            : "max-h-0 opacity-0 border-t border-transparent"
        )}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <div className="mx-auto max-w-7xl px-5 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive(link.href)
                      ? "bg-slate-50 text-primary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  )}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-slate-200/60 pt-4">
            <Link
              href="/book-a-call"
              className="btn-primary flex w-full justify-center text-xs"
              onClick={closeMobile}
            >
              Free Audit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
