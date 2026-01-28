import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construction Villa Tournefeuille (31) | EGB Occitanie - Expert Bâtiment Toulouse",
  description: "Construction villa neuve à Tournefeuille 31170. 3ème ville Haute-Garonne, La Ramée 243ha nature/sport. Prix 2025 : 2 700-3 100€/m² tout compris. Devis gratuit 06 65 01 58 82.",
  keywords: "construction villa Tournefeuille, maison neuve Tournefeuille, constructeur Tournefeuille, villa La Ramée, construction 31170, 3ème ville Haute-Garonne",
  alternates: {
    canonical: "https://www.egb-occitanie.fr/construction-villa-tournefeuille"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une construction de villa à Tournefeuille en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix construction villa Tournefeuille 2025 : 2 700-3 100€/m² tout compris (terrain viabilisé 400m² + construction + raccordements + frais annexes). Exemple villa 120m² : 324 000€ TTC. Prix attractifs grâce foncier abordable 3ème ville Haute-Garonne (350-400€/m² terrain selon secteur). Devis détaillé gratuit : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi construire sa villa à Tournefeuille plutôt qu'ailleurs dans l'agglomération toulousaine ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tournefeuille offre 4 avantages décisifs : 1) 3ème ville Haute-Garonne (31 543 habitants) = services complets + commerces + écoles (infrastructures ville importante). 2) La Ramée 243 hectares (lac 44ha, golf, forêt) = cadre vie exceptionnel nature/sport à domicile. 3) Revenus élevés (29 020€/hab, +41% vs France) = voisinage aisé, quartiers résidentiels premium. 4) Transport : Linéo 2, future station métro Ramassiers Colomiers 2028 à 3km. Ville familiale dynamique, cadre verdoyant unique."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les meilleurs secteurs pour construire à Tournefeuille ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 secteurs premium Tournefeuille 2025 : 1) La Ramée (proximité lac/golf) : 380-400€/m² terrain, parcelles 400-600m², cadre nature exceptionnel, profil familles aisées. 2) Centre-Ville (services immédiats) : 350-380€/m² terrain, accès Linéo 2, commerces/écoles à pied, marché immobilier liquide. 3) Nord Socamil (reconversion écologique) : 340-370€/m² terrain, projet urbain 20 hectares, logements neufs éco-responsables, espaces verts préservés. EGB Occitanie vous conseille selon profil/budget."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour construire une villa à Tournefeuille ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Délai construction villa Tournefeuille : 13-15 mois de signature acte terrain à remise clés. Détail : 2-3 mois permis de construire (mairie Tournefeuille instruction fluide, 35 permis/an approuvés), 1 mois préparation chantier (VRD, fondations), 9-11 mois construction pure (gros œuvre 4-5 mois + second œuvre 5-6 mois). Contraintes spécifiques Tournefeuille : PLU zones pavillonnaires respecter gabarits ville résidentielle. EGB Occitanie garantit délais contractuels : pénalités retard 0,1% prix/jour au-delà date."
      }
    },
    {
      "@type": "Question",
      "name": "Tournefeuille est-elle bien desservie pour les trajets domicile-travail ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tournefeuille excellente desserte Ouest toulousain : 1) Linéo 2 (BHNS) vers centre Toulouse 25min, cadence 5-7min heures pointe. 2) Bus 21/63 vers Colomiers + future station métro Ramassiers ligne C (2028) à 3km. 3) Voiture : 8km Toulouse Arènes, 12km Capitole (12-18min hors pointe), accès rocade ouest immédiat. 4) Emplois locaux : Airbus Colomiers 7km (10min), zones activités Tournefeuille/Colomiers (Pahin, En Jacca). Profil idéal cadres/ingénieurs travaillant Ouest toulousain (Airbus, Thales, Continental, CNES)."
      }
    }
  ]
};

