import { Reveal } from "./reveal";
import { StatCounter } from "./stat-counter";

/**
 * Home "One product, every problem solved" deep-dive.
 * Built from the U.S. hydration-market research summary.
 */

const replaced = [
  { icon: "🧴", name: "Bottled water" },
  { icon: "🛢️", name: "5-gallon jug delivery" },
  { icon: "🫗", name: "Pitcher filter" },
  { icon: "🧊", name: "Fridge filter" },
  { icon: "⚙️", name: "Under-sink RO" },
  { icon: "🫖", name: "Electric kettle" },
];

const stats: { pct: number; label: string }[] = [
  { pct: 83, label: "worry about microplastics in bottled water" },
  { pct: 68, label: "feel guilty about single-use plastic waste" },
  { pct: 47, label: "distrust how their tap water tastes" },
  { pct: 45, label: "are concerned about tap-water contaminants" },
  { pct: 63, label: "rely on a basic fridge filter today" },
  { pct: 20, label: "fully trust the water from their tap" },
];

const pairs = [
  {
    icon: "🧴",
    situation: "83% worry about microplastics in bottled water.",
    response:
      "The bottle is gone entirely — sealed filtration, with no plastic ever touching your water.",
  },
  {
    icon: "🚰",
    situation: "Only 20% fully trust the water from their tap.",
    response:
      "Multi-stage filtration removes chlorine, sediment, and lead — and transforms the taste.",
  },
  {
    icon: "♻️",
    situation: "68% feel guilty about single-use plastic waste.",
    response:
      "Takes your home off the bottled-water grid — 1,400+ bottles avoided every year.",
  },
  {
    icon: "🧮",
    situation: "The average kitchen juggles five or more water products.",
    response:
      "One appliance, one tap — filtered cold, room, and hot water in a single fixture.",
  },
  {
    icon: "💧",
    situation: "Only 44% drink the water they should each day.",
    response:
      "Always-on countertop access makes staying hydrated genuinely effortless.",
  },
  {
    icon: "🛢️",
    situation: "5-gallon jugs mean 40 lb lifting, scheduling, and recurring fees.",
    response:
      "Plumbed straight to your water line — no jugs, no deliveries, no lifting.",
  },
  {
    icon: "🫖",
    situation: "The electric kettle: a 2–4 minute wait, unfiltered, scale buildup.",
    response:
      "Instant hot water from a filtered source — no scale, no waiting.",
  },
  {
    icon: "🧊",
    situation: "63% rely on a fridge filter that barely removes anything.",
    response:
      "Professional-grade, multi-stage filtration — right there on the counter.",
  },
  {
    icon: "💸",
    situation: "Households spend $50–150+ a month on premium water.",
    response:
      "Restaurant-quality filtered water at pennies a glass — payback in 18–24 months.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}

/* donut ring for the data section (sits on the dark brand band) */
function Ring({ pct, label }: { pct: number; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-32 w-32">
        <div
          className="h-full w-full rounded-full"
          style={{
            background: `conic-gradient(var(--color-accent) ${pct}%, rgba(255,255,255,0.12) 0)`,
          }}
        />
        <div className="absolute inset-[15%] flex items-center justify-center rounded-full bg-brand">
          <span className="text-2xl font-extrabold text-accent">
            <StatCounter value={pct} suffix="%" />
          </span>
        </div>
      </div>
      <p className="mt-3 max-w-[12rem] text-sm leading-snug opacity-75">
        {label}
      </p>
    </div>
  );
}

export function HomeSolutions() {
  return (
    <>
      {/* ============================ 1 · THE STACK COLLAPSES */}
      <section className="border-t border-border bg-bg">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>One product, the whole stack</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Six products on the counter.
              <br />
              <span className="text-accent">One fixture in the wall.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              The American kitchen doesn&apos;t have one water problem — it has
              six or seven overlapping ones, each patched with a different
              partial product. Better Tap collapses the entire stack into a
              single, well-designed fixture.
            </p>
          </Reveal>

          {/* replaced products grid */}
          <Reveal delay={100}>
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
              {replaced.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4"
                >
                  <span className="text-2xl opacity-60 grayscale">{r.icon}</span>
                  <span className="flex-1 text-sm font-semibold text-muted line-through decoration-accent/60 decoration-2">
                    {r.name}
                  </span>
                  <span className="text-xs font-bold text-accent">replaced</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* arrow */}
          <Reveal delay={160} className="mt-6 text-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg text-white">
              ↓
            </span>
          </Reveal>

          {/* the one fixture */}
          <Reveal delay={220}>
            <div className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-3xl border border-accent bg-brand text-brand-contrast">
              <div className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:p-10 sm:text-left">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent text-4xl">
                  💧
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    One Better Tap
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">
                    Filtered cold, room, and hot water — purified continuously,
                    plumbed to your line, and designed to be the one beautiful
                    fixture your kitchen actually needs.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ 2 · THE DATA */}
      <section className="border-y border-border bg-brand text-brand-contrast">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              What households face today
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The hydration market is broken — and the data shows it.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <Ring pct={s.pct} label={s.label} />
              </Reveal>
            ))}
          </div>

          {/* highlight band */}
          <Reveal delay={120}>
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center">
                <div className="text-4xl font-extrabold tracking-tight text-accent">
                  <StatCounter value={1400} suffix="+" />
                </div>
                <div className="mt-1 text-sm opacity-75">
                  plastic bottles a family avoids every year
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center">
                <div className="text-4xl font-extrabold tracking-tight text-accent">
                  $50–150
                </div>
                <div className="mt-1 text-sm opacity-75">
                  spent monthly on premium &amp; functional water
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center">
                <div className="text-4xl font-extrabold tracking-tight text-accent">
                  18–24
                </div>
                <div className="mt-1 text-sm opacity-75">
                  months for Better Tap to pay for itself
                </div>
              </div>
            </div>
          </Reveal>

          {/* cost-per-glass bar graph */}
          <Reveal delay={160}>
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <div className="text-sm font-bold">Cost per glass of water</div>
              <div className="mt-5 space-y-4">
                {[
                  ["Bottled water", 100, "≈ 55¢"],
                  ["5-gallon jug delivery", 38, "≈ 21¢"],
                  ["Better Tap", 7, "≈ 4¢"],
                ].map(([label, w, val], i) => (
                  <div key={label as string} className="flex items-center gap-4">
                    <span className="w-36 shrink-0 text-sm opacity-80">
                      {label}
                    </span>
                    <div className="h-6 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="flex h-full items-center justify-end rounded-full pr-3 text-xs font-bold"
                        style={{
                          width: `${w as number}%`,
                          background: i === 2 ? "var(--color-accent)" : "rgba(255,255,255,0.32)",
                          color: i === 2 ? "#fff" : "var(--color-brand-contrast)",
                        }}
                      >
                        {val}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ 3 · EVERY PROBLEM, ONE ANSWER */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Every problem, one answer</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The synthesis of seven categories.
            </h2>
            <p className="mt-4 text-muted">
              Each thing households put up with today — and how a single Better
              Tap resolves it.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {pairs.map((p, i) => (
              <Reveal as="article" delay={(i % 3) * 70} key={p.situation}>
                <div className="card-lift grid gap-4 rounded-2xl border border-border bg-bg p-5 hover:border-accent hover:shadow-lg sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 sm:p-6">
                  {/* the situation */}
                  <div className="flex items-start gap-3">
                    <span className="text-2xl opacity-70" aria-hidden>
                      {p.icon}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">
                      {p.situation}
                    </p>
                  </div>
                  {/* arrow */}
                  <span
                    className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent sm:flex"
                    aria-hidden
                  >
                    →
                  </span>
                  {/* the response */}
                  <div className="flex items-start gap-3 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                      ✓
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-fg">
                      {p.response}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-base leading-relaxed text-muted">
              Better Tap isn&apos;t entering a category — it&apos;s the synthesis
              of all of them. Consumer behavior, regulation, and a new
              generation are all moving toward exactly this.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
