"use client";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/lib/data";

interface FooterProps {
  onNavigate: (id: string) => void;
  onApply: () => void;
}

export default function Footer({ onNavigate, onApply }: FooterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="bg-ink" id="footer">
      {/* Newsletter band */}
      <div
        id="newsletter"
        className="border-b border-[rgba(245,241,234,0.1)] px-[var(--nr-page-pad)] py-20 lg:py-28"
      >
        <div className="max-w-[1484px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 items-center">
          <div className="flex flex-col gap-4">
            <p className="nr-eyebrow text-[var(--nr-accent)]">The Briefing</p>
            <h2
              className="text-paper font-medium tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
            >
              Thinking worth reading,<br />monthly.
            </h2>
            <p className="text-paper/50 text-[16px] leading-[1.6] max-w-[400px]">
              The Northroot monthly briefing — curated insights, deal commentary,
              and member perspectives. No filler. Unsubscribe anytime.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="flex flex-col gap-3">
                <p className="nr-eyebrow text-[var(--nr-accent)]">You're on the list.</p>
                <p className="text-paper/50 text-[15px]">
                  Watch for the next briefing in your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 min-w-[220px] bg-[rgba(245,241,234,0.08)] border border-[rgba(245,241,234,0.15)] text-paper placeholder:text-paper/30 px-5 py-4 text-[15px] tracking-tight focus:outline-none focus:border-[var(--nr-accent)] transition-colors duration-[260ms]"
                  />
                  <button
                    type="submit"
                    className="nr-subscribe flex items-center gap-2 px-7 py-4 border border-[rgba(245,241,234,0.3)] text-paper/70 nr-eyebrow hover:text-paper hover:border-paper/50 transition-all duration-[260ms] group"
                  >
                    Subscribe
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-[260ms] group-hover:translate-x-1 group-hover:-translate-y-1">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <p className="text-paper/30 text-[12px] tracking-tight">
                  We respect your inbox. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="px-[var(--nr-page-pad)] py-12 lg:py-16">
        <div className="max-w-[1484px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-10 lg:gap-16 items-start">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Logo className="w-7 h-7 text-[var(--nr-accent)]" color="currentColor" />
                <span
                  className="text-paper font-medium tracking-tight uppercase text-[17px]"
                  style={{ fontFamily: "'Alumni Sans SC', Impact, sans-serif" }}
                >
                  Northroot Circle
                </span>
              </div>
              <p className="text-paper/35 text-[13px] leading-relaxed max-w-[220px]">
                An invitation-only investment community for considered investors.
              </p>
            </div>

            {/* Nav links */}
            <nav className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="nr-footer-link nr-eyebrow text-paper/40 hover:text-[var(--nr-olive)] transition-colors duration-[260ms] text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:invitations@northroot.co"
                className="nr-footer-link nr-eyebrow text-paper/40 hover:text-[var(--nr-olive)] transition-colors duration-[260ms]"
              >
                invitations@northroot.co
              </a>
            </nav>

            {/* Apply CTA */}
            <button
              onClick={onApply}
              className="self-start flex items-center gap-2 px-6 py-3 border border-[rgba(245,241,234,0.2)] text-paper/60 nr-eyebrow hover:border-[var(--nr-accent)] hover:text-[var(--nr-accent)] transition-all duration-[260ms]"
            >
              Apply
            </button>
          </div>

          <hr className="nr-rule border-[rgba(245,241,234,0.08)] mt-12 mb-8" />

          {/* Legal */}
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <p className="text-paper/25 text-[12px] tracking-tight">
              © {new Date().getFullYear()} Northroot Circle. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Use", "Disclosures"].map((link) => (
                <a key={link} href="#" className="text-paper/25 text-[12px] tracking-tight hover:text-paper/50 transition-colors duration-[260ms]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <p className="text-paper/15 text-[11px] tracking-tight mt-4 max-w-[640px] leading-relaxed">
            Nothing on this site constitutes investment advice or an offer or
            solicitation to buy or sell any security or investment product.
            Northroot Circle is not a registered investment adviser, broker-dealer,
            or financial institution.
          </p>
        </div>
      </div>
    </footer>
  );
}
