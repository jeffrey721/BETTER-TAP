"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold"
            >
              <span className={isOpen ? "text-accent" : "text-fg"}>{item.q}</span>
              <span
                className={`shrink-0 text-lg transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-accent" : "text-muted"
                }`}
                aria-hidden
              >
                ▾
              </span>
            </button>
            <div
              className="grid transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
