"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Wordmark } from "./wordmark";
import { ThemeToggle } from "./theme-toggle";

/** Line icon of the Better Tap water bar machine. */
function MachineIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" />
      <path d="M9 7.5h6" />
      <path d="M12 11v1.4" />
      <path d="M12 13.8c-1 1.3-1.6 2.2-1.6 3a1.6 1.6 0 0 0 3.2 0c0-.8-.6-1.7-1.6-3Z" />
    </svg>
  );
}

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

        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {/* water bar machine icon — opens the drop-down menu */}
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className="btn h-10 w-10 border border-border bg-surface text-fg hover:shadow-md"
            >
              <MachineIcon />
            </button>

            {/* click-away layer */}
            {open && (
              <div
                className="fixed inset-0 z-40"
                aria-hidden
                onClick={() => setOpen(false)}
              />
            )}

            {/* drop-down menu */}
            <div
              className={`absolute right-0 top-full z-50 mt-2 w-60 origin-top-right rounded-2xl border border-border bg-surface p-2 shadow-xl transition-all duration-200 ${
                open
                  ? "scale-100 opacity-100"
                  : "pointer-events-none -translate-y-1 scale-95 opacity-0"
              }`}
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-fg transition hover:bg-surface-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="btn mt-2 h-11 w-full bg-brand text-sm text-brand-contrast hover:shadow-lg"
              >
                Get Better Tap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
