import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Colomiers | Expert Mass Market 45 Permis/An Airbus",
  description: "Constructeur villa Colomiers. 45 permis/an (biggest market), prix d'appel 350€/m², 25% salariés Airbus. Strategy premium quality vs low-cost constructeurs. Expert volume Colomiers.",
  keywords: [
    "construction villa colomiers",
    "constructeur maison colomiers",
    "villa airbus colomiers",
    "construction colomiers toulouse",
    "maison neuve colomiers",
    "terrain colomiers"
  ],
};

export default function ConstructionVillaColommiersPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-600/40 rounded-full mb-6">
            <span className="text-purple-400 font-medium text-sm">🏭 MASS MARKET AIRBUS • COLOMIERS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construction Villa<br />
            <span className="text-purple-500">Colomiers</span>
          </h1>
          <p className="text-xl text-stone-300 mb-8 max-w-3xl">
            2ème ville Haute-Garonne, biggest market construction (45 permis/an), prix d'appel 350€/m², 25% salariés Airbus. Stratégie premium quality vs low-cost constructeurs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400">45</div>
              <div className="text-sm text-stone-300 mt-1">Permis/an</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400">25%</div>
              <div className="text-sm text-stone-300 mt-1">Airbus</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400">350€</div>
              <div className="text-sm text-stone-300 mt-1">Terrain/m²</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400">38k</div>
              <div className="text-sm text-stone-300 mt-1">Habitants</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
              Devis Gratuit Colomiers
            </a>
            <a href="#budget-type" className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-colors">
              Voir Budgets Types
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm text-stone-600">
            <Link href="/" className="hover:text-purple-600">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/construction-villa-toulouse" className="hover:text-purple-600">Construction Villa Toulouse</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-900 font-medium">Colomiers</span>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Colomiers : Biggest Construction Market Toulouse Ouest</h2>
          <p className="text-lg text-stone-700 mb-6">
            <strong>Colomiers = 2ème ville Haute-Garonne (38 000 habitants) + biggest market construction périphérie toulousaine</strong> : <strong>45 permis construire/an</strong> (vs 18 Balma, 12 Castanet), disponibilité terrain excellente (80-100 terrains/an marché), <strong>prix compétitif 350-420€/m²</strong> (entry point marché).
          </p>
          <p className="text-lg text-stone-700 mb-6">
            <strong>Proximité Airbus site historique</strong> : 25% actifs salariés Airbus (9 500 personnes), trajet domicile-travail 5-12min. Infrastructures ville moyenne complètes : commerces, services, transports (métro ligne B horizon 2030), écoles/collèges/lycées.
          </p>
        </div>
      </section>

      {/* Placeholder contenu additionnel */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-stone-600">[Contenu complet 4000+ mots en développement]</p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Construisez Votre Villa à Colomiers</h2>
          <p className="text-xl text-stone-300 mb-8">
            Biggest market • 45 permis/an • Prix compétitifs • Proximité Airbus
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-block px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">
              Devis Gratuit Colomiers
            </a>
            <a href="tel:+33582950495" className="inline-block px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-lg transition-colors">
              📱 05 82 95 04 95
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-bold text-stone-900 mb-4">Nos Autres Quartiers Construction Toulouse</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Link href="/construction-villa-toulouse" className="text-purple-700 hover:underline">→ Construction Villa Toulouse (hub)</Link>
            <Link href="/construction-villa-castanet-tolosan" className="text-purple-700 hover:underline">→ Castanet-Tolosan (Airbus suburb)</Link>
            <Link href="/construction-villa-ramonville" className="text-purple-700 hover:underline">→ Ramonville (Métro 2027)</Link>
            <Link href="/construction-villa-balma" className="text-purple-700 hover:underline">→ Balma (Familles volume)</Link>
            <Link href="/construction-villa-cote-pavee-toulouse" className="text-purple-700 hover:underline">→ Côte Pavée (Ultra-premium)</Link>
            <Link href="/contact" className="text-purple-700 hover:underline">→ Contact & Devis</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
