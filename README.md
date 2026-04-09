# SunilChaware

Starter Astro project with Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## CI/CD to Cloudflare Pages

This repo includes a GitHub Actions workflow at `.github/workflows/cloudflare-pages.yml`.

- Push to `main` or `master` -> production deploy to Cloudflare Pages
- Pull request to `main` or `master` -> preview deploy

### One-time setup

1. Create a Cloudflare Pages project (for example: `sunilchaware-technicalportfolio`).
2. In GitHub repo settings, add these Actions secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_PAGES_PROJECT` (your Cloudflare Pages project name)
3. Push your branch and the workflow will build with `npm run build` and deploy `dist`.
