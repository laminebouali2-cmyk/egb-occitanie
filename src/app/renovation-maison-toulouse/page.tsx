import type { Metadata } from "next";
import { RenovationMaisonContent } from "@/components/RenovationMaisonContent";

export const metadata: Metadata = {
  title: "Rénovation Maison Toulouse | Expert Rénovation Maison Toulousaine Brique Rose",
  description:
    "Spécialiste rénovation maison toulousaine en brique rose. Rénovation complète, énergétique, conservation patrimoine. Architectes partenaires, garantie décennale. Devis personnalisé gratuit.",
  keywords: [
    "rénovation maison toulouse",
    "rénovation maison toulousaine",
    "rénovation brique rose toulouse",
    "rénovation complète maison toulouse",
    "rénovation énergétique toulouse",
    "entreprise rénovation toulouse",
    "architecte rénovation toulouse",
    "prix rénovation maison toulouse",
    "rénovation maison ancienne toulouse",
    "rénovation maison de maître toulouse",
  ],
  openGraph: {
    title: "Rénovation Maison Toulouse | Expert Maison Toulousaine",
    description:
      "Spécialiste rénovation maison toulousaine brique rose. Architectes partenaires, garantie décennale. Devis personnalisé gratuit.",
    url: "https://egb-occitanie.fr/renovation-maison-toulouse",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le prix d'une rénovation complète de maison à Toulouse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le prix d'une rénovation complète à Toulouse varie selon l'ampleur des travaux, la surface et le niveau de finition. Chaque projet étant unique, nous établissons un devis précis et détaillé après visite technique. Ce devis est forfaitaire : le prix convenu est le prix final, sans dépassement. Les aides financières (MaPrimeRénov', Éco-PTZ, CEE) sont intégrées dès le départ.",
      },
    },
    {
      "@type": "Question",
      name: "Comment rénover une maison toulousaine en brique rose ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La rénovation d'une maison toulousaine en brique rose nécessite une expertise spécifique : nettoyage par micro-gommage (pas de sablage agressif), rejointoiement à la chaux naturelle, isolation par l'intérieur en laine de bois respirante compatible brique ancienne. En zone ABF centre historique, des contraintes supplémentaires s'appliquent sur façades, menuiseries et toitures. EGB Occitanie maîtrise ces réglementations et gère les dossiers ABF.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il un permis pour rénover une maison à Toulouse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le permis de construire n'est pas nécessaire pour une rénovation intérieure sans modification de façade ni de structure. Déclaration préalable obligatoire si modification aspect extérieur (fenêtres, couleur façade, toiture). Permis de construire obligatoire si extension >20m², surélévation, ou modification structure porteuse. EGB Occitanie gère l'ensemble des démarches administratives.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps pour rénover une maison à Toulouse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durée selon ampleur : rénovation légère (peinture, sols, cuisine) 2-3 mois, rénovation complète sans gros œuvre 4-6 mois, rénovation lourde avec structure 6-9 mois. Le planning est contractuel et respecté grâce à une planification rigoureuse et un suivi hebdomadaire.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles aides pour rénover une maison à Toulouse en 2025 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aides cumulables : MaPrimeRénov' (jusqu'à 20 000€ selon revenus), Éco-PTZ (prêt 0% jusqu'à 50 000€), CEE primes énergie, TVA réduite 5,5% sur travaux de rénovation énergétique. EGB Occitanie monte l'intégralité de vos dossiers d'aides (service inclus).",
      },
    },
  ],
};

export default function RenovationMaisonToulouse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RenovationMaisonContent />
    </>
  );
}
