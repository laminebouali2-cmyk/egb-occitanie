import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Balma | Expert Familles + High Volume 18 Permis/An",
  description: "Constructeur villa Balma. Familles 2.8 enfants/foyer, 18 permis/an (highest volume), prix compétitif 420€/m², PLU souple (toits plats autorisés). Expert volume Balma.",
  keywords: [
    "construction villa balma",
    "constructeur maison balma",
    "terrain balma toulouse",
    "villa famille balma",
    "construction balma gramont",
    "maison neuve balma"
  ],
};

export default function ConstructionVillaBalmaPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-green-600/20 border border-green-600/40 rounded-full mb-6">
            <span className="text-green-400 font-medium text-sm">👨‍👩‍👧‍👦 SUBURB FAMILLES • BALMA</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construction Villa<br />
            <span className="text-green-500">Balma</span>
          </h1>
          <p className="text-xl text-stone-300 mb-8 max-w-3xl">
            Suburb familles par excellence : 2.8 enfants/foyer, 18 permis construire/an (highest volume Toulouse Est), prix compétitif 420€/m², PLU souple (toits plats OK).
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">2.8</div>
              <div className="text-sm text-stone-300 mt-1">Enfants/foyer</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">18</div>
              <div className="text-sm text-stone-300 mt-1">Permis/an</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">420€</div>
              <div className="text-sm text-stone-300 mt-1">Terrain/m²</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">8.2/10</div>
              <div className="text-sm text-stone-300 mt-1">Écoles</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
              Devis Gratuit Balma
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
            <Link href="/" className="hover:text-green-600">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/construction-villa-toulouse" className="hover:text-green-600">Construction Villa Toulouse</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-900 font-medium">Balma</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Balma : Suburb Familles #1 Toulouse Est</h2>
          <p className="text-lg text-stone-700 mb-6">
            Balma = LE suburb familles référence Toulouse Est : commune 16 800 habitants limite Toulouse, profil ultra-familial 2.8 enfants/foyer (vs 1.9 moyenne France), infrastructures enfants premium (12 écoles primaires ranking 8.2/10, 4 collèges, 18 crèches, 6 centres loisirs).
          </p>
          <p className="text-lg text-stone-700 mb-6">
            Marché construction le plus actif Toulouse Est : 18 permis construire/an (vs 12 Castanet, 8 Ramonville). Disponibilité terrain excellente, prix compétitif 420€/m² (vs 480€ Ramonville, 520€ Castanet), PLU souple moderne (toits plats autorisés, créativité architecturale).
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Construisez Votre Maison Familiale à Balma</h2>
          <p className="text-xl text-stone-300 mb-8">
            Suburb familles #1 • 18 permis/an • Prix compétitifs • PLU souple
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-block px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">
              Devis Gratuit Balma
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
            <Link href="/construction-villa-toulouse" className="text-green-700 hover:underline">→ Construction Villa Toulouse (hub)</Link>
            <Link href="/construction-villa-castanet-tolosan" className="text-green-700 hover:underline">→ Castanet-Tolosan (Airbus suburb)</Link>
            <Link href="/construction-villa-ramonville" className="text-green-700 hover:underline">→ Ramonville (Métro 2027)</Link>
            <Link href="/construction-villa-colomiers" className="text-green-700 hover:underline">→ Colomiers (Mass market)</Link>
            <Link href="/construction-villa-cote-pavee-toulouse" className="text-green-700 hover:underline">→ Côte Pavée (Ultra-premium)</Link>
            <Link href="/contact" className="text-green-700 hover:underline">→ Contact & Devis</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
