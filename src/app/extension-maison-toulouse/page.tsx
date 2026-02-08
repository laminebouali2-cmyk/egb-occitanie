import type { Metadata } from "next";
import { ExtensionMaisonContent } from "@/components/ExtensionMaisonContent";

export const metadata: Metadata = {
  title: "Extension Maison Toulouse | Agrandissement & Surélévation Expert Haute-Garonne",
  description:
    "Spécialiste extension maison à Toulouse. Extension latérale, surélévation, ossature bois, véranda. Permis de construire géré. Architectes DPLG partenaires. Étude de faisabilité gratuite.",
  keywords: [
    "extension maison toulouse",
    "agrandissement maison toulouse",
    "surélévation maison toulouse",
    "extension ossature bois toulouse",
    "extension véranda toulouse",
    "architecte extension toulouse",
    "permis construire extension toulouse",
    "extension maison toulousaine",
    "surelevation toit plat toulouse",
  ],
  openGraph: {
    title: "Extension Maison Toulouse | Agrandissement & Surélévation Expert",
    description:
      "Extension maison Toulouse : latérale, surélévation, ossature bois, véranda. Architectes DPLG, permis géré, budget forfaitaire. Étude gratuite.",
    url: "https://egb-occitanie.fr/extension-maison-toulouse",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel type d'extension choisir pour sa maison à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le choix dépend de votre terrain, du PLU applicable et de vos besoins. Extension latérale si vous disposez d'espace au sol (solution la plus accessible). Surélévation si le terrain est petit et que vous souhaitez conserver votre jardin. Ossature bois pour un chantier rapide et une performance thermique élevée. Véranda pour un apport maximal de lumière naturelle. Une étude de faisabilité gratuite permet de comparer les options."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un permis de construire pour une extension à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Permis de construire obligatoire si l'extension dépasse 20 m² (ou 40 m² en zone couverte par un PLU si la surface totale reste sous 150 m²). Déclaration préalable entre 5 et 20 m². Au-delà de 150 m² de surface totale après travaux, le recours à un architecte DPLG est obligatoire. En zone ABF (centre historique de Toulouse), l'avis de l'Architecte des Bâtiments de France est requis. EGB Occitanie gère l'intégralité des démarches administratives."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour réaliser une extension de maison ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durée totale comprend plusieurs phases : conception architecturale (quelques semaines), instruction du permis de construire (deux mois, trois en zone ABF), délai de recours des tiers (deux mois), puis les travaux dont la durée varie selon l'ampleur du projet. Le planning est contractuel et détaillé semaine par semaine."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on habiter pendant les travaux d'extension ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour une extension latérale ou une véranda, il est généralement possible de rester chez soi car le chantier est séparé de la partie habitée. Pour une surélévation impliquant la dépose de la toiture, un logement temporaire est nécessaire pendant la phase de mise hors d'eau. Le phasage du chantier est adapté à vos contraintes."
      }
    },
    {
      "@type": "Question",
      "name": "Extension ou déménagement : que choisir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'extension est souvent plus avantageuse qu'un déménagement, surtout à Toulouse où le marché immobilier est tendu. Vous conservez votre quartier, votre jardin, vos habitudes, et vous personnalisez l'espace selon vos besoins exacts. Une étude comparative gratuite permet de prendre la bonne décision en fonction de votre situation."
      }
    },
    {
      "@type": "Question",
      "name": "Comment s'intègre l'extension à la maison existante ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'architecte conçoit l'extension pour qu'elle s'harmonise avec la maison existante : continuité des matériaux, des lignes de toiture, des proportions. Le raccordement entre l'existant et le neuf est traité avec soin — isolation du pont thermique, étanchéité, cohérence des finitions intérieures. L'intégration doit sembler naturelle."
      }
    }
  ]
};

export default function ExtensionMaisonToulouse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ExtensionMaisonContent />
    </>
  );
}
