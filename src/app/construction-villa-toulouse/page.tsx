import type { Metadata } from "next";
import { ConstructionVillaContent } from "@/components/ConstructionVillaContent";

export const metadata: Metadata = {
  title: "Construction Villa Toulouse | Constructeur Maison Sur-Mesure Haute-Garonne",
  description:
    "Construction de villa neuve à Toulouse et Haute-Garonne. Architecte partenaire, contrat CCMI, délais garantis, qualité premium. Devis gratuit sous 48h.",
  keywords: [
    "construction villa toulouse",
    "constructeur maison toulouse",
    "villa sur-mesure toulouse",
    "construction neuve haute-garonne",
    "architecte maison toulouse",
    "villa haut de gamme toulouse",
    "constructeur villa occitanie",
    "maison contemporaine toulouse",
  ],
  openGraph: {
    title: "Construction Villa Toulouse | EGB Occitanie",
    description:
      "Spécialiste construction villa neuve à Toulouse. Architectes partenaires, contrat CCMI, garantie décennale. Devis gratuit.",
    url: "https://egb-occitanie.fr/construction-villa-toulouse",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment se déroule un projet de construction de villa à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le projet commence par une rencontre pour comprendre vos besoins et analyser votre terrain. Vient ensuite la conception architecturale avec plans et perspectives 3D. Après obtention du permis de construire, le chantier démarre avec un suivi hebdomadaire jusqu'à la remise des clés. Un interlocuteur unique vous accompagne à chaque étape."
      }
    },
    {
      "@type": "Question",
      "name": "Quel budget prévoir pour construire une villa à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le budget dépend de la surface, du terrain, du niveau de finition et de la complexité architecturale. Chaque projet étant unique, nous établissons un devis précis après étude. Ce que nous garantissons : un prix forfaitaire définitif dans le cadre d'un contrat CCMI, sans dépassement, détaillé poste par poste."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour construire une villa à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durée globale inclut la phase d'études et de permis de construire, puis la phase de chantier proprement dite. Le planning est contractuel et adapté à la complexité de chaque projet. Un suivi rigoureux semaine par semaine garantit le respect des délais convenus."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un architecte pour construire une villa à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'architecte est obligatoire pour toute construction supérieure à 150 m² de surface de plancher. En dessous, nous recommandons vivement de travailler avec un architecte pour optimiser les plans, le confort et la valeur de votre villa. Nos architectes partenaires sont spécialisés en habitat individuel à Toulouse."
      }
    },
    {
      "@type": "Question",
      "name": "Quels quartiers pour construire une villa autour de Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Castanet-Tolosan, Ramonville, Balma, Quint-Fonsegrives, Colomiers, L'Union, Pibrac, Saint-Orens font partie des communes prisées. Le choix dépend de vos priorités : proximité emploi, écoles, cadre de vie, budget terrain. Nous vous accompagnons dans l'analyse de chaque secteur."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles garanties pour une construction de villa neuve ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toute construction neuve bénéficie de trois garanties légales obligatoires : la garantie de parfait achèvement (1 an), la garantie biennale couvrant les équipements (2 ans), et la garantie décennale couvrant la structure (10 ans). Le contrat CCMI ajoute un cadre juridique protecteur avec prix et délais garantis."
      }
    }
  ]
};

export default function ConstructionVillaToulouse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ConstructionVillaContent />
    </>
  );
}
