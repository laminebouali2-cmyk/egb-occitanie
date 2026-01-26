import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Villa Cugnaux | Sud-Ouest Toulouse Famille 20 Permis/An",
  description: "Constructeur villa Cugnaux. Sud-Ouest Toulouse 18k hab, profil familles, 20 permis/an, prix 340-410€/m². Métro ligne B 2028, écoles 8.0/10. Expert Cugnaux.",
  keywords: ["construction villa cugnaux", "constructeur maison cugnaux", "terrain cugnaux toulouse"],
};

export default function ConstructionVillaCugnauxPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-gradient-to-br from-orange-900 to-orange-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Construction Villa <span className="text-orange-400">Cugnaux</span></h1>
          <p className="text-xl mb-8">Sud-Ouest Toulouse, 18k hab, 20 permis/an, prix 340-410€/m², métro 2028</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg">Devis Gratuit Cugnaux</a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Cugnaux : Sud-Ouest Famille + Métro 2028</h2>
          <p className="text-lg text-stone-700 mb-4">
            Cugnaux = suburb sud-ouest Toulouse 18 000 habitants, profil familles (2.4 enfants/foyer), <strong>métro ligne B prolongement 2028</strong> (valorisation +20% anticipée).
          </p>
          <p className="text-lg text-stone-700">
            Marché actif : 20 permis/an, prix terrain compétitif 340-410€/m². Infrastructures : 9 écoles 8.0/10, centre commercial proche, accès rocade 5min.
          </p>
        </div>
      </section>
      <section className="py-8 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/construction-villa-toulouse" className="text-orange-700 hover:underline">→ Construction Villa Toulouse</Link>
        </div>
      </section>
    </main>
  );
}
