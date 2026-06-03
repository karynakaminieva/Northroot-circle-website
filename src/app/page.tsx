"use client";
import { useState } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Editorial from "@/components/sections/Editorial";
import Membership from "@/components/sections/Membership";
import HowItWorks from "@/components/sections/HowItWorks";
import Community from "@/components/sections/Community";
import Journal from "@/components/sections/Journal";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import MenuOverlay from "@/components/overlays/MenuOverlay";
import ApplicationFlow from "@/components/overlays/ApplicationFlow";
import Onboarding from "@/components/overlays/Onboarding";
import ArticleReader from "@/components/overlays/ArticleReader";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const [onbOpen, setOnbOpen] = useState(false);
  const [articleIndex, setArticleIndex] = useState<number | null>(null);

  const navTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: "smooth" });
  };

  const openApply = () => setApplyOpen(true);

  return (
    <>
      <a href="#intro" className="nr-skip">Skip to content</a>

      <Header onApply={openApply} onMenuOpen={() => setMenuOpen(true)} />

      <main>
        <Hero onApply={openApply} headlineColor="#D1DFFA" />
        <Intro />
        <FeatureGrid variant="rows" />
        <Editorial />
        <Membership onApply={openApply} />
        <HowItWorks onApply={openApply} />
        <Community />
        <Journal onOpenArticle={(i) => setArticleIndex(i)} />
        <FinalCTA onApply={openApply} />
      </main>

      <Footer onNavigate={navTo} onApply={openApply} />

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={(id) => { navTo(id); setMenuOpen(false); }}
        onApply={() => { setMenuOpen(false); openApply(); }}
      />
      <ApplicationFlow
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        onComplete={() => setOnbOpen(true)}
      />
      <Onboarding
        open={onbOpen}
        onClose={() => setOnbOpen(false)}
      />
      <ArticleReader
        index={articleIndex}
        onClose={() => setArticleIndex(null)}
        onOpen={(i) => setArticleIndex(i)}
      />
    </>
  );
}
