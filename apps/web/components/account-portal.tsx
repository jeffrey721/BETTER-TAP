"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "bt-account";
const field =
  "h-12 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-[var(--ring)]";

function nameFromEmail(email: string) {
  const local = (email.split("@")[0] || "there").replace(/[._-]+/g, " ");
  return local.replace(/\b\w/g, (c) => c.toUpperCase());
}

const TABS = [
  { id: "overview", label: "Dashboard", icon: "▦" },
  { id: "machine", label: "My Machine", icon: "🚰" },
  { id: "install", label: "Installation", icon: "🔧" },
  { id: "supplies", label: "Filters & Lamp", icon: "💧" },
  { id: "support", label: "Support & Chat", icon: "💬" },
  { id: "guides", label: "Guides & Videos", icon: "📘" },
  { id: "reviews", label: "Leave a Review", icon: "★" },
  { id: "referrals", label: "Refer & Earn", icon: "🎁" },
];

const installStages = [
  "Order received",
  "Site survey reviewed",
  "Technician assigned",
  "Installed",
  "Activated",
];
const currentStage = 2;

export function AccountPortal() {
  const [email, setEmail] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    try {
      setEmail(localStorage.getItem(KEY));
    } catch {}
    setReady(true);
  }, []);

  function logIn(e: React.FormEvent) {
    e.preventDefault();
    try {
      localStorage.setItem(KEY, input);
    } catch {}
    setEmail(input);
  }
  function logOut() {
    try {
      localStorage.removeItem(KEY);
    } catch {}
    setEmail(null);
    setInput("");
    setTab("overview");
  }

  if (!ready) return <div className="min-h-[50vh]" />;

  /* --------------------------------------------------------- login */
  if (!email) {
    return (
      <div className="mx-auto max-w-md px-5 py-16 sm:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Customer login
        </h1>
        <p className="mt-2 text-sm text-muted">
          Sign in to your Better Tap account — track your install, manage
          filters, get support, and more.
        </p>
        <form
          onSubmit={logIn}
          className="mt-8 rounded-2xl border border-border bg-surface p-7"
        >
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="you@email.com"
            className={`mt-1.5 ${field}`}
          />
          <label htmlFor="pw" className="mt-4 block text-sm font-medium">
            Password
          </label>
          <input id="pw" type="password" required placeholder="••••••••" className={`mt-1.5 ${field}`} />
          <button
            type="submit"
            className="btn mt-6 h-12 w-full bg-brand text-base text-brand-contrast shadow-md hover:shadow-lg"
          >
            Sign in
          </button>
          <p className="mt-4 text-xs text-muted">
            Demonstration login — any email and password will sign you in.
          </p>
        </form>
        <p className="mt-6 text-center text-sm text-muted">
          New to Better Tap?{" "}
          <Link href="/shop" className="font-semibold text-accent">
            See pricing →
          </Link>
        </p>
      </div>
    );
  }

  /* ----------------------------------------------------- dashboard */
  const name = nameFromEmail(email);
  const installDay = new Date(Date.now() + 5 * 864e5).toLocaleDateString(
    "en-US",
    { weekday: "long", month: "long", day: "numeric" },
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted">Welcome back</p>
          <h1 className="text-3xl font-extrabold tracking-tight">{name}</h1>
        </div>
        <button
          onClick={logOut}
          className="btn h-10 border border-border bg-surface px-5 text-sm text-fg hover:shadow-md"
        >
          Log out
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[230px_1fr]">
        {/* sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav className="flex gap-2 overflow-x-auto rounded-2xl border border-border bg-surface p-2 lg:flex-col lg:overflow-visible">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                  tab === t.id
                    ? "bg-accent/15 text-accent-strong"
                    : "text-muted hover:bg-surface-2 hover:text-fg"
                }`}
              >
                <span aria-hidden>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* content */}
        <div className="min-w-0">
          {tab === "overview" && <Overview installDay={installDay} setTab={setTab} />}
          {tab === "machine" && <Machine />}
          {tab === "install" && <Install installDay={installDay} />}
          {tab === "supplies" && <Supplies />}
          {tab === "support" && <Support name={name} />}
          {tab === "guides" && <Guides />}
          {tab === "reviews" && <Reviews />}
          {tab === "referrals" && <Referrals />}
        </div>
      </div>

      <p className="mt-8 text-xs text-muted">
        Demonstration account — order, machine, and installation data shown
        here are sample data.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------- panels */
const card = "rounded-2xl border border-border bg-surface p-6 sm:p-7";

function PanelHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
      {sub && <p className="mt-1 text-sm text-muted">{sub}</p>}
    </div>
  );
}

