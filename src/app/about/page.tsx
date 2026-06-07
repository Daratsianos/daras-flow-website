import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Panos",
  description:
    "Learn about Panos Daratsianos, founder of Daras Flow and process optimization and finance transformation specialist based in the Netherlands.",
};

export default function AboutPage() {
  return (
    <div className="wrapper">
      <section className="page-header">
        <h1 className="hero-title">About Panos</h1>
      </section>

      <div className="profile-container">
        <div className="profile-photo-wrapper">
          <Image
            src="/panos.png"
            alt="Panos Daratsianos"
            width={140}
            height={140}
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        <div className="profile-text">
          <p className="profile-role">Founder of Daras Flow</p>
          <p className="profile-loc">Zaandam, Netherlands</p>
        </div>
      </div>

      <section className="prose">
        <p className="prose-lead">
          I believe work should be simpler, faster, and less of a headache. My goal is that after I step in, people can say: &ldquo;Things became predictable. Maybe even boring, in the best way.&rdquo;
        </p>

        <p>
          I call myself a <strong>process optimization artisan</strong>. Inspired by Nassim Nicholas Taleb&apos;s philosophy in <em>Skin in the Game</em>, I believe the artisan model is the truest way to build software and systems. It is about having <strong>&ldquo;Soul in the Game&rdquo;</strong>—taking existential and personal pride in my labor, refusing to build compromised or bloated products, and overseeing the entire lifecycle of what I create.
        </p>

        <p>
          For me, this preserves my freedom, integrity, and antifragility. It allows me to rely directly on the market for my work, remaining free from corporate politics and bureaucratic layers. My optimization approach is grounded in scientific thinking: measure, test, learn, improve.
        </p>
        
        <p>
          Over my career, I have worked across finance operations, ERP workflows, process improvement, automation, and cross-functional projects. 
          My background includes hands-on roles at companies like <strong>Booking.com</strong>, <strong>Rituals</strong>, <strong>VanMoof</strong>, <strong>Publicis Groupe</strong>, and <strong>Hitachi Construction Machinery</strong>.
        </p>

        <p>
          For my clients and partners, this translates to efficiency, structure, and growth without unnecessary complexity. I bring curiosity, honesty, and a focus on impact over titles. Work should add to life—for you, your team, and your customers.
        </p>

        <p>
          <strong>Daras Flow</strong> is my independent software studio. It is where I build small, practical applications and run experiments using AI-assisted development. I focus entirely on usefulness, creating lightweight digital tools that solve specific, annoying everyday problems.
        </p>
      </section>
    </div>
  );
}
