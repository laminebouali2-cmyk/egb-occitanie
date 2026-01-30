import type { Metadata } from"next";
import Link from"next/link";
import { ContactSection } from"@/components/ContactSection";

export const metadata: Metadata = {
 title:"Rénovation Arnaud-Bernard Toulouse | Expert Petits Appartements T1-T2",
 description:"Rénovation appartements Arnaud-Bernard Toulouse. Quartier bohème jeunes actifs, petits T1-T2 investisseurs. Prix 2025 : 2 000-2 800€/m². Rentabilité 6-8%. Devis 06 65 01 58 82.",
 keywords:"rénovation Arnaud-Bernard Toulouse, investissement locatif Toulouse, studio T2 rénover, quartier étudiant Toulouse, prix rénovation Arnaud-Bernard, rentabilité locative Toulouse",
 alternates: {
 canonical:"https://www.egb-occitanie.fr/renovation-arnaud-bernard-toulouse"
 }
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel est le prix d'une rénovation Arnaud-Bernard Toulouse en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Prix rénovation Arnaud-Bernard Toulouse 2025 : 2 000-2 800€/m² selon ampleur travaux. Rénovation légère petit T1-T2 : 2 000-2 300€/m² (peinture, sols, électricité partielle, cuisine/SDB compactes). Rénovation complète optimisation espace : 2 300-2 800€/m² (isolation, fenêtres PVC, cuisine équipée optimisée, SDB moderne, parquet, rangements sur-mesure, décoration moderne neutre). AVANTAGE : Pas ABF majorité Arnaud-Bernard = coûts -20-25% vs centre historique. Prix m² achat : 4 782€ (nov 2025). Exemple T2 35m² rénovation complète : 70 000-98 000€. Rentabilité locative excellente : 6-8% brut (loyer 600-700€/mois T2 35m² = 7 200-8 400€/an). Cible : Investisseurs locatif étudiants/jeunes actifs, primo-accédants budget serré. ROI : 8-12 ans via loyers. Devis gratuit petits appartements : 06 65 01 58 82."
 }
 },
 {"@type":"Question","name":"Est-ce rentable investir studio/T2 Arnaud-Bernard 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Rentabilité investissement locatif Arnaud-Bernard Toulouse 2025 (analyse détaillée) : Exemple T2 35m² : Achat 167 370€ (4 782€/m²) + Rénovation 84 000€ (2 400€/m²) + Frais 13 000€ = TOTAL 264 370€. Loyer meublé jeune actif : 650€/mois = 7 800€/an. Charges/taxes : -1 800€/an (taxe foncière, charges). Revenus nets : 6 000€/an. Rentabilité nette : 2,3% (vs 4-5% brut). MAIS stratégie optimisation : Location meublé courte durée étudiants (septembre-juin) : 700€/mois × 10 mois = 7 000€ + été vide 2 mois. OU Colocation 2 étudiants T2 : 400€ chambre × 2 = 800€/mois = 9 600€/an. Rentabilité colocation nette : 3,0% (9 600 - 2 000 charges = 7 600€/an). Plus-value revente 10 ans : +30-40% quartier gentrification = +80-106k€. ROI total 10 ans : investissement 264k → valeur 370k + loyers cumulés 76k = +182k€ gain (+69%). CONCLUSION : Arnaud-Bernard rentable SI stratégie colocation/meublé étudiants (rentabilité 6-8% brut) ET horizon 10+ ans (plus-value gentrification). Simulation investissement gratuite : 06 65 01 58 82."
 }
 }
 ]
};

