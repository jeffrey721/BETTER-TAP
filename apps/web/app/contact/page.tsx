import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Better Tap about installing a water bar in your kitchen. We serve New York, New Jersey, and Connecticut.",
};

const channels = [
  { label: "Email", value: "support@thebettertap.com" },
  { label: "Phone", value: "(212) 555-0148" },
  { label: "Support hours", value: "Mon–Fri, 9am–6pm ET" },
  { label: "Service area", value: "New York · New Jersey · Connecticut" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Contact
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let's get Better Tap into your kitchen.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Tell us where you are and how you'd like to be reached. A specialist
            will follow up within 4 business hours — no pressure, just answers.
          </p>

          <dl className="mt-10 divide-y divide-border border-y border-border">
            {channels.map((c) => (
              <div key={c.label} className="flex justify-between gap-6 py-4">
                <dt className="text-sm text-muted">{c.label}</dt>
                <dd className="text-right text-sm font-semibold">{c.value}</dd>
              </div>
            ))}
          </dl>

          <div className="img-zoom mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src="/img/control-panel.jpg"
              alt="The Better Tap control panel"
              className="w-full"
            />
          </div>

          <p className="mt-6 text-xs text-muted">
            Better Tap — powered by Strauss Water. Distributed in the U.S. by
            YJC Trade LLC, New York.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
