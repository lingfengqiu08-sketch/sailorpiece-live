/**
 * Adsterra Native Banner (responsive 4:1). The key lives in the script URL, so
 * no atOptions conflict is possible and no iframe isolation is needed — the
 * invoke.js/path-style script is emitted straight into the server HTML.
 * Renders nothing when the key env var is missing or "0".
 */
export function NativeBannerAd({ className = "" }: { className?: string }) {
  const key = process.env.NEXT_PUBLIC_AD_NATIVE_BANNER;
  const host = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_HOST;
  if (!key || key === "0" || !host) return null;

  // New Adsterra sites use path-style script URLs (https://<host>/<key>);
  // legacy bare hosts keep the /invoke.js suffix.
  const isNewPathStyle = host.includes("/");
  const src = `https://${host}/${key}${isNewPathStyle ? "" : "/invoke.js"}`;
  const html = `<script async="async" data-cfasync="false" src="${src}"></script>${
    isNewPathStyle ? `<div id="container-${key}"></div>` : ""
  }`;

  return (
    <div className={`w-full ${className}`}>
      {isNewPathStyle ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <div id={`container-${key}`} dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </div>
  );
}
