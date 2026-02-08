import type { Metadata } from "next";
import { ProjetsContent } from "@/components/ProjetsContent";

export const metadata: Metadata = {
  title: "Nos Réalisations | Construction & Rénovation Premium Toulouse",
  description:
    "Découvrez nos réalisations en construction neuve, rénovation et extension à Toulouse et en Occitanie. Villas contemporaines, réhabilitations de caractère, extensions sur-mesure.",
  keywords: [
    "réalisations construction toulouse",
    "portfolio constructeur toulouse",
    "photos villa toulouse",
    "projets rénovation toulouse",
    "avant après rénovation",
  ],
  openGraph: {
    title: "Nos Réalisations | Construction & Rénovation Premium Toulouse",
    description:
      "Portfolio de nos constructions et rénovations à Toulouse. Villas, maisons, extensions — chaque projet raconte une histoire.",
    url: "https://egb-occitanie.fr/projets",
  },
};

export default function ProjetsPage() {
  return <ProjetsContent />;
}
