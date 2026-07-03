import GooglePlayBadge from "@/components/GooglePlayBadge";

export default function PareGalaCard() {
  const appUrl = "https://paregala.com";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=app.paregala.twa";

  return (
    <div className="card flush">
      <div className="card-title-group">
        <h2 className="app-card-title">
          <a href={appUrl} target="_blank" rel="noopener noreferrer" className="app-link">
            Pare Gala (Our Groceries)
          </a>
        </h2>
        <span className="status-badge beta">On Google Play</span>
      </div>

      <p className="app-tagline">
        A shared grocery list app for families who want one simple place to manage shopping.
      </p>

      <p className="app-desc">
        Shopping lists get messy with multiple editors and spotty store wifi.
        Pare Gala fixes that with an ultra-fast, real-time shared list.
      </p>

      <div className="story story-blue">
        <p>
          <strong>The Story:</strong> I built this app to solve a classic Greek household emergency: the last-minute shout from home, <em>&ldquo;Pare gala!&rdquo;</em>{" "}(&ldquo;Get milk!&rdquo;)&mdash;that&apos;s where the name comes from. I wanted a simple tool that syncs family shopping lists instantly, so no one ever forgets the milk.
        </p>
      </div>

      <ul className="card-notes" style={{ marginBottom: "1.5rem" }}>
        <li className="card-note-item">mobile-first design</li>
        <li className="card-note-item">simple shared lists</li>
        <li className="card-note-item">Android &amp; web (PWA)</li>
      </ul>

      <div className="cta-group">
        <GooglePlayBadge href={playStoreUrl} appName="Pare Gala" />
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          Open in browser
        </a>
      </div>
    </div>
  );
}
