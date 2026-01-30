import { Metadata } from "next";
import { RenovateurDashboard } from "@/components/renovateur-ia/RenovateurDashboard";

export const metadata: Metadata = {
  title: "Renovateur IA | Planificateur de Renovation Intelligent",
  description:
    "Concevez votre projet de renovation avec notre assistant IA. Visualisez, planifiez et estimez vos travaux en temps reel.",
};

export default function RenovateurIAPage() {
  return <RenovateurDashboard />;
}
