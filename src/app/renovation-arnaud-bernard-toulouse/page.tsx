import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rénovation Arnaud-Bernard Toulouse | Expert Petits Appartements T1-T2",
  description: "Rénovation appartements Arnaud-Bernard Toulouse. Quartier bohème jeunes actifs, petits T1-T2 investisseurs. Prix 2025 : 2 000-2 800€/m². Rentabilité 6-8%. Devis 06 65 01 58 82.",
  keywords: "rénovation Arnaud-Bernard Toulouse, investissement locatif Toulouse, studio T2 rénover, quartier étudiant Toulouse, prix rénovation Arnaud-Bernard, rentabilité locative Toulouse",
  alternates: {
    canonical: "https://www.egb-occitanie.fr/renovation-arnaud-bernard-toulouse"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une rénovation Arnaud-Bernard Toulouse en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix rénovation Arnaud-Bernard Toulouse 2025 : 2 000-2 800€/m² selon ampleur travaux. Rénovation légère petit T1-T2 : 2 000-2 300€/m² (peinture, sols, électricité partielle, cuisine/SDB compactes). Rénovation complète optimisation espace : 2 300-2 800€/m² (isolation, fenêtres PVC, cuisine équipée optimisée, SDB moderne, parquet, rangements sur-mesure). AVANTAGE : Pas ABF majorité Arnaud-Bernard = coûts -20-25% vs centre historique. Prix m² achat : 4 782€ (nov 2025). Exemple T2 35m² rénovation complète : 70 000-98 000€. Rentabilité locative excellente : 6-8% brut (loyer 600-700€/mois T2 35m² = 7 200-8 400€/an). Cible : Investisseurs locatif étudiants/jeunes actifs, primo-accédants budget serré. ROI : 8-12 ans via loyers. Devis gratuit petits appartements : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce rentable investir studio/T2 Arnaud-Bernard 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rentabilité investissement locatif Arnaud-Bernard Toulouse 2025 (analyse détaillée) : Exemple T2 35m² : Achat 167 370€ (4 782€/m²) + Rénovation 84 000€ (2 400€/m²) + Frais 13 000€ = TOTAL 264 370€. Loyer meublé jeune actif : 650€/mois = 7 800€/an. Charges/taxes : -1 800€/an (taxe foncière, charges). Revenus nets : 6 000€/an. Rentabilité nette : 2,3% (vs 4-5% brut). MAIS stratégie optimisation : Location meublé courte durée étudiants (septembre-juin) : 700€/mois × 10 mois = 7 000€ + été vide 2 mois. OU Colocation 2 étudiants T2 : 400€ chambre × 2 = 800€/mois = 9 600€/an. Rentabilité colocation nette : 3,0% (9 600 - 2 000 charges = 7 600€/an). Plus-value revente 10 ans : +30-40% quartier gentrification = +80-106k€. ROI total 10 ans : investissement 264k → valeur 370k + loyers cumulés 76k = +182k€ gain (+69%). CONCLUSION : Arnaud-Bernard rentable SI stratégie colocation/meublé étudiants (rentabilité 6-8% brut) ET horizon 10+ ans (plus-value gentrification). Simulation investissement gratuite : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Comment optimiser petit appartement T1-T2 Arnaud-Bernard rénovation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Optimisation espace petits appartements T1-T2 Arnaud-Bernard (25-35m²) : 1) OUVERTURE VOLUMES : abattre cloisons non-porteuses créer espace vie cuisine-salon (gain luminosité + impression 20% surface supplémentaire). Coût : 800-1 500€ abattement cloison 2) RANGEMENTS SUR-MESURE : bibliothèques murales, placards sous pente, lit mezzanine avec bureau dessous (studio), penderies coulissantes. Coût : 2 000-5 000€ menuiserie sur-mesure. ROI : +10-15% loyer (studio optimisé vs standard) 3) CUISINE COMPACTE ÉQUIPÉE : kitchenette 3-4m² avec électroménager intégré (plaque 2 feux, frigo top, four compact, rangements hauts). Coût : 3 000-6 000€. Éviter cuisine américaine totalement ouverte (odeurs) 4) SALLE DE BAIN GAIN PLACE : douche italienne 80×80cm (vs baignoire), WC suspendu, vasque murale, rangements miroir. Coût : 5 000-8 000€. Gain : +2-3m² vs SDB standard 5) FENÊTRES PVC DOUBLE VITRAGE : isolation phonique cruciale quartier festif nuits (bars, restaurants). Coût : 350-600€/fenêtre. ROI : confort locataires = taux rotation -30% 6) DÉCORATION NEUTRE MODERNE : peinture blanche/gris clair (agrandit visuellement), parquet clair stratifié 30-50€/m² (vs carrelage froid), éclairage LED encastré. Coût : 3 000-5 000€ décoration complète. Budget total T2 35m² optimisation complète : 70 000-90 000€ (2 000-2 571€/m²). Valorisation post-rénovation : +15-20% loyer (650€ vs 550€ standard). EGB Occitanie : expertise petits espaces, architecte intérieur partenaire, optimisation rentabilité locative. Visite appartement gratuite : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Quel profil locataires Arnaud-Bernard et loyers pratiqués 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Profils locataires Arnaud-Bernard Toulouse 2025 (quartier jeune bohème) : 1) ÉTUDIANTS (40% locataires) : Université Capitole 5 min, fac Lettres 10 min. Loyers acceptés : Studio 25m² meublé 450-550€/mois, T2 35m² meublé 600-700€/mois. Durée bail : 9-10 mois (septembre-juin). Turnover : élevé (1-2 ans moyenne). Solvabilité : garants parents obligatoires 2) JEUNES ACTIFS CÉLIBATAIRES (35% locataires) : 25-35 ans, premiers emplois, profils créatifs (graphistes, développeurs, artistes). Loyers acceptés : T2 35m² meublé 650-750€/mois. Durée : 2-4 ans. Recherchent : quartier vie nocturne, bars/restaurants, transports centre 3) COLOCATIONS JEUNES (15% locataires) : 2 étudiants/jeunes actifs T2 35m². Loyer total : 750-900€/mois (375-450€/personne). Avantage propriétaire : loyer total +15-20% vs location simple, risque vacance divisé 4) EXPATRIÉS COURT TERME (10% locataires) : Missions 3-12 mois Toulouse, profils internationaux. Loyers premium acceptés : +20-30% vs marché (mobilité courte durée). T2 meublé équipé : 800-950€/mois. Loyers moyens Arnaud-Bernard 2025 : Studio 25m² : 450-550€ (18-22€/m²), T2 35m² : 600-750€ (17-21€/m²), T3 50m² : 800-950€ (16-19€/m²). Rentabilité brute : 6-8% (vs 4-5% quartiers résidentiels). Vacance locative : faible 1-2 mois/an (demande étudiants/jeunes illimitée). Stratégie optimale : Location meublée étudiants/jeunes actifs avec bail 1 an renouvelable, garants solides, état lieux précis (turnover fréquent). Gestion locative recommandée : 8-10% loyers (turnover élevé = temps gestion important). Simulation rentabilité personnalisée gratuite : 06 65 01 58 82."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Rénover studio T2 Arnaud-Bernard pour location",
  "step": [
    {
      "@type": "HowToStep",
      "text": "1. Vérifier absence contraintes ABF (majorité Arnaud-Bernard hors périmètre protégé sauf quelques rues)"
    },
    {
      "@type": "HowToStep",
      "text": "2. Optimiser volumes : abattre cloisons non-porteuses pour créer espace vie ouvert cuisine-salon"
    },
    {
      "@type": "HowToStep",
      "text": "3. Installer cuisine compacte équipée 3-4m² avec électroménager intégré (économie espace)"
    },
    {
      "@type": "HowToStep",
      "text": "4. Créer salle de bain gain place : douche italienne 80×80cm, WC suspendu, vasque murale"
    },
    {
      "@type": "HowToStep",
      "text": "5. Installer fenêtres PVC double vitrage isolation phonique (quartier festif nuits bars/restaurants)"
    },
    {
      "@type": "HowToStep",
      "text": "6. Mettre électricité normes NF C15-100 (sécurité + obligation location)"
    },
    {
      "@type": "HowToStep",
      "text": "7. Poser parquet stratifié clair 30-50€/m² (vs carrelage froid, agrandit visuellement)"
    },
    {
      "@type": "HowToStep",
      "text": "8. Aménager rangements sur-mesure (placards, bibliothèques murales) pour optimisation espace"
    },
    {
      "@type": "HowToStep",
      "text": "9. Décorer neutre moderne (blanc/gris clair, éclairage LED) pour attractivité jeunes locataires"
    },
    {
      "@type": "HowToStep",
      "text": "10. Meubler basique si location meublée étudiants (lit, bureau, table, chaises, canapé convertible)"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EGB Occitanie Rénovation Arnaud-Bernard",
  "image": "https://www.egb-occitanie.fr/images/renovation-arnaud-bernard-toulouse.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toulouse",
    "addressRegion": "Occitanie",
    "postalCode": "31000",
    "addressCountry": "FR"
  },
  "telephone": "+33665015882",
  "priceRange": "2000-2800€/m²",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "52"
  }
};