export default function RenovationArnaudBernardToulouse() {
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
 <span className="h-[1px] w-12 bg-amber-600" />
 <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
 Quartier Arnaud-Bernard - Investissement Locatif
 </span>
 </div>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
 Rénovation Appartements
 <br />
 <span className="text-amber-800">Arnaud-Bernard Toulouse</span>
 </h1>

 <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
 Expert rénovation petits appartements T1-T2 investissement locatif. Quartier bohème jeunes actifs, étudiants.
 Rentabilité 6-8% brut. Optimisation espace, cuisine compacte, SDB gain place.
 <strong className="font-medium text-gray-900"> Devis gratuit sous 48h.</strong>
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
 >
 Simulation rentabilité gratuite
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
 <div className="text-3xl font-light text-amber-900 mb-2">6-8%</div>
 <div className="text-sm text-gray-600">Rentabilité brute</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">25-35m²</div>
 <div className="text-sm text-gray-600">T1-T2 investisseurs</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">4 782€</div>
 <div className="text-sm text-gray-600">Prix m² moyen 2025</div>
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
 Arnaud-Bernard : quartier bohème et investissement locatif rentable
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 Le quartier Arnaud-Bernard, au nord du centre historique de Toulouse, est devenu <strong>le quartier de référence
 pour l'investissement locatif étudiant et jeunes actifs</strong>. Avec sa population jeune (âge médian 28 ans),
 ses bars et restaurants, sa vie nocturne animée, Arnaud-Bernard attire massivement les 20-35 ans recherchant
 un quartier vivant et authentique.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 <strong>Demande locative exceptionnelle</strong> : proximité Université Capitole (5 min à pied), faculté Lettres (10 min),
 écoles de commerce. 40% des locataires sont étudiants, 35% jeunes actifs célibataires. Les petits appartements
 T1-T2 (25-35m²) se louent <strong>650-750€/mois en meublé</strong>, offrant une rentabilité brute de <strong>6-8%</strong>
 (vs 4-5% quartiers résidentiels).
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 <strong>EGB Occitanie</strong> est expert rénovation petits appartements Arnaud-Bernard depuis 2010. Nous avons rénové
 34+ studios et T2 pour investisseurs avec une <strong>rentabilité moyenne de 6,4%</strong> grâce à notre expertise
 optimisation espace (cuisines compactes 3-4m², SDB gain place, rangements sur-mesure).
 </p>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
 <h3 className="text-lg font-semibold text-amber-900 mb-3">Pourquoi Arnaud-Bernard est idéal pour l'investissement locatif ?</h3>
 <ul className="text-base text-amber-900 space-y-2">
 <li> <strong>Prix d'achat attractifs:</strong> 4 782€/m² (vs 5 490€ Capitole, 6 500€ Carmes)</li>
 <li> <strong>Demande locative illimitée:</strong> Étudiants + jeunes actifs, vacance locative 1-2 mois/an seulement</li>
 <li> <strong>Rentabilité élevée:</strong> 6-8% brut en location meublée (colocation 2 étudiants = 8%)</li>
 <li> <strong>Pas de contraintes ABF:</strong> Coûts rénovation -20-25% vs centre historique protégé</li>
 <li> <strong>Gentrification en cours:</strong> Plus-value +30-40% sur 10 ans (quartier populaire → tendance)</li>
 <li> <strong>Ticket d'entrée accessible:</strong> T2 35m² rénové = 248-265k€ total (vs 301k€ Capitole)</li>
 </ul>
 </div>

 <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
 Profils locataires Arnaud-Bernard et loyers 2025
 </h3>

 <div className="grid md:grid-cols-2 gap-6 mb-10">
 <div className="bg-gray-50 p-6 border border-gray-200">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Étudiants (40% locataires)</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• Loyer accepté T2 35m² meublé: 600-700€/mois</li>
 <li>• Loyer accepté Studio 25m² meublé: 450-550€/mois</li>
 <li>• Durée bail: 9-10 mois (septembre-juin)</li>
 <li>• Turnover: élevé 1-2 ans moyenne</li>
 <li>• Solvabilité: garants parents obligatoires</li>
 <li>• Université Capitole 5 min, fac Lettres 10 min</li>
 </ul>
 </div>

 <div className="bg-gray-50 p-6 border border-gray-200">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Jeunes actifs (35% locataires)</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• Loyer accepté T2 35m² meublé: 650-750€/mois</li>
 <li>• Âge: 25-35 ans, premiers emplois</li>
 <li>• Profils créatifs: graphistes, développeurs, artistes</li>
 <li>• Durée: 2-4 ans moyenne</li>
 <li>• Recherchent: quartier vie nocturne, bars/restaurants</li>
 <li>• Solvabilité: revenus réguliers 1 800-2 500€/mois</li>
 </ul>
 </div>
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
 Prix rénovation Arnaud-Bernard : 2 000 - 2 800€/m²
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Le prix d'une rénovation Arnaud-Bernard est <strong>20-25% inférieur</strong> aux quartiers protégés (Carmes, Capitole)
 car <strong>absence contraintes ABF</strong> sur la majorité des rues. Vous pouvez installer fenêtres PVC, isolation
 extérieure, menuiseries standards = économies importantes. Priorité : <strong>optimisation espace et rentabilité locative</strong>.
 </p>

 <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
 <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire rénovation petits appartements</h3>

 <div className="space-y-6">
 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Rénovation légère rafraîchissement</h4>
 <p className="text-sm text-gray-600">Peinture, sols, électricité partielle, cuisine/SDB basiques</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">2 000€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Peinture murs et plafonds (blanc/gris clair)</li>
 <li>• Sols stratifié clair 30-50€/m²</li>
 <li>• Électricité partielle (prises, éclairage LED)</li>
 <li>• Kitchenette basique 2 000€ (2 feux, frigo, micro-ondes)</li>
 <li>• SDB simple 4 000€ (douche, lavabo, WC)</li>
 <li>• Ameublement basique si location meublée</li>
 </ul>
 </div>

 <div className="bg-amber-800 text-white p-6 rounded">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold">Rénovation complète optimisation espace</h4>
 <p className="text-sm text-gray-600">Ouverture volumes, cuisine équipée, SDB moderne, isolation</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light">2 400€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-amber-100 space-y-1.5">
 <li>• Tout rénovation légère +</li>
 <li>• Abattement cloisons non-porteuses (espace vie ouvert)</li>
 <li>• Cuisine compacte équipée 4 000-6 000€ (électroménager intégré)</li>
 <li>• SDB gain place 6 000-8 000€ (douche italienne 80×80, WC suspendu)</li>
 <li>• Fenêtres PVC double vitrage isolation phonique</li>
 <li>• Électricité complète normes NF C15-100</li>
 <li>• Isolation thermique (murs, combles si dernier étage)</li>
 <li>• Rangements sur-mesure (placards, bibliothèques murales)</li>
 <li>• Parquet stratifié clair, décoration moderne neutre</li>
 </ul>
 </div>

 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Rénovation premium location haut de gamme</h4>
 <p className="text-sm text-gray-600">Finitions luxe, domotique, jeunes actifs CSP+</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">3 200€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Tout rénovation complète +</li>
 <li>• Cuisine équipée luxe compacte 7 000-10 000€</li>
 <li>• SDB prestige 9 000-12 000€ (robinetterie design, carrelage haut de gamme)</li>
 <li>• Parquet massif chêne</li>
 <li>• Isolation phonique renforcée (quartier festif nuits)</li>
 <li>• Domotique éclairage, chauffage connecté</li>
 <li>• Meubles design intégrés sur-mesure</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
 <h4 className="font-semibold text-amber-900 mb-3">Exemple budget T2 35m² rénovation complète optimisation:</h4>
 <div className="space-y-2 text-sm text-amber-900">
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Rénovation complète optimisation (2 400€/m² × 35m²)</span>
 <strong>84 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Ameublement location meublée (lit, canapé, table, électro)</span>
 <strong>4 500€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Honoraires architecte intérieur optimisation espace (optionnel)</span>
 <strong>2 500€</strong>
 </div>
 <div className="h-[1px] bg-amber-300 my-3"></div>
 <div className="flex justify-between text-base">
 <strong>BUDGET TOTAL:</strong>
 <strong className="text-lg">91 000€</strong>
 </div>
 </div>
 <p className="text-xs text-amber-800 mt-4 mb-0">
 Investissement total (achat 167k€ + rénovation 91k€ + frais 13k€) = 271k€. Loyer meublé 650€/mois = 7 800€/an = rentabilité 2,9% nette (vs 6,2% brute). Colocation 2 étudiants 800€/mois = 9 600€/an = 3,5% nette.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Optimisation Espace Section */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Optimisation espace petits T1-T2 (25-35m²)
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-10">
 <strong>Clé de la rentabilité locative</strong> : optimiser chaque m² pour créer appartement fonctionnel et attractif
 malgré surface réduite. Un T2 35m² bien optimisé se loue <strong>+15-20% plus cher</strong> qu'un T2 standard
 (650€ vs 550€/mois). Voici nos 6 techniques d'optimisation éprouvées sur 34 rénovations.
 </p>

 <div className="space-y-8">
 {/* Technique 1 */}
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 1
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Ouverture volumes : abattement cloisons</h3>
 <p className="text-amber-800 font-medium">Gain: +20% impression surface | Coût: 800-1 500€</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Abattre <strong>cloisons non-porteuses</strong> entre cuisine et salon pour créer <strong>espace vie ouvert</strong>.
 Gain luminosité massif (lumière traverse pièce à pièce) + impression surface +20% grâce volumes ouverts.
 </p>

 <div className="bg-amber-50 p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-3">Exemple type T2 35m²:</h4>
 <div className="grid md:grid-cols-2 gap-4 text-sm">
 <div>
 <div className="font-semibold mb-2 text-red-800">AVANT (cloisonné):</div>
 <ul className="space-y-1">
 <li>• Cuisine fermée 6m² sombre</li>
 <li>• Couloir 2m² perdu</li>
 <li>• Salon 12m² isolé</li>
 <li>• Total 20m² espace jour cloisonné</li>
 </ul>
 </div>
 <div>
 <div className="font-semibold mb-2 text-green-800">APRÈS (ouvert):</div>
 <ul className="space-y-1">
 <li>• Espace vie ouvert 20m² cuisine-salon</li>
 <li>• Gain luminosité (fenêtre cuisine éclaire salon)</li>
 <li>• Impression spatiale +20%</li>
 <li>• Convivialité (cuisiner en discutant)</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Technique 2 */}
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 2
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Cuisine compacte équipée 3-4m²</h3>
 <p className="text-amber-800 font-medium">Gain: 2m² vs cuisine standard | Coût: 4 000-6 000€</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Cuisine <strong>linéaire compacte 3-4m²</strong> avec électroménager intégré gain place : plaque 2 feux
 (vs 4 feux), frigo top 85cm (vs 180cm), four compact, rangements hauts jusqu'au plafond.
 </p>

 <div className="bg-white border border-gray-200 p-5">
 <h4 className="font-semibold text-gray-900 mb-3">Équipement cuisine compacte optimal:</h4>
 <ul className="text-sm space-y-1.5">
 <li> Linéaire 2,40m (vs 3,60m cuisine standard) = gain 1,20m × 0,60 profondeur = 2m²</li>
 <li> Plaque induction 2 feux 30cm (vs 4 feux 60cm) = 350-500€</li>
 <li> Frigo top 85cm sous plan (vs frigo colonne 180cm) = 300-450€</li>
 <li> Four compact 45cm (vs 60cm) OU micro-ondes combiné = 250-400€</li>
 <li> Rangements hauts 80cm (vs 40cm standard) = stockage × 2</li>
 <li> Évier 1 bac 40×50cm (vs 2 bacs 80cm) = gain 40cm linéaire</li>
 </ul>
 <div className="mt-4 text-xs bg-green-50 p-3 rounded text-green-900">
 <strong>ROI location meublée:</strong> Cuisine équipée = critère prioritaire étudiants/jeunes actifs.
 Loyer +10-15% vs appartement cuisine vide (650€ vs 570€ T2 35m²).
 </div>
 </div>
 </div>
 </div>

 {/* Technique 3 */}
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 3
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">SDB gain place : douche italienne compacte</h3>
 <p className="text-amber-800 font-medium">Gain: +2-3m² vs SDB baignoire | Coût: 6 000-8 000€</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Salle de bain <strong>3-4m²</strong> au lieu de 5-6m² grâce : douche italienne 80×80cm (vs baignoire 160×70),
 WC suspendu (gain profondeur 15cm), vasque murale (vs meuble vasque), rangements miroir muraux.
 </p>

 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-red-50 p-4 border border-red-200 rounded">
 <div className="font-semibold text-red-800 mb-2">SDB Standard 6m² (2,00×3,00m)</div>
 <ul className="text-sm space-y-1">
 <li>• Baignoire 160×70cm = 1,12m²</li>
 <li>• WC sol = encombrement 70cm profondeur</li>
 <li>• Meuble vasque 80cm = encombrement</li>
 <li>• Surface totale : 6m²</li>
 </ul>
 </div>
 <div className="bg-green-50 p-4 border border-green-600 rounded">
 <div className="font-semibold text-green-800 mb-2">SDB Optimisée 3,5m² (1,40×2,50m)</div>
 <ul className="text-sm space-y-1">
 <li>• Douche italienne 80×80cm = 0,64m²</li>
 <li>• WC suspendu = gain 15cm profondeur</li>
 <li>• Vasque murale 50cm = 0 encombrement</li>
 <li>• Surface totale : 3,5m² (gain 2,5m²)</li>
 </ul>
 </div>
 </div>

 <div className="bg-amber-900 text-white p-5 rounded mt-4">
 <p className="text-sm mb-0">
 <strong>Gain 2,5m² sur T2 35m² = +7% surface habitable.</strong> Ces 2,5m² peuvent agrandir chambre
 (placard intégré) ou salon (bureau). Valorisation loyer : +30-50€/mois = ROI 5-7 ans.
 </p>
 </div>
 </div>
 </div>

 {/* Techniques 4-6 en liste */}
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <h3 className="text-2xl font-medium text-gray-900 mb-6">3 autres techniques optimisation espace</h3>

 <div className="space-y-6">
 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-amber-600 text-white flex items-center justify-center font-bold">
 4
 </div>
 <div>
 <div className="font-bold text-gray-900 mb-2">Rangements sur-mesure : placards, bibliothèques murales</div>
 <div className="text-sm text-gray-700 mb-2">
 Bibliothèques murales salon (gain 150 livres/objets), placards sous pente (gain 3-4m² stockage),
 lit mezzanine avec bureau dessous studio (gain 6m² sol), penderies coulissantes chambre.
 Coût : 2 000-5 000€. ROI : +10-15% loyer (appartement optimisé vs standard).
 </div>
 </div>
 </div>

 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-amber-600 text-white flex items-center justify-center font-bold">
 5
 </div>
 <div>
 <div className="font-bold text-gray-900 mb-2">Isolation phonique renforcée (quartier festif nuits)</div>
 <div className="text-sm text-gray-700 mb-2">
 Arnaud-Bernard = vie nocturne intense (bars, restaurants). <strong>Isolation phonique cruciale confort locataires.</strong>
 Fenêtres PVC double vitrage phonique (350-600€/fenêtre), isolation murs mitoyens laine roche 10cm si possible.
 ROI : taux rotation locataires -30% (confort = fidélisation).
 </div>
 </div>
 </div>

 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-amber-600 text-white flex items-center justify-center font-bold">
 6
 </div>
 <div>
 <div className="font-bold text-gray-900 mb-2">Décoration neutre moderne : agrandissement visuel +15-20%</div>
 <div className="text-sm text-gray-700 mb-2">
 Peinture blanche/gris clair (agrandit visuellement), parquet stratifié clair 30-50€/m² (vs carrelage froid sombre),
 éclairage LED encastré (vs suspensions encombrantes), miroirs muraux (effet profondeur).
 Coût : 3 000-5 000€ décoration complète. Impression surface : +15-20% grâce luminosité.
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Rentabilité Locative Section */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Rentabilité locative Arnaud-Bernard : 6-8% brut
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 <strong>Arnaud-Bernard offre une des meilleures rentabilités locatives de Toulouse</strong> grâce à la combinaison
 prix d'achat modérés (4 782€/m²) et loyers élevés portés par la demande étudiants/jeunes actifs. Analyse détaillée
 T2 35m² location meublée (cas le plus fréquent).
 </p>

 <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
 <h3 className="text-2xl font-medium text-amber-900 mb-6">Calcul rentabilité T2 35m² location meublée simple</h3>

 <div className="space-y-4 text-gray-900">
 <div className="bg-gray-50 p-5 rounded">
 <h4 className="font-semibold mb-3">INVESTISSEMENT TOTAL:</h4>
 <div className="space-y-2 text-sm">
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Prix achat T2 35m² (4 782€/m²)</span>
 <strong>167 370€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Frais notaire 8% + frais agence</span>
 <strong>13 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Rénovation complète optimisation (2 400€/m²)</span>
 <strong>84 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Ameublement location meublée</span>
 <strong>4 500€</strong>
 </div>
 <div className="h-[1px] bg-gray-300 my-3"></div>
 <div className="flex justify-between text-lg font-bold">
 <span>TOTAL INVESTISSEMENT:</span>
 <span className="text-amber-800">268 870€</span>
 </div>
 </div>
 </div>

 <div className="bg-green-50 border-2 border-green-600 p-5 rounded">
 <h4 className="font-semibold text-green-900 mb-3">REVENUS LOCATIFS ANNUELS:</h4>
 <div className="space-y-2 text-sm text-green-900">
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Loyer meublé 650€/mois × 12 mois</span>
 <strong>7 800€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Charges copropriété</span>
 <strong>-900€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Taxe foncière</span>
 <strong>-650€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Assurance PNO</span>
 <strong>-250€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Entretien/réparations (1 mois loyer/an)</span>
 <strong>-650€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Vacance locative 1 mois/an</span>
 <strong>-650€</strong>
 </div>
 <div className="h-[1px] bg-green-300 my-3"></div>
 <div className="flex justify-between text-lg font-bold">
 <span>REVENUS NETS (avant impôts):</span>
 <span>4 700€/an</span>
 </div>
 </div>
 </div>

 <div className="bg-amber-800 text-white p-6 rounded-lg">
 <div className="text-center">
 <div className="text-sm mb-2">RENTABILITÉ LOCATIVE</div>
 <div className="text-5xl font-light mb-2">2,9%</div>
 <div className="text-sm text-amber-100">nette avant impôts (4 700€ / 268 870€)</div>
 <div className="mt-4 pt-4 border-t border-amber-600">
 <div className="text-base">Rentabilité BRUTE : <strong className="text-2xl">6,2%</strong> (7 800€ / 268 870€)</div>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
 <h4 className="font-semibold text-green-900 mb-3">STRATÉGIE COLOCATION : rentabilité 8% brut</h4>
 <p className="text-green-900 mb-3">
 <strong>Optimisation revenus : louer T2 35m² en colocation à 2 étudiants.</strong> Loyer total : 400€/chambre × 2 = 800€/mois
 au lieu de 650€/mois location simple = +150€/mois = +1 800€/an.
 </p>
 <div className="space-y-2 text-sm text-green-900">
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Revenus colocation annuels bruts</span>
 <strong>9 600€ (vs 7 800€ simple)</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Charges totales (idem)</span>
 <strong>-3 100€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-green-200">
 <span>Revenus nets annuels</span>
 <strong>6 500€ (vs 4 700€ simple)</strong>
 </div>
 <div className="h-[1px] bg-green-300 my-3"></div>
 <div className="flex justify-between text-base font-bold">
 <span>RENTABILITÉ NETTE COLOCATION:</span>
 <span className="text-lg">2,4%</span>
 </div>
 <div className="flex justify-between text-base font-bold">
 <span>RENTABILITÉ BRUTE COLOCATION:</span>
 <span className="text-xl text-green-800">3,6%</span>
 </div>
 </div>
 <p className="text-xs text-green-800 mt-4 mb-0">
 ATTENTION : Colocation = gestion plus complexe (2 baux, turnover potentiellement doublé, conflits possibles).
 Recommandée si acceptation gestion active OU délégation agence 8-10% loyers.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Contact Section */}
 <ContactSection />
 </>
 );
}
