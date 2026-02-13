import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remplacement de Pare-Brise Yvelines (78) | Prix, D\u00E9lai, Assurance — Shedli Auto",
  description:
    "Changement de pare-brise en 1h \u00E0 domicile dans les Yvelines. Tous v\u00E9hicules, prise en charge assurance directe, garantie 2 ans. Devis gratuit.",
  alternates: {
    canonical: "/remplacement-pare-brise",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
