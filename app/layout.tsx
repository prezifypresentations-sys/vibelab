import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibelab.lt"),
  title: "Vibe Lab — Tavo verslas. AI greičiu.",
  description:
    "Išmokite kurti svetaines ir automatizuoti procesus su DI. Užsiregistruokite į laukiančiųjų sąrašą ir gaukite nemokamą gidą '30 Claude Code promptų Lietuvos verslui'.",
  openGraph: {
    title: "Vibe Lab — Tavo verslas. AI greičiu.",
    description:
      "Praktiniai DI sprendimai Lietuvos verslui. Kursai, dirbtuvės, B2B paslaugos.",
    url: "https://vibelab.lt",
    siteName: "Vibe Lab",
    locale: "lt_LT",
    type: "website",
  },
};

import ScrollAnimations from "@/components/ScrollAnimations";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="lt"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="font-body bg-navy text-cloud">
        {children}
        <ScrollAnimations />
      </body>
    </html>
  );
}
