"use client";

import { useEffect, useRef } from "react";

// The one drawing on the site: a tangled workflow (rust, dotted: how the work
// happens now) that resolves at a single green point (the fix) into a clean
// line ending in the brand's double chevron (how it runs afterwards).
//
// Without JavaScript, or with reduced motion, the final state is shown.
// With JavaScript the solid line starts tangled and untangles once on load.

type Pt = [number, number];

const WIDTH = 1200;
const HEIGHT = 320;
const MID = 160;
const END_X = 1110;
const FIX_X = 560;
const TANGLE_END_X = 520;

// First TANGLE_POINTS points form the tangle; the rest are already straight.
const TANGLE_POINTS = 11;
const TANGLE: Pt[] = [
  [0, 160],
  [60, 70],
  [130, 250],
  [95, 150],
  [200, 90],
  [260, 255],
  [330, 105],
  [295, 215],
  [400, 80],
  [470, 235],
  [TANGLE_END_X, 160],
  [640, 160],
  [760, 160],
  [880, 160],
  [1000, 160],
  [END_X, 160],
];

const CLEAN: Pt[] = TANGLE.map((p, i) =>
  i < TANGLE_POINTS ? [(i * TANGLE_END_X) / (TANGLE_POINTS - 1), MID] : p
);

// Catmull-Rom spline through the points, emitted as cubic Béziers.
function toPath(pts: Pt[]): string {
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

const GHOST_D = toPath(TANGLE.slice(0, TANGLE_POINTS));
const TANGLE_D = toPath(TANGLE);
const CLEAN_D = toPath(CLEAN);

const DELAY_MS = 600;
const DURATION_MS = 2000;

export default function FlowDrawing() {
  const liveRef = useRef<SVGPathElement>(null);
  const marksRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const live = liveRef.current;
    const marks = marksRef.current;
    if (!live || !marks) return;

    live.classList.add("is-live");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      marks.classList.add("is-in");
      return;
    }

    live.setAttribute("d", TANGLE_D);
    let raf = 0;
    let start = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const frame = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, Math.max(0, (now - start - DELAY_MS) / DURATION_MS));
      const e = ease(t);
      const pts: Pt[] = TANGLE.map((p, i) => [
        p[0] + (CLEAN[i][0] - p[0]) * e,
        p[1] + (CLEAN[i][1] - p[1]) * e,
      ]);
      live.setAttribute("d", toPath(pts));
      if (t < 1) {
        raf = requestAnimationFrame(frame);
      } else {
        marks.classList.add("is-in");
      }
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <figure className="flow" aria-label="A tangled workflow resolving, at one point of change, into a straight line">
      <svg
        className="flow-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
      >
        <path className="flow-ghost" d={GHOST_D} />
        <path ref={liveRef} className="flow-live" d={CLEAN_D} />
        <g ref={marksRef} className="flow-marks">
          <circle className="flow-fix" cx={FIX_X} cy={MID} r="9" />
          <path className="flow-chevron-a" d="M1134 138 L1156 160 L1134 182" />
          <path className="flow-chevron-b" d="M1164 138 L1186 160 L1164 182" />
        </g>
      </svg>
      <span className="label is-rust flow-label is-before">Before</span>
      <span className="label is-green flow-label is-fix">The fix</span>
      <span className="label is-green flow-label is-after">After</span>
      <figcaption className="flow-caption">
        How the work happens now, one small change, and the same work without
        the friction.
      </figcaption>
    </figure>
  );
}
