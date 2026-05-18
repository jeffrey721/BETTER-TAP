"use client";

import { useState } from "react";
import Link from "next/link";

const TOTAL = 4;

/** NY / NJ / CT ZIP prefixes — our current install territory. */
const SERVICE_PREFIXES = ["06", "07", "08", "10", "11", "12", "13", "14"];

const countertops = [
  "Granite",
  "Marble / Quartz",
  "Corian / Solid surface",
  "Laminate",
  "Butcher block / Wood",
  "Other",
];

const accessOptions = [
  "Yes — both within reach",
  "Only one of them",
  "I'm not sure",
];

export function PreorderQuiz() {
  const [step, setStep] = useState(0);
  const [photoName, setPhotoName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [zip, setZip] = useState("");
  const [countertop, setCountertop] = useState("");
  const [access, setAccess] = useState("");
  const [done, setDone] = useState(false);

  const inArea = SERVICE_PREFIXES.includes(zip.slice(0, 2));

  /* ----------------------------------------------------- result */
  if (done) {
    const goodFit = inArea && access === "Yes — both within reach";
    const status = !inArea
      ? {
          tone: "wait",
          title: "We're not installing in your area just yet",
          body: "Better Tap currently installs across New York, New Jersey, and Connecticut. Leave your details and we'll reach out the moment we reach your ZIP code.",
          cta: "Join the waitlist",
          href: "/contact",
        }
      : goodFit
        ? {
            tone: "fit",
            title: "Better Tap is a great fit for your home",
            body: "Your setup, countertop, and water access all check out. Reserve your Better Tap and we'll confirm the final details on a quick call.",
            cta: "Reserve my Better Tap",
            href: "/shop",
          }
        : {
            tone: "almost",
            title: "You're almost there",
            body: "A couple of details need a closer look — usually nothing major. Book a free site check and our team will confirm everything from your photo.",
            cta: "Book a free site check",
            href: "/contact",
          };

    return (
      <div className="mx-auto max-w-xl px-5 py-16 text-center sm:px-8">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl font-bold text-white ${
            status.tone === "fit" ? "bg-accent" : "bg-brand"
          }`}
        >
          {status.tone === "fit" ? "✓" : status.tone === "wait" ? "◷" : "☑"}
        </div>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
          {status.title}
        </h1>
        <p className="mt-3 text-muted">{status.body}</p>

        <div className="mt-7 rounded-2xl border border-border bg-surface p-6 text-left">
          <h2 className="text-sm font-semibold">Your pre-order check</h2>
          <div className="mt-3 space-y-3 text-sm">
            {photoUrl && (
              <div className="overflow-hidden rounded-xl border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoUrl} alt="Your kitchen setup" className="max-h-44 w-full object-cover" />
              </div>
            )}
            <div className="flex justify-between gap-4">
              <span className="text-muted">Setup photo</span>
              <span className="font-medium">{photoName || "—"}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted">ZIP code</span>
              <span className="font-medium">
                {zip} · {inArea ? "in our area" : "outside our area"}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted">Countertop</span>
              <span className="font-medium">{countertop}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted">Water &amp; power access</span>
              <span className="font-medium">{access}</span>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href={status.href}
            className="btn h-12 bg-brand px-7 text-base text-brand-contrast shadow-md hover:shadow-lg"
          >
            {status.cta}
          </Link>
          <button
            onClick={() => {
              setPhotoName("");
              setPhotoUrl("");
              setZip("");
              setCountertop("");
              setAccess("");
              setStep(0);
              setDone(false);
            }}
            className="btn h-12 border border-border bg-surface px-7 text-base text-fg hover:shadow-md"
          >
            Start over
          </button>
        </div>
        <p className="mt-6 text-xs text-muted">
          This pre-order check is a guide — every install is confirmed by a
          Better Tap technician. Your photo is not uploaded in this demo.
        </p>
      </div>
    );
  }

  const progress = ((step + 1) / TOTAL) * 100;

  /* ------------------------------------------------------- quiz */
  return (
    <div className="mx-auto max-w-xl px-5 py-12 sm:px-8 lg:py-16">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-muted">
          <span>Step {step + 1} of {TOTAL}</span>
          <span>Pre-order home check</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Q1 — photo upload */}
      {step === 0 && (
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Show us where Better Tap will go
          </h1>
          <p className="mt-2 text-sm text-muted">
            Upload a photo of the spot — ideally showing the counter and the
            cabinet under the sink. It helps us plan your install.
          </p>
          <label className="mt-6 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-surface px-6 py-12 text-center transition hover:border-accent">
            <span className="text-3xl" aria-hidden>📷</span>
            <span className="text-sm font-semibold">
              {photoName ? photoName : "Tap to upload a photo"}
            </span>
            <span className="text-xs text-muted">JPG or PNG</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setPhotoName(f.name);
                  setPhotoUrl(URL.createObjectURL(f));
                }
              }}
            />
          </label>
          {photoUrl && (
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoUrl} alt="Preview" className="max-h-52 w-full object-cover" />
            </div>
          )}
          <button
            disabled={!photoName}
            onClick={() => setStep(1)}
            className="btn mt-5 h-12 w-full bg-brand text-base text-brand-contrast shadow-md hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      )}

      {/* Q2 — ZIP */}
      {step === 1 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep(2);
          }}
        >
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            What&apos;s your ZIP code?
          </h1>
          <p className="mt-2 text-sm text-muted">
            We&apos;ll check whether we install in your area — currently New
            York, New Jersey &amp; Connecticut.
          </p>
          <input
            inputMode="numeric"
            pattern="[0-9]{5}"
            required
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, "").slice(0, 5))}
            placeholder="e.g. 07666"
            className="mt-6 h-13 w-full rounded-xl border border-border bg-surface px-4 text-base outline-none transition focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
          />
          <button
            type="submit"
            className="btn mt-5 h-12 w-full bg-brand text-base text-brand-contrast shadow-md hover:shadow-lg"
          >
            Continue
          </button>
        </form>
      )}

      {/* Q3 — countertop */}
      {step === 2 && (
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            What&apos;s your countertop made of?
          </h1>
          <p className="mt-2 text-sm text-muted">
            Our technicians install through granite, marble, quartz, Corian,
            and more — this just helps us bring the right tools.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {countertops.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCountertop(c);
                  setStep(3);
                }}
                className="card-lift rounded-xl border border-border bg-surface px-5 py-4 text-left text-base font-semibold hover:border-accent hover:shadow-md"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Q4 — water & power access */}
      {step === 3 && (
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Is there a cold-water line and a power outlet nearby?
          </h1>
          <p className="mt-2 text-sm text-muted">
            Better Tap taps into your cold-water supply (usually under the sink)
            and plugs into a standard outlet within about 6 feet.
          </p>
          <div className="mt-6 grid gap-3">
            {accessOptions.map((a) => (
              <button
                key={a}
                onClick={() => {
                  setAccess(a);
                  setDone(true);
                }}
                className="card-lift flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 text-left text-base font-semibold hover:border-accent hover:shadow-md"
              >
                {a}
                <span className="text-accent" aria-hidden>→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step > 0 && !done && (
        <button
          onClick={() => setStep((s) => s - 1)}
          className="mt-6 text-sm font-medium text-muted hover:text-fg"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
