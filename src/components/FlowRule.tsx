// Small static signature under page titles: the same grammar as the hero
// drawing at miniature scale. Rust dotted tangle (friction), a green point
// (the fix), a straight line (flow) and the brand's double chevron.
export default function FlowRule({ className }: { className?: string }) {
  return (
    <svg
      className={`flow-rule${className ? ` ${className}` : ""}`}
      viewBox="0 0 520 44"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="flow-rule-tangle"
        d="M0 22 C14 6 22 2 30 14 C38 26 30 42 42 38 C54 34 50 6 66 8 C82 10 74 40 90 36 C104 32 100 10 116 12 C130 14 128 30 144 24 C152 21 156 22 160 22"
      />
      <path className="flow-rule-line" d="M0 22 L470 22" />
      <circle className="flow-rule-fix" cx="172" cy="22" r="4" />
      <path className="flow-rule-chevron-a" d="M482 14 L490 22 L482 30" />
      <path className="flow-rule-chevron-b" d="M496 14 L504 22 L496 30" />
    </svg>
  );
}
