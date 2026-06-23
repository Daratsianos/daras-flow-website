import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Vibe Coding",
  description:
    "Panos is vibe coding. Discover how AI-assisted development is used to build lightweight, practical applications quickly to solve real-world problems.",
};

export default function VibeCodingPage() {
  return (
    <div className="wrapper">
      <section className="page-header">
        <h1 className="hero-title" style={{ fontFamily: "var(--font-mono)" }}>
          Panos is vibe coding
        </h1>
        <p className="hero-subtitle" style={{ color: "var(--primary-green)" }}>
          I use AI-assisted development to turn annoying everyday problems into small useful apps fast.
        </p>
      </section>

      <section className="sections">
        {/* Section 1: What this means */}
        <Reveal>
        <div>
          <h2>What this means</h2>
          <p>
            This is not polished startup theatre. There is no pitch deck, no endless planning cycles, and no corporate committee.
            Vibe coding is about moving directly from an observation or irritation to a working solution.
            I see a workflow bottleneck or an everyday hassle, pair program with AI to write the code, and launch a working prototype as quickly as possible.
          </p>
          <p>
            It is a highly pragmatic approach: build something small, put it into use, test it in the real world, and improve it based on actual friction.
          </p>
        </div>
        </Reveal>

        {/* Section 2: Current experiments */}
        <Reveal>
        <div>
          <h2>Current experiments</h2>
          <p>
            These are the current active projects undergoing rapid iteration:
          </p>
          <div className="experiment-grid">
            <div className="card card-compact">
              <div className="card-title-group">
                <h3 className="card-title-sm">
                  <a href="https://paregala.com" target="_blank" rel="noopener noreferrer" className="app-link">
                    Pare Gala (Our Groceries)
                  </a>
                </h3>
                <span className="status-badge beta">Active PWA</span>
              </div>
              <p className="card-desc-sm">
                A simple shared grocery list tool built to solve my family&apos;s daily Greek question: <em>&ldquo;Thes gala?&rdquo;</em> (Do you want milk?). Instantly synced list.
              </p>
              <div className="card-action">
                <a
                  href="https://play.google.com/store/apps/details?id=app.paregala.twa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  → Get it on Google Play
                </a>
              </div>
            </div>

            <div className="card card-compact">
              <div className="card-title-group">
                <h3 className="card-title-sm">
                  <a href="https://honestcal.com" target="_blank" rel="noopener noreferrer" className="app-link">
                    HonestCal
                  </a>
                </h3>
                <span className="status-badge beta">Beta</span>
              </div>
              <p className="card-desc-sm">
                A calorie estimation utility powered by LLMs, inspired by my personal experience of losing 30 kilos and keeping it off for over 6 years. Built for speed and honest tracking.
              </p>
              <div className="card-action">
                <a
                  href="https://honestcal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  → Try the beta
                </a>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Section 3: Principles */}
        <Reveal>
        <div>
          <h2>My Principles</h2>
          <div className="how-we-work-list mono" style={{ marginTop: "1.25rem" }}>
            <div className="how-we-work-item">
              <span className="step-num">1</span>
              <div className="step-text">
                <strong>Solve real problems:</strong>{" "}If an app doesn&apos;t save time or solve a specific annoyance, it shouldn&apos;t exist.
              </div>
            </div>
            <div className="how-we-work-item">
              <span className="step-num">2</span>
              <div className="step-text">
                <strong>Ship small:</strong>{" "}Deliver a functional core on day one instead of building broad, unused systems.
              </div>
            </div>
            <div className="how-we-work-item">
              <span className="step-num">3</span>
              <div className="step-text">
                <strong>Get feedback early:</strong>{" "}Test assumptions immediately with actual usage and real-world edge cases.
              </div>
            </div>
            <div className="how-we-work-item">
              <span className="step-num">4</span>
              <div className="step-text">
                <strong>Keep the product simple:</strong>{" "}Maintain a minimal interface that does one job extremely well.
              </div>
            </div>
            <div className="how-we-work-item">
              <span className="step-num">5</span>
              <div className="step-text">
                <strong>Avoid fake complexity:</strong>{" "}Say no to bloated architectures, complex state frameworks, and unnecessary dependencies.
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
