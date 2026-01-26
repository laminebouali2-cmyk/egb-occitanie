import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Portet-sur-Garonne | Sud Toulouse Bords Garonne",
  description: "Constructeur villa Portet-sur-Garonne. Sud Toulouse 10k hab, bords Garonne, 12 permis/an, prix 330-400€/m². Cadre naturel. Expert Portet.",
  keywords: ["construction villa portet sur garonne", "constructeur maison portet", "terrain portet garonne"],
};

export default function ConstructionVillaPortetPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Construction Villa <span className="text-teal-400">Portet-sur-Garonne</span></h1>
          <p className="text-xl mb-8">Sud Toulouse, bords Garonne, 12 permis/an, prix 330-400€/m²</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg">Devis Gratuit Portet</a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Portet-sur-Garonne : Sud + Bords Garonne</h2>
          <p className="text-lg text-stone-700 mb-4">
            Portet-sur-Garonne = suburb sud 10 000 habitants, <strong>bords de Garonne cadre naturel préservé</strong>, proximité aéroport Blagnac 15min, centre Toulouse 12min.
          </p>
          <p className="text-lg text-stone-700">
            Marché construction modéré : 12 permis/an, prix terrain attractif 330-400€/m². Qualité vie : espaces verts, base loisirs Garonne, écoles 7.8/10.
          </p>
        </div>
      </section>
      <section className="py-8 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/construction-villa-toulouse" className="text-teal-700 hover:underline">→ Construction Villa Toulouse</Link>
        </div>
      </section>
    </main>
  );
}
