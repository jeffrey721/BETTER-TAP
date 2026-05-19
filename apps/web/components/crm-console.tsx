"use client";

import { useEffect, useState } from "react";
import { crmSummary, crmCustomers, type CrmCustomer } from "@/lib/crm-data";

const KEY = "bt-admin";
const field =
  "h-12 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-[var(--ring)]";

/* donut wheel */
function Wheel({ pct, tone = "accent" }: { pct: number; tone?: string }) {
  const color = tone === "danger" ? "#c0392b" : "var(--color-accent)";
  return (
    <div className="relative h-24 w-24 shrink-0">
      <div
        className="h-full w-full rounded-full"
        style={{ background: `conic-gradient(${color} ${pct}%, var(--color-surface-2) 0)` }}
      />
      <div className="absolute inset-[16%] flex flex-col items-center justify-center rounded-full bg-surface">
        <span className="text-lg font-extrabold leading-none">{pct}%</span>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border py-2.5 last:border-0">
      <dt className="shrink-0 text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="text-right text-sm font-medium">{value}</dd>
    </div>
  );
}

export function CrmConsole() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);
  const [selId, setSelId] = useState(crmCustomers[0].id);

  useEffect(() => {
    try {
      setAuthed(localStorage.getItem(KEY) === "1");
    } catch {}
    setReady(true);
  }, []);

  if (!ready) return <div className="min-h-screen" />;

  /* ----------------------------------------------------- admin login */
  if (!authed) {
    return (
      <div className="mx-auto max-w-md px-5 py-20 sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Staff only
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
          Admin log in
        </h1>
        <p className="mt-2 text-sm text-muted">
          Sign in to the Better Tap customer-service CRM.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            try {
              localStorage.setItem(KEY, "1");
            } catch {}
            setAuthed(true);
          }}
          className="mt-8 rounded-2xl border border-border bg-surface p-7"
        >
          <label htmlFor="adminuser" className="text-sm font-medium">
            Work email
          </label>
          <input id="adminuser" type="email" required placeholder="you@thebettertap.com" className={`mt-1.5 ${field}`} />
          <label htmlFor="adminpw" className="mt-4 block text-sm font-medium">
            Password
          </label>
          <input id="adminpw" type="password" required placeholder="••••••••" className={`mt-1.5 ${field}`} />
          <button
            type="submit"
            className="btn mt-6 h-12 w-full bg-brand text-base text-brand-contrast shadow-md hover:shadow-lg"
          >
            Enter CRM
          </button>
          <p className="mt-4 text-xs text-muted">
            Demonstration CRM — any email and password signs you in. In
            production this connects to your CRM provider with SSO.
          </p>
        </form>
      </div>
    );
  }

  /* ----------------------------------------------------------- CRM */
  const c = crmCustomers.find((x) => x.id === selId) ?? crmCustomers[0];
  const s = crmSummary;
  const rate = (a: number, b: number) => Math.round((a / b) * 100);

  const channels = [
    { key: "Email", d: s.email },
    { key: "Social media", d: s.social },
    { key: "WhatsApp", d: s.whatsapp },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Customer Service CRM
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Operations &amp; support console
          </h1>
        </div>
        <button
          onClick={() => {
            try {
              localStorage.removeItem(KEY);
            } catch {}
            setAuthed(false);
          }}
          className="btn h-10 border border-border bg-surface px-5 text-sm text-fg hover:shadow-md"
        >
          Log out
        </button>
      </div>

      {/* ------------------------------------------------ SUMMARY */}
      <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted">
        Inbox response — totals &amp; summary
      </h2>
      <div className="mt-3 grid gap-4 lg:grid-cols-3">
        {channels.map(({ key, d }) => {
          const r = rate(d.handled, d.total);
          return (
            <div key={key} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-5">
                <Wheel pct={r} tone={r < 80 ? "danger" : "accent"} />
                <div>
                  <div className="text-sm font-bold">{key}</div>
                  <div className="mt-1 text-xs text-muted">
                    {d.total} received
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-semibold text-accent-strong">{d.handled} replied</span>
                    <span className="text-muted"> · </span>
                    <span className="font-semibold text-[#c0392b]">{d.pending} waiting</span>
                  </div>
                  <div className="mt-1 text-xs text-muted">
                    Avg. response: {d.speed}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* installs + speed strip */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center gap-4">
            <Wheel pct={rate(s.installs.completed, s.installs.total)} />
            <div>
              <div className="text-sm font-bold">Installations</div>
              <div className="mt-1 text-xs text-muted">
                {s.installs.completed} of {s.installs.total} completed
              </div>
              <div className="mt-1 text-sm font-semibold text-[#c0392b]">
                {s.installs.open} still open
              </div>
            </div>
          </div>
        </div>
        {[
          ["Email response", s.email.speed],
          ["Social response", s.social.speed],
          ["WhatsApp response", s.whatsapp.speed],
        ].map(([label, val]) => (
          <div key={label} className="rounded-2xl border border-border bg-surface p-6">
            <div className="text-xs uppercase tracking-wide text-muted">{label}</div>
            <div className="mt-1 text-2xl font-extrabold tracking-tight text-accent">
              {val}
            </div>
            <div className="text-xs text-muted">average speed</div>
          </div>
        ))}
      </div>

      {/* ------------------------------------------- CUSTOMER HANDLES */}
      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted">
        Customer handles — full journey &amp; communication
      </h2>
      <div className="mt-3 grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* list */}
        <aside className="rounded-2xl border border-border bg-surface">
          <ul className="max-h-[560px] overflow-y-auto p-2">
            {crmCustomers.map((cust) => {
              const active = cust.id === selId;
              return (
                <li key={cust.id}>
                  <button
                    onClick={() => setSelId(cust.id)}
                    className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                      active ? "bg-accent/15 ring-1 ring-accent/40" : "hover:bg-surface-2"
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-brand-contrast">
                      {cust.initials}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">{cust.name}</span>
                      <span className="block truncate text-xs text-muted">{cust.orderStatus}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* detail */}
        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-base font-bold text-brand-contrast">
                {c.initials}
              </span>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">{c.name}</h3>
                <p className="text-xs text-muted">{c.id}</p>
              </div>
            </div>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-strong">
              {c.orderStatus}
            </span>
          </div>

          <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            <CrmGroup title="Acquisition">
              <Field label="Reached us via" value={c.channel} />
              <Field label="Referrals made" value={`${c.referrals} friend${c.referrals === 1 ? "" : "s"}`} />
            </CrmGroup>

            <CrmGroup title="Contact">
              <Field label="Email" value={c.email} />
              <Field label="Phone" value={c.phone} />
              <Field label="Address" value={c.address} />
            </CrmGroup>

            <CrmGroup title="Communication — all channels">
              <Field label="Email" value={<MsgLink n={c.messages.email} />} />
              <Field label="SMS" value={<MsgLink n={c.messages.sms} />} />
              <Field label="WhatsApp" value={<MsgLink n={c.messages.whatsapp} />} />
              <Field label="Live chat" value={<MsgLink n={c.messages.chat} />} />
            </CrmGroup>

            <CrmGroup title="Survey & order">
              <Field
                label="Online survey"
                value={c.surveyOnline ? "Completed ✓" : "Not completed"}
              />
              <Field label="Survey notes" value={c.surveyNote} />
              <Field label="Order placed" value={c.orderPlaced ? "Yes ✓" : "Not yet"} />
              <Field label="Order" value={c.orderDetail} />
            </CrmGroup>

            <CrmGroup title="Installation">
              <Field label="Install booked" value={c.installDate} />
              <Field label="Driver tracking" value={c.driver} />
              <Field label="Machine SKU" value={c.sku} />
              <Field
                label="Install images"
                value={
                  c.images > 0 ? (
                    <a href="#" className="font-semibold text-accent">
                      View {c.images} photos →
                    </a>
                  ) : (
                    "—"
                  )
                }
              />
            </CrmGroup>

            <CrmGroup title="After-sales">
              <Field label="Repair / service requests" value={c.repairs} />
              <Field
                label="Post-install survey"
                value={c.surveyCompleted ? "Completed ✓" : "Pending"}
              />
            </CrmGroup>
          </div>
        </section>
      </div>

      <p className="mt-8 text-xs text-muted">
        Demonstration CRM — sample data. In production this console syncs to
        your CRM provider (Salesforce, HubSpot, or similar) with live email,
        SMS, WhatsApp, social, order, and installation data.
      </p>
    </div>
  );
}

function CrmGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-1 text-sm font-bold text-accent-strong">{title}</h4>
      <dl>{children}</dl>
    </div>
  );
}

function MsgLink({ n }: { n: number }) {
  if (n === 0) return <span className="text-muted">No messages</span>;
  return (
    <a href="#" className="font-semibold text-accent">
      {n} message{n === 1 ? "" : "s"} →
    </a>
  );
}
