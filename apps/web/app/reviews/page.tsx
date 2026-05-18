import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { reviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What Better Tap owners say — real reviews from kitchens across the tri-state area.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 lg:pt-20">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Reviews
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
            The bottled-water habit, quietly retired.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Better Tap owners across New York, New Jersey, and Connecticut on
            what changed after install day.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-surface px-6 py-5">
            <div>
              <div className="text-3xl font-extrabold tracking-tight text-accent">4.9 / 5</div>
              <div className="text-xs text-muted">Average owner rating</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-3xl font-extrabold tracking-tight">98%</div>
              <div className="text-xs text-muted">Would recommend Better Tap</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-3xl font-extrabold tracking-tight">2,400+</div>
              <div className="text-xs text-muted">Households served</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="article" delay={(i % 3) * 90} key={r.name}>
              <figure className="card-lift flex h-full flex-col rounded-2xl border border-border bg-surface p-7 hover:shadow-lg">
                <div className="text-accent" aria-hidden>★★★★★</div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-fg">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-muted"> · {r.place}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src="/img/lifestyle-kitchen.jpg"
              alt="Glasses of purified water on a Better Tap owner's kitchen counter"
              className="w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Join them.
          </h2>
          <Link
            href="/shop"
            className="btn mt-6 inline-flex h-13 bg-brand px-8 py-3.5 text-base text-brand-contrast shadow-md hover:shadow-xl"
          >
            Get Better Tap
          </Link>
        </Reveal>
      </section>
    </>
  );
}
