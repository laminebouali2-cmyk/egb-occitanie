import type { Metadata } from "next";
import { CalculateurPrixContent } from "@/components/CalculateurPrixContent";

export const metadata: Metadata = {
  title: "Calculateur Prix Construction & R\u00e9novation Toulouse - Estimation Gratuite",
  description:
    "Estimez le prix de votre projet de construction villa, r\u00e9novation ou extension \u00e0 Toulouse. Calculateur gratuit, r\u00e9sultat personnalis\u00e9 par quartier et niveau de finition.",
  keywords: [
    "prix construction toulouse",
    "calculateur prix r\u00e9novation",
    "estimation co\u00fbt construction maison",
    "devis construction toulouse",
  ],
  alternates: {
    canonical: "https://egb-occitanie.fr/calculateur-prix",
  },
  openGraph: {
    title: "Calculateur Prix Construction & R\u00e9novation Toulouse",
    description:
      "Estimez gratuitement le prix de votre projet de construction ou r\u00e9novation \u00e0 Toulouse.",
    url: "https://egb-occitanie.fr/calculateur-prix",
  },
};

export default function CalculateurPrixPage() {
  return <CalculateurPrixContent />;
}
