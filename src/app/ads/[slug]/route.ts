export const dynamic = "force-static";

/**
 * Each banner ad unit gets its own html document (own window / own atOptions),
 * served at /ads/banner-<size>.html and embedded via iframe — see course §4.1/4.2.
 */
const UNITS: Record<string, { env: string; width: number; height: number }> = {
  "banner-320x50.html": { env: "NEXT_PUBLIC_AD_MOBILE_320X50", width: 320, height: 50 },
  "banner-300x250.html": { env: "NEXT_PUBLIC_AD_BANNER_300X250", width: 300, height: 250 },
  "banner-728x90.html": { env: "NEXT_PUBLIC_AD_BANNER_728X90", width: 728, height: 90 },
};

export function generateStaticParams() {
  return Object.keys(UNITS).map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const unit = UNITS[slug];
  const key = unit ? process.env[unit.env] : null;
  const body =
    unit && key && key !== "0"
      ? `<!DOCTYPE html><html><head><meta charset="utf-8" /></head><body style="margin:0"><script type="text/javascript">atOptions = { 'key': '${key}', 'format': 'iframe', 'height': ${unit.height}, 'width': ${unit.width}, 'params': {} };</script><script src="https://bicea.org/22/${key}"></script></body></html>`
      : '<!DOCTYPE html><html><body style="margin:0"></body></html>';
  return new Response(body, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
