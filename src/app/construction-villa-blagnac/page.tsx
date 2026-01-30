import { Metadata } from"next";
import Link from"next/link";

export const metadata: Metadata = {
 title:"Construction Villa Blagnac | Constructeur Aéroport Airbus Training",
 description:"Constructeur villa Blagnac - 29k habitants, Airbus Training Centre Europe, aéroport Toulouse-Blagnac immédiat. Prix terrain 391€/m², cadres internationaux. Expert construction Blagnac 12+ villas livrées.",
 keywords: ["construction villa blagnac","constructeur maison blagnac","villa airbus blagnac","terrain blagnac aeroport","maison neuve blagnac","constructeur blagnac airbus","villa aéroport toulouse"
 ],
 openGraph: {
 title:"Construction Villa Blagnac | Aéroport + Airbus Training Centre",
 description:"Constructeur spécialisé Blagnac. Airbus Training Centre Europe, aéroport immédiat, cadres internationaux. Expert local 12+ villas livrées.",
 type:"website",
 },
 alternates: {
 canonical:"https://egb-occitanie.fr/construction-villa-blagnac",
 },
};

export default function ConstructionVillaBlagnacPage() {
 const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel est le prix d'une construction de villa à Blagnac en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Prix construction villa Blagnac 2025 : 2 900-3 300€/m² tout compris (terrain + construction). Terrain : 391€/m² moyenne (quartiers premium Grand-Noble, Pinot : 450-550€/m²). Villa 120m² : budget 348 000-396 000€ TTC. Prix légèrement supérieur Colomiers (+3%) car connectivité aéroport unique (cadres internationaux déplacements fréquents)."
 }
 },
 {"@type":"Question","name":"Pourquoi Blagnac attire les cadres Airbus internationaux ?","acceptedAnswer": {"@type":"Answer","text":"4 raisons Blagnac cadres internationaux : 1) Airbus Training Centre Europe : centre formation mondiale pilotes/ingénieurs, communauté expatriés importante 2) Aéroport Toulouse-Blagnac : 5min voiture, 7 millions passagers/an, vols directs Europe/international 3) International School of Toulouse : enseignement anglais, bac international 4) Revenu moyen 25 350€/hab (+23% vs France), profil cadres 35-55 ans (25% population)."
 }
 },
 {"@type":"Question","name":"Quels sont les meilleurs quartiers pour construire à Blagnac ?","acceptedAnswer": {"@type":"Answer","text":"Top 4 quartiers Blagnac construction : 1) Grand-Noble : quartier premium cadres, prix 450-550€/m², villa moderne architecture contemporaine acceptée 2) Pinot : résidentiel calme, familles établies, proche commerces, prix 400-500€/m² 3) Brassens : jeunes familles, écoles primées (8/10), prix 380-450€/m² 4) Centre-Ville : commodités pied, vie urbaine, prix 420-520€/m². PLU souple : architecture contemporaine OK, toits plats autorisés zones récentes."
 }
 },
 {"@type":"Question","name":"Quel délai pour construire une villa à Blagnac ?","acceptedAnswer": {"@type":"Answer","text":"Délai construction villa Blagnac : 12-15 mois total. Détail : Permis construire : 2 mois instruction + 2 mois recours. Gros-œuvre : 4-5 mois. Second-œuvre : 4-5 mois. PLU Blagnac moderne et constructif, délais instruction rapides. Contrainte spécifique : zones aéroportuaires (servitudes bruit PLU, isolation acoustique renforcée obligatoire). Notre expertise : conformité règles aéroportuaires, coordination acousticien agréé."
 }
 },
 {"@type":"Question","name":"Comment gérer les contraintes aéroportuaires à Blagnac ?","acceptedAnswer": {"@type":"Answer","text":"Contraintes aéroportuaires Blagnac : Plan Exposition Bruit (PEB) : zones A, B, C selon proximité pistes. Zone B/C (majorité terrains constructibles) : isolation acoustique renforcée obligatoire (DnT,A,tr ≥35 dB). Coût supplémentaire : +8 000-15 000€ selon surface (double-vitrage acoustique, ventilation mécanique). Avantage : taxe habitation réduite zones PEB. Notre accompagnement : étude acoustique pré-construction, coordination Bureau Veritas/SOCOTEC, conformité certification."
 }
 }
 ]
 };

 return (
 <main className="min-h-screen bg-gray-50">
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />

 {/* Hero */}
 <section className="relative bg-white text-white py-20">
 <div className="absolute inset-0 opacity-10">
 <div className="absolute inset-0" style={{
 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
 }}></div>
 </div>

 <div className="max-w-6xl mx-auto px-6 relative z-10">
 <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-600/40 rounded-full mb-6">
 <span className="text-blue-300 font-medium text-sm">️ AÉROPORT + AIRBUS TRAINING • BLAGNAC</span>
 </div>

 <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
 Construction Villa<br />
 <span className="text-blue-400">Blagnac</span>
 </h1>

 <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
 29 000 habitants, Airbus Training Centre Europe, aéroport Toulouse-Blagnac immédiat. Connectivité mondiale unique, cadres internationaux (25%), revenu moyen +23% vs France. Prix terrain 391€/m².
 </p>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
 <div className="bg-white border-2 border border-gray-200 rounded-lg p-4">
 <div className="text-3xl font-bold text-blue-400">29k</div>
 <div className="text-sm text-gray-200 mt-1">Habitants</div>
 </div>
 <div className="bg-white border-2 border border-gray-200 rounded-lg p-4">
 <div className="text-3xl font-bold text-blue-400">25%</div>
 <div className="text-sm text-gray-200 mt-1">Cadres internationaux</div>
 </div>
 <div className="bg-white border-2 border border-gray-200 rounded-lg p-4">
 <div className="text-3xl font-bold text-blue-400">391€</div>
 <div className="text-sm text-gray-200 mt-1">Terrain/m²</div>
 </div>
 <div className="bg-white border-2 border border-gray-200 rounded-lg p-4">
 <div className="text-3xl font-bold text-blue-400">5min</div>
 <div className="text-sm text-gray-200 mt-1">Aéroport</div>
 </div>
 </div>

 <div className="flex flex-wrap gap-4">
 <a href="tel:+33665015882" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg">
 06 65 01 58 82 - Devis Gratuit
 </a>
 <a href="/contact" className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-colors">
 Voir Budgets Détaillés
 </a>
 </div>
 </div>
 </section>

 {/* Breadcrumb */}
 <section className="py-4 bg-white border-b border-gray-200">
 <div className="max-w-6xl mx-auto px-6">
 <div className="text-sm text-gray-600">
 <Link href="/" className="hover:text-blue-600">Accueil</Link>
 <span className="mx-2">›</span>
 <Link href="/construction-villa-toulouse" className="hover:text-blue-600">Construction Villa Toulouse</Link>
 <span className="mx-2">›</span>
 <span className="text-gray-900 font-medium">Blagnac</span>
 </div>
 </div>
 </section>

 {/* Introduction Pourquoi Blagnac */}
 <section className="py-16 bg-white">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Pourquoi Construire Votre Villa à Blagnac en 2025 ?</h2>

 <div className="grid md:grid-cols-2 gap-8 mb-12">
 <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3">️ Airbus Training Centre Europe</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>Centre de formation mondiale Airbus</strong> : formation pilotes, ingénieurs aéronautiques, techniciens maintenance. <strong>Communauté internationale importante</strong> : expatriés américains, britanniques, allemands, cadres missions longue durée. Environnement multiculturel unique périphérie toulousaine.
 </p>
 </div>

 <div className="bg-green-50 border-l-4 border-green-600 p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3"> Aéroport Immédiat</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>Aéroport Toulouse-Blagnac à 5min voiture</strong> : 3e aéroport France (7M passagers/an), vols directs Europe + international. <strong>Connectivité mondiale</strong> optimale pour cadres déplacements fréquents : Paris 1h, Londres 1h45, Madrid 1h20. Valeur ajoutée majeure profils internationaux.
 </p>
 </div>

 <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3"> International School</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>International School of Toulouse</strong> (campus Blagnac) : enseignement anglais, baccalauréat international (IB), programmes américain/britannique. <strong>Atout décisif familles expatriées</strong> : scolarité enfants anglophone continuité pédagogique lors mutations internationales.
 </p>
 </div>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3"> Profil Cadres Premium</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>Revenu moyen 25 350€/hab</strong> (+23% vs moyenne France). <strong>25% cadres 35-55 ans</strong>, profil international, carrières aéronautique/technologie. Marché immobilier dynamique, valorisation stable : demande locative cadres expatriés forte (location meublée 1 800-2 500€/mois villa 120-150m²).
 </p>
 </div>
 </div>

 <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
 <p className="text-lg text-gray-800 leading-relaxed">
 <strong> Notre expertise Blagnac :</strong> <strong>12+ villas construites</strong> secteurs Grand-Noble, Pinot, Brassens depuis 2019. Connaissance approfondie contraintes aéroportuaires (Plan Exposition Bruit), coordination acousticien agréé, <strong>100% certifications conformité acoustique</strong>. Spécialisation familles expatriées Airbus : accompagnement anglais disponible, planning adapté mutations internationales.
 </p>
 </div>
 </div>
 </section>

 {/* Prix et Budgets */}
 <section className="py-16 bg-gray-50">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Prix Construction Villa Blagnac 2025 : Budgets Détaillés</h2>

 <div className="bg-white rounded-lg border border-gray-300 p-8 mb-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">Grille Tarifaire Construction Villa Blagnac</h3>

 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b-2 border-gray-300">
 <th className="p-3 font-bold text-gray-900">Poste</th>
 <th className="p-3 font-bold text-gray-900">Villa 100m²</th>
 <th className="p-3 font-bold text-gray-900">Villa 120m²</th>
 <th className="p-3 font-bold text-gray-900">Villa 150m²</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-gray-200">
 <td className="p-3 text-gray-700">Terrain 400m²</td>
 <td className="p-3 text-gray-900 font-medium">156 400€</td>
 <td className="p-3 text-gray-900 font-medium">156 400€</td>
 <td className="p-3 text-gray-900 font-medium">195 500€ (500m²)</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3 text-gray-700">Construction pure</td>
 <td className="p-3 text-gray-900 font-medium">165 000€</td>
 <td className="p-3 text-gray-900 font-medium">198 000€</td>
 <td className="p-3 text-gray-900 font-medium">247 500€</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3 text-gray-700">Isolation acoustique renforcée</td>
 <td className="p-3 text-gray-900 font-medium">8 000€</td>
 <td className="p-3 text-gray-900 font-medium">10 000€</td>
 <td className="p-3 text-gray-900 font-medium">13 000€</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3 text-gray-700">VRD + raccordements</td>
 <td className="p-3 text-gray-900 font-medium">18 000€</td>
 <td className="p-3 text-gray-900 font-medium">18 000€</td>
 <td className="p-3 text-gray-900 font-medium">22 000€</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3 text-gray-700">Frais annexes (notaire, assurances)</td>
 <td className="p-3 text-gray-900 font-medium">30 000€</td>
 <td className="p-3 text-gray-900 font-medium">34 000€</td>
 <td className="p-3 text-gray-900 font-medium">42 000€</td>
 </tr>
 <tr className="bg-blue-50 font-bold border-t-2 border-blue-600">
 <td className="p-3 text-gray-900">TOTAL TTC</td>
 <td className="p-3 text-blue-800 text-lg">377 400€</td>
 <td className="p-3 text-blue-800 text-lg">416 400€</td>
 <td className="p-3 text-blue-800 text-lg">520 000€</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="mt-6 grid md:grid-cols-2 gap-4">
 <div className="bg-green-50 border border-green-300 rounded p-4">
 <p className="text-sm text-gray-700"><strong> Inclus</strong> : Garanties décennale + achèvement, assurance dommages-ouvrage, étude acoustique PEB, certification conformité acoustique, suivi chantier</p>
 </div>
 <div className="bg-blue-50 border border-blue-300 rounded p-4">
 <p className="text-sm text-gray-700"><strong> Acoustique</strong> : Isolation renforcée zone PEB obligatoire (double-vitrage acoustique 44mm, ventilation mécanique), coût +8-13k€ compensé par taxe habitation réduite</p>
 </div>
 </div>
 </div>

 <div className="bg-blue-600 text-white rounded-lg p-6">
 <h3 className="text-xl font-bold mb-3">️ Avantage Aéroport Blagnac</h3>
 <p className="leading-relaxed mb-3">
 <strong>Pour cadres internationaux déplacements fréquents</strong>, proximité aéroport = <strong>gain temps annuel estimé 40-60h</strong> (vs habiter Toulouse centre : +30min trajet x 40 déplacements/an = 20h minimum).
 </p>
 <p className="leading-relaxed">
 <strong>Valorisation revente</strong> : proximité aéroport argument majeur acheteurs cadres internationaux (demande locative forte 1 800-2 500€/mois meublé villa 120-150m²).
 </p>
 </div>
 </div>
 </section>

 {/* Quartiers Blagnac */}
 <section className="py-16 bg-white">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Meilleurs Quartiers pour Construire à Blagnac</h2>

 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
 <div className="text-3xl mb-3"></div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Grand-Noble (Premium)</h3>
 <p className="text-gray-700 mb-4">
 <strong>Quartier premium cadres internationaux</strong>, villas modernes architecture contemporaine, PLU souple (toits plats OK). Proximité International School.
 </p>
 <ul className="space-y-2 text-sm text-gray-600">
 <li> Prix terrain : 450-550€/m²</li>
 <li> Profil : cadres Airbus, expatriés</li>
 <li> Architecture : contemporaine acceptée</li>
 <li> Plus-value : forte (+3-5%/an)</li>
 </ul>
 </div>

 <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
 <div className="text-3xl mb-3">️</div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Pinot (Résidentiel)</h3>
 <p className="text-gray-700 mb-4">
 <strong>Quartier résidentiel calme</strong>, familles établies, commerces proximité, cadre verdoyant. Valeurs sûres revente.
 </p>
 <ul className="space-y-2 text-sm text-gray-600">
 <li> Prix terrain : 400-500€/m²</li>
 <li> Profil : familles 35-50 ans</li>
 <li> Architecture : traditionnelle + moderne</li>
 <li> Plus-value : stable</li>
 </ul>
 </div>

 <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
 <div className="text-3xl mb-3">‍‍‍</div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Brassens (Familles)</h3>
 <p className="text-gray-700 mb-4">
 <strong>Quartier jeunes familles</strong>, écoles primées (8/10 moyenne), espaces verts, terrains disponibles régulièrement.
 </p>
 <ul className="space-y-2 text-sm text-gray-600">
 <li> Prix terrain : 380-450€/m²</li>
 <li> Profil : primo-accédants, jeunes couples</li>
 <li> Écoles : très bonnes (8/10)</li>
 <li> Disponibilité : bonne</li>
 </ul>
 </div>

 <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
 <div className="text-3xl mb-3">️</div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Centre-Ville</h3>
 <p className="text-gray-700 mb-4">
 <strong>Commodités à pied</strong>, vie urbaine animée, commerces/services/restaurants, mairie 5min. Cadre urbain avec jardins.
 </p>
 <ul className="space-y-2 text-sm text-gray-600">
 <li> Prix terrain : 420-520€/m²</li>
 <li> Profil : actifs sans enfants, retraités</li>
 <li> Services : tous à pied</li>
 <li> Disponibilité : limitée</li>
 </ul>
 </div>
 </div>

 <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
 <h3 className="font-bold text-gray-900 mb-2">️ Contrainte Spécifique Blagnac : Plan Exposition Bruit</h3>
 <p className="text-gray-700 mb-3">
 <strong>Zones B et C Plan Exposition Bruit (PEB)</strong> : isolation acoustique renforcée obligatoire (DnT,A,tr ≥35 dB). Majorité terrains constructibles en zone C (contraintes modérées).
 </p>
 <p className="text-gray-700">
 <strong>Notre accompagnement</strong> : étude acoustique pré-construction gratuite, coordination acousticien agréé (Bureau Veritas/SOCOTEC), matériaux conformes (double-vitrage 44mm asymétrique, ventilation mécanique), <strong>certification conformité garantie</strong>.
 </p>
 </div>
 </div>
 </section>

 {/* Étude de Cas Réelle */}
 <section className="py-16 bg-white">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Étude de Cas Réelle : Villa Cadre Expatrié - Quartier Grand-Noble Blagnac</h2>

 <div className="bg-white rounded-lg border-2 border-blue-600 p-8 shadow-xl">
 <div className="grid md:grid-cols-3 gap-6 mb-6">
 <div className="text-center">
 <div className="text-4xl font-bold text-blue-600">160m²</div>
 <div className="text-sm text-gray-600 mt-1">Surface habitable</div>
 </div>
 <div className="text-center">
 <div className="text-4xl font-bold text-blue-600">14 mois</div>
 <div className="text-sm text-gray-600 mt-1">Délai total</div>
 </div>
 <div className="text-center">
 <div className="text-4xl font-bold text-blue-600">512k€</div>
 <div className="text-sm text-gray-600 mt-1">Budget TTC</div>
 </div>
 </div>

 <div className="border-t border-gray-200 pt-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4">Profil Client & Contexte</h3>
 <p className="text-gray-700 mb-4 leading-relaxed">
 <strong>Client :</strong> Cadre britannique expatrié, directeur programme A350 Airbus, famille 3 personnes (2 enfants 10 et 14 ans scolarisés International School). <strong>Objectif :</strong> villa moderne quartier Grand-Noble, proximité aéroport (déplacements Londres/Hambourg fréquents), architecture contemporaine toit plat.
 </p>

 <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Budget Détaillé</h3>
 <div className="grid md:grid-cols-2 gap-4 mb-6">
 <div className="bg-gray-50 p-4 rounded">
 <p className="text-sm text-gray-600 mb-1">Terrain 480m² Grand-Noble</p>
 <p className="text-lg font-bold text-gray-900">240 000€ (500€/m²)</p>
 </div>
 <div className="bg-gray-50 p-4 rounded">
 <p className="text-sm text-gray-600 mb-1">Construction 160m² moderne</p>
 <p className="text-lg font-bold text-gray-900">224 000€ (1 400€/m²)</p>
 </div>
 <div className="bg-gray-50 p-4 rounded">
 <p className="text-sm text-gray-600 mb-1">Isolation acoustique renforcée PEB</p>
 <p className="text-lg font-bold text-gray-900">11 000€</p>
 </div>
 <div className="bg-gray-50 p-4 rounded">
 <p className="text-sm text-gray-600 mb-1">Frais totaux (VRD, notaire, assurances)</p>
 <p className="text-lg font-bold text-gray-900">37 000€</p>
 </div>
 </div>

 <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Caractéristiques Villa</h3>
 <div className="grid md:grid-cols-2 gap-6">
 <ul className="space-y-2 text-gray-700">
 <li> <strong>Architecture contemporaine</strong> : toit plat, grandes baies vitrées, enduit gris anthracite</li>
 <li> <strong>Plain-pied</strong> : 4 chambres (suite parentale 32m² avec dressing)</li>
 <li> <strong>Pièce vie</strong> : 70m² open-space (salon-cuisine US)</li>
 <li> <strong>Bureau</strong> : 15m² (télétravail 2j/semaine)</li>
 </ul>
 <ul className="space-y-2 text-gray-700">
 <li> <strong>Isolation acoustique</strong> : double-vitrage 44mm asymétrique, VMC double-flux</li>
 <li> <strong>PAC air-air</strong> : chauffage + climatisation (été Toulouse)</li>
 <li> <strong>Domotique Somfy</strong> : contrôle volets/chauffage smartphone</li>
 <li> <strong>Terrasse</strong> : 50m² bois exotique, pergola bioclimatique</li>
 </ul>
 </div>

 <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-6">
 <h3 className="font-bold text-green-900 mb-2"> Témoignage Client (Janvier 2024)</h3>
 <p className="text-gray-700 italic leading-relaxed">"EGB understood our specific needs as expat family: modern architecture, airport proximity (I fly London weekly, 10min door to gate now), International School 5min. <strong>Acoustic expertise was crucial - we can't hear planes inside</strong>. 14-month timeline respected despite Covid delays. Quality excellent, resale value strong (neighbor sold similar villa +8% after 2 years). Highly recommend."
 </p>
 <p className="text-sm text-gray-600 mt-2">— James W., Programme Director Airbus, Blagnac</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-white">
 <div className="max-w-4xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions Fréquentes Construction Villa Blagnac</h2>

 <div className="space-y-6">
 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Quel est le prix d'une construction de villa à Blagnac en 2025 ?
 <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3"><strong>Prix construction villa Blagnac 2025 : 2 900-3 300€/m² tout compris</strong></p>
 <ul className="space-y-2 ml-4">
 <li>• <strong>Terrain</strong> : 391€/m² moyenne (Grand-Noble/Pinot : 450-550€/m²)</li>
 <li>• <strong>Villa 120m²</strong> : budget 348 000-396 000€ TTC</li>
 <li>• <strong>Isolation acoustique</strong> : +8-13k€ (obligatoire zones PEB)</li>
 <li>• Prix légèrement supérieur Colomiers (+3%) : connectivité aéroport unique</li>
 </ul>
 </div>
 </details>

 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Pourquoi Blagnac attire les cadres Airbus internationaux ?
 <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3"><strong>4 raisons Blagnac cadres internationaux :</strong></p>
 <ol className="space-y-2 ml-4 list-decimal">
 <li><strong>Airbus Training Centre Europe</strong> : formation mondiale, communauté expatriés</li>
 <li><strong>Aéroport 5min</strong> : 7M passagers/an, vols directs Europe/international</li>
 <li><strong>International School</strong> : enseignement anglais, bac international</li>
 <li><strong>Revenu +23% vs France</strong> : profil cadres premium (25 350€/hab)</li>
 </ol>
 </div>
 </details>

 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Quels sont les meilleurs quartiers pour construire à Blagnac ?
 <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3"><strong>Top 4 quartiers Blagnac :</strong></p>
 <ol className="space-y-3 ml-4 list-decimal">
 <li><strong>Grand-Noble</strong> : premium cadres, 450-550€/m², architecture contemporaine OK</li>
 <li><strong>Pinot</strong> : résidentiel calme, 400-500€/m², familles établies</li>
 <li><strong>Brassens</strong> : jeunes familles, 380-450€/m², écoles 8/10</li>
 <li><strong>Centre-Ville</strong> : urbain, 420-520€/m², tout à pied</li>
 </ol>
 </div>
 </details>

 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Comment gérer les contraintes aéroportuaires à Blagnac ?
 <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3"><strong>Contraintes aéroportuaires Blagnac :</strong></p>
 <ul className="space-y-2 ml-4">
 <li>• <strong>Plan Exposition Bruit (PEB)</strong> : zones B/C majoritaires</li>
 <li>• <strong>Isolation acoustique renforcée</strong> : DnT,A,tr ≥35 dB obligatoire</li>
 <li>• <strong>Coût</strong> : +8-13k€ (double-vitrage 44mm, VMC)</li>
 <li>• <strong>Avantage</strong> : taxe habitation réduite zones PEB</li>
 <li>• <strong>Notre accompagnement</strong> : étude acoustique, acousticien agréé, certification garantie</li>
 </ul>
 </div>
 </details>
 </div>
 </div>
 </section>

 {/* CTA Final */}
 <section className="py-20 bg-white text-white">
 <div className="max-w-4xl mx-auto px-6 text-center">
 <h2 className="text-4xl font-bold mb-6">Construisez Votre Villa à Blagnac avec EGB Occitanie</h2>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 12+ villas Blagnac livrées • Aéroport 5min • Airbus Training Centre • 100% certifications acoustiques • Accompagnement expatriés anglais
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <a href="tel:+33665015882" className="inline-block px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-xl">
 06 65 01 58 82 - Devis Gratuit
 </a>
 <a href="/contact" className="inline-block px-10 py-5 bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">
 Demander un Devis Détaillé
 </a>
 </div>
 <p className="text-sm text-gray-300 mt-6">
 English support available • Site visit with you • Free acoustic study
 </p>
 </div>
 </section>

 {/* Internal Links */}
 <section className="py-12 bg-white border-t border-gray-200">
 <div className="max-w-6xl mx-auto px-6">
 <h3 className="font-bold text-gray-900 mb-6 text-xl">Découvrez Nos Autres Secteurs Construction Toulouse</h3>
 <div className="grid md:grid-cols-4 gap-4">
 <Link href="/construction-villa-toulouse" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
 → Construction Villa Toulouse (hub)
 </Link>
 <Link href="/construction-villa-colomiers" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
 → Colomiers (Airbus + Métro C 2028)
 </Link>
 <Link href="/construction-villa-balma" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
 → Balma (Familles + Gramont)
 </Link>
 <Link href="/construction-villa-tournefeuille" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
 → Tournefeuille (3e ville)
 </Link>
 <Link href="/construction-villa-cote-pavee-toulouse" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
 → Côte Pavée (Ultra-premium)
 </Link>
 <Link href="/renovation-maison-toulouse" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
 → Rénovation Maison Toulouse
 </Link>
 <Link href="/extension-maison-toulouse" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
 → Extension Maison Toulouse
 </Link>
 <Link href="/contact" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">
 → Contact & Devis Gratuit
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
