"use client";
import { useReveal } from "@/lib/useReveal";
import { MEMBERSHIP_TIERS } from "@/lib/data";

interface MembershipProps {
  onApply: () => void;
}

export default function Membership({ onApply }: MembershipProps) {
  const ref = useReveal();

  return (
    <section id="membership" className="bg-paper py-24 lg:py-36 px-[var(--nr-page-pad)]">
      <div className="max-w-[1484px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-4">
              <p className="nr-eyebrow text-[var(--nr-grey-50)]">Membership</p>
              <h2
                className="text-ink font-medium tracking-tight"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.98, letterSpacing: "-0.04em" }}
              >
                Three tiers.<br />One Circle.
              </h2>
            </div>
          </div>
          <hr className="nr-rule mt-6" />
        </div>

        {/* Tiers */}
        <div ref={ref} className="nr-reveal grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--nr-border)]">
          {MEMBERSHIP_TIERS.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col gap-6 p-8 lg:p-10 ${
                tier.highlight ? "bg-ink text-paper" : "bg-paper text-ink"
              }`}
            >
              {tier.highlight && (
                <span className="self-start nr-eyebrow text-[var(--nr-accent)] mb-2">
                  Most popular
                </span>
              )}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-medium tracking-tight"
                  style={{ fontSize: "28px", lineHeight: 1.05, letterSpacing: "-0.04em", fontFamily: "'Alumni Sans SC', Impact, sans-serif", textTransform: "uppercase" }}
                >
                  {tier.name}
                </h3>
                <p className={`nr-eyebrow ${tier.highlight ? "text-paper/50" : "text-[var(--nr-grey-50)]"}`}>
                  {tier.price}
                </p>
              </div>

              <p className={`text-[15px] leading-[1.6] ${tier.highlight ? "text-paper/70" : "text-[var(--nr-grey-70)]"}`}>
                {tier.description}
              </p>

              <ul className="flex flex-col gap-3 mt-2">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-[14px] tracking-tight">
                    <span className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${tier.highlight ? "bg-[var(--nr-accent)]/20" : "bg-[var(--nr-olive-soft)]"}`}>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke={tier.highlight ? "#BFBF6C" : "#0F1720"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className={tier.highlight ? "text-paper/80" : "text-[var(--nr-grey-70)]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <button
                  onClick={onApply}
                  className={`w-full py-4 nr-eyebrow transition-colors duration-[260ms] ${
                    tier.highlight
                      ? "bg-[var(--nr-accent)] text-[var(--nr-accent-fg)] hover:bg-[#9C9C50]"
                      : "border border-[var(--nr-border-strong)] text-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  Apply for {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-[var(--nr-grey-50)] mt-8 tracking-tight">
          All membership decisions are made at Northroot&apos;s sole discretion.
          Application does not guarantee acceptance.
        </p>
      </div>
    </section>
  );
}
