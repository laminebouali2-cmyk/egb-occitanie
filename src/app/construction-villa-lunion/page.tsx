import { Metadata } from"next";
import Link from"next/link";

export const metadata: Metadata = {
 title:"Construction Villa L'Union | Suburb Résidentiel Premium Toulouse Nord",
 description:"Constructeur villa L'Union. Suburb résidentiel premium 12k habitants, revenu médian 48k€/an, écoles 8.7/10. 15 permis/an, prix 480-560€/m². Expert L'Union.",
 keywords: ["construction villa l'union","constructeur maison l'union","terrain l'union toulouse","villa premium l'union"],
};

export default function ConstructionVillaLUnionPage() {
 return (
 <main className="min-h-screen bg-gray-50">
 <section className="relative bg-white text-white py-20">
 <div className="max-w-6xl mx-auto px-6">
 <div className="inline-block px-4 py-2 bg-indigo-600/20 border border-indigo-600/40 rounded-full mb-6">
 <span className="text-indigo-400 font-medium text-sm"> SUBURB RÉSIDENTIEL PREMIUM • L'UNION</span>
 </div>
 <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
 Construction Villa<br /><span className="text-indigo-500">L'Union</span>
 </h1>
 <p className="text-xl text-gray-300 mb-8 max-w-3xl">
 Suburb résidentiel premium Toulouse Nord, 12 000 habitants, revenu médian 48 000€/an (CSP+ 58%). Écoles 8.7/10, 15 permis/an, prix terrain 480-560€/m².
 </p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
 <div className="bg-white border-2 border border-gray-200 rounded-lg p-4">
 <div className="text-3xl font-bold text-indigo-400">15</div>
 <div className="text-sm text-gray-300 mt-1">Permis/an</div>
 </div>
 <div className="bg-white border-2 border border-gray-200 rounded-lg p-4">
 <div className="text-3xl font-bold text-indigo-400">58%</div>
 <div className="text-sm text-gray-300 mt-1">CSP+</div>
 </div>
 <div className="bg-white border-2 border border-gray-200 rounded-lg p-4">
 <div className="text-3xl font-bold text-indigo-400">480€</div>
 <div className="text-sm text-gray-300 mt-1">Terrain/m²</div>
 </div>
 <div className="bg-white border-2 border border-gray-200 rounded-lg p-4">
 <div className="text-3xl font-bold text-indigo-400">8.7/10</div>
 <div className="text-sm text-gray-300 mt-1">Écoles</div>
 </div>
 </div>
 <a href="/contact" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">Devis Gratuit L'Union</a>
 </div>
 </section>

 <section className="py-4 bg-white border-b border-gray-200">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-sm text-gray-600">
 <Link href="/">Accueil</Link> <span className="mx-2">›</span>
 <Link href="/construction-villa-toulouse">Construction Villa Toulouse</Link> <span className="mx-2">›</span>
 <span className="text-gray-900 font-medium">L'Union</span>
 </div>
 </div>
 </section>

 <section className="py-16 bg-white">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">L'Union : Suburb Résidentiel Premium Toulouse Nord</h2>
 <p className="text-lg text-gray-700 mb-6">
 L'Union = suburb résidentiel calme premium Nord Toulouse, 12 000 habitants, <strong>profil CSP+ 58%</strong> (revenu médian 48 000€/an vs 28 400€ Toulouse), cadres supérieurs, professions libérales.
 </p>
 <p className="text-lg text-gray-700">
 Marché construction sélectif : 15 permis/an, prix terrain 480-560€/m² (positionnement premium). Infrastructures excellentes : écoles primaires 8.7/10, collège Jean Moulin réputé, transports (métro ligne A 12min voiture Balma-Gramont).
 </p>
 </div>
 </section>

 <section className="py-20 bg-white text-white">
 <div className="max-w-4xl mx-auto px-6 text-center">
 <h2 className="text-4xl font-bold mb-6">Construisez Votre Villa à L'Union</h2>
 <p className="text-xl text-gray-300 mb-8">Suburb premium • CSP+ 58% • Écoles 8.7/10 • Cadre résidentiel</p>
 <a href="/contact" className="inline-block px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">Devis Gratuit L'Union</a>
 </div>
 </section>

 <section className="py-8 bg-white">
 <div className="max-w-6xl mx-auto px-6">
 <div className="grid md:grid-cols-3 gap-4 text-sm">
 <Link href="/construction-villa-toulouse" className="text-indigo-700 hover:underline">→ Construction Villa Toulouse</Link>
 <Link href="/construction-villa-balma" className="text-indigo-700 hover:underline">→ Balma (Familles)</Link>
 <Link href="/contact" className="text-indigo-700 hover:underline">→ Contact</Link>
 </div>
 </div>
 </section>
 </main>
 );
}
