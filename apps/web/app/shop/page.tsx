import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Three ways to get Better Tap: one payment of $1,299, 0% APR installments via Klarna or Amazon Pay, or a low-deposit lease at $50/month.",
};

const options = [
  {
    id: "cash",
    name: "One Payment",
    tagline: "Own it outright",
    headline: "$1,299",
    sub: "one-time",
    img: "/img/product-white.jpg",
    badge: "Best value",
    blurb:
      "Pay once and own your Better Tap outright — the best total value, with nothing more to pay.",
    features: [
      "Better Tap machine — yours to keep",
      "Free professional installation",
      "First purification cartridge included",
      "Lifetime warranty & support",
    ],
  },
  {
    id: "installments",
    name: "Installments",
    tagline: "Split it over time",
    headline: "$108",
    sub: "/mo for 12 months",
    img: "/img/product-black.jpg",
    badge: "0% APR",
    popular: true,
    blurb:
      "Spread the $1,299 cost into easy monthly payments with Klarna or Amazon Pay. 0% APR — own it at the end.",
    features: [
      "12 monthly payments of $108.25",
      "0% APR with Klarna or Amazon Pay",
      "Own it outright at the end of the term",
      "Free installation & lifetime warranty",
    ],
  },
  {
    id: "lease",
    name: "Lease",
    tagline: "Lowest upfront cost",
    headline: "$50",
    sub: "/mo after deposit",
    img: "/img/dispense.jpg",
    blurb:
      "Pay a $450 deposit, then just $50/month. Filters, service, and support all included — relocate or upgrade anytime.",
    features: [
      "$450 deposit to get started",
      "$50 / month, cancel anytime",
      "Filters & UV lamp always included",
      "Full service & support included",
    ],
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 lg:pt-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Choose your way
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Three ways to get Better Tap
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Buy it outright, spread the cost interest-free, or lease with a low
            upfront deposit. Every option includes free professional
            installation.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {options.map((o, i) => (
            <Reveal as="article" delay={i * 90} key={o.id}>
              <div
                className={`card-lift flex h-full flex-col overflow-hidden rounded-2xl border bg-surface hover:shadow-xl ${
                  o.popular
                    ? "border-accent shadow-lg ring-2 ring-accent/30"
                    : "border-border"
                }`}
              >
                <div className="img-zoom relative h-44 overflow-hidden border-b border-border bg-bg">
                  <img src={o.img} alt={o.name} className="h-full w-full object-cover" />
                  {o.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      {o.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                    {o.name}
                  </h2>
                  <p className="text-xs text-muted">{o.tagline}</p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {o.headline}
                    </span>
                    <span className="text-sm font-medium text-muted">{o.sub}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {o.blurb}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {o.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 text-accent" aria-hidden>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`btn mt-7 h-12 w-full text-base ${
                      o.popular
                        ? "bg-accent text-white shadow-md hover:shadow-lg"
                        : "border border-border bg-surface text-fg hover:border-accent"
                    }`}
                  >
                    Choose {o.name}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-muted">
            Every option includes free professional installation, a lifetime
            warranty, and a 30-day money-back guarantee.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-bold">Not sure which option fits?</h3>
              <p className="mt-1 text-sm text-muted">
                Talk to a Better Tap specialist — we&apos;ll help you choose and
                book your installation.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn h-12 shrink-0 bg-brand px-6 text-base text-brand-contrast shadow-md hover:shadow-lg"
            >
              Talk to us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
