import type { Metadata } from"next";
import { Playfair_Display } from"next/font/google";
import Link from"next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
 },
 {"@type":"Question","name":"Combien de temps prend une rénovation au Capitole avec ABF ?","acceptedAnswer": {"@type":"Answer","text":"Délais rénovation Capitole Toulouse avec ABF : 1) Constitution dossier ABF : 2-3 semaines (photos, plans, descriptif matériaux) 2) Instruction ABF : 1-2 mois (vs 3 semaines quartiers non-protégés) 3) Travaux rénovation légère : 6-8 semaines 4) Travaux rénovation complète : 12-16 semaines 5) Rénovation prestige patrimoine : 20-28 semaines. Total moyen appartement 80m² rénovation complète : 5-7 mois (vs 3-4 mois hors ABF). Anticipation cruciale : contact ABF AVANT achat pour valider faisabilité projet. EGB Occitanie : planning précis intégrant délais ABF, suivi instruction, relation directe ABF = pas de surprise délais. Estimation durée projet gratuite : 06 65 01 58 82."
 }
 },
 {"@type":"Question","name":"Quelles aides financières pour rénover au Capitole en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Aides rénovation Capitole Toulouse 2025 : 1) MaPrimeRénov' : jusqu'à 10 000€ (rénovation énergétique globale) 2) Bonus Éco-Rénovation Toulouse Métropole : jusqu'à 1 500€ (amélioration 2 classes DPE) 3) Éco-PTZ : prêt 50 000€ taux 0% (travaux énergie) 4) TVA réduite 5,5% (rénovation énergétique) vs 10% (autres travaux) 5) Défiscalisation Malraux : réduction IR 22-30% (secteur sauvegardé Capitole éligible si immeuble classé) 6) Monuments Historiques : déduction 100% travaux si immeuble classé 7) Aides ANAH : jusqu'à 50% coût travaux (sous conditions ressources). Cumul possible = financement 30-50% projet. EGB Occitanie : accompagnement montage dossiers aides, optimisation fiscale, expertise Malraux/MH. Simulation aides gratuite : 06 65 01 58 82."
 }
 }
 ]
};

const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Rénover appartement Capitole Toulouse","step": [
 {"@type":"HowToStep","text":"1. Vérifier si immeuble classé Monument Historique ou secteur sauvegardé (quasi-totalité Capitole) sur geoportail-urbanisme.gouv.fr"
 },
 {"@type":"HowToStep","text":"2. Contact préalable ABF Toulouse obligatoire AVANT devis pour validation faisabilité projet et choix matériaux"
 },
 {"@type":"HowToStep","text":"3. Constituer dossier ABF : photos état existant, plans avant/après, descriptif matériaux (brique rose, fenêtres bois, tuiles)"
 },
 {"@type":"HowToStep","text":"4. Déposer déclaration préalable travaux ou permis construire Mairie Toulouse avec avis ABF joint (délai +1 mois)"
 },
 {"@type":"HowToStep","text":"5. Attendre validation ABF (1-2 mois) - NE PAS commencer travaux avant accord formel sous peine amende + démolition"
 },
 {"@type":"HowToStep","text":"6. Choisir artisans spécialisés patrimoine (brique rose, chaux, fenêtres bois) - liste recommandée ABF disponible"
 },
 {"@type":"HowToStep","text":"7. Lancer travaux avec suivi ABF possible en cours chantier si modifications nécessaires"
 },
 {"@type":"HowToStep","text":"8. Déclaration attestation conformité fin travaux à Mairie avec photos résultat final pour validation ABF"
 },
 {"@type":"HowToStep","text":"9. Demander attestation conformité ABF pour dossier revente et valorisation patrimoine"
 }
 ]
};

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"EGB Occitanie Rénovation Capitole","image":"https://www.egb-occitanie.fr/images/renovation-capitole-toulouse.jpg","address": {"@type":"PostalAddress","addressLocality":"Toulouse","addressRegion":"Occitanie","postalCode":"31000","addressCountry":"FR"
 },"telephone":"+33665015882","priceRange":"3000-4200€/m²","aggregateRating": {"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"47"
 }
};

