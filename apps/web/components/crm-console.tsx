"use client";

import { useEffect, useMemo, useState } from "react";
import { crmSummary, crmCustomers, type CrmCustomer } from "@/lib/crm-data";

/* ClickUp-inspired CRM workspace — fixed light theme, violet accent. */

const KEY = "bt-admin";
const PURPLE = "#7b68ee";

const STAGES = [
  { id: "New Lead", color: "#8a94a6" },
  { id: "Reserved", color: "#3b82f6" },
  { id: "Scheduled", color: "#f59e0b" },
  { id: "Installed", color: "#22c55e" },
  { id: "Active", color: "#7b68ee" },
];
const stageOf = (c: CrmCustomer) =>
  c.orderStatus === "No order" ? "New Lead" : c.orderStatus;
const stageColor = (id: string) =>
  STAGES.find((s) => s.id === id)?.color ?? "#8a94a6";

const OWNERS = [
  { name: "Jordan Lee", color: "#fd71af" },
  { name: "Priya Shah", color: "#49ccf9" },
  { name: "Marco Diaz", color: "#7b68ee" },
];
const ownerOf = (i: number) => OWNERS[i % OWNERS.length];

const PRIORITY: Record<string, { label: string; color: string }> = {
  "New Lead": { label: "Low", color: "#8a94a6" },
  Reserved: { label: "Urgent", color: "#e8506e" },
  Scheduled: { label: "High", color: "#f59e0b" },
  Installed: { label: "Normal", color: "#3b82f6" },
  Active: { label: "Normal", color: "#22c55e" },
};

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "▦" },
  { id: "customers", label: "Customers", icon: "▤" },
  { id: "inbox", label: "Inbox", icon: "✉" },
  { id: "installs", label: "Installations", icon: "★" },
  { id: "reports", label: "Reports", icon: "▲" },
];

