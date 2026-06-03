"use client";
import { useReveal } from "@/lib/useReveal";
import { HOW_IT_WORKS } from "@/lib/data";

interface HowItWorksProps {
  onApply: () => void;
}

export default function HowItWorks({ onApply }: HowItWorksProps) {
  const ref = useReveal();

  return (
    <section id="grows" className="bg-paper-3 py-24 lg:py-36 px-[var(--nr-page-pad)]">
      <div className="max-w-[1484px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          {/* Left */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <p className="nr-eyebrow text-[var(--nr-grey-50)]">How it works</p>
            <hr className="nr-rule" />
            <h2
              className="text-ink font-medium tracking-tight"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.0, letterSpacing: "-0.04em" }}
            >
              The path into<br />the Circle
            </h2>
            <p className="text-[var(--nr-grey-70)] text-[17px] leading-[1.65] max-w-[340px]">
              We keep the process simple — because the relationship is what matters,
              not the onboarding.
            </p>
            <button
              onClick={onApply}
              className="self-start flex items-center gap-2 px-7 py-4 bg-[var(--nr-accent)] text-[var(--nr-accent-fg)] nr-eyebrow hover:bg-[#9C9C50] transition-colors duration-[260ms] group mt-4"
            >
              Begin your application
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-[260ms] group-hover:translate-x-1">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right: Steps */}
          <div ref={ref} className="nr-reveal flex flex-col">
            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={i}
                className="flex gap-8 py-10 border-b border-[var(--nr-border)] last:border-0"
              >
                <span
                  className="flex-shrink-0 font-medium text-[var(--nr-grey-30)] tracking-tight"
                  style={{ fontSize: "13px", fontFamily: "'Alumni Sans SC', sans-serif", letterSpacing: "0.1em", paddingTop: "3px" }}
                >
                  {step.number}
                </span>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-ink font-medium tracking-tight"
                    style={{ fontSize: "22px", lineHeight: 1.15, letterSpacing: "-0.03em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[var(--nr-grey-70)] text-[16px] leading-[1.65]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
