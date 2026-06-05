import type { Metadata } from "next";
import TaPsoniaMasCard from "@/components/TaPsoniaMasCard";
import HonestCalCard from "@/components/HonestCalCard";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Explore the simple digital tools and mobile apps developed by Daras Flow, including Ta Psonia Mas and HonestCal.",
};

export default function AppsPage() {
  return (
    <div className="wrapper">
      <section style={{ marginBottom: "2rem" }}>
        <h1 className="hero-title">Our Apps</h1>
        <p className="hero-subtitle">
          We focus on building lightweight, single-purpose applications that solve practical everyday problems.
          No complex interfaces, no data bloat.
        </p>
      </section>

      <section style={{ display: "grid", gap: "2rem" }}>
        {/* App 1: Ta Psonia Mas */}
        <TaPsoniaMasCard />

        {/* App 2: HonestCal */}
        <HonestCalCard />
      </section>
    </div>
  );
}
