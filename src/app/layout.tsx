import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { og } from "@/lib/seo";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_DESCRIPTION =
  "Daras Flow is the workflow improvement practice of Panos Daratsianos. I help small businesses and teams remove friction from the way they work: a better process, an automation, or a small tool between two systems, built only when it is needed.";

export const metadata: Metadata = {
  title: {
    default: "Daras Flow | Fix the workflow. Build only what’s needed.",
    template: "%s | Daras Flow",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Daras Flow",
    "Panos Daratsianos",
    "workflow improvement",
    "process improvement",
    "workflow automation",
    "small business operations",
    "finance operations",
    "Card Sorter",
    "Zaandam",
    "Netherlands",
  ],
  authors: [{ name: "Panos Daratsianos" }],
  creator: "Panos Daratsianos",
  metadataBase: new URL("https://www.darasflow.com"),
  openGraph: og("/"),
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
