import type { Metadata } from "next";
import Link from "next/link";
import PareGalaCard from "@/components/PareGalaCard";
import HonestCalCard from "@/components/HonestCalCard";
import ChromaCard from "@/components/ChromaCard";
import ConsultCTA from "@/components/ConsultCTA";
import Reveal from "@/components/Reveal";
import FlowLine from "@/components/FlowLine";

export const metadata: Metadata = {
  title: "Daras Flow | Practical Apps & Workflow Tools",
  description:
    "Daras Flow builds simple, lightweight digital tools and workflow automations to reduce everyday friction. Discover our apps Pare Gala, HonestCal and Chroma.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://darasflow.com/#organization",
      name: "Daras Flow",
      url: "https://darasflow.com",
      logo: "https://darasflow.com/logo.png",
      email: "panos@darasflow.com",
      description:
        "Independent software studio building lightweight, single-purpose digital tools and workflow automations.",
      founder: { "@id": "https://darasflow.com/#panos" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zaandam",
        addressCountry: "NL",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://darasflow.com/#website",
      url: "https://darasflow.com",
      name: "Daras Flow",
      publisher: { "@id": "https://darasflow.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://darasflow.com/#panos",
      name: "Panos Daratsianos",
      jobTitle: "Process Optimization Artisan & Founder",
      url: "https://darasflow.com/about",
      worksFor: { "@id": "https://darasflow.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Pare Gala",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android, Web",
      url: "https://paregala.com",
      installUrl: "https://play.google.com/store/apps/details?id=app.paregala.twa",
      description:
        "A shared, real-time grocery list app for families who want one simple place to manage shopping.",
      publisher: { "@id": "https://darasflow.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "HonestCal",
      applicationCategory: "HealthApplication",
      operatingSystem: ["Web", "Android"],
      url: "https://honestcal.com",
      installUrl:
        "https://play.google.com/store/apps/details?id=com.honestcal.app",
      description:
        "AI calorie and macro tracking from meal photos, descriptions, and barcodes, with confidence levels instead of fake precision.",
      publisher: { "@id": "https://darasflow.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Chroma",
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      url: "https://chroma-game-beta.vercel.app",
      description:
        "A relaxing paint-by-number colouring game that can turn your own family photos into colouring pages.",
      publisher: { "@id": "https://darasflow.com/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero */}
      <section className="hero">
        <div className="hero-aurora" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <h1 className="hero-title">
          Daras Flow builds practical apps and workflow tools that reduce friction.
        </h1>
        <p className="hero-subtitle">
          Lightweight, single-purpose tools that make everyday operations less clunky. Built by Panos Daratsianos.
        </p>
        <FlowLine variant="hero" />

        {/* Main CTA */}
        <div className="cta-group">
          <Link href="#apps" className="btn btn-primary">
            Try the apps
          </Link>
          <Link href="/about" className="btn btn-secondary">
            About the founder
          </Link>
        </div>
      </section>

      {/* 2. App showcase */}
      <section id="apps" className="section anchor-offset">
        <Reveal>
          <h2>The Apps</h2>
        </Reveal>
        <div className="app-grid">
          <Reveal>
            <PareGalaCard />
          </Reveal>
          <Reveal delay={120}>
            <HonestCalCard />
          </Reveal>
          <Reveal delay={240}>
            <ChromaCard />
          </Reveal>
        </div>
      </section>

      {/* 3. Methodology */}
      <section className="section">
        <Reveal>
          <FlowLine />
          <h2>The Artisan Mindset</h2>
          <p className="lead">
            I own the entire lifecycle of every app I build and take full responsibility for the result. No compromised or bloated products.
            I map how people actually work, find where the friction is, and build the smallest tool that solves it.
          </p>
          <p className="muted">
            This approach is grounded in process engineering and finance transformation work at companies like <strong>Booking.com</strong>, <strong>Rituals</strong>, and <strong>VanMoof</strong>.
          </p>
        </Reveal>
      </section>

      {/* 4. Consulting CTA */}
      <section style={{ marginBottom: "1.5rem" }}>
        <Reveal>
          <ConsultCTA />
        </Reveal>
      </section>
    </div>
  );
}
