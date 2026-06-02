"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function TaPsoniaMasCard() {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const appUrl = "https://paregala.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="card" style={{ margin: 0 }}>
      <div className="card-title-group">
        <h2 style={{ border: "none", margin: 0, padding: 0, fontSize: "1.5rem" }}>
          <a href={appUrl} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            Pare Gala (Our Groceries)
          </a>
        </h2>
        <span className="status-badge beta">Active PWA</span>
      </div>

      <p style={{ fontSize: "1.05rem", color: "var(--text-main)", marginTop: "1rem", fontWeight: "500" }}>
        A shared grocery list app for families who want one simple place to manage shopping.
      </p>

      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
        Shopping lists get messy when multiple people edit them, or when you are in the store with poor internet connection. 
        Pare Gala focuses on solving these edge cases by providing an ultra-fast, real-time shared list that works offline inside the supermarket and auto-syncs.
      </p>

      <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "rgba(15, 47, 89, 0.04)", borderRadius: "8px", borderLeft: "3px solid var(--primary-blue)" }}>
        <p style={{ margin: 0, fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-main)" }}>
          <strong>The Story:</strong> I built this app to solve a classic Greek household emergency: standing at the supermarket checkout and getting that last-minute shout from home, <em>&ldquo;Pare gala!&rdquo;</em> (&ldquo;Get milk!&rdquo;). That running joke, and the frustration of forgetting the most essential item, is where the name comes from. I wanted a simple tool that syncs family shopping lists instantly, so no one ever forgets the milk.
        </p>
      </div>

      <ul className="card-notes" style={{ marginTop: "1.25rem", marginBottom: "1.5rem" }}>
        <li className="card-note-item">mobile-first design</li>
        <li className="card-note-item">simple shared lists</li>
        <li className="card-note-item">offline-friendly PWA</li>
      </ul>

      <div className="cta-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ textDecoration: "none" }}
        >
          Open App
        </a>
        <button
          type="button"
          onClick={() => setShowQR(!showQR)}
          className="btn btn-secondary"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="5" height="5" x="3" y="3" rx="1" />
            <rect width="5" height="5" x="16" y="3" rx="1" />
            <rect width="5" height="5" x="3" y="16" rx="1" />
            <path d="M21 16V21H16" />
            <path d="M21 16H16" />
            <path d="M16 21V16" />
            <path d="M9 9h.01" />
            <path d="M9 15h.01" />
            <path d="M15 9h.01" />
            <path d="M15 15h.01" />
          </svg>
          {showQR ? "Hide QR Code" : "Show QR Code"}
        </button>
      </div>

      {showQR && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1.5rem",
            backgroundColor: "var(--bg-color)",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "var(--shadow-sm)",
              border: "1px solid var(--border-color)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QRCodeSVG
              value={appUrl}
              size={160}
              level="M"
              includeMargin={true}
              style={{ display: "block" }}
            />
          </div>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)", fontWeight: "500", textAlign: "center" }}>
            Scan to open this shopping list.
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-secondary"
              style={{
                padding: "0.4rem 1rem",
                fontSize: "0.85rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              {copied ? "Copied!" : "Copy Link"}
            </button>
            <button
              type="button"
              onClick={() => setShowQR(false)}
              className="btn btn-secondary"
              style={{
                padding: "0.4rem 1rem",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
