import type { Metadata } from"next";
import { Playfair_Display } from"next/font/google";
import Link from"next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
 },
 {"@type":"Question","name":"Comment rénover un appartement DPE F ou G aux Minimes avant interdiction location 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Rénovation DPE F-G Minimes Toulouse (interdiction location G depuis 01/01/2025, F en 2028, E en 2034) : 1) Diagnostic DPE précis obligatoire (200-250€) pour identifier travaux prioritaires 2) Isolation priorité #1 : isolation extérieure façades 120-180€/m², combles 30-50€/m², fenêtres double vitrage PVC 350-600€/unité 3) Chauffage performant : pompe chaleur air-eau 10 000-16 000€ (COP 3-4) remplace convecteurs électriques 4) Ventilation VMC double-flux : 3 000-6 000€ (récupération chaleur 90%) 5) Eau chaude solaire/thermodynamique : 3 000-5 000€. Objectif : passer DPE F-G → C minimum (louable) ou B-A (valorisation maximale +30-40%). Délais travaux : 3-5 mois copropriété. Vote AG copropriété obligatoire travaux parties communes. EGB Occitanie : expert rénovation énergétique Minimes, accompagnement vote AG, montage dossiers aides, garantie atteinte DPE cible. Audit énergétique gratuit : 06 65 01 58 82."
 }
 },
 {"@type":"Question","name":"Quelles aides financières pour rénover un appartement Minimes en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Aides rénovation énergétique Minimes Toulouse 2025 (cumulables) : 1) MaPrimeRénov' 2025 : 10 000-15 000€ rénovation globale (gain 2+ classes DPE) - plafond revenus modestes 38 184€/an couple 2) Bonus Éco-Rénovation Toulouse Métropole : 1 500€ (amélioration 2 classes DPE minimum) - sans conditions ressources 3) Certificats Économies Énergie (CEE) : 2 000-4 000€ (isolation, chauffage, fenêtres) - tous propriétaires éligibles 4) Éco-PTZ : prêt 50 000€ taux 0% (remboursement 15-20 ans) - travaux énergie 5) TVA réduite 5,5% travaux rénovation énergétique (vs 20% standard) 6) Prêt Avance Rénovation (PAR) : remboursement différé vente/succession (seniors 60+ ans). CUMUL POSSIBLE : MaPrimeRénov' 15k€ + Bonus Toulouse 1,5k€ + CEE 4k€ = 20 500€ aides sur 60 000€ travaux = reste 39 500€ (coût net 34%). Accompagnement montage dossiers gratuit EGB Occitanie. Simulation aides personnalisée : 06 65 01 58 82."
 }
 },
 {"@type":"Question","name":"Est-ce rentable d'acheter et rénover un DPE F-G aux Minimes en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Rentabilité achat+rénovation DPE F-G Minimes Toulouse 2025 (stratégie investissement) : Exemple 60m² T3 : Achat DPE G avec décote -15% : 189 000€ (3 150€/m² vs 3 700€/m² marché) + Rénovation énergétique complète : 90 000€ (1 500€/m² net après aides 50%) + Frais notaire : 12 000€ = TOTAL 291 000€. Valeur après rénovation DPE B : 258 000€ (4 300€/m² marché rénové +16%) + Prime verte : +12 000€ (DPE A-B valorisation 5%) = 270 000€. Investissement net : 21 000€ (291k - 270k). Rentabilité locative DPE B : 850€/mois (vs 650€ DPE G) = +200€/mois = +2 400€/an = ROI 11,4% sur investissement net. Plus-value revente 5 ans : +15-20% marché Minimes gentrification = +40 500-54 000€. CONCLUSION : Achat DPE F-G décote + rénovation énergétique = stratégie gagnante Minimes 2025. Risque : interdiction location = DPE G invendables sans travaux. Simulation investissement gratuite : 06 65 01 58 82."
 }
 },
 {"@type":"Question","name":"Comment convaincre copropriété Minimes voter travaux rénovation énergétique ?","acceptedAnswer": {"@type":"Answer","text":"Stratégie vote AG copropriété Minimes Toulouse (rénovation énergétique collective) : 1) Audit énergétique copropriété obligatoire (depuis 2024 si >50 lots + DPE D-G) : 5 000-10 000€ financé copropriété, identifie travaux prioritaires + économies potentielles 2) Présentation chiffrée copropriétaires : économies chauffage -40-60% = -800-1 200€/an par appartement, valorisation patrimoine +15-25% après DPE collectif 3) Aides copropriétés fragiles : MaPrimeRénov' Copropriétés finance jusqu'à 25% coûts travaux (plafond 25 000€/logement) si 75%+ copropriétaires revenus modestes - Minimes éligible 4) Mandataire travaux : désigner syndic/cabinet spécialisé piloter projet = décharge copropriétaires 5) Échelonnement travaux : phase 1 isolation (1 an) → phase 2 chauffage (2 ans) = étaler coûts 6) Arguments interdiction location : copropriétaires bailleurs OBLIGÉS rénover DPE G (2025) F (2028) = anticiper éviter dévalorisation. Vote AG : majorité absolue article 25 (50%+1 voix) si travaux économies énergie. EGB Occitanie : accompagnement vote AG, présentation copropriétaires, chiffrage détaillé, suivi chantier copropriété. Contact syndic gratuit : 06 65 01 58 82."
 }
 }
 ]
};

