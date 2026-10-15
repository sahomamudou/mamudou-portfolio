import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "@/components/theme";
import { profile } from "@/content/site";
import "./globals.css";

const urbanist = Urbanist({ variable: "--font-urbanist", subsets: ["latin"] });

const title = `${profile.name} · ${profile.role}`;
const description =
  "Mamudou Saho is a full-stack developer and frontend instructor in The Gambia, building accessible web apps with React, Next.js, TypeScript, Strapi and SQL.";

// Absolute base for social preview URLs. Set NEXT_PUBLIC_SITE_URL once you have a custom domain;
// on Vercel the production URL is picked up automatically.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: profile.name }],
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // next-themes sets the theme class before hydration
    <html lang="en" suppressHydrationWarning className={urbanist.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
