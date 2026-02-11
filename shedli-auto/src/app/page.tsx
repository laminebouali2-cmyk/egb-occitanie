import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { ReviewsPreview } from "@/components/sections/ReviewsPreview";
import { ServiceZone } from "@/components/sections/ServiceZone";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title:
    "Remplacement Pare-Brise Yvelines (78) | Intervention Mobile — Shedli Auto",
  description:
    "Pare-brise fissuré dans les Yvelines ? Shedli Auto intervient chez vous sous 24-48h. Prise en charge assurance directe, devis gratuit. Appelez le 06 28 43 88 44.",
  alternates: {
    canonical: "https://shedliauto.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <HowItWorks />
      <WhyUs />
      <ReviewsPreview />
      <ServiceZone />
      <CtaBanner />
    </>
  );
}
