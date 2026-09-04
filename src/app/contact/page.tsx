import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FlowRule from "@/components/FlowRule";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got a workflow that drives you mad? Tell Panos Daratsianos where the work gets stuck and get a straight answer on whether it needs a process change, a connection between tools, a small build, or nothing at all.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="page-head">
      <div className="wrap section-grid">
        <div className="section-side">
          <p className="label is-muted">Contact</p>
          <p className="section-note">
            Tell me where the work gets stuck. The messier, the better.
          </p>
        </div>
        <div>
          <h1 className="contact-title">Got a workflow that drives you mad?</h1>
          <FlowRule />
          <p className="contact-intro">
            Show me what’s clunky. I’ll tell you honestly whether it needs a
            process change, a connection between tools, a small build, or
            nothing at all.
          </p>
          <p className="contact-next">
            What happens next: I reply by email with a few questions, we look
            at the workflow together, and you get my view on what I would
            change.
          </p>
          <p className="contact-alt">
            Prefer email?{" "}
            <a href="mailto:panos@darasflow.com">panos@darasflow.com</a>
          </p>
          <p className="contact-alt">Based in Zaandam, near Amsterdam.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
