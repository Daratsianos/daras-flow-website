import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vibe Coding",
  description:
    "Panos is vibe coding. Discover how AI-assisted development is used to build lightweight, practical applications quickly to solve real-world problems.",
};

export default function VibeCodingPage() {
  return (
    <div className="wrapper">
      <section style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "2rem" }}>
          Panos is vibe coding
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--primary-green)", fontWeight: "500", marginTop: "0.5rem" }}>
          I use AI-assisted development to turn annoying everyday problems into small useful apps fast.
        </p>
      </section>

      <section style={{ display: "grid", gap: "2.5rem", fontSize: "1.05rem" }}>
        {/* Section 1: What this means */}
        <div>
          <h2>What this means</h2>
          <p style={{ marginTop: "1rem" }}>
            This is not polished startup theatre. There is no pitch deck, no endless planning cycles, and no corporate committee. 
            Vibe coding is about moving directly from an observation or irritation to a working solution. 
            I see a workflow bottleneck or an everyday hassle, pair program with AI to write the code, and launch a working prototype as quickly as possible.
          </p>
          <p>
            It is a highly pragmatic approach: build something small, put it into use, test it in the real world, and improve it based on actual friction.
          </p>
        </div>

        {/* Section 2: Current experiments */}
        <div>
          <h2>Current experiments</h2>
          <p style={{ marginTop: "1rem" }}>
            These are the current active projects undergoing rapid iteration:
          </p>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1.25rem" }}>
            <div className="card" style={{ margin: 0, padding: "1.25rem" }}>
              <div className="card-title-group">
                <h3 style={{ fontSize: "1.1rem" }}>
                  <a href="https://paregala.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    Pare Gala (Our Groceries)
                  </a>
                </h3>
                <span className="status-badge beta" style={{ fontSize: "0.7rem" }}>Active PWA</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0.5rem 0 0 0" }}>
                A simple shared grocery list tool built to solve my family&apos;s daily Greek question: <em>&ldquo;Thes gala?&rdquo;</em> (Do you want milk?). Synced, offline-first list.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/apps" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  → View QR Code & Share Flow
                </Link>
              </div>
            </div>
            
            <div className="card" style={{ margin: 0, padding: "1.25rem" }}>
              <div className="card-title-group">
                <h3 style={{ fontSize: "1.1rem" }}>
                  <a href="https://honestcal.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    HonestCal
                  </a>
                </h3>
                <span className="status-badge beta" style={{ fontSize: "0.7rem" }}>Beta testing</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0.5rem 0 0 0" }}>
                A calorie estimation utility powered by LLMs, inspired by my personal experience of losing 30 kilos and keeping it off for over 6 years. Built for speed and honest tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Principles */}
        <div>
          <h2>My Principles</h2>
          <div className="how-we-work-list" style={{ marginTop: "1.25rem" }}>
            <div className="how-we-work-item">
              <span className="step-num" style={{ fontFamily: "var(--font-mono)" }}>1</span>
              <div className="step-text">
                <strong>Solve real problems:</strong> If an app doesn&apos;t save time or solve a specific annoyance, it shouldn&apos;t exist.
              </div>
            </div>
            <div className="how-we-work-item">
              <span className="step-num" style={{ fontFamily: "var(--font-mono)" }}>2</span>
              <div className="step-text">
                <strong>Ship small:</strong> Deliver a functional core on day one instead of building broad, unused systems.
              </div>
            </div>
            <div className="how-we-work-item">
              <span className="step-num" style={{ fontFamily: "var(--font-mono)" }}>3</span>
              <div className="step-text">
                <strong>Get feedback early:</strong> Test assumptions immediately with actual usage and real-world edge cases.
              </div>
            </div>
            <div className="how-we-work-item">
              <span className="step-num" style={{ fontFamily: "var(--font-mono)" }}>4</span>
              <div className="step-text">
                <strong>Keep the product simple:</strong> Maintain a minimal interface that does one job extremely well.
              </div>
            </div>
            <div className="how-we-work-item">
              <span className="step-num" style={{ fontFamily: "var(--font-mono)" }}>5</span>
              <div className="step-text">
                <strong>Avoid fake complexity:</strong> Say no to bloated architectures, complex state frameworks, and unnecessary dependencies.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
