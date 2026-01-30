import type { Metadata } from"next";
import { Playfair_Display } from"next/font/google";
import Link from"next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
 title:"Rénovation Compans-Caffarelli Toulouse | Expert Bureaux → Logements",
 description:"Rénovation appartements Compans-Caffarelli Toulouse. Années 70-80, bureaux reconvertis logements, quartier affaires gare Matabiau. Prix 2025 : 1 900-2 600€/m². Devis 06 65 01 58 82.",
 keywords:"rénovation Compans-Caffarelli Toulouse, bureaux logements Toulouse, années 70 80 rénover, quartier affaires Toulouse, prix rénovation Compans, gare Matabiau rénovation",
 alternates: {
 canonical:"https://www.egb-occitanie.fr/renovation-compans-caffarelli-toulouse"
 }
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel prix rénovation Compans-Caffarelli Toulouse 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Prix rénovation Compans-Caffarelli Toulouse 2025 : 1 900-2 600€/m² selon travaux. Rénovation légère années 70-80 : 1 900-2 300€/m². Rénovation complète bureaux→logement : 2 300-2 600€/m² (cloisonnement, cuisine/SDB création, isolation, fenêtres). Pas ABF = coûts -30% vs centre. Exemple 70m² rénovation complète : 133 000-182 000€. Quartier affaires gare Matabiau, transports excellents. Cible jeunes actifs mobilité. Devis gratuit : 06 65 01 58 82."
 }
 }
 ]
};

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"EGB Occitanie Rénovation Compans-Caffarelli","address": {"@type":"PostalAddress","addressLocality":"Toulouse","postalCode":"31000","addressCountry":"FR"
 },"telephone":"+33665015882","priceRange":"1900-2600€/m²"
};

export default function RenovationCompansCaffarelliToulouse() {
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

 <div className="min-h-screen bg-white">
 <div className="bg-white border-b">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
 <nav className="text-sm text-gray-600">
 <Link href="/" className="hover:text-slate-600">Accueil</Link>
 <span className="mx-2">/</span>
 <Link href="/renovation-maison-toulouse" className="hover:text-slate-600">Rénovation Toulouse</Link>
 <span className="mx-2">/</span>
 <span className="text-gray-900 font-medium">Compans-Caffarelli</span>
 </nav>
 </div>
 </div>

 <div className="relative bg-gray-900 text-white overflow-hidden">
 
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
 <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
 Rénovation Compans-Caffarelli Toulouse
 <span className="block text-3xl md:text-4xl mt-4 text-slate-200">
 Expert Reconversion Bureaux → Logements Années 70-80
 </span>
 </h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
 Rénovation appartements Compans-Caffarelli Toulouse. Quartier affaires années 70-80, bureaux reconvertis logements, gare Matabiau 5 min. Transports excellents, prix attractifs.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <a href="tel:0665015882" className="inline-block bg-white text-slate-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors text-center shadow-lg">
 06 65 01 58 82 - Devis Gratuit
 </a>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
 <div className="bg-white border-2 rounded-lg p-6 border border-gray-200">
 <div className="text-3xl font-bold mb-2 text-gray-900">70-80</div>
 <div className="text-slate-200">Immeubles années</div>
 </div>
 <div className="bg-white border-2 rounded-lg p-6 border border-gray-200">
 <div className="text-3xl font-bold mb-2 text-gray-900">Gare 5min</div>
 <div className="text-slate-200">Matabiau proximité</div>
 </div>
 <div className="bg-white border-2 rounded-lg p-6 border border-gray-200">
 <div className="text-3xl font-bold mb-2 text-gray-900">-30%</div>
 <div className="text-slate-200">Coûts vs centre</div>
 </div>
 <div className="bg-white border-2 rounded-lg p-6 border border-gray-200">
 <div className="text-3xl font-bold mb-2 text-gray-900">Affaires</div>
 <div className="text-slate-200">Quartier business actifs</div>
 </div>
 </div>
 </div>
 </div>

 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
 Pourquoi Rénover Compans-Caffarelli ?
 </h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 <div className="bg-white p-8 rounded-xl shadow-lg">
 <div className="text-4xl mb-4"></div>
 <h3 className="text-xl font-bold mb-3">Transports Excellents</h3>
 <p className="text-gray-700 leading-relaxed">
 Gare Matabiau 5 min, métro ligne B, bus multiples. Idéal jeunes actifs mobilité professionnelle. Connexion Paris TGV 4h, aéroport 20 min.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl shadow-lg">
 <div className="text-4xl mb-4"></div>
 <h3 className="text-xl font-bold mb-3">Quartier Affaires Dynamique</h3>
 <p className="text-gray-700 leading-relaxed">
 Sièges sociaux, bureaux entreprises, reconversion tertiaire→résidentiel. Vie quartier semaine, calme week-ends. Commerces, restaurants midi.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl shadow-lg">
 <div className="text-4xl mb-4"></div>
 <h3 className="text-xl font-bold mb-3">Prix Compétitifs</h3>
 <p className="text-gray-700 leading-relaxed">
 Rénovation 1 900-2 600€/m² (vs 3 500€ Capitole -35%). Achat 3 000-3 500€/m². Investissement locatif rentabilité 4-5%. Cible actifs mobilité.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gray-900 text-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>
 Projet Rénovation Compans-Caffarelli ?
 </h2>
 <p className="text-xl mb-8">
 Expert reconversion bureaux→logements, rénovation années 70-80, optimisation espaces modernes. Devis gratuit avec visite appartement.
 </p>
 <a href="tel:0665015882" className="inline-block bg-white text-slate-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 shadow-xl">
 06 65 01 58 82 - Devis Gratuit
 </a>
 </div>
 </section>

 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-3xl font-bold text-gray-900 mb-8 text-center`}>
 Rénovation Autres Quartiers Toulouse
 </h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 <Link href="/renovation-minimes-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-green-200">
 <h3 className="font-bold text-lg mb-2">Minimes</h3>
 <p className="text-gray-600 text-sm">DPE F-G rénovation énergétique</p>
 </Link>
 <Link href="/renovation-arnaud-bernard-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-indigo-200">
 <h3 className="font-bold text-lg mb-2">Arnaud-Bernard</h3>
 <p className="text-gray-600 text-sm">Bohème locatif étudiants</p>
 </Link>
 <Link href="/renovation-saint-aubin-dupuy-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-teal-200">
 <h3 className="font-bold text-lg mb-2">Saint-Aubin Dupuy</h3>
 <p className="text-gray-600 text-sm">Maisons familles sud</p>
 </Link>
 <Link href="/renovation-rangueil-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-blue-200">
 <h3 className="font-bold text-lg mb-2">Rangueil</h3>
 <p className="text-gray-600 text-sm">Universitaire CHU</p>
 </Link>
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