const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Rénover appartement DPE F-G Minimes Toulouse","step": [
 {"@type":"HowToStep","text":"1. Faire diagnostic DPE précis (200-250€) pour identifier classe énergétique actuelle et travaux prioritaires"
 },
 {"@type":"HowToStep","text":"2. Commander audit énergétique complet (500-800€, remboursé MaPrimeRénov') avec scénarios travaux et gains DPE"
 },
 {"@type":"HowToStep","text":"3. Vérifier éligibilité aides MaPrimeRénov' 2025 (revenus modestes 38 184€ couple) + Bonus Toulouse + CEE"
 },
 {"@type":"HowToStep","text":"4. Si copropriété : présenter projet AG avec audit + devis + simulation aides pour vote travaux collectifs"
 },
 {"@type":"HowToStep","text":"5. Prioriser isolation (façades + combles + fenêtres) AVANT changement chauffage pour maximiser efficacité"
 },
 {"@type":"HowToStep","text":"6. Installer chauffage performant (pompe chaleur COP 3+) + VMC double-flux + eau chaude thermodynamique"
 },
 {"@type":"HowToStep","text":"7. Déposer dossiers aides (MaPrimeRénov' + CEE + Bonus Toulouse) AVANT début travaux sous peine refus"
 },
 {"@type":"HowToStep","text":"8. Réaliser travaux avec artisans RGE obligatoires (Reconnu Garant Environnement) pour éligibilité aides"
 },
 {"@type":"HowToStep","text":"9. Faire nouveau DPE après travaux (250€) pour attester gain classes et débloquer soldes aides"
 },
 {"@type":"HowToStep","text":"10. Actualiser valeur locative cadastrale et loyer si location (DPE B-A = loyers +20-30% vs DPE F-G)"
 }
 ]
};

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"EGB Occitanie Rénovation Minimes","image":"https://www.egb-occitanie.fr/images/renovation-minimes-toulouse.jpg","address": {"@type":"PostalAddress","addressLocality":"Toulouse","addressRegion":"Occitanie","postalCode":"31200","addressCountry":"FR"
 },"telephone":"+33665015882","priceRange":"1800-2600€/m²","aggregateRating": {"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"63"
 }
};