/* ---------------------------------------------------------- atoms */
function Wheel({ pct, color = PURPLE }: { pct: number; color?: string }) {
  return (
    <div className="relative h-[72px] w-[72px] shrink-0">
      <div
        className="h-full w-full rounded-full"
        style={{ background: `conic-gradient(${color} ${pct}%, #e9eaf0 0)` }}
      />
      <div className="absolute inset-[18%] flex items-center justify-center rounded-full bg-white">
        <span className="text-sm font-extrabold text-[#1f2329]">{pct}%</span>
      </div>
    </div>
  );
}
function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <span
      className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
      style={{ background: color }}
      title={name}
    >
      {initials}
    </span>
  );
}
function Pill({ stage }: { stage: string }) {
  const color = stageColor(stage);
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold"
      style={{ background: `${color}1f`, color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {stage}
    </span>
  );
}

export function CrmConsole() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);
  const [section, setSection] = useState("dashboard");
  const [view, setView] = useState<"list" | "board">("list");
  const [q, setQ] = useState("");
  const [selId, setSelId] = useState<string | null>(null);

  useEffect(() => {
    try {
      setAuthed(localStorage.getItem(KEY) === "1");
    } catch {}
    setReady(true);
  }, []);

  const filtered = useMemo(
    () =>
      crmCustomers.filter((c) =>
        (c.name + c.email + c.orderStatus + c.channel)
          .toLowerCase()
          .includes(q.toLowerCase()),
      ),
    [q],
  );
  const selected = crmCustomers.find((c) => c.id === selId) ?? null;

  if (!ready) return <div className="min-h-screen bg-[#f7f8fa]" />;

  /* ----------------------------------------------------- login */
  if (!authed) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-[#f7f8fa] px-5">
        <div className="w-full max-w-md rounded-2xl border border-[#e9eaf0] bg-white p-8 shadow-xl">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-extrabold text-white"
            style={{ background: PURPLE }}
          >
            BT
          </div>
          <h1 className="mt-5 text-2xl font-extrabold text-[#1f2329]">
            Better Tap CRM
          </h1>
          <p className="mt-1 text-sm text-[#6b7280]">
            Sign in to your customer-service workspace.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              try {
                localStorage.setItem(KEY, "1");
              } catch {}
              setAuthed(true);
            }}
            className="mt-6 space-y-3"
          >
            <input
              type="email"
              required
              placeholder="Work email"
              className="h-11 w-full rounded-lg border border-[#e9eaf0] bg-[#f7f8fa] px-3.5 text-sm text-[#1f2329] outline-none focus:border-[#7b68ee]"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="h-11 w-full rounded-lg border border-[#e9eaf0] bg-[#f7f8fa] px-3.5 text-sm text-[#1f2329] outline-none focus:border-[#7b68ee]"
            />
            <button
              type="submit"
              className="h-11 w-full rounded-lg text-sm font-bold text-white transition hover:opacity-90"
              style={{ background: PURPLE }}
            >
              Log in
            </button>
          </form>
          <p className="mt-4 text-xs text-[#9aa0ab]">
            Demonstration CRM — any credentials sign you in.
          </p>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------- workspace */
  return (
    <div className="flex min-h-screen bg-[#f7f8fa] text-[#1f2329]">
      {/* ---------------------------------------------- sidebar */}
      <aside className="hidden w-[228px] shrink-0 flex-col border-r border-[#e9eaf0] bg-white md:flex">
        <div className="flex items-center gap-2.5 border-b border-[#e9eaf0] px-4 py-3.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-extrabold text-white"
            style={{ background: PURPLE }}
          >
            BT
          </span>
          <div className="leading-tight">
            <div className="text-sm font-bold">Better Tap</div>
            <div className="text-[11px] text-[#9aa0ab]">CRM Workspace</div>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5 p-2">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => setSection(n.id)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                section === n.id
                  ? "text-white"
                  : "text-[#5b6472] hover:bg-[#f1f2f6]"
              }`}
              style={section === n.id ? { background: PURPLE } : undefined}
            >
              <span className="w-4 text-center text-xs" aria-hidden>
                {n.icon}
              </span>
              {n.label}
            </button>
          ))}

          <div className="px-3 pb-1 pt-5 text-[10px] font-bold uppercase tracking-wider text-[#9aa0ab]">
            Pipeline spaces
          </div>
          {STAGES.map((s) => {
            const count = crmCustomers.filter((c) => stageOf(c) === s.id).length;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setSection("customers");
                  setView("board");
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm text-[#5b6472] hover:bg-[#f1f2f6]"
              >
                <span
                  className="h-2.5 w-2.5 rounded-[3px]"
                  style={{ background: s.color }}
                />
                <span className="flex-1 text-left">{s.id}</span>
                <span className="text-xs text-[#9aa0ab]">{count}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-[#e9eaf0] p-2">
          <button
            onClick={() => {
              try {
                localStorage.removeItem(KEY);
              } catch {}
              setAuthed(false);
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-[#5b6472] hover:bg-[#f1f2f6]"
          >
            <span className="w-4 text-center text-xs">⏻</span> Log out
          </button>
        </div>
      </aside>

      {/* ---------------------------------------------- main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* top bar */}
        <header className="flex flex-wrap items-center gap-3 border-b border-[#e9eaf0] bg-white px-5 py-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold capitalize">
              {NAV.find((n) => n.id === section)?.label}
            </span>
            {section === "customers" && (
              <>
                <span className="text-[#c4c8d0]">/</span>
                <span className="text-[#6b7280]">
                  {view === "list" ? "List view" : "Board view"}
                </span>
              </>
            )}
          </div>

          {section === "customers" && (
            <div className="flex items-center gap-1 rounded-lg bg-[#f1f2f6] p-0.5">
              {(["list", "board"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`rounded-md px-3 py-1 text-xs font-bold capitalize transition ${
                    view === v
                      ? "bg-white text-[#1f2329] shadow-sm"
                      : "text-[#6b7280]"
                  }`}
                >
                  {v === "list" ? "☰ List" : "▥ Board"}
                </button>
              ))}
            </div>
          )}

          <div className="ml-auto flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search customers…"
              className="h-9 w-44 rounded-lg border border-[#e9eaf0] bg-[#f7f8fa] px-3 text-sm outline-none focus:border-[#7b68ee] sm:w-56"
            />
            <button
              className="h-9 rounded-lg px-3.5 text-sm font-bold text-white"
              style={{ background: PURPLE }}
            >
              + New
            </button>
          </div>
        </header>

        {/* content */}
        <main className="flex-1 overflow-x-auto p-5">
          {section === "dashboard" && <Dashboard />}
          {section === "customers" && view === "list" && (
            <ListView rows={filtered} onOpen={setSelId} />
          )}
          {section === "customers" && view === "board" && (
            <BoardView rows={filtered} onOpen={setSelId} />
          )}
          {section === "inbox" && <Inbox />}
          {section === "installs" && <Installs onOpen={setSelId} />}
          {section === "reports" && <Reports />}
        </main>
      </div>

      {/* ---------------------------------------------- detail drawer */}
      {selected && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setSelId(null)}
            aria-hidden
          />
          <Detail customer={selected} onClose={() => setSelId(null)} />
        </>
      )}
    </div>
  );
}

/* ============================================================ DASHBOARD */
function Dashboard() {
  const s = crmSummary;
  const rate = (a: number, b: number) => Math.round((a / b) * 100);
  const cards = [
    { label: "Email", d: s.email },
    { label: "Social media", d: s.social },
    { label: "WhatsApp", d: s.whatsapp },
  ];
  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-3">
        {cards.map(({ label, d }) => {
          const r = rate(d.handled, d.total);
          return (
            <div
              key={label}
              className="rounded-xl border border-[#e9eaf0] bg-white p-5"
            >
              <div className="text-xs font-bold uppercase tracking-wide text-[#9aa0ab]">
                {label}
              </div>
              <div className="mt-3 flex items-center gap-4">
                <Wheel pct={r} color={r < 80 ? "#e8506e" : "#22c55e"} />
                <div className="text-sm">
                  <div className="font-extrabold text-[#1f2329]">
                    {d.total} received
                  </div>
                  <div className="mt-1 text-[#22c55e]">{d.handled} replied</div>
                  <div className="text-[#e8506e]">{d.pending} waiting</div>
                  <div className="mt-1 text-xs text-[#9aa0ab]">
                    Avg {d.speed}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Widget
          label="Installs completed"
          value={`${s.installs.completed}/${s.installs.total}`}
        />
        <Widget
          label="Open installations"
          value={String(s.installs.open)}
          tone="#e8506e"
        />
        <Widget label="Avg install lead time" value={s.installs.speed} />
        <Widget label="Total customers" value={String(crmCustomers.length)} />
      </div>
      <div className="rounded-xl border border-[#e9eaf0] bg-white p-5">
        <div className="text-sm font-bold">Customers by pipeline stage</div>
        <div className="mt-4 space-y-2.5">
          {STAGES.map((st) => {
            const n = crmCustomers.filter((c) => stageOf(c) === st.id).length;
            return (
              <div key={st.id} className="flex items-center gap-3 text-sm">
                <span className="w-24 shrink-0 text-[#5b6472]">{st.id}</span>
                <div className="h-3 flex-1 rounded-full bg-[#f1f2f6]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(n / crmCustomers.length) * 100}%`,
                      background: st.color,
                    }}
                  />
                </div>
                <span className="w-6 text-right font-bold">{n}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function Widget({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: string;
}) {
  return (
    <div className="rounded-xl border border-[#e9eaf0] bg-white p-5">
      <div
        className="text-2xl font-extrabold"
        style={{ color: tone ?? "#1f2329" }}
      >
        {value}
      </div>
      <div className="mt-1 text-xs text-[#9aa0ab]">{label}</div>
    </div>
  );
}

