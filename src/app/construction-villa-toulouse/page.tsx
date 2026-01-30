import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Construction Villa Toulouse | Constructeur Maison Sur-Mesure Haute-Garonne",
  description:
    "Construction de villa neuve à Toulouse et Haute-Garonne. Architecte partenaire, délais garantis, qualité premium. Devis gratuit sous 48h. 15 ans d'expérience.",
  keywords: [
    "construction villa toulouse",
    "constructeur maison toulouse",
    "villa sur-mesure toulouse",
    "construction neuve haute-garonne",
    "architecte maison toulouse",
    "villa haut de gamme toulouse",
    "constructeur villa occitanie",
    "maison contemporaine toulouse",
  ],
  openGraph: {
    title: "Construction Villa Toulouse | EGB Occitanie",
    description:
      "Spécialiste construction villa neuve à Toulouse. Architectes partenaires, garantie décennale, 0 retard. Devis gratuit.",
    url: "https://egb-occitanie.fr/construction-villa-toulouse",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une construction de villa à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix d'une construction de villa à Toulouse varie entre 2 500€ et 4 500€/m² selon le niveau de finition. Pour une villa de 150m², comptez entre 375 000€ et 675 000€. Ce tarif inclut l'architecte, les fondations, la structure, les finitions haut de gamme et les garanties légales."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour construire une villa à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La construction d'une villa à Toulouse prend entre 10 et 16 mois : 2-3 mois d'études et permis de construire, 8-12 mois de chantier, 1 mois de finitions et réception. EGB Occitanie garantit le respect des délais contractuels avec 0 retard sur nos chantiers."
      }
    },
    {
      "@type": "Question",
      "name": "Quels quartiers de Toulouse pour construire une villa ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les meilleurs quartiers pour construire à Toulouse : Castanet-Tolosan, Ramonville, Balma, Quint-Fonsegrives, Colomiers (zones pavillonnaires). Prix terrain : 300-600€/m². Nous intervenons dans toute la Haute-Garonne avec nos architectes partenaires."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles garanties pour une construction de villa neuve ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toute construction neuve bénéficie de 3 garanties légales : garantie de parfait achèvement (1 an), garantie biennale (2 ans, équipements), garantie décennale (10 ans, structure). EGB Occitanie est couvert par une assurance décennale et responsabilité civile professionnelle."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un architecte pour construire une villa à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'architecte est obligatoire pour toute construction supérieure à 150m² de surface de plancher. Même en dessous, nous recommandons vivement de travailler avec un architecte pour optimiser le projet, gérer le permis de construire et garantir la qualité architecturale. EGB Occitanie travaille avec 5+ architectes toulousains."
      }
    }
  ]
};

