import type { Metadata } from "next";
import { og } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import FlowRule from "@/components/FlowRule";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got a workflow that drives you mad? Tell Panos Daratsianos where the work gets stuck and get a straight answer on whether it needs a process change, a connection between tools, a small build, or nothing at all.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: og("/contact"),
};

export default function ContactPage() {
  return (
    <section className="page-head page-end">
      <div className="wrap section-grid">
        <div className="section-side">
          <p className="label is-muted">Contact</p>
        </div>
        <div>
          <h1 className="contact-title">Got a workflow that drives you mad?</h1>
          <FlowRule />
          <p className="contact-intro">
            Whether you run a small business, lead a team or work on your own:
            describe the annoying part in your own words. That is enough to
            start.
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
  );
}
