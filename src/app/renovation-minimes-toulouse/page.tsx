import type { Metadata } from"next";
import Link from"next/link";
import { ContactSection } from"@/components/ContactSection";

export const metadata: Metadata = {
 title:"Rénovation Minimes Toulouse | Expert DPE F-G & Rénovation Énergétique",
 description:"Rénovation appartement Minimes Toulouse. Années 60-70, DPE F-G, rénovation énergétique prioritaire. Prix 2025 : 1 800-2 600€/m². Aides MaPrimeRénov' 50%. Devis gratuit 06 65 01 58 82.",
 keywords:"rénovation Minimes Toulouse, DPE F G, rénovation énergétique Toulouse, copropriété années 60, passoire thermique, prix rénovation Minimes, MaPrimeRénov Toulouse",
 alternates: {
 canonical:"https://www.egb-occitanie.fr/renovation-minimes-toulouse"
 }
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel est le prix d'une rénovation énergétique aux Minimes Toulouse en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Prix rénovation énergétique Minimes Toulouse 2025 : 1 800-2 600€/m² selon ampleur travaux. Rénovation légère (DPE E→C) : 1 800-2 200€/m² = 108 000-132 000€ pour 60m². Rénovation complète (DPE F-G→B-A) : 2 200-2 600€/m² = 132 000-156 000€ pour 60m². AVANTAGE : Pas contraintes ABF = coûts -30% vs centre historique. Aides MaPrimeRénov' 2025 : jusqu'à 50% coûts (10 000-15 000€) + Bonus Éco-Rénovation Toulouse Métropole 1 500€ + CEE 2 000-4 000€. Coût net après aides : 1 200-1 800€/m². Rentabilité : gain +25-35% valeur appartement après rénovation DPE. Devis gratuit avec simulation aides : 06 65 01 58 82."
 }
 }
 ]
};

