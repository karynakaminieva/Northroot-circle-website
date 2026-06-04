"use client";
import { useEffect, useRef } from "react";

interface HeroProps {
  onApply: () => void;
}

export default function Hero({ onApply }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink">
      {/* Background texture */}
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <div className="absolute inset-0 bg-[#0a1a0e]" />
        <div className="absolute inset-0 opacity-[0.18]" style={{
          backgroundImage: `radial-gradient(ellipse at 30% 50%, #3F5A3A 0%, transparent 60%),
                            radial-gradient(ellipse at 70% 30%, #2a4a2e 0%, transparent 50%)`,
        }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #BFBF6C 0px, #BFBF6C 1px, transparent 1px, transparent 12px),
                            repeating-linear-gradient(-45deg, #BFBF6C 0px, #BFBF6C 1px, transparent 1px, transparent 12px)`,
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0e]/60 via-transparent to-ink/80" />

      {/* Top taglines */}
      <div className="absolute bottom-[38%] left-0 right-0 px-[var(--nr-page-pad)] grid grid-cols-2 gap-4 z-10">
        <p className="nr-eyebrow text-paper/50 max-w-xs">
          A modern investment community<br />connecting ambitious professionals
        </p>
        <p className="nr-eyebrow text-paper/50 text-right ml-auto max-w-xs">
          With curated opportunities, investor<br />education, and a network built around<br />long-term thinking.
        </p>
      </div>

      {/* Main headline */}
      <div className="relative z-10 px-[var(--nr-page-pad)] pb-0">
        <h1
          className="font-display font-medium uppercase text-[#D1DFFA]"
          style={{
            fontFamily: "'Alumni Sans SC', Impact, sans-serif",
            fontSize: "clamp(52px, 11.5vw, 175px)",
            lineHeight: 0.84,
            letterSpacing: "-0.04em",
          }}
        >
          Money doesn&apos;t<br />grow on trees
        </h1>
      </div>

      {/* Bottom band */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-end border-t border-paper/10 mt-0">
        <div className="px-[var(--nr-page-pad)] py-8">
          <p
            className="font-display font-medium uppercase text-paper/80"
            style={{
              fontFamily: "'Alumni Sans SC', Impact, sans-serif",
              fontSize: "clamp(22px, 3.8vw, 56px)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
            }}
          >
            But the right environment<br />changes everything
          </p>
        </div>
        <button
          onClick={onApply}
          className="flex items-center gap-3 px-[var(--nr-page-pad)] py-8 bg-[#BFBF6C] text-ink h-full nr-eyebrow hover:bg-[#9C9C50] transition-colors duration-[260ms] group whitespace-nowrap"
        >
          Request a personal invitation
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="transition-transform duration-[260ms] group-hover:translate-x-[5px] group-hover:-translate-y-[5px]">
            <path d="M4 16L16 4M16 4H7M16 4V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30 animate-bounce z-10">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="#F5F1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}