type GooglePlayBadgeProps = {
  href: string;
  appName?: string;
};

export default function GooglePlayBadge({ href, appName }: GooglePlayBadgeProps) {
  const label = appName ? `Get ${appName} on Google Play` : "Get it on Google Play";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="gplay-badge"
      aria-label={label}
    >
      <svg
        className="gplay-badge-icon"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
      >
        <path fill="#00D2FF" d="M4 3 L13.5 8.344 L4 12 Z" />
        <path fill="#FF3A44" d="M13.5 8.344 L20 12 L4 12 Z" />
        <path fill="#00E676" d="M4 12 L13.5 15.656 L4 21 Z" />
        <path fill="#FFC900" d="M4 12 L20 12 L13.5 15.656 Z" />
      </svg>
      <span className="gplay-badge-text">
        <span className="gplay-badge-sub">GET IT ON</span>
        <span className="gplay-badge-main">Google Play</span>
      </span>
    </a>
  );
}
