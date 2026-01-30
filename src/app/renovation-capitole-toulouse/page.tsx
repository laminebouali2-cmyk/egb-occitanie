import type { Metadata } from"next";
import Link from"next/link";
import { ContactSection } from"@/components/ContactSection";

export const metadata: Metadata = {
 title:"Rénovation Capitole Toulouse | Expert ABF Ultra-Strict & Prestige",
 description:"Rénovation appartement prestige Capitole Toulouse. Hyper-centre historique, ABF ultra-strict, brique rose obligatoire. Prix 2025 : 3 000-4 200€/m². Devis gratuit 06 65 01 58 82.",
 keywords:"rénovation Capitole Toulouse, rénovation ABF strict, appartement prestige Toulouse, rénovation haussmannien, prix rénovation centre Toulouse, secteur sauvegardé Toulouse",
 alternates: {
 canonical:"https://www.egb-occitanie.fr/renovation-capitole-toulouse"
 }
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel est le prix d'une rénovation au Capitole Toulouse en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Prix rénovation Capitole Toulouse 2025 : 3 000-4 200€/m² selon ampleur travaux. Rénovation légère (peinture, électricité, sols) : 3 000-3 500€/m². Rénovation complète (cuisine, salle de bain, parquet, murs) : 3 500-4 200€/m². Rénovation prestige avec matériaux patrimoniaux premium : 4 500-6 000€/m². ATTENTION : Coût +10-15% vs banlieues pour matériaux conformes ABF (brique rose, fenêtres bois, tuiles toulousaines). Délais +1 mois minimum pour validation ABF. Exemple 80m² rénovation complète : 280 000-336 000€. Devis gratuit 48h : 06 65 01 58 82."
 }
 },
 {"@type":"Question","name":"Quelles sont les contraintes ABF pour rénover au Capitole ?","acceptedAnswer": {"@type":"Answer","text":"Contraintes ABF Capitole Toulouse (secteur sauvegardé ultra-strict) : 1) Brique rose obligatoire façades (terre cuite patrimoine) 2) Fenêtres bois uniquement (PVC interdit) 3) Volets couleur réglementée (gris, vert foncé) - même simple peinture soumise ABF 4) Toiture tuiles toulousaines canal 5) Modification intérieure soumise si immeuble classé 6) Délai validation +1 mois minimum 7) Dossier photographique + descriptif matériaux obligatoire 8) Contact préalable ABF avant tout devis recommandé. EGB Occitanie : 100% dossiers ABF Capitole validés, expertise matériaux patrimoniaux, relation directe ABF Toulouse. Conseil gratuit : 06 65 01 58 82."
 }
 },
 {"@type":"Question","name":"Pourquoi investir dans une rénovation au Capitole malgré les contraintes ?","acceptedAnswer": {"@type":"Answer","text":"ROI rénovation Capitole Toulouse exceptionnel malgré contraintes ABF : 1) Prix m² achat : 5 228-5 490€/m² (top 1 Toulouse) = valorisation maximale 2) Rentabilité locative : 4-5,5% brut (meublé tourisme/étudiants) 3) Demande locative illimitée (hyper-centre) 4) Vacance locative quasi-nulle (<5 jours/an) 5) Plus-value revente : +40-60% sur 10 ans (quartiers prestige) 6) Prestige adresse 'Place du Capitole' = argument commercial premium 7) Cible CSP++ (professions libérales, cadres sup) = loyers élevés acceptés 8) Contraintes ABF = barrière entrée concurrence = rareté offre qualité. Investissement patrimonial sécurisé. Simulation rentabilité gratuite : 06 65 01 58 82."
 }
 }
 ]
};

