import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card shown when the site is shared on LinkedIn, X, WhatsApp, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0e0e0e",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 88,
            height: 88,
            borderRadius: 20,
            border: "2px solid rgba(200,240,49,0.6)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          MS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 38, color: "#c8f031", marginTop: 12 }}>{profile.role}</div>
          <div style={{ fontSize: 28, color: "#a6a6a6", marginTop: 28 }}>
            React · Next.js · TypeScript · Strapi · SQL
          </div>
        </div>
      </div>
    ),
    size,
  );
}
