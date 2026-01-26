import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Escalquens | Sud-Est Famille 10 Permis/An",
  description: "Constructeur villa Escalquens. Sud-Est Toulouse 7k hab, profil familles, 10 permis/an, prix 380-460€/m². Cadre calme. Expert Escalquens.",
  keywords: ["construction villa escalquens", "constructeur maison escalquens", "terrain escalquens toulouse"],
};

export default function ConstructionVillaEscalquensPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-gradient-to-br from-lime-900 to-lime-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Construction Villa <span className="text-lime-400">Escalquens</span></h1>
          <p className="text-xl mb-8">Sud-Est Toulouse, familles, 10 permis/an, prix 380-460€/m²</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg">Devis Gratuit Escalquens</a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Escalquens : Sud-Est Famille Calme</h2>
          <p className="text-lg text-stone-700 mb-4">
            Escalquens = suburb sud-est calme 7 000 habitants, profil familles (2.6 enfants/foyer), proximité Labège technopole 5min (emplois high-tech).
          </p>
          <p className="text-lg text-stone-700">
            Marché construction modéré : 10 permis/an, prix terrain 380-460€/m². Cadre résidentiel : espaces verts, écoles 7.7/10, vie associative active.
          </p>
        </div>
      </section>
      <section className="py-8 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/construction-villa-toulouse" className="text-lime-700 hover:underline">→ Construction Villa Toulouse</Link>
        </div>
      </section>
    </main>
  );
}
