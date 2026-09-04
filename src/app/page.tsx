import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FlowDrawing from "@/components/FlowDrawing";
import FlowRule from "@/components/FlowRule";
import CardSorterCase from "@/components/CardSorterCase";
import ContactForm from "@/components/ContactForm";
import { apps, labOnly } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Daras Flow | Fix the workflow. Build only what’s needed.",
  description:
    "Workflow improvement for small businesses, teams and independent professionals. Panos Daratsianos maps how the work actually happens, finds the friction, and chooses the smallest fix: a better process, an automation, or a small tool between two systems.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://darasflow.com/#organization",
      name: "Daras Flow",
      url: "https://darasflow.com",
      logo: "https://darasflow.com/logo.png",
      email: "panos@darasflow.com",
      description:
        "Workflow improvement practice of Panos Daratsianos. Helps small businesses and teams remove friction from the way they work: better processes, automation, integrations and small purpose-built tools.",
      founder: { "@id": "https://darasflow.com/#panos" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zaandam",
        addressCountry: "NL",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://darasflow.com/#website",
      url: "https://darasflow.com",
      name: "Daras Flow",
      publisher: { "@id": "https://darasflow.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://darasflow.com/#panos",
      name: "Panos Daratsianos",
      jobTitle: "Workflow improvement, Daras Flow",
      description:
        "Process and workflow improvement specialist who can also build the missing piece of software when one is needed.",
      url: "https://darasflow.com/about",
      worksFor: { "@id": "https://darasflow.com/#organization" },
      sameAs: [
        "https://www.linkedin.com/in/panos-daratsianos-48279955/",
        "https://github.com/Daratsianos",
      ],
    },
    ...apps.map((app) => ({
      "@type": "SoftwareApplication",
      name: app.name,
      applicationCategory: app.schema.applicationCategory,
      operatingSystem: app.schema.operatingSystem,
      url: app.url,
      ...(app.playUrl ? { installUrl: app.playUrl } : {}),
      description: app.schema.description,
      publisher: { "@id": "https://darasflow.com/#organization" },
    })),
  ],
};

