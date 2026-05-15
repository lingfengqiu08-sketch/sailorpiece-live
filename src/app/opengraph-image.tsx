import { ImageResponse } from "next/og";
import { codes } from "@/lib/codes";
import { formatDate } from "@/lib/date";
import { tierList } from "@/lib/tier-list";

export const alt = "Sailor Piece Codes, Wiki & Tier List";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  const lastChecked = formatDate(codes.last_checked_at);
  const tierCategoryCount = Object.keys(tierList.tabs).length;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(800px 400px at 80% -5%, rgba(25,211,178,0.18), transparent), radial-gradient(700px 350px at -10% 110%, rgba(94,197,255,0.16), transparent), #07111f",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 64, display: "flex" }}>⚓</div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5, display: "flex", gap: 10 }}>
            <div style={{ display: "flex" }}>Sailor Piece</div>
            <div style={{ color: "#19d3b2", display: "flex" }}>Guide</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: 999,
              background: "rgba(25, 211, 178, 0.15)",
              color: "#2eebc7",
              border: "2px solid rgba(25, 211, 178, 0.45)",
              fontSize: 24,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              display: "flex",
            }}
          >
            Checked {lastChecked}
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
              flexWrap: "wrap",
              gap: "0 20px",
            }}
          >
            <div style={{ display: "flex" }}>Sailor Piece</div>
            <div style={{ color: "#19d3b2", display: "flex" }}>Codes,</div>
            <div style={{ display: "flex", width: "100%" }}>Wiki &amp; Tier List</div>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#9bb0c8",
              maxWidth: 1000,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            Verified active codes · Level filter · Race / Fruit / Sword tier lists · Official Trello, Discord, Roblox links
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9bb0c8",
            fontSize: 22,
            borderTop: "1px solid rgba(155, 176, 200, 0.2)",
            paddingTop: 24,
          }}
        >
          <div style={{ color: "#19d3b2", fontWeight: 600, display: "flex" }}>sailorpiece.live</div>
          <div style={{ display: "flex" }}>
            {codes.active.length} active · {codes.expired.length} expired · {tierCategoryCount} tier categories
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
