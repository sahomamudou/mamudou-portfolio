import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The portrait doesn't depend on the request, so read it once at module scope
const portrait = `data:image/png;base64,${await readFile(join(process.cwd(), "public", profile.photo), "base64")}`;

// Social preview card shown when the site is shared on LinkedIn, X, WhatsApp, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #050d0b 0%, #0b2a25 55%, #1e1b4b 100%)",
          color: "#eef5f3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, flex: 1 }}>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
            {profile.domainLabel.split(".")[0]}
            <span style={{ color: "#5eead4" }}>.{profile.domainLabel.split(".")[1]}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 70, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>{profile.name}</div>
            <div style={{ fontSize: 36, color: "#5eead4", marginTop: 14 }}>{profile.role}</div>
            <div style={{ fontSize: 26, color: "#a5b6b2", marginTop: 26 }}>
              React · Next.js · TypeScript · Strapi · SQL
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", width: 470, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 60,
              top: 120,
              width: 360,
              height: 360,
              borderRadius: 9999,
              background: "rgba(45,212,191,0.35)",
              filter: "blur(70px)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img tags */}
          <img src={portrait} alt="" width={470} height={470} style={{ position: "relative" }} />
          {/* Fade the bottom edge of the cut-out into the background */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 140,
              background: "linear-gradient(to bottom, rgba(16,24,48,0), #141638)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
