import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northroot Circle — A modern investment community",
  description:
    "Northroot Circle is an invitation-only investment community for considered investors — curated opportunities, investor education, and a network built around long-term thinking.",
  metadataBase: new URL("https://northroot.co"),
  openGraph: {
    type: "website",
    siteName: "Northroot Circle",
    title: "Northroot Circle — A modern investment community",
    description:
      "An invitation-only community for considered investors. Curated opportunities, investor education, and a network built around long-term thinking.",
    url: "https://northroot.co/",
    images: [{ url: "/assets/hero-background.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northroot Circle — A modern investment community",
    description:
      "An invitation-only community for considered investors. Long-term thinking, with better company.",
    images: ["/assets/hero-background.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1720",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
