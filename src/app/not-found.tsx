import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="page-head page-end">
      <div className="wrap">
        <p className="label is-muted" style={{ marginBottom: "1.5rem" }}>
          404
        </p>
        <h1 className="page-title">That page does not exist.</h1>
        <p className="page-intro">
          The address may be old or mistyped. Everything on the site is one of
          these:
        </p>
        <p className="page-intro" style={{ marginTop: "1rem" }}>
          <Link href="/">Home</Link> · <Link href="/lab">Lab</Link> ·{" "}
          <Link href="/about">About</Link> · <Link href="/contact">Contact</Link>
        </p>
      </div>
    </section>
  );
}
