import type { Metadata } from "next";
import PareGalaCard from "@/components/PareGalaCard";
import HonestCalCard from "@/components/HonestCalCard";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Explore the simple digital tools and mobile apps developed by Daras Flow, including Pare Gala and HonestCal.",
};

export default function AppsPage() {
  return (
    <div className="wrapper">
      <section className="page-header">
        <h1 className="hero-title">The Apps</h1>
        <p className="hero-subtitle">
          I focus on building lightweight, single-purpose applications that solve practical everyday problems.
          No complex interfaces, no data bloat.
        </p>
      </section>

      <section className="app-grid">
        {/* App 1: Pare Gala */}
        <PareGalaCard />

        {/* App 2: HonestCal */}
        <HonestCalCard />
      </section>
    </div>
  );
}
