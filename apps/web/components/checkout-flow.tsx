"use client";

import { useState } from "react";
import Link from "next/link";
import { purchaseOptions, optionById, paymentMethods, usd } from "@/lib/site";

const field =
  "h-12 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-[var(--ring)]";
const labelCls = "text-sm font-medium";

function StepHeading({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-lg font-bold">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-brand-contrast">
        {n}
      </span>
      {children}
    </h2>
  );
}

export function CheckoutFlow({ initialOption }: { initialOption: string }) {
  const [optionId, setOptionId] = useState(optionById(initialOption).id);
  const option = optionById(optionId);
  const methods = paymentMethods.filter((m) => option.methodIds.includes(m.id));
  const [pay, setPay] = useState(option.methodIds[0]);
  const [done, setDone] = useState(false);

  function changeOption(id: string) {
    const next = optionById(id);
    setOptionId(next.id);
    if (!next.methodIds.includes(pay)) setPay(next.methodIds[0]);
  }

  /* ------------------------------------------------- confirmation */
  if (done) {
    const order = "BT-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    return (
      <div className="mx-auto max-w-xl px-5 py-20 text-center sm:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl font-bold text-white">
          ✓
        </div>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
          Order confirmed
        </h1>
        <p className="mt-3 text-muted">
          Order <span className="font-semibold text-fg">{order}</span> — your
          Better Tap is reserved on the {option.name} option.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-left">
          <h2 className="text-sm font-semibold">What happens next</h2>
          <ol className="mt-3 space-y-2 text-sm text-muted">
            <li>1. A specialist calls within 4 business hours to book your installation.</li>
            <li>2. We install Better Tap and connect it to your water line — fully included.</li>
            <li>3. Your filters arrive automatically. You just drink.</li>
          </ol>
        </div>
        <Link
          href="/account"
          className="btn mt-8 inline-flex h-12 bg-brand px-7 text-base text-brand-contrast shadow-md hover:shadow-lg"
        >
          Track my order
        </Link>
        <p className="mt-6 text-xs text-muted">
          Demonstration checkout — no payment was processed and no details were
          stored.
        </p>
      </div>
    );
  }

  /* ------------------------------------------------------ checkout */
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Checkout
        </h1>
        <p className="mt-2 text-sm text-muted">
          Secure checkout — free installation, 30-day money-back guarantee.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
        className="grid gap-8 lg:grid-cols-[1.5fr_1fr]"
      >
        <div className="space-y-8">
          {/* 1 — option */}
          <section className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
            <StepHeading n={1}>Your Better Tap</StepHeading>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {purchaseOptions.map((o) => {
                const active = o.id === optionId;
                return (
                  <button
                    type="button"
                    key={o.id}
                    onClick={() => changeOption(o.id)}
                    className={`card-lift rounded-xl border p-4 text-left transition ${
                      active
                        ? "border-accent bg-accent/10 ring-1 ring-accent/40"
                        : "border-border bg-bg hover:border-accent"
                    }`}
                  >
                    <span className="block text-sm font-bold">{o.name}</span>
                    <span className="block text-lg font-extrabold tracking-tight">
                      {o.headline}
                      <span className="text-xs font-medium text-muted"> {o.sub}</span>
                    </span>
                    <span className="mt-1 block text-xs text-muted">{o.tagline}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 2 — contact */}
          <section className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
            <StepHeading n={2}>Contact information</StepHeading>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first" className={labelCls}>First name</label>
                <input id="first" required className={`mt-1.5 ${field}`} />
              </div>
              <div>
                <label htmlFor="last" className={labelCls}>Last name</label>
                <input id="last" required className={`mt-1.5 ${field}`} />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>Email</label>
                <input id="email" type="email" required className={`mt-1.5 ${field}`} />
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>Phone</label>
                <input id="phone" type="tel" required className={`mt-1.5 ${field}`} />
              </div>
            </div>
          </section>

          {/* 3 — delivery / installation address */}
          <section className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
            <StepHeading n={3}>Delivery &amp; installation address</StepHeading>
            <p className="mt-2 text-sm text-muted">
              Where we&apos;ll deliver and install your Better Tap.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="addr" className={labelCls}>Street address</label>
                <input id="addr" required className={`mt-1.5 ${field}`} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="addr2" className={labelCls}>
                  Apartment / unit <span className="text-muted">(optional)</span>
                </label>
                <input id="addr2" className={`mt-1.5 ${field}`} />
              </div>
              <div>
                <label htmlFor="city" className={labelCls}>City</label>
                <input id="city" required className={`mt-1.5 ${field}`} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state" className={labelCls}>State</label>
                  <input id="state" required defaultValue="" placeholder="NY / NJ" className={`mt-1.5 ${field}`} />
                </div>
                <div>
                  <label htmlFor="zip" className={labelCls}>ZIP</label>
                  <input id="zip" inputMode="numeric" pattern="[0-9]{5}" required className={`mt-1.5 ${field}`} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="notes" className={labelCls}>
                  Delivery / access notes <span className="text-muted">(optional)</span>
                </label>
                <input id="notes" placeholder="Gate code, building access, best time…" className={`mt-1.5 ${field}`} />
              </div>
            </div>
          </section>

          {/* 4 — payment */}
          <section className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
            <StepHeading n={4}>Payment method</StepHeading>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {methods.map((m) => {
                const active = pay === m.id;
                return (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setPay(m.id)}
                    className={`card-lift flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                      active
                        ? "border-accent bg-accent/10 ring-1 ring-accent/40"
                        : "border-border bg-bg hover:border-accent"
                    }`}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold"
                      style={{ background: m.color, color: m.light ? "#141937" : "#fff" }}
                    >
                      {m.glyph || m.label[0]}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">{m.label}</span>
                      <span className="block truncate text-xs text-muted">{m.desc}</span>
                    </span>
                    <span
                      className={`ml-auto h-4 w-4 shrink-0 rounded-full border-2 ${
                        active ? "border-accent bg-accent" : "border-border"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {pay === "card" ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="cardname" className={labelCls}>Name on card</label>
                  <input id="cardname" required className={`mt-1.5 ${field}`} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="card" className={labelCls}>Card number</label>
                  <input id="card" inputMode="numeric" placeholder="1234 1234 1234 1234" required className={`mt-1.5 ${field}`} />
                </div>
                <div>
                  <label htmlFor="exp" className={labelCls}>Expiry</label>
                  <input id="exp" placeholder="MM / YY" required className={`mt-1.5 ${field}`} />
                </div>
                <div>
                  <label htmlFor="cvc" className={labelCls}>CVC</label>
                  <input id="cvc" inputMode="numeric" placeholder="123" required className={`mt-1.5 ${field}`} />
                </div>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-border bg-bg p-4 text-sm text-muted">
                You&apos;ll be securely redirected to{" "}
                <span className="font-semibold text-fg">
                  {methods.find((m) => m.id === pay)?.label}
                </span>{" "}
                to authorize your payment after you place the order.
              </div>
            )}
          </section>
        </div>

        {/* ----------------------------------------------- summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
            <h2 className="text-lg font-bold">Order summary</h2>
            <p className="mt-1 text-sm text-muted">
              {option.name} — {option.tagline}
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <img src={option.img} alt={option.name} className="h-32 w-full object-cover" />
            </div>
            <dl className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm">
              {option.lineItems.map((li) => (
                <div key={li.label} className="flex justify-between gap-4">
                  <dt className="text-muted">{li.label}</dt>
                  <dd
                    className={`text-right font-medium ${
                      li.value === "FREE" || li.value === "Included" ? "text-accent" : ""
                    }`}
                  >
                    {li.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex items-baseline justify-between border-t border-border pt-5">
              <span className="text-sm font-semibold">{option.dueTodayLabel}</span>
              <span className="text-2xl font-extrabold tracking-tight">
                {usd(option.dueToday)}
              </span>
            </div>
            {option.recurring && (
              <p className="mt-1 text-xs text-muted">{option.recurring}</p>
            )}
            <button
              type="submit"
              className="btn mt-6 h-13 w-full bg-accent text-base text-white shadow-md hover:shadow-lg"
            >
              Place order
            </button>
            <ul className="mt-5 space-y-1.5 text-xs text-muted">
              <li>🔒 Encrypted, PCI-compliant checkout</li>
              <li>↩️ 30-day money-back guarantee</li>
              <li>🔧 Free professional installation</li>
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-xs text-muted">
              Demonstration checkout — no payment is processed and no card
              details are stored.
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}
