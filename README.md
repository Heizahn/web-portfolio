This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Cloudflare

The site is a static export (`output: 'export'` in `next.config.mjs`), served by Cloudflare Workers static assets (`wrangler.jsonc`).

```bash
npm run preview   # build + serve locally with wrangler
npm run deploy    # build + publish to Cloudflare
```

GitHub data (profile, repos, languages) is fetched at **build time**. The `Deploy to Cloudflare` GitHub Action (`.github/workflows/deploy.yml`) redeploys on every push to `main` and every 6 hours to keep it fresh. It needs two repository secrets: `CLOUDFLARE_API_TOKEN` (template "Edit Cloudflare Workers") and `CLOUDFLARE_ACCOUNT_ID`.

### Custom domain

1. Add the domain as a zone in Cloudflare.
2. Uncomment the `routes` block in `wrangler.jsonc`.
3. Change `SITE_URL` in `src/env/env.ts` (used by canonical, Open Graph, sitemap and robots).
