import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Device } from "@/components/device";
import { usd } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Water Bar",
  description:
    "Better Tap delivers chilled, room, hot, boiling, and sparkling water from one plumbed-in appliance — purified by a multi-stage cartridge and continuous UV-C light.",
};

const specs: [string, string][] = [
  ["Temperatures", "Chilled · Room · Hot · Boiling"],
  ["Sparkling", "Integrated CO₂ line"],
  ["Purification", "Multi-stage cartridge + continuous UV-C"],
  ["Cartridge life", "≈ 6 months · dishwasher-safe"],
  ["Connection", "Plumbed to existing cold-water line"],
  ["Electrical", "110V — standard U.S. outlet"],
  ["Finishes", "Architectural White · Matte Black"],
  ["Warranty", "2 years · extendable"],
];

const included = [
  "Better Tap unit in your chosen finish",
  "First purification cartridge, installed",
  "Sparkling CO₂ cylinder",
  "Professional plumbed-in installation",
  "Walkthrough and registration on install day",
];

const compare = [
  {
    label: "Bottled water delivery",
    bad: ["Plastic to store and haul", "Recurring deliveries", "No hot or sparkling"],
  },
  {
    label: "Filter pitcher",
    bad: ["Tiny capacity", "Fridge space", "Cartridge guesswork"],
  },
  {
    label: "Plumbed filter tap",
    bad: ["Cold only", "No sparkling", "No UV purification"],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}

export default function ProductPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-2 lg:pb-24 lg:pt-20">
        <Reveal className="flex flex-col justify-center">
          <Eyebrow>The product</Eyebrow>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
            One water bar. Every pour you need.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Better Tap replaces the kettle, the pitcher, the sparkling machine,
            and the bottled-water habit with a single plumbed-in appliance —
            purified water, instantly, in five forms.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="btn h-13 bg-brand px-7 py-3.5 text-base text-brand-contrast shadow-md hover:shadow-xl"
            >
              Get Better Tap — {usd(1150)}
            </Link>
            <Link
              href="/technology"
              className="link-underline text-sm font-semibold text-fg"
            >
              See the technology →
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120} className="flex items-center justify-center">
          <Device />
        </Reveal>
      </section>

      {/* SPEC + INCLUDED */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <Eyebrow>Specifications</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight">
              Built to a clear standard.
            </h2>
            <dl className="mt-7 divide-y divide-border border-y border-border">
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="text-right text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight">
              Everything for install day.
            </h2>
            <ul className="mt-7 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-bg p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* COMPARE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why switch</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Better Tap leaves behind.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {compare.map((c, i) => (
            <Reveal as="article" delay={i * 90} key={c.label}>
              <div className="card-lift h-full rounded-2xl border border-border bg-surface p-7 hover:shadow-lg">
                <h3 className="text-base font-bold">{c.label}</h3>
                <ul className="mt-4 space-y-2">
                  {c.bad.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted">
                      <span className="text-danger" aria-hidden>✕</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-6">
          <div className="rounded-2xl border border-accent bg-accent/10 p-7">
            <h3 className="text-base font-bold text-accent-strong">Better Tap</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                "Chilled, hot, boiling & sparkling",
                "Continuous UV-C purification",
                "No plastic, no deliveries",
              ].map((g) => (
                <li key={g} className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-accent" aria-hidden>✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
