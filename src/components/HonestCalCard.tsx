export default function HonestCalCard() {
  const appUrl = "https://honestcal.com";

  return (
    <div className="card flush">
      <div className="card-title-group">
        <h2 className="app-card-title">
          <a href={appUrl} target="_blank" rel="noopener noreferrer" className="app-link">
            HonestCal
          </a>
        </h2>
        <span className="status-badge beta">Beta</span>
      </div>

      <p className="app-tagline">
        AI-assisted calorie logging for real meals, with review before logging.
      </p>

      <p className="app-desc">
        Most calorie apps demand fake precision: searching databases for exact brands, weighing every gram.
        HonestCal uses AI to estimate calories from a description or photo, so you can log in seconds.
      </p>

      <div className="story story-green">
        <p>
          <strong>The Story:</strong>{" "}I lost 30 kilos and kept it off for over 6 years. Consistency matters more than fake database precision. I built HonestCal because I couldn&apos;t find an accurate, bloat-free calorie app: it estimates your meal with AI, shows what it assumed you ate, and lets you review and adjust before logging.
        </p>
      </div>

      <ul className="card-notes" style={{ marginBottom: "1.5rem" }}>
        <li className="card-note-item">private food tracking</li>
        <li className="card-note-item">AI text/photo estimates</li>
        <li className="card-note-item">honest assumptions, no fake precision</li>
      </ul>

      <div className="cta-group">
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Free to try
        </a>
      </div>
    </div>
  );
}
