# Better Tap — Environments

Three deployment tiers. Code flows **Local → Staging → Production**.

| Tier | Purpose | Branch | URL | `NEXT_PUBLIC_SITE_ENV` |
|---|---|---|---|---|
| **Local** | Day-to-day development | any | http://localhost:3000 | `local` |
| **Staging** | Test/review before going live | `staging` | https://better-tap-staging.vercel.app | `staging` |
| **Production** | The public live site | `main` | https://web-delta-five-68.vercel.app | `production` |

A coloured badge appears bottom-left on Local (blue) and Staging (amber).
Production shows no badge.

---

## 1 · Local

```bash
cd apps/web
npm install      # first time only
npm run dev
```
Open http://localhost:3000. Env is set by `apps/web/.env.local`
(`NEXT_PUBLIC_SITE_ENV=local`, git-ignored).

## 2 · Staging

Work happens on `working-branch`. To promote it to Staging for review:

```bash
git checkout staging
git merge working-branch
git push origin staging
```

Deploy Staging to Vercel (preview deployment, stable alias):

```bash
cd apps/web
npx vercel deploy --yes --scope yjc-trade-s-projects --token <TOKEN>
npx vercel alias set <deployment-url> better-tap-staging.vercel.app \
  --scope yjc-trade-s-projects --token <TOKEN>
```

## 3 · Production

Once Staging is approved, promote to Production:

```bash
git checkout main
git merge staging
git push origin main

cd apps/web
npx vercel deploy --prod --yes --scope yjc-trade-s-projects --token <TOKEN>
```

Production is served at the `web-delta-five-68.vercel.app` alias.

---

## Promotion flow

```
 working-branch  ──merge──▶  staging  ──merge──▶  main
   (Local dev)              (Staging)            (Production)
```

Never deploy straight to Production without passing through Staging.

## Environment variables (Vercel)

`NEXT_PUBLIC_SITE_ENV` is set per Vercel environment:
- **Production** target → `production`
- **Preview** target (used by Staging) → `staging`

Set them once with `npx vercel env add NEXT_PUBLIC_SITE_ENV <target>`.
