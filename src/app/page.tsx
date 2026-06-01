import type { Metadata } from "next";
import Link from "next/link";

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
        <h1 style={{ fontSize: "2.6rem", marginBottom: "1rem", lineHeight: "1.25" }}>
          Daras Flow builds practical apps and workflow tools that reduce friction.
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "680px", color: "var(--text-muted)", marginBottom: "2rem" }}>
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
        <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
          
          <div className="card" style={{ marginBottom: 0 }}>
            <div className="card-title-group">
              <h3 className="card-title" style={{ fontSize: "1.35rem" }}>
                <a href="https://paregala.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  Ta Psonia Mas
                </a>
              </h3>
              <span className="status-badge development">Coming soon</span>
            </div>
            <p style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontWeight: "500" }}>
              A simple shared grocery list app for families.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", margin: "0 0 1rem 0" }}>
              Built for my family first to answer the constant Greek question: <em>&ldquo;Thes gala?&rdquo;</em> (Do you want milk?). 
              That is where the domain name comes from (<em>&ldquo;Pare gala&rdquo;</em> / Get milk). 
              The app translates to &ldquo;Our Groceries&rdquo; and solves a common headache: managing shared shopping lists instantly, working offline inside the supermarket, and syncing seamlessly when back online.
            </p>
            <ul className="card-notes" style={{ marginTop: "0.75rem" }}>
              <li className="card-note-item">mobile-first</li>
              <li className="card-note-item">simple shared lists</li>
              <li className="card-note-item">offline-friendly</li>
            </ul>
          </div>

          <div className="card" style={{ marginBottom: 0 }}>
            <div className="card-title-group">
              <h3 className="card-title" style={{ fontSize: "1.35rem" }}>
                <a href="https://honestcal.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  HonestCal
                </a>
              </h3>
              <span className="status-badge beta">Coming soon</span>
            </div>
            <p style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontWeight: "500" }}>
              AI-assisted calorie logging focused on realistic food tracking.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", margin: "0 0 1rem 0" }}>
              I lost 30 kilos and have kept it off for more than 6 years. I couldn&apos;t find an accurate, honest tracker that let me log fast without database bloat—so I built one. 
              Built around consistency, accuracy, and absolute honesty, the app estimates meals using AI and explicitly tells you what it assumed you ate, letting you review and adjust before logging.
            </p>
            <ul className="card-notes" style={{ marginTop: "0.75rem" }}>
              <li className="card-note-item">private food tracking</li>
              <li className="card-note-item">AI text/photo estimates</li>
              <li className="card-note-item">honest assumptions, no fake precision</li>
            </ul>
          </div>

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
      <section style={{ marginBottom: "1rem" }}>
        <div style={{ 
          backgroundColor: "var(--card-bg)", 
          border: "1px solid var(--border-color)", 
          borderRadius: "8px", 
          padding: "1.5rem"
        }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Workflow Consulting</h3>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.5" }}>
            I occasionally take on selected workflow automation and process simplification projects for businesses. 
            If you have a messy operational problem that needs a lightweight, custom tool or system integration, get in touch: <a href="mailto:panos@darasflow.com">panos@darasflow.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
