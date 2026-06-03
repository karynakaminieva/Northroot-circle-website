"use client";
import { useEffect, useRef } from "react";

interface HeroProps {
  onApply: () => void;
  headlineColor?: string;
}

export default function Hero({ onApply, headlineColor = "#D1DFFA" }: HeroProps) {
  const titleRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handler = () => {
      if (titleRef.current) {
        const y = window.scrollY * 0.18;
        titleRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink"
      aria-labelledby="hero-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 39px,
            rgba(245,241,234,0.5) 39px, rgba(245,241,234,0.5) 40px
          )`,
        }}
      />

      {/* Olive accent wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BFBF6C]/8 via-transparent to-transparent" />

      {/* Top taglines */}
      <div
        className="absolute grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 w-full"
        style={{ top: "clamp(34%, 38vh, 42%)" }}
      >
        <div className="max-w-[280px]">
          <p className="nr-tagline text-[rgba(245,241,234,0.55)]">
            Curated<br />Opportunities
          </p>
        </div>
        <div className="max-w-[280px] sm:justify-self-end sm:text-right">
          <p className="nr-tagline text-[rgba(245,241,234,0.55)]">
            Long-term<br />Thinking
          </p>
        </div>
      </div>

      {/* Main title */}
      <div ref={titleRef} className="relative z-10 px-[var(--nr-page-pad)] pb-0">
        <h1
          id="hero-heading"
          className="nr-display-xxl nr-hero-title"
          style={{ color: headlineColor, letterSpacing: "-0.04em" }}
        >
          Northroot
        </h1>
      </div>

      {/* Bottom band */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-end border-t border-[rgba(245,241,234,0.15)] mt-0">
        {/* Statement */}
        <div className="px-[var(--nr-page-pad)] py-8 border-r border-[rgba(245,241,234,0.1)] sm:border-r">
          <p
            className="nr-hero-statement text-paper/70 font-medium tracking-tight"
            style={{ fontSize: "clamp(18px, 3.2vw, 28px)", letterSpacing: "-0.03em", lineHeight: 1.25 }}
          >
            An invitation-only investment community
            <br className="hidden sm:block" /> for considered investors.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onApply}
          className="nr-hero-cta flex items-center gap-3 px-[var(--nr-page-pad)] py-8 bg-[var(--nr-accent)] text-[var(--nr-accent-fg)] h-full nr-tagline hover:bg-[#9C9C50] transition-colors duration-[260ms] group"
        >
          Apply for membership
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="transition-transform duration-[260ms] group-hover:translate-x-[5px] group-hover:-translate-y-[5px]"
          >
            <path d="M4 16L16 4M16 4H7M16 4V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="#F5F1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
