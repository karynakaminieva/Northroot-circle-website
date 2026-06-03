"use client";

interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "", color = "currentColor" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Northroot Circle"
    >
      <g stroke={color} strokeWidth="6" strokeLinecap="round">
        <line x1="60" y1="130" x2="60" y2="50" />
        <path d="M60 70 C60 55 42 48 30 40" />
        <path d="M60 70 C60 55 78 48 90 40" />
        <path d="M60 95 C60 80 40 72 26 64" />
        <path d="M60 95 C60 80 80 72 94 64" />
      </g>
      <circle cx="30" cy="38" r="8" fill={color} />
      <circle cx="90" cy="38" r="8" fill={color} />
      <circle cx="26" cy="62" r="8" fill={color} />
      <circle cx="94" cy="62" r="8" fill={color} />
      <rect x="42" y="130" width="36" height="8" rx="4" fill={color} />
    </svg>
  );
}
