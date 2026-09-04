// Small static version of the flow motif, used as a signature under page
// titles: a short jag (friction) settling into a straight line and the
// brand's double chevron.
export default function FlowRule({ className }: { className?: string }) {
  return (
    <svg
      className={`flow-rule${className ? ` ${className}` : ""}`}
      viewBox="0 0 520 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="flow-rule-jag"
        d="M0 20 L10 8 L22 32 L34 10 L46 28 L58 14 L70 24 L82 18 L96 21"
      />
      <path className="flow-rule-line" d="M96 21 C120 20 140 20 470 20" />
      <path className="flow-rule-chevron-a" d="M482 12 L490 20 L482 28" />
      <path className="flow-rule-chevron-b" d="M496 12 L504 20 L496 28" />
    </svg>
  );
}
