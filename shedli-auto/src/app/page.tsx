import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { PainPoint } from "@/components/sections/PainPoint";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { ReviewsPreview } from "@/components/sections/ReviewsPreview";
import { ServiceZone } from "@/components/sections/ServiceZone";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title:
    "Remplacement Pare-Brise Yvelines (78) | Intervention Mobile à Domicile — Shedli Auto",
  description:
    "Pare-brise fissuré dans les Yvelines (78) ? Shedli Auto intervient chez vous sous 24-48h. Prise en charge assurance directe, 0 € d'avance, garantie 2 ans. Appelez le 06 28 43 88 44.",
  keywords:
    "remplacement pare-brise Yvelines, pare-brise 78, réparation pare-brise Versailles, pare-brise à domicile, Shedli Auto, intervention mobile pare-brise, pare-brise Plaisir, pare-brise Saint-Germain-en-Laye",
  alternates: {
    canonical: "https://shedliauto.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <PainPoint />
      <HowItWorks />
      <WhyUs />
      <ReviewsPreview />
      <ServiceZone />
      <CtaBanner />
    </>
  );
}
