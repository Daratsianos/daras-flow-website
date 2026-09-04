"use client";

import { useEffect, useRef } from "react";

// The one drawing on the site, and the brand's signature idea:
// messy workflow → precise intervention → clean flow.
//
// On load it plays once, in order: the rust tangle enters (how the work
// happens now), the green intervention point appears, the solid line
// resolves from tangled to straight, and the clean line runs on into the
// brand's double chevron. Nothing loops. Reduced motion, or no JavaScript,
// shows the final state.

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

// Timeline, in ms from mount. Mirrored by the CSS fallback delays.
const T_GHOST = 300;
const T_FIX = 1300;
const T_LIVE = 1500;
const T_MORPH_START = 1700;
const MORPH_MS = 1500;
const T_CHEVRONS = 3200;

export default function FlowDrawing() {
  const rootRef = useRef<HTMLElement>(null);
  const liveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const live = liveRef.current;
    if (!root || !live) return;

    const ghost = root.querySelector<SVGPathElement>(".flow-ghost");
    const fix = root.querySelector<SVGCircleElement>(".flow-fix");
    const chevrons = root.querySelector<SVGGElement>(".flow-chevrons");
    if (!ghost || !fix || !chevrons) return;

    // JavaScript is in charge from here; the CSS fallback timeline steps aside.
    root.classList.add("is-scripted");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      ghost.classList.add("is-in");
      fix.classList.add("is-in");
      live.classList.add("is-in");
      chevrons.classList.add("is-in");
      return;
    }

    live.setAttribute("d", TANGLE_D);
    const timers: number[] = [];
    let raf = 0;
    const at = (ms: number, fn: () => void) => {
      timers.push(window.setTimeout(fn, ms));
    };
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    at(T_GHOST, () => ghost.classList.add("is-in"));
    at(T_FIX, () => fix.classList.add("is-in"));
    at(T_LIVE, () => live.classList.add("is-in"));
    at(T_MORPH_START, () => {
      let start = 0;
      const frame = (now: number) => {
        if (!start) start = now;
        const t = Math.min(1, (now - start) / MORPH_MS);
        const e = ease(t);
        const pts: Pt[] = TANGLE.map((p, i) => [
          p[0] + (CLEAN[i][0] - p[0]) * e,
          p[1] + (CLEAN[i][1] - p[1]) * e,
        ]);
        live.setAttribute("d", toPath(pts));
        if (t < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    });
    at(T_CHEVRONS, () => chevrons.classList.add("is-in"));

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <figure
      ref={rootRef}
      className="flow"
      aria-label="A tangled workflow, one point of intervention, and the same work running as a straight line afterwards"
    >
      <svg
        className="flow-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
      >
        <path className="flow-ghost" d={GHOST_D} />
        <path ref={liveRef} className="flow-live" d={CLEAN_D} />
        <circle className="flow-fix" cx={FIX_X} cy={MID} r="9" />
        <g className="flow-chevrons">
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
