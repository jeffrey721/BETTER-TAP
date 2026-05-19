import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { StatCounter } from "@/components/stat-counter";

const problems = [
  {
    title: "Bottled water, hauled home",
    body: "Cases of plastic carried up the stairs, stacked in the pantry, and trucked to a landfill. A household runs through hundreds of bottles a year.",
  },
  {
    title: "The kettle wait",
    body: "Two or three minutes, every time, for tea or a pour-over. Boiling water should be a button, not a chore.",
  },
  {
    title: "The pitcher shuffle",
    body: "A filter jug that never holds enough, takes counter space in the fridge, and clouds over the moment you forget to change the cartridge.",
  },
];

const frames = [
  {
    step: "01",
    title: "One appliance on the counter",
    body: "Better Tap plumbs into your existing water line and sits where the kettle used to. No jugs, no deliveries, no clutter.",
  },
  {
    step: "02",
    title: "Four temperatures, instant",
    body: "Ice-cold, room, hot, and a true boiling draw — every pour metered to your glass, with no kettle wait.",
  },
  {
    step: "03",
    title: "Purified, continuously",
    body: "A multi-stage cartridge clarifies the water and UV-C light neutralizes 99.9% of microorganisms — quietly, every second it's plugged in.",
  },
];

const techTeasers = [
  { label: "Four temperatures", value: "Instant" },
  { label: "Essential minerals kept", value: "Yes" },
  { label: "UV-C purification", value: "99.9%" },
  { label: "Dishwasher-safe cartridge", value: "6 months" },
];

const reviews = [
  {
    quote:
      "We stopped buying bottled water the week it was installed. The boiling tap alone changed our mornings.",
    name: "Rachel M.",
    place: "Teaneck, NJ",
  },
  {
    quote:
      "It looks like it belongs in the kitchen — not like an appliance we tolerated. Ice-cold water on tap is dangerous in the best way.",
    name: "Daniel & Aviva K.",
    place: "Monsey, NY",
  },
  {
    quote:
      "Install took an afternoon. The team walked us through everything and the filter just shows up before it's due.",
    name: "Jonathan S.",
    place: "Stamford, CT",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* turquoise "water" accents framing the page sides */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-y-0 left-0 z-40 w-12 sm:w-24"
        style={{
          background:
            "linear-gradient(to right, rgba(20,200,220,0.28), rgba(20,200,220,0.06) 55%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-y-0 right-0 z-40 w-12 sm:w-24"
        style={{
          background:
            "linear-gradient(to left, rgba(20,200,220,0.28), rgba(20,200,220,0.06) 55%, transparent)",
        }}
      />

      {/* ---------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-20">
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Now installing across NY · NJ
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
                Hot. Cold.
                <span style={{ color: "#1e88e5" }}> Pure.</span> Always.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Better Tap is the plumbed-in water bar for the American kitchen.
                One appliance, four temperatures, zero plastic — purified water
                the moment you want it.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="btn h-13 bg-brand px-7 py-3.5 text-base text-brand-contrast shadow-md hover:shadow-xl"
                >
                  Get Better Tap
                </Link>
                <Link
                  href="/technology"
                  className="btn h-13 border border-border bg-surface px-7 py-3.5 text-base text-fg hover:shadow-md"
                >
                  How it works →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-7">
                {[
                  ["4 temps", "no kettle"],
                  ["99.9%", "purified"],
                  ["1 line", "no deliveries"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="text-2xl font-extrabold tracking-tight">{n}</dt>
                    <dd className="text-xs text-muted">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={160} className="flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-3xl border border-border bg-black shadow-xl">
              <video
                className="aspect-video w-full object-contain"
                src="/video/hero.mp4"
                poster="/img/hero-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- PROBLEM */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>The counter you have today</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Three appliances, doing one job badly.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal as="article" delay={i * 90} key={p.title}>
                <div className="card-lift h-full rounded-2xl border border-border bg-bg p-7 hover:shadow-lg">
                  <span className="text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- PRODUCT 3 FRAMES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>The Better Tap way</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Replace the clutter with one quiet machine.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {frames.map((f, i) => (
            <Reveal as="article" delay={i * 90} key={f.step}>
              <div className="card-lift group h-full rounded-2xl border border-border bg-surface p-8 hover:border-accent hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-base font-extrabold text-brand-contrast">
                  {f.step}
                </div>
                <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ TECH TEASER */}
      <section className="border-y border-border bg-brand text-brand-contrast">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                Four technologies, one cabinet
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Engineered by Strauss Water. Tuned for your kitchen.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed opacity-75">
                A multi-stage cartridge, continuous UV-C purification, a
                thermally-isolated multi-temperature tank, and a smart
                controller that meters every pour.
              </p>
              <Link
                href="/technology"
                className="link-underline mt-7 inline-block text-sm font-semibold text-accent-strong"
              >
                Explore the technology →
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {techTeasers.map((t) => (
                  <div
                    key={t.label}
                    className="card-lift rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10"
                  >
                    <div className="text-2xl font-extrabold tracking-tight">
                      {t.value}
                    </div>
                    <div className="mt-1 text-xs opacity-70">{t.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- SUSTAINABILITY */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal className="img-zoom overflow-hidden rounded-3xl border border-border">
            <img
              src="/img/lifestyle-kitchen.jpg"
              alt="Two glasses of purified water on a kitchen counter beside a Better Tap"
              className="w-full"
            />
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-border bg-surface px-8 py-14 text-center">
            <Eyebrow>Plastic avoided</Eyebrow>
            <p className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              <span className="text-accent">
                <StatCounter value={2847196} />
              </span>{" "}
              plastic bottles skipped
            </p>
            <p className="mx-auto mt-4 max-w-sm text-sm text-muted">
              An estimate of the single-use bottles Better Tap households have
              kept out of the waste stream so far this year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------- SOCIAL PROOF */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>From real kitchens</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The bottled-water habit, quietly retired.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal as="article" delay={i * 90} key={r.name}>
                <figure className="card-lift flex h-full flex-col rounded-2xl border border-border bg-bg p-7 hover:shadow-lg">
                  <div className="text-accent" aria-hidden>
                    ★★★★★
                  </div>
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
        </div>
      </section>

      {/* ------------------------------------------------------- CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-brand px-8 py-16 text-center text-brand-contrast sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            Ready for better water?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base opacity-75">
            Choose your finish, add a filter subscription, and book an install
            window. We handle the plumbing.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/shop"
              className="btn h-13 bg-accent px-8 py-3.5 text-base text-white shadow-lg hover:shadow-xl"
            >
              Get Better Tap
            </Link>
            <Link
              href="/contact"
              className="btn h-13 border border-white/20 bg-white/5 px-8 py-3.5 text-base text-brand-contrast hover:bg-white/10"
            >
              Talk to us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
