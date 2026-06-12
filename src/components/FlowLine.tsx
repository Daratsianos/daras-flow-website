// Decorative "flow" motif: a wavy line that settles into a smooth stream,
// echoing the brand promise of turning friction into flow.
const PATHS = {
  hero: "M0 34 C 60 6, 120 58, 180 34 C 232 14, 284 52, 336 34 C 382 20, 428 46, 474 34 C 516 26, 558 40, 600 34 C 654 29, 707 35, 760 33",
  divider:
    "M0 14 C 95 4, 190 24, 285 14 C 380 6, 475 21, 570 14 C 665 9, 712 15, 760 13",
} as const;

type FlowLineProps = {
  variant?: keyof typeof PATHS;
};

export default function FlowLine({ variant = "divider" }: FlowLineProps) {
  const gradientId = `flow-grad-${variant}`;
  return (
    <svg
      className={`flow-line flow-line-${variant}`}
      viewBox={variant === "hero" ? "0 0 760 64" : "0 0 760 28"}
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
        d={PATHS[variant]}
        stroke={`url(#${gradientId})`}
        strokeWidth={variant === "hero" ? 2.5 : 1.5}
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}
