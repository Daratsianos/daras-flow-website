import type { Metadata } from "next";
import PareGalaCard from "@/components/PareGalaCard";
import HonestCalCard from "@/components/HonestCalCard";
import ChromaCard from "@/components/ChromaCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Explore the simple digital tools and mobile apps developed by Daras Flow, including Pare Gala, HonestCal and Chroma.",
};

export default function AppsPage() {
  return (
    <div className="wrapper">
      <section className="page-header">
        <h1 className="hero-title">The Apps</h1>
        <p className="hero-subtitle">
          Lightweight, single-purpose apps that solve practical everyday problems.
          No complex interfaces, no data bloat.
        </p>
      </section>

      <section className="app-grid">
        {/* App 1: Pare Gala */}
        <Reveal>
          <PareGalaCard />
        </Reveal>

        {/* App 2: HonestCal */}
        <Reveal delay={120}>
          <HonestCalCard />
        </Reveal>

        {/* App 3: Chroma */}
        <Reveal delay={240}>
          <ChromaCard />
        </Reveal>
      </section>
    </div>
  );
}
