"use client";
import { useReveal } from "@/lib/useReveal";
import { JOURNAL_ARTICLES } from "@/lib/data";

interface JournalProps {
  onOpenArticle: (index: number) => void;
}

export default function Journal({ onOpenArticle }: JournalProps) {
  const ref = useReveal();
  const featured = JOURNAL_ARTICLES[0];
  const rest = JOURNAL_ARTICLES.slice(1, 5);

  return (
    <section id="journal" className="bg-paper-2 py-24 lg:py-36 px-[var(--nr-page-pad)]">
      <div className="max-w-[1484px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div className="flex flex-col gap-4">
            <p className="nr-eyebrow text-[var(--nr-grey-50)]">The Journal</p>
            <hr className="nr-rule w-48" />
          </div>
          <button
            onClick={() => onOpenArticle(-1)}
            className="hidden sm:flex items-center gap-2 nr-eyebrow text-[var(--nr-grey-50)] hover:text-ink transition-colors duration-[260ms]"
          >
            All articles
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div ref={ref} className="nr-reveal grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-1 bg-[var(--nr-border)]">
          {/* Featured article */}
          <button
            onClick={() => onOpenArticle(0)}
            className="nr-journal-card bg-ink p-8 lg:p-12 flex flex-col gap-6 text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="nr-eyebrow text-[var(--nr-accent)]">{featured.category}</span>
              <span className="nr-eyebrow text-paper/30">{featured.date}</span>
            </div>
            <h3
              className="text-paper font-medium tracking-tight nr-journal-link group-hover:text-[var(--nr-olive)] transition-colors duration-[260ms]"
              style={{ fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.1, letterSpacing: "-0.04em" }}
            >
              {featured.title}
            </h3>
            <p className="text-paper/60 text-[16px] leading-[1.6]">{featured.summary}</p>
            <div className="flex items-center gap-2 nr-eyebrow text-[var(--nr-accent)] mt-auto">
              Read · {featured.readTime}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-[260ms] group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {/* Article list */}
          <div className="flex flex-col bg-paper">
            {rest.map((article, i) => (
              <button
                key={i}
                onClick={() => onOpenArticle(i + 1)}
                className="nr-journal-card flex flex-col gap-3 p-6 lg:p-8 border-b border-[var(--nr-border)] last:border-0 text-left group cursor-pointer hover:bg-paper-2 transition-colors duration-[260ms]"
              >
                <div className="flex items-center justify-between">
                  <span className="nr-eyebrow text-[var(--nr-accent)]">{article.category}</span>
                  <span className="nr-eyebrow text-[var(--nr-grey-30)]">{article.date}</span>
                </div>
                <h4
                  className="text-ink font-medium tracking-tight nr-journal-link group-hover:text-[var(--nr-moss)] transition-colors duration-[260ms]"
                  style={{ fontSize: "17px", lineHeight: 1.2, letterSpacing: "-0.03em" }}
                >
                  {article.title}
                </h4>
                <span className="nr-eyebrow text-[var(--nr-grey-50)]">{article.readTime}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
