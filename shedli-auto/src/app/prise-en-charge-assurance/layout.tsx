import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pare-Brise Prise en Charge Assurance | 0\u20AC d\u2019Avance — Shedli Auto",
  description:
    "Votre pare-brise pris en charge par votre assurance, sans avance de frais. On g\u00E8re tout le dossier bris de glace. Yvelines (78).",
  alternates: {
    canonical: "/prise-en-charge-assurance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
