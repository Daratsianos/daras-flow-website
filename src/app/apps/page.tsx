import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Explore the simple digital tools and mobile apps developed by Daras Flow, including Ta Psonia Mas and HonestCal.",
};

export default function AppsPage() {
  return (
    <div className="wrapper">
      <section style={{ marginBottom: "2rem" }}>
        <h1>Our Apps</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          We focus on building lightweight, single-purpose applications that solve practical everyday problems.
          No complex interfaces, no data bloat.
        </p>
      </section>

      <section style={{ display: "grid", gap: "2rem" }}>
        {/* App 1: Ta Psonia Mas */}
        <div className="card" style={{ margin: 0 }}>
          <div className="card-title-group">
            <h2 style={{ border: "none", margin: 0, padding: 0, fontSize: "1.5rem" }}>
              <a href="https://paregala.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                Ta Psonia Mas (Our Groceries)
              </a>
            </h2>
            <span className="status-badge development">Coming soon</span>
          </div>
          
          <p style={{ fontSize: "1.05rem", color: "var(--text-main)", marginTop: "1rem", fontWeight: "500" }}>
            A shared grocery list app for families who want one simple place to manage shopping.
          </p>

          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Shopping lists get messy when multiple people edit them, or when you are in the store with poor internet connection. 
            Ta Psonia Mas focuses on solving these edge cases by providing an ultra-fast, real-time shared list that works offline inside the supermarket and auto-syncs.
          </p>

          <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "var(--accent-blue-light)", borderRadius: "8px", borderLeft: "3px solid var(--primary-blue)" }}>
            <p style={{ margin: 0, fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-main)" }}>
              <strong>The Story:</strong> I built this app for my family first. In Greek households, there is a constant, everyday question: <em>&ldquo;Thes gala?&rdquo;</em> (&ldquo;Do you want milk?&rdquo;). This running joke is where the domain name comes from (<em>&ldquo;Pare gala&rdquo;</em> / &ldquo;Get milk&rdquo;). I wanted a tool that solved this exact communication loop simply and reliably, keeping our groceries sync-clean.
            </p>
          </div>

          <ul className="card-notes" style={{ marginTop: "1.25rem" }}>
            <li className="card-note-item">mobile-first design</li>
            <li className="card-note-item">simple shared lists</li>
            <li className="card-note-item">offline-friendly goal</li>
          </ul>
        </div>

        {/* App 2: HonestCal */}
        <div className="card" style={{ margin: 0 }}>
          <div className="card-title-group">
            <h2 style={{ border: "none", margin: 0, padding: 0, fontSize: "1.5rem" }}>
              <a href="https://honestcal.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                HonestCal
              </a>
            </h2>
            <span className="status-badge beta">Coming soon</span>
          </div>

          <p style={{ fontSize: "1.05rem", color: "var(--text-main)", marginTop: "1rem", fontWeight: "500" }}>
            AI-assisted calorie logging for real meals, with review before logging.
          </p>

          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Most calorie apps demand fake precision, forcing you to search databases for exact brand names or weigh every gram. 
            HonestCal uses AI to estimate calories from natural language descriptions or meal photos, allowing you to log in seconds.
          </p>

          <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "var(--accent-green-light)", borderRadius: "8px", borderLeft: "3px solid var(--primary-green)" }}>
            <p style={{ margin: 0, fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-main)" }}>
              <strong>The Story:</strong> I lost 30 kilos and have successfully kept it off for over 6 years. During that time, I realized that consistency and honesty matter infinitely more than rigid, fake database precision. I built HonestCal because I couldn&apos;t find an accurate, bloat-free calorie app. The app uses AI to estimate your meal, and explicitly says what it assumed you ate, letting you review and adjust before logging.
            </p>
          </div>

          <ul className="card-notes" style={{ marginTop: "1.25rem" }}>
            <li className="card-note-item">private food tracking</li>
            <li className="card-note-item">AI text/photo estimates</li>
            <li className="card-note-item">honest assumptions, no fake precision</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
