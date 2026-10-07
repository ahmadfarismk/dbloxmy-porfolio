import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import styles from "./quicklinks.module.css";

/**
 * Standalone root layout for the Instagram link-in-bio page (/quicklinks).
 * Deliberately separate from app/(site)/layout.tsx: no navbar, no footer and
 * none of the site's global CSS, so neither can affect the other.
 *
 * Fonts are committed in ./fonts (variable, latin subset, SIL OFL 1.1 — see
 * the licence files there) and served from dblox.my. Nothing is fetched from
 * Google, at build time or by visitors.
 */

const bricolage = localFont({
  src: "./fonts/BricolageGrotesque-Variable.woff2",
  weight: "200 800",
  variable: "--font-bricolage",
  display: "swap",
});

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  weight: "200 800",
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dblox.my"),
  title: "D'Blox Games",
  description:
    "Main permainan Roblox D'Blox: PKSK Onboard: Misi ke Asrama dan Jejak Wahyu.",
  openGraph: {
    type: "website",
    siteName: "D'Blox",
    title: "D'Blox Games",
    url: "https://dblox.my/quicklinks",
    images: [{ url: "/logo/dblox-og.png", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function QuicklinksLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms">
      <body className={`${bricolage.variable} ${jakarta.variable} ${styles.body}`}>
        {children}
      </body>
    </html>
  );
}