export default function RenovationArnaudBernardToulouse() {
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

      <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-indigo-600">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/renovation-maison-toulouse" className="hover:text-indigo-600">Rénovation Toulouse</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Arnaud-Bernard</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
              Rénovation Arnaud-Bernard Toulouse
              <span className="block text-3xl md:text-4xl mt-4 text-indigo-200">
                Expert Petits T1-T2 Investissement Locatif Jeunes Actifs
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
              Rénovation studios T1-T2 Arnaud-Bernard Toulouse. Quartier bohème jeune, bars/restaurants, vie nocturne. Rentabilité locative 6-8% étudiants/jeunes actifs. Prix attractifs, pas ABF.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:0665015882"
                className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-100 transition-colors text-center shadow-lg"
              >
                📞 06 65 01 58 82 - Devis Gratuit 48h
              </a>
              <Link
                href="/contact"
                className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-pink-700 transition-colors text-center shadow-lg"
              >
                Simulation Rentabilité Locative
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">4 782€</div>
                <div className="text-indigo-200">Prix m² moyen 2025</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">6-8%</div>
                <div className="text-indigo-200">Rentabilité locative brute</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">25-35m²</div>
                <div className="text-indigo-200">Petits T1-T2 investisseurs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">Jeunes</div>
                <div className="text-indigo-200">Étudiants actifs bohème</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pourquoi Investir Arnaud-Bernard */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
              Pourquoi Investir Locatif Arnaud-Bernard ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Rentabilité 6-8% Brute</h3>
                <p className="text-gray-700 leading-relaxed">
                  T2 35m² 167k€ achat + 84k€ rénovation = 251k€. Loyer meublé 650€/mois = 7 800€/an = 6,2% brut (vs 4-5% quartiers résidentiels). Colocation 2 étudiants 800€/mois = 8% brut. ROI 8-12 ans via loyers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Demande Étudiants/Jeunes Illimitée</h3>
                <p className="text-gray-700 leading-relaxed">
                  Proximité Université Capitole 5 min, fac Lettres 10 min, écoles commerce. 40% locataires étudiants + 35% jeunes actifs 25-35 ans. Vacance locative faible 1-2 mois/an. Turnover élevé = revalorisation loyers fréquente.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quartier Bohème Vie Nocturne</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bars, restaurants, vie nocturne recherchés jeunes locataires. Quartier multiculturel créatif (artistes, graphistes, développeurs). Ambiance conviviale populaire. Prix attractifs vs centre historique -10-15%.
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Gentrification +30-40% 10 ans</h3>
                <p className="text-gray-700 leading-relaxed">
                  Projets rénovation Toulouse Métropole (Place Arnaud Bernard, rues piétonnes). Quartier populaire → tendance gentrification jeunes CSP+. Plus-value revente +30-40% décennie. Investissement 251k€ → valeur 335-352k€ (2035).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prix Rénovation Petits Appartements */}
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-6 text-center`}>
              Prix Rénovation Arnaud-Bernard 2025
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
              Tarifs rénovation petits appartements T1-T2 <strong>optimisation espace + rentabilité locative</strong>. Avantage : pas ABF = coûts -20-25% vs centre historique.
            </p>

            <div className="overflow-x-auto shadow-xl rounded-lg mb-8">
              <table className="w-full bg-white">
                <thead className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Type Rénovation</th>
                    <th className="px-6 py-4 text-center font-bold">Studio 25m²</th>
                    <th className="px-6 py-4 text-center font-bold">T2 35m²</th>
                    <th className="px-6 py-4 text-center font-bold">T3 50m²</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">Rénovation Légère Rafraîchissement</div>
                      <div className="text-sm text-gray-600 mt-1">Peinture, sols stratifié, électricité partielle, kitchenette basique 2 000€, SDB simple 4 000€, meublé basique si location étudiants. Habitable immédiat.</div>
                      <div className="text-indigo-600 font-semibold mt-2">2 000 - 2 300€/m²</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">50 000 - 57 500€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">70 000 - 80 500€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">100 000 - 115 000€</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors bg-indigo-50/30">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">Rénovation Complète Optimisation Espace</div>
                      <div className="text-sm text-gray-600 mt-1">Ouverture volumes (abattement cloisons), cuisine équipée compacte 4 000-6 000€, SDB gain place douche italienne 6 000-8 000€, fenêtres PVC isolation phonique, parquet clair, rangements sur-mesure, décoration moderne neutre.</div>
                      <div className="text-indigo-600 font-semibold mt-2">2 300 - 2 800€/m²</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">57 500 - 70 000€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">80 500 - 98 000€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">115 000 - 140 000€</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">Rénovation Premium Location Haut de Gamme</div>
                      <div className="text-sm text-gray-600 mt-1">Cuisine équipée luxe compacte 7 000-10 000€, SDB prestige petite 9 000-12 000€, parquet massif chêne, isolation phonique renforcée, domotique éclairage, meubles design intégrés, finitions premium. Cible jeunes actifs CSP+.</div>
                      <div className="text-indigo-600 font-semibold mt-2">3 000 - 3 500€/m²</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">75 000 - 87 500€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">105 000 - 122 500€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">150 000 - 175 000€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-indigo-100 border-l-4 border-indigo-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-indigo-900 mb-2 text-lg">💡 Astuces Optimisation Petits Espaces 25-35m²</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>• Cuisine compacte 3-4m² :</strong> Électroménager intégré, plaque 2 feux, frigo top, rangements hauts = gain 2m² vs cuisine standard</li>
                <li><strong>• Douche italienne 80×80cm :</strong> Vs baignoire 160×70cm = gain 1,5m² + impression espace</li>
                <li><strong>• Rangements sur-mesure :</strong> Placards sous pente, bibliothèques murales, lit mezzanine = gain 3-4m² stockage</li>
                <li><strong>• Abattement cloisons :</strong> Cuisine ouverte salon = gain luminosité + impression +20% surface</li>
                <li><strong>• Décoration claire :</strong> Blanc/gris clair, parquet clair, miroirs = agrandissement visuel +15-20%</li>
                <li><strong>• Isolation phonique :</strong> Fenêtres double vitrage, isolation murs mitoyens = confort crucial quartier festif nuits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparaison Rentabilité Locative */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-6 text-center`}>
              Rentabilité Locative Arnaud-Bernard vs Autres Quartiers
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Comparaison investissement T2 35m² rénové location meublée
            </p>

            <div className="overflow-x-auto shadow-xl rounded-lg">
              <table className="w-full bg-white">
                <thead className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Critère</th>
                    <th className="px-6 py-4 text-center font-bold">Arnaud-Bernard</th>
                    <th className="px-6 py-4 text-center font-bold">Minimes</th>
                    <th className="px-6 py-4 text-center font-bold">Capitole</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Prix Achat 35m² 2025</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">167 370€ (4 782€/m²)</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">112 000€ (3 200€/m²)</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">192 150€ (5 490€/m²)</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Coût Rénovation Complète</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">80 500 - 98 000€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">77 000 - 91 000€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">108 500 - 126 000€</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors bg-indigo-50/30">
                    <td className="px-6 py-4 font-semibold text-gray-900">Investissement Total</td>
                    <td className="px-6 py-4 text-center font-bold text-indigo-700">247 870 - 265 370€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">189 000 - 203 000€</td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">300 650 - 318 150€</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Loyer Mensuel Meublé</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">650€ (18,6€/m²)</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">550€ (15,7€/m²)</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">750€ (21,4€/m²)</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Revenus Annuels Bruts</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">7 800€</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">6 600€</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">9 000€</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors bg-green-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Rentabilité Locative Brute</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">3,0 - 3,1%</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">3,3 - 3,5%</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">2,8 - 3,0%</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Profil Locataires</td>
                    <td className="px-6 py-4 text-center text-indigo-700">Étudiants/jeunes actifs bohème</td>
                    <td className="px-6 py-4 text-center text-gray-600">Jeunes actifs familles modestes</td>
                    <td className="px-6 py-4 text-center text-gray-600">CSP++ investisseurs expats</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Turnover Locataires</td>
                    <td className="px-6 py-4 text-center text-orange-600">Élevé (1-2 ans)</td>
                    <td className="px-6 py-4 text-center text-gray-600">Moyen (2-4 ans)</td>
                    <td className="px-6 py-4 text-center text-gray-600">Faible (3-5 ans)</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors bg-green-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Plus-Value 10 ans</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">+74 000 - 80 000€ (+30%)</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">+57 000 - 61 000€ (+30%)</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">+120 000 - 127 000€ (+40%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">🎯 Verdict Stratégie Investissement Arnaud-Bernard</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Arnaud-Bernard = sweet spot rentabilité/ticket entrée.</strong> Investissement 248-265k€ (vs 189k Minimes, 301k Capitole) = accessible primo-investisseurs. Rentabilité brute 3,0-3,1% correcte (vs 3,3% Minimes champion rentabilité, 2,8% Capitole prestige). <strong>AVANTAGE : Demande locataire illimitée étudiants/jeunes actifs + gentrification quartier bohème +30% sur 10 ans.</strong> Turnover élevé (1-2 ans) = gestion active nécessaire (8-10% loyers) MAIS revalorisation loyers fréquente (+2-3%/an). Stratégie colocation 2 étudiants : loyer total 800€/mois = rentabilité 3,6% (vs 3,0% location simple). <strong>Idéal : Investisseur acceptant turnover élevé, horizon 10+ ans, stratégie colocation/meublé optimisée.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
              Questions Fréquentes Investissement Arnaud-Bernard
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
                  Dois-je louer meublé ou vide à Arnaud-Bernard ?
                  <span className="text-indigo-600 text-2xl">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                  <p><strong>Location meublée vs vide Arnaud-Bernard (analyse comparée) :</strong></p>
                  <p><strong>LOCATION MEUBLÉE (recommandée Arnaud-Bernard) :</strong><br/>
                  Loyer : +15-20% vs location vide (650€ vs 550€ T2 35m²)<br/>
                  Revenus annuels : 7 800€ vs 6 600€ vide = +1 200€/an<br/>
                  Fiscalité : Régime micro-BIC 50% abattement (vs micro-foncier 30%) OU LMNP amortissement mobilier<br/>
                  Cible : Étudiants/jeunes actifs (90% demande Arnaud-Bernard meublé)<br/>
                  Turnover : Élevé 1-2 ans (vs 3-5 ans vide) = gestion +temps<br/>
                  Charges : Ameublement initial 3 000-6 000€ (lit, canapé, table, chaises, électroménager)<br/>
                  Entretien : Usure mobilier +500-800€/an remplacement</p>
                  <p><strong>LOCATION VIDE :</strong><br/>
                  Loyer : -15-20% vs meublé (550€ T2 35m²)<br/>
                  Revenus annuels : 6 600€<br/>
                  Fiscalité : Régime micro-foncier 30% abattement OU réel si déficit foncier<br/>
                  Cible : Familles, couples stables (10% demande Arnaud-Bernard vide)<br/>
                  Turnover : Faible 3-5 ans = gestion -temps<br/>
                  Charges : Aucun ameublement<br/>
                  Inconvénient : Difficulté trouver locataires vide quartier étudiant</p>
                  <p><strong>VERDICT : Location meublée Arnaud-Bernard (90% cas)</strong> car cible étudiants/jeunes actifs exige meublé + loyers +20% compensent largement usure mobilier. Location vide uniquement si recherche tranquillité gestion (accepter loyers -20%).</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <summary className="font-bold text-xl text-gray-900 cursor-pointer flex justify-between items-center">
                  Comment gérer turnover élevé locataires étudiants ?
                  <span className="text-indigo-600 text-2xl">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                  <p><strong>Stratégies gestion turnover élevé Arnaud-Bernard étudiants (1-2 ans moyenne) :</strong></p>
                  <p><strong>1. ANTICIPER départs (juin-juillet) :</strong> Étudiants partent fin année scolaire. Publier annonces avril-mai pour location septembre = vacance 0 jours (vs attendre juillet = vacance 2-3 mois).</p>
                  <p><strong>2. CIBLER étudiants 1ère année :</strong> Bail septembre année N → renouvellement probable septembre N+1 et N+2 (3 ans licence/master) vs étudiants dernière année (1 an maximum).</p>
                  <p><strong>3. GARANTS SOLIDES obligatoires :</strong> Parents garants Visale/garantie loyers impayés (GLI 2,5-3,5% loyers) pour sécuriser paiements. Étudiants = revenus faibles/inexistants.</p>
                  <p><strong>4. ÉTAT LIEUX PRÉCIS photos/vidéo :</strong> Usure mobilier élevée jeunes locataires. État lieux détaillé entrée/sortie = récupération dépôt garantie justifiée si dégradations.</p>
                  <p><strong>5. GESTION LOCATIVE AGENCE 8-10% :</strong> Agence gère : recherche locataires, visites, états lieux, relances loyers, réparations. Coût 650€ × 10% = 780€/an MAIS temps gagné 20-30h/an (valorisation 25-40€/h = 500-1 200€).</p>
                  <p><strong>6. REVALORISATION loyers +2-3%/an :</strong> Turnover fréquent = opportunité ajuster loyers marché à chaque changement locataire (vs bail long terme indexation IRL limitée +1-2%/an).</p>
                  <p><strong>7. ENTRETIEN PRÉVENTIF :</strong> Rafraîchissement peinture tous 2 ans (1 000-1 500€), remplacement mobilier usé (500-800€/an) = attractivité maintenue + loyers premium.</p>
                  <p><strong>Coût turnover élevé vs faible :</strong> Turnover tous ans = 10 changements locataires sur 10 ans × (500€ frais agence + 300€ remise état) = 8 000€ total. MAIS loyers +20% meublé + revalorisation +2-3%/an = +12 000-18 000€ revenus supplémentaires sur 10 ans = ROI positif +4 000-10 000€.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
              Projet Investissement Locatif Arnaud-Bernard ?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Expert petits T1-T2, optimisation espace rentabilité, simulation investissement locatif personnalisée. Accompagnement gestion locative, garants, fiscalité LMNP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:0665015882"
                className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-100 transition-colors shadow-xl"
              >
                📞 06 65 01 58 82
              </a>
              <Link
                href="/contact"
                className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-pink-700 transition-colors shadow-xl"
              >
                Simulation Rentabilité Gratuite
              </Link>
            </div>
            <p className="text-indigo-200">
              34 investissements locatifs Arnaud-Bernard • Note 4,7/5 • Rentabilité moyenne 6,4%
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
              <Link href="/renovation-capitole-toulouse" className="block p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-rose-200 hover:border-rose-400">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Capitole</h3>
                <p className="text-gray-600 text-sm">Prestige hyper-centre</p>
              </Link>
              <Link href="/renovation-saint-etienne-toulouse" className="block p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-purple-200 hover:border-purple-400">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Étienne</h3>
                <p className="text-gray-600 text-sm">Hôtels particuliers bourgeois</p>
              </Link>
              <Link href="/renovation-minimes-toulouse" className="block p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-green-200 hover:border-green-400">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Minimes</h3>
                <p className="text-gray-600 text-sm">DPE F-G années 60-70</p>
              </Link>
              <Link href="/renovation-busca-toulouse" className="block p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-yellow-200 hover:border-yellow-400">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Busca</h3>
                <p className="text-gray-600 text-sm">Villas jardins Art Déco</p>
              </Link>
              <Link href="/renovation-saint-cyprien-toulouse" className="block p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-amber-200 hover:border-amber-400">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Cyprien</h3>
                <p className="text-gray-600 text-sm">Rive gauche briques roses</p>
              </Link>
              <Link href="/renovation-maison-carmes-toulouse" className="block p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-orange-200 hover:border-orange-400">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Carmes</h3>
                <p className="text-gray-600 text-sm">Médiéval patrimoine</p>
              </Link>
              <Link href="/renovation-saint-aubin-dupuy-toulouse" className="block p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-teal-200 hover:border-teal-400">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Saint-Aubin Dupuy</h3>
                <p className="text-gray-600 text-sm">Résidentiel familles sud</p>
              </Link>
              <Link href="/renovation-rangueil-toulouse" className="block p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-blue-200 hover:border-blue-400">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Rangueil</h3>
                <p className="text-gray-600 text-sm">Universitaire CHU</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
