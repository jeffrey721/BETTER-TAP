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
  { href: "/preorder", label: "Pre-Order" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const faqs = [
  {
    q: "How much does Better Tap cost to run?",
    a: "Just 0.67 kWh of electricity per day — far less than boiling a kettle through the day or running a single-serve coffee maker. Your monthly cost to run the unit is typically only a few dollars.",
  },
  {
    q: "What temperatures does Better Tap offer?",
    a: "50 precision settings — chilled from 39°F, ambient room temperature, and hot all the way up to a near-boiling 210°F. Tea, coffee, baby formula, and ice-cold water all from one tap.",
  },
  {
    q: "How fast does it dispense?",
    a: "About 2 liters of chilled water or 1.3 liters of boiling water per minute — roughly 40 glasses of chilled and 80 cups of boiling water every hour. No kettle wait, ever.",
  },
  {
    q: "How big is the unit?",
    a: "Compact at about 10.6\" wide × 14.2\" deep × 14.6\" tall — designed to sit comfortably on a standard kitchen countertop.",
  },
  {
    q: "Is it safe for children?",
    a: "Yes. Better Tap has a built-in child lock that prevents accidental dispense of hot water. Your technician sets it up and shows you how it works during installation.",
  },
  {
    q: "How often do the filter and UV lamp need changing?",
    a: "The purification cartridge is replaced every 6 months and the UV lamp every 12 months. Both pop in and out in seconds — no tools and no special knowledge required.",
  },
  {
    q: "Who handles repairs and maintenance?",
    a: "We do. Servicing, parts, and repairs are covered — a technician is dispatched at no extra cost if anything ever needs attention.",
  },
  {
    q: "Can it be installed on a granite or quartz countertop?",
    a: "Absolutely. Our trained technicians install through granite, marble, quartz, and Corian. Installation only needs a small hole — about 5/16\" — through the counter.",
  },
  {
    q: "Does Better Tap change the water's pH or strip out minerals?",
    a: "No. It filters out impurities but preserves the essential minerals your body needs — calcium, magnesium, and potassium. The water's pH and alkalinity stay the same.",
  },
  {
    q: "What does installation involve?",
    a: "A trained technician connects Better Tap to your cold-water line — the unit needs to sit within reach of the mains supply (typically near the sink or dishwasher) and a power outlet. The whole visit takes about an hour.",
  },
  {
    q: "What if I move home?",
    a: "Just let us know — our technicians will relocate and reinstall your Better Tap in your new home, so you never lose access to purified water.",
  },
  {
    q: "Is there a satisfaction guarantee?",
    a: "Yes. If you change your mind within 30 days, let us know and we'll take care of everything with a full refund.",
  },
];

export const reviews = [
  {
    quote:
      "We stopped buying bottled water the week it was installed. The boiling tap alone changed our mornings.",
    name: "Rachel M.",
    place: "Teaneck, NJ",
  },
  {
    quote:
      "It looks like it belongs in the kitchen — not like an appliance we tolerated. Ice-cold water on tap is dangerous in the best way.",
    name: "Daniel & Aviva K.",
    place: "Monsey, NY",
  },
  {
    quote:
      "Install took an afternoon. The team walked us through everything and the filter just shows up before it's due.",
    name: "Jonathan S.",
    place: "Stamford, CT",
  },
  {
    quote:
      "Boiling water instantly for the baby's bottle at 3am is worth it on its own. The child lock means I never worry.",
    name: "Maya R.",
    place: "Englewood, NJ",
  },
  {
    quote:
      "The water genuinely tastes better than the bottled brands we used to lug home. No more cases stacked in the pantry.",
    name: "Eli & Tova G.",
    place: "Lakewood, NJ",
  },
  {
    quote:
      "Quiet, compact, and the chilled water is properly cold. Best kitchen upgrade we've made.",
    name: "Sarah W.",
    place: "White Plains, NY",
  },
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
      "The plumbed-in water bar. Chilled, room, hot, and boiling water — purified and instant. Finished in soft architectural white.",
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
];

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

/* ----------------------------------------------- purchase options */
export type PurchaseOption = {
  id: "cash" | "installments" | "lease";
  name: string;
  tagline: string;
  headline: string;
  sub: string;
  img: string;
  badge?: string;
  popular?: boolean;
  blurb: string;
  features: string[];
  dueToday: number;
  dueTodayLabel: string;
  recurring?: string;
  lineItems: { label: string; value: string }[];
  methodIds: string[];
};

export const purchaseOptions: PurchaseOption[] = [
  {
    id: "cash",
    name: "One Payment",
    tagline: "Own it outright",
    headline: "$1,299",
    sub: "one-time",
    img: "/img/product-white.jpg",
    badge: "Best value",
    blurb:
      "Pay once and own your Better Tap outright — the best total value, with nothing more to pay.",
    features: [
      "Better Tap machine — yours to keep",
      "Free professional installation",
      "First purification cartridge included",
      "2-year warranty & support",
    ],
    dueToday: 1299,
    dueTodayLabel: "Due today",
    lineItems: [
      { label: "Better Tap machine", value: "$1,299.00" },
      { label: "Professional installation", value: "FREE" },
      { label: "First purification cartridge", value: "Included" },
    ],
    methodIds: ["card", "googlepay", "applepay", "amazonpay", "cashapp", "paypal"],
  },
  {
    id: "installments",
    name: "Installments",
    tagline: "Split it over time",
    headline: "$108",
    sub: "/mo for 12 months",
    img: "/img/product-black.jpg",
    badge: "Most popular",
    popular: true,
    blurb:
      "Spread the $1,299 cost into easy monthly payments with Klarna or Amazon Pay — own it outright at the end.",
    features: [
      "12 monthly payments of $108.25",
      "Pay monthly with Klarna or Amazon Pay",
      "Own it outright at the end of the term",
      "Free installation & 2-year warranty",
    ],
    dueToday: 108.25,
    dueTodayLabel: "First payment today",
    recurring: "Then $108.25/month for 11 months",
    lineItems: [
      { label: "Better Tap machine", value: "$1,299.00 total" },
      { label: "Payment plan", value: "12 × $108.25" },
      { label: "Professional installation", value: "FREE" },
    ],
    methodIds: ["klarna", "amazonpay"],
  },
  {
    id: "lease",
    name: "Lease",
    tagline: "Lowest upfront cost",
    headline: "$35",
    sub: "/mo after deposit",
    img: "/img/dispense.jpg",
    blurb:
      "Pay a $450 deposit, then just $35/month. Filters, service, and support all included — relocate or upgrade anytime.",
    features: [
      "$450 deposit to get started",
      "$35 / month, cancel anytime",
      "Filters & UV lamp always included",
      "Full service & support included",
    ],
    dueToday: 450,
    dueTodayLabel: "Deposit due today",
    recurring: "Then $35.00/month",
    lineItems: [
      { label: "Lease deposit", value: "$450.00" },
      { label: "Monthly lease", value: "$35.00 / mo" },
      { label: "Filters, service & support", value: "Included" },
    ],
    methodIds: ["card", "googlepay", "applepay", "amazonpay", "cashapp", "paypal"],
  },
];

export const optionById = (id: string) =>
  purchaseOptions.find((o) => o.id === id) ?? purchaseOptions[1];

export type PaymentMethod = {
  id: string;
  label: string;
  desc: string;
  glyph: string;
  color: string;
  light?: boolean;
};

export const paymentMethods: PaymentMethod[] = [
  { id: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard, Amex — secured by Stripe", glyph: "▦", color: "#1a1f71" },
  { id: "googlepay", label: "Google Pay", desc: "Pay with your Google account", glyph: "G", color: "#4285f4" },
  { id: "applepay", label: "Apple Pay", desc: "Pay with Touch ID or Face ID", glyph: "", color: "#000000" },
  { id: "amazonpay", label: "Amazon Pay", desc: "Use your Amazon wallet", glyph: "a", color: "#ff9900" },
  { id: "cashapp", label: "Cash App Pay", desc: "Scan with Cash App", glyph: "$", color: "#00d632" },
  { id: "paypal", label: "PayPal", desc: "Pay with your PayPal balance", glyph: "P", color: "#003087" },
  { id: "klarna", label: "Klarna", desc: "Split into easy monthly payments", glyph: "K", color: "#ffb3c7", light: true },
];
