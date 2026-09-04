import type { Metadata } from "next";
import { og } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Privacy policy for the Daras Flow website and apps. Only necessary data is collected, nothing is sold, and deletion requests are honoured.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: og("/privacy"),
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="label is-muted" style={{ marginBottom: "1.5rem" }}>
            Effective date: 1 June 2026
          </p>
          <h1 className="page-title">Privacy policy</h1>
        </div>
      </section>

      <section className="wrap">
        <div className="prose">
          <p>
            Daras Flow operates this website and a few small software
            applications. We keep things simple, including how we handle your
            personal information.
          </p>

          <h2>1. Data collection</h2>
          <p>
            We only collect data that is strictly required for core app
            functionality and a stable user experience. Many of our tools run
            locally on your device or use minimal cloud synchronisation. We do
            not profile users.
          </p>
          <p>
            This website uses Vercel Web Analytics, which counts page views in
            aggregate without cookies or personal profiles. Messages sent
            through the contact form are processed by Formspree and delivered
            to panos@darasflow.com by email; they are used only to reply to
            you.
          </p>

          <h2>2. Data use and sharing</h2>
          <p>
            We do not sell, rent or trade your personal data to third parties
            under any circumstances. We do not use your information for
            marketing or advertisement targeting.
          </p>

          <h2>3. Your rights and data deletion</h2>
          <p>
            You have full control over your data. If you have privacy questions,
            want to know what data we hold, or want your account or data
            deleted, contact us directly and we will take care of it.
          </p>

          <h2>4. App-specific privacy</h2>
          <p>
            Specific details about data storage and transmission in individual
            apps (Card Sorter, Pare Gala, HonestCal or Chroma) are provided
            inside each application.
          </p>

          <h2>Contact</h2>
          <p>
            For all privacy-related requests and questions:{" "}
            <a href="mailto:panos@darasflow.com">panos@darasflow.com</a>
            <br />
            Daras Flow, Zaandam, Netherlands
          </p>
        </div>
      </section>
    </>
  );
}
