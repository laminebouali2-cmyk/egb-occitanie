import type { Metadata } from"next";
import Link from"next/link";
import { ContactSection } from"@/components/ContactSection";

export const metadata: Metadata = {
 title:"Construction Villa Côte Pavée Toulouse | Quartier Résidentiel Premium",
 description:"Construction villa sur-mesure Côte Pavée Toulouse. Quartier résidentiel d'exception, terrains rares 550-750€/m². Architectes DPLG, finitions prestige. Clientèle CSP++. Devis gratuit 48h.",
 keywords: ["construction villa côte pavée toulouse","terrain côte pavée toulouse","architecte côte pavée","maison prestige toulouse","quartier résidentiel toulouse","villa haut de gamme toulouse",
 ],
 openGraph: {
 title:"Construction Villa Côte Pavée | Quartier Premium Toulouse",
 description:"Villa sur-mesure quartier Côte Pavée. Terrains rares, architectes DPLG, finitions prestige. Devis gratuit.",
 url:"https://egb-occitanie.fr/construction-villa-cote-pavee-toulouse",
 },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel est le prix d'une villa Côte Pavée Toulouse ?","acceptedAnswer": {"@type":"Answer","text":"Prix construction villa Côte Pavée Toulouse: 600 000-850 000€ tout compris pour villa 180-220m². Détail: terrain 800-1000m² (550-750€/m² soit 440-750k€) + construction premium 3 200-3 800€/m² (576-836k€ pour 180m²). Total projet 180m²: 1 016 000-1 586 000€. Budget élevé justifié par: quartier résidentiel exceptionnel, terrains rares (5 ventes/an), finitions haut de gamme, architecture sur-mesure architecte DPLG, matériaux premium."
 }
 }
 ]
};

