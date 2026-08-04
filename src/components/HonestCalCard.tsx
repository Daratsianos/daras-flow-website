import GooglePlayBadge from "@/components/GooglePlayBadge";

export default function HonestCalCard() {
  const websiteUrl = "https://honestcal.com";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.honestcal.app";

  return (
    <div className="card flush">
      <div className="card-title-group">
        <h2 className="app-card-title">
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="app-link">
            HonestCal
          </a>
        </h2>
        <span className="status-badge beta">Android app</span>
      </div>

      <p className="app-tagline">
        Snap your meal. Get fast calorie and macro estimates without fake precision.
      </p>

      <p className="app-desc">
        Take a photo, describe what you ate, or scan a barcode. HonestCal estimates calories, protein, carbs, fat, and fiber,
        then shows its confidence and assumptions so you can review the result before logging it.
      </p>

      <div className="story story-green">
        <p>
          <strong>The Story:</strong>{" "}I lost 30 kilos and have successfully kept it off for over 6 years. During that time, I realized that consistency and honesty matter infinitely more than rigid, fake database precision. I built HonestCal because I couldn&apos;t find an accurate, bloat-free calorie app. The app uses AI to estimate your meal, and explicitly says what it assumed you ate, letting you review and adjust before logging.
        </p>
      </div>

      <ul className="card-notes" style={{ marginBottom: "1.5rem" }}>
        <li className="card-note-item">AI photo &amp; text estimates</li>
        <li className="card-note-item">barcode scanning</li>
        <li className="card-note-item">6 languages</li>
      </ul>

      <div className="cta-group app-store-actions">
        <GooglePlayBadge href={playStoreUrl} appName="HonestCal" />
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary app-browser-link"
        >
          Open in browser
        </a>
      </div>
    </div>
  );
}
