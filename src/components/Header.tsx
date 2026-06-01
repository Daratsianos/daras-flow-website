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

  return (
    <header className="header-wrapper">
      <div className="wrapper header">
        <Link href="/" className="logo-link">
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
          >
            Apps
          </Link>
          <Link
            href="/about"
            className={`nav-link ${isLinkActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/vibe-coding"
            className={`nav-link ${isLinkActive("/vibe-coding") ? "active" : ""}`}
          >
            Vibe Coding
          </Link>
        </nav>
      </div>
    </header>
  );
}
