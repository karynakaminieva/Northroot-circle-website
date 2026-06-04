"use client";
import { useState, useEffect } from "react";

interface HeaderProps {
  onApply: () => void;
  onMenuOpen: () => void;
}

export default function Header({ onApply, onMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-ink/95 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="max-w-[1484px] mx-auto px-[var(--nr-page-pad)] flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
          aria-label="Northroot Circle — back to top"
        >
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="#BFBF6C" strokeWidth="1.5"/>
            <path d="M20 32 V18" stroke="#BFBF6C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 22 C20 18 16 16 13 14" stroke="#BFBF6C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 22 C20 18 24 16 27 14" stroke="#BFBF6C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 27 C20 23 15 21 11 19" stroke="#BFBF6C" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M20 27 C20 23 25 21 29 19" stroke="#BFBF6C" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="font-display font-medium tracking-tight uppercase text-paper text-[18px]"
            style={{ fontFamily: "'Alumni Sans SC', Impact, sans-serif" }}>
            Northroot Circle
          </span>
        </button>

        {/* Menu button */}
        <button
          onClick={onMenuOpen}
          className="flex items-center gap-3 nr-eyebrow text-paper/70 hover:text-paper transition-colors duration-[260ms]"
          aria-label="Open menu"
        >
          Menu
          <span className="text-[18px] leading-none">—</span>
        </button>
      </div>
    </header>
  );
}