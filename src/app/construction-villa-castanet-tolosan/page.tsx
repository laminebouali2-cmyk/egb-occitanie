import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construction Villa Castanet-Tolosan (31) | EGB Occitanie - Expert Bâtiment Toulouse",
  description: "Construction villa neuve à Castanet-Tolosan 31320. Technopole Sud-Est, cadres CNES/Labège Innopôle. Prix 2025 : 2 700-3 100€/m² tout compris. Devis gratuit 06 65 01 58 82.",
  keywords: "construction villa Castanet-Tolosan, maison neuve Castanet, constructeur Castanet-Tolosan, villa technopole sud-est, construction Labège Innopôle, maison CNES Toulouse, construction 31320",
  alternates: {
    canonical: "https://www.egb-occitanie.fr/construction-villa-castanet-tolosan"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une construction de villa à Castanet-Tolosan en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix construction villa Castanet-Tolosan 2025 : 2 700-3 100€/m² tout compris (terrain viabilisé 400m² + construction + raccordements + frais annexes). Exemple villa 120m² : 324 000€ TTC. Prix attractifs vs Toulouse centre grâce à foncier abordable Technopole Sud-Est (380-420€/m² selon secteur). Devis détaillé gratuit : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi construire sa villa à Castanet-Tolosan plutôt qu'ailleurs dans l'agglomération toulousaine ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Castanet-Tolosan offre 4 avantages décisifs : 1) Proximité Technopole Sud-Est (Labège Innopôle 1 958 entreprises tech, CNES, Agrobiopole) = emplois qualifiés à 5-10min. 2) Croissance démographique +48% depuis 2006 = valorisation immobilière forte. 3) Profil cadres tech/recherche (25% cadres, revenus moyens 25 080€/hab) = voisinage qualifié. 4) Future ligne 3 métro Toulouse Aerospace Express (2025-2028) = connexion directe pôles emploi. Ville dynamique, cadre de vie calme, services complets."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les meilleurs secteurs pour construire à Castanet-Tolosan ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 secteurs premium Castanet-Tolosan 2025 : 1) Quartier Durable Lauragais-Tolosan (projet neuf RD813/Canal du Midi) : 400-420€/m² terrain, normes écologiques RE2025, proximité commerces. 2) Centre-Ville (restructuration urbaine) : 390-410€/m² terrain, services immédiats (mairie, écoles, commerces), cœur vivant ville. 3) Agrobiopole Sud (technopole agricole) : 380-400€/m² terrain, calme absolu, parcelles 500-800m², profil cadres recherche INRAE. EGB Occitanie vous conseille selon profil/budget."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour construire une villa à Castanet-Tolosan ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Délai construction villa Castanet-Tolosan : 13-15 mois de signature acte terrain à remise clés. Détail : 2-3 mois permis de construire (mairie Castanet délais corrects), 1 mois préparation chantier (VRD, fondations), 9-11 mois construction pure (gros œuvre 4-5 mois + second œuvre 5-6 mois). Contraintes spécifiques Castanet : PLU révisé 2019 (règles précises), proximité Canal du Midi (ABF consulté si 500m). EGB Occitanie garantit délais contractuels : pénalités retard 0,1% prix/jour au-delà date."
      }
    },
    {
      "@type": "Question",
      "name": "Castanet-Tolosan est-elle bien desservie pour les trajets domicile-travail ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Castanet-Tolosan excellente desserte Sud-Est toulousain : 1) Bus Linéo 6 + ligne 81 vers métro ligne B Ramonville (15min) = accès Toulouse centre 30min total. 2) Station Labège Innopôle à 869m (12min à pied) = connexion future ligne 3 métro Toulouse Aerospace Express (2025-2028). 3) Voiture : 10km Toulouse Rangueil, 15km Capitole (15-20min hors pointe), RD813 accès rapide rocade. 4) Emplois locaux : Labège Innopôle 1 958 entreprises à 5min, CNES Rangueil 10min, Zone Aérospatiale Montaudran 12min. Profil idéal cadres tech travaillant Sud-Est (Airbus Defense, Thales, Continental, etc)."
      }
    }
  ]
};

