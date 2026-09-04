import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Daras Flow. Fix the workflow. Build only what’s needed.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f6f4ee";
const INK = "#15202b";
const MUTED = "#5b6673";
const GREEN = "#1e7c65";
const NAVY = "#0f2f59";
const RUST = "#b0452b";

export default async function Image() {
  const fraunces = await readFile(
    join(process.cwd(), "src/app/fonts/Fraunces-500.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px 56px",
          backgroundColor: PAPER,
          color: INK,
          fontFamily: "Fraunces",
        }}
      >
        {/* Brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
            fontSize: 22,
            letterSpacing: "0.16em",
            fontWeight: 700,
          }}
        >
          <div style={{ display: "flex" }}>DARAS FLOW</div>
          <div
            style={{
              display: "flex",
              color: MUTED,
              fontWeight: 500,
              fontSize: 18,
              letterSpacing: "0.1em",
            }}
          >
            WORKFLOW IMPROVEMENT · SMALL BUSINESSES & TEAMS
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            fontSize: 84,
            lineHeight: 1.02,
            letterSpacing: "-0.015em",
            maxWidth: "980px",
          }}
        >
          Fix the workflow. Build only what’s needed.
        </div>

        {/* Flow line: tangle (rust, dotted) resolving into a clean line and the chevrons */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <svg
            width="1056"
            height="150"
            viewBox="0 0 1200 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 85 C20 65 45 20 70 40 C95 60 110 150 140 130 C170 110 150 70 120 80 C100 90 170 30 210 45 C250 60 240 150 280 130 C320 110 300 60 340 60 C380 60 300 130 320 120 C360 100 360 30 400 40 C450 55 430 150 470 125 C510 100 500 70 540 75 C580 80 580 125 620 110 C660 95 650 75 700 80 C750 85 760 100 820 88 C880 76 900 96 950 90 C1000 84 1030 84 1110 85"
              stroke={RUST}
              strokeOpacity="0.55"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="2 9"
            />
            <path d="M0 85 L1110 85" stroke={INK} strokeWidth="4" strokeLinecap="round" />
            <path d="M1134 63 L1156 85 L1134 107" stroke={GREEN} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1164 63 L1186 85 L1164 107" stroke={NAVY} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "sans-serif",
              fontSize: 20,
              color: MUTED,
            }}
          >
            <div style={{ display: "flex" }}>Panos Daratsianos · Zaandam, NL</div>
            <div style={{ display: "flex" }}>darasflow.com</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Fraunces", data: fraunces, weight: 500, style: "normal" }],
    }
  );
}