export default function ConstructionVillaTournefeuille() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-emerald-100">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/construction" className="hover:text-white transition-colors">Construction</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium">Tournefeuille</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight`}>
                Construction Villa Neuve
                <span className="block text-emerald-200 mt-2">Tournefeuille</span>
              </h1>
              <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                Constructeur expert villa sur-mesure à Tournefeuille (31170).
                3ème ville Haute-Garonne, La Ramée 243ha nature/sport, revenus élevés 29 020€/hab.
                Construction haute qualité, délais garantis, prix tout compris 2 700-3 100€/m².
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0665015882"
                  className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  📞 06 65 01 58 82
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-900 transition-all border-2 border-white text-center"
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-100 mb-2">31 543</div>
                <div className="text-sm text-emerald-50">Habitants (2025)</div>
                <div className="text-xs text-emerald-200 mt-1">3ème ville Haute-Garonne</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-100 mb-2">243 ha</div>
                <div className="text-sm text-emerald-50">La Ramée Nature</div>
                <div className="text-xs text-emerald-200 mt-1">Lac 44ha + Golf + Forêt</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-100 mb-2">29 020€</div>
                <div className="text-sm text-emerald-50">Revenus/hab</div>
                <div className="text-xs text-emerald-200 mt-1">+41% vs France</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-100 mb-2">370€</div>
                <div className="text-sm text-emerald-50">Prix terrain/m²</div>
                <div className="text-xs text-emerald-200 mt-1">Attractif grande ville</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Construire Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Pourquoi Construire Votre Villa à Tournefeuille ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Avantage 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3ème Ville Haute-Garonne
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>31 543 habitants (2025)</strong> = infrastructures ville importante.
                Services complets : 16 écoles (publiques/privées), 2 collèges, lycée, médiathèque, conservatoire,
                complexe aquatique, 40 associations sportives/culturelles.
                <strong>Ville dynamique +16% croissance depuis 2006</strong> = valorisation immobilière soutenue.
              </p>
            </div>

            {/* Avantage 2 */}
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                La Ramée : 243 Hectares Nature Exceptionnelle
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Base loisirs unique Sud-Ouest</strong> : lac 44 hectares (baignade, voile, pédalo),
                golf 18 trous, 150 hectares forêts/prairies, 12km sentiers randonnée/VTT, aires pique-nique.
                <strong>À domicile</strong> = qualité vie inégalée familles actives.
                Valorisation +8-12% propriétés proximité (moins de 1km).
              </p>
            </div>

            {/* Avantage 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Revenus Élevés & Profil Cadres
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Revenus moyens 29 020€/hab</strong> (+41% vs France 20 590€),
                taux chômage <strong>7,4%</strong> (vs 8% national).
                Profil résidentiel aisé : cadres Airbus/Thales/CNES, professions libérales, commerces premium.
                <strong>Quartiers résidentiels calmes</strong>, 71% propriétaires La Ramée.
              </p>
            </div>

            {/* Avantage 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚇</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transport Ouest Toulousain Optimal
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Linéo 2 BHNS</strong> vers Toulouse centre 25min (cadence 5-7min pointe).
                Bus 21/63 + <strong>future station métro Ramassiers Colomiers à 3km</strong> (ligne C 2028).
                Voiture : Toulouse centre 12-18min hors pointe, rocade ouest accès immédiat.
                <strong>Airbus Colomiers 7km = 10min</strong> trajets courts ingénieurs/cadres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prix Détaillés Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900`}>
            Prix Construction Villa Tournefeuille 2025
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tarifs tout compris transparents : terrain viabilisé + construction + raccordements + frais annexes.
            Garantie prix ferme contractuelle. Devis détaillé personnalisé gratuit.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Poste</th>
                  <th className="px-6 py-4 text-right font-semibold">Villa 100m²</th>
                  <th className="px-6 py-4 text-right font-semibold">Villa 120m²</th>
                  <th className="px-6 py-4 text-right font-semibold">Villa 150m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Terrain viabilisé 400m²
                    <div className="text-sm text-gray-500">Prix moyen Tournefeuille secteurs premium</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">148 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">148 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">148 000€</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Construction pure
                    <div className="text-sm text-gray-500">1 600€/m² standard, 1 650€/m² haut standing</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">160 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">192 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">240 000€</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    VRD + Raccordements
                    <div className="text-sm text-gray-500">Eau, électricité, assainissement, gaz</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">18 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">20 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">22 000€</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Frais annexes
                    <div className="text-sm text-gray-500">Notaire, assurances, taxes, études sol</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">30 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">34 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">40 000€</td>
                </tr>
                <tr className="bg-gradient-to-r from-emerald-50 to-teal-50 font-bold">
                  <td className="px-6 py-4 text-lg text-gray-900">
                    TOTAL TTC Clés en Main
                    <div className="text-sm font-normal text-gray-600">Garantie prix ferme contractuelle</div>
                  </td>
                  <td className="px-6 py-4 text-right text-xl text-emerald-700">356 000€</td>
                  <td className="px-6 py-4 text-right text-xl text-emerald-700">394 000€</td>
                  <td className="px-6 py-4 text-right text-xl text-emerald-700">450 000€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700 italic">
                    Prix/m² tout compris
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">3 560€/m²</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">3 283€/m²</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">3 000€/m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>✅</span>
              <span>Inclus dans Nos Prix Construction Tournefeuille</span>
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Étude géotechnique G2</strong> (obligatoire loi ELAN, sols variables Tournefeuille)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Plans architecture sur-mesure</strong> (respect PLU Tournefeuille, gabarits zones pavillonnaires)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Garanties décennale + dommages-ouvrage</strong> (protection totale 10 ans)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Suivi chantier hebdomadaire</strong> (conducteur travaux dédié, photos/vidéos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Normes RE2025</strong> (performance énergétique, isolation renforcée, ventilation VMC double-flux)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Équipements standing</strong> (carrelage 60x60, parquet contrecollé chambres, cuisine équipée)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secteurs Tournefeuille Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Meilleurs Secteurs Construction à Tournefeuille
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Secteur 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌳 La Ramée (Proximité Lac/Golf)
              </h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <p><strong>📍 Localisation</strong> : Sud-Ouest Tournefeuille, bords lac 44ha + golf 18 trous</p>
                <p><strong>💰 Prix terrain</strong> : 380-400€/m² (parcelles 400-600m², emplacement premium nature)</p>
                <p><strong>🏘️ Profil</strong> : Quartier résidentiel calme, 71% propriétaires, familles aisées, cadres supérieurs</p>
                <p><strong>🎯 Avantages</strong> : Cadre vie exceptionnel (lac/golf/forêt moins de 500m), valorisation +8-12% vs centre</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Idéal pour :</strong></p>
                <p className="text-gray-700">
                  <strong>Familles sportives/nature</strong> cherchant villa spacieuse terrain généreux (piscine possible)
                  + accès immédiat activités loisirs (voile, golf, randonnée, VTT).
                  Revente facilitée (secteur prisé, marché liquide).
                </p>
              </div>
            </div>

            {/* Secteur 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏛️ Centre-Ville Tournefeuille
              </h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <p><strong>📍 Localisation</strong> : Cœur ville (mairie, commerces, Linéo 2 direct)</p>
                <p><strong>💰 Prix terrain</strong> : 350-380€/m² (parcelles rares 350-500m², divisions/démolitions)</p>
                <p><strong>🏘️ Profil</strong> : Mixité résidentielle, services immédiats (écoles, commerces, médecins)</p>
                <p><strong>🎯 Avantages</strong> : Centralité absolue, Linéo 2 (Toulouse 25min), marché hebdomadaire, vie associative</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Idéal pour :</strong></p>
                <p className="text-gray-700">
                  <strong>Actifs utilisant transports en commun</strong> (Linéo 2 direct Toulouse centre) +
                  familles privilégiant proximité écoles/commerces (tout à pied moins de 10min).
                  Liquidité marché immobilier élevée (demande soutenue).
                </p>
              </div>
            </div>

            {/* Secteur 3 */}
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌿 Nord Socamil (Reconversion Écologique)
              </h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <p><strong>📍 Localisation</strong> : Nord Tournefeuille, projet urbain 20 hectares reconversion environnementale</p>
                <p><strong>💰 Prix terrain</strong> : 340-370€/m² (parcelles viabilisées neuves 400-700m²)</p>
                <p><strong>🏘️ Profil</strong> : Écoquartier mixte (logements/activités économiques/espaces verts 40%)</p>
                <p><strong>🎯 Avantages</strong> : Architecture contemporaine autorisée, normes RE2025 poussées, espaces naturels préservés</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Idéal pour :</strong></p>
                <p className="text-gray-700">
                  <strong>Acheteurs éco-responsables</strong> cherchant villa neuve dernières normes environnementales
                  (PAC, VMC double-flux, panneaux solaires) dans projet urbain durable.
                  <strong>Valorisation future +15-20%</strong> (quartier structurant).
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">🏡 Aide au Choix Secteur Construction Tournefeuille</h3>
            <p className="text-lg mb-6 text-emerald-50">
              EGB Occitanie connaît parfaitement Tournefeuille et ses secteurs.
              Nous vous conseillons gratuitement selon votre profil (emploi, famille, loisirs, budget)
              pour choisir le meilleur emplacement villa.
            </p>
            <a
              href="tel:0665015882"
              className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
            >
              📞 Conseil Gratuit : 06 65 01 58 82
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6`}>
            Prêt à Construire Votre Villa à Tournefeuille ?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            EGB Occitanie vous accompagne de A à Z : recherche terrain, conception plans architecte,
            construction clés en main, garanties décennales. <strong>Devis détaillé gratuit sous 48h</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0665015882"
              className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              📞 Appel Direct : 06 65 01 58 82
            </a>
            <Link
              href="/contact"
              className="inline-block bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-900 transition-all border-2 border-white text-lg"
            >
              ✉️ Demande Devis Gratuit
            </Link>
          </div>
          <p className="mt-6 text-emerald-100 text-sm">
            ⭐ 9 avis clients vérifiés - Note moyenne 4,8/5 - <Link href="/avis" className="underline hover:text-white">Voir les témoignages</Link>
          </p>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-center mb-8 text-gray-900">
            Découvrez Aussi Nos Autres Services Construction Villa Toulouse
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/construction-villa-colomiers" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-emerald-600 hover:text-emerald-700">
              Construction Colomiers
            </Link>
            <Link href="/construction-villa-blagnac" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-emerald-600 hover:text-emerald-700">
              Construction Blagnac
            </Link>
            <Link href="/construction-villa-balma" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-emerald-600 hover:text-emerald-700">
              Construction Balma
            </Link>
            <Link href="/construction-villa-castanet-tolosan" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-emerald-600 hover:text-emerald-700">
              Construction Castanet-Tolosan
            </Link>
            <Link href="/renovation" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-emerald-600 hover:text-emerald-700">
              Rénovation Toulouse
            </Link>
            <Link href="/extension" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-emerald-600 hover:text-emerald-700">
              Extension Maison
            </Link>
            <Link href="/contact" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-emerald-600 hover:text-emerald-700">
              Devis Gratuit
            </Link>
            <Link href="/calculateur" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-emerald-600 hover:text-emerald-700">
              Calculateur Prix
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