export default function RenovationCapitoleToulouse() {
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

 <div className="min-h-screen bg-white from-white">
 {/* Breadcrumb */}
 <div className="bg-white border-b">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
 <nav className="text-sm text-gray-600">
 <Link href="/" className="hover:text-orange-600">Accueil</Link>
 <span className="mx-2">/</span>
 <Link href="/renovation-maison-toulouse" className="hover:text-orange-600">Rénovation Toulouse</Link>
 <span className="mx-2">/</span>
 <span className="text-gray-900 font-medium">Capitole</span>
 </nav>
 </div>
 </div>

 {/* Hero Section */}
 <div className="relative bg-white text-white overflow-hidden">
 <div className="absolute inset-0 bg-black opacity-10"></div>
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
 <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
 Rénovation Capitole Toulouse
 <span className="block text-3xl md:text-4xl mt-4 text-orange-200">
 Expert ABF Ultra-Strict & Prestige Hyper-Centre
 </span>
 </h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
 Rénovation appartements prestige Place du Capitole. Secteur sauvegardé, ABF ultra-strict, brique rose obligatoire. 100% validations ABF, expertise matériaux patrimoniaux, CSP++ & investisseurs.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <a
 href="tel:0665015882"
 className="inline-block bg-white text-rose-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-100 transition-colors text-center shadow-lg"
 >
 06 65 01 58 82 - Devis Gratuit 48h
 </a>
 <Link
 href="/contact"
 className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors text-center shadow-lg"
 >
 Demander un Devis ABF Capitole
 </Link>
 </div>

 {/* Stats Cards */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
 <div className="text-3xl font-bold mb-2">5 490€</div>
 <div className="text-orange-200">Prix m² moyen 2025</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
 <div className="text-3xl font-bold mb-2">100%</div>
 <div className="text-orange-200">Secteur sauvegardé ABF</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
 <div className="text-3xl font-bold mb-2">+1 mois</div>
 <div className="text-orange-200">Délai validation ABF</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
 <div className="text-3xl font-bold mb-2">Top 1</div>
 <div className="text-orange-200">Quartier prestige Toulouse</div>
 </div>
 </div>
 </div>
 </div>

 {/* Pourquoi Rénover au Capitole */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
 Pourquoi Rénover au Capitole Malgré Contraintes ABF ?
 </h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
 <div className="text-4xl mb-4">️</div>
 <h3 className="text-xl font-bold mb-3 text-gray-900">Prestige Adresse Unique</h3>
 <p className="text-gray-700 leading-relaxed">
 Place du Capitole = adresse prestige #1 Toulouse. Valorisation maximale CSP++ (professions libérales, cadres sup, investisseurs). Prix m² 5 490€ = top marché. Plus-value revente +40-60% sur 10 ans.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
 <div className="text-4xl mb-4"></div>
 <h3 className="text-xl font-bold mb-3 text-gray-900">ROI Exceptionnel 4-5,5%</h3>
 <p className="text-gray-700 leading-relaxed">
 Rentabilité locative meublé/tourisme 4-5,5% brut malgré prix achat élevé. Demande illimitée hyper-centre, vacance locative quasi-nulle (&lt;5 jours/an). Loyers premium acceptés clientèle CSP++.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
 <div className="text-4xl mb-4"></div>
 <h3 className="text-xl font-bold mb-3 text-gray-900">Rareté Offre Qualité</h3>
 <p className="text-gray-700 leading-relaxed">
 Contraintes ABF = barrière entrée concurrence = offre rénovation qualité limitée. Secteur sauvegardé protège patrimoine ET valorisation long terme. Investissement patrimonial sécurisé.
 </p>
 </div>

 <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
 <div className="text-4xl mb-4"></div>
 <h3 className="text-xl font-bold mb-3 text-gray-900">Défiscalisation Malraux</h3>
 <p className="text-gray-700 leading-relaxed">
 Capitole secteur sauvegardé = éligible Loi Malraux (réduction IR 22-30%) + Monuments Historiques (déduction 100% si classé). Financement 30-50% travaux via aides cumulées possibles.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Prix Rénovation Détaillés */}
 <section className="py-16 bg-white to-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-6 text-center`}>
 Prix Rénovation Capitole Toulouse 2025
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
 Tarifs rénovation appartement Capitole <strong>avec contraintes ABF ultra-strictes</strong> : brique rose obligatoire, fenêtres bois, tuiles toulousaines. <strong>Coût +10-15% vs quartiers non-protégés</strong> pour matériaux patrimoniaux premium.
 </p>

 <div className="overflow-x-auto shadow-xl rounded-lg mb-8">
 <table className="w-full bg-white">
 <thead className="bg-white text-white">
 <tr>
 <th className="px-6 py-4 text-left font-bold">Type Rénovation</th>
 <th className="px-6 py-4 text-center font-bold">60m²</th>
 <th className="px-6 py-4 text-center font-bold">80m²</th>
 <th className="px-6 py-4 text-center font-bold">100m²</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 <tr className="hover:bg-orange-50 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Rénovation Légère</div>
 <div className="text-sm text-gray-600 mt-1">Peinture murs, électricité remise normes, sols parquet flottant, luminaires, petites finitions. Validation ABF si façade/fenêtres touchées.</div>
 <div className="text-orange-600 font-semibold mt-2">3 000 - 3 500€/m²</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">180 000 - 210 000€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">240 000 - 280 000€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">300 000 - 350 000€</td>
 </tr>
 <tr className="hover:bg-orange-50 transition-colors bg-orange-50/30">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Rénovation Complète</div>
 <div className="text-sm text-gray-600 mt-1">Cuisine équipée, salle de bain complète, parquet massif chêne, isolation phonique, électricité+plomberie totales, peinture, fenêtres bois ABF, volets conformes.</div>
 <div className="text-orange-600 font-semibold mt-2">3 500 - 4 200€/m²</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">210 000 - 252 000€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">280 000 - 336 000€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">350 000 - 420 000€</td>
 </tr>
 <tr className="hover:bg-orange-50 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Rénovation Prestige Patrimoine</div>
 <div className="text-sm text-gray-600 mt-1">Restauration patrimoine brique rose chaux, parquet point Hongrie massif, cuisine luxe sur-mesure, marbre Carrare salle de bain, moulures staff, cheminée restaurée, fenêtres bois noble ABF premium.</div>
 <div className="text-orange-600 font-semibold mt-2">4 500 - 6 000€/m²</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">270 000 - 360 000€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">360 000 - 480 000€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">450 000 - 600 000€</td>
 </tr>
 <tr className="hover:bg-orange-50 transition-colors bg-rose-50">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Restructuration Lourde ABF</div>
 <div className="text-sm text-gray-600 mt-1">Modification volumes (abattement murs si autorisé ABF), création mezzanine, réfection façade brique rose totale, toiture tuiles canal, fenêtres bois sur-mesure, ravalement enduit chaux, dossier ABF complet.</div>
 <div className="text-orange-600 font-semibold mt-2">5 500 - 7 500€/m²</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">330 000 - 450 000€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">440 000 - 600 000€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">550 000 - 750 000€</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="bg-rose-100 border-l-4 border-rose-600 p-6 rounded-r-lg">
 <h3 className="font-bold text-rose-900 mb-2 text-lg">️ Surcoûts Spécifiques ABF Capitole</h3>
 <ul className="space-y-2 text-gray-700">
 <li><strong>• Brique rose patrimoine :</strong> +15-25€/brique vs standard (restauration façade)</li>
 <li><strong>• Fenêtres bois sur-mesure ABF :</strong> 800-1 500€/fenêtre (vs PVC 300-500€ interdit)</li>
 <li><strong>• Tuiles canal toulousaines anciennes :</strong> 80-120€/m² (vs tuiles modernes 40-60€/m²)</li>
 <li><strong>• Constitution dossier ABF :</strong> 2 000-5 000€ (photos, plans, descriptif matériaux, suivi instruction)</li>
 <li><strong>• Délais allongés :</strong> +1-2 mois validation = coûts indirects (loyers perdus, double loyer...)</li>
 <li><strong>• Architecte patrimoine obligatoire :</strong> +10-15% honoraires (si modification façade/structure)</li>
 </ul>
 </div>
 </div>
 </section>

 {/* Comparaison Quartiers */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-6 text-center`}>
 Capitole vs Autres Quartiers Toulouse
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg">
 Comparaison coûts rénovation, contraintes ABF, prix m², rentabilité locative
 </p>

 <div className="overflow-x-auto shadow-xl rounded-lg">
 <table className="w-full bg-white">
 <thead className="bg-white text-white">
 <tr>
 <th className="px-6 py-4 text-left font-bold">Quartier</th>
 <th className="px-6 py-4 text-center font-bold">Contraintes ABF</th>
 <th className="px-6 py-4 text-center font-bold">Prix Rénovation/m²</th>
 <th className="px-6 py-4 text-center font-bold">Prix Achat/m²</th>
 <th className="px-6 py-4 text-center font-bold">Rentabilité Locative</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 <tr className="bg-rose-100 hover:bg-rose-200 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-rose-900">Capitole</div>
 <div className="text-sm text-gray-600">Hyper-centre prestige</div>
 </td>
 <td className="px-6 py-4 text-center">
 <span className="inline-block bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">ULTRA-STRICT</span>
 <div className="text-xs text-gray-600 mt-1">100% secteur sauvegardé</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">3 000 - 4 200€</td>
 <td className="px-6 py-4 text-center font-bold text-rose-900">5 490€</td>
 <td className="px-6 py-4 text-center font-bold text-green-700">4,0 - 5,5%</td>
 </tr>
 <tr className="hover:bg-orange-50 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Carmes</div>
 <div className="text-sm text-gray-600">Patrimoine médiéval</div>
 </td>
 <td className="px-6 py-4 text-center">
 <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">STRICT</span>
 <div className="text-xs text-gray-600 mt-1">Immeubles classés</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">2 800 - 3 500€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">5 300€</td>
 <td className="px-6 py-4 text-center font-bold text-green-700">4,5 - 6,0%</td>
 </tr>
 <tr className="hover:bg-orange-50 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Saint-Cyprien</div>
 <div className="text-sm text-gray-600">Rive gauche bohème</div>
 </td>
 <td className="px-6 py-4 text-center">
 <span className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">MODÉRÉ</span>
 <div className="text-xs text-gray-600 mt-1">90% validation</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">2 400 - 3 200€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">4 747€</td>
 <td className="px-6 py-4 text-center font-bold text-green-700">5,0 - 6,5%</td>
 </tr>
 <tr className="hover:bg-orange-50 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Saint-Étienne</div>
 <div className="text-sm text-gray-600">Bourgeois 1850-1920</div>
 </td>
 <td className="px-6 py-4 text-center">
 <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">STRICT</span>
 <div className="text-xs text-gray-600 mt-1">Hôtels particuliers</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">2 700 - 3 600€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">5 100€</td>
 <td className="px-6 py-4 text-center font-bold text-green-700">4,2 - 5,8%</td>
 </tr>
 <tr className="hover:bg-orange-50 transition-colors">
 <td className="px-6 py-4">
 <div className="font-bold text-gray-900">Minimes</div>
 <div className="text-sm text-gray-600">Années 60-70</div>
 </td>
 <td className="px-6 py-4 text-center">
 <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">AUCUNE</span>
 <div className="text-xs text-gray-600 mt-1">Hors périmètre ABF</div>
 </td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">1 800 - 2 600€</td>
 <td className="px-6 py-4 text-center font-bold text-gray-900">3 200€</td>
 <td className="px-6 py-4 text-center font-bold text-green-700">5,5 - 7,5%</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="mt-8 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
 <h3 className="font-bold text-orange-900 mb-3 text-lg"> Analyse Comparative</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>Capitole = contraintes ABF maximales MAIS valorisation/prestige maximaux.</strong> Prix rénovation +15-20% vs Saint-Cyprien, +40% vs Minimes, MAIS prix achat m² +70% vs Minimes = cible CSP++ acceptant investissement premium pour adresse prestige. Rentabilité locative 4-5,5% correcte (vs 5,5-7,5% Minimes) car loyers premium compensent prix achat élevé. <strong>Stratégie : Investissement patrimonial long terme (plus-value +40-60% sur 10 ans) plutôt que cash-flow immédiat.</strong>
 </p>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 bg-white to-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
 Questions Fréquentes Rénovation Capitole
 </h2>

 <div className="space-y-6">
 <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
 <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
 Quels travaux sont prioritaires pour rénover au Capitole ?
 <span className="text-orange-600 text-2xl">+</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
 <p><strong>Priorités rénovation appartement Capitole Toulouse (ordre importance) :</strong></p>
 <p><strong>1. Fenêtres bois conformes ABF (priorité #1)</strong> : PVC/alu interdit secteur sauvegardé. Fenêtres bois sur-mesure double vitrage ABF : 800-1 500€/unité. Validation ABF obligatoire couleur/modèle. Impact : isolation thermique + conformité légale + valorisation 10-15%.</p>
 <p><strong>2. Électricité remise normes</strong> : Immeubles 1850-1920 = électricité obsolète. Mise normes NF C15-100 complète : 80-120€/m². Indispensable sécurité + vente + assurance.</p>
 <p><strong>3. Isolation phonique</strong> : Hyper-centre = nuisances sonores Place Capitole. Isolation phonique plafond/murs : 40-80€/m². Confort locataires/propriétaires prioritaire.</p>
 <p><strong>4. Salle de bain + cuisine</strong> : Équipements obsolètes dévalorisent. Salle de bain complète : 12 000-25 000€. Cuisine équipée : 15 000-35 000€ (haut de gamme CSP++).</p>
 <p><strong>5. Parquet massif chêne</strong> : Parquet point Hongrie/Versailles valorise prestige. 80-150€/m² posé (vs stratifié 30-50€/m²). ROI revente +8-12%.</p>
 <p><strong>6. Façade brique rose (si dégradée)</strong> : Ravalement brique rose chaux : 80-150€/m². Obligatoire si immeuble copropriété vote travaux. Validation ABF couleur enduit stricte.</p>
 </div>
 </details>

 <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
 <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
 Comment obtenir validation ABF pour rénovation Capitole ?
 <span className="text-orange-600 text-2xl">+</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
 <p><strong>Procédure validation ABF rénovation Capitole Toulouse (étapes détaillées) :</strong></p>
 <p><strong>1. Diagnostic patrimoine</strong> : Vérifier statut immeuble (classé MH / secteur sauvegardé) sur geoportail-urbanisme.gouv.fr. Capitole = 100% secteur sauvegardé.</p>
 <p><strong>2. Contact préalable ABF Toulouse</strong> : Prendre RDV ABF AVANT devis entreprise. ABF Toulouse : UDAP 31 - 2 Boulevard Griffoul-Dorval 31400 Toulouse. Présenter projet, obtenir préconisations matériaux/couleurs.</p>
 <p><strong>3. Constitution dossier ABF</strong> : Photos état existant (façade, fenêtres, toiture), plans avant/après, descriptif technique matériaux (échantillons brique rose, fenêtres bois, tuiles), notice patrimoine (histoire immeuble si connu).</p>
 <p><strong>4. Dépôt déclaration préalable/permis</strong> : Déclaration préalable (DP) travaux façade/fenêtres/toiture. Permis de construire si modification volumes/structure. Dossier transmis automatiquement ABF par Mairie.</p>
 <p><strong>5. Instruction ABF</strong> : Délai instruction 1-2 mois (vs 3 semaines hors ABF). ABF peut demander modifications/compléments. Avis ABF conforme/défavorable = décision Mairie liée.</p>
 <p><strong>6. Accord formel avant travaux</strong> : NE JAMAIS commencer avant accord écrit ABF + arrêté Mairie. Sanction : amende 300 000€ + démolition + remise état initial forcée.</p>
 <p><strong>EGB Occitanie : accompagnement dossier ABF Capitole complet, relation directe ABF Toulouse, 100% validations obtenues, 0 refus sur 23 projets Capitole 2020-2025.</strong></p>
 </div>
 </details>

 <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
 <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
 Est-ce rentable d'investir dans une rénovation au Capitole ?
 <span className="text-orange-600 text-2xl">+</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
 <p><strong>Rentabilité investissement rénovation Capitole Toulouse (analyse détaillée) :</strong></p>
 <p><strong>Exemple concret 80m² Place du Capitole :</strong></p>
 <p>• Achat 80m² état moyen : 439 200€ (5 490€/m²)<br/>
 • Rénovation complète ABF : 280 000€ (3 500€/m²)<br/>
 • Total investissement : 719 200€<br/>
 • Frais notaire + agence : 45 000€<br/>
 • <strong>TOTAL : 764 200€</strong></p>
 <p><strong>Revenus locatifs :</strong><br/>
 • Location meublé étudiant/jeune actif : 1 400€/mois = 16 800€/an<br/>
 • Location meublé tourisme (Airbnb) : 2 800€/mois moyen (70% occupation) = 33 600€/an<br/>
 • Charges/taxes : -6 000€/an<br/>
 • <strong>Revenus nets : 10 800€ (classique) à 27 600€ (tourisme)</strong></p>
 <p><strong>ROI :</strong><br/>
 • Rentabilité brute : 1,4% (location classique) à 4,4% (tourisme)<br/>
 • Rentabilité nette : 1,2% (classique) à 3,0% (tourisme après charges)<br/>
 • Plus-value revente 10 ans : +40-60% = +305 680€ à +458 520€<br/>
 • <strong>ROI total 10 ans : +413 680€ à +734 520€ = +54% à +96%</strong></p>
 <p><strong>Conclusion : Rentabilité immédiate faible (1-3%) MAIS plus-value long terme exceptionnelle (+50-100% sur 10 ans). Stratégie patrimoine CSP++, pas cash-flow.</strong></p>
 </div>
 </details>

 <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
 <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
 Puis-je bénéficier de la Loi Malraux au Capitole ?
 <span className="text-orange-600 text-2xl">+</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
 <p><strong>Loi Malraux Capitole Toulouse 2025 (défiscalisation rénovation patrimoine) :</strong></p>
 <p><strong>Éligibilité Capitole :</strong> OUI, Place du Capitole = secteur sauvegardé = éligible Loi Malraux automatiquement. Condition : immeuble dans périmètre PSMV (Plan Sauvegarde Mise Valeur) validé.</p>
 <p><strong>Avantages Malraux 2025 :</strong><br/>
 • Réduction impôt revenu : 22% (ZPPAUP) à 30% (secteur sauvegardé Capitole) du montant travaux<br/>
 • Plafond travaux : 400 000€ sur 4 ans<br/>
 • Réduction IR maximale : 120 000€ sur 4 ans (400 000€ × 30%)<br/>
 • Engagement location : 9 ans minimum<br/>
 • Travaux validés ABF obligatoires (restauration complète immeuble)</p>
 <p><strong>Exemple concret :</strong><br/>
 Travaux rénovation Malraux : 300 000€<br/>
 Réduction IR 30% : 90 000€ sur 4 ans = 22 500€/an<br/>
 Coût net travaux : 210 000€ (au lieu 300 000€)<br/>
 <strong>Économie : 30% coût rénovation</strong></p>
 <p><strong>Conditions strictes :</strong><br/>
 • Restauration complète immeuble (pas rénovation partielle)<br/>
 • Validation ABF + architecte patrimoine obligatoire<br/>
 • Travaux intérieur + extérieur<br/>
 • Location nue (pas meublé) 9 ans<br/>
 • Déclaration revenus fonciers réels (pas micro-foncier)</p>
 <p><strong>Cumul possible :</strong> Malraux (30%) + MaPrimeRénov' (énergie) + Bonus Éco-Rénovation Toulouse = financement 35-45% projet total.</p>
 <p><strong>EGB Occitanie : expertise Malraux Capitole, accompagnement dossier fiscal + ABF, 12 projets Malraux réalisés Toulouse 2020-2025.</strong></p>
 </div>
 </details>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 bg-white text-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
 Projet Rénovation Capitole Toulouse ?
 </h2>
 <p className="text-xl mb-8 leading-relaxed">
 Expert ABF ultra-strict, 100% validations obtenues, matériaux patrimoniaux premium, accompagnement Loi Malraux. Devis gratuit 48h avec estimation délais ABF.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
 <a
 href="tel:0665015882"
 className="inline-block bg-white text-rose-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-100 transition-colors shadow-xl"
 >
 06 65 01 58 82
 </a>
 <Link
 href="/contact"
 className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-xl"
 >
 Devis Gratuit Rénovation Capitole
 </Link>
 </div>
 <p className="text-orange-200">
 23 projets réussis Capitole • Note 4,9/5 • 100% validations ABF • Garantie décennale
 </p>
 </div>
 </section>

 {/* Liens Internes Autres Quartiers */}
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className={`${playfair.className} text-3xl font-bold text-gray-900 mb-8 text-center`}>
 Rénovation Autres Quartiers Toulouse
 </h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 <Link href="/renovation-maison-carmes-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-orange-200 hover:border-orange-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Les Carmes</h3>
 <p className="text-gray-600 text-sm">Patrimoine médiéval, ABF strict</p>
 </Link>
 <Link href="/renovation-saint-cyprien-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-rose-200 hover:border-rose-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Cyprien</h3>
 <p className="text-gray-600 text-sm">Rive gauche, ABF modéré, gentrification</p>
 </Link>
 <Link href="/renovation-minimes-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-green-200 hover:border-green-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Minimes</h3>
 <p className="text-gray-600 text-sm">Années 60-70, DPE F-G, pas ABF</p>
 </Link>
 <Link href="/renovation-saint-etienne-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-purple-200 hover:border-purple-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Étienne</h3>
 <p className="text-gray-600 text-sm">Bourgeois 1850-1920, hôtels particuliers</p>
 </Link>
 <Link href="/renovation-busca-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-yellow-200 hover:border-yellow-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Busca</h3>
 <p className="text-gray-600 text-sm">Villas 1920-1950, Art Déco, jardins</p>
 </Link>
 <Link href="/renovation-arnaud-bernard-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-indigo-200 hover:border-indigo-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Arnaud-Bernard</h3>
 <p className="text-gray-600 text-sm">Bohème créatif, jeunes actifs</p>
 </Link>
 <Link href="/renovation-saint-aubin-dupuy-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-teal-200 hover:border-teal-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Aubin Dupuy</h3>
 <p className="text-gray-600 text-sm">Résidentiel famille, sud Toulouse</p>
 </Link>
 <Link href="/renovation-rangueil-toulouse" className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow border-2 border-blue-200 hover:border-blue-400">
 <h3 className="font-bold text-lg mb-2 text-gray-900">Rangueil</h3>
 <p className="text-gray-600 text-sm">Universitaire, CHU, années 60</p>
 </Link>
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
