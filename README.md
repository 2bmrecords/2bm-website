# 2BM — Major Label Site (Next.js/Sanity)

**Stack**: Next.js 14 (App Router, TS), Tailwind, Framer Motion, Sanity (headless).  
**Brand**: Yellow/Black primary + Blue/Red accents. Helios/Helios Extended font hooks included.

## Quickstart

```bash
pnpm i # or npm i / yarn
cp .env.example .env.local
# add NEXT_PUBLIC_SANITY_PROJECT_ID
pnpm dev
```

## CMS
- Set up Sanity project, add the schemas in `/schemas` and deploy.
- Populate Artists, Releases, News, Partners, Sessions.
- Replace placeholder queries in pages with GROQ via `lib/sanity.ts`.

## Fonts
Host licensed fonts on a CDN and include in `app/globals.css` or via `next/font`.
