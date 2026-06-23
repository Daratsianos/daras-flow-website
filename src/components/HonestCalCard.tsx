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
        Most calorie apps demand fake precision, forcing you to search databases for exact brand names or weigh every gram.
        HonestCal uses AI to estimate calories from natural language descriptions or meal photos, allowing you to log in seconds.
      </p>

      <div className="story story-green">
        <p>
          <strong>The Story:</strong>{" "}I lost 30 kilos and have successfully kept it off for over 6 years. During that time, I realized that consistency and honesty matter infinitely more than rigid, fake database precision. I built HonestCal because I couldn&apos;t find an accurate, bloat-free calorie app. The app uses AI to estimate your meal, and explicitly says what it assumed you ate, letting you review and adjust before logging.
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
          Try the beta
        </a>
        <span className="cta-note">
          Free to try — paid limits after a few photos
        </span>
      </div>
    </div>
  );
}
