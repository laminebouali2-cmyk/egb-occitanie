import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Blagnac | Expert Aéroport Airbus #1 Toulouse",
  description: "Constructeur villa Blagnac. Ville #1 Airbus (40% salariés), aéroport 5min, 50 permis/an (record absolu), prix 380-450€/m². PLU moderne, marché ultra-dynamique. Expert Blagnac.",
  keywords: ["construction villa blagnac", "constructeur maison blagnac", "villa airbus blagnac", "terrain blagnac aeroport", "maison neuve blagnac"],
};

export default function ConstructionVillaBlagnacPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-sky-600/20 border border-sky-600/40 rounded-full mb-6">
            <span className="text-sky-400 font-medium text-sm">✈️ VILLE #1 AIRBUS • BLAGNAC</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construction Villa<br /><span className="text-sky-500">Blagnac</span>
          </h1>
          <p className="text-xl text-stone-300 mb-8 max-w-3xl">
            Ville #1 Airbus France (40% salariés, 10 500 personnes), aéroport Toulouse-Blagnac 5min, 50 permis construire/an (record absolu périphérie). Prix terrain 380-450€/m², marché ultra-dynamique.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-sky-400">50</div>
              <div className="text-sm text-stone-300 mt-1">Permis/an</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-sky-400">40%</div>
              <div className="text-sm text-stone-300 mt-1">Airbus</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-sky-400">380€</div>
              <div className="text-sm text-stone-300 mt-1">Terrain/m²</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-sky-400">5min</div>
              <div className="text-sm text-stone-300 mt-1">Aéroport</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-block px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors">Devis Gratuit Blagnac</a>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm text-stone-600">
            <Link href="/" className="hover:text-sky-600">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/construction-villa-toulouse" className="hover:text-sky-600">Construction Villa Toulouse</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-900 font-medium">Blagnac</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Blagnac : Ville #1 Airbus France + Record Construction</h2>
          <p className="text-lg text-stone-700 mb-6">
            Blagnac = épicentre aéronautique européen : 26 500 habitants, <strong>40% actifs salariés Airbus</strong> (10 500 personnes sur site historique Clément Ader), siège social Airbus, aéroport Toulouse-Blagnac 5min (3ème aéroport France).
          </p>
          <p className="text-lg text-stone-700">
            <strong>Marché construction record : 50 permis/an</strong> (biggest volume absolu Haute-Garonne), disponibilité terrain excellente, prix compétitif 380-450€/m². PLU moderne souple (architecture contemporaine acceptée, toits plats OK zones récentes).
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-900 to-sky-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Construisez Votre Villa à Blagnac</h2>
          <p className="text-xl text-stone-300 mb-8">Ville #1 Airbus • 50 permis/an • Aéroport 5min • Prix compétitifs</p>
          <a href="/contact" className="inline-block px-10 py-5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">Devis Gratuit Blagnac</a>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-bold text-stone-900 mb-4">Nos Autres Quartiers Construction Toulouse</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Link href="/construction-villa-toulouse" className="text-sky-700 hover:underline">→ Construction Villa Toulouse (hub)</Link>
            <Link href="/construction-villa-colomiers" className="text-sky-700 hover:underline">→ Colomiers (Mass market)</Link>
            <Link href="/construction-villa-castanet-tolosan" className="text-sky-700 hover:underline">→ Castanet (Airbus suburb)</Link>
            <Link href="/contact" className="text-sky-700 hover:underline">→ Contact & Devis</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
