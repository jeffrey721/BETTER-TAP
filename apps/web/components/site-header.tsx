"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Wordmark } from "./wordmark";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Wordmark className="text-xl" />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm font-medium text-muted hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href="/shop"
            className="btn hidden h-10 bg-brand px-5 text-sm text-brand-contrast shadow-sm hover:shadow-lg sm:inline-flex"
          >
            Get Better Tap
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="btn h-10 w-10 border border-border bg-surface text-fg md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg px-5 pb-5 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-fg"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="btn mt-2 h-11 w-full bg-brand text-brand-contrast"
          >
            Get Better Tap
          </Link>
        </div>
      )}
    </header>
  );
}
