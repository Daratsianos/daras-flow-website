import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Daras Flow | Practical Apps & Automation",
    template: "%s | Daras Flow",
  },
  description:
    "Daras Flow builds simple, lightweight digital tools and workflow automations for real-world problems. Founded by Panos Daratsianos.",
  keywords: [
    "Daras Flow",
    "Panos Daratsianos",
    "Workflow Automation",
    "Software Studio",
    "Ta Psonia Mas",
    "HonestCal",
    "Process Optimization",
    "Finance Transformation",
  ],
  authors: [{ name: "Panos Daratsianos" }],
  creator: "Panos Daratsianos",
  metadataBase: new URL("https://darasflow.com"),
  openGraph: {
    title: "Daras Flow | Practical Apps & Automation",
    description:
      "Daras Flow builds simple, lightweight digital tools and workflow automations for real-world problems.",
    url: "https://darasflow.com",
    siteName: "Daras Flow",
    locale: "en_US",
    type: "website",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <footer className="footer-wrapper">
          <div className="wrapper footer">
            <div className="footer-section">
              <h3>Daras Flow</h3>
              <p>Simple tools for messy real-world problems.</p>
              <p style={{ marginTop: "0.5rem" }}>
                Founder: Panos Daratsianos
              </p>
            </div>
            <div className="footer-section">
              <h3>Business Registry</h3>
              <address>
                KVK: 89150341<br />
                BTW: NL004694906B89<br />
                Zaandam, Netherlands<br />
                Contact: <a href="mailto:panos@darasflow.com">panos@darasflow.com</a>
              </address>
            </div>
          </div>
          <div className="wrapper">
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Daras Flow. All rights reserved.</p>
              <div className="footer-bottom-links">
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
