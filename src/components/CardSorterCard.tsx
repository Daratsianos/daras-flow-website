export default function CardSorterCard() {
  const appUrl = "https://card-sorter-one.vercel.app";

  return (
    <div className="card flush">
      <div className="card-title-group">
        <h2 className="app-card-title">
          <a href={appUrl} target="_blank" rel="noopener noreferrer" className="app-link">
            Card Sorter
          </a>
        </h2>
        <span className="status-badge beta">Beta</span>
      </div>

      <p className="app-tagline">
        Turn business credit-card statements into categorized, bookkeeping-ready data.
      </p>

      <p className="app-desc">
        Upload a credit-card statement, review and correct the transactions, and turn it into organized data ready for bookkeeping.
      </p>

      <div className="story story-sky">
        <p>
          <strong>The Story:</strong>{" "}I met a freelancer who was spending days manually sorting business credit-card transactions for his bookkeeping. I built Card Sorter around his actual workflow and improved it while he used it. It ended up processing almost 700 real transactions and, most importantly, solved the problem he had asked me to solve.
        </p>
      </div>

      <ul className="card-notes" style={{ marginBottom: "1.5rem" }}>
        <li className="card-note-item">reads and organizes transactions</li>
        <li className="card-note-item">learns from your corrections</li>
        <li className="card-note-item">bookkeeping-ready output</li>
      </ul>

      <div className="cta-group">
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Try Card Sorter
        </a>
      </div>
    </div>
  );
}
