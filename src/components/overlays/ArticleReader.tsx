"use client";
import { useEffect } from "react";
import { JOURNAL_ARTICLES } from "@/lib/data";

interface ArticleReaderProps {
  index: number | null;
  onClose: () => void;
  onOpen: (index: number) => void;
}

const FULL_TEXT = `
The conventional wisdom says diversify. Spread your bets. Don't put too much in any one thing.
It's not wrong — but it masks a more important question: diversification from what, exactly?

Most retail portfolios diversify across correlated assets in bull markets and find,
in moments of stress, that everything falls together. True diversification is about
uncorrelated return streams, and that's a much harder thing to engineer than
owning 30 stocks instead of 10.

Meanwhile, the investors with the most impressive long-term records — Buffett,
Munger, Klarman, many of the great family offices — have historically run
concentrated books. They owned fewer things, understood them more deeply,
and held them longer than felt comfortable.

The edge isn't the number of holdings. It's the depth of conviction,
the patience of the time horizon, and the discipline not to confuse activity
with wisdom.

That said, concentration without rigour is just recklessness.
The question every considered investor should sit with is not
"how many positions should I hold?" but "how deeply do I understand
the businesses and assets I own — and am I being compensated fairly
for the risk I'm accepting?"

Diversification, properly understood, is a tool for managing epistemic humility:
the acknowledgment that we will sometimes be wrong, and that our portfolio should
survive those moments. For most investors, that humility is well-placed.
For a few — those with genuine edge, domain depth, and an unusually long horizon —
the willingness to concentrate is a real competitive advantage.

Knowing which category you're in is the hardest part.
`;

export default function ArticleReader({ index, onClose, onOpen }: ArticleReaderProps) {
  const article = index !== null && index >= 0 ? JOURNAL_ARTICLES[index] : null;
  const open = index !== null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[115] transition-all duration-[520ms] ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-[720px] bg-paper overflow-y-auto transition-transform duration-[520ms] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="sticky top-0 z-10 w-full flex items-center justify-between px-8 py-4 bg-paper/90 backdrop-blur-sm border-b border-[var(--nr-border)]"
        >
          <span className="nr-eyebrow text-[var(--nr-grey-50)]">Journal</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 3L15 15M15 3L3 15" stroke="#0F1720" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Article */}
        {article ? (
          <div className="px-8 lg:px-12 py-12 flex flex-col gap-8 max-w-[640px]">
            <div className="flex items-center justify-between">
              <span className="nr-eyebrow text-[var(--nr-accent)]">{article.category}</span>
              <span className="nr-eyebrow text-[var(--nr-grey-50)]">{article.date} · {article.readTime}</span>
            </div>

            <h1
              className="text-ink font-medium tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
            >
              {article.title}
            </h1>

            <p className="text-[var(--nr-grey-70)] text-[18px] leading-[1.6] font-medium">
              {article.summary}
            </p>

            <hr className="nr-rule" />

            <div className="flex flex-col gap-6 nr-dropcap">
              {FULL_TEXT.trim().split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-ink text-[17px] leading-[1.75] tracking-tight"
                >
                  {para}
                </p>
              ))}
            </div>

            <hr className="nr-rule mt-4" />

            {/* More articles */}
            <div className="flex flex-col gap-4">
              <p className="nr-eyebrow text-[var(--nr-grey-50)]">More from the Journal</p>
              <div className="flex flex-col gap-1">
                {JOURNAL_ARTICLES.filter((_, i) => i !== index).slice(0, 3).map((a, i) => {
                  const actualIndex = JOURNAL_ARTICLES.indexOf(a);
                  return (
                    <button
                      key={i}
                      onClick={() => onOpen(actualIndex)}
                      className="flex items-start gap-4 py-4 border-b border-[var(--nr-border)] text-left group hover:bg-paper-2 -mx-2 px-2 transition-colors duration-[260ms]"
                    >
                      <span className="nr-eyebrow text-[var(--nr-accent)] flex-shrink-0 mt-0.5">{a.category}</span>
                      <span className="text-[15px] text-ink tracking-tight group-hover:text-[var(--nr-moss)] transition-colors duration-[260ms]">{a.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          // Journal index fallback
          <div className="px-8 lg:px-12 py-12 flex flex-col gap-8">
            <h2
              className="text-ink font-medium tracking-tight"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 0.98, letterSpacing: "-0.04em", fontFamily: "'Alumni Sans SC', Impact, sans-serif", textTransform: "uppercase" }}
            >
              All Articles
            </h2>
            <div className="flex flex-col">
              {JOURNAL_ARTICLES.map((article, i) => (
                <button
                  key={i}
                  onClick={() => onOpen(i)}
                  className="flex flex-col gap-3 py-8 border-b border-[var(--nr-border)] text-left group"
                >
                  <div className="flex items-center justify-between">
                    <span className="nr-eyebrow text-[var(--nr-accent)]">{article.category}</span>
                    <span className="nr-eyebrow text-[var(--nr-grey-50)]">{article.date}</span>
                  </div>
                  <h3
                    className="text-ink font-medium tracking-tight group-hover:text-[var(--nr-moss)] transition-colors duration-[260ms]"
                    style={{ fontSize: "20px", lineHeight: 1.15, letterSpacing: "-0.03em" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-[var(--nr-grey-70)] text-[14px] leading-relaxed">{article.summary}</p>
                  <span className="nr-eyebrow text-[var(--nr-grey-30)]">{article.readTime}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
