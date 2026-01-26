import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Plaisance-du-Touch | Ouest Toulouse Métro A",
  description: "Constructeur villa Plaisance-du-Touch. Ouest Toulouse 20k hab, métro ligne A terminus, 22 permis/an, prix 350-420€/m². Ville dynamique. Expert Plaisance.",
  keywords: ["construction villa plaisance du touch", "constructeur maison plaisance", "terrain plaisance toulouse"],
};

export default function ConstructionVillaPlaisancePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-gradient-to-br from-rose-900 to-rose-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Construction Villa <span className="text-rose-400">Plaisance-du-Touch</span></h1>
          <p className="text-xl mb-8">Ouest Toulouse, métro ligne A, 22 permis/an, prix 350-420€/m²</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg">Devis Gratuit Plaisance</a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Plaisance-du-Touch : Ouest + Métro Ligne A</h2>
          <p className="text-lg text-stone-700 mb-4">
            Plaisance-du-Touch = suburb ouest dynamique 20 000 habitants, <strong>métro ligne A terminus Basso Cambo 8min voiture</strong>, accès centre Toulouse 18min.
          </p>
          <p className="text-lg text-stone-700">
            Marché construction dynamique : 22 permis/an, prix terrain 350-420€/m². Ville active : commerces, écoles 7.9/10, piscine municipale, vie associative riche.
          </p>
        </div>
      </section>
      <section className="py-8 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/construction-villa-toulouse" className="text-rose-700 hover:underline">→ Construction Villa Toulouse</Link>
        </div>
      </section>
    </main>
  );
}
