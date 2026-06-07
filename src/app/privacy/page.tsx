import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Daras Flow apps and websites. We respect your data privacy, collect only necessary information, and never sell personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="wrapper">
      <section className="page-header">
        <h1>Privacy Policy</h1>
        <p className="muted">Effective date: June 1, 2026</p>
      </section>

      <section className="prose">
        <p>
          At Daras Flow, we operate small, lightweight software applications and marketing websites. 
          We believe in keeping things simple, including how we handle your personal information.
        </p>

        <div>
          <h2 className="subheading">1. Data Collection</h2>
          <p>
            We only collect data that is strictly required for core app functionality and to ensure a stable user experience. 
            Many of our tools run locally on your device or utilize minimal cloud synchronization. We do not engage in silent background tracking or profile users.
          </p>
        </div>

        <div>
          <h2 className="subheading">2. Data Use and Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal data to third parties under any circumstances. 
            We do not use your information for marketing or advertisement targeting.
          </p>
        </div>

        <div>
          <h2 className="subheading">3. Your Rights & Data Deletion</h2>
          <p>
            You have full control over your data. If you have any privacy questions, want to know what data we hold, or wish to request the immediate deletion of your account or data, please contact us directly.
          </p>
        </div>

        <div>
          <h2 className="subheading">4. App-Specific Privacy</h2>
          <p>
            Specific details regarding the data storage and transmission of individual apps (like <em>Pare Gala</em> or <em>HonestCal</em>) will be detailed inside those respective applications or expanded on this page as they transition from development to public release.
          </p>
        </div>

        <div className="card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Contact Us</h3>
          <p style={{ margin: 0, fontSize: "0.95rem" }}>
            For all privacy-related requests and questions, please reach out to:
          </p>
          <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.95rem" }}>
            <strong>Email:</strong> <a href="mailto:panos@darasflow.com">panos@darasflow.com</a>
          </p>
          <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.95rem" }}>
            <strong>Location:</strong> Zaandam, Netherlands
          </p>
        </div>
      </section>
    </div>
  );
}
