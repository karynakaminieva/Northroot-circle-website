"use client";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/lib/data";

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

  const navTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-[var(--nr-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1484px] mx-auto px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          aria-label="Northroot Circle — back to top"
        >
          <Logo className="w-8 h-8 text-[var(--nr-accent)]" color="currentColor" />
          <span
            className="font-display font-medium tracking-tight uppercase text-[18px] text-ink"
            style={{ fontFamily: "'Alumni Sans SC', Impact, sans-serif" }}
          >
            Northroot Circle
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => navTo(item.id)}
              className="nr-eyebrow text-[var(--nr-grey-50)] hover:text-ink transition-colors duration-[260ms]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onApply}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-[var(--nr-accent)] text-[var(--nr-accent-fg)] nr-eyebrow hover:bg-[#9C9C50] transition-colors duration-[260ms]"
          >
            Apply
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={onMenuOpen}
            className="lg:hidden flex flex-col gap-[5px] p-2 group"
            aria-label="Open menu"
          >
            <span className="w-6 h-[1.5px] bg-ink block transition-transform duration-[260ms]" />
            <span className="w-4 h-[1.5px] bg-ink block transition-all duration-[260ms] group-hover:w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
