"use client";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium tracking-tight uppercase transition-all duration-[260ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFBF6C] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-[var(--nr-accent)] text-[var(--nr-accent-fg)] hover:bg-[#9C9C50]",
      ghost:   "border border-[rgba(15,23,32,0.22)] text-ink hover:bg-ink hover:text-paper",
      outline: "border border-[rgba(245,241,234,0.3)] text-paper hover:bg-paper hover:text-ink",
    };

    const sizes = {
      sm: "px-5 py-3 text-[13px]",
      md: "px-7 py-4 text-[15px]",
      lg: "px-10 py-5 text-[17px]",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
