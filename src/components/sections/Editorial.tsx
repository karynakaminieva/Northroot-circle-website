"use client";
import { useReveal } from "@/lib/useReveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Editorial() {
  const ref = useReveal();

  return (
    <section className="bg-ink py-24 lg:py-36 px-[var(--nr-page-pad)] overflow-hidden">
      <div className="max-w-[1484px] mx-auto">
        {/* Marquee-style large quote */}
        <div className="mb-20 lg:mb-28 overflow-hidden">
          <p
            className="nr-display-lg text-paper/10 whitespace-nowrap select-none"
            style={{ transform: "translateX(-4%)" }}
          >
            Patient Capital · Long Horizons · Considered Networks ·
          </p>
        </div>

        {/* Testimonials */}
        <div
          ref={ref}
          className="nr-reveal grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(245,241,234,0.08)]"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-ink px-8 lg:px-10 py-12 flex flex-col justify-between gap-8"
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
                <path
                  d="M0 22V13.8C0 9.8 1.23333 6.46667 3.7 3.8C6.16667 1.13333 9.3 0 13.1 0L14 2.2C11.5333 2.73333 9.5 3.96667 7.9 5.9C6.3 7.83333 5.5 9.86667 5.5 12H11V22H0ZM17 22V13.8C17 9.8 18.2333 6.46667 20.7 3.8C23.1667 1.13333 26.3 0 30.1 0L31 2.2C28.5333 2.73333 26.5 3.96667 24.9 5.9C23.3 7.83333 22.5 9.86667 22.5 12H28V22H17Z"
                  fill="rgba(245,241,234,0.2)"
                />
              </svg>
              <p className="nr-quote text-paper/85 text-[20px]" style={{ fontSize: "clamp(16px,1.8vw,22px)", fontFamily: "'Fraunces', Georgia, serif" }}>
                "{t.quote}"
              </p>
              <div>
                <p className="text-paper/90 font-medium text-[15px] tracking-tight">{t.name}</p>
                <p className="text-paper/45 text-[13px] tracking-tight mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
