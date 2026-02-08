import type { Metadata } from "next";
import { ExpertiseContent } from "@/components/ExpertiseContent";

export const metadata: Metadata = {
  title: "Nos Expertises | Construction, Rénovation, Extension à Toulouse",
  description:
    "Quatre savoir-faire, une même exigence. Construction villa, rénovation maison, extension, performance énergétique à Toulouse et en Occitanie. Devis gratuit.",
  openGraph: {
    title: "Nos Expertises | EGB Occitanie",
    description:
      "Construction, rénovation, extension, performance énergétique. Quatre expertises premium à Toulouse.",
    url: "https://egb-occitanie.fr/expertise",
  },
};

export default function ExpertisePage() {
  return <ExpertiseContent />;
}
