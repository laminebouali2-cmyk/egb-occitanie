import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Labège | Technopole Business Park 16 Permis/An",
  description: "Constructeur villa Labège. Technopole business 17k hab, 2ème pôle emploi agglo, 16 permis/an, prix 420-500€/m². Métro ligne B. Expert Labège.",
  keywords: ["construction villa labege", "constructeur maison labege", "terrain labege toulouse"],
};

export default function ConstructionVillaLabegePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-gradient-to-br from-fuchsia-900 to-fuchsia-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Construction Villa <span className="text-fuchsia-400">Labège</span></h1>
          <p className="text-xl mb-8">Technopole business, 2ème pôle emploi, 16 permis/an, métro B</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-lg">Devis Gratuit Labège</a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Labège : Technopole Business + Métro B</h2>
          <p className="text-lg text-stone-700 mb-4">
            Labège = technopole business 17 000 habitants, <strong>2ème pôle emploi agglomération</strong> (8 500 emplois Innopole, entreprises high-tech), métro ligne B direct centre Toulouse 22min.
          </p>
          <p className="text-lg text-stone-700">
            Marché construction actif : 16 permis/an, prix terrain 420-500€/m². Infrastructures : centre commercial Labège 2, écoles 8.1/10, autoroute A61 directe.
          </p>
        </div>
      </section>
      <section className="py-8 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/construction-villa-toulouse" className="text-fuchsia-700 hover:underline">→ Construction Villa Toulouse</Link>
        </div>
      </section>
    </main>
  );
}
