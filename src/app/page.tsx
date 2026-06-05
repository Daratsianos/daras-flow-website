import type { Metadata } from "next";
import Link from "next/link";
import TaPsoniaMasCard from "@/components/TaPsoniaMasCard";
import HonestCalCard from "@/components/HonestCalCard";

export const metadata: Metadata = {
  title: "Daras Flow | Practical Apps & Workflow Tools",
  description:
    "Daras Flow builds simple, lightweight digital tools and workflow automations to reduce everyday friction. Discover our apps HonestCal and Ta Psonia Mas.",
};

export default function Home() {
  return (
    <div className="wrapper">
      {/* 1. Hero Section */}
      <section style={{ marginBottom: "3.5rem", paddingTop: "1rem" }}>
        <h1 className="hero-title">
          Daras Flow builds practical apps and workflow tools that reduce friction.
        </h1>
        <p className="hero-subtitle">
          Lightweight, single-purpose digital tools designed to make everyday operations and daily life less clunky. 
          Built with an optimization mindset by Panos Daratsianos.
        </p>
        
        {/* 2. Main CTA */}
        <div className="cta-group">
          <Link href="#apps" className="btn btn-primary">
            Try the apps
          </Link>
          <Link href="/about" className="btn btn-secondary">
            About the founder
          </Link>
        </div>
      </section>

      {/* 3. App Showcase Section */}
      <section id="apps" style={{ marginBottom: "4rem", scrollMarginTop: "6rem" }}>
        <h2>Our Apps</h2>
        <div style={{ marginTop: "1.5rem", display: "grid", gap: "2rem" }}>
          <TaPsoniaMasCard />
          <HonestCalCard />
        </div>
      </section>

      {/* 4. Credibility / Methodology Section */}
      <section style={{ marginBottom: "4rem" }}>
        <h2>The Artisan Mindset</h2>
        <p style={{ color: "var(--text-main)", fontSize: "1.05rem", marginTop: "1rem" }}>
          Every app is built with what Nassim Nicholas Taleb calls having <strong>&ldquo;Soul in the Game.&rdquo;</strong> 
          As an artisan, I oversee the entire lifecycle of what I build, taking personal responsibility for the final utility. 
          This means refusing to ship compromised, defective, or bloated products. We map how people actually work, identify where the friction occurs, and build the smallest, most direct tool to solve it.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
          This approach is grounded in process engineering and finance transformation work at companies like <strong>Booking.com</strong>, <strong>Rituals</strong>, and <strong>VanMoof</strong>.
        </p>
      </section>

      {/* 5. Tiny Consulting Note */}
      <section style={{ marginBottom: "1.5rem" }}>
        <div className="card" style={{ margin: 0, padding: "1.75rem" }}>
          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>Workflow Consulting</h3>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
            I occasionally take on selected workflow automation and process simplification projects for businesses. 
            If you have a messy operational problem that needs a lightweight, custom tool or system integration, get in touch: <a href="mailto:panos@darasflow.com">panos@darasflow.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