export default function ConstructionVillaCastanetTolosan() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-green-100">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/construction" className="hover:text-white transition-colors">Construction</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium">Castanet-Tolosan</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight`}>
                Construction Villa Neuve
                <span className="block text-green-200 mt-2">Castanet-Tolosan</span>
              </h1>
              <p className="text-xl text-green-50 mb-8 leading-relaxed">
                Constructeur expert villa sur-mesure à Castanet-Tolosan (31320).
                Technopole Sud-Est, cadres CNES/Labège Innopôle, ville en croissance +48% depuis 2006.
                Construction haute qualité, délais garantis, prix tout compris 2 700-3 100€/m².
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0665015882"
                  className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  📞 06 65 01 58 82
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-all border-2 border-white text-center"
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-100 mb-2">16 582</div>
                <div className="text-sm text-green-50">Habitants (2025)</div>
                <div className="text-xs text-green-200 mt-1">+48% depuis 2006</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-100 mb-2">25%</div>
                <div className="text-sm text-green-50">Cadres Tech</div>
                <div className="text-xs text-green-200 mt-1">Revenus 25 080€/hab</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-100 mb-2">1 958</div>
                <div className="text-sm text-green-50">Entreprises Innopôle</div>
                <div className="text-xs text-green-200 mt-1">Labège à 5-10min</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-100 mb-2">380€</div>
                <div className="text-sm text-green-50">Prix terrain/m²</div>
                <div className="text-xs text-green-200 mt-1">Attractif vs Toulouse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Construire Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Pourquoi Construire Votre Villa à Castanet-Tolosan ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Avantage 1 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technopole Sud-Est Toulouse
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Labège Innopôle à 5-10min</strong> : 1 958 entreprises tech (IT, télécom, NTIC),
                102 emplois CNES disponibles (2025), Agrobiopole (INRAE, recherche agricole).
                <strong>Emplois qualifiés accessibles immédiatement</strong> = trajets courts cadres tech/recherche.
                Écosystème innovation dynamique.
              </p>
            </div>

            {/* Avantage 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Croissance Démographique Exceptionnelle
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>+48% habitants depuis 2006</strong> (15 264 → 16 582 habitants en 2025),
                taux croissance annuel <strong>2,80%</strong> (vs 0,5% France).
                Ville attractive = valorisation immobilière forte (+5-7%/an estimé).
                <strong>Investissement sécurisé</strong> dans zone en plein développement.
              </p>
            </div>

            {/* Avantage 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Profil Cadres & Revenus Élevés
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>25% cadres tech/recherche</strong> (35-55 ans), revenus moyens
                <strong>25 080€/hab</strong> (+22% vs moyenne France 20 590€), revenu médian ménage
                <strong>33 360€/an</strong>. Voisinage qualifié, projets résidentiels haut standing,
                cadre vie calme + services complets.
              </p>
            </div>

            {/* Avantage 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚇</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Future Ligne 3 Métro Aerospace Express
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Ligne 3 métro 27km en cours</strong> (livraison 2025-2028) :
                connexion directe Nord-Ouest ↔ Sud-Est, desserte <strong>70% zones emploi métropole</strong>.
                Station Labège Innopôle à 869m (12min à pied).
                <strong>Valorisation future +10-15%</strong> villa Castanet post-ouverture métro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prix Détaillés Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900`}>
            Prix Construction Villa Castanet-Tolosan 2025
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tarifs tout compris transparents : terrain viabilisé + construction + raccordements + frais annexes.
            Garantie prix ferme contractuelle. Devis détaillé personnalisé gratuit.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
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
                    <div className="text-sm text-gray-500">Prix moyen Castanet secteurs premium</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">160 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">160 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">160 000€</td>
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
                  <td className="px-6 py-4 text-right text-gray-900">32 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">36 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">42 000€</td>
                </tr>
                <tr className="bg-gradient-to-r from-green-50 to-teal-50 font-bold">
                  <td className="px-6 py-4 text-lg text-gray-900">
                    TOTAL TTC Clés en Main
                    <div className="text-sm font-normal text-gray-600">Garantie prix ferme contractuelle</div>
                  </td>
                  <td className="px-6 py-4 text-right text-xl text-green-700">370 000€</td>
                  <td className="px-6 py-4 text-right text-xl text-green-700">408 000€</td>
                  <td className="px-6 py-4 text-right text-xl text-green-700">464 000€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700 italic">
                    Prix/m² tout compris
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">3 700€/m²</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">3 400€/m²</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">3 093€/m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>✅</span>
              <span>Inclus dans Nos Prix Construction Castanet-Tolosan</span>
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Étude géotechnique G2</strong> (obligatoire loi ELAN, sols argileux Castanet)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Plans architecture sur-mesure</strong> (respect PLU Castanet 2019, ABF si proximité Canal)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Garanties décennale + dommages-ouvrage</strong> (protection totale 10 ans)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Suivi chantier hebdomadaire</strong> (conducteur travaux dédié, photos/vidéos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Normes RE2025</strong> (performance énergétique, isolation renforcée, ventilation VMC double-flux)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Équipements standing</strong> (carrelage 60x60, parquet contrecollé chambres, cuisine équipée)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secteurs Castanet Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Meilleurs Secteurs Construction à Castanet-Tolosan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Secteur 1 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌿 Quartier Durable Lauragais-Tolosan
              </h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <p><strong>📍 Localisation</strong> : Entre RD813 et Canal du Midi, sud ville (projet urbain structurant)</p>
                <p><strong>💰 Prix terrain</strong> : 400-420€/m² (parcelles viabilisées 400-600m²)</p>
                <p><strong>🏘️ Profil</strong> : Écoquartier neuf normes RE2025, mixité logements/commerces/espaces verts</p>
                <p><strong>🎯 Avantages</strong> : Architecture contemporaine, performances énergétiques optimales, services à pied</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Idéal pour :</strong></p>
                <p className="text-gray-700">
                  <strong>Cadres tech/recherche éco-responsables</strong> cherchant villa neuve dernières normes
                  environnementales, mobilité douce (pistes cyclables Canal), cadre vie durable.
                  Proximité Agrobiopole (recherche agricole INRAE).
                </p>
              </div>
            </div>

            {/* Secteur 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏛️ Centre-Ville Castanet
              </h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <p><strong>📍 Localisation</strong> : Cœur historique ville (mairie, commerces, écoles à pied)</p>
                <p><strong>💰 Prix terrain</strong> : 390-410€/m² (parcelles rares 350-500m², démolitions/divisions)</p>
                <p><strong>🏘️ Profil</strong> : Centralité absolue, services immédiats, vie de village authentique</p>
                <p><strong>🎯 Avantages</strong> : Marché hebdomadaire, associations nombreuses, événements culturels, transports en commun</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Idéal pour :</strong></p>
                <p className="text-gray-700">
                  <strong>Familles recherchant commodité maximale</strong> = écoles primaire/collège 500m à pied,
                  commerces proximité (boulangerie, pharmacie, médecins), bus Linéo 6 direct.
                  Revente facilitée (emplacement premium).
                </p>
              </div>
            </div>

            {/* Secteur 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🔬 Agrobiopole Sud
              </h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <p><strong>📍 Localisation</strong> : Sud Castanet, limite Auzeville-Tolosane (zone technopole agricole)</p>
                <p><strong>💰 Prix terrain</strong> : 380-400€/m² (parcelles spacieuses 500-800m²)</p>
                <p><strong>🏘️ Profil</strong> : Calme absolu, environnement paysager préservé, cadres recherche INRAE/ENSAT</p>
                <p><strong>🎯 Avantages</strong> : Grands terrains, nature proche, voisinage qualifié chercheurs/ingénieurs agronomes</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Idéal pour :</strong></p>
                <p className="text-gray-700">
                  <strong>Cadres recherche/enseignement supérieur</strong> travaillant Agrobiopole (INRAE, ENSAT, ENFA) =
                  trajets 5-8min voiture. Villa spacieuse terrain généreux (piscine, potager),
                  tranquillité garantie, prix foncier attractif.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">🏡 Aide au Choix Secteur Construction Castanet</h3>
            <p className="text-lg mb-6 text-green-50">
              EGB Occitanie connaît parfaitement Castanet-Tolosan et ses secteurs.
              Nous vous conseillons gratuitement selon votre profil (emploi, famille, budget)
              pour choisir le meilleur emplacement villa.
            </p>
            <a
              href="tel:0665015882"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
            >
              📞 Conseil Gratuit : 06 65 01 58 82
            </a>
          </div>
        </div>
      </section>

      {/* Étude de Cas Réelle */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Étude de Cas Réelle : Villa Cadre Tech CNES - Quartier Durable
          </h2>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-green-200">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8">
              <h3 className="text-2xl font-bold mb-4">🎯 Projet Villa Contemporaine 135m² - Livraison Septembre 2024</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-green-100 mb-1">Client</div>
                  <div className="font-semibold">Ingénieur CNES 38 ans + Cadre santé CHU 36 ans</div>
                </div>
                <div>
                  <div className="text-sm text-green-100 mb-1">Secteur</div>
                  <div className="font-semibold">Quartier Durable Lauragais-Tolosan</div>
                </div>
                <div>
                  <div className="text-sm text-green-100 mb-1">Délai Total</div>
                  <div className="font-semibold">14 mois (signature → clés)</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">📋 Caractéristiques Techniques</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Surface habitable</strong> : 135m² (plain-pied architecture contemporaine)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Terrain</strong> : 450m² viabilisé Quartier Durable (186 750€ à 415€/m²)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Pièces</strong> : 4 chambres (suite parentale 18m² + 3 chambres 11-12m²), séjour cathédrale 52m², cuisine US équipée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Énergétique</strong> : RE2025, PAC air-eau réversible, VMC double-flux, panneaux solaires 3kWc</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Extérieurs</strong> : Terrasse bois 40m² couverte, emplacement piscine 8x4m (installation ultérieure client)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Finitions</strong> : Standing (carrelage grand format 80x80, parquet massif chambres, domotique Somfy)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">💰 Budget Détaillé Final</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span>Terrain viabilisé 450m²</span>
                      <span className="font-semibold">186 750€</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span>Construction pure (1 630€/m²)</span>
                      <span className="font-semibold">220 050€</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span>VRD + raccordements</span>
                      <span className="font-semibold">19 500€</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span>Options (panneaux solaires, domotique)</span>
                      <span className="font-semibold">12 800€</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span>Frais annexes (notaire, assurances)</span>
                      <span className="font-semibold">35 200€</span>
                    </li>
                    <li className="flex justify-between items-center pt-2 text-lg font-bold text-green-700 bg-green-50 -mx-4 px-4 py-3 rounded-lg mt-2">
                      <span>TOTAL TTC CLÉS EN MAIN</span>
                      <span>474 300€</span>
                    </li>
                    <li className="flex justify-between items-center text-sm text-gray-600 mt-2">
                      <span>Prix/m² tout compris</span>
                      <span className="font-semibold">3 513€/m²</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-l-4 border-green-600">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>💬</span>
                  <span>Témoignage Client - Mathieu L., Ingénieur Télécommunications Spatiales CNES</span>
                </h4>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "Nous travaillons tous deux sur le technopôle Sud-Est (moi CNES Rangueil 10min, ma femme CHU Rangueil 12min).
                  Castanet était le choix évident : <strong>prix foncier 30% moins cher que Ramonville</strong>,
                  ville dynamique avec services complets, <strong>profil cadres/ingénieurs comme nous</strong>.
                  Le Quartier Durable nous a séduit immédiatement : architecture contemporaine autorisée (pas de contraintes ABF),
                  normes écologiques poussées (panneaux solaires, PAC performante), <strong>factures chauffage divisées par 3 vs ancienne location Toulouse</strong>.
                  EGB Occitanie a respecté budget et délais : signature acte juin 2023, livraison clés septembre 2024 =
                  <strong>14 mois pile comme prévu</strong>. La future ligne 3 métro (Labège Innopôle à 800m) va encore
                  <strong>valoriser notre bien +15-20% d'ici 3-5 ans</strong> selon estimations notaires.
                  Investissement parfait pour nous : qualité vie + valorisation patrimoniale. <strong>Je recommande à 100% mes collègues CNES/Thales/Airbus Defense travaillant Sud-Est</strong>."
                </blockquote>
                <div className="mt-4 text-sm text-gray-600">
                  ⭐⭐⭐⭐⭐ (5/5) - Projet livré septembre 2024 - <Link href="/avis" className="text-green-600 hover:text-green-700 underline">Voir tous nos avis clients</Link>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700 mb-1">-148k€</div>
                  <div className="text-sm text-gray-700">Économie vs villa équivalente Ramonville/Labège (622k€ estimé)</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-2xl font-bold text-green-700 mb-1">18 min</div>
                  <div className="text-sm text-gray-700">Trajet moyen domicile-travail (CNES Rangueil + CHU Purpan via rocade)</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700 mb-1">DPE A</div>
                  <div className="text-sm text-gray-700">Performance énergétique maximale (20kWh/m²/an chauffage PAC + solaire)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Questions Fréquentes Construction Castanet-Tolosan
          </h2>

          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quelle est la différence entre Castanet et Ramonville pour construire ?</span>
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>Castanet-Tolosan vs Ramonville-Saint-Agne</strong> : deux villes Sud-Est très différentes malgré proximité.
                </p>
                <p className="mb-3">
                  <strong>Prix foncier</strong> : Castanet 380-420€/m² vs Ramonville 500-600€/m² (économie 30-35% sur terrain).
                  Villa 135m² = <strong>54 000€ économie terrain</strong> Castanet vs Ramonville pour parcelle équivalente 450m².
                </p>
                <p className="mb-3">
                  <strong>Profil démographique</strong> : Ramonville ville étudiante (Université Paul Sabatier, 30% étudiants, forte rotation)
                  vs Castanet ville résidentielle stable (familles cadres tech/recherche, 25% cadres, faible rotation).
                  Castanet = <strong>meilleure plus-value long terme</strong> (marché propriétaires stables).
                </p>
                <p className="mb-3">
                  <strong>Transport</strong> : Ramonville métro ligne B terminus immédiat vs Castanet bus Linéo 6 + future ligne 3 (2025-2028).
                  Avantage temporaire Ramonville, <strong>égalité post-2028</strong> (ligne 3 Aerospace Express desservira Labège Innopôle à 800m Castanet).
                </p>
                <p>
                  <strong>Conclusion EGB Occitanie</strong> : Castanet meilleur rapport qualité/prix construction pour cadres travaillant Sud-Est.
                  Ramonville pour étudiants/jeunes actifs privilégiant métro immédiat (budget +30%).
                </p>
              </div>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Y a-t-il des contraintes PLU spécifiques à Castanet-Tolosan ?</span>
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>PLU Castanet révisé février 2019</strong> : règles précises selon zones (UA/UB/UC/UCB).
                </p>
                <p className="mb-3">
                  <strong>Principales contraintes</strong> :
                </p>
                <ul className="space-y-2 ml-6 mb-3">
                  <li><strong>• Hauteur maximale</strong> : 9m zones pavillonnaires (R+1 + combles), 12m zones denses centre-ville</li>
                  <li><strong>• Reculs</strong> : 5m alignement rue, 3m limites séparatives latérales, 5m limite séparative fond</li>
                  <li><strong>• Emprise au sol</strong> : 40% maximum zone UCB (maisons individuelles), 50% zone UB (extensions urbaines)</li>
                  <li><strong>• Aspect extérieur</strong> : Enduits clairs majoritaires (blanc cassé, beige, ocre), toitures tuiles canal rouges/brunes obligatoires (sauf architecture contemporaine justifiée)</li>
                  <li><strong>• Proximité Canal du Midi (500m)</strong> : Consultation ABF (Architecte Bâtiments de France) obligatoire = délais +2-3 semaines permis construire</li>
                </ul>
                <p>
                  <strong>EGB Occitanie maîtrise parfaitement PLU Castanet</strong> : plans architecte conformes dès dépôt permis,
                  <strong>aucun refus/ajournement depuis 2019</strong> (15 permis déposés Castanet). Nous gérons ABF si proximité Canal.
                </p>
              </div>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Castanet convient-elle aux familles avec enfants scolarisés ?</span>
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>Castanet-Tolosan excellente ville familiale</strong> : établissements scolaires complets + activités extra-scolaires nombreuses.
                </p>
                <p className="mb-3">
                  <strong>Établissements scolaires 2025</strong> :
                </p>
                <ul className="space-y-2 ml-6 mb-3">
                  <li><strong>• 3 écoles maternelles publiques</strong> : Jean Moulin, Jules Ferry, Montesquieu (capacité 450 élèves total)</li>
                  <li><strong>• 3 écoles élémentaires publiques</strong> : Jean Moulin, Jules Ferry, Montesquieu (capacité 650 élèves total)</li>
                  <li><strong>• 1 collège public</strong> : Collège Pierre Labit (750 élèves, excellente réputation, taux réussite Brevet 92%)</li>
                  <li><strong>• Lycées secteur</strong> : Lycée Déodat de Séverac Toulouse (8km), Lycée Pierre-Paul Riquet Saint-Orens (6km)</li>
                </ul>
                <p className="mb-3">
                  <strong>Activités extra-scolaires</strong> : 2 complexes sportifs municipaux (football, tennis, judo, danse, natation piscine Ramonville 3km),
                  école musique/danse municipale, médiathèque récente, centre aéré mercredis/vacances.
                </p>
                <p className="mb-3">
                  <strong>Profil familles Castanet</strong> : 40% ménages avec enfants scolarisés, <strong>taux natalité élevé</strong>
                  (14,2‰ vs 11‰ France), forte demande logements 4-5 pièces = ville jeune et dynamique.
                </p>
                <p>
                  <strong>Trajets scolaires</strong> : Majorité écoles/collège accessibles moins de 15min à pied depuis quartiers résidentiels.
                  Réseau piétonnier sécurisé (trottoirs larges, passages protégés). <strong>Cadre idéal enfants</strong>.
                </p>
              </div>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quels sont les délais administratifs (permis de construire) à Castanet ?</span>
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>Délai légal permis construire maison individuelle</strong> : 2 mois (Code Urbanisme).
                </p>
                <p className="mb-3">
                  <strong>Délais réels Mairie Castanet-Tolosan (2024-2025)</strong> : 2-3 mois selon secteur et complexité projet.
                </p>
                <ul className="space-y-2 ml-6 mb-3">
                  <li><strong>• Secteurs simples</strong> (Quartier Durable, zones UCB hors périmètre ABF) : <strong>2-2,5 mois</strong> (délai légal respecté)</li>
                  <li><strong>• Secteurs ABF</strong> (proximité Canal du Midi moins de 500m, centre ancien) : <strong>2,5-3 mois</strong> (+2-3 semaines consultation Architecte Bâtiments France obligatoire)</li>
                  <li><strong>• Projets atypiques</strong> (architecture contemporaine forte, emprise sol élevée) : <strong>3 mois</strong> (instruction approfondie services techniques mairie)</li>
                </ul>
                <p className="mb-3">
                  <strong>Retours d'expérience EGB Occitanie</strong> : Mairie Castanet professionnelle et réactive.
                  Services urbanisme disponibles RDV pré-dépôt (conseils PLU avant constitution dossier).
                  <strong>Taux accord 1er dépôt : 87%</strong> nos dossiers (vs 65% moyenne nationale) = maîtrise PLU locale.
                </p>
                <p className="mb-3">
                  <strong>Pièges à éviter</strong> :
                </p>
                <ul className="space-y-2 ml-6 mb-3">
                  <li><strong>• Plans non-conformes PLU 2019</strong> (emprise sol, hauteurs, reculs) = ajournement/refus (30% dossiers particuliers)</li>
                  <li><strong>• Étude géotechnique G2 manquante</strong> (obligatoire loi ELAN sols argileux) = demande pièce complémentaire (+1 mois)</li>
                  <li><strong>• Consultation ABF oubliée</strong> (si moins de 500m Canal) = rejet automatique dossier</li>
                </ul>
                <p>
                  <strong>Conseil EGB Occitanie</strong> : Déléguer constitution dossier permis à constructeur expérimenté local =
                  gain 4-6 semaines vs particulier (dossier complet conforme 1er dépôt, pas demandes pièces complémentaires).
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-gradient-to-br from-green-700 via-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6`}>
            Prêt à Construire Votre Villa à Castanet-Tolosan ?
          </h2>
          <p className="text-xl text-green-50 mb-8 leading-relaxed">
            EGB Occitanie vous accompagne de A à Z : recherche terrain, conception plans architecte,
            construction clés en main, garanties décennales. <strong>Devis détaillé gratuit sous 48h</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0665015882"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              📞 Appel Direct : 06 65 01 58 82
            </a>
            <Link
              href="/contact"
              className="inline-block bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-all border-2 border-white text-lg"
            >
              ✉️ Demande Devis Gratuit
            </Link>
          </div>
          <p className="mt-6 text-green-100 text-sm">
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
            <Link href="/construction-villa-colomiers" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-green-600 hover:text-green-700">
              Construction Colomiers
            </Link>
            <Link href="/construction-villa-blagnac" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-green-600 hover:text-green-700">
              Construction Blagnac
            </Link>
            <Link href="/construction-villa-balma" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-green-600 hover:text-green-700">
              Construction Balma
            </Link>
            <Link href="/construction-villa-tournefeuille" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-green-600 hover:text-green-700">
              Construction Tournefeuille
            </Link>
            <Link href="/renovation" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-green-600 hover:text-green-700">
              Rénovation Toulouse
            </Link>
            <Link href="/extension" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-green-600 hover:text-green-700">
              Extension Maison
            </Link>
            <Link href="/contact" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-green-600 hover:text-green-700">
              Devis Gratuit
            </Link>
            <Link href="/calculateur" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-green-600 hover:text-green-700">
              Calculateur Prix
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
