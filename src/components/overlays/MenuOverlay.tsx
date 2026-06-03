"use client";
import { useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";
import Logo from "@/components/ui/Logo";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onApply: () => void;
}

export default function MenuOverlay({ open, onClose, onNavigate, onApply }: MenuOverlayProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-[520ms] ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-[460px] bg-ink flex flex-col transition-transform duration-[520ms] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[rgba(245,241,234,0.1)]">
          <div className="flex items-center gap-3">
            <Logo className="w-7 h-7 text-[var(--nr-accent)]" color="currentColor" />
            <span
              className="text-paper font-medium tracking-tight uppercase text-[16px]"
              style={{ fontFamily: "'Alumni Sans SC', Impact, sans-serif" }}
            >
              Northroot
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-paper/50 hover:text-paper transition-colors duration-[260ms]"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col px-8 py-8 gap-1 flex-1" aria-label="Menu navigation">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); onClose(); }}
              className="nr-menu-trigger flex items-center justify-between py-4 border-b border-[rgba(245,241,234,0.08)] text-paper/60 hover:text-paper transition-colors duration-[260ms] group"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
            >
              <span
                style={{ fontFamily: "'Alumni Sans SC', Impact, sans-serif", fontSize: "28px", fontWeight: 500, letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 1 }}
              >
                {item.label}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40 group-hover:opacity-100 transition-all duration-[260ms] group-hover:translate-x-1">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-8 py-8 border-t border-[rgba(245,241,234,0.1)]">
          <button
            onClick={() => { onApply(); onClose(); }}
            className="w-full flex items-center justify-center gap-3 py-5 bg-[var(--nr-accent)] text-[var(--nr-accent-fg)] nr-tagline hover:bg-[#9C9C50] transition-colors duration-[260ms]"
          >
            Apply for membership
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="text-center text-paper/25 text-[12px] tracking-tight mt-4">
            invitations@northroot.co
          </p>
        </div>
      </div>
    </div>
  );
}