export default function RenovationMinimesToulouse() {
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 {/* Hero Section */}
 <section className="relative py-24 md:py-32 bg-white">
 <div className="container">
 <div className="max-w-4xl">
 <div className="flex items-center gap-4 mb-6">
 <span className="h-[1px] w-12 bg-amber-600" />
 <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
 Quartier Minimes - DPE F-G Rénovation
 </span>
 </div>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
 Rénovation Énergétique
 <br />
 <span className="text-amber-800">Minimes Toulouse</span>
 </h1>

 <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
 Expert rénovation énergétique appartements Minimes. Copropriétés années 60-70, DPE F-G passoires thermiques.
 Isolation, PAC, fenêtres. Aides MaPrimeRénov' jusqu'à 50% coûts. Interdiction location DPE G en 2025.
 <strong className="font-medium text-gray-900"> Audit gratuit sous 48h.</strong>
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
 >
 Simulation aides gratuite
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </Link>

 <a
 href="tel:+33665015882"
 className="inline-flex items-center justify-center gap-3 border-2 border-amber-800 text-amber-900 px-8 py-4 text-base font-medium hover:bg-amber-50 transition-all duration-300"
 >
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
 </svg>
 06 65 01 58 82
 </a>
 </div>

 <div className="grid grid-cols-3 gap-8 pt-8 border-t border-amber-200">
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">60-70</div>
 <div className="text-sm text-gray-600">Copropriétés années</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">DPE F-G</div>
 <div className="text-sm text-gray-600">Passoires thermiques</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">-50%</div>
 <div className="text-sm text-gray-600">Aides MaPrimeRénov'</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Introduction Quartier */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
 Minimes : quartier années 60-70 et urgence rénovation énergétique
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 Le quartier des Minimes, au nord-est de Toulouse, se caractérise par ses <strong>grandes copropriétés
 construites années 1960-1970</strong> : barres d'immeubles béton, tours résidentielles, architecture
 fonctionnelle. Avec 70% des logements classés <strong>DPE E, F ou G (passoires thermiques)</strong>,
 les Minimes font face à une urgence : <strong>interdiction location DPE G depuis 01/01/2025</strong>,
 DPE F en 2028, DPE E en 2034.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 <strong>Caractéristiques typiques appartements Minimes</strong> : isolation quasi inexistante (simple
 vitrage, murs non isolés, combles perdus), chauffage électrique convecteurs énergivores (factures
 1 800-2 500€/an pour 60m²), ventilation naturelle insuffisante (humidité, moisissures). Conséquences :
 factures énergétiques élevées, inconfort thermique (froid hiver, surchauffe été), dévalorisation
 patrimoine -15-20% vs logements DPE B-C.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 <strong>EGB Occitanie</strong> : spécialiste rénovation énergétique copropriétés Minimes depuis 2011.
 <strong>45+ copropriétés accompagnées</strong>, expertise isolation par l'extérieur (ITE), changement
 chauffage collectif, montage dossiers aides MaPrimeRénov' Copropriétés. Garantie atteinte DPE cible B-C
 après travaux. Accompagnement votes AG copropriété, présentation projet copropriétaires.
 </p>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
 <h3 className="text-lg font-semibold text-amber-900 mb-3">Urgence rénovation énergétique Minimes 2025</h3>
 <ul className="text-base text-amber-900 space-y-2">
 <li><strong>Interdiction location DPE G:</strong> Depuis 01/01/2025, DPE F en 2028, DPE E en 2034</li>
 <li><strong>Dévalorisation patrimoine:</strong> DPE F-G = -15-20% prix vente vs DPE B-C équivalent</li>
 <li><strong>Factures énergétiques:</strong> 1 800-2 500€/an électricité 60m² vs 600-900€ DPE B après PAC</li>
 <li><strong>Aides exceptionnelles 2025:</strong> MaPrimeRénov' jusqu'à 50% coûts + Bonus Toulouse + CEE</li>
 <li><strong>Obligation copropriété:</strong> Audit énergétique obligatoire si >50 lots + DPE D-G</li>
 <li><strong>ROI travaux:</strong> 8-12 ans via économies chauffage + valorisation +25-35% patrimoine</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Prix Rénovation */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Prix rénovation énergétique Minimes : 1 800 - 2 600€/m²
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Prix rénovation énergétique Minimes <strong>30-40% inférieur vs centre historique</strong> grâce absence
 contraintes ABF. Matériaux standards (PVC fenêtres, isolation extérieure polystyrène), pas architecte
 patrimoine, délais courts. <strong>MAIS aides MaPrimeRénov' 2025 couvrent jusqu'à 50% coûts</strong> =
 coût net final 1 200-1 800€/m² après déduction aides.
 </p>

 <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
 <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire rénovation énergétique Minimes 2025</h3>

 <div className="space-y-6">
 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Rénovation légère DPE E→C</h4>
 <p className="text-sm text-gray-600">Isolation partielle, fenêtres, VMC simple flux</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">1 900€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Isolation combles laine roche 300mm : 30-50€/m²</li>
 <li>• Fenêtres PVC double vitrage (remplacement) : 350-600€/unité</li>
 <li>• VMC simple flux autoréglable : 1 500-3 000€</li>
 <li>• Peinture murs/plafonds rafraîchissement</li>
 <li>• Amélioration DPE: E→C (gain 1-2 classes)</li>
 </ul>
 </div>

 <div className="bg-amber-50 p-6 rounded border-2 border-amber-600">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-amber-900">Rénovation complète DPE F-G→B</h4>
 <p className="text-sm text-amber-800">Isolation complète, PAC air-eau, VMC double-flux, eau chaude thermodynamique</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-900">2 400€</div>
 <div className="text-sm text-amber-800">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-amber-900 space-y-1.5">
 <li>• Isolation extérieure façades ITE 120-180€/m² (ou intérieure 60-90€/m²)</li>
 <li>• Isolation combles perdus 300mm : 30-50€/m²</li>
 <li>• Fenêtres PVC double vitrage phonique : 400-600€/unité</li>
 <li>• Pompe chaleur air-eau 12-16 kW : 12 000-18 000€</li>
 <li>• Radiateurs alu basse température (remplacement) : 300-500€/unité</li>
 <li>• VMC double-flux récupération chaleur : 6 000-9 000€</li>
 <li>• Ballon thermodynamique eau chaude 250L : 2 500-4 000€</li>
 <li>• Électricité adaptation (tableaux, prises) : 3 000-5 000€</li>
 <li>• Amélioration DPE: F-G→B (gain 3-5 classes)</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
 <h4 className="font-semibold text-green-900 mb-3">Exemple budget T3 60m² rénovation complète DPE G→B:</h4>
 <div className="space-y-2 text-sm text-green-900">
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Rénovation énergétique complète (2 400€/m² × 60m²)</span>
 <strong>144 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Audit énergétique (remboursé MaPrimeRénov')</span>
 <strong>800€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span className="text-red-800">Aides MaPrimeRénov' revenus modestes (gain 4+ classes)</span>
 <strong className="text-red-800">-15 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span className="text-red-800">Bonus Éco-Rénovation Toulouse Métropole</span>
 <strong className="text-red-800">-1 500€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span className="text-red-800">CEE (Certificats Économies Énergie)</span>
 <strong className="text-red-800">-4 000€</strong>
 </div>
 <div className="h-[1px] bg-green-300 my-3"></div>
 <div className="flex justify-between text-base">
 <strong>COÛT NET APRÈS AIDES:</strong>
 <strong className="text-lg">124 300€</strong>
 </div>
 <div className="flex justify-between text-xs text-green-800 mt-2">
 <span>Coût net /m²</span>
 <strong>2 072€/m² (au lieu de 2 400€/m² avant aides)</strong>
 </div>
 </div>

 <div className="mt-4 bg-white border-2 border-green-600 p-4 rounded">
 <h5 className="font-bold text-green-900 mb-2">Rentabilité investissement:</h5>
 <ul className="text-xs text-green-900 space-y-1">
 <li>• Facture chauffage AVANT (DPE G): 2 200€/an → APRÈS (DPE B): 700€/an = <strong>Économies 1 500€/an</strong></li>
 <li>• Valorisation patrimoine: +25-35% = +60 000-84 000€ (prix vente 240k→300-324k€)</li>
 <li>• ROI économies chauffage seules: 124 300€ / 1 500€/an = <strong>8,3 ans</strong></li>
 <li>• ROI total avec valorisation: immédiat (gains >coûts dès revente)</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Aides Section */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Aides rénovation énergétique 2025 (cumulables)
 </h2>

 <div className="space-y-6">
 {[
 {
 title: "MaPrimeRénov' 2025",
 amount: "10 000 - 15 000€",
 desc: "Rénovation globale gain 2+ classes DPE",
 details: [
 "Plafond revenus modestes: 38 184€/an couple",
 "Gain 2 classes DPE minimum obligatoire",
 "Artisans RGE obligatoires",
 "Dépôt dossier AVANT début travaux"
 ]
 },
 {
 title: "Bonus Éco-Rénovation Toulouse Métropole",
 amount: "1 500€",
 desc: "Amélioration 2 classes DPE minimum",
 details: [
 "Sans conditions ressources (tous propriétaires)",
 "Gain 2 classes DPE minimum (ex: F→D, G→E, E→C)",
 "Cumulable avec MaPrimeRénov'",
 "Dossier simple Toulouse Métropole"
 ]
 },
 {
 title: "CEE Certificats Économies Énergie",
 amount: "2 000 - 4 000€",
 desc: "Isolation, chauffage, fenêtres",
 details: [
 "Tous propriétaires éligibles",
 "Prime versée par fournisseurs énergie",
 "Cumulable autres aides",
 "Isolation: 1 500-2 500€, PAC: 2 500-4 000€"
 ]
 },
 {
 title: "Éco-PTZ Prêt Taux Zéro",
 amount: "50 000€ max",
 desc: "Prêt sans intérêts, remboursement 15-20 ans",
 details: [
 "Tous propriétaires (sans conditions ressources)",
 "Travaux rénovation énergétique",
 "Remboursement étalé sans intérêts",
 "Cumulable avec MaPrimeRénov'"
 ]
 }
 ].map((aide, i) => (
 <div key={i} className="bg-white border-2 border-amber-200 p-6 rounded">
 <div className="flex justify-between items-start mb-3">
 <div>
 <h3 className="text-xl font-semibold text-gray-900">{aide.title}</h3>
 <p className="text-sm text-gray-600 mt-1">{aide.desc}</p>
 </div>
 <div className="text-right">
 <div className="text-2xl font-light text-amber-800">{aide.amount}</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1">
 {aide.details.map((detail, j) => (
 <li key={j}>• {detail}</li>
 ))}
 </ul>
 </div>
 ))}

 <div className="bg-amber-800 text-white p-8 rounded-lg mt-8">
 <h3 className="text-2xl font-semibold mb-4">Cumul aides possible : 20 500€ pour 60m²</h3>
 <div className="grid md:grid-cols-2 gap-6">
 <div>
 <h4 className="font-semibold mb-3">Exemple rénovation 60m² 144 000€:</h4>
 <ul className="text-sm space-y-1">
 <li>+ MaPrimeRénov': 15 000€</li>
 <li>+ Bonus Toulouse: 1 500€</li>
 <li>+ CEE: 4 000€</li>
 <li className="font-bold pt-2">= 20 500€ aides</li>
 </ul>
 </div>
 <div>
 <h4 className="font-semibold mb-3">Reste à charge:</h4>
 <ul className="text-sm space-y-1">
 <li>144 000€ travaux</li>
 <li>- 20 500€ aides</li>
 <li className="font-bold pt-2">= 123 500€ net (86%)</li>
 <li className="text-xs mt-2">+ Éco-PTZ 50k€ possible</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 <ContactSection />
 </>
 );
}
