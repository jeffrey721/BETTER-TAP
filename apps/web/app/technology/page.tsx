import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Inside Better Tap: a four-stage purification system — deep filtration, limescale protection, UV treatment, and mineral retention — engineered by Strauss Water.",
};

const stages = [
  {
    icon: "🧪",
    n: "Stage 01",
    title: "Deep purification",
    body: "Water passes through a unique hydraulic system with ultra-dense nano-fibre and carbon filtration — eliminating industrial and medical waste, microplastics, and farming chemicals before they ever reach your glass.",
    chips: [
      "99.9% microplastics",
      "97% chlorine",
      "Lead, mercury & BPA",
      "Pesticides & hormones",
    ],
  },
  {
    icon: "🛡️",
    n: "Stage 02",
    title: "Limescale protection",
    body: "A polyphosphate layer embedded in the filter prevents scale from forming — it stops mineral compounds binding together, protecting the machine and keeping water quality consistent.",
    chips: ["No limescale buildup", "Protects the machine"],
  },
  {
    icon: "☀️",
    n: "Stage 03",
    title: "UV protection",
    body: "UV-C treatment stops microbiological contaminants from growing — neutralizing bacteria and parasites. This stage is especially vital once chlorine has been removed.",
    chips: ["Kills bacteria & parasites", "Continuous treatment"],
  },
  {
    icon: "💎",
    n: "Stage 04",
    title: "Mineral retention",
    body: "A patented system keeps the essential minerals your body needs — calcium, potassium, and magnesium — preserving up to 20% of your daily mineral requirement.",
    chips: ["Calcium · Potassium · Magnesium", "Up to 20% daily minerals"],
  },
];

const features = [
  {
    icon: "🌡️",
    title: "50 temperature settings",
    body: "From instant boiling to ice-cold — dialed in to the exact temperature you want, every pour.",
  },
  {
    icon: "🛢️",
    title: "Stainless steel tanks",
    body: "The internal tanks are stainless steel, not plastic — so water never picks up microplastics inside the machine.",
  },
  {
    icon: "📡",
    title: "Smart sensors",
    body: "Built-in sensors continuously monitor machine health and water flow, flagging maintenance before you'd notice.",
  },
  {
    icon: "🍃",
    title: "Energy-saving mode",
    body: "The machine powers down intelligently when idle, sipping just 0.67 kWh a day.",
  },
  {
    icon: "🔒",
    title: "Child safety lock",
    body: "Hot water sits behind a child-safe control, so a boiling pour is never an accident.",
  },
  {
    icon: "🚰",
    title: "Hands-free filling",
    body: "An auto-stop fill senses your cup or bottle and shuts off on its own — no overflow, no waiting.",
  },
];

const waterFaqs = [
  {
    q: "Does it change the water's pH or alkalinity?",
    a: "No. Better Tap filters out impurities, but the water's pH and alkalinity stay exactly the same.",
  },
  {
    q: "Does it remove fluoride?",
    a: "No. The system retains naturally occurring minerals — including fluoride.",
  },
  {
    q: "Does it affect TDS?",
    a: "TDS measures dissolved substances and isn't a measure of purity. Better Tap preserves essential minerals, keeping TDS at appropriate levels.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 lg:pt-20">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Technology
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
            Four-stage purification, in one quiet cabinet.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Better Tap is engineered by Strauss Water, a name that has been
            building water appliances for decades. Here is exactly what happens
            between your supply line and your glass.
          </p>
        </Reveal>
      </section>

      {/* not all water is created equal */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Why it matters
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Not all water is created equal.
          </h2>
          <p className="mt-3 text-muted">
            Better Tap isn&apos;t just filtered — it&apos;s intelligently
            purified, protected, and perfected.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: "🚰",
              title: "Tap water",
              body: "Comes with an aftertaste and questionable contaminants you can't see.",
            },
            {
              icon: "🧴",
              title: "Bottled water",
              body: "Costly, wasteful, and often carrying microplastics of its own.",
            },
            {
              icon: "🫗",
              title: "Filter jugs",
              body: "Left exposed to bacteria — and they strip away essential minerals.",
            },
          ].map((p, i) => (
            <Reveal as="article" delay={i * 80} key={p.title}>
              <div className="card-lift h-full rounded-2xl border border-border bg-surface p-7 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg text-xl">
                  {p.icon}
                </span>
                <h3 className="mt-4 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* spec strip */}
      <section className="border-y border-border bg-brand text-brand-contrast">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 text-center sm:px-8 lg:grid-cols-3">
          {[
            ["99.9%", "Microplastics removed"],
            ["97%", "Chlorine removed"],
            ["99%", "Heavy metals removed"],
            ["50", "Temperature settings"],
            ["0.5 gal / min", "Chilled water flow"],
            ["0.67 kWh", "Energy use per day"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
                {v}
              </div>
              <div className="mt-1 text-sm opacity-70">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* four-stage purification */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The purification system
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Four stages, every single pour.
          </h2>
          <p className="mt-3 text-muted">
            Each glass of water moves through all four stages — purified,
            protected, treated, and balanced.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {stages.map((s, i) => (
            <Reveal as="article" delay={i * 80} key={s.n}>
              <div className="card-lift h-full rounded-2xl border border-border bg-surface p-7 hover:border-accent hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-2xl">
                    {s.icon}
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-accent">
                      {s.n}
                    </div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-fg"
                    >
                      ✓ {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* key features */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 lg:pb-24">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Engineered in
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            The details that make it effortless.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="article" delay={i * 70} key={f.title}>
              <div className="card-lift h-full rounded-2xl border border-border bg-surface p-7 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-xl">
                  {f.icon}
                </span>
                <h3 className="mt-4 text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* water-quality questions */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Water-quality questions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The science, answered plainly.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {waterFaqs.map((f, i) => (
              <Reveal as="article" delay={i * 80} key={f.q}>
                <div className="card-lift h-full rounded-2xl border border-border bg-bg p-7 hover:shadow-lg">
                  <h3 className="text-base font-bold">{f.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* explainer videos */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              See it in motion
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              The cartridge and the UV chamber, up close.
            </h2>
            <p className="mt-3 text-muted">
              Strauss Water product films — how the filtration cartridge and the
              UV purification system actually work.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <figure className="overflow-hidden rounded-2xl border border-border bg-black shadow-lg">
                <video
                  className="aspect-video w-full"
                  src="/video/filtration.mp4"
                  controls
                  playsInline
                  preload="metadata"
                />
                <figcaption className="bg-surface px-4 py-2.5 text-xs font-medium text-muted">
                  Multi-stage filtration — how it works
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100}>
              <figure className="overflow-hidden rounded-2xl border border-border bg-black shadow-lg">
                <video
                  className="aspect-video w-full"
                  src="/video/uv.mp4"
                  poster="/img/control-panel.jpg"
                  controls
                  playsInline
                  preload="metadata"
                />
                <figcaption className="bg-surface px-4 py-2.5 text-xs font-medium text-muted">
                  UV purification — the final line of defense
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-brand text-brand-contrast">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Designed to disappear into your day.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base opacity-75">
              The best technology is the kind you stop noticing. Better Tap just
              pours.
            </p>
            <Link
              href="/shop"
              className="btn mt-8 inline-flex h-13 bg-accent px-8 py-3.5 text-base text-white shadow-lg hover:shadow-xl"
            >
              Get Better Tap
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
