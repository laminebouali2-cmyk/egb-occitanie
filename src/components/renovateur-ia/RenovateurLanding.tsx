"use client";

import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { DemoSection } from "./DemoSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { PricingSection } from "./PricingSection";
import { CTASection } from "./CTASection";
import { RenovateurHeader } from "./RenovateurHeader";
import { RenovateurFooter } from "./RenovateurFooter";

export function RenovateurLanding() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="renovateur-landing">
      <RenovateurHeader onOpenDemo={() => setIsDemoOpen(true)} />

      <main>
        <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
        <FeaturesSection />
        <DemoSection isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection onOpenDemo={() => setIsDemoOpen(true)} />
      </main>

      <RenovateurFooter />
    </div>
  );
}
