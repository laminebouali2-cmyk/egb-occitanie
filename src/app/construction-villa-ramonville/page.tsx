import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Ramonville | Expert Young Professionals + Métro 2027",
  description: "Constructeur villa Ramonville. 62% jeunes professionnels 25-45 ans, métro ligne B 2027 (+25-30% valorisation), université proximité. Prix terrain 480€/m² → 620€/m² post-métro. Expert Ramonville.",
  keywords: [
    "construction villa ramonville",
    "constructeur maison ramonville",
    "terrain ramonville métro",
    "villa métro ligne b toulouse",
    "construction ramonville saint-agne",
    "maison neuve ramonville"
  ],
};

export default function ConstructionVillaRamonvillePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-600/40 rounded-full mb-6">
            <span className="text-blue-400 font-medium text-sm">🚇 MÉTRO LIGNE B 2027 • RAMONVILLE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construction Villa<br />
            <span className="text-blue-500">Ramonville-Saint-Agne</span>
          </h1>
          <p className="text-xl text-stone-300 mb-8 max-w-3xl">
            Young professionals 62% (25-45 ans), métro ligne B 2027 (+25-30% valorisation), université proximité. Prix terrain 480€/m² pré-métro → 620€/m² post-2027.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">2027</div>
              <div className="text-sm text-stone-300 mt-1">Métro Ligne B</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">+25%</div>
              <div className="text-sm text-stone-300 mt-1">Valorisation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">62%</div>
              <div className="text-sm text-stone-300 mt-1">25-45 ans</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">5min</div>
              <div className="text-sm text-stone-300 mt-1">Université</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Devis Gratuit Ramonville
            </a>
            <a href="#budget-type" className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-colors">
              Voir Budgets Types
            </a>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm text-stone-600">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/construction-villa-toulouse" className="hover:text-blue-600">Construction Villa Toulouse</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-900 font-medium">Ramonville-Saint-Agne</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Ramonville-Saint-Agne : Suburb Universitaire + Métro 2027</h2>
          <p className="text-lg text-stone-700 mb-6">
            Ramonville-Saint-Agne = suburb toulousain jeune dynamique en pleine mutation : commune 13 400 habitants sud-est Toulouse, 62% population 25-45 ans (jeunes actifs, chercheurs, doctorants), université Paul Sabatier 5min (38 000 étudiants campus), pôle recherche CNRS/CNES proximité immédiate.
          </p>
          <p className="text-lg text-stone-700 mb-6">
            RÉVOLUTION 2027 : prolongement métro ligne B (terminus actuel Ramonville-Université). Impact colossal valorisation immobilière : prix terrains +25-30% anticipés post-mise service métro (480€/m² aujourd'hui → 620€/m² 2028-2029 selon études notaires). Fenêtre opportunité 2025-2026 pour acheter terrain prix pré-métro.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Construisez Votre Villa à Ramonville Avant Métro 2027</h2>
          <p className="text-xl text-stone-300 mb-8">
            Profitez prix terrain pré-métro • Valorisation +25-30% garantie • Expert local Ramonville
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">
              Devis Gratuit Ramonville
            </a>
            <a href="tel:+33582950495" className="inline-block px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-lg transition-colors">
              📱 05 82 95 04 95
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-bold text-stone-900 mb-4">Nos Autres Quartiers Construction Toulouse</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Link href="/construction-villa-toulouse" className="text-blue-700 hover:underline">→ Construction Villa Toulouse (hub)</Link>
            <Link href="/construction-villa-castanet-tolosan" className="text-blue-700 hover:underline">→ Castanet-Tolosan (Airbus suburb)</Link>
            <Link href="/construction-villa-balma" className="text-blue-700 hover:underline">→ Balma (Familles volume)</Link>
            <Link href="/construction-villa-colomiers" className="text-blue-700 hover:underline">→ Colomiers (Mass market)</Link>
            <Link href="/construction-villa-cote-pavee-toulouse" className="text-blue-700 hover:underline">→ Côte Pavée (Ultra-premium)</Link>
            <Link href="/contact" className="text-blue-700 hover:underline">→ Contact & Devis</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
