import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Better Tap is the U.S. consumer brand for the Strauss Water Tami 4 Edge, distributed by YJC Trade LLC of New York.",
};

const values = [
  {
    title: "Purified, not just filtered",
    body: "We hold a higher bar than a pitcher. Multi-stage clarification plus continuous UV-C is purification you can rely on, every pour.",
  },
  {
    title: "Premium, but unfussy",
    body: "An appliance should earn its place on the counter and then get out of the way. Better Tap is quiet, considered, and easy to live with.",
  },
  {
    title: "Service that shows up",
    body: "Installation, filter delivery, and support are part of the product — not an afterthought. We answer, we schedule, we follow through.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 lg:pt-20">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
            Better water, brought home to America.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Better Tap is the U.S. consumer brand for a water bar engineered by
            Strauss Water — a company that has spent decades perfecting how
            households get clean, great-tasting water. We bring that appliance
            to the American kitchen, with installation and service built in.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-black shadow-xl">
          <video
            className="aspect-video w-full object-cover"
            src="/video/product.mp4"
            poster="/img/product-white.jpg"
            autoPlay
            muted
            loop
            playsInline
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="article" delay={i * 90} key={v.title}>
              <div className="card-lift h-full rounded-2xl border border-border bg-surface p-7 hover:shadow-lg">
                <h2 className="text-lg font-bold">{v.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Powered by Strauss Water. Distributed by YJC Trade.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              The appliance behind Better Tap is sold as the Tami 4 Edge in
              Israel and as Ourtaap in the United Kingdom. For the United
              States, YJC Trade LLC of New York brings it to market as Better
              Tap — handling import, installation, and customer care close to
              home.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-5">
              {[
                ["Decades", "of Strauss Water engineering"],
                ["2 states", "served — NY · NJ"],
                ["2 years", "standard warranty"],
                ["1 partner", "for install & support"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-border bg-bg p-6"
                >
                  <dt className="text-2xl font-extrabold tracking-tight">{n}</dt>
                  <dd className="mt-1 text-xs text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Come see what better water feels like.
          </h2>
          <Link
            href="/shop"
            className="btn mt-8 inline-flex h-13 bg-brand px-8 py-3.5 text-base text-brand-contrast shadow-md hover:shadow-xl"
          >
            Get Better Tap
          </Link>
        </Reveal>
      </section>
    </>
  );
}
