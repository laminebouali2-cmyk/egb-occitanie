import { Metadata } from "next";
import { RenovateurLanding } from "@/components/renovateur-ia/RenovateurLanding";

export const metadata: Metadata = {
  title: "Renovateur IA | Planifiez votre renovation avec l'intelligence artificielle",
  description:
    "Transformez vos projets de renovation avec notre assistant IA. Estimez vos couts, visualisez les transformations et planifiez chaque etape. Outil professionnel pour particuliers et entreprises du batiment.",
  keywords: [
    "renovation IA",
    "planificateur renovation",
    "estimation travaux",
    "assistant renovation",
    "devis renovation",
    "visualisation travaux",
  ],
};

export default function RenovateurIAPage() {
  return <RenovateurLanding />;
}
