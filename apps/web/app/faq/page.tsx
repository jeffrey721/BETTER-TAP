import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Better Tap — temperatures, filters, installation, water quality, safety, and more.",
};

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 lg:pt-20">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Frequently asked questions
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
            Everything you want to know.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            The water, the technology, installation, and ownership — answered
            plainly. Still curious? Our team is one call away.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Reveal>
            <FaqAccordion />
          </Reveal>
          <Reveal delay={120} className="lg:sticky lg:top-24">
            <div className="img-zoom overflow-hidden rounded-3xl border border-border">
              <img
                src="/img/dispense.jpg"
                alt="Better Tap dispensing purified water into a glass"
                className="w-full"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-lg font-bold">Still have a question?</h2>
              <p className="mt-2 text-sm text-muted">
                Talk to a Better Tap specialist — we&apos;ll walk you through
                anything and book your installation.
              </p>
              <Link
                href="/contact"
                className="btn mt-5 inline-flex h-12 bg-brand px-6 text-base text-brand-contrast shadow-md hover:shadow-lg"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
