/**
 * Environment badge — shows which deployment tier you're viewing.
 * Driven by NEXT_PUBLIC_SITE_ENV: "local" | "staging" | "production".
 * Hidden entirely on production.
 */
export function EnvBadge() {
  // Unset = production (no badge). Local is set via .env.local, Staging
  // is injected at deploy time with --build-env.
  const env = process.env.NEXT_PUBLIC_SITE_ENV ?? "production";
  if (env === "production") return null;

  const isStaging = env === "staging";
  return (
    <div
      className="fixed bottom-3 left-3 z-[60] select-none rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white shadow-lg"
      style={{ background: isStaging ? "#d97706" : "#1e88e5" }}
      aria-label={`${env} environment`}
    >
      ● {isStaging ? "Staging" : "Local"}
    </div>
  );
}
