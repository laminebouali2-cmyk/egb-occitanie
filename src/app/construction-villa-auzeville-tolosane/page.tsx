import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Auzeville-Tolosane | Technopole Recherche INRAE",
  description: "Constructeur villa Auzeville-Tolosane. Technopole recherche 4k hab, INRAE/ENSAT, 8 permis/an, prix 450-530€/m². Profil chercheurs. Expert Auzeville.",
  keywords: ["construction villa auzeville", "constructeur maison auzeville tolosane", "terrain auzeville toulouse"],
};

export default function ConstructionVillaAuzevillePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-gradient-to-br from-cyan-900 to-cyan-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Construction Villa <span className="text-cyan-400">Auzeville-Tolosane</span></h1>
          <p className="text-xl mb-8">Technopole recherche INRAE, 8 permis/an, prix 450-530€/m²</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg">Devis Gratuit Auzeville</a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Auzeville : Technopole Recherche INRAE</h2>
          <p className="text-lg text-stone-700 mb-4">
            Auzeville-Tolosane = technopole recherche agronomique 4 000 habitants, <strong>INRAE (1 800 chercheurs), ENSAT école ingénieurs</strong>, profil ultra-qualifié (doctorants, chercheurs).
          </p>
          <p className="text-lg text-stone-700">
            Marché construction spécifique : 8 permis/an, prix terrain 450-530€/m². Proximité université Paul Sabatier 5min, métro ligne B Ramonville 8min.
          </p>
        </div>
      </section>
      <section className="py-8 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/construction-villa-toulouse" className="text-cyan-700 hover:underline">→ Construction Villa Toulouse</Link>
        </div>
      </section>
    </main>
  );
}
