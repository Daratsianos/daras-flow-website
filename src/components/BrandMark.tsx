// The Daras Flow mark, redrawn as vector from the original logo: a two-part
// arrow (navy over green) followed by a navy chevron.
type BrandMarkProps = {
  className?: string;
  width?: number;
};

export default function BrandMark({ className, width = 48 }: BrandMarkProps) {
  const height = Math.round((width * 49) / 108);
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 108 49"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="4,1.5 67,1.5 82,21.5 19,21.5" fill="#0f2f59" />
      <polygon points="19,27.5 82,27.5 67,47.5 4,47.5" fill="#1e7c65" />
      <polyline
        points="76,1.5 99,24.5 76,47.5"
        fill="none"
        stroke="#0f2f59"
        strokeWidth="9"
        strokeLinejoin="miter"
        strokeMiterlimit="6"
      />
    </svg>
  );
}
