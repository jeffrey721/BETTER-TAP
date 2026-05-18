/** A pure-CSS render of the Better Tap water bar — placeholder for the
 *  Spline 3D scene called for in the spec, with no external assets. */
export function Device({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ animation: "float 6s ease-in-out infinite" }}
      aria-hidden
    >
      {/* ambient glow */}
      <div
        className="absolute -inset-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent), transparent)",
          opacity: 0.25,
        }}
      />
      {/* body */}
      <div className="relative mx-auto h-[420px] w-[260px] rounded-[44px] border border-border bg-gradient-to-b from-surface to-surface-2 shadow-2xl">
        {/* screen */}
        <div className="absolute left-1/2 top-7 h-16 w-36 -translate-x-1/2 rounded-2xl bg-brand/90">
          <div className="flex h-full items-center justify-center gap-1.5">
            {["Cold", "Hot", "Spark"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent/80 px-2 py-1 text-[8px] font-semibold uppercase tracking-wide text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* dispense recess */}
        <div className="absolute bottom-12 left-1/2 h-32 w-40 -translate-x-1/2 rounded-2xl border border-border bg-bg/70">
          {/* nozzle */}
          <div className="absolute left-1/2 top-0 h-6 w-7 -translate-x-1/2 rounded-b-lg bg-brand" />
          {/* drip */}
          <div
            className="absolute left-1/2 top-7 h-3 w-1.5 -translate-x-1/2 rounded-full bg-accent"
            style={{ animation: "drip 2.4s ease-in infinite" }}
          />
          {/* glass */}
          <div className="absolute bottom-3 left-1/2 h-14 w-16 -translate-x-1/2 rounded-b-xl rounded-t-sm border border-border bg-accent/15 backdrop-blur-sm" />
        </div>
        {/* UV indicator */}
        <div
          className="absolute right-6 top-28 h-2.5 w-2.5 rounded-full bg-accent"
          style={{ animation: "glow 2.6s ease-in-out infinite" }}
        />
        <span className="absolute right-10 top-[105px] text-[8px] font-semibold uppercase tracking-widest text-muted">
          UV-C
        </span>
      </div>
    </div>
  );
}
