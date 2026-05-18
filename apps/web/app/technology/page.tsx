import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Inside Better Tap: a multi-stage purification cartridge, continuous UV-C light, a multi-temperature tank, and a smart metering controller.",
};

const chapters = [
  {
    n: "01",
    title: "The multi-stage cartridge",
    body: "Water passes through sediment, activated carbon, and ion-exchange media that clarify it — reducing chlorine taste, particulates, and the things you'd rather not drink. The cartridge is dishwasher-safe, so it actually gets cleaned.",
  },
  {
    n: "02",
    title: "Continuous UV-C purification",
    body: "Inside the cabinet, UV-C light treats the water on its way to your glass — neutralizing 99.9% of microorganisms. It works every second the unit is plugged in, with nothing for you to switch on.",
  },
  {
    n: "03",
    title: "The multi-temperature tank",
    body: "A thermally-isolated tank holds water at four ready temperatures at once — ice-cold, room, hot, and a true boiling draw — so there's no kettle wait and no warm-up.",
  },
  {
    n: "04",
    title: "Smart metering",
    body: "A microcontroller meters every pour to your cup size and tracks cartridge life, so the right water arrives in the right amount and you're reminded before purification quality drifts.",
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
            Four technologies, working in one quiet cabinet.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Better Tap is engineered by Strauss Water, a name that has been
            building water appliances for decades. Here is what happens between
            your supply line and your glass.
          </p>
        </Reveal>
      </section>

      {/* spec strip */}
      <section className="border-y border-border bg-brand text-brand-contrast">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 text-center sm:px-8 lg:grid-cols-3">
          {[
            ["99.9%", "Microplastics removed"],
            ["97%", "Chlorine removed"],
            ["99%", "Heavy metals removed"],
            ["50", "Temperature settings"],
            ["2 L / min", "Chilled water flow"],
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

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 lg:pb-24">
        <div className="space-y-5">
          {chapters.map((c, i) => (
            <Reveal as="article" delay={i * 60} key={c.n}>
              <div className="card-lift grid gap-6 rounded-2xl border border-border bg-surface p-8 hover:border-accent hover:shadow-xl sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-10">
                <div className="text-5xl font-extrabold tracking-tight text-accent/35 sm:text-7xl">
                  {c.n}
                </div>
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">{c.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
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
              UV-C purification system actually work.
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
                  UV-C purification — the final line of defense
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