export default function ConstructionVillaToulouse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-amber-600" />
              <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
                Construction Neuve
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-8 leading-[1.1]">
              Construction de Villa
              <br />
              <span className="text-amber-800">à Toulouse</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-700 font-light leading-relaxed mb-12 max-w-3xl">
              Maîtres d'œuvre de villas sur-mesure à Toulouse et en Haute-Garonne.
              Architectes partenaires, délais respectés, garantie décennale.
              <strong className="font-medium text-stone-900"> Devis gratuit sous 48h.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Obtenir un devis gratuit
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
                <div className="text-3xl font-light text-amber-900 mb-2">15+</div>
                <div className="text-sm text-amber-800">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">0</div>
                <div className="text-sm text-amber-800">Retard de chantier</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">5+</div>
                <div className="text-sm text-amber-800">Architectes partenaires</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-8">
              Pourquoi construire une villa neuve à Toulouse ?
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Toulouse et sa périphérie offrent un cadre de vie exceptionnel pour la construction d'une villa sur-mesure.
                Entre le dynamisme économique de la métropole, la qualité de vie toulousaine et la proximité des Pyrénées,
                construire sa villa neuve à Toulouse représente un investissement patrimonial durable.
              </p>

              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Contrairement à l'achat d'une maison existante, la construction neuve vous permet de créer <strong>exactement
                la villa dont vous rêvez</strong> : architecture contemporaine, maison traditionnelle en brique rose toulousaine,
                villa moderne avec piscine, ou maison passive aux performances énergétiques optimales.
              </p>

              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                <strong>EGB Occitanie</strong> vous accompagne de A à Z dans votre projet de construction : du choix du terrain
                à la remise des clés, en passant par la conception architecturale avec nos architectes partenaires toulousains,
                le permis de construire, et le suivi de chantier hebdomadaire.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <p className="text-base text-stone-800 mb-0">
                  <strong className="font-semibold">Notre engagement :</strong> Tous nos chantiers de construction sont livrés
                  dans les délais contractuels. <strong>0 retard</strong> sur les 50+ villas construites ces 5 dernières années.
                </p>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Les avantages de la construction neuve vs. l'ancien
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Personnalisation totale :</strong> Choisissez l'architecture, les matériaux, la distribution des pièces, les finitions selon vos goûts et votre mode de vie</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Performance énergétique RE2020 :</strong> Économies de 50% à 70% sur les factures d'énergie comparé à une maison ancienne</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Garanties légales :</strong> Garantie décennale (10 ans), biennale (2 ans), parfait achèvement (1 an) - sécurité juridique totale</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Aucuns travaux pendant 10-15 ans :</strong> Tout est neuf, aux normes, garanti. Pas de surprises ni de rénovations coûteuses</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Frais de notaire réduits :</strong> 2-3% sur le terrain (vs 7-8% dans l'ancien), économie de 15 000€ à 30 000€</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Valeur patrimoniale :</strong> Une villa neuve conserve sa valeur et se valorise mieux qu'une maison ancienne nécessitant rénovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prix Section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Prix construction villa à Toulouse : budget détaillé
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Le prix d'une construction de villa à Toulouse varie selon plusieurs facteurs : surface habitable,
                niveau de finition, architecture, complexité du terrain, et choix des matériaux. Voici les fourchettes
                de prix constatées en 2024-2025 en Haute-Garonne.
              </p>

              <h3 className="text-2xl font-light text-stone-900 mt-10 mb-6">
                Grille tarifaire construction villa (€/m²)
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 border border-stone-200">
                  <div className="text-sm uppercase tracking-wider text-amber-800 mb-3">Finition Standard</div>
                  <div className="text-4xl font-light text-stone-900 mb-2">2 500€</div>
                  <div className="text-amber-800 mb-4">/m²</div>
                  <ul className="text-sm text-stone-700 space-y-2">
                    <li>• Matériaux qualité standard</li>
                    <li>• Carrelage, parquet flottant</li>
                    <li>• Cuisine équipée basique</li>
                    <li>• Salle de bain standard</li>
                    <li>• Garantie décennale incluse</li>
                  </ul>
                </div>

                <div className="bg-amber-800 p-6 border border-stone-900 relative">
                  <div className="absolute -top-3 left-6 bg-stone-700 text-white text-xs px-3 py-1 uppercase tracking-wider">
                    Recommandé
                  </div>
                  <div className="text-sm uppercase tracking-wider text-stone-400 mb-3">Finition Premium</div>
                  <div className="text-4xl font-light text-white mb-2">3 500€</div>
                  <div className="text-stone-300 mb-4">/m²</div>
                  <ul className="text-sm text-stone-300 space-y-2">
                    <li>• Matériaux haut de gamme</li>
                    <li>• Parquet massif, carrelage grès</li>
                    <li>• Cuisine sur-mesure</li>
                    <li>• Salles de bain design</li>
                    <li>• Domotique, VMC double-flux</li>
                  </ul>
                </div>

                <div className="bg-white p-6 border border-stone-200">
                  <div className="text-sm uppercase tracking-wider text-amber-800 mb-3">Finition Luxe</div>
                  <div className="text-4xl font-light text-stone-900 mb-2">4 500€</div>
                  <div className="text-amber-800 mb-4">/m²</div>
                  <ul className="text-sm text-stone-700 space-y-2">
                    <li>• Matériaux d'exception</li>
                    <li>• Marbre, pierres naturelles</li>
                    <li>• Cuisine architecte</li>
                    <li>• Spa, hammam possible</li>
                    <li>• Domotique avancée</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Exemples de budgets par surface
              </h3>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-stone-900">
                      <th className="py-3 px-4 text-stone-900 font-medium">Surface villa</th>
                      <th className="py-3 px-4 text-stone-900 font-medium">Budget Standard</th>
                      <th className="py-3 px-4 text-stone-900 font-medium">Budget Premium</th>
                      <th className="py-3 px-4 text-stone-900 font-medium">Budget Luxe</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-700">
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4">100 m²</td>
                      <td className="py-3 px-4">250 000€</td>
                      <td className="py-3 px-4">350 000€</td>
                      <td className="py-3 px-4">450 000€</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4">150 m²</td>
                      <td className="py-3 px-4">375 000€</td>
                      <td className="py-3 px-4">525 000€</td>
                      <td className="py-3 px-4">675 000€</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4">200 m²</td>
                      <td className="py-3 px-4">500 000€</td>
                      <td className="py-3 px-4">700 000€</td>
                      <td className="py-3 px-4">900 000€</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4">250 m²</td>
                      <td className="py-3 px-4">625 000€</td>
                      <td className="py-3 px-4">875 000€</td>
                      <td className="py-3 px-4">1 125 000€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-stone-100 p-6 rounded-sm mb-8">
                <h4 className="text-lg font-medium text-stone-900 mb-3">Ces prix incluent :</h4>
                <ul className="grid md:grid-cols-2 gap-3 text-stone-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Honoraires architecte
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Études techniques (thermique, sol)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Permis de construire
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Fondations et structure
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Gros œuvre et second œuvre
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Toutes finitions intérieures
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Équipements (cuisine, SdB)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Garanties légales (décennale, RC)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Raccordements (eau, élec, assain.)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Suivi de chantier hebdomadaire
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <p className="text-base text-amber-900 mb-0">
                  <strong className="font-semibold">À prévoir en plus :</strong> Achat du terrain (300€ à 600€/m² selon secteur),
                  frais de notaire terrain (2-3%), taxe d'aménagement (environ 5 000€ à 15 000€), viabilisation si nécessaire,
                  aménagements extérieurs (terrasse, piscine, clôture).
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl"
              >
                Recevoir un devis personnalisé gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quartiers Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Où construire sa villa à Toulouse et en Haute-Garonne ?
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-10">
                Le choix du quartier et de la commune est déterminant pour votre projet de construction.
                Voici notre sélection des meilleures zones pour construire une villa neuve autour de Toulouse,
                avec prix des terrains et spécificités de chaque secteur.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    name: "Castanet-Tolosan",
                    price: "400-550€/m²",
                    description: "Commune premium à 10km de Toulouse. Écoles réputées, cadre de vie exceptionnel, accès rapide centre-ville.",
                    links: ["/construction-villa-castanet-tolosan"]
                  },
                  {
                    name: "Ramonville-Saint-Agne",
                    price: "450-600€/m²",
                    description: "Proximité immédiate universités et pôles d'emploi. Métro ligne B. Ville verte et dynamique.",
                    links: ["/construction-villa-ramonville"]
                  },
                  {
                    name: "Balma",
                    price: "400-550€/m²",
                    description: "Secteur familial prisé, zones pavillonnaires de qualité. Écoles, commerces, espaces verts.",
                    links: ["/construction-villa-balma"]
                  },
                  {
                    name: "Quint-Fonsegrives",
                    price: "350-500€/m²",
                    description: "Cadre résidentiel calme à 15 min de Toulouse. Terrains spacieux, environnement préservé.",
                    links: ["/construction-villa-quint-fonsegrives"]
                  },
                  {
                    name: "Colomiers",
                    price: "350-480€/m²",
                    description: "2ème ville de Haute-Garonne. Infrastructures complètes, zones pavillonnaires étendues.",
                    links: ["/construction-villa-colomiers"]
                  },
                  {
                    name: "L'Union",
                    price: "380-520€/m²",
                    description: "Commune résidentielle prisée au nord-est. Accès rapide Airbus et centre Toulouse.",
                    links: ["/construction-villa-lunion"]
                  },
                  {
                    name: "Pibrac",
                    price: "330-450€/m²",
                    description: "Village de charme à l'ouest de Toulouse. Cadre authentique, château historique.",
                    links: ["/construction-villa-pibrac"]
                  },
                  {
                    name: "Saint-Orens-de-Gameville",
                    price: "400-550€/m²",
                    description: "Secteur recherché à l'est. Qualité de vie, écoles, proximité Labège et Canal du Midi.",
                    links: ["/construction-villa-saint-orens"]
                  }
                ].map((quartier) => (
                  <div key={quartier.name} className="bg-stone-50 p-6 border border-stone-200">
                    <h3 className="text-xl font-medium text-stone-900 mb-2">{quartier.name}</h3>
                    <div className="text-sm text-amber-800 mb-3 font-medium">{quartier.price}</div>
                    <p className="text-stone-700 mb-4 text-base leading-relaxed">{quartier.description}</p>
                    {/* Internal link placeholder - pages to create */}
                  </div>
                ))}
              </div>

              <div className="bg-amber-800 text-white p-8 rounded-sm mb-8">
                <h3 className="text-2xl font-light mb-4">Notre service recherche de terrain</h3>
                <p className="text-stone-300 mb-6 leading-relaxed">
                  Vous n'avez pas encore trouvé votre terrain ? EGB Occitanie vous accompagne dans la recherche
                  et l'analyse de terrains constructibles : étude de sol, PLU, viabilisation, orientation, contraintes urbanistiques.
                  Nous travaillons avec les meilleures agences immobilières toulousaines.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white border-b border-white/30 hover:border-white transition-colors pb-1"
                >
                  Être accompagné pour trouver un terrain
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Les étapes de votre projet de construction
            </h2>

            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Premier rendez-vous et étude de faisabilité",
                  duration: "1 semaine",
                  description: "Rencontre dans nos bureaux ou à votre domicile. Écoute de votre projet, analyse du terrain (si déjà acquis), budget, contraintes PLU. Étude de faisabilité gratuite et sans engagement."
                },
                {
                  number: "02",
                  title: "Conception architecturale avec notre architecte partenaire",
                  duration: "4-6 semaines",
                  description: "Élaboration des plans avec un architecte toulousain selon vos souhaits. Plans 2D, perspectives 3D, choix des matériaux. Plusieurs itérations jusqu'à validation finale du projet."
                },
                {
                  number: "03",
                  title: "Dépôt permis de construire et études techniques",
                  duration: "2-3 mois",
                  description: "Constitution et dépôt du permis de construire en mairie. Études thermiques RE2020, étude de sol G2, dimensionnement structure. Instruction du permis par les services urbanisme (délai légal 2 mois)."
                },
                {
                  number: "04",
                  title: "Signature du contrat de construction (CCMI)",
                  duration: "1 semaine",
                  description: "Signature du Contrat de Construction de Maison Individuelle (CCMI) avec garanties légales : prix forfaitaire, délai garanti, livraison conforme, garantie décennale. Ouverture du compte séquestre."
                },
                {
                  number: "05",
                  title: "Démarrage et suivi du chantier",
                  duration: "8-12 mois",
                  description: "Implantation, fondations, élévation murs, charpente, couverture, menuiseries, électricité, plomberie, isolation, plaques de plâtre, carrelage, peinture, cuisine, salles de bain. Point chantier hebdomadaire avec compte-rendu photo."
                },
                {
                  number: "06",
                  title: "Réception des travaux et remise des clés",
                  duration: "1 journée",
                  description: "Visite de réception en votre présence et celle de l'architecte. Vérification conformité, levée des éventuelles réserves (finitions mineures). Signature du procès-verbal de réception et remise des clés de votre villa."
                }
              ].map((step) => (
                <div key={step.number} className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="text-5xl font-light text-stone-300">{step.number}</div>
                  </div>
                  <div className="flex-grow pt-2">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-medium text-stone-900">{step.title}</h3>
                      <span className="text-sm text-amber-800 bg-stone-100 px-3 py-1 rounded-full whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-stone-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-amber-800 text-white p-8 rounded-sm">
              <h3 className="text-2xl font-light mb-4">Durée totale du projet</h3>
              <p className="text-stone-300 text-lg mb-2">
                <strong className="text-white font-medium">10 à 16 mois</strong> de la première rencontre à la remise des clés
              </p>
              <p className="text-stone-400 text-base">
                Dont 2-3 mois d'études et permis, 8-12 mois de chantier, 1 mois de finitions et réception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Questions fréquentes construction villa Toulouse
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Quel est le prix d'une construction de villa à Toulouse ?",
                  answer: "Le prix d'une construction de villa à Toulouse varie entre 2 500€ et 4 500€/m² selon le niveau de finition. Pour une villa de 150m², comptez entre 375 000€ et 675 000€. Ce tarif inclut l'architecte, les fondations, la structure, les finitions haut de gamme et les garanties légales. À cela s'ajoute l'achat du terrain (300-600€/m² selon secteur)."
                },
                {
                  question: "Combien de temps pour construire une villa à Toulouse ?",
                  answer: "La construction d'une villa à Toulouse prend entre 10 et 16 mois : 2-3 mois d'études et permis de construire, 8-12 mois de chantier, 1 mois de finitions et réception. EGB Occitanie garantit le respect des délais contractuels avec 0 retard sur nos chantiers grâce à une planification rigoureuse et un suivi hebdomadaire."
                },
                {
                  question: "Quels quartiers de Toulouse pour construire une villa ?",
                  answer: "Les meilleurs quartiers pour construire à Toulouse : Castanet-Tolosan, Ramonville, Balma, Quint-Fonsegrives, Colomiers, L'Union, Pibrac, Saint-Orens. Prix terrain : 300-600€/m² selon proximité centre-ville. Nous intervenons dans toute la Haute-Garonne avec nos 5 architectes partenaires toulousains."
                },
                {
                  question: "Quelles garanties pour une construction de villa neuve ?",
                  answer: "Toute construction neuve bénéficie de 3 garanties légales obligatoires : garantie de parfait achèvement (1 an, tous défauts signalés à réception), garantie biennale (2 ans, équipements dissociables), garantie décennale (10 ans, structure et étanchéité). EGB Occitanie est couvert par une assurance décennale Allianz et responsabilité civile professionnelle AXA."
                },
                {
                  question: "Faut-il un architecte pour construire une villa à Toulouse ?",
                  answer: "L'architecte est obligatoire pour toute construction supérieure à 150m² de surface de plancher (loi). Même en dessous, nous recommandons vivement de travailler avec un architecte pour optimiser le projet, gérer le permis de construire et garantir la qualité architecturale. EGB Occitanie travaille avec 5+ architectes toulousains spécialisés en habitat individuel."
                },
                {
                  question: "Peut-on construire une villa RT2012 ou faut-il respecter la RE2020 ?",
                  answer: "Depuis le 1er janvier 2022, toutes les constructions neuves doivent respecter la réglementation environnementale RE2020 (qui remplace la RT2012). La RE2020 impose des performances énergétiques plus élevées, une meilleure isolation, et prend en compte l'empreinte carbone des matériaux. EGB Occitanie construit 100% de ses villas selon la norme RE2020."
                },
                {
                  question: "Quels sont les délais pour obtenir un permis de construire à Toulouse ?",
                  answer: "Le délai légal d'instruction d'un permis de construire pour une maison individuelle est de 2 mois à compter du dépôt du dossier complet en mairie. Ce délai peut être prolongé d'1 mois si le projet se situe en zone protégée (ABF, périmètre monument historique). Une fois le permis obtenu, délai de recours des tiers de 2 mois avant de pouvoir démarrer les travaux."
                },
                {
                  question: "Construction villa plain-pied ou étage : que choisir ?",
                  answer: "Le plain-pied offre confort, accessibilité PMR, vieillissement sur place, pas d'escalier (sécurité enfants). Inconvénient : emprise au sol plus importante = terrain plus grand nécessaire. La villa à étage optimise le terrain, offre plus d'intimité (chambres à l'étage), coût/m² légèrement inférieur. Le choix dépend de votre terrain, budget et mode de vie. Nous concevons les deux configurations."
                }
              ].map((faq, index) => (
                <details key={index} className="group border border-stone-200 bg-stone-50">
                  <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-stone-900 font-medium text-lg hover:bg-stone-100 transition-colors">
                    {faq.question}
                    <svg className="w-5 h-5 text-amber-800 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-stone-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center bg-stone-50 border border-stone-200 p-8">
              <p className="text-stone-700 mb-6">
                Une question sur votre projet de construction de villa à Toulouse ?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33665015882"
                  className="inline-flex items-center justify-center gap-2 bg-amber-800 text-white px-6 py-3 text-base font-medium hover:bg-amber-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06 65 01 58 82
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-6 py-3 text-base font-medium hover:border-stone-400 hover:text-stone-900 transition-colors"
                >
                  Recevoir un devis gratuit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EGB Section */}
      <section className="py-20 md:py-28 bg-amber-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12">
              Pourquoi choisir EGB Occitanie pour votre villa ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "15+ ans d'expertise construction",
                  description: "Depuis 2008, nous accompagnons les familles toulousaines dans leurs projets de construction. Plus de 200 villas livrées en Haute-Garonne."
                },
                {
                  title: "5 architectes partenaires toulousains",
                  description: "Collaboration exclusive avec des architectes DPLG spécialisés en habitat individuel. Architecture sur-mesure adaptée à votre mode de vie."
                },
                {
                  title: "0 retard de chantier garanti",
                  description: "Planning précis au jour près, suivi hebdomadaire rigoureux. 100% de nos chantiers livrés dans les délais contractuels ces 5 dernières années."
                },
                {
                  title: "Transparence financière totale",
                  description: "Devis détaillé poste par poste, contrat CCMI à prix forfaitaire. Aucun dépassement, aucune surprise. Budget sécurisé du début à la fin."
                },
                {
                  title: "Artisans qualifiés et locaux",
                  description: "Équipe d'artisans qualifiés RGE, Qualibat. Savoir-faire traditionnel toulousain (brique, enduit). Contrôle qualité à chaque étape."
                },
                {
                  title: "Accompagnement personnalisé",
                  description: "Un interlocuteur unique du premier RDV à la remise des clés. Disponibilité, écoute, réactivité. Réponse sous 24h garantie."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-stone-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8 border-t border-stone-700">
              <p className="text-stone-300 text-lg mb-6">
                Prêt à construire la villa de vos rêves à Toulouse ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 text-base font-medium hover:bg-stone-100 transition-all duration-300"
              >
                Demander un devis gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-20 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-stone-900 mb-8">
              Découvrez aussi nos autres services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/renovation-maison-toulouse"
                className="group bg-white p-6 border border-stone-200 hover:border-stone-400 transition-all"
              >
                <h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-stone-700">
                  Rénovation maison Toulouse
                </h3>
                <p className="text-amber-800 text-sm mb-3">
                  Rénovation complète maisons toulousaines en brique. Expertise rénovation énergétique.
                </p>
                <span className="inline-flex items-center gap-2 text-amber-800 text-sm group-hover:gap-3 transition-all">
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/extension-maison-toulouse"
                className="group bg-white p-6 border border-stone-200 hover:border-stone-400 transition-all"
              >
                <h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-stone-700">
                  Extension maison Toulouse
                </h3>
                <p className="text-amber-800 text-sm mb-3">
                  Agrandissement, surélévation, extension bois. Permis de construire géré.
                </p>
                <span className="inline-flex items-center gap-2 text-amber-800 text-sm group-hover:gap-3 transition-all">
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/projets"
                className="group bg-white p-6 border border-stone-200 hover:border-stone-400 transition-all"
              >
                <h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-stone-700">
                  Nos réalisations
                </h3>
                <p className="text-amber-800 text-sm mb-3">
                  Découvrez nos villas construites à Toulouse et en Occitanie. Photos avant/après.
                </p>
                <span className="inline-flex items-center gap-2 text-amber-800 text-sm group-hover:gap-3 transition-all">
                  Voir le portfolio
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
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