export default function RenovationMinimesToulouse() {
 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
 />

 <div className="min-h-screen bg-white">
 {/* Breadcrumb */}
 <div className="bg-white border-b">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
 <nav className="text-sm text-gray-600">
 <Link href="/" className="hover:text-green-600">Accueil</Link>
 <span className="mx-2">/</span>
 <Link href="/renovation-maison-toulouse" className="hover:text-green-600">Rénovation Toulouse</Link>
 <span className="mx-2">/</span>
 <span className="text-gray-900 font-medium">Minimes</span>
 </nav>
 </div>
 </div>

 {/* Hero Section */}
 <div className="relative bg-gray-900 text-white overflow-hidden">
 
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
 <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
 Rénovation Minimes Toulouse
 <span className="block text-3xl md:text-4xl mt-4 text-gray-300">
 Expert DPE F-G & Rénovation Énergétique Années 60-70
 </span>
 </h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
 Rénovation appartements copropriétés Minimes. Années 60-70, DPE F-G passoires thermiques. Interdiction location G 2025. Aides MaPrimeRénov' jusqu'à 50%. Prix attractifs, pas ABF.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <a
 href="tel:0665015882"
 className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-100 transition-colors text-center shadow-lg"
 >
 06 65 01 58 82 - Devis Gratuit 48h
 </a>
 <Link
 href="/contact"
 className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors text-center shadow-lg"
 >
 Audit Énergétique Gratuit DPE
 </Link>
 </div>

 {/* Stats Cards */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
 <div className="bg-white border-2 rounded-lg p-6 border border-gray-200">
 <div className="text-3xl font-bold mb-2 text-gray-900">3 200€</div>
 <div className="text-gray-600">Prix m² moyen 2025</div>
 </div>
 <div className="bg-white border-2 rounded-lg p-6 border border-gray-200">
 <div className="text-3xl font-bold mb-2 text-gray-900">60-70%</div>
 <div className="text-gray-600">DPE F-G passoires</div>
 </div>
 <div className="bg-white border-2 rounded-lg p-6 border border-gray-200">
 <div className="text-3xl font-bold mb-2 text-gray-900">50%</div>
 <div className="text-gray-600">Aides MaPrimeRénov'</div>
 </div>
 <div className="bg-white border-2 rounded-lg p-6 border border-gray-200">
 <div className="text-3xl font-bold mb-2 text-gray-900">0 ABF</div>
 <div className="text-gray-600">Pas contraintes patrimoine</div>
 </div>
 </div>
 </div>
 </div>

 {/* Pourquoi Rénover Minimes Urgence 2025 */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
 Pourquoi Rénover Minimes Urgence 2025 ?
 </h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-red-200">
 <div className="text-4xl mb-4">️</div>
 <h3 className="text-xl font-bold mb-3 text-gray-900">Interdiction Location G 2025</h3>
 <p className="text-gray-700 leading-relaxed">
 Loi Climat Résilience : interdiction location DPE G depuis 01/01/2025, F en 2028, E en 2034. Minimes = 60-70% appartements DPE F-G. Rénovation obligatoire sous peine amendes + dévalorisation -15-25%.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
 <div className="text-4xl mb-4"></div>
 <h3 className="text-xl font-bold mb-3 text-gray-900">Aides 50% Coûts 2025</h3>
 <p className="text-gray-700 leading-relaxed">
 MaPrimeRénov' 10-15k€ + Bonus Toulouse 1,5k€ + CEE 2-4k€ = 20k€ aides sur 60k€ travaux = coût net 40k€ (66% financé). Fenêtre opportunité 2025 avant durcissement conditions 2026.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
 <div className="text-4xl mb-4"></div>
 <h3 className="text-xl font-bold mb-3 text-gray-900">Valorisation +25-35%</h3>
 <p className="text-gray-700 leading-relaxed">
 Passage DPE F-G → B-A = valorisation +25-35% prix vente. 60m² DPE G 190k€ → DPE B 258k€ (+68k€). Prime verte acheteurs privilégient DPE A-B-C. Rentabilité locative +30% (850€ vs 650€).
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
 <div className="text-4xl mb-4">️</div>
 <h3 className="text-xl font-bold mb-3 text-gray-900">Coûts -30% vs Centre</h3>
 <p className="text-gray-700 leading-relaxed">
 Pas contraintes ABF Minimes = matériaux standards, PVC autorisé, délais courts. Rénovation 1 800-2 600€/m² (vs 3 000-4 200€ Capitole). Prix m² achat 3 200€ (vs 5 490€ Capitole) = ROI supérieur.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Prix Rénovation Énergétique Détaillés */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-6 text-center`}>
 Prix Rénovation Énergétique Minimes 2025
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
 Tarifs rénovation appartement Minimes <strong>DPE F-G → C-B-A</strong> avec aides MaPrimeRénov' 2025 déduites. Prix NET après financement 50%.
 </p>

 <div className="overflow-x-auto shadow-xl rounded-lg mb-8">
 <table className="w-full bg-white">
 <thead className="bg-gray-900 text-white">
 <tr>
 <th className="px-6 py-4 text-left font-bold">Type Rénovation Énergétique</th>
 <th className="px-6 py-4 text-center font-bold">50m²</th>
 <th className="px-6 py-4 text-center font-bold">60m²</th>
 <th className="px-6 py-4 text-center font-bold">70m²</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Rénovation Légère DPE E→C</div>
 <div className="text-sm text-gray-600 mt-1">Isolation combles 30-50€/m², fenêtres double vitrage PVC 350-600€/unité, régulation chauffage connecté, VMC simple flux. Gain 1-2 classes DPE.</div>
 <div className="text-green-600 font-semibold mt-2">Brut : 1 800-2 200€/m² | Net après aides : 1 200-1 500€/m²</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">90 000 - 110 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 60 000 - 75 000€</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">108 000 - 132 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 72 000 - 90 000€</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">126 000 - 154 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 84 000 - 105 000€</div>
 </td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors bg-green-50/30">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Rénovation Complète DPE F-G→B</div>
 <div className="text-sm text-gray-600 mt-1">Isolation extérieure façades 120-180€/m², combles + planchers, fenêtres PVC double vitrage, pompe chaleur air-eau 12 000-16 000€, VMC double-flux, eau chaude thermodynamique. Gain 3-4 classes DPE.</div>
 <div className="text-green-600 font-semibold mt-2">Brut : 2 200-2 600€/m² | Net après aides : 1 500-1 800€/m²</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">110 000 - 130 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 75 000 - 90 000€</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">132 000 - 156 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 90 000 - 108 000€</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">154 000 - 182 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 105 000 - 126 000€</div>
 </td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Rénovation Premium DPE F-G→A</div>
 <div className="text-sm text-gray-600 mt-1">Isolation renforcée haute performance, triple vitrage, pompe chaleur géothermique 18 000-25 000€ (COP 5), VMC double-flux haut rendement, panneaux solaires 5 000-8 000€, domotique énergie. Gain 4-5 classes DPE.</div>
 <div className="text-green-600 font-semibold mt-2">Brut : 2 800-3 400€/m² | Net après aides : 1 900-2 300€/m²</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">140 000 - 170 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 95 000 - 115 000€</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">168 000 - 204 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 114 000 - 138 000€</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">196 000 - 238 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 133 000 - 161 000€</div>
 </td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors bg-teal-50">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Rénovation Globale Copropriété</div>
 <div className="text-sm text-gray-600 mt-1">Isolation extérieure immeuble complet, toiture, chauffage collectif pompe chaleur, VMC collective, ravalement façades, fenêtres tous appartements. Aides MaPrimeRénov' Copropriétés 25% coûts (25k€/logement max).</div>
 <div className="text-green-600 font-semibold mt-2">Brut : 2 000-2 800€/m² | Net après aides copro : 1 300-1 900€/m²</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">100 000 - 140 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 65 000 - 95 000€</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">120 000 - 168 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 78 000 - 114 000€</div>
 </td>
 <td className="px-6 py-4 text-center">
 <div className="font-bold text-gray-900">140 000 - 196 000€</div>
 <div className="text-green-700 text-sm mt-1">Net : 91 000 - 133 000€</div>
 </td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-r-lg">
 <h3 className="font-bold text-green-900 mb-2 text-lg"> Aides Cumulées 2025 (Exemple 60m² DPE F→B)</h3>
 <ul className="space-y-2 text-gray-700">
 <li><strong>• MaPrimeRénov' rénovation globale :</strong> 15 000€ (revenus modestes, gain 2+ classes DPE)</li>
 <li><strong>• Bonus Éco-Rénovation Toulouse Métropole :</strong> 1 500€ (amélioration 2 classes DPE)</li>
 <li><strong>• Certificats Économies Énergie (CEE) :</strong> 3 500€ (isolation + chauffage + fenêtres)</li>
 <li><strong>• Éco-PTZ taux 0% :</strong> 50 000€ prêt (remboursement 15 ans sans intérêts)</li>
 <li><strong>• TVA réduite 5,5% :</strong> -2 000€ économie vs TVA 20% (sur 140k€ travaux)</li>
 <li><strong>• TOTAL AIDES DIRECTES :</strong> 20 000€ sur 140 000€ travaux = reste 120 000€ (coût net 86%)</li>
 <li><strong>• + Valorisation appartement :</strong> +68 000€ (190k→258k) = ROI net +48 000€</li>
 </ul>
 </div>
 </div>
 </section>

 {/* Comparaison DPE Avant/Après */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-6 text-center`}>
 Impact Rénovation DPE Minimes (Avant/Après)
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg">
 Comparaison appartement 60m² Minimes DPE G vs DPE B après rénovation énergétique
 </p>

 <div className="overflow-x-auto shadow-xl rounded-lg">
 <table className="w-full bg-white">
 <thead className="bg-gray-900 text-white">
 <tr>
 <th className="px-6 py-4 text-left font-bold">Critère</th>
 <th className="px-6 py-4 text-center font-bold">DPE G Avant</th>
 <th className="px-6 py-4 text-center font-bold">DPE B Après</th>
 <th className="px-6 py-4 text-center font-bold">Gain</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4 font-semibold text-gray-900">Prix Achat m²</td>
 <td className="px-6 py-4 text-center text-red-600 font-bold">3 150€/m² (décote -15%)</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">4 300€/m² (marché rénové)</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">+1 150€/m² (+36%)</td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4 font-semibold text-gray-900">Valeur Appartement 60m²</td>
 <td className="px-6 py-4 text-center text-red-600 font-bold">189 000€</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">258 000€</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">+69 000€ (+36%)</td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4 font-semibold text-gray-900">Loyer Mensuel</td>
 <td className="px-6 py-4 text-center text-red-600 font-bold">650€/mois (marché bas)</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">850€/mois (DPE B premium)</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">+200€/mois (+31%)</td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4 font-semibold text-gray-900">Rentabilité Locative Brute</td>
 <td className="px-6 py-4 text-center text-red-600 font-bold">4,1% (7 800€/an)</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">3,9% (10 200€/an)</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">+2 400€/an revenu</td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4 font-semibold text-gray-900">Facture Chauffage Annuelle</td>
 <td className="px-6 py-4 text-center text-red-600 font-bold">1 800€/an (convecteurs)</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">720€/an (pompe chaleur)</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">-1 080€/an (-60%)</td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4 font-semibold text-gray-900">Confort Thermique Hiver</td>
 <td className="px-6 py-4 text-center text-red-600">16-18°C (déperditions)</td>
 <td className="px-6 py-4 text-center text-green-700">20-22°C (isolation)</td>
 <td className="px-6 py-4 text-center text-green-700">+4°C constant</td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors">
 <td className="px-6 py-4 font-semibold text-gray-900">Louabilité Légale</td>
 <td className="px-6 py-4 text-center text-red-600 font-bold">INTERDIT 2025</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">OK jusqu'à 2050+</td>
 <td className="px-6 py-4 text-center text-green-700 font-bold">Conformité loi</td>
 </tr>
 <tr className="hover:bg-green-50 transition-colors bg-green-100">
 <td className="px-6 py-4 font-semibold text-gray-900">Vacance Locative</td>
 <td className="px-6 py-4 text-center text-red-600">3-6 mois/an (évitement DPE G)</td>
 <td className="px-6 py-4 text-center text-green-700">&lt;1 mois/an (forte demande)</td>
 <td className="px-6 py-4 text-center text-green-700">-4 000€ perte évitée</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="mt-8 bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
 <h3 className="font-bold text-teal-900 mb-3 text-lg"> Bilan Financier Global (60m² T3 Minimes)</h3>
 <p className="text-gray-700 leading-relaxed mb-3">
 <strong>Investissement :</strong> Achat DPE G 189k€ + Rénovation 90k€ net aides + Frais 12k€ = <strong>291 000€ total</strong>
 </p>
 <p className="text-gray-700 leading-relaxed mb-3">
 <strong>Valeur finale :</strong> Appartement DPE B 258k€ = Investissement net <strong>33 000€</strong> (291k - 258k)
 </p>
 <p className="text-gray-700 leading-relaxed mb-3">
 <strong>Revenus supplémentaires :</strong> +200€/mois loyer = <strong>+2 400€/an</strong> = ROI 7,3% sur investissement net
 </p>
 <p className="text-gray-700 leading-relaxed">
 <strong>Économies chauffage :</strong> -1 080€/an = ROI total <strong>10,5%/an</strong> (vs 4,1% DPE G non rénové)
 </p>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 bg-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
 Questions Fréquentes Rénovation Minimes
 </h2>

 <div className="space-y-6">
 <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
 <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
 Mon appartement Minimes est DPE F, dois-je rénover en 2025 ?
 <span className="text-green-600 text-2xl">+</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
 <p><strong>Réponse : OUI, anticipez dès 2025 l'interdiction location DPE F en 2028.</strong></p>
 <p><strong>Calendrier interdictions location :</strong><br/>
 • 2025 : DPE G interdit (+ de 450 kWh/m²/an)<br/>
 • 2028 : DPE F interdit (330-450 kWh/m²/an)<br/>
 • 2034 : DPE E interdit (250-330 kWh/m²/an)</p>
 <p><strong>Pourquoi rénover DPE F dès 2025 :</strong><br/>
 1) Aides MaPrimeRénov' 2025 maximales (15k€) avant durcissement 2026<br/>
 2) Éviter rush 2027-2028 = prix artisans +20-30% + délais 12 mois<br/>
 3) Dévalorisation progressive DPE F : -8-12% prix vente 2025→2028<br/>
 4) Difficulté revente DPE F croissante (acheteurs fuient avant interdiction)<br/>
 5) Banques refusent crédit achat DPE F dès 2026 (risque invendabilité)</p>
 <p><strong>Stratégie recommandée :</strong> Rénovation DPE F→C minimum (louable jusqu'à 2034) ou B-A idéal (pérenne 2050+). Investissement 90-140k€ net aides sur 60m² = valorisation +60-80k€ immédiate.</p>
 <p><strong>EGB Occitanie : audit énergétique gratuit DPE F Minimes, scénarios travaux, simulation aides 2025. Contact : 06 65 01 58 82.</strong></p>
 </div>
 </details>

 <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
 <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
 Comment faire voter travaux rénovation énergétique copropriété Minimes ?
 <span className="text-green-600 text-2xl">+</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
 <p><strong>Stratégie vote AG copropriété Minimes (résidences années 60-70 DPE F-G majoritaires) :</strong></p>
 <p><strong>1. Audit énergétique copropriété obligatoire :</strong> Depuis 2024, copropriétés 50+ lots avec chauffage collectif + DPE D-G doivent réaliser audit (5 000-10 000€ financé copropriété). Audit identifie travaux prioritaires + gains DPE + économies chiffrées.</p>
 <p><strong>2. Présentation chiffrée AG copropriétaires :</strong><br/>
 • Économies chauffage : -40-60% factures = -800-1 500€/an par appartement<br/>
 • Valorisation patrimoine : +25-35% prix vente après DPE collectif<br/>
 • Aides MaPrimeRénov' Copropriétés : 25% coûts (25k€ max/logement) si 75%+ revenus modestes<br/>
 • Risque dévalorisation : -15-25% si pas rénovation avant interdictions 2028-2034<br/>
 • Calcul rentabilité : investissement 20k€ net/appartement = ROI 5-7 ans via économies + valorisation</p>
 <p><strong>3. Arguments copropriétaires bailleurs :</strong> DPE G interdit location 2025, F en 2028 = bailleurs OBLIGÉS rénover. Vote collectif = coûts -30-40% vs travaux individuels + aides copropriétés 25%.</p>
 <p><strong>4. Arguments copropriétaires occupants :</strong> Confort thermique +4-6°C hiver, factures -50-60%, silence acoustique (+30% isolation phonique bonus), valorisation revente +30-40%.</p>
 <p><strong>5. Échelonnement travaux :</strong> Phase 1 isolation (année 1, 60% budget) → Phase 2 chauffage collectif (année 2, 40% budget) = étaler coûts sur 2-3 ans.</p>
 <p><strong>Vote AG : majorité absolue article 25 (50%+1 copropriétaires) si travaux économies énergie. Majorité simple (majorité présents) si audit énergétique obligatoire déjà voté.</strong></p>
 <p><strong>EGB Occitanie : accompagnement vote AG Minimes, présentation copropriétaires gratuite, chiffrage audit, suivi chantier copropriété, relation syndic. Contact syndic : 06 65 01 58 82.</strong></p>
 </div>
 </details>

 <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
 <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
 Quels travaux prioriser pour passer DPE G→C aux Minimes ?
 <span className="text-green-600 text-2xl">+</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
 <p><strong>Ordre priorité travaux rénovation DPE G→C Minimes (gain 3 classes minimum) :</strong></p>
 <p><strong>1. ISOLATION (priorité absolue, 60% budget) :</strong><br/>
 • <strong>Façades isolation extérieure :</strong> 120-180€/m² façade (immeuble complet si copropriété). Gain +2 classes DPE. Obligatoire avant changement chauffage sinon gaspillage.<br/>
 • <strong>Combles/toiture :</strong> 30-50€/m² si dernier étage. 30% déperditions chaleur.<br/>
 • <strong>Fenêtres double vitrage PVC :</strong> 350-600€/unité (vs 800-1 500€ bois ABF centre). 15% déperditions.</p>
 <p><strong>2. CHAUFFAGE PERFORMANT (priorité #2, 25% budget) :</strong><br/>
 • <strong>Pompe chaleur air-eau :</strong> 12 000-16 000€ (COP 3-4 = consomme 1 kWh produit 3-4 kWh chaleur). Remplace convecteurs électriques gouffres énergie.<br/>
 • Alternative gaz : Chaudière condensation haute performance 4 000-7 000€ (rendement 95% vs 70% anciennes).</p>
 <p><strong>3. VENTILATION VMC (priorité #3, 10% budget) :</strong><br/>
 • <strong>VMC double-flux :</strong> 4 000-6 000€ (récupération chaleur 90% air sortant). Gain +1 classe DPE + confort + qualité air.</p>
 <p><strong>4. EAU CHAUDE (priorité #4, 5% budget) :</strong><br/>
 • <strong>Chauffe-eau thermodynamique :</strong> 2 500-3 500€ (COP 3 = -60% vs électrique classique).</p>
 <p><strong>Budget total 60m² DPE G→C :</strong><br/>
 Isolation 70 000€ + Chauffage 14 000€ + VMC 5 000€ + Eau chaude 3 000€ = <strong>92 000€ brut</strong><br/>
 Aides MaPrimeRénov' 15k + Bonus Toulouse 1,5k + CEE 3,5k = <strong>20 000€</strong><br/>
 <strong>Coût net : 72 000€</strong> (1 200€/m²)</p>
 <p><strong>Gain DPE G (450+ kWh/m²/an) → C (150-230 kWh/m²/an) = -50% consommation = -900€/an factures + valorisation +40 000-60 000€ revente.</strong></p>
 </div>
 </details>

 <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
 <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
 Puis-je louer mon DPE G Minimes en 2025 si travaux en cours ?
 <span className="text-green-600 text-2xl">+</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
 <p><strong>Réponse : NON, l'interdiction location DPE G est immédiate depuis 01/01/2025, travaux en cours ne donnent pas dérogation.</strong></p>
 <p><strong>Règles location DPE G 2025 :</strong><br/>
 • Interdiction louer DPE G (+ de 450 kWh/m²/an) depuis 01/01/2025 pour nouveaux baux<br/>
 • Baux en cours au 01/01/2025 peuvent continuer jusqu'à fin bail (mais renouvellement interdit)<br/>
 • Sanctions : amende 5 000€ (particulier) à 15 000€ (société) + nullité bail + remboursement loyers perçus<br/>
 • Locataire peut exiger travaux ou résiliation bail sans préavis</p>
 <p><strong>Travaux en cours ne donnent PAS dérogation :</strong> Vous devez obtenir nouveau DPE C minimum après travaux AVANT location. Délai travaux 3-6 mois = impossibilité louer pendant chantier.</p>
 <p><strong>Stratégies propriétaires bailleurs DPE G Minimes 2025 :</strong><br/>
 1) <strong>Vente rapide avant dévalorisation :</strong> Prix encore -15% vs marché (vs -25-30% en 2026-2027 rush). Acheter rénové ailleurs.<br/>
 2) <strong>Rénovation immédiate DPE G→C :</strong> Investir 70-90k€ net aides, louer 850€/mois (vs 650€ avant), ROI 7 ans via loyers + valorisation.<br/>
 3) <strong>Location meublée tourisme courte durée :</strong> Airbnb DPE G autorisé jusqu'à 2028 (mais réglementation locale Toulouse limite 120 jours/an).<br/>
 4) <strong>Vente après rénovation :</strong> Acheter 190k + Rénover 90k = 280k → Vendre DPE B 258k = perte 22k MAIS location impossible sans travaux.</p>
 <p><strong>Recommandation : Rénover DPE G→C immédiatement en 2025 pour profiter aides maximales + éviter interdictions futures F (2028) E (2034).</strong></p>
 </div>
 </details>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 bg-gray-900 text-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
 Projet Rénovation Énergétique Minimes ?
 </h2>
 <p className="text-xl mb-8 leading-relaxed">
 Expert DPE F-G, aides MaPrimeRénov' 50%, accompagnement copropriétés, garantie atteinte DPE cible. Audit énergétique gratuit avec simulation aides personnalisée.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
 <a
 href="tel:0665015882"
 className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-100 transition-colors shadow-xl"
 >
 06 65 01 58 82
 </a>
 <Link
 href="/contact"
 className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors shadow-xl"
 >
 Audit Énergétique Gratuit Minimes
 </Link>
 </div>
 <p className="text-gray-600">
 47 rénovations DPE Minimes • Note 4,8/5 • 100% atteinte DPE cible • Artisans RGE certifiés
 </p>
 </div>
 </section>

 {/* Liens Internes */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-3xl font-bold text-gray-900 mb-8 text-center`}>
 Rénovation Autres Quartiers Toulouse
 </h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 <Link href="/renovation-capitole-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-rose-200 hover:border-rose-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Capitole</h3>
 <p className="text-gray-600 text-sm">Prestige centre, ABF ultra-strict</p>
 </Link>
 <Link href="/renovation-maison-carmes-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-orange-200 hover:border-orange-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Carmes</h3>
 <p className="text-gray-600 text-sm">Médiéval, ABF strict patrimoine</p>
 </Link>
 <Link href="/renovation-saint-cyprien-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-amber-200 hover:border-amber-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Cyprien</h3>
 <p className="text-gray-600 text-sm">Rive gauche, ABF modéré</p>
 </Link>
 <Link href="/renovation-saint-etienne-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-purple-200 hover:border-purple-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Étienne</h3>
 <p className="text-gray-600 text-sm">Bourgeois hôtels particuliers</p>
 </Link>
 <Link href="/renovation-busca-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-yellow-200 hover:border-yellow-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Busca</h3>
 <p className="text-gray-600 text-sm">Villas 1920-50, jardins Art Déco</p>
 </Link>
 <Link href="/renovation-arnaud-bernard-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-indigo-200 hover:border-indigo-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Arnaud-Bernard</h3>
 <p className="text-gray-600 text-sm">Bohème créatif populaire</p>
 </Link>
 <Link href="/renovation-saint-aubin-dupuy-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-teal-200 hover:border-teal-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Aubin Dupuy</h3>
 <p className="text-gray-600 text-sm">Résidentiel famille sud</p>
 </Link>
 <Link href="/renovation-rangueil-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-blue-200 hover:border-blue-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Rangueil</h3>
 <p className="text-gray-600 text-sm">Universitaire CHU étudiants</p>
 </Link>
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
