import { ImageResponse } from "next/og";

export const alt =
  "Daras Flow. Practical apps and workflow tools that reduce friction.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0b0f17",
          backgroundImage:
            "radial-gradient(circle at 12% 16%, rgba(52,211,153,0.20), transparent 42%), radial-gradient(circle at 88% 84%, rgba(56,189,248,0.16), transparent 46%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              backgroundColor: "#34d399",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0b0f17"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              color: "#e2e8f0",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "0.18em",
            }}
          >
            DARAS FLOW
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div
            style={{
              display: "flex",
              width: "72px",
              height: "6px",
              borderRadius: "4px",
              backgroundColor: "#34d399",
            }}
          />
          <div
            style={{
              display: "flex",
              color: "#f8fafc",
              fontSize: "70px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: "940px",
            }}
          >
            Practical apps & workflow tools that reduce friction.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#cbd5e1",
              fontSize: "27px",
              fontWeight: 600,
            }}
          >
            darasflow.com
          </div>
          <div style={{ display: "flex", color: "#94a3b8", fontSize: "24px" }}>
            Panos Daratsianos
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
