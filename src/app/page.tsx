import type { Metadata } from "next";
import Link from "next/link";
import PareGalaCard from "@/components/PareGalaCard";
import HonestCalCard from "@/components/HonestCalCard";
import ConsultCTA from "@/components/ConsultCTA";

export const metadata: Metadata = {
  title: "Daras Flow | Practical Apps & Workflow Tools",
  description:
    "Daras Flow builds simple, lightweight digital tools and workflow automations to reduce everyday friction. Discover our apps Pare Gala and HonestCal.",
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
      operatingSystem: "Web",
      url: "https://paregala.com",
      description:
        "A shared, real-time grocery list app for families who want one simple place to manage shopping.",
      publisher: { "@id": "https://darasflow.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "HonestCal",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      url: "https://honestcal.com",
      description:
        "AI-assisted calorie logging for real meals, with review before logging and no fake precision.",
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
        <h1 className="hero-title">
          Daras Flow builds practical apps and workflow tools that reduce friction.
        </h1>
        <p className="hero-subtitle">
          Lightweight, single-purpose digital tools designed to make everyday operations and daily life less clunky.
          Built with an optimization mindset by Panos Daratsianos.
        </p>

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
        <h2>The Apps</h2>
        <div className="app-grid">
          <PareGalaCard />
          <HonestCalCard />
        </div>
      </section>

      {/* 3. Methodology */}
      <section className="section">
        <h2>The Artisan Mindset</h2>
        <p className="lead">
          Every app is built with what Nassim Nicholas Taleb calls having <strong>&ldquo;Soul in the Game.&rdquo;</strong>{" "}
          As an artisan, I oversee the entire lifecycle of what I build, taking personal responsibility for the final utility.
          This means refusing to ship compromised, defective, or bloated products. I map how people actually work, identify where the friction occurs, and build the smallest, most direct tool to solve it.
        </p>
        <p className="muted">
          This approach is grounded in process engineering and finance transformation work at companies like <strong>Booking.com</strong>, <strong>Rituals</strong>, and <strong>VanMoof</strong>.
        </p>
      </section>

      {/* 4. Consulting CTA */}
      <section style={{ marginBottom: "1.5rem" }}>
        <ConsultCTA />
      </section>
    </div>
  );
}
