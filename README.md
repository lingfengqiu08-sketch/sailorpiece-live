This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## SEO Checks

Run the daily production smoke test:

```bash
pnpm seo:check
```

It checks the public site, sitemap, Google verification file, `www` canonical redirect, GA4 script, GSC API access, and GA4 API access. It expects local Google ADC credentials to be available through `gcloud auth application-default login`.

## GA4 Event Assets

The site sends these GA4 events: `copy_code`, `copy_all_eligible`, `level_filter_change`, `eligible_only_toggle`, `expired_codes_toggle`, `tier_tab_click`, and `official_link_click`.

Create or confirm the matching GA4 custom dimensions, custom metric, and key events:

```bash
pnpm ga4:assets
```

This script needs a Google ADC token with Analytics edit scope. If it fails with `ACCESS_TOKEN_SCOPE_INSUFFICIENT`, refresh local ADC auth:

```bash
gcloud auth application-default login --scopes=https://www.googleapis.com/auth/analytics.edit,https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/webmasters.readonly
```

If Google blocks the default gcloud OAuth client, use the shared local desktop OAuth client:

```bash
gcloud auth application-default login \
  --client-id-file=/Users/qiulingfeng/.config/site-monitor/oauth-client.json \
  --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/analytics.edit,https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/webmasters,https://www.googleapis.com/auth/webmasters.readonly,openid,https://www.googleapis.com/auth/userinfo.email
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
