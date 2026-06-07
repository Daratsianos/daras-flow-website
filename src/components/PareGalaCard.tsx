"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function PareGalaCard() {
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
    <div className="card flush">
      <div className="card-title-group">
        <h2 className="app-card-title">
          <a href={appUrl} target="_blank" rel="noopener noreferrer" className="app-link">
            Pare Gala (Our Groceries)
          </a>
        </h2>
        <span className="status-badge beta">Active PWA</span>
      </div>

      <p className="app-tagline">
        A shared grocery list app for families who want one simple place to manage shopping.
      </p>

      <p className="app-desc">
        Shopping lists get messy when multiple people edit them, or when you are in the store with poor internet connection.
        Pare Gala focuses on solving these edge cases by providing an ultra-fast, real-time shared list.
      </p>

      <div className="story story-blue">
        <p>
          <strong>The Story:</strong> I built this app to solve a classic Greek household emergency: standing at the supermarket checkout and getting that last-minute shout from home, <em>&ldquo;Pare gala!&rdquo;</em>{" "}(&ldquo;Get milk!&rdquo;). That running joke, and the frustration of forgetting the most essential item, is where the name comes from. I wanted a simple tool that syncs family shopping lists instantly, so no one ever forgets the milk.
        </p>
      </div>

      <ul className="card-notes" style={{ marginBottom: "1.5rem" }}>
        <li className="card-note-item">mobile-first design</li>
        <li className="card-note-item">simple shared lists</li>
        <li className="card-note-item">PWA</li>
      </ul>

      <div className="cta-group">
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Open App
        </a>
        <button
          type="button"
          onClick={() => setShowQR(!showQR)}
          className="btn btn-secondary"
          style={{ gap: "0.5rem" }}
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
        <div className="qr-panel">
          <div className="qr-frame">
            <QRCodeSVG
              value={appUrl}
              size={160}
              level="M"
              includeMargin={true}
              style={{ display: "block" }}
            />
          </div>
          <p className="qr-caption">Scan to open this shopping list.</p>
          <div className="qr-actions">
            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-secondary btn-sm"
              style={{ gap: "0.25rem" }}
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
              className="btn btn-secondary btn-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
