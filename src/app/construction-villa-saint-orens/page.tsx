import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Saint-Orens | Est Premium CSP+ 62%",
  description: "Constructeur villa Saint-Orens. Est Toulouse 12k hab, CSP+ 62%, revenu 52k€/an, 14 permis/an, prix 520-600€/m². Suburb premium. Expert Saint-Orens.",
  keywords: ["construction villa saint orens", "constructeur maison saint orens", "terrain saint orens toulouse"],
};

export default function ConstructionVillaSaintOrensPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-gradient-to-br from-violet-900 to-violet-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Construction Villa <span className="text-violet-400">Saint-Orens</span></h1>
          <p className="text-xl mb-8">Est premium, CSP+ 62%, revenu 52k€/an, prix 520-600€/m²</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg">Devis Gratuit Saint-Orens</a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Saint-Orens : Est Premium CSP++</h2>
          <p className="text-lg text-stone-700 mb-4">
            Saint-Orens-de-Gameville = suburb premium est Toulouse 12 000 habitants, <strong>profil CSP++ 62%</strong> (revenu médian 52 000€/an, cadres supérieurs, professions libérales).
          </p>
          <p className="text-lg text-stone-700">
            Marché construction sélectif : 14 permis/an, prix terrain premium 520-600€/m². Infrastructures excellentes : écoles 8.9/10, golf Saint-Orens, tennis club, métro ligne B 2029.
          </p>
        </div>
      </section>
      <section className="py-8 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/construction-villa-toulouse" className="text-violet-700 hover:underline">→ Construction Villa Toulouse</Link>
        </div>
      </section>
    </main>
  );
}
