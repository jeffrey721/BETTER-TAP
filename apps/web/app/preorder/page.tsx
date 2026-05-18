import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PreorderQuiz } from "@/components/preorder-quiz";

export const metadata: Metadata = {
  title: "Pre-Order",
  description:
    "Answer four quick questions — a setup photo, your ZIP code, countertop, and water access — to see if Better Tap fits your home.",
};

export default function PreorderPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-2 pt-14 sm:px-8 lg:pt-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Pre-Order
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            See if Better Tap fits your home
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Four quick questions — about 60 seconds. Share a photo of your
            setup, your ZIP code, and a couple of details, and we&apos;ll tell
            you right away.
          </p>
        </Reveal>
      </section>

      <Reveal>
        <PreorderQuiz />
      </Reveal>
    </>
  );
}
