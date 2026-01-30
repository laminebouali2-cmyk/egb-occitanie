import { Metadata } from"next";
import Link from"next/link";

export const metadata: Metadata = {
 title:"Construction Villa Colomiers | Constructeur Airbus Métro C 2028",
 description:"Constructeur villa Colomiers - 2e ville Haute-Garonne, site Airbus Clément Ader 5min, métro ligne C 2028. Prix terrain 388€/m², 42k habitants. Expert construction Colomiers 15+ villas livrées.",
 keywords: ["construction villa colomiers","constructeur maison colomiers","villa airbus colomiers","construction colomiers toulouse","maison neuve colomiers","terrain colomiers","constructeur colomiers airbus","métro c colomiers 2028"
 ],
 openGraph: {
 title:"Construction Villa Colomiers | Suburb Airbus #1 Métro C 2028",
 description:"Constructeur spécialisé Colomiers. Site Airbus Clément Ader, métro C 2028, 2e ville Haute-Garonne. Expert local 15+ villas livrées.",
 type:"website",
 },
 alternates: {
 canonical:"https://egb-occitanie.fr/construction-villa-colomiers",
 },
};

export default function ConstructionVillaColommiersPage() {
 const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel est le prix d'une construction de villa à Colomiers en 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Prix construction villa Colomiers 2025 : 2 800-3 200€/m² tout compris (terrain + construction). Terrain : 388€/m² moyenne (150-600€/m² selon secteur). Villa 120m² : budget 336 000-384 000€ TTC. Prix -10-15% vs Toulouse centre grâce terrain moins cher. Financement Airbus salarié : conditions avantageuses (taux réduits, PTZ éligible selon revenus)."
 }
 },
 {"@type":"Question","name":"Pourquoi construire à Colomiers plutôt qu'à Toulouse ?","acceptedAnswer": {"@type":"Answer","text":"5 raisons construire Colomiers : 1) Prix terrain -30% (388€/m² vs 550-800€/m² Toulouse) 2) Proximité Airbus Clément Ader : 5min voiture site assemblage A330/A350 3) Métro ligne C 2028 : Colomiers→Toulouse 20min (valorisation +15-20%) 4) Ville complète : 42 000 habitants, tous commerces/services, écoles 5) Disponibilité terrains : marché actif, offre régulière vs pénurie Toulouse."
 }
 },
 {"@type":"Question","name":"Quel délai pour construire une villa à Colomiers ?","acceptedAnswer": {"@type":"Answer","text":"Délai construction villa Colomiers : 12-14 mois total. Détail : Dépôt permis construire : 2 mois instruction + 2 mois recours tiers. Fondations + gros-œuvre : 4-5 mois. Second-œuvre + finitions : 3-4 mois. Livraison clé en main. PLU Colomiers : délais instruction standards, commune constructive. Anticipation : démarrer démarches 6 mois avant date souhaitée emménagement."
 }
 },
 {"@type":"Question","name":"Quels sont les quartiers à privilégier pour construire à Colomiers ?","acceptedAnswer": {"@type":"Answer","text":"Top 3 secteurs Colomiers construction : 1) Secteur Gare (métro C 2028) : valorisation future +20%, prix terrain 450-600€/m², secteur dynamique. 2) Secteur Airbus (ouest) : proximité site Clément Ader, communauté salariés Airbus, prix 350-450€/m². 3) Centre-ville : services/commerces pied, écoles primées, prix 400-550€/m². Éviter : zones inondables (consulter PPRi). Conseil : visite quartier heures pointe + weekend."
 }
 },
 {"@type":"Question","name":"Comment l'arrivée du métro C en 2028 va impacter l'immobilier à Colomiers ?","acceptedAnswer": {"@type":"Answer","text":"Impact métro ligne C Colomiers (ouverture 2028) : Valorisation immobilier : +15-25% secteur station Gare Colomiers (données Tisséo études prévisionnelles). Temps trajet : Colomiers→Toulouse centre 20min (vs 35-45min bus actuel). Attractivité : nouveaux actifs toulousains cherchant prix -30% vs centre. Investissement : construire 2025-2027 = capter valorisation avant ouverture. Stations Colomiers : Gare Colomiers (terminus ouest ligne C)."
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
 <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/40 rounded-full mb-6">
 <span className="text-amber-300 font-medium text-sm"> SUBURB AIRBUS #1 • MÉTRO C 2028 • COLOMIERS</span>
 </div>

 <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
 Construction Villa<br />
 <span className="text-amber-400">Colomiers</span>
 </h1>

 <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
 2e ville Haute-Garonne (42 000 hab), site Airbus Clément Ader à 5min, métro ligne C 2028. Prix terrain 388€/m² (-30% vs Toulouse). Marché construction actif, disponibilité terrains excellente.
 </p>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
 <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
 <div className="text-3xl font-bold text-amber-400">42k</div>
 <div className="text-sm text-gray-200 mt-1">Habitants (2e ville)</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
 <div className="text-3xl font-bold text-amber-400">388€</div>
 <div className="text-sm text-gray-200 mt-1">Terrain/m²</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
 <div className="text-3xl font-bold text-amber-400">2028</div>
 <div className="text-sm text-gray-200 mt-1">Métro ligne C</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
 <div className="text-3xl font-bold text-amber-400">5min</div>
 <div className="text-sm text-gray-200 mt-1">Airbus Clément Ader</div>
 </div>
 </div>

 <div className="flex flex-wrap gap-4">
 <a href="tel:+33665015882" className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors shadow-lg">
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
 <Link href="/" className="hover:text-amber-600">Accueil</Link>
 <span className="mx-2">›</span>
 <Link href="/construction-villa-toulouse" className="hover:text-amber-600">Construction Villa Toulouse</Link>
 <span className="mx-2">›</span>
 <span className="text-gray-900 font-medium">Colomiers</span>
 </div>
 </div>
 </section>

 {/* Introduction Pourquoi Colomiers */}
 <section className="py-16 bg-white">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Pourquoi Construire Votre Villa à Colomiers en 2025 ?</h2>

 <div className="grid md:grid-cols-2 gap-8 mb-12">
 <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3"> 2e Ville Haute-Garonne</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>42 031 habitants</strong> (INSEE 2025), Colomiers est la <strong>deuxième ville du département</strong> après Toulouse. Ville complète avec tous services, commerces, écoles primées, infrastructures sportives/culturelles. <strong>2 700 entreprises, 31 095 emplois</strong> sur territoire = bassin emploi dynamique.
 </p>
 </div>

 <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3">️ Suburb Airbus #1</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>Site Airbus Clément Ader à 5min voiture</strong> : hangar 500m x 240m, assemblage A330/A350, opérations peinture avions long-courrier. Communauté salariés Airbus importante, <strong>International School of Toulouse</strong> sur place. Trajet domicile-travail optimal pour familles Airbus.
 </p>
 </div>

 <div className="bg-green-50 border-l-4 border-green-600 p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3"> Métro Ligne C 2028</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>Ouverture métro ligne C en 2028</strong> : Colomiers Gare → Toulouse Matabiau → Labège. Temps trajet : <strong>20min vers centre Toulouse</strong> (vs 35-45min bus actuel). Valorisation immobilier prévue : <strong>+15-25% secteur station</strong> (études Tisséo). Construire maintenant = capter valorisation.
 </p>
 </div>

 <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3"> Prix Attractifs -30%</h3>
 <p className="text-gray-700 leading-relaxed">
 <strong>Prix terrain 388€/m² moyenne</strong> (fourchette 150-600€/m² selon secteur) vs 550-800€/m² Toulouse centre. <strong>Économie 60 000-80 000€</strong> sur budget total villa 120m² vs construction Toulouse intra-muros. Marché actif, disponibilité terrains régulière.
 </p>
 </div>
 </div>

 <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
 <p className="text-lg text-gray-800 leading-relaxed">
 <strong> Notre expertise Colomiers :</strong> <strong>15+ villas construites</strong> secteurs Airbus, Gare, Centre-ville depuis 2018. Connaissance approfondie PLU Colomiers, réseau artisans locaux qualifiés RGE, <strong>délais respectés 14 mois moyenne</strong>. Spécialisation familles salariés Airbus : financement adapté, planning emménagement coordonné mutations professionnelles.
 </p>
 </div>
 </div>
 </section>

 {/* Prix et Budgets Détaillés */}
 <section className="py-16 bg-gray-50">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Prix Construction Villa Colomiers 2025 : Budgets Détaillés</h2>

 <div className="bg-white rounded-lg border border-gray-300 p-8 mb-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">Grille Tarifaire Construction Villa Colomiers</h3>

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
 <td className="p-3 text-gray-900 font-medium">155 200€</td>
 <td className="p-3 text-gray-900 font-medium">155 200€</td>
 <td className="p-3 text-gray-900 font-medium">194 000€ (500m²)</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3 text-gray-700">Construction pure</td>
 <td className="p-3 text-gray-900 font-medium">160 000€</td>
 <td className="p-3 text-gray-900 font-medium">192 000€</td>
 <td className="p-3 text-gray-900 font-medium">240 000€</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3 text-gray-700">VRD + raccordements</td>
 <td className="p-3 text-gray-900 font-medium">18 000€</td>
 <td className="p-3 text-gray-900 font-medium">18 000€</td>
 <td className="p-3 text-gray-900 font-medium">22 000€</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3 text-gray-700">Frais annexes (notaire, assurance)</td>
 <td className="p-3 text-gray-900 font-medium">28 000€</td>
 <td className="p-3 text-gray-900 font-medium">32 000€</td>
 <td className="p-3 text-gray-900 font-medium">40 000€</td>
 </tr>
 <tr className="bg-amber-50 font-bold border-t-2 border-amber-600">
 <td className="p-3 text-gray-900">TOTAL TTC</td>
 <td className="p-3 text-amber-800 text-lg">361 200€</td>
 <td className="p-3 text-amber-800 text-lg">397 200€</td>
 <td className="p-3 text-amber-800 text-lg">496 000€</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="mt-6 grid md:grid-cols-2 gap-4">
 <div className="bg-green-50 border border-green-300 rounded p-4">
 <p className="text-sm text-gray-700"><strong> Inclus</strong> : Garantie décennale, garantie achèvement, assurance dommages-ouvrage, suivi chantier hebdomadaire, coordination artisans</p>
 </div>
 <div className="bg-blue-50 border border-blue-300 rounded p-4">
 <p className="text-sm text-gray-700"><strong> Financement Airbus</strong> : Conditions avantageuses salariés Airbus (taux réduits partenaires bancaires, PTZ éligible selon revenus), accompagnement dossier</p>
 </div>
 </div>
 </div>

 <div className="bg-amber-600 text-white rounded-lg p-6 mb-8">
 <h3 className="text-xl font-bold mb-3"> Comparatif Prix Colomiers vs Toulouse Centre</h3>
 <div className="grid md:grid-cols-2 gap-6">
 <div>
 <p className="font-bold mb-2">Villa 120m² Colomiers :</p>
 <ul className="space-y-1 text-sm">
 <li>• Terrain 400m² : 155 200€ (388€/m²)</li>
 <li>• Construction : 192 000€</li>
 <li>• Total : <strong>397 200€</strong></li>
 </ul>
 </div>
 <div>
 <p className="font-bold mb-2">Villa 120m² Toulouse Centre :</p>
 <ul className="space-y-1 text-sm">
 <li>• Terrain 400m² : 280 000€ (700€/m²)</li>
 <li>• Construction : 216 000€</li>
 <li>• Total : <strong>556 000€</strong></li>
 </ul>
 </div>
 </div>
 <p className="mt-4 text-lg font-bold"> Économie Colomiers : 158 800€ (-28%) pour surface équivalente</p>
 </div>
 </div>
 </section>

 {/* Secteurs et Quartiers Colomiers */}
 <section className="py-16 bg-white">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Meilleurs Secteurs pour Construire à Colomiers</h2>

 <div className="grid md:grid-cols-3 gap-6">
 <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
 <div className="text-3xl mb-3"></div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Secteur Gare (Métro C)</h3>
 <p className="text-gray-700 mb-4">
 <strong>Station métro C 2028</strong>, dynamisme commercial, services proximité. Valorisation future : <strong>+20-25%</strong> post-ouverture métro.
 </p>
 <ul className="space-y-2 text-sm text-gray-600">
 <li> Prix terrain : 450-600€/m²</li>
 <li> Disponibilité : 15-20 terrains/an</li>
 <li> Profil : jeunes actifs, primo-accédants</li>
 <li> Plus-value : forte (métro)</li>
 </ul>
 </div>

 <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
 <div className="text-3xl mb-3">️</div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Secteur Airbus (Ouest)</h3>
 <p className="text-gray-700 mb-4">
 <strong>5min site Clément Ader</strong>, communauté salariés Airbus, cadre résidentiel calme. Trajet domicile-travail optimal.
 </p>
 <ul className="space-y-2 text-sm text-gray-600">
 <li> Prix terrain : 350-450€/m²</li>
 <li> Disponibilité : 25-30 terrains/an</li>
 <li> Profil : familles Airbus, cadres</li>
 <li> Plus-value : stable, demande locative</li>
 </ul>
 </div>

 <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
 <div className="text-3xl mb-3">️</div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">Centre-Ville</h3>
 <p className="text-gray-700 mb-4">
 <strong>Services/commerces à pied</strong>, écoles réputées (8/10 moyenne), vie de quartier animée. Cadre urbain avec commodités.
 </p>
 <ul className="space-y-2 text-sm text-gray-600">
 <li> Prix terrain : 400-550€/m²</li>
 <li> Disponibilité : 10-15 terrains/an</li>
 <li> Profil : familles, retraités actifs</li>
 <li> Plus-value : très stable</li>
 </ul>
 </div>
 </div>

 <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-600 p-6">
 <h3 className="font-bold text-gray-900 mb-2">️ Zones à Éviter</h3>
 <p className="text-gray-700">
 <strong>Zones inondables</strong> (consulter PPRi - Plan Prévention Risques Inondation Colomiers). Secteurs bordure Touch (rivière) : contraintes construction, assurances élevées. <strong>Vérification systématique avant achat terrain</strong> : nous consultons PLU + PPRi + servitudes pour validation.
 </p>
 </div>
 </div>
 </section>

 {/* Étude de Cas Réelle */}
 <section className="py-16 bg-white">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Étude de Cas Réelle : Villa Famille Airbus - Secteur Gare Colomiers</h2>

 <div className="bg-white rounded-lg border-2 border-amber-600 p-8 shadow-xl">
 <div className="grid md:grid-cols-3 gap-6 mb-6">
 <div className="text-center">
 <div className="text-4xl font-bold text-amber-600">185m²</div>
 <div className="text-sm text-gray-600 mt-1">Surface habitable</div>
 </div>
 <div className="text-center">
 <div className="text-4xl font-bold text-amber-600">13 mois</div>
 <div className="text-sm text-gray-600 mt-1">Délai total</div>
 </div>
 <div className="text-center">
 <div className="text-4xl font-bold text-amber-600">568k€</div>
 <div className="text-sm text-gray-600 mt-1">Budget TTC</div>
 </div>
 </div>

 <div className="border-t border-gray-200 pt-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4">Profil Client & Contexte</h3>
 <p className="text-gray-700 mb-4 leading-relaxed">
 <strong>Client :</strong> Famille 4 personnes (2 enfants 8 et 12 ans), père ingénieur Airbus site Clément Ader, mère cadre secteur santé CHU Rangueil. <strong>Objectif :</strong> villa spacieuse secteur Gare Colomiers pour anticiper métro C 2028, trajet père 5min Airbus + mère 20min CHU.
 </p>

 <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Budget Détaillé</h3>
 <div className="grid md:grid-cols-2 gap-4 mb-6">
 <div className="bg-gray-50 p-4 rounded">
 <p className="text-sm text-gray-600 mb-1">Terrain 550m² secteur Gare</p>
 <p className="text-lg font-bold text-gray-900">275 000€ (500€/m²)</p>
 </div>
 <div className="bg-gray-50 p-4 rounded">
 <p className="text-sm text-gray-600 mb-1">Construction 185m² (R+1)</p>
 <p className="text-lg font-bold text-gray-900">258 000€ (1 395€/m²)</p>
 </div>
 <div className="bg-gray-50 p-4 rounded">
 <p className="text-sm text-gray-600 mb-1">Aménagements haut de gamme</p>
 <p className="text-lg font-bold text-gray-900">35 000€</p>
 </div>
 <div className="bg-gray-50 p-4 rounded">
 <p className="text-sm text-gray-600 mb-1">Frais totaux (VRD, notaire, assurances)</p>
 <p className="text-lg font-bold text-gray-900">48 000€</p>
 </div>
 </div>

 <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Caractéristiques Villa</h3>
 <div className="grid md:grid-cols-2 gap-6">
 <ul className="space-y-2 text-gray-700">
 <li> <strong>R+1</strong> : 4 chambres (dont 1 suite parentale 28m²)</li>
 <li> <strong>Pièce de vie</strong> : 65m² (salon-salle à manger-cuisine US)</li>
 <li> <strong>Bureau télétravail</strong> : 12m² (père ingénieur 2j/semaine home office)</li>
 <li> <strong>Garage double</strong> : 40m² (2 voitures + stockage)</li>
 </ul>
 <ul className="space-y-2 text-gray-700">
 <li> <strong>Isolation renforcée</strong> : RT2020, DPE A</li>
 <li> <strong>PAC air-eau</strong> : chauffage + ECS (économies 60% vs gaz)</li>
 <li> <strong>Domotique</strong> : contrôle chauffage/volets smartphone</li>
 <li> <strong>Aménagement jardin</strong> : terrasse 40m², pelouse, arrosage auto</li>
 </ul>
 </div>

 <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-6">
 <h3 className="font-bold text-green-900 mb-2"> Témoignage Client (Mars 2024)</h3>
 <p className="text-gray-700 italic leading-relaxed">"EGB a parfaitement compris notre besoin : villa familiale spacieuse secteur métro C futur. Délai 13 mois respecté (livraison septembre 2023 pour rentrée enfants). <strong>Investissement valorisé : terrain secteur Gare pris +12% en 6 mois</strong> (anticipation métro). Qualité construction excellente, suivi pro. Père 7min Airbus voiture, parfait. Je recommande."
 </p>
 <p className="text-sm text-gray-600 mt-2">— Sébastien M., Ingénieur Airbus, Colomiers</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Colomiers */}
 <section className="py-16 bg-white">
 <div className="max-w-4xl mx-auto px-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions Fréquentes Construction Villa Colomiers</h2>

 <div className="space-y-6">
 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Quel est le prix d'une construction de villa à Colomiers en 2025 ?
 <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3">
 <strong>Prix construction villa Colomiers 2025 : 2 800-3 200€/m² tout compris</strong> (terrain + construction).
 </p>
 <ul className="space-y-2 ml-4">
 <li>• <strong>Terrain</strong> : 388€/m² moyenne (150-600€/m² selon secteur)</li>
 <li>• <strong>Villa 120m²</strong> : budget 336 000-384 000€ TTC</li>
 <li>• <strong>Économie vs Toulouse</strong> : -10-15% grâce terrain moins cher</li>
 <li>• <strong>Financement Airbus salarié</strong> : conditions avantageuses (taux réduits, PTZ éligible selon revenus)</li>
 </ul>
 </div>
 </details>

 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Pourquoi construire à Colomiers plutôt qu'à Toulouse ?
 <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3"><strong>5 raisons construire Colomiers :</strong></p>
 <ol className="space-y-2 ml-4 list-decimal">
 <li><strong>Prix terrain -30%</strong> : 388€/m² vs 550-800€/m² Toulouse</li>
 <li><strong>Proximité Airbus Clément Ader</strong> : 5min voiture site assemblage A330/A350</li>
 <li><strong>Métro ligne C 2028</strong> : Colomiers→Toulouse 20min (valorisation +15-20%)</li>
 <li><strong>Ville complète</strong> : 42 000 habitants, tous commerces/services, écoles</li>
 <li><strong>Disponibilité terrains</strong> : marché actif, offre régulière vs pénurie Toulouse</li>
 </ol>
 </div>
 </details>

 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Quel délai pour construire une villa à Colomiers ?
 <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3"><strong>Délai construction villa Colomiers : 12-14 mois total</strong></p>
 <p className="mb-3">Détail :</p>
 <ul className="space-y-2 ml-4">
 <li>• <strong>Dépôt permis construire</strong> : 2 mois instruction + 2 mois recours tiers</li>
 <li>• <strong>Fondations + gros-œuvre</strong> : 4-5 mois</li>
 <li>• <strong>Second-œuvre + finitions</strong> : 3-4 mois</li>
 <li>• <strong>Livraison clé en main</strong></li>
 </ul>
 <p className="mt-3">
 <strong>PLU Colomiers</strong> : délais instruction standards, commune constructive. <strong>Anticipation</strong> : démarrer démarches 6 mois avant date souhaitée emménagement.
 </p>
 </div>
 </details>

 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Quels sont les quartiers à privilégier pour construire à Colomiers ?
 <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3"><strong>Top 3 secteurs Colomiers construction :</strong></p>
 <ol className="space-y-3 ml-4 list-decimal">
 <li><strong>Secteur Gare (métro C 2028)</strong> : valorisation future +20%, prix terrain 450-600€/m², secteur dynamique</li>
 <li><strong>Secteur Airbus (ouest)</strong> : proximité site Clément Ader, communauté salariés Airbus, prix 350-450€/m²</li>
 <li><strong>Centre-ville</strong> : services/commerces pied, écoles primées, prix 400-550€/m²</li>
 </ol>
 <p className="mt-3">
 <strong>Éviter</strong> : zones inondables (consulter PPRi). <strong>Conseil</strong> : visite quartier heures pointe + weekend.
 </p>
 </div>
 </details>

 <details className="bg-gray-50 border border-gray-200 rounded-lg p-6 group">
 <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
 Comment l'arrivée du métro C en 2028 va impacter l'immobilier à Colomiers ?
 <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
 </summary>
 <div className="mt-4 text-gray-700 leading-relaxed">
 <p className="mb-3"><strong>Impact métro ligne C Colomiers (ouverture 2028) :</strong></p>
 <ul className="space-y-2 ml-4">
 <li>• <strong>Valorisation immobilier</strong> : +15-25% secteur station Gare Colomiers (données Tisséo études prévisionnelles)</li>
 <li>• <strong>Temps trajet</strong> : Colomiers→Toulouse centre 20min (vs 35-45min bus actuel)</li>
 <li>• <strong>Attractivité</strong> : nouveaux actifs toulousains cherchant prix -30% vs centre</li>
 <li>• <strong>Investissement</strong> : construire 2025-2027 = capter valorisation avant ouverture</li>
 <li>• <strong>Stations Colomiers</strong> : Gare Colomiers (terminus ouest ligne C)</li>
 </ul>
 </div>
 </details>
 </div>
 </div>
 </section>

 {/* CTA Final */}
 <section className="py-20 bg-white text-white">
 <div className="max-w-4xl mx-auto px-6 text-center">
 <h2 className="text-4xl font-bold mb-6">Construisez Votre Villa à Colomiers avec EGB Occitanie</h2>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 15+ villas Colomiers livrées • Site Airbus 5min • Métro C 2028 • Prix -30% vs Toulouse • Délais 12-14 mois garantis
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <a href="tel:+33665015882" className="inline-block px-10 py-5 bg-white text-amber-900 font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-xl">
 06 65 01 58 82 - Devis Gratuit
 </a>
 <a href="/contact" className="inline-block px-10 py-5 bg-amber-700 hover:bg-amber-600 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">
 Demander un Devis Détaillé
 </a>
 </div>
 <p className="text-sm text-gray-300 mt-6">
 Réponse sous 24h • Visite terrain avec vous • Étude financement gratuite
 </p>
 </div>
 </section>

 {/* Internal Links */}
 <section className="py-12 bg-white border-t border-gray-200">
 <div className="max-w-6xl mx-auto px-6">
 <h3 className="font-bold text-gray-900 mb-6 text-xl">Découvrez Nos Autres Secteurs Construction Toulouse</h3>
 <div className="grid md:grid-cols-4 gap-4">
 <Link href="/construction-villa-toulouse" className="text-amber-700 hover:text-amber-900 hover:underline font-medium">
 → Construction Villa Toulouse (hub)
 </Link>
 <Link href="/construction-villa-blagnac" className="text-amber-700 hover:text-amber-900 hover:underline font-medium">
 → Blagnac (Airbus + Aéroport)
 </Link>
 <Link href="/construction-villa-balma" className="text-amber-700 hover:text-amber-900 hover:underline font-medium">
 → Balma (Familles + Gramont)
 </Link>
 <Link href="/construction-villa-tournefeuille" className="text-amber-700 hover:text-amber-900 hover:underline font-medium">
 → Tournefeuille (3e ville)
 </Link>
 <Link href="/construction-villa-cote-pavee-toulouse" className="text-amber-700 hover:text-amber-900 hover:underline font-medium">
 → Côte Pavée (Ultra-premium)
 </Link>
 <Link href="/renovation-maison-toulouse" className="text-amber-700 hover:text-amber-900 hover:underline font-medium">
 → Rénovation Maison Toulouse
 </Link>
 <Link href="/extension-maison-toulouse" className="text-amber-700 hover:text-amber-900 hover:underline font-medium">
 → Extension Maison Toulouse
 </Link>
 <Link href="/contact" className="text-amber-700 hover:text-amber-900 hover:underline font-medium">
 → Contact & Devis Gratuit
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