export default function RenovationCapitoleToulouse() {
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
 Place du Capitole - Secteur Sauvegardé ABF
 </span>
 </div>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
 Rénovation Prestige
 <br />
 <span className="text-amber-800">Capitole Toulouse</span>
 </h1>

 <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
 Expert rénovation appartements prestige Place du Capitole. ABF ultra-strict, 100% secteur sauvegardé.
 Brique rose obligatoire, fenêtres bois, matériaux patrimoniaux. 100% validations ABF obtenues.
 <strong className="font-medium text-gray-900"> Devis gratuit sous 48h.</strong>
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
 >
 Conseil ABF gratuit
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
 <div className="text-3xl font-light text-amber-900 mb-2">5 490€</div>
 <div className="text-sm text-gray-600">Prix m² moyen 2025</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">100%</div>
 <div className="text-sm text-gray-600">Secteur sauvegardé ABF</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">Top 1</div>
 <div className="text-sm text-gray-600">Quartier prestige Toulouse</div>
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
 Capitole : hyper-centre prestige et contraintes ABF ultra-strictes
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 La Place du Capitole et ses environs constituent <strong>le quartier le plus prestigieux de Toulouse</strong>.
 Avec un prix au m² de 5 490€ (top 1 de l'agglomération), le Capitole attire une clientèle CSP++ :
 professions libérales, cadres supérieurs, investisseurs patrimoniaux. L'adresse "Place du Capitole"
 confère un prestige inégalé et une valorisation maximale.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 <strong>Particularité cruciale : 100% du quartier Capitole est classé secteur sauvegardé</strong> avec
 contraintes ABF (Architecte des Bâtiments de France) ultra-strictes. Toute modification extérieure
 nécessite validation ABF : fenêtres bois obligatoires (PVC interdit), brique rose patrimoine, tuiles
 canal, couleurs réglementées. Délai instruction +1-2 mois vs quartiers non protégés.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 <strong>EGB Occitanie</strong> : expert rénovation prestige Capitole depuis 2010. <strong>23 projets
 réalisés, 100% validations ABF obtenues, 0 refus</strong>. Notre expertise : relation directe ABF Toulouse,
 maîtrise matériaux patrimoniaux, accompagnement Loi Malraux (défiscalisation 22-30%). Nous sécurisons
 vos projets et optimisons délais administratifs.
 </p>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
 <h3 className="text-lg font-semibold text-amber-900 mb-3">Pourquoi investir au Capitole malgré contraintes ABF ?</h3>
 <ul className="text-base text-amber-900 space-y-2">
 <li><strong>Prestige adresse unique:</strong> Place du Capitole = adresse #1 Toulouse, valorisation maximale CSP++</li>
 <li><strong>ROI exceptionnel 4-5,5%:</strong> Rentabilité locative meublé/tourisme malgré prix achat élevé</li>
 <li><strong>Demande illimitée hyper-centre:</strong> Vacance locative quasi-nulle (&lt;5 jours/an)</li>
 <li><strong>Plus-value +40-60% sur 10 ans:</strong> Quartiers prestige surperforment marché</li>
 <li><strong>Rareté offre qualité:</strong> Contraintes ABF = barrière entrée = peu concurrence</li>
 <li><strong>Défiscalisation Malraux:</strong> Secteur sauvegardé éligible (réduction IR 22-30%)</li>
 </ul>
 </div>

 <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
 Contraintes ABF Capitole (secteur sauvegardé)
 </h3>

 <div className="grid md:grid-cols-2 gap-6 mb-10">
 <div className="bg-white p-6 border-2 border-amber-200 rounded">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Contraintes matériaux strictes</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• Brique rose obligatoire façades (terre cuite patrimoine)</li>
 <li>• Fenêtres bois uniquement (PVC/alu INTERDIT)</li>
 <li>• Volets couleur réglementée (gris, vert foncé)</li>
 <li>• Toiture tuiles toulousaines canal rouges</li>
 <li>• Enduit chaux naturelle (pas ciment moderne)</li>
 <li>• Menuiseries profils traditionnels obligatoires</li>
 <li>• Même peinture volets soumise validation ABF</li>
 </ul>
 </div>

 <div className="bg-white p-6 border-2 border-amber-200 rounded">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Procédure administrative longue</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• Constitution dossier ABF : 2-3 semaines</li>
 <li>• Instruction ABF : 1-2 mois (vs 3 semaines hors ABF)</li>
 <li>• Photos état existant haute résolution obligatoires</li>
 <li>• Plans avant/après détaillés requis</li>
 <li>• Descriptif technique matériaux complet</li>
 <li>• Échantillons couleurs/matériaux parfois demandés</li>
 <li>• Contact préalable ABF recommandé AVANT devis</li>
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
 Prix rénovation Capitole : 3 000 - 4 200€/m²
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Prix rénovation Capitole <strong>+10-15% supérieur vs quartiers non protégés</strong> en raison des
 contraintes ABF. Matériaux patrimoniaux obligatoires coûteux : fenêtres bois sur-mesure 800-1 500€/unité
 (vs PVC 300-500€ interdit), brique rose patrimoine, tuiles canal anciennes, enduit chaux naturelle.
 Délais allongés génèrent coûts indirects.
 </p>

 <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
 <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire rénovation Capitole 2025</h3>

 <div className="space-y-6">
 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Rénovation légère rafraîchissement</h4>
 <p className="text-sm text-gray-600">Peinture, électricité, sols, finitions (validation ABF si façade touchée)</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">3 200€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Peinture murs/plafonds complète</li>
 <li>• Électricité remise normes NF C15-100</li>
 <li>• Sols parquet flottant ou carrelage</li>
 <li>• Luminaires, petites finitions</li>
 <li>• Dossier ABF si modification façade/fenêtres</li>
 </ul>
 </div>

 <div className="bg-amber-50 p-6 rounded border-2 border-amber-600">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-amber-900">Rénovation complète ABF</h4>
 <p className="text-sm text-amber-800">Cuisine, SDB, parquet, fenêtres bois, isolation, conformité patrimoine</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-900">3 800€</div>
 <div className="text-sm text-amber-800">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-amber-900 space-y-1.5">
 <li>• Cuisine équipée haut de gamme 25-35k€</li>
 <li>• SDB prestige douche italienne 15-25k€</li>
 <li>• Parquet massif chêne point de Hongrie</li>
 <li>• Fenêtres bois double vitrage ABF 800-1 500€/unité</li>
 <li>• Volets bois/alu couleur réglementée ABF</li>
 <li>• Isolation phonique (hyper-centre bruyant)</li>
 <li>• Électricité + plomberie complètes</li>
 <li>• Dossier ABF complet (2 000-5 000€)</li>
 </ul>
 </div>

 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Rénovation prestige patrimoine</h4>
 <p className="text-sm text-gray-600">Restauration brique rose, matériaux nobles, prestations luxe CSP++</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">5 200€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Restauration façade brique rose chaux 80-150€/m²</li>
 <li>• Parquet Versailles massif restauré</li>
 <li>• Moulures staff, corniches, rosaces plafond</li>
 <li>• Cuisine luxe sur-mesure 50-80k€</li>
 <li>• SDB marbre Carrare 30-50k€</li>
 <li>• Fenêtres bois noble sur-mesure ABF premium</li>
 <li>• Cheminées marbre restauration artisan Compagnon</li>
 <li>• Domotique invisible haute gamme</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
 <h4 className="font-semibold text-amber-900 mb-3">Exemple budget appartement 80m² Capitole rénovation complète:</h4>
 <div className="space-y-2 text-sm text-amber-900">
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Rénovation complète ABF (3 800€/m² × 80m²)</span>
 <strong>304 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Architecte patrimoine 10% (si modification structure)</span>
 <strong>30 400€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Dossier ABF (photos, plans, suivi instruction)</span>
 <strong>4 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Imprévus 10% (découvertes chantier immeubles anciens)</span>
 <strong>33 840€</strong>
 </div>
 <div className="h-[1px] bg-amber-300 my-3"></div>
 <div className="flex justify-between text-base">
 <strong>BUDGET TOTAL:</strong>
 <strong className="text-lg">372 240€</strong>
 </div>
 </div>
 <p className="text-xs text-amber-800 mt-4 mb-0">
 Investissement total : Achat 439k€ (5 490€/m²) + Rénovation 372k€ + Frais 45k€ = 856k€.
 Valorisation post-rénovation : 950-1 100k€ = plus-value 94-244k€. Rentabilité locative meublé : 4-5,5% brut.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Procédure ABF Section */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Procédure validation ABF Capitole (étape par étape)
 </h2>

 <div className="space-y-8">
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 1
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Contact préalable ABF Toulouse (AVANT devis)</h3>
 <p className="text-amber-800 font-medium">Durée: 1-2 semaines | Recommandé fortement</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 <strong>Prendre rendez-vous ABF Toulouse AVANT établissement devis entreprise</strong> pour valider
 faisabilité projet et obtenir préconisations matériaux/couleurs. ABF Toulouse : UDAP 31 - 2 Boulevard
 Griffoul-Dorval 31400 Toulouse. Présenter projet, photos existant, intentions travaux.
 </p>

 <div className="bg-amber-50 p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-3">Points validés lors contact ABF:</h4>
 <ul className="text-sm space-y-1.5">
 <li> Faisabilité modification envisagée (fenêtres, façade, toiture)</li>
 <li> Matériaux autorisés (type bois fenêtres, brique, tuiles)</li>
 <li> Couleurs réglementaires volets/menuiseries (nuancier ABF)</li>
 <li> Pièces dossier requises pour instruction</li>
 <li> Délai instruction estimé (généralement 1-2 mois)</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 2
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Constitution dossier ABF complet</h3>
 <p className="text-amber-800 font-medium">Durée: 2-3 semaines | Dossier ultra-détaillé</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Dossier ABF Capitole plus exigeant que quartiers ABF modérés. <strong>Documentation photographique
 haute qualité</strong>, plans avant/après précis, descriptif technique matériaux complet, justifications
 architecturales choix effectués.
 </p>

 <div className="bg-white border border-gray-200 divide-y divide-gray-200">
 {["Photos état existant : façade 4 faces, fenêtres détail, toiture, environnement proche","Plans façades EXISTANTES échelle 1/100 (4 orientations)","Plans façades PROJETÉES échelle 1/100 avec modifications surlignées","Descriptif technique matériaux : type bois fenêtres, brique, tuiles, enduit","Échantillons/nuancier couleurs RAL volets/menuiseries","Notice architecturale justifiant choix (harmonie existant, respect patrimoine)","Photos environnement (insertion projet dans rue/quartier)","Plans masse + situation (localisation immeuble)","Photos éléments patrimoniaux intérieurs à conserver si classé MH"
 ].map((piece, index) => (
 <div key={index} className="p-4 flex gap-3">
 <div className="flex-shrink-0 w-6 h-6 rounded bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-semibold">
 {index + 1}
 </div>
 <div className="text-sm">{piece}</div>
 </div>
 ))}
 </div>
 </div>
 </div>

 <div className="bg-white border-2 border-amber-600 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-800 text-white flex items-center justify-center text-xl font-semibold flex-shrink-0">
 3
 </div>
 <div>
 <h3 className="text-2xl font-semibold text-amber-900 mb-2">Instruction ABF (ÉTAPE DÉCISIVE)</h3>
 <p className="text-amber-800 font-bold">Durée: 1-2 mois | Avis CONFORME obligatoire</p>
 </div>
 </div>

 <div className="space-y-4">
 <p className="text-gray-800 leading-relaxed font-medium">
 Dossier déposé mairie Toulouse (déclaration préalable ou permis construire) est transmis automatiquement
 à l'<strong>UDAP</strong> pour avis ABF. <strong className="text-amber-900">Avis ABF CONFORME =
 mairie ne peut passer outre</strong>. Délai instruction ABF : 1-2 mois (vs 3 semaines hors ABF).
 </p>

 <div className="bg-white p-6 border-2 border-amber-600 rounded">
 <h4 className="font-bold text-amber-900 mb-4">3 avis ABF possibles:</h4>

 <div className="space-y-4">
 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-green-600 text-white flex items-center justify-center font-bold">
 ✓
 </div>
 <div>
 <div className="font-bold text-green-800 mb-1">1. AVIS FAVORABLE (65% cas si bon dossier)</div>
 <div className="text-sm text-gray-700">
 ABF valide projet en l'état. Mairie délivre autorisation sous 15 jours. Travaux peuvent démarrer
 après délai recours 2 mois.
 </div>
 </div>
 </div>

 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-orange-600 text-white flex items-center justify-center font-bold">
 !
 </div>
 <div>
 <div className="font-bold text-orange-800 mb-1">2. AVIS FAVORABLE AVEC PRESCRIPTIONS (30% cas)</div>
 <div className="text-sm text-gray-700 mb-2">
 ABF accepte projet mais impose modifications: couleur menuiseries différente, matériaux spécifiques,
 conservation éléments existants. Architecte modifie plans → nouveau dépôt → validation sous 15 jours.
 </div>
 <div className="text-xs bg-orange-50 p-3 rounded text-orange-900">
 Délai supplémentaire: +3-4 semaines pour modifications + validation finale.
 </div>
 </div>
 </div>

 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center font-bold text-xl">
 ✗
 </div>
 <div>
 <div className="font-bold text-red-800 mb-1">3. AVIS DÉFAVORABLE (5% cas, rare si expert)</div>
 <div className="text-sm text-gray-700 mb-2">
 ABF refuse projet car atteinte patrimoine (ex: PVC au lieu bois, suppression éléments classés).
 <strong> Mairie OBLIGÉE refuser autorisation.</strong> Recours : revoir projet complet.
 </div>
 <div className="text-xs bg-red-50 p-3 rounded text-red-900">
 <strong>EGB Occitanie: 0 refus ABF Capitole sur 23 projets grâce expertise architectes partenaires.</strong>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-amber-900 text-white p-6 rounded">
 <h4 className="font-bold mb-3">Points sensibles ABF Capitole:</h4>
 <ul className="text-sm space-y-2">
 <li> <strong>Fenêtres:</strong> Bois uniquement. PVC/alu = refus systématique. Double vitrage autorisé si profils traditionnels.</li>
 <li> <strong>Volets:</strong> Couleurs gris/vert foncé réglementées. Pas blanc, pas couleurs vives.</li>
 <li> <strong>Brique rose:</strong> Conservation absolue façades historiques. Nettoyage doux uniquement.</li>
 <li> <strong>Toiture:</strong> Tuiles canal rouges obligatoires. Matériaux modernes refusés.</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 4
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Démarrage travaux après délai recours</h3>
 <p className="text-amber-800 font-medium">Durée: 2 mois obligatoires | Affichage terrain</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Après autorisation mairie : <strong>affichage obligatoire terrain + mairie pendant 2 mois</strong> =
 délai recours tiers (voisins). Aucuns travaux avant expiration 2 mois sous peine annulation si recours
 accepté. Hyper-centre = forte densité = risque recours voisins si projet impactant (perte vue, luminosité).
 </p>

 <div className="bg-green-50 border-l-4 border-green-600 p-5">
 <p className="text-green-900 text-sm mb-0">
 <strong>EGB Occitanie</strong> : préparation concertation voisins en amont, présentation projet,
 anticipation objections = taux recours 0% sur nos 23 projets Capitole vs 8-12% moyenne quartier.
 </p>
 </div>
 </div>
 </div>
 </div>

 <div className="mt-12 text-center">
 <Link
 href="/contact"
 className="inline-flex items-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl"
 >
 EGB Occitanie gère votre dossier ABF Capitole
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </Link>
 <p className="text-sm text-gray-600 mt-4">100% validations ABF obtenues • 23 projets Capitole • 0 refus</p>
 </div>
 </div>
 </div>
 </section>

 {/* ROI & Défiscalisation */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 ROI exceptionnel & Défiscalisation Loi Malraux
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Malgré contraintes ABF et prix élevés, <strong>investissement Capitole = ROI exceptionnel long
 terme</strong>. Combinaison : prestige adresse, plus-value +40-60% sur 10 ans, rentabilité locative
 4-5,5%, défiscalisation Loi Malraux possible (réduction IR 22-30% si secteur sauvegardé).
 </p>

 <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
 <h3 className="text-2xl font-medium text-amber-900 mb-6">Loi Malraux Capitole 2025</h3>

 <div className="space-y-4 text-gray-900">
 <p className="leading-relaxed">
 <strong>Place du Capitole = secteur sauvegardé = éligible Loi Malraux automatiquement.</strong>
 Conditions : restauration complète immeuble, validation ABF obligatoire, location nue 9 ans minimum,
 travaux intérieur + extérieur conformes patrimoine.
 </p>

 <div className="bg-green-50 border-2 border-green-600 p-5 rounded">
 <h4 className="font-semibold text-green-900 mb-3">Avantages Malraux Capitole:</h4>
 <ul className="text-sm text-green-900 space-y-2">
 <li> <strong>Réduction impôt revenu: 30%</strong> du montant travaux (secteur sauvegardé)</li>
 <li> <strong>Plafond: 400 000€</strong> de travaux sur 4 ans</li>
 <li> <strong>Réduction IR maximale: 120 000€</strong> sur 4 ans (400k€ × 30%)</li>
 <li> <strong>Engagement location: 9 ans</strong> minimum en location nue</li>
 <li> <strong>Cumul possible:</strong> Malraux + MaPrimeRénov' énergie = 35-45% financement projet</li>
 </ul>
 </div>

 <div className="bg-amber-50 p-5 rounded mt-4">
 <h4 className="font-semibold text-amber-900 mb-3">Exemple concret défiscalisation Malraux:</h4>
 <div className="text-sm text-amber-900 space-y-2">
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Travaux rénovation patrimoine validés ABF</span>
 <strong>320 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Réduction IR Malraux 30% sur 4 ans</span>
 <strong>-96 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Aides MaPrimeRénov' énergie (optionnel)</span>
 <strong>-10 000€</strong>
 </div>
 <div className="h-[1px] bg-amber-300 my-3"></div>
 <div className="flex justify-between text-base">
 <strong>COÛT NET TRAVAUX:</strong>
 <strong className="text-lg">214 000€</strong>
 </div>
 </div>
 <p className="text-xs text-amber-800 mt-4 mb-0">
 Économie totale: 106 000€ (33%) sur budget travaux initial. Accompagnement EGB Occitanie: montage
 dossier fiscal Malraux, optimisation cumul aides, expertise ABF patrimoine.
 </p>
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
