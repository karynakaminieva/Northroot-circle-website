"use client";
import { useReveal } from "@/lib/useReveal";
import { FEATURES } from "@/lib/data";

interface FeatureGridProps {
  variant?: "rows" | "cards";
}

export default function FeatureGrid({ variant = "rows" }: FeatureGridProps) {
  const ref = useReveal();

  return (
    <section className="bg-paper-2 py-24 lg:py-36 px-[var(--nr-page-pad)]">
      <div className="max-w-[1484px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 lg:mb-20">
          <p className="nr-eyebrow text-[var(--nr-grey-50)]">What membership includes</p>
          <hr className="nr-rule" />
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className={`nr-reveal ${
            variant === "cards"
              ? "grid grid-cols-1 sm:grid-cols-2 gap-1"
              : "flex flex-col"
          }`}
        >
          {FEATURES.map((feature, i) => (
            <FeatureItem key={i} feature={feature} variant={variant} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  feature,
  variant,
  delay,
}: {
  feature: (typeof FEATURES)[0];
  variant: "rows" | "cards";
  delay: number;
}) {
  const delayClass = [``, `nr-reveal-delay-1`, `nr-reveal-delay-2`, `nr-reveal-delay-3`][delay] || "";

  if (variant === "cards") {
    return (
      <div
        className={`bg-paper p-8 lg:p-12 flex flex-col gap-5 hover:shadow-[var(--nr-shadow-hover)] transition-shadow duration-[520ms] nr-reveal ${delayClass}`}
        style={{ boxShadow: "var(--nr-shadow-card)" }}
      >
        <p className="nr-eyebrow text-[var(--nr-accent)]">{feature.eyebrow}</p>
        <h3 className="text-ink font-medium tracking-tight" style={{ fontSize: "22px", lineHeight: 1.15, letterSpacing: "-0.03em" }}>
          {feature.title}
        </h3>
        <p className="text-[var(--nr-grey-70)] text-[16px] leading-[1.65]">{feature.body}</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 py-10 border-b border-[var(--nr-border)] last:border-0 nr-reveal ${delayClass}`}>
      <div className="flex flex-col gap-1 pt-1">
        <p className="nr-eyebrow text-[var(--nr-accent)]">{feature.eyebrow}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-ink font-medium tracking-tight" style={{ fontSize: "24px", lineHeight: 1.15, letterSpacing: "-0.03em" }}>
          {feature.title}
        </h3>
        <p className="text-[var(--nr-grey-70)] text-[17px] leading-[1.65] max-w-[640px]">{feature.body}</p>
      </div>
    </div>
  );
}
