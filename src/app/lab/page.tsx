import type { Metadata } from "next";
import Link from "next/link";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import FlowRule from "@/components/FlowRule";
import { labOnly } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Small apps Panos Daratsianos built because something was missing: Pare Gala, HonestCal and Chroma, plus Card Sorter, which became the workflow case study. Side projects that show curiosity, product sense and finishing things.",
  alternates: {
    canonical: "/lab",
  },
};

export default function LabPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="label is-muted" style={{ marginBottom: "1.5rem" }}>
            Lab
          </p>
          <h1 className="page-title" style={{ maxWidth: "24ch" }}>
            Small things I built{" "}
            <br />
            because they were missing.
          </h1>
          <FlowRule />
          <p className="page-intro">
            Side projects, each one started by a real itch of my own or of
            someone close to me. They show curiosity, product sense and that I
            actually ship things. The workflow work is the practice; this is
            the workshop behind it.
          </p>
        </div>
      </section>

      <section className="wrap" aria-label="Apps">
        <ul className="apps">
          {labOnly.map((app) => (
            <li key={app.slug} className="app">
              <div className="app-side">
                <span className="label is-muted">{app.status}</span>
              </div>
              <div>
                <h2 className="app-name">
                  <a href={app.url} target="_blank" rel="noopener noreferrer">
                    {app.name}
                  </a>
                </h2>
                <p className="app-tagline">{app.tagline}</p>
                <p className="app-story">{app.story}</p>
                <div className="app-actions">
                  {app.playUrl ? (
                    <GooglePlayBadge href={app.playUrl} appName={app.name} />
                  ) : null}
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn is-secondary"
                  >
                    {app.tryLabel}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="lab-pointer">
          <strong>Card Sorter</strong>
          <span>
            started here too, for a freelancer drowning in card statements. It
            became the case study.
          </span>
          <Link href="/#work" className="textlink">
            Read the case study
          </Link>
        </p>
      </section>

      <section className="section" id="how-i-build">
        <div className="wrap section-grid">
          <div className="section-side">
            <p className="label is-muted">How these get built</p>
          </div>
          <div>
            <h2 className="section-title">Small, fast, and tested on real use.</h2>
            <div className="prose" style={{ marginTop: "1.25rem" }}>
              <p>
                Each of these started with one specific annoyance and shipped
                as the smallest version that removed it. A working version goes
                into real use within days and gets improved on actual friction,
                not on a plan. That is the same reason a small workflow fix for
                a client can stay small.
              </p>
            </div>
            <div className="page-cta">
              <p>Got a workflow problem rather than an app idea?</p>
              <Link href="/contact" className="btn">
                Show me your workflow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
