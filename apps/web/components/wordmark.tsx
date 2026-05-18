import Link from "next/link";

/** The Better Tap wordmark — set in the geometric brand sans. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Better Tap home"
      className={`group inline-flex items-baseline font-extrabold tracking-tight ${className}`}
    >
      <span className="text-fg">Better</span>
      <span
        className="transition-opacity group-hover:opacity-80"
        style={{ color: "#1e88e5" }}
      >
        Tap
      </span>
      <sup className="ml-0.5 text-[0.5em] font-semibold text-muted">®</sup>
    </Link>
  );
}
