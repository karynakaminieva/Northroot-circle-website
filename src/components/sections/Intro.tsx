"use client";
import { useReveal } from "@/lib/useReveal";

export default function Intro() {
  const ref = useReveal();

  return (
    <section id="intro" className="bg-paper py-24 lg:py-36 px-[var(--nr-page-pad)]">
      <div className="max-w-[1484px] mx-auto">
        <div ref={ref} className="nr-reveal grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
          {/* Left: eyebrow + rule */}
          <div className="flex flex-col gap-6">
            <p className="nr-eyebrow text-[var(--nr-grey-50)]">About the Circle</p>
            <hr className="nr-rule" />
            <div className="flex flex-col gap-4">
              <p className="text-[var(--nr-grey-50)] text-sm leading-relaxed">
                Founded 2021 · Invitation-only
              </p>
              <p className="text-[var(--nr-grey-50)] text-sm leading-relaxed">
                Members across 28 countries
              </p>
              <p className="text-[var(--nr-grey-50)] text-sm leading-relaxed">
                $2B+ collectively deployed
              </p>
            </div>
          </div>

          {/* Right: main copy */}
          <div className="flex flex-col gap-8">
            <h2
              className="text-ink font-medium tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
            >
              Not every investor needs more deal flow.
              <br />
              <span className="text-[var(--nr-grey-50)]">Some need better company.</span>
            </h2>

            <div className="flex flex-col gap-5 text-[17px] leading-[1.65] text-[var(--nr-grey-70)] tracking-tight">
              <p>
                Northroot Circle was built for investors who have moved past the noise —
                who already know how to evaluate a deal, and now want a home for the
                conversations that don't fit anywhere else.
              </p>
              <p>
                We bring together family office principals, founder-operators, fund
                managers, and thoughtful individuals united by one preference: the long view.
                No hype. No performance. Just considered people doing considered work.
              </p>
              <p>
                Membership is by invitation or application, and deliberately small. We grow
                when the right people arrive — not on a schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
