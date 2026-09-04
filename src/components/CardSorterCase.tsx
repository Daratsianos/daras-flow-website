import { CARD_SORTER } from "@/lib/apps";

// Flagship proof: one real workflow, from bottleneck to daily use.
// Breaks the side-label grid on purpose: a full-width band, the
// before/after diagram first, four short facts under it.
// Every fact here is from the actual project. No invented savings.
export default function CardSorterCase() {
  return (
    <section id="work" className="section is-feature">
      <div className="wrap">
        <div className="feature-head">
          <p className="label is-muted">Case study</p>
          <h2 className="section-title">Card Sorter</h2>
          <p className="feature-sub">One freelancer’s bookkeeping, before and after.</p>
        </div>

        <figure
          className="fig fig-feature"
          aria-label="Before: card statement, copied by hand, categorised by hand for days, bookkeeping. After: card statement, Card Sorter, bookkeeping."
        >
          <div className="fig-row">
            <span className="label is-rust fig-tag">Before</span>
            <ol className="chain">
              <li className="chain-item">
                <span className="chain-box">Card statement</span>
              </li>
              <li className="chain-item">
                <span className="chain-box is-friction">Copy by hand</span>
              </li>
              <li className="chain-item">
                <span className="chain-box is-friction">
                  Categorise by hand, for days
                </span>
              </li>
              <li className="chain-item">
                <span className="chain-box">Bookkeeping</span>
              </li>
            </ol>
          </div>
          <div className="fig-row">
            <span className="label is-green fig-tag">After</span>
            <ol className="chain">
              <li className="chain-item">
                <span className="chain-box">Card statement</span>
              </li>
              <li className="chain-item">
                <span className="chain-box is-fix">Card Sorter</span>
              </li>
              <li className="chain-item">
                <span className="chain-box">Bookkeeping</span>
              </li>
            </ol>
          </div>
        </figure>

        <dl className="facts">
          <div>
            <dt className="label is-muted">Problem</dt>
            <dd>
              A freelancer was spending days categorising business card
              transactions by hand.
            </dd>
          </div>
          <div>
            <dt className="label is-muted">Decision</dt>
            <dd>
              Simplifying the process was not enough. The repetitive step needed
              a small tool.
            </dd>
          </div>
          <div>
            <dt className="label is-muted">Intervention</dt>
            <dd>
              Card Sorter reads the statement, organises transactions and learns
              from corrections. Built around his real workflow, improved while
              he used it.
            </dd>
          </div>
          <div>
            <dt className="label is-muted">Evidence</dt>
            <dd className="fact-evidence">Used on almost 700 real transactions.</dd>
          </div>
        </dl>

        <p className="case-prompt">Have a step like this?</p>
        <div className="case-actions">
          <a href="#contact" className="btn">
            Show me your workflow
          </a>
          <a
            href={CARD_SORTER.url}
            target="_blank"
            rel="noopener noreferrer"
            className="textlink"
          >
            Try Card Sorter<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
