/**
 * Better Tap — shared site data.
 * Brand note: this is the U.S. DTC brand for the Strauss Water Tami 4 Edge.
 * Customer-facing copy never says "Clear Bar", "Tami 4 Edge", "Ourtaap",
 * or "cooler" — and we "purify", never "filter".
 */

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/technology", label: "Technology" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  priceUsd: number;
  cadence?: string;
  blurb: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "better-tap-white",
    name: "Better Tap — White",
    tagline: "SKU 2440002",
    priceUsd: 1150,
    blurb:
      "The plumbed-in water bar. Chilled, room, hot, and boiling water — plus sparkling on demand. Finished in soft architectural white.",
    badge: "Most popular",
  },
  {
    slug: "better-tap-black",
    name: "Better Tap — Black",
    tagline: "SKU 2440202",
    priceUsd: 1150,
    blurb:
      "The same purified water bar in a deep matte black, designed to disappear into a modern kitchen.",
  },
  {
    slug: "filter-subscription",
    name: "Filter Subscription",
    tagline: "Auto-ship",
    priceUsd: 39,
    cadence: "per quarter",
    blurb:
      "The dishwasher-safe purification cartridge, delivered before it's due. Skip, pause, or change cadence anytime.",
  },
  {
    slug: "co2-cylinder",
    name: "Sparkling CO₂ Cylinder",
    tagline: "Accessory",
    priceUsd: 24,
    blurb:
      "Keeps the sparkling line running. One cylinder carbonates roughly 60 liters of water.",
  },
];

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
