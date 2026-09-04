"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";

const NAV = [
  { href: "/#work", label: "Case study", match: null },
  { href: "/#approach", label: "Approach", match: null },
  { href: "/lab", label: "Lab", match: "/lab" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/contact", label: "Contact", match: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link href="/" className="brand" aria-label="Daras Flow, home">
          <BrandMark className="brand-mark" />
          <span className="brand-name">Daras Flow</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="Main"
        >
          <ul className="site-nav-list">
            {NAV.map((item) => {
              const active = item.match ? pathname.startsWith(item.match) : false;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`site-nav-link${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
