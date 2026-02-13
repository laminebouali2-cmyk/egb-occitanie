import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Shedli Auto | Remplacement Pare-Brise Yvelines",
  description:
    "Contactez Shedli Auto pour un remplacement ou une réparation de pare-brise dans les Yvelines. Devis gratuit, intervention rapide à domicile. Appelez le 06 28 43 88 44.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
