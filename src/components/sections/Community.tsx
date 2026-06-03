"use client";
import { useReveal } from "@/lib/useReveal";

const STATS = [
  { value: "28", label: "Countries represented" },
  { value: "$2B+", label: "Collectively deployed" },
  { value: "12", label: "Co-investments in 2024" },
  { value: "94%", label: "Member retention rate" },
];

export default function Community() {
  const ref = useReveal();

  return (
    <section id="community" className="bg-paper py-24 lg:py-36 px-[var(--nr-page-pad)]">
      <div className="max-w-[1484px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <p className="nr-eyebrow text-[var(--nr-grey-50)]">The community</p>
          <hr className="nr-rule" />
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <h2
              className="text-ink font-medium tracking-tight"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.0, letterSpacing: "-0.04em" }}
            >
              A network built for the long game
            </h2>
            <div className="flex flex-col gap-5 text-[17px] leading-[1.65] text-[var(--nr-grey-70)]">
              <p>
                Our members span family offices, founder-operators, institutional
                allocators, and independent investors across five continents.
                What they share is not a strategy — it's a disposition.
              </p>
              <p>
                The Circle hosts quarterly roundtables, an annual summit, and
                a private forum that has generated some of the most substantive
                investor conversations we've encountered anywhere.
              </p>
            </div>

            {/* Community activities */}
            <div className="flex flex-col gap-3 mt-4">
              {[
                "Quarterly roundtables with practitioner guests",
                "Annual member summit (hybrid)",
                "Private research forum & deal commentary",
                "1:1 introduction matching for cross-border deals",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[15px] text-[var(--nr-grey-70)]">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--nr-accent)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div ref={ref} className="nr-reveal grid grid-cols-2 gap-px bg-[var(--nr-border)]">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-paper p-8 flex flex-col gap-2">
                <span
                  className="text-ink font-medium tracking-tight"
                  style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.0, letterSpacing: "-0.04em", fontFamily: "'Alumni Sans SC', Impact, sans-serif", textTransform: "uppercase" }}
                >
                  {stat.value}
                </span>
                <span className="text-[var(--nr-grey-50)] text-[13px] tracking-tight leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