export default function ConstructionVillaCotePaveeToulouse() {
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
 <span className="h-[1px] w-12 bg-amber-700" />
 <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
 Quartier Côte Pavée - Résidentiel Premium
 </span>
 </div>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
 Construction Villa
 <br />
 <span className="text-amber-800">Côte Pavée Toulouse</span>
 </h1>

 <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
 Quartier résidentiel d'exception à 2km centre Toulouse. Terrains rares 550-750€/m².
 Villas sur-mesure 180-250m², architectes DPLG, finitions prestige.
 <strong className="font-medium text-gray-900"> Devis gratuit sous 48h.</strong>
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
 >
 Recevoir étude terrain gratuite
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
 <div className="text-3xl font-light text-amber-900 mb-2">5-8</div>
 <div className="text-sm text-gray-600">Terrains/an disponibles</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">68%</div>
 <div className="text-sm text-gray-600">Cadres supérieurs CSP+</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">75k€</div>
 <div className="text-sm text-gray-600">Revenu médian foyer</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Pourquoi Côte Pavée */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
 Côte Pavée : le quartier résidentiel le plus prisé de Toulouse
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 Le quartier Côte Pavée, situé entre Boulevard Griffoul-Dorval et Avenue Camille Pujol, est
 <strong> le quartier résidentiel premium de Toulouse</strong>. À seulement 2km du centre-ville (Place du Capitole)
 mais dans un écrin de verdure absolument préservé, Côte Pavée offre une qualité de vie exceptionnelle
 recherchée par les cadres supérieurs, dirigeants d'entreprise et professions libérales.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 Avec <strong>seulement 5 à 8 terrains disponibles par an</strong> (surface 800-1200m²), Côte Pavée est l'un des
 quartiers les plus rares de Toulouse. Prix m² terrain : <strong>550-750€/m²</strong> (soit +45% vs moyenne Toulouse 380€/m²).
 Cette rareté s'explique par la densité faible (CES 40% max PLU), la protection paysagère et l'attractivité permanente.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 <strong>EGB Occitanie</strong> a construit 8 villas Côte Pavée depuis 2015. Notre expertise : terrains rares
 (nous détectons les ventes avant mise sur marché), architecture sur-mesure adaptée au standing quartier,
 finitions prestige, délais garantis. <strong>Tous nos clients Côte Pavée sont des recommandations</strong>
 (bouche-à-oreille quartier).
 </p>

 <div className="bg-amber-50 border-l-4 border-amber-700 p-6 my-8">
 <h3 className="text-lg font-semibold text-amber-900 mb-3">Pourquoi construire à Côte Pavée ?</h3>
 <ul className="text-base text-amber-900 space-y-2">
 <li> <strong>Localisation premium:</strong> 2km Capitole, 1,5km Compans-Caffarelli, 800m Lycée Fermat</li>
 <li> <strong>Calme absolu:</strong> Voies résidentielles fermées, aucun passage, verdure préservée</li>
 <li> <strong>Sécurité maximale:</strong> Quartier tranquille, voisinage stable (rotation faible 2%/an)</li>
 <li> <strong>Écoles d'excellence:</strong> Lycée Fermat 800m (8,9/10), Caousou 1,2km (privé prestige)</li>
 <li> <strong>Terrains spacieux:</strong> 800-1200m² (vs 400-600m² autres quartiers Toulouse)</li>
 <li> <strong>Valorisation garantie:</strong> Prix m² terrain +28% depuis 2019 (source Notaires)</li>
 <li> <strong>Clientèle homogène:</strong> 68% CSP++, revenus médian 75k€, profil cadres/entrepreneurs</li>
 </ul>
 </div>

 <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
 Profil démographique Côte Pavée (données INSEE 2024)
 </h3>

 <div className="grid md:grid-cols-2 gap-6 mb-10">
 <div className="bg-gray-50 p-6 border border-gray-200">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Profil socio-économique</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• <strong>Revenu médian foyer:</strong> 75 200€/an (vs 28 400€ Toulouse)</li>
 <li>• <strong>CSP++:</strong> 68% cadres supérieurs, professions libérales</li>
 <li>• <strong>Âge moyen:</strong> 48 ans (foyers établis, patrimoine)</li>
 <li>• <strong>Taille foyer:</strong> 3,2 personnes (familles 2-3 enfants)</li>
 <li>• <strong>Propriétaires:</strong> 92% (vs 43% Toulouse)</li>
 <li>• <strong>Rotation:</strong> 2%/an (stabilité exceptionnelle)</li>
 </ul>
 </div>

 <div className="bg-gray-50 p-6 border border-gray-200">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Équipements & proximité</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• <strong>Lycée Fermat:</strong> 800m (classement 8,9/10, taux réussite bac 98%)</li>
 <li>• <strong>Lycée Caousou:</strong> 1,2km (privé catholique, 12 500€/an)</li>
 <li>• <strong>Grand Rond:</strong> 600m (jardin botanique, commerces)</li>
 <li>• <strong>Place du Capitole:</strong> 2km (15min vélo, 8min voiture)</li>
 <li>• <strong>Clinique Ambroise Paré:</strong> 1km (urgences, maternité)</li>
 <li>• <strong>Aéroport Toulouse-Blagnac:</strong> 12km (18min)</li>
 </ul>
 </div>
 </div>

 <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
 Marché immobilier Côte Pavée 2024-2025
 </h3>

 <div className="overflow-x-auto mb-8">
 <table className="w-full text-left border-collapse bg-white">
 <thead>
 <tr className="border-b-2 border-amber-800">
 <th className="py-4 px-4 text-amber-900 font-semibold">Indicateur</th>
 <th className="py-4 px-4 text-amber-900 font-semibold">Côte Pavée</th>
 <th className="py-4 px-4 text-amber-900 font-semibold">Toulouse moyenne</th>
 <th className="py-4 px-4 text-amber-900 font-semibold">Écart</th>
 </tr>
 </thead>
 <tbody className="text-gray-700">
 <tr className="border-b border-gray-200">
 <td className="py-3 px-4 font-medium">Prix terrain (€/m²)</td>
 <td className="py-3 px-4"><strong className="text-amber-800">550-750€</strong></td>
 <td className="py-3 px-4">380€</td>
 <td className="py-3 px-4 text-amber-700">+45%</td>
 </tr>
 <tr className="border-b border-gray-200 bg-gray-50">
 <td className="py-3 px-4 font-medium">Prix villa existante (€/m² hab.)</td>
 <td className="py-3 px-4"><strong className="text-amber-800">5 200-6 800€</strong></td>
 <td className="py-3 px-4">3 800€</td>
 <td className="py-3 px-4 text-amber-700">+37%</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-3 px-4 font-medium">Délai vente terrain</td>
 <td className="py-3 px-4"><strong className="text-amber-800">2-4 semaines</strong></td>
 <td className="py-3 px-4">12 semaines</td>
 <td className="py-3 px-4 text-amber-700">3x plus rapide</td>
 </tr>
 <tr className="border-b border-gray-200 bg-gray-50">
 <td className="py-3 px-4 font-medium">Évolution prix 2019-2024</td>
 <td className="py-3 px-4"><strong className="text-amber-800">+28%</strong></td>
 <td className="py-3 px-4">+18%</td>
 <td className="py-3 px-4 text-amber-700">+10 pts</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-3 px-4 font-medium">Terrains disponibles/an</td>
 <td className="py-3 px-4"><strong className="text-amber-800">5-8 terrains</strong></td>
 <td className="py-3 px-4">450 terrains</td>
 <td className="py-3 px-4 text-red-700">Rareté extrême</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
 <p className="text-amber-900 mb-0">
 <strong>Conseil expert:</strong> Terrains Côte Pavée = marché caché. 70% ventes se font hors annonces publiques
 (bouche-à-oreille, notaires, réseaux). <strong>EGB Occitanie dispose réseau notaires et propriétaires</strong>
 pour détecter opportunités avant mise sur marché. Si vous cherchez terrain Côte Pavée, contactez-nous
 pour inscription alerte exclusive.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Prix Construction */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Prix construction villa Côte Pavée : budget complet 2025
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-10">
 Construire une villa Côte Pavée représente un investissement significatif (1-1,6M€ total) mais offre
 <strong> un cadre de vie exceptionnel et une valorisation patrimoniale garantie (+25-35% en 10 ans)</strong>.
 Budget détaillé pour villa 180-220m² sur terrain 800-1000m².
 </p>

 <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
 <h3 className="text-2xl font-medium text-amber-900 mb-6">Budget total projet villa Côte Pavée</h3>

 <div className="space-y-6">
 {/* Scenario 180m² */}
 <div className="bg-white p-6 rounded border-2 border-gray-200">
 <h4 className="text-xl font-semibold text-gray-900 mb-4">Villa 180m² - Finition Premium</h4>

 <div className="space-y-3 mb-6">
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span className="text-gray-700">Terrain 900m² (650€/m² moyenne)</span>
 <strong className="text-gray-900">585 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span className="text-gray-700">Construction villa 180m² (3 400€/m²)</span>
 <strong className="text-gray-900">612 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span className="text-gray-700">Frais notaire terrain (2,5%)</span>
 <strong className="text-gray-900">14 625€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span className="text-gray-700">Aménagements extérieurs (terrasse, clôture, portail)</span>
 <strong className="text-gray-900">45 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span className="text-gray-700">Piscine 8×4m chauffée (optionnel)</span>
 <strong className="text-gray-900">38 000€</strong>
 </div>
 <div className="h-[1px] bg-gray-300 my-4"></div>
 <div className="flex justify-between text-xl">
 <strong>BUDGET TOTAL (sans piscine):</strong>
 <strong className="text-2xl text-amber-800">1 256 625€</strong>
 </div>
 <div className="flex justify-between text-lg">
 <span className="text-gray-600">Avec piscine:</span>
 <strong className="text-amber-800">1 294 625€</strong>
 </div>
 </div>

 <div className="bg-gray-50 p-5 rounded">
 <h5 className="font-semibold text-gray-900 mb-2">Construction 180m² inclut:</h5>
 <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
 <div> Architecte DPLG conception</div>
 <div> Permis construire géré</div>
 <div> Fondations + structure traditionnelle</div>
 <div> Toiture tuiles mécaniques</div>
 <div> Menuiseries alu gris anthracite</div>
 <div> Isolation RE2020 (DPE A garanti)</div>
 <div> PAC air/eau + plancher chauffant</div>
 <div> Cuisine équipée premium 25k€</div>
 <div> 3 Salles de bain design</div>
 <div> Domotique (volets, portail, alarme)</div>
 <div> Carrelage grès cérame 60×60</div>
 <div> Parquet chêne contrecollé</div>
 </div>
 </div>
 </div>

 {/* Scenario 220m² */}
 <div className="bg-amber-800 text-white p-6 rounded">
 <h4 className="text-xl font-semibold mb-4">Villa 220m² - Finition Luxe</h4>

 <div className="space-y-3 mb-6">
 <div className="flex justify-between pb-2 border-b border-amber-600">
 <span className="text-amber-100">Terrain 1000m² (700€/m² secteur premium)</span>
 <strong>700 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-600">
 <span className="text-amber-100">Construction villa 220m² (3 800€/m²)</span>
 <strong>836 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-600">
 <span className="text-amber-100">Frais notaire terrain (2,5%)</span>
 <strong>17 500€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-600">
 <span className="text-amber-100">Aménagements ext. prestige (pierre, éclairage, arrosage auto)</span>
 <strong>68 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-600">
 <span className="text-amber-100">Piscine 10×5m débordement chauffée + pool house</span>
 <strong>95 000€</strong>
 </div>
 <div className="h-[1px] bg-amber-600 my-4"></div>
 <div className="flex justify-between text-xl">
 <strong>BUDGET TOTAL (sans piscine):</strong>
 <strong className="text-2xl">1 621 500€</strong>
 </div>
 <div className="flex justify-between text-lg">
 <span className="text-amber-200">Avec piscine prestige:</span>
 <strong>1 716 500€</strong>
 </div>
 </div>

 <div className="bg-amber-900 p-5 rounded">
 <h5 className="font-semibold mb-2">Finitions Luxe supplémentaires:</h5>
 <div className="grid md:grid-cols-2 gap-3 text-sm text-amber-100">
 <div> Marbre sols (entrée, séjour)</div>
 <div> Parquet chêne massif 22mm</div>
 <div> Cuisine architecte sur-mesure 45k€</div>
 <div> SdB spa (hammam, douche pluie)</div>
 <div> Dressing sur-mesure (suite parentale)</div>
 <div> Home cinéma équipé</div>
 <div> Cave à vin climatisée</div>
 <div> Buanderie équipée</div>
 <div> Portail alu motorisé design</div>
 <div> Éclairage LED scénarisé</div>
 <div> Système audio multi-room</div>
 <div> Alarme + vidéo surveillance</div>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-amber-900 text-white p-8 rounded-lg mb-8">
 <h3 className="text-2xl font-light mb-6">Financement projet Côte Pavée (exemple 180m²)</h3>
 <div className="space-y-4">
 <div className="flex justify-between items-center pb-3 border-b border-amber-700">
 <span className="text-amber-200">Apport personnel (25% recommandé)</span>
 <strong className="text-2xl">315 000€</strong>
 </div>
 <div className="flex justify-between items-center pb-3 border-b border-amber-700">
 <span className="text-amber-200">Prêt immobilier (20 ans, taux 3,8%)</span>
 <strong className="text-2xl">942 000€</strong>
 </div>
 <div className="flex justify-between items-center">
 <span className="text-amber-200">Mensualité (hors assurance)</span>
 <strong className="text-2xl">5 685€/mois</strong>
 </div>
 </div>
 <p className="text-sm text-amber-200 mt-6 mb-0">
 Profil emprunteur: revenus foyer 12 500€/mois mini (taux endettement 35% max). Apport 315k€ = vente résidence actuelle
 ou épargne constituée. <strong>EGB Occitanie vous met en relation courtiers spécialisés patrimoine.</strong>
 </p>
 </div>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
 <p className="text-amber-900 mb-0">
 <strong>Valorisation garantie:</strong> Villa neuve Côte Pavée valorisation +25-35% en 10 ans (source Notaires).
 Exemple: villa 1,26M€ (2025) → estimation 1,58-1,70M€ (2035). Investissement patrimoine sécurisé.
 </p>
 </div>
 </div>

 <div className="mt-12 text-center">
 <Link
 href="/contact"
 className="inline-flex items-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl"
 >
 Recevoir simulation financière personnalisée
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Contact Section */}
 <ContactSection />
 </>
 );
}
