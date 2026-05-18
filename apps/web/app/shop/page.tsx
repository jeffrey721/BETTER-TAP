import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { products, usd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Order the Better Tap water bar in white or black, add a filter subscription, and pick up sparkling CO₂ cylinders.",
};

export default function ShopPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 lg:pt-20">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Shop
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Build your Better Tap.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Choose a finish, keep purification fresh with a filter subscription,
            and never run dry on sparkling. Installation is included with every
            water bar.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const img: Record<string, string> = {
              "better-tap-white": "/img/product-white.jpg",
              "better-tap-black": "/img/product-black.jpg",
              "filter-subscription": "/img/dispense.jpg",
              "co2-cylinder": "/img/control-panel.jpg",
            };
            return (
            <Reveal as="article" delay={i * 80} key={p.slug}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-border bg-surface p-6 hover:border-accent hover:shadow-xl">
                {/* visual */}
                <div className="img-zoom relative mb-5 h-44 overflow-hidden rounded-xl border border-border bg-bg">
                  <img
                    src={img[p.slug]}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                  {p.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-base font-bold">{p.name}</h2>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {p.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <span className="text-xl font-extrabold tracking-tight">
                      {usd(p.priceUsd)}
                    </span>
                    {p.cadence && (
                      <span className="text-xs text-muted"> {p.cadence}</span>
                    )}
                  </div>
                  <Link
                    href="/contact"
                    className="btn h-10 bg-brand px-4 text-sm text-brand-contrast hover:shadow-md"
                  >
                    Add
                  </Link>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-10">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-bold">
                Installation is on us — and on the calendar.
              </h3>
              <p className="mt-1 text-sm text-muted">
                Every water bar includes professional plumbed-in installation
                across NY, NJ, and CT. Reserve a window at checkout.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn h-12 shrink-0 bg-accent px-6 text-base text-white shadow-md hover:shadow-lg"
            >
              Book an install
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
