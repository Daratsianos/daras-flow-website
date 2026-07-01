export default function ChromaCard() {
  const appUrl = "https://chroma-game-beta.vercel.app";

  return (
    <div className="card flush">
      <div className="card-title-group">
        <h2 className="app-card-title">
          <a href={appUrl} target="_blank" rel="noopener noreferrer" className="app-link">
            Chroma (Paint by Number)
          </a>
        </h2>
        <span className="status-badge beta">Beta</span>
      </div>

      <p className="app-tagline">
        A relaxing paint-by-number colouring game that can turn your own family photos into colouring pages.
      </p>

      <p className="app-desc">
        Chroma is classic paint-by-number: pick a colour, fill the matching cells, and watch the picture come to life.
        The twist is that it also converts your own photos into colouring pages, so kids can colour the people they love.
      </p>

      <div className="story story-purple">
        <p>
          <strong>The Story:</strong>{" "}My daughter was hooked on a paint-by-number game, so I set out to rebuild it myself. Once the core game worked, I added the one feature the original never had: turning our own family photos into colouring pages. Watching her colour a picture of the people she loves is the best product review I have ever received.
        </p>
      </div>

      <ul className="card-notes" style={{ marginBottom: "1.5rem" }}>
        <li className="card-note-item">classic paint-by-number play</li>
        <li className="card-note-item">colour your own family photos</li>
        <li className="card-note-item">kid-friendly, runs in the browser</li>
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
      </div>
    </div>
  );
}
