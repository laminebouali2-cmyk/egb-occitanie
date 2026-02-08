import type { Metadata } from "next";
import { RenovationEnergetiqueContent } from "@/components/RenovationEnergetiqueContent";

export const metadata: Metadata = {
  title: "Rénovation Énergétique Toulouse | MaPrimeRénov' 2025 — Isolation, PAC, DPE",
  description:
    "Spécialiste rénovation énergétique à Toulouse. Isolation, pompe à chaleur, menuiseries, VMC. Montage complet des aides MaPrimeRénov', Éco-PTZ, CEE. Gain DPE garanti. Artisans RGE certifiés. Devis gratuit.",
  keywords: [
    "rénovation énergétique toulouse",
    "maprimerénov toulouse",
    "isolation maison toulouse",
    "DPE toulouse",
    "pompe à chaleur toulouse",
    "aides rénovation toulouse 2025",
    "eco ptz toulouse",
    "améliorer dpe toulouse",
    "isolation combles toulouse",
    "chauffage économique toulouse",
  ],
  openGraph: {
    title: "Rénovation Énergétique Toulouse | Aides MaPrimeRénov' 2025",
    description:
      "Expert rénovation énergétique Toulouse. Isolation, PAC, menuiseries, VMC. Aides MaPrimeRénov' gérées. Gain DPE garanti. Devis gratuit.",
    url: "https://egb-occitanie.fr/renovation-energetique-toulouse",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelles aides pour la rénovation énergétique en 2025 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quatre dispositifs principaux sont cumulables : MaPrimeRénov' (jusqu'à 20 000€ selon revenus et travaux), l'Éco-PTZ (prêt à taux zéro jusqu'à 50 000€ remboursable sur 20 ans), les primes CEE versées par les fournisseurs d'énergie, et la TVA réduite à 5,5%. Selon votre profil, ces aides peuvent couvrir une part significative du coût total des travaux.",
      },
    },
    {
      "@type": "Question",
      name: "Comment améliorer le DPE de ma maison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un audit énergétique identifie les déperditions principales. En combinant isolation (combles, murs, planchers), menuiseries performantes, système de chauffage adapté (PAC, condensation) et ventilation (VMC double-flux), il est possible de passer d'un DPE G ou F à un DPE B ou C. L'ordre et la combinaison des interventions sont déterminants.",
      },
    },
    {
      "@type": "Question",
      name: "Par quoi commencer une rénovation énergétique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toujours par un audit énergétique complet. Il permet de hiérarchiser les interventions selon leur impact réel. En règle générale, l'isolation (combles puis murs) est le premier levier, suivie du remplacement du système de chauffage et de la ventilation.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps pour une rénovation énergétique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une intervention ciblée (isolation des combles, remplacement de chauffage) prend quelques semaines. Une rénovation énergétique globale — isolation complète, menuiseries, chauffage, ventilation — s'étale sur deux à quatre mois. Le planning est contractuel.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il des artisans RGE pour les aides ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la certification RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier de MaPrimeRénov', de l'Éco-PTZ et des primes CEE. Elle atteste de la compétence de l'entreprise en matière de performance énergétique.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le retour sur investissement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le retour sur investissement dépend de la situation initiale, du type de travaux et des aides obtenues. Après déduction des aides, les économies sur les factures d'énergie permettent généralement de rentabiliser l'investissement en quelques années. Le gain de confort et la valorisation du bien sont immédiats.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rénovation Énergétique Toulouse",
  provider: {
    "@type": "LocalBusiness",
    name: "EGB Occitanie",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toulouse",
      addressRegion: "Occitanie",
      addressCountry: "FR",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Toulouse",
  },
  description:
    "Rénovation énergétique complète à Toulouse : isolation, pompe à chaleur, menuiseries, VMC. Montage des aides MaPrimeRénov', Éco-PTZ, CEE. Artisans RGE certifiés.",
};

export default function RenovationEnergetiqueToulouse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <RenovationEnergetiqueContent />
    </>
  );
}