function Overview({
  installDay,
  setTab,
}: {
  installDay: string;
  setTab: (t: string) => void;
}) {
  return (
    <div className="space-y-6">
      <section className={card}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold">Your installation</h2>
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-strong">
            Technician assigned — {installDay}
          </span>
        </div>
        <ol className="mt-6 grid gap-3 sm:grid-cols-5 sm:gap-2">
          {installStages.map((s, i) => {
            const done = i < currentStage;
            const active = i === currentStage;
            return (
              <li key={s} className="flex items-center gap-3 sm:flex-col sm:text-center">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    done
                      ? "bg-accent text-white"
                      : active
                        ? "bg-brand text-brand-contrast ring-4 ring-accent/30"
                        : "border border-border bg-bg text-muted"
                  }`}
                >
                  {done ? "✓" : i + 1}
                </span>
                <span className={`text-xs ${active ? "font-semibold text-fg" : "text-muted"}`}>
                  {s}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <section className={card}>
        <h2 className="text-lg font-bold">Your order</h2>
        <dl className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2">
          {[
            ["Order", "BT-4827"],
            ["Product", "Better Tap — White"],
            ["Plan", "Lease · $35 / month"],
            ["Order date", "5 days ago"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 sm:block">
              <dt className="text-muted">{k}</dt>
              <dd className="font-semibold sm:mt-0.5">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["supplies", "Order filters"],
          ["support", "Report a problem"],
          ["referrals", "Refer a friend"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="card-lift rounded-2xl border border-border bg-surface p-5 text-sm font-semibold hover:border-accent hover:shadow-md"
          >
            {label} →
          </button>
        ))}
      </div>
    </div>
  );
}

function Machine() {
  return (
    <div className="space-y-6">
      <section className={card}>
        <PanelHead title="My Machine" sub="Your registered Better Tap unit." />
        <dl className="grid gap-2.5 text-sm sm:grid-cols-2">
          {[
            ["Model", "Better Tap — White"],
            ["SKU", "2440002"],
            ["Serial number", "BT-WHT-2440002-018734"],
            ["Color", "Architectural White"],
            ["Warranty", "2 years — active"],
            ["Registered", "5 days ago"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4">
              <dt className="text-muted">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6">
          <div className="text-xs font-medium text-muted">Unit barcode</div>
          <div
            className="mt-2 h-14 w-full max-w-xs rounded-lg"
            style={{
              background:
                "repeating-linear-gradient(90deg,#141937 0 2px,transparent 2px 4px,#141937 4px 7px,transparent 7px 9px,#141937 9px 11px,transparent 11px 15px)",
            }}
            aria-hidden
          />
          <div className="mt-1.5 font-mono text-sm tracking-widest">
            8 904567 112340
          </div>
        </div>
      </section>
    </div>
  );
}

function Install({ installDay }: { installDay: string }) {
  const photos = [
    ["/img/control-panel.jpg", "Before — install location"],
    ["/img/dispense.jpg", "During — first dispense test"],
    ["/img/lifestyle-kitchen.jpg", "After — completed install"],
  ];
  return (
    <div className="space-y-6">
      <section className={card}>
        <PanelHead title="Installation" />
        <dl className="grid gap-2.5 text-sm sm:grid-cols-2">
          {[
            ["Install date", installDay],
            ["Arrival window", "Texted the morning of"],
            ["Technician", "Marco D. — certified installer"],
            ["Status", "Technician assigned"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4">
              <dt className="text-muted">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className={card}>
        <h2 className="text-lg font-bold">Installation photos</h2>
        <p className="mt-1 text-sm text-muted">
          Your technician uploads before / during / after photos on install day.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {photos.map(([src, cap]) => (
            <figure key={cap} className="overflow-hidden rounded-xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={cap} className="h-32 w-full object-cover" />
              <figcaption className="bg-bg px-3 py-2 text-xs text-muted">
                {cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

function Supplies() {
  const [ordered, setOrdered] = useState<Record<string, boolean>>({});
  const items = [
    { id: "filter", name: "Purification Cartridge", price: "$39", note: "Next change due in 4 months" },
    { id: "uv", name: "UV-C Lamp", price: "$29", note: "Next change due in 9 months" },
  ];
  return (
    <section className={card}>
      <PanelHead
        title="Filters & Lamp"
        sub="Order genuine replacement parts — delivered to your door."
      />
      <div className="space-y-3">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-bg p-4"
          >
            <div>
              <div className="text-sm font-bold">{it.name}</div>
              <div className="text-xs text-muted">{it.note}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-extrabold">{it.price}</span>
              <button
                onClick={() => setOrdered((o) => ({ ...o, [it.id]: true }))}
                disabled={ordered[it.id]}
                className={`btn h-10 px-4 text-sm ${
                  ordered[it.id]
                    ? "bg-accent/20 text-accent-strong"
                    : "bg-brand text-brand-contrast hover:shadow-md"
                }`}
              >
                {ordered[it.id] ? "✓ Ordered" : "Order now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Support({ name }: { name: string }) {
  const [sent, setSent] = useState(false);
  const chat = [
    { who: "Better Tap", you: false, msg: `Hi ${name}! Your installation is confirmed. Anything you'd like to ask before the technician arrives?` },
    { who: "You", you: true, msg: "Will the technician bring the filter and UV lamp?" },
    { who: "Better Tap", you: false, msg: "Yes — your first cartridge and UV lamp are fitted on install day. Nothing for you to prepare." },
  ];
  return (
    <div className="space-y-6">
      <section className={card}>
        <PanelHead title="Support chat" sub="Your conversation history with our team." />
        <div className="space-y-3">
          {chat.map((c, i) => (
            <div key={i} className={`flex ${c.you ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  c.you
                    ? "bg-brand text-brand-contrast"
                    : "border border-border bg-bg text-fg"
                }`}
              >
                <div className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide opacity-60">
                  {c.who}
                </div>
                {c.msg}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={card}>
        <h2 className="text-lg font-bold">Report a problem</h2>
        <p className="mt-1 text-sm text-muted">
          Something not working right? Tell us and we&apos;ll dispatch a
          technician — covered by your warranty.
        </p>
        {sent ? (
          <div className="mt-5 rounded-xl border border-accent bg-accent/10 p-5 text-sm">
            ✓ Request received. A specialist will contact you within 4 business
            hours to schedule a visit.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-5 space-y-3"
          >
            <select required defaultValue="" className={field}>
              <option value="" disabled>What&apos;s the issue?</option>
              <option>No cold water</option>
              <option>No hot water</option>
              <option>Leak</option>
              <option>Display not working</option>
              <option>Unusual noise</option>
              <option>Other</option>
            </select>
            <textarea
              rows={3}
              placeholder="Describe what's happening…"
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
            />
            <button
              type="submit"
              className="btn h-11 w-full bg-brand text-sm text-brand-contrast shadow-md hover:shadow-lg"
            >
              Submit repair request
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

function Guides() {
  return (
    <div className="space-y-6">
      <section className={card}>
        <PanelHead
          title="Instruction manual"
          sub="Everything about setting up and living with your Better Tap."
        />
        <a
          href="#"
          className="btn inline-flex h-11 bg-brand px-5 text-sm text-brand-contrast shadow-md hover:shadow-lg"
        >
          📘 Download the manual (PDF)
        </a>
      </section>
      <section className={card}>
        <h2 className="text-lg font-bold">How-to videos</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            ["/video/filtration.mp4", "Replacing your purification cartridge"],
            ["/video/uv.mp4", "Replacing the UV-C lamp"],
          ].map(([src, label]) => (
            <figure key={label} className="overflow-hidden rounded-xl border border-border bg-black">
              <video className="aspect-video w-full" src={src} controls playsInline preload="metadata" />
              <figcaption className="bg-surface px-3 py-2 text-xs font-medium text-muted">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

function Reviews() {
  const [rating, setRating] = useState(0);
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <section className={card}>
        <div className="rounded-xl border border-accent bg-accent/10 p-6 text-center text-sm">
          ✓ Thanks for your review — it helps other households discover Better
          Tap.
        </div>
      </section>
    );
  }
  return (
    <section className={card}>
      <PanelHead title="Leave a review" sub="Tell us how Better Tap is working out." />
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setRating(n)}
            aria-label={`${n} stars`}
            className={`text-3xl transition ${
              n <= rating ? "text-[#f59e0b]" : "text-border"
            }`}
          >
            ★
          </button>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-4 space-y-3"
      >
        <textarea
          rows={4}
          required
          placeholder="What do you love? What could be better?"
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
        />
        <button
          type="submit"
          disabled={rating === 0}
          className="btn h-11 w-full bg-brand text-sm text-brand-contrast shadow-md hover:shadow-lg disabled:opacity-40"
        >
          Submit review
        </button>
      </form>
    </section>
  );
}

function Referrals() {
  const [copied, setCopied] = useState(false);
  const code = "BETTERTAP-J4X9";
  return (
    <section className={card}>
      <PanelHead
        title="Refer & earn"
        sub="Give friends $50 off — get $50 when they install."
      />
      <div className="rounded-2xl border border-accent bg-accent/10 p-6 text-center">
        <div className="text-xs font-medium uppercase tracking-wide text-accent-strong">
          Your referral code
        </div>
        <div className="mt-2 font-mono text-2xl font-extrabold tracking-widest">
          {code}
        </div>
        <button
          onClick={() => {
            try {
              navigator.clipboard.writeText(
                `https://thebettertap.com/?ref=${code}`,
              );
            } catch {}
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="btn mt-4 h-11 bg-brand px-6 text-sm text-brand-contrast shadow-md hover:shadow-lg"
        >
          {copied ? "✓ Link copied" : "Copy referral link"}
        </button>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        {[
          ["3", "Friends invited"],
          ["1", "Installed"],
          ["$50", "Credit earned"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-xl border border-border bg-bg p-4">
            <div className="text-xl font-extrabold text-accent">{n}</div>
            <div className="text-xs text-muted">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
