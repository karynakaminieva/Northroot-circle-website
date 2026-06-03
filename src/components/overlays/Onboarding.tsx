"use client";
import { useEffect } from "react";
import Logo from "@/components/ui/Logo";

interface OnboardingProps {
  open: boolean;
  onClose: () => void;
}

export default function Onboarding({ open, onClose }: OnboardingProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center p-8 transition-all duration-[520ms] ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm" onClick={onClose} />

      <div
        className={`relative w-full max-w-[540px] bg-ink border border-[rgba(245,241,234,0.1)] p-10 lg:p-14 flex flex-col gap-8 transition-transform duration-[520ms] ${
          open ? "scale-100" : "scale-95"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-paper/40 hover:text-paper transition-colors" aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <Logo className="w-10 h-10 text-[var(--nr-accent)]" color="currentColor" />

        <div className="flex flex-col gap-4">
          <p className="nr-eyebrow text-[var(--nr-accent)]">You're in the queue</p>
          <h2
            className="text-paper font-medium tracking-tight"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
          >
            Welcome to Northroot Circle
          </h2>
          <p className="text-paper/60 text-[16px] leading-[1.65]">
            Your application is under review. We read every application
            personally and respond within five business days.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="nr-eyebrow text-paper/40">While you wait</p>
          <div className="flex flex-col gap-3">
            {[
              "Subscribe to The Briefing, our monthly investor newsletter",
              "Browse the public journal for a sense of how we think",
              "Reach out directly: invitations@northroot.co",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-[14px] text-paper/60 leading-snug">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--nr-accent)]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="self-start px-8 py-4 border border-[rgba(245,241,234,0.2)] text-paper/60 nr-eyebrow hover:border-paper/40 hover:text-paper transition-all duration-[260ms]"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
