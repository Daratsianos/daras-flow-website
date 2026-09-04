import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FlowRule from "@/components/FlowRule";

export const metadata: Metadata = {
  title: "About Panos",
  description:
    "Panos Daratsianos runs Daras Flow from Zaandam, the Netherlands: a workflow improvement practice that maps how work actually happens, finds the friction and chooses the smallest fix, building it when needed.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="label is-muted" style={{ marginBottom: "1.5rem" }}>
            About
          </p>
          <h1 className="page-title">Panos Daratsianos</h1>
          <FlowRule />
        </div>
      </section>

      <section className="wrap about-grid">
        <aside className="about-side">
          <Image
            src="/panos.png"
            alt="Panos Daratsianos"
            width={320}
            height={320}
            className="profile-photo"
            sizes="160px"
            priority
          />
          <div className="about-facts">
            <p className="profile-role">Runs Daras Flow</p>
            <p className="profile-loc">Zaandam, Netherlands</p>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/panos-daratsianos-48279955/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8h4.6v14H.2V8zm7.4 0h4.42v1.92h.06c.62-1.17 2.13-2.4 4.38-2.4 4.68 0 5.54 3.08 5.54 7.09V22h-4.6v-6.2c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.62-2.39 3.29V22H7.6V8z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Daratsianos"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.86.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.64-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.61-.02 2.9-.02 3.29 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </div>
          <div className="experience">
            <p className="label is-muted">Experience</p>
            <p>
              <strong>Booking.com</strong>
              <br />
              <strong>Rituals</strong>
              <br />
              <strong>VanMoof</strong>
              <br />
              <strong>Hitachi</strong>
            </p>
            <p className="experience-note">
              Process improvement, finance transformation, operational
              workflows, systems and automation.
            </p>
          </div>
        </aside>

        <div>
          <div className="prose">
            <p className="prose-lead">
              I believe work should be simpler and less of a headache. My goal
              is that after I step in, people can say: “Things became
              predictable. Maybe even boring, in the best way.”
            </p>
            <p>
              I call myself a <strong>process optimization artisan</strong>. I
              take personal pride in the work, refuse to ship compromised or
              bloated solutions, and own the entire lifecycle of what I make,
              from understanding the problem to the last adjustment.
            </p>
            <p>
              My way of working is simple. I map how people actually work,
              identify what slows them down, and choose the smallest
              intervention that solves it. Sometimes that means changing the
              process. Sometimes it means connecting tools that already exist.
              Sometimes it means building something. Software is one possible
              answer, and I only reach for it when the workflow asks for it.
            </p>
            <p>
              That comes from years of hands-on work in finance operations, ERP
              workflows, process improvement and automation, inside fast-moving
              product, finance and operations teams. The approach stays
              scientific: measure, test, learn, improve.
            </p>
            <p>
              Daras Flow is my independent practice. I rely directly on the
              market for my work, which keeps me free of corporate politics. On
              the side I run a <Link href="/lab">Lab</Link> of small apps,
              built with AI-assisted development, mostly to scratch my own
              itches. It keeps me honest about what building actually costs, and
              about when it is not the answer.
            </p>
          </div>

          <div className="page-cta">
            <p>Got a workflow that drives you mad?</p>
            <Link href="/contact" className="btn">
              Show me your workflow
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