/* ================================================================ LIST */
function ListView({
  rows,
  onOpen,
}: {
  rows: CrmCustomer[];
  onOpen: (id: string) => void;
}) {
  return (
    <div className="min-w-[820px] space-y-5">
      {STAGES.map((stage) => {
        const group = rows.filter((c) => stageOf(c) === stage.id);
        if (group.length === 0) return null;
        return (
          <div
            key={stage.id}
            className="overflow-hidden rounded-xl border border-[#e9eaf0] bg-white"
          >
            <div className="flex items-center gap-2 border-b border-[#e9eaf0] px-4 py-2.5">
              <span
                className="h-2.5 w-2.5 rounded-[3px]"
                style={{ background: stage.color }}
              />
              <span className="text-sm font-bold">{stage.id}</span>
              <span className="rounded-full bg-[#f1f2f6] px-2 py-0.5 text-xs font-bold text-[#6b7280]">
                {group.length}
              </span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wide text-[#9aa0ab]">
                  <th className="px-4 py-2 font-bold">Customer</th>
                  <th className="px-4 py-2 font-bold">Channel</th>
                  <th className="px-4 py-2 font-bold">Priority</th>
                  <th className="px-4 py-2 font-bold">Owner</th>
                  <th className="px-4 py-2 font-bold">Install date</th>
                  <th className="px-4 py-2 font-bold">Order</th>
                </tr>
              </thead>
              <tbody>
                {group.map((c) => {
                  const idx = crmCustomers.indexOf(c);
                  const owner = ownerOf(idx);
                  const p = PRIORITY[stageOf(c)];
                  return (
                    <tr
                      key={c.id}
                      onClick={() => onOpen(c.id)}
                      className="cursor-pointer border-t border-[#f1f2f6] hover:bg-[#faf9ff]"
                    >
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white"
                            style={{ background: PURPLE }}
                          >
                            {c.initials}
                          </span>
                          <div>
                            <div className="font-semibold">{c.name}</div>
                            <div className="text-xs text-[#9aa0ab]">{c.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-[#6b7280]">
                        {c.channel.split(" — ")[0]}
                      </td>
                      <td className="px-4 py-2.5">
                        <span
                          className="font-bold"
                          style={{ color: p.color }}
                        >
                          ⚑ {p.label}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <Avatar name={owner.name} color={owner.color} />
                          <span className="text-xs text-[#6b7280]">
                            {owner.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-[#6b7280]">
                        {c.installDate}
                      </td>
                      <td className="px-4 py-2.5 text-[#6b7280]">
                        {c.orderPlaced ? c.orderDetail.split(" — ")[0] : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

/* =============================================================== BOARD */
function BoardView({
  rows,
  onOpen,
}: {
  rows: CrmCustomer[];
  onOpen: (id: string) => void;
}) {
  return (
    <div className="flex gap-4">
      {STAGES.map((stage) => {
        const group = rows.filter((c) => stageOf(c) === stage.id);
        return (
          <div key={stage.id} className="w-[260px] shrink-0">
            <div className="mb-2 flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-[3px]"
                style={{ background: stage.color }}
              />
              <span className="text-sm font-bold">{stage.id}</span>
              <span className="rounded-full bg-[#f1f2f6] px-2 py-0.5 text-xs font-bold text-[#6b7280]">
                {group.length}
              </span>
            </div>
            <div className="space-y-2.5">
              {group.map((c) => {
                const idx = crmCustomers.indexOf(c);
                const owner = ownerOf(idx);
                const p = PRIORITY[stageOf(c)];
                return (
                  <button
                    key={c.id}
                    onClick={() => onOpen(c.id)}
                    className="w-full rounded-xl border border-[#e9eaf0] bg-white p-3.5 text-left transition hover:border-[#7b68ee] hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-bold"
                        style={{ color: p.color }}
                      >
                        ⚑ {p.label}
                      </span>
                      <Avatar name={owner.name} color={owner.color} />
                    </div>
                    <div className="mt-2 font-semibold">{c.name}</div>
                    <div className="text-xs text-[#9aa0ab]">
                      {c.channel.split(" — ")[0]}
                    </div>
                    <div className="mt-2.5 flex items-center justify-between border-t border-[#f1f2f6] pt-2.5 text-xs text-[#6b7280]">
                      <span>{c.id}</span>
                      <span>{c.images > 0 ? `📷 ${c.images}` : ""}</span>
                    </div>
                  </button>
                );
              })}
              {group.length === 0 && (
                <div className="rounded-xl border border-dashed border-[#e9eaf0] py-6 text-center text-xs text-[#9aa0ab]">
                  No customers
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* =============================================================== INBOX */
function Inbox() {
  const channels = [
    { label: "Email", d: crmSummary.email, icon: "✉" },
    { label: "Social media", d: crmSummary.social, icon: "◎" },
    { label: "WhatsApp", d: crmSummary.whatsapp, icon: "✆" },
  ];
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {channels.map(({ label, d, icon }) => (
        <div
          key={label}
          className="rounded-xl border border-[#e9eaf0] bg-white p-5"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">
              {icon} {label}
            </span>
            <span className="rounded-full bg-[#e8506e1f] px-2 py-0.5 text-xs font-bold text-[#e8506e]">
              {d.pending} waiting
            </span>
          </div>
          <div className="mt-4 space-y-2">
            {Array.from({ length: Math.min(d.pending, 4) }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-lg border border-[#f1f2f6] p-2.5 text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#e8506e]" />
                <span className="flex-1 text-[#5b6472]">
                  Unanswered {label.toLowerCase()} #{i + 1}
                </span>
                <span className="text-xs text-[#9aa0ab]">new</span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-[#f1f2f6] pt-3 text-xs text-[#9aa0ab]">
            {d.handled}/{d.total} handled · avg response {d.speed}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ======================================================== INSTALLATIONS */
function Installs({ onOpen }: { onOpen: (id: string) => void }) {
  const installs = crmCustomers.filter((c) => c.sku !== "—");
  return (
    <div className="min-w-[720px] overflow-hidden rounded-xl border border-[#e9eaf0] bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wide text-[#9aa0ab]">
            <th className="px-4 py-2.5 font-bold">Customer</th>
            <th className="px-4 py-2.5 font-bold">Install date</th>
            <th className="px-4 py-2.5 font-bold">Driver tracking</th>
            <th className="px-4 py-2.5 font-bold">Machine SKU</th>
            <th className="px-4 py-2.5 font-bold">Photos</th>
            <th className="px-4 py-2.5 font-bold">Stage</th>
          </tr>
        </thead>
        <tbody>
          {installs.map((c) => (
            <tr
              key={c.id}
              onClick={() => onOpen(c.id)}
              className="cursor-pointer border-t border-[#f1f2f6] hover:bg-[#faf9ff]"
            >
              <td className="px-4 py-3 font-semibold">{c.name}</td>
              <td className="px-4 py-3 text-[#6b7280]">{c.installDate}</td>
              <td className="px-4 py-3 text-[#6b7280]">{c.driver}</td>
              <td className="px-4 py-3 font-mono text-xs text-[#6b7280]">
                {c.sku}
              </td>
              <td className="px-4 py-3 text-[#6b7280]">{c.images || "—"}</td>
              <td className="px-4 py-3">
                <Pill stage={stageOf(c)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ============================================================= REPORTS */
function Reports() {
  const s = crmSummary;
  const rate = (a: number, b: number) => Math.round((a / b) * 100);
  const items: [string, number, string][] = [
    ["Email handled", rate(s.email.handled, s.email.total), "#22c55e"],
    ["Social handled", rate(s.social.handled, s.social.total), "#f59e0b"],
    ["WhatsApp handled", rate(s.whatsapp.handled, s.whatsapp.total), "#3b82f6"],
    ["Installs completed", rate(s.installs.completed, s.installs.total), "#7b68ee"],
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(([label, pct, color]) => (
        <div
          key={label}
          className="flex flex-col items-center rounded-xl border border-[#e9eaf0] bg-white p-6 text-center"
        >
          <Wheel pct={pct} color={color} />
          <div className="mt-3 text-sm font-bold">{label}</div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================== DETAIL */
function Detail({
  customer: c,
  onClose,
}: {
  customer: CrmCustomer;
  onClose: () => void;
}) {
  const idx = crmCustomers.indexOf(c);
  const owner = ownerOf(idx);
  const rows: [string, React.ReactNode][] = [
    ["Reached us via", c.channel],
    ["Email", c.email],
    ["Phone", c.phone],
    ["Address", c.address],
    ["Owner", `${owner.name} (Customer Service)`],
    ["Online survey", c.surveyOnline ? "Completed" : "Not completed"],
    ["Survey notes", c.surveyNote],
    ["Order", c.orderPlaced ? c.orderDetail : "No order placed"],
    ["Install booked", c.installDate],
    ["Driver tracking", c.driver],
    ["Machine SKU", c.sku],
    ["Install photos", c.images > 0 ? `${c.images} uploaded` : "—"],
    ["Repair / service", c.repairs],
    ["Referrals made", `${c.referrals}`],
    ["Post-install survey", c.surveyCompleted ? "Completed" : "Pending"],
  ];
  return (
    <aside className="fixed right-0 top-0 z-50 flex h-full w-[420px] max-w-[92vw] flex-col bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-[#e9eaf0] px-5 py-4">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ background: PURPLE }}
          >
            {c.initials}
          </span>
          <div>
            <div className="font-extrabold">{c.name}</div>
            <div className="text-xs text-[#9aa0ab]">{c.id}</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#6b7280] hover:bg-[#f1f2f6]"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      <div className="border-b border-[#e9eaf0] px-5 py-3">
        <Pill stage={stageOf(c)} />
      </div>
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="mb-4 flex gap-4 border-b border-[#f1f2f6] pb-4 text-center text-sm">
          {(
            [
              ["Email", c.messages.email],
              ["SMS", c.messages.sms],
              ["WhatsApp", c.messages.whatsapp],
              ["Chat", c.messages.chat],
            ] as [string, number][]
          ).map(([label, n]) => (
            <div key={label} className="flex-1">
              <div className="text-lg font-extrabold" style={{ color: PURPLE }}>
                {n}
              </div>
              <div className="text-[11px] text-[#9aa0ab]">{label}</div>
            </div>
          ))}
        </div>
        <dl>
          {rows.map(([k, v]) => (
            <div
              key={k}
              className="border-b border-[#f1f2f6] py-2.5 last:border-0"
            >
              <dt className="text-[11px] font-bold uppercase tracking-wide text-[#9aa0ab]">
                {k}
              </dt>
              <dd className="mt-0.5 text-sm text-[#1f2329]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="border-t border-[#e9eaf0] p-4">
        <button
          className="h-10 w-full rounded-lg text-sm font-bold text-white"
          style={{ background: PURPLE }}
        >
          Open full record
        </button>
      </div>
    </aside>
  );
}
