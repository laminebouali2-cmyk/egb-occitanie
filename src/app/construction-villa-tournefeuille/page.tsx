import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Tournefeuille | 3ème Ville + CNES Spatial",
  description: "Constructeur villa Tournefeuille. 3ème ville Haute-Garonne (29k hab), CNES spatial proximité, 35 permis/an, prix 360-430€/m². Ville verte, infrastructures premium. Expert Tournefeuille.",
  keywords: ["construction villa tournefeuille", "constructeur maison tournefeuille", "terrain tournefeuille", "villa cnes tournefeuille"],
};

export default function ConstructionVillaTournefeuilePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full mb-6">
            <span className="text-emerald-400 font-medium text-sm">🚀 3ÈME VILLE + CNES • TOURNEFEUILLE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construction Villa<br /><span className="text-emerald-500">Tournefeuille</span>
          </h1>
          <p className="text-xl text-stone-300 mb-8 max-w-3xl">
            3ème ville Haute-Garonne (29 000 habitants), CNES spatial proximité, Airbus 10min. 35 permis/an, prix terrain 360-430€/m². Ville verte (40% espaces verts), infrastructures premium.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-emerald-400">35</div>
              <div className="text-sm text-stone-300 mt-1">Permis/an</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-emerald-400">29k</div>
              <div className="text-sm text-stone-300 mt-1">Habitants</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-emerald-400">360€</div>
              <div className="text-sm text-stone-300 mt-1">Terrain/m²</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-emerald-400">40%</div>
              <div className="text-sm text-stone-300 mt-1">Espaces verts</div>
            </div>
          </div>
          <a href="/contact" className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors">Devis Gratuit Tournefeuille</a>
        </div>
      </section>

      <section className="py-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm text-stone-600">
            <Link href="/" className="hover:text-emerald-600">Accueil</Link> <span className="mx-2">›</span>
            <Link href="/construction-villa-toulouse" className="hover:text-emerald-600">Construction Villa Toulouse</Link> <span className="mx-2">›</span>
            <span className="text-stone-900 font-medium">Tournefeuille</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Tournefeuille : 3ème Ville + Pôle Spatial CNES</h2>
          <p className="text-lg text-stone-700 mb-6">
            Tournefeuille = 3ème ville Haute-Garonne avec 29 000 habitants, ville verte (40% espaces verts, 12 parcs urbains), <strong>proximité CNES spatial + Airbus 10min</strong>. Profil mixte : ingénieurs spatial/aéro + familles.
          </p>
          <p className="text-lg text-stone-700">
            Marché construction dynamique : 35 permis/an, prix terrain compétitif 360-430€/m² (vs 450€ Blagnac). Infrastructures premium : 16 écoles (ranking 8.1/10), métro ligne B horizon 2028, centre commercial Gramont 5min.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Construisez Votre Villa à Tournefeuille</h2>
          <p className="text-xl text-stone-300 mb-8">3ème ville • CNES spatial • 35 permis/an • Ville verte</p>
          <a href="/contact" className="inline-block px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">Devis Gratuit Tournefeuille</a>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Link href="/construction-villa-toulouse" className="text-emerald-700 hover:underline">→ Construction Villa Toulouse</Link>
            <Link href="/construction-villa-blagnac" className="text-emerald-700 hover:underline">→ Blagnac (Airbus #1)</Link>
            <Link href="/contact" className="text-emerald-700 hover:underline">→ Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
