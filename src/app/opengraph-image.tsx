import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The photo doesn't depend on the request, so read it once at module scope
const photo = `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public", profile.photo), "base64")}`;

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
            {profile.logo}
            <span style={{ color: "#5eead4" }}>.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>{profile.name}</div>
            <div style={{ fontSize: 34, color: "#5eead4", marginTop: 14 }}>{profile.role}</div>
            <div style={{ fontSize: 26, color: "#a5b6b2", marginTop: 26 }}>
              React · Next.js · TypeScript · Strapi · SQL
            </div>
          </div>
        </div>
        <div style={{ display: "flex", padding: 40 }}>
          <div
            style={{
              display: "flex",
              padding: 3,
              borderRadius: 32,
              background: "linear-gradient(135deg, #2dd4bf, rgba(45,212,191,0.3), #6366f1)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img tags */}
            <img
              src={photo}
              alt=""
              width={420}
              height={544}
              style={{ borderRadius: 29, objectFit: "cover", objectPosition: "50% 20%" }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
