import Link from "next/link";
import { CARD_SORTER } from "@/lib/apps";

// Flagship case study: evidence of the method, not an app showcase.
// Every fact here is from the actual project. No invented savings.
export default function CardSorterCase() {
  return (
    <section id="work" className="section">
      <div className="wrap section-grid">
        <div className="section-side">
          <p className="label is-muted">Case study</p>
          <p className="section-note">
            One real workflow, followed from the bottleneck to a fix that held
            up in daily use.
          </p>
        </div>

        <div>
          <h2 className="section-title">Card Sorter</h2>
          <p className="lede">
            A freelancer was spending days sorting business credit-card
            transactions by hand.
          </p>

          <dl className="ledger">
            <div className="ledger-row">
              <dt className="label is-muted ledger-key">Problem</dt>
              <dd className="ledger-val">
                Every card statement had to be categorised transaction by
                transaction before it could go to the bookkeeper. It took days,
                and it kept coming back.
              </dd>
            </div>
            <div className="ledger-row">
              <dt className="label is-muted ledger-key">Workflow</dt>
              <dd className="ledger-val">
                I looked at how he actually did the work and where the
                repetitive bottleneck sat: the same categorising, again and
                again, by hand.
              </dd>
            </div>
            <div className="ledger-row">
              <dt className="label is-muted ledger-key">Decision</dt>
              <dd className="ledger-val">
                Process changes alone would not remove enough of the work. A
                lightweight tool was justified.
              </dd>
            </div>
            <div className="ledger-row">
              <dt className="label is-muted ledger-key">Intervention</dt>
              <dd className="ledger-val">
                Card Sorter, built around his real workflow and improved while
                he used it. It reads an uploaded statement, organises the
                transactions, learns from his corrections and hands over
                bookkeeping-ready data. Nothing more: no bank connection, no
                accounting suite. Just the step that hurt.
              </dd>
            </div>
            <div className="ledger-row">
              <dt className="label is-muted ledger-key">Evidence</dt>
              <dd className="ledger-val">
                Used on <span className="evidence-figure">almost 700</span> real
                transactions in his actual bookkeeping, with the tool adjusted
                along the way.
              </dd>
            </div>
          </dl>

          <figure className="fig">
            <figcaption className="label is-muted fig-caption">
              Fig. 1 · The step that changed
            </figcaption>
            <div className="fig-row">
              <span className="label is-rust fig-tag">Before</span>
              <ol className="chain">
                <li className="chain-item">
                  <span className="chain-box">Card statement</span>
                </li>
                <li className="chain-item">
                  <span className="chain-box is-friction">Copy into a sheet</span>
                </li>
                <li className="chain-item">
                  <span className="chain-box is-friction">Sort by hand, for days</span>
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
                  <span className="chain-box is-fix">
                    Card Sorter
                    <small>learns from corrections</small>
                  </span>
                </li>
                <li className="chain-item">
                  <span className="chain-box">Bookkeeping</span>
                </li>
              </ol>
            </div>
          </figure>

          <div className="case-actions">
            <Link href="#contact" className="btn">
              Have a step like this? Show me your workflow
            </Link>
            <a
              href={CARD_SORTER.url}
              target="_blank"
              rel="noopener noreferrer"
              className="textlink"
            >
              Try Card Sorter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
