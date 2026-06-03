"use client";
import { useReveal } from "@/lib/useReveal";

interface FinalCTAProps {
  onApply: () => void;
}

export default function FinalCTA({ onApply }: FinalCTAProps) {
  const ref = useReveal();

  return (
    <section className="bg-ink py-24 lg:py-40 px-[var(--nr-page-pad)] overflow-hidden relative">
      {/* Background glyph */}
      <div
        className="absolute right-[-4%] top-[-10%] opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Alumni Sans SC', Impact, sans-serif",
            fontSize: "clamp(200px, 30vw, 480px)",
            fontWeight: 500,
            textTransform: "uppercase",
            color: "#F5F1EA",
            lineHeight: 1,
          }}
        >
          N
        </span>
      </div>

      <div className="max-w-[1484px] mx-auto relative">
        <div ref={ref} className="nr-reveal flex flex-col gap-10 max-w-[780px]">
          <p className="nr-eyebrow text-[var(--nr-accent)]">Ready to apply?</p>
          <h2
            className="text-paper font-medium tracking-tight"
            style={{ fontSize: "clamp(38px, 6vw, 80px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontFamily: "'Alumni Sans SC', Impact, sans-serif", textTransform: "uppercase" }}
          >
            Long-term thinking,<br />with better company.
          </h2>
          <p className="text-paper/60 text-[18px] leading-[1.6] max-w-[520px]">
            Northroot Circle is invitation-only and deliberately small.
            If you're ready to join a network that values depth over breadth,
            we'd like to hear from you.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={onApply}
              className="flex items-center gap-3 px-10 py-5 bg-[var(--nr-accent)] text-[var(--nr-accent-fg)] nr-tagline hover:bg-[#9C9C50] transition-colors duration-[260ms] group"
            >
              Apply for membership
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="transition-transform duration-[260ms] group-hover:translate-x-[5px] group-hover:-translate-y-[5px]">
                <path d="M4 16L16 4M16 4H7M16 4V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a
              href="mailto:invitations@northroot.co"
              className="flex items-center gap-3 px-10 py-5 border border-[rgba(245,241,234,0.2)] text-paper/70 nr-tagline hover:border-paper/50 hover:text-paper transition-all duration-[260ms]"
            >
              Send a note
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
