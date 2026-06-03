"use client";
import { useState, useEffect } from "react";
import { APPLICATION_STEPS } from "@/lib/data";

interface ApplicationFlowProps {
  open: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export default function ApplicationFlow({ open, onClose, onComplete }: ApplicationFlowProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setTimeout(() => { setStep(0); setSubmitted(false); }, 600);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const currentStep = APPLICATION_STEPS[step];
  const isLast = step === APPLICATION_STEPS.length - 1;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLast) {
      setSubmitted(true);
      setTimeout(() => { onClose(); onComplete(); }, 2000);
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-8 transition-all duration-[520ms] ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className={`relative w-full sm:max-w-[580px] bg-paper transition-transform duration-[520ms] ${
          open ? "translate-y-0" : "translate-y-8"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Progress bar */}
        <div className="h-[3px] bg-[var(--nr-grey-15)]">
          <div
            className="h-full bg-[var(--nr-accent)] transition-all duration-[520ms]"
            style={{ width: submitted ? "100%" : `${((step + 1) / APPLICATION_STEPS.length) * 100}%` }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[var(--nr-border)]">
          <div className="flex flex-col gap-1">
            <p className="nr-eyebrow text-[var(--nr-accent)]">
              Application — Step {step + 1} of {APPLICATION_STEPS.length}
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-[var(--nr-grey-50)] hover:text-ink transition-colors" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        {submitted ? (
          <div className="px-8 py-12 flex flex-col gap-4 items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--nr-olive-soft)] flex items-center justify-center">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M1 8L7 14L19 2" stroke="#0F1720" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-ink font-medium tracking-tight" style={{ fontSize: "24px", letterSpacing: "-0.04em" }}>
              Application received
            </h3>
            <p className="text-[var(--nr-grey-70)] text-[15px] leading-relaxed max-w-[360px]">
              We'll review your application and be in touch within 5 business days.
              Thank you for your interest in Northroot Circle.
            </p>
          </div>
        ) : (
          <form onSubmit={handleNext} className="px-8 py-8 flex flex-col gap-6">
            <h3
              className="text-ink font-medium tracking-tight"
              style={{ fontSize: "22px", lineHeight: 1.15, letterSpacing: "-0.04em" }}
            >
              {currentStep.title}
            </h3>

            <div className="flex flex-col gap-5">
              {currentStep.fields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label className="nr-eyebrow text-[var(--nr-grey-70)]">
                    {field.label}
                    {field.required && <span className="text-[var(--nr-accent)] ml-1">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      required={field.required}
                      rows={4}
                      value={formData[field.id] || ""}
                      onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                      className="nr-field border border-[var(--nr-border)] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-[var(--nr-grey-30)] tracking-tight focus:outline-none focus:border-ink transition-colors duration-[260ms] resize-none"
                      placeholder={field.label}
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      value={formData[field.id] || ""}
                      onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                      className="nr-field border border-[var(--nr-border)] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-[var(--nr-grey-30)] tracking-tight focus:outline-none focus:border-ink transition-colors duration-[260ms]"
                      placeholder={field.label}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="nr-eyebrow text-[var(--nr-grey-50)] hover:text-ink transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-4 bg-ink text-paper nr-eyebrow hover:bg-[var(--nr-accent)] hover:text-[var(--nr-accent-fg)] transition-colors duration-[260ms]"
              >
                {isLast ? "Submit application" : "Continue →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
