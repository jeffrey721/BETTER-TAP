"use client";

import { useState } from "react";

const field =
  "h-12 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-[var(--ring)]";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-accent bg-accent/10 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
          ✓
        </div>
        <h3 className="mt-4 text-lg font-bold">Thanks — we've got it.</h3>
        <p className="mt-2 text-sm text-muted">
          A Better Tap specialist will reach out within 4 business hours to talk
          through your kitchen and book an install window.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-2xl border border-border bg-surface p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${field}`} />
        </div>
        <div>
          <label htmlFor="zip" className="text-sm font-medium">
            ZIP code
          </label>
          <input
            id="zip"
            name="zip"
            inputMode="numeric"
            pattern="[0-9]{5}"
            required
            className={`mt-1.5 ${field}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${field}`}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`mt-1.5 ${field}`}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
        />
      </div>
      <button
        type="submit"
        className="btn mt-6 h-12 w-full bg-brand text-base text-brand-contrast shadow-md hover:shadow-lg"
      >
        Request a call
      </button>
      <p className="mt-3 text-xs text-muted">
        This is a demonstration form — submissions are not stored. In
        production it routes to the Better Tap CRM as a new lead.
      </p>
    </form>
  );
}
