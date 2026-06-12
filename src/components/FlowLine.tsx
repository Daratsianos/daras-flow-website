// Decorative "friction → flow" motif: the line starts as a sharp jag
// (friction), settles into a clean straight run (flow), and resolves into
// the double chevron from the Daras Flow logo.
const VARIANTS = {
  hero: {
    viewBox: "0 0 760 64",
    line: "M0 32 L16 13 L34 49 L52 17 L70 45 L88 21 L106 41 L124 25 L142 37 L158 28.5 L174 34.5 C194 30.5 214 32 244 32 L692 32",
    chevrons: ["M706 17 L721 32 L706 47", "M728 17 L743 32 L728 47"],
    lineWidth: 2.5,
    chevronWidth: 3,
  },
  divider: {
    viewBox: "0 0 760 28",
    line: "M0 14 L12 7 L26 20 L40 9 L54 18 L68 11 L82 16 C96 13.5 110 14 130 14 L706 14",
    chevrons: ["M716 8 L722 14 L716 20", "M728 8 L734 14 L728 20"],
    lineWidth: 1.5,
    chevronWidth: 2,
  },
} as const;

type FlowLineProps = {
  variant?: keyof typeof VARIANTS;
};

export default function FlowLine({ variant = "divider" }: FlowLineProps) {
  const { viewBox, line, chevrons, lineWidth, chevronWidth } = VARIANTS[variant];
  const gradientId = `flow-grad-${variant}`;
  return (
    <svg
      className={`flow-line flow-line-${variant}`}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="760"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" className="flow-stop-a" />
          <stop offset="1" className="flow-stop-b" />
        </linearGradient>
      </defs>
      <path
        className="flow-path"
        d={line}
        stroke={`url(#${gradientId})`}
        strokeWidth={lineWidth}
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        className="flow-chevron flow-chevron-a"
        d={chevrons[0]}
        strokeWidth={chevronWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="flow-chevron flow-chevron-b"
        d={chevrons[1]}
        strokeWidth={chevronWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
