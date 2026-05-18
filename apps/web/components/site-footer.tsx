import Link from "next/link";
import { Wordmark } from "./wordmark";

const groups = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "The water bar" },
      { href: "/technology", label: "Technology" },
      { href: "/shop", label: "Shop" },
      { href: "/shop", label: "Filter subscription" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Better Tap" },
      { href: "/contact", label: "Contact" },
      { href: "/contact", label: "Book an install" },
      { href: "/about", label: "Powered by Strauss Water" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Help center" },
      { href: "/contact", label: "Warranty" },
      { href: "/contact", label: "Service & repairs" },
      { href: "/contact", label: "Installation" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark className="text-2xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The plumbed-in water bar. Chilled, hot, boiling, and sparkling
              water — purified and ready, with no plastic to carry home.
            </p>
            <p className="mt-6 text-xs text-muted">
              Better Tap — powered by Strauss Water. Distributed in the U.S. by
              YJC Trade LLC, New York.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-fg">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-muted hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} YJC Trade LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="link-underline hover:text-fg">Privacy</Link>
            <Link href="/contact" className="link-underline hover:text-fg">Terms</Link>
            <Link href="/contact" className="link-underline hover:text-fg">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
