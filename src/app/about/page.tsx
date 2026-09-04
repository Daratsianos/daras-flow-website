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
          <dl className="scan">
            <div>
              <dt className="label is-muted">How I think</dt>
              <dd>Process first. Technology second.</dd>
            </div>
            <div>
              <dt className="label is-muted">Background</dt>
              <dd>Booking.com · Rituals · VanMoof · Hitachi</dd>
            </div>
            <div>
              <dt className="label is-muted">How I work</dt>
              <dd>Measure. Test. Learn. Improve.</dd>
            </div>
          </dl>
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
            <p className="profile-role">Daras Flow · workflow improvement</p>
            <p className="profile-loc">Zaandam, near Amsterdam</p>
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
          </div>
          <p className="about-facts">
            <a
              href="https://github.com/Daratsianos"
              target="_blank"
              rel="noopener noreferrer"
              className="textlink"
            >
              Code on GitHub
            </a>
          </p>
        </aside>

        <div>
          <div className="prose">
            <p className="prose-lead">
              I believe work should be simpler and less of a headache. My goal
              is that after I step in, people can say: “Things became
              predictable. Maybe even boring, in the best way.”
            </p>
            <p>
              I call myself a process optimization artisan. I like owning the
              whole problem, from understanding how the work actually happens
              to testing whether the fix works in reality.
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
              product, finance and operations teams.
            </p>
            <p>
              Daras Flow is my independent practice, for small businesses,
              teams and independent professionals. On the side I run a{" "}
              <Link href="/lab">Lab</Link> of small apps, built with
              AI-assisted development, mostly to scratch my own itches. It keeps
              me honest about what building actually costs, and about when it
              is not the answer.
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
