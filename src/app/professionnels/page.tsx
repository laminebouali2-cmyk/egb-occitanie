import type { Metadata } from "next";
import { ProfessionnelsContent } from "@/components/ProfessionnelsContent";

export const metadata: Metadata = {
  title: "Programme Partenaires | EGB Occitanie — Construction & Rénovation Toulouse",
  description:
    "Architectes, agents immobiliers, courtiers : recommandez EGB Occitanie et soyez rémunéré. Budget garanti, plans respectés, réputation protégée. Toulouse & Occitanie.",
  openGraph: {
    title: "Programme Partenaires | EGB Occitanie",
    description:
      "Vous recommandez. On exécute. Vous êtes rémunéré. Rejoignez le réseau de partenaires d'EGB Occitanie.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel type de projets EGB Occitanie accepte ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Construction neuve, rénovation complète, extension, gros œuvre. Projets résidentiels et tertiaires à partir de 100 000 € HT sur Toulouse et toute l'Occitanie.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il signer un contrat d'exclusivité pour devenir partenaire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Aucun engagement, aucune exclusivité. Vous restez libre de travailler avec qui vous souhaitez.",
      },
    },
    {
      "@type": "Question",
      name: "Comment fonctionne la rémunération des partenaires EGB ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les conditions sont discutées en direct lors du premier échange. Chaque partenariat est sur-mesure, transparent et formalisé.",
      },
    },
    {
      "@type": "Question",
      name: "Comment suivre l'avancement d'un chantier recommandé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous disposez d'un interlocuteur dédié et d'un accès au suivi de chantier avec points réguliers, photos et planning.",
      },
    },
  ],
};

export default function ProfessionnelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ProfessionnelsContent />
    </>
  );
}
