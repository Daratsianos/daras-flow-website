"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isLinkActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="header-wrapper">
      <div className="wrapper header">
        <Link href="/" className="logo-link" onClick={(e) => handleLinkClick(e, "/")}>
          <Image
            src="/logo.png"
            alt="Daras Flow Logo"
            width={120}
            height={40}
            style={{ width: "auto", height: "32px", objectFit: "contain" }}
            priority
          />
        </Link>
        <nav className="nav">
          <Link
            href="/apps"
            className={`nav-link ${isLinkActive("/apps") ? "active" : ""}`}
            onClick={(e) => handleLinkClick(e, "/apps")}
          >
            Apps
          </Link>
          <Link
            href="/about"
            className={`nav-link ${isLinkActive("/about") ? "active" : ""}`}
            onClick={(e) => handleLinkClick(e, "/about")}
          >
            About
          </Link>
          <Link
            href="/vibe-coding"
            className={`nav-link ${isLinkActive("/vibe-coding") ? "active" : ""}`}
            onClick={(e) => handleLinkClick(e, "/vibe-coding")}
          >
            Vibe Coding
          </Link>
        </nav>
      </div>
    </header>
  );
}
