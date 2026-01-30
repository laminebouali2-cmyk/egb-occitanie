import type { Metadata } from"next";
import Link from"next/link";
import { ContactSection } from"@/components/ContactSection";

export const metadata: Metadata = {
 title:"Rénovation Énergétique Toulouse | MaPrimeRénov' 2025 - DPE G vers B Expert",
 description:"Spécialiste rénovation énergétique Toulouse. Isolation, PAC, menuiseries, VMC. Montage aides MaPrimeRénov' jusqu'à 20k€, Éco-PTZ 50k€, CEE. DPE G→B garanti. Devis gratuit 48h. ROI 8-12 ans.",
 keywords: ["rénovation énergétique toulouse","maprimerénov toulouse","isolation maison toulouse","DPE toulouse","pompe à chaleur toulouse","aides rénovation toulouse 2025","eco ptz toulouse","améliorer dpe toulouse","isolation combles toulouse","chauffage économique toulouse",
 ],
 openGraph: {
 title:"Rénovation Énergétique Toulouse | Aides MaPrimeRénov' 2025",
 description:"Expert rénovation énergétique Toulouse. Isolation, PAC, DPE G→B. Aides jusqu'à 20k€ gérées. Devis gratuit.",
 url:"https://egb-occitanie.fr/renovation-energetique-toulouse",
 },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quelles sont les aides pour la rénovation énergétique en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Aides rénovation énergétique 2025: MaPrimeRénov' (jusqu'à 20 000€ selon revenus et travaux), MaPrimeRénov' Sérénité (50% coût travaux, plafond 35 000€ ménages modestes, gain énergétique >35% obligatoire), Éco-PTZ prêt 0% (jusqu'à 50 000€, remboursable sur 20 ans), CEE Certificats Économie Énergie (2 000-5 000€ selon travaux), TVA réduite 5,5% (vs 20% normal), Exonération taxe foncière (50-100% pendant 3 ans selon communes). Total aides: 10 000-30 000€ déductibles."
 }
 },
 {"@type":"Question","name":"Quel est le prix d'une rénovation énergétique complète à Toulouse ?","acceptedAnswer": {"@type":"Answer","text":"Prix rénovation énergétique complète Toulouse (maison 120m²): Isolation combles 300mm: 3 600-5 400€. Isolation murs intérieur 140mm: 9 600-14 400€. Changement menuiseries double vitrage (8 fenêtres): 8 000-12 000€. PAC air/eau + radiateurs: 14 000-18 000€. VMC double-flux: 6 000-9 000€. TOTAL: 41 200-58 800€. Aides déductibles MaPrimeRénov' Sérénité: jusqu'à 27 500€. Reste à charge: 13 700-31 300€. ROI: 8-12 ans via économies énergie."
 }
 }
 ]
};

