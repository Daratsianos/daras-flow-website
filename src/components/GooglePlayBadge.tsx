import Image from "next/image";

type GooglePlayBadgeProps = {
  href: string;
  appName: string;
  compact?: boolean;
};

export default function GooglePlayBadge({
  href,
  appName,
  compact = false,
}: GooglePlayBadgeProps) {
  const linkClassName = compact
    ? "gplay-badge gplay-badge--compact"
    : "gplay-badge";
  const imageClassName = compact
    ? "gplay-badge-image gplay-badge-image--compact"
    : "gplay-badge-image";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
      aria-label={`Get it on Google Play — ${appName}`}
    >
      <Image
        src="/google-play-badge.png"
        alt="Get it on Google Play"
        width={646}
        height={250}
        className={imageClassName}
      />
    </a>
  );
}
