# Better Tap — Consumer Website (`apps/web`)

The public DTC marketing site for **Better Tap**, the U.S. consumer brand for
the Strauss Water plumbed-in water bar. Distributed by YJC Trade LLC.

This is **Phase 0 + Phase 1** of the full build brief: the runnable consumer
marketing core. It is a standalone Next.js app — the wider monorepo (customer
portal, admin CRM, plumber PWA) is not included here.

## Stack

- Next.js 15 (App Router) + TypeScript (strict)
- Tailwind CSS v4
- Manrope (free geometric sans — production stand-in for the Cerebri/Aeonik
  wordmark fonts in the brand book)
- No external services or API keys required to run.

## Design tokens

Extracted from `BetterTap_Logo.pdf` (Splash Creative brand book):

| Token  | Hex       | Use                          |
| ------ | --------- | ---------------------------- |
| Ink    | `#141937` | Brand navy — text, dark UI   |
| Sage   | `#7F8E79` | Accent — CTAs, highlights    |
| White  | `#FFFFFF` | Surfaces                     |

Light/dark themes are derived from these and exposed as semantic CSS variables.

## Run it

```bash
cd apps/web
npm install
npm run dev
```

Open <http://localhost:3000>.

## Pages

`/` Home · `/product` · `/technology` · `/shop` · `/about` · `/contact`

## Implemented from the brief

- Design system with tokens (no raw hex in components)
- Dark / light theme toggle, system default, persists in `localStorage`,
  no flash on load
- Sticky header: transparent → blurred glass on scroll
- Premium hover states: magnetic-style buttons, card lift, underline reveal,
  image zoom
- Scroll-reveal animations, animated stat counter
- `prefers-reduced-motion` respected throughout
- Mobile-first, accessible (skip link, labelled inputs, semantic landmarks)
- Brand rules enforced: never "Clear Bar" / "Tami 4 Edge" / "cooler";
  copy says "purify", not "filter"

## Not yet built (later phases of the brief)

Checkout (Stripe), customer account portal, admin CRM, plumber PWA, Sanity CMS
with the Strauss approval gate, Clerk auth, and the other locked integrations.