const SITUATIONS = [
  {
    q: "Too much copying between systems.",
    a: "Usually one import or integration step. Occasionally, one system fewer.",
  },
  {
    q: "An important process still lives in spreadsheets and email.",
    a: "That is often fine. What it needs is structure and one shared place, not a platform.",
  },
  {
    q: "The systems work, except for one horrible manual step in the middle.",
    a: "The classic small build: a bridge between two tools that were never introduced to each other.",
  },
  {
    q: "We keep doing the same administrative work again and again.",
    a: "First check whether the work still needs doing at all. Then automate what is left.",
  },
  {
    q: "Our customer intake, booking or admin process has grown messy.",
    a: "Map it as it really runs, cut the extra handoffs, then decide whether a form or a tool is needed.",
  },
  {
    q: "We think we need software, but we’re not sure.",
    a: "Good. Let’s find out before anyone builds anything.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section className="hero">
        <div className="wrap">
          <p className="label is-muted hero-eyebrow">
            Workflow improvement for small businesses
          </p>
          <h1 className="hero-title">
            Fix the workflow.{" "}
            <br />
            Build only what’s&nbsp;needed.
          </h1>
          <div className="hero-grid">
            <div>
              <p className="hero-deck">
                I help small businesses and teams remove friction from the way
                they work. Sometimes the answer is a better process. Sometimes
                it’s automation. Sometimes there’s a missing tool between two
                systems, so I build it. I start with the problem, not the
                technology.
              </p>
              <div className="hero-actions">
                <Link href="#contact" className="btn">
                  Show me your workflow
                </Link>
                <Link href="#approach" className="textlink">
                  See how I work
                </Link>
              </div>
            </div>
            <aside className="hero-aside">
              <p className="label is-muted">Typical starting points</p>
              <ul className="hero-list">
                <li>
                  The same information gets typed into email, a spreadsheet and
                  another system by hand.
                </li>
                <li>
                  Two tools almost work together, except for one painful manual
                  step in between.
                </li>
                <li>
                  Customer intake or administration runs on messages,
                  spreadsheets and chasing people.
                </li>
              </ul>
              <Link href="#problems" className="textlink">
                More situations
              </Link>
            </aside>
          </div>
          <FlowDrawing />
        </div>
      </section>

      {/* 2. Approach */}
      <section id="approach" className="section">
        <div className="wrap section-grid">
          <div className="section-side">
            <p className="label is-muted">Approach</p>
          </div>
          <div>
            <h2 className="section-title">Start with the workflow.</h2>
            <ol className="steps">
              <li className="step">
                <span className="step-node" aria-hidden="true" />
                <h3 className="step-title">Understand</h3>
                <div className="step-body">
                  <p className="step-q">How does the work actually happen?</p>
                  <p>
                    Not the process on paper. The one people do on a Tuesday
                    afternoon, workarounds included.
                  </p>
                </div>
              </li>
              <li className="step">
                <span className="step-node" aria-hidden="true" />
                <h3 className="step-title">Simplify</h3>
                <div className="step-body">
                  <p className="step-q">
                    What can be removed, changed or standardised?
                  </p>
                  <p>Most of the friction goes here, before anything gets built.</p>
                </div>
              </li>
              <li className="step">
                <span className="step-node is-optional" aria-hidden="true" />
                <h3 className="step-title">
                  Build, <span className="step-optional">if&nbsp;needed</span>
                </h3>
                <div className="step-body">
                  <p className="step-q">What is still missing after simplifying?</p>
                  <p>
                    An automation, an integration, a small piece of software, a
                    form, an interface or a website. Only the piece that is
                    missing.
                  </p>
                </div>
              </li>
              <li className="step">
                <span className="step-node" aria-hidden="true" />
                <h3 className="step-title">Test</h3>
                <div className="step-body">
                  <p className="step-q">
                    Does the new workflow actually work better for the people
                    using it?
                  </p>
                  <p>
                    Checked on real work, with the people who do it. Then
                    adjusted.
                  </p>
                </div>
              </li>
            </ol>
            <p className="approach-close">
              The goal is not more software. The goal is less friction.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Flagship case study */}
      <CardSorterCase />

      {/* 4. Diagnostic: recognisable situations */}
      <section id="problems" className="section">
        <div className="wrap section-grid">
          <div className="section-side">
            <p className="label is-muted">Problems</p>
            <p className="section-note">
              If one of these is yours, that is usually where we start.
            </p>
          </div>
          <div>
            <h2 className="section-title">Sound familiar?</h2>
            <ul className="situations">
              {SITUATIONS.map((s) => (
                <li key={s.q} className="situation">
                  <p className="situation-q">“{s.q}”</p>
                  <p className="situation-a">{s.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Why me */}
      <section id="why" className="section">
        <div className="wrap section-grid">
          <div className="section-side">
            <p className="label is-muted">Why me</p>
          </div>
          <div>
            <h2 className="section-title">
              The part between the recommendation and the build.
            </h2>
            <dl className="ledger">
              <div className="ledger-row compare-row">
                <dt className="compare-who">A process consultant</dt>
                <dd className="compare-what">
                  Finds the problem. Writes the recommendation.
                </dd>
              </div>
              <div className="ledger-row compare-row">
                <dt className="compare-who">A developer</dt>
                <dd className="compare-what">Builds what they are asked to build.</dd>
              </div>
              <div className="ledger-row compare-row is-us">
                <dt className="compare-who">Me</dt>
                <dd className="compare-what">
                  Works out what is actually happening, decides what should
                  change, and builds the missing piece when it is needed.
                </dd>
              </div>
            </dl>
            <p className="cred">
              <span className="label is-muted">Background</span>
              <span>
                Years of process improvement, finance transformation,
                operational workflows, systems and automation inside{" "}
                <strong>Booking.com</strong>, <strong>Rituals</strong>,{" "}
                <strong>VanMoof</strong> and <strong>Hitachi</strong>.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Lab */}
      <section id="lab" className="section">
        <div className="wrap section-grid">
          <div className="section-side">
            <p className="label is-muted">Lab</p>
            <p className="section-note">
              Small apps built on the side. They show curiosity, product sense
              and that I finish things.
            </p>
          </div>
          <div>
            <h2 className="section-title">From the Lab.</h2>
            <ul className="lab-list">
              {labOnly.map((app) => (
                <li key={app.slug} className="lab-item">
                  <span className="lab-name">
                    <a href={app.url} target="_blank" rel="noopener noreferrer">
                      {app.name}
                    </a>
                  </span>
                  <span className="lab-desc">{app.tagline}</span>
                  <span className="label is-muted">{app.status}</span>
                </li>
              ))}
            </ul>
            <p className="lab-foot">
              <Link href="/lab" className="textlink">
                Everything in the Lab
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 7. About */}
      <section id="about" className="section">
        <div className="wrap section-grid">
          <div className="section-side">
            <p className="label is-muted">About</p>
          </div>
          <div>
            <h2 className="section-title">Panos Daratsianos</h2>
            <div className="about-teaser">
              <Image
                src="/panos.png"
                alt="Panos Daratsianos"
                width={272}
                height={272}
                className="about-photo"
                sizes="136px"
              />
              <div className="about-text">
                <p>
                  I like owning the whole problem, from understanding how the
                  work actually happens to testing whether the fix works in
                  reality. I map how people actually work, find what slows them
                  down, and choose the smallest intervention that solves it.
                </p>
                <p>
                  <Link href="/about" className="textlink">
                    More about Panos
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact */}
      <section id="contact" className="section">
        <div className="wrap section-grid">
          <div className="section-side">
            <p className="label is-muted">Contact</p>
          </div>
          <div>
            <h2 className="contact-title">Got a workflow that drives you mad?</h2>
            <FlowRule />
            <p className="contact-intro">
              Show me what’s clunky and where the work gets stuck, in your own
              words.
            </p>
            <p className="contact-next">
              I’ll reply with a few questions. If I think I can help, I’ll tell
              you what I’d tackle first and what working together could look
              like.
            </p>
            <p className="contact-alt">
              Prefer email?{" "}
              <a href="mailto:panos@darasflow.com">panos@darasflow.com</a>
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
