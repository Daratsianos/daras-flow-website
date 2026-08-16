import type { Metadata } from "next";
import CardSorterCard from "@/components/CardSorterCard";
import PareGalaCard from "@/components/PareGalaCard";
import HonestCalCard from "@/components/HonestCalCard";
import ChromaCard from "@/components/ChromaCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Explore the simple digital tools and mobile apps developed by Daras Flow, including Card Sorter, Pare Gala, HonestCal and Chroma.",
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
        {/* App 1: Card Sorter */}
        <Reveal>
          <CardSorterCard />
        </Reveal>

        {/* App 2: Pare Gala */}
        <Reveal delay={120}>
          <PareGalaCard />
        </Reveal>

        {/* App 3: HonestCal */}
        <Reveal delay={240}>
          <HonestCalCard />
        </Reveal>

        {/* App 4: Chroma */}
        <Reveal delay={360}>
          <ChromaCard />
        </Reveal>
      </section>
    </div>
  );
}
