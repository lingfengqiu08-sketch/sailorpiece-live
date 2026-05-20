const siteUrl = process.env.SITE_URL || "https://sailorpiece.live";
const indexNowEndpoint = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";
const key = process.env.INDEXNOW_KEY || "bde670fe3ce34a46a1661d19215991c3";
const keyLocation = `${siteUrl}/${key}.txt`;

const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`, { cache: "no-store" });
if (!sitemapResponse.ok) {
  throw new Error(`Failed to fetch sitemap: HTTP ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urls.length === 0) {
  throw new Error("No URLs found in sitemap.");
}

const response = await fetch(indexNowEndpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key,
    keyLocation,
    urlList: urls,
  }),
});

if (![200, 202].includes(response.status)) {
  const body = await response.text();
  throw new Error(`IndexNow submit failed: HTTP ${response.status} ${body}`);
}

console.log(`IndexNow accepted ${urls.length} URLs with HTTP ${response.status}.`);