export default function RenovationEnergetiqueToulouse() {
 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />

 {/* Hero Section */}
 <section className="relative py-24 md:py-32 bg-white">
 <div className="container">
 <div className="max-w-4xl">
 <div className="flex items-center gap-4 mb-6">
 <span className="h-[1px] w-12 bg-gray-400" />
 <span className="text-gray-600 text-xs uppercase tracking-[0.3em] font-medium">
 Performance Énergétique
 </span>
 </div>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
 Rénovation Énergétique
 <br />
 <span className="text-gray-500">à Toulouse</span>
 </h1>

 <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
 Réduisez vos factures énergie de 60-75%. Isolation, PAC, menuiseries, VMC.
 Aides MaPrimeRénov' jusqu'à 20 000€ gérées. DPE G→B garanti.
 <strong className="font-medium text-gray-900"> Devis gratuit sous 48h.</strong>
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
 >
 Simuler mes aides gratuitement
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </Link>

 <a
 href="tel:+33665015882"
 className="inline-flex items-center justify-center gap-3 border border-gray-300 text-gray-700 px-8 py-4 text-base font-medium hover:border-gray-400 hover:text-gray-900 transition-all duration-300"
 >
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
 </svg>
 06 65 01 58 82
 </a>
 </div>

 <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
 <div>
 <div className="text-3xl font-light text-gray-900 mb-2">-65%</div>
 <div className="text-sm text-gray-600">Factures énergie</div>
 </div>
 <div>
 <div className="text-3xl font-light text-gray-900 mb-2">20k€</div>
 <div className="text-sm text-gray-600">Aides MaPrimeRénov'</div>
 </div>
 <div>
 <div className="text-3xl font-light text-gray-900 mb-2">8-12 ans</div>
 <div className="text-sm text-gray-600">ROI moyen</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Stats urgence énergétique */}
 <section className="py-16 bg-amber-50 border-y border-amber-200">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-medium text-amber-900 mb-6 text-center">
 Toulouse : 62% des maisons classées DPE E, F ou G (passoires thermiques)
 </h2>
 <div className="grid md:grid-cols-4 gap-6 text-center">
 <div className="bg-white p-5 rounded border border-amber-200">
 <div className="text-3xl font-light text-amber-900 mb-2">2 800€</div>
 <div className="text-sm text-amber-800">Facture énergie annuelle moyenne DPE G</div>
 </div>
 <div className="bg-white p-5 rounded border border-amber-200">
 <div className="text-3xl font-light text-amber-900 mb-2">2028</div>
 <div className="text-sm text-amber-800">Interdiction location DPE G (loi Climat)</div>
 </div>
 <div className="bg-white p-5 rounded border border-amber-200">
 <div className="text-3xl font-light text-amber-900 mb-2">-30%</div>
 <div className="text-sm text-amber-800">Valeur immobilière passoire thermique vs DPE B</div>
 </div>
 <div className="bg-white p-5 rounded border border-amber-200">
 <div className="text-3xl font-light text-amber-900 mb-2">↑42%</div>
 <div className="text-sm text-amber-800">Hausse prix énergie 2020-2024</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Aides 2025 */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Aides rénovation énergétique 2025 : jusqu'à 30 000€ déductibles
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-10">
 Le gouvernement a renforcé les aides à la rénovation énergétique en 2025 pour accélérer la transition écologique.
 <strong> Jusqu'à 60-70% de vos travaux peuvent être financés par les aides publiques</strong> selon vos revenus.
 EGB Occitanie gère l'intégralité de vos dossiers d'aides (taux acceptation 95%).
 </p>

 <div className="space-y-6 mb-12">
 {/* MaPrimeRénov' */}
 <div className="bg-white border-2 border-blue-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-light flex-shrink-0">
 1
 </div>
 <div className="flex-grow">
 <h3 className="text-2xl font-medium text-blue-900 mb-2">MaPrimeRénov' (Anah)</h3>
 <p className="text-blue-800 text-lg font-medium">Jusqu'à 20 000€ par logement</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Aide principale de l'État pour travaux rénovation énergétique. Montant selon revenus (4 couleurs: Bleu, Jaune, Violet, Rose)
 et type travaux. Versée après travaux (avance possible via EGB Occitanie).
 </p>

 <div className="bg-white p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-3">Montants par poste de travaux (ménages modestes - Jaune):</h4>
 <ul className="space-y-2 text-sm">
 <li>• <strong>Isolation combles/toiture:</strong> 25€/m² (max 7 000€)</li>
 <li>• <strong>Isolation murs intérieur:</strong> 25€/m² (max 3 500€)</li>
 <li>• <strong>Isolation plancher bas:</strong> 25€/m² (max 3 000€)</li>
 <li>• <strong>Menuiseries double vitrage:</strong> 100€/fenêtre (max 2 000€)</li>
 <li>• <strong>PAC air/eau:</strong> 4 000€</li>
 <li>• <strong>Chaudière gaz THPE:</strong> 1 200€</li>
 <li>• <strong>VMC double-flux:</strong> 2 500€</li>
 <li>• <strong>Audit énergétique:</strong> 500€ (remboursé)</li>
 </ul>
 <p className="text-xs text-gray-600 mt-3">Plafond total: 20 000€ sur 5 ans par logement</p>
 </div>

 <div className="bg-blue-900 text-white p-5 rounded">
 <h4 className="font-semibold mb-2">Conditions éligibilité:</h4>
 <ul className="text-sm space-y-1">
 <li> Logement construit &gt;15 ans</li>
 <li> Résidence principale</li>
 <li> Travaux par artisan RGE</li>
 <li> Devis accepté avant démarrage</li>
 </ul>
 </div>
 </div>
 </div>

 {/* MaPrimeRénov' Sérénité */}
 <div className="bg-white border-2 border-green-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-light flex-shrink-0">
 2
 </div>
 <div className="flex-grow">
 <h3 className="text-2xl font-medium text-green-900 mb-2">MaPrimeRénov' Sérénité</h3>
 <p className="text-green-800 text-lg font-medium">35 000€ maximum (50% travaux)</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Aide forfaitaire pour <strong>rénovation énergétique globale</strong> (bouquet travaux).
 Réservée ménages modestes et très modestes. Gain énergétique minimum 35% obligatoire.
 Accompagnement obligatoire Anah (MOE).
 </p>

 <div className="bg-white p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-3">Taux de prise en charge:</h4>
 <div className="space-y-3">
 <div>
 <div className="font-medium text-green-800">Ménages très modestes:</div>
 <div className="text-2xl font-light text-green-900">50% du coût travaux HT</div>
 <div className="text-sm text-gray-600">Plafond 35 000€ (soit 70 000€ de travaux max)</div>
 </div>
 <div className="h-[1px] bg-gray-200"></div>
 <div>
 <div className="font-medium text-green-800">Ménages modestes:</div>
 <div className="text-2xl font-light text-green-900">35% du coût travaux HT</div>
 <div className="text-sm text-gray-600">Plafond 21 000€ (soit 60 000€ de travaux max)</div>
 </div>
 </div>
 </div>

 <div className="bg-green-900 text-white p-5 rounded">
 <h4 className="font-semibold mb-2">Conditions obligatoires:</h4>
 <ul className="text-sm space-y-1">
 <li> Gain énergétique ≥35% (audit énergétique obligatoire)</li>
 <li> Minimum 2 gestes d'isolation (murs + combles par ex)</li>
 <li> Accompagnement MOE Anah</li>
 <li> Revenus sous plafonds Anah</li>
 </ul>
 </div>

 <div className="bg-amber-50 border-l-4 border-amber-500 p-5">
 <p className="text-amber-900 text-sm mb-0">
 <strong>Exemple concret:</strong> Maison 120m² DPE G. Travaux: isolation complète + PAC + menuiseries = 55 000€ HT.
 Gain énergétique 62% (DPE G→B). Prime Sérénité ménage modeste: 19 250€ (35% de 55k€).
 Reste à charge: 35 750€.
 </p>
 </div>
 </div>
 </div>

 {/* Éco-PTZ */}
 <div className="bg-white border-2 border-purple-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-light flex-shrink-0">
 3
 </div>
 <div className="flex-grow">
 <h3 className="text-2xl font-medium text-purple-900 mb-2">Éco-PTZ (Prêt à Taux Zéro)</h3>
 <p className="text-purple-800 text-lg font-medium">Jusqu'à 50 000€ à 0% d'intérêt</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Prêt bancaire à <strong>taux d'intérêt 0%</strong> pour financer travaux rénovation énergétique.
 Cumulable avec MaPrimeRénov'. Remboursable sur 20 ans maximum (mensualités réduites).
 Aucune condition de ressources.
 </p>

 <div className="bg-white p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-3">Montants selon nombre de travaux:</h4>
 <div className="space-y-2 text-base">
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>1 action (isolation ou chauffage)</span>
 <strong className="text-purple-900">15 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>2 actions</span>
 <strong className="text-purple-900">25 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>3 actions ou plus (rénovation globale)</span>
 <strong className="text-purple-900">50 000€</strong>
 </div>
 </div>
 </div>

 <div className="bg-purple-900 text-white p-5 rounded">
 <h4 className="font-semibold mb-3">Exemple calcul mensualités:</h4>
 <div className="text-sm space-y-2">
 <div>Prêt 50 000€ sur 15 ans (180 mois) à 0%</div>
 <div className="text-2xl font-light mt-2">= 278€/mois</div>
 <div className="text-purple-300 mt-3">
 Vs prêt classique 3,5%: 357€/mois → Économie 79€/mois = 14 220€ sur 15 ans
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* CEE */}
 <div className="bg-white border-2 border-orange-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-light flex-shrink-0">
 4
 </div>
 <div className="flex-grow">
 <h3 className="text-2xl font-medium text-orange-900 mb-2">CEE - Primes Énergie</h3>
 <p className="text-orange-800 text-lg font-medium">2 000 à 5 000€ selon travaux</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Certificats d'Économies d'Énergie versés par fournisseurs énergie (EDF, Engie, Total, Leclerc, etc).
 Primes variables selon travaux et revenus. <strong>Cumulables avec toutes autres aides.</strong>
 </p>

 <div className="bg-white p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-3">Montants indicatifs Toulouse (2025):</h4>
 <ul className="space-y-2 text-sm">
 <li className="flex justify-between">
 <span>Isolation combles 100m²</span>
 <strong>800-1 200€</strong>
 </li>
 <li className="flex justify-between">
 <span>Isolation murs 80m²</span>
 <strong>1 200-1 800€</strong>
 </li>
 <li className="flex justify-between">
 <span>PAC air/eau</span>
 <strong>2 500-4 000€</strong>
 </li>
 <li className="flex justify-between">
 <span>Chaudière THPE</span>
 <strong>600-1 200€</strong>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-gray-900 text-white p-8 rounded-lg">
 <h3 className="text-2xl font-light mb-6">Cumul des aides : exemple rénovation complète</h3>
 <div className="space-y-3 text-base">
 <div className="flex justify-between pb-3 border-b border-gray-700">
 <span className="text-gray-300">Coût total travaux HT</span>
 <strong className="text-2xl">55 000€</strong>
 </div>
 <div className="flex justify-between pb-2">
 <span className="text-gray-400">- MaPrimeRénov' Sérénité (35%)</span>
 <strong className="text-green-400">- 19 250€</strong>
 </div>
 <div className="flex justify-between pb-2">
 <span className="text-gray-400">- CEE primes énergie</span>
 <strong className="text-green-400">- 4 200€</strong>
 </div>
 <div className="flex justify-between pb-2">
 <span className="text-gray-400">- TVA 5,5% (économie vs 20%)</span>
 <strong className="text-green-400">- 7 975€</strong>
 </div>
 <div className="h-[1px] bg-gray-600 my-4"></div>
 <div className="flex justify-between text-xl">
 <strong>Reste à charge réel:</strong>
 <strong className="text-green-400">23 575€</strong>
 </div>
 <div className="flex justify-between text-sm text-gray-400 mt-2">
 <span>Finançable via Éco-PTZ 25 000€ sur 15 ans</span>
 <span>139€/mois</span>
 </div>
 </div>
 <p className="text-gray-400 text-sm mt-6 mb-0">
 Économie facture énergie: 1 800€/an → ROI en 13 ans → 100% rentabilisé en 2038
 </p>
 </div>
 </div>

 <div className="mt-12 text-center">
 <Link
 href="/contact"
 className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
 >
 Simuler mes aides et recevoir un devis
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </Link>
 <p className="text-sm text-gray-600 mt-4">EGB Occitanie monte vos dossiers d'aides (taux acceptation 95%)</p>
 </div>
 </div>
 </div>
 </section>

 {/* Contact Section */}
 <ContactSection />
 </>
 );
}
