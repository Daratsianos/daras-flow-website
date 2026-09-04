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
    <section className="page-head page-end">
      <div className="wrap section-grid">
        <div className="section-side">
          <p className="label is-muted">Contact</p>
          <p className="section-note">
            Small business, team or independent professional: tell me where the
            work gets stuck. The messier, the better.
          </p>
        </div>
        <div>
          <h1 className="contact-title">Got a workflow that drives you mad?</h1>
          <FlowRule />
          <p className="contact-intro">
            Describe the annoying part in your own words: which tools, who does
            it, how often, and what goes wrong. That is enough to start.
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
          <p className="contact-alt">Based in Zaandam, near Amsterdam.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
