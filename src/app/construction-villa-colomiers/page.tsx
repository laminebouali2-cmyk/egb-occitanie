import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Construction Villa Colomiers | 2ème Ville Haute-Garonne · 40k Habitants",
  description: "Constructeur villa Colomiers. 2ème ville Haute-Garonne 40 000 habitants, Airbus 10min, prix terrain 350-380€/m². Services complets grande ville, cadre résidentiel. Expert Colomiers.",
  keywords: [
    "construction villa colomiers",
    "constructeur maison colomiers",
    "terrain colomiers airbus",
    "villa ouest toulouse",
    "construction 31770",
    "maison neuve colomiers"
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une construction de villa à Colomiers en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix construction villa Colomiers 2025 : 2 800-3 200€/m² tout compris (terrain + construction). Terrain : 388€/m² moyenne (150-600€/m² selon secteur). Villa 120m² : budget 336 000-384 000€ TTC. Prix -10-15% vs Toulouse centre grâce terrain moins cher. Financement Airbus salarié : conditions avantageuses (taux réduits, PTZ éligible selon revenus)."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi construire à Colomiers plutôt qu'à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "5 raisons construire Colomiers : 1) Prix terrain -30% (388€/m² vs 550-800€/m² Toulouse) 2) Proximité Airbus Clément Ader : 5min voiture site assemblage A330/A350 3) Métro ligne C 2028 : Colomiers→Toulouse 20min (valorisation +15-20%) 4) Ville complète : 42 000 habitants, tous commerces/services, écoles 5) Disponibilité terrains : marché actif, offre régulière vs pénurie Toulouse."
      }
    },
    {
      "@type": "Question",
      "name": "Quel délai pour construire une villa à Colomiers ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Délai construction villa Colomiers : 12-14 mois total. Détail : Dépôt permis construire : 2 mois instruction + 2 mois recours tiers. Fondations + gros-œuvre : 4-5 mois. Second-œuvre + finitions : 3-4 mois. Livraison clé en main. PLU Colomiers : délais instruction standards, commune constructive. Anticipation : démarrer démarches 6 mois avant date souhaitée emménagement."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les quartiers à privilégier pour construire à Colomiers ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top 3 secteurs Colomiers construction : 1) Secteur Gare (métro C 2028) : valorisation future +20%, prix terrain 450-600€/m², secteur dynamique. 2) Secteur Airbus (ouest) : proximité site Clément Ader, communauté salariés Airbus, prix 350-450€/m². 3) Centre-ville : services/commerces pied, écoles primées, prix 400-550€/m². Éviter : zones inondables (consulter PPRi). Conseil : visite quartier heures pointe + weekend."
      }
    },
    {
      "@type": "Question",
      "name": "Comment l'arrivée du métro C en 2028 va impacter l'immobilier à Colomiers ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Impact métro ligne C Colomiers (ouverture 2028) : Valorisation immobilier : +15-25% secteur station Gare Colomiers (données Tisséo études prévisionnelles). Temps trajet : Colomiers→Toulouse centre 20min (vs 35-45min bus actuel). Attractivité : nouveaux actifs toulousains cherchant prix -30% vs centre. Investissement : construire 2025-2027 = capter valorisation avant ouverture. Stations Colomiers : Gare Colomiers (terminus ouest ligne C)."
      }
    }
  ]
};

export default function ConstructionVillaColomiers() {
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
                2ème Ville · Airbus 10min · Colomiers
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Construction Villa
              <br />
              <span className="text-amber-800">Colomiers</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
              40 000 habitants, 2ème ville Haute-Garonne, Airbus 10min, prix terrain 350-380€/m².
              Services complets grande ville, zones pavillonnaires étendues, transports (Linéo 1, future métro C).
              <strong className="font-medium text-gray-900"> Grande ville accessible.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Devis gratuit Colomiers
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
                <div className="text-3xl font-light text-amber-900 mb-2">40k</div>
                <div className="text-sm text-gray-600">Habitants</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">10min</div>
                <div className="text-sm text-gray-600">Airbus</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">365€</div>
                <div className="text-sm text-gray-600">Prix terrain/m²</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Pourquoi Colomiers */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Colomiers : 2ème Ville Haute-Garonne, Services Complets
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Colomiers = 2ème ville Haute-Garonne après Toulouse, <strong>40 000 habitants</strong>, ville
                complète infrastructures (27 écoles, 4 collèges, 2 lycées, hôpital, piscines, médiathèque).
                <strong> Proximité Airbus 10min</strong> (Saint-Martin, Colomiers site), emploi aéronautique
                majeur Ouest toulousain.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>Zones pavillonnaires étendues</strong> : quartiers résidentiels calmes (En Jacca, Perget,
                Ramassiers), parcelles 400-600m², prix terrain 350-380€/m² (attractif grande ville). Transports :
                Linéo 1 direct Toulouse centre, future station métro ligne C Ramassiers (2028) = valorisation +10-15%
                anticipée quartiers nord.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Notre expertise Colomiers</h3>
                <p className="text-base text-amber-900 mb-0">
                  Connaissance approfondie quartiers Colomiers (En Jacca, Perget, Ramassiers, Lespinet), réseau
                  artisans locaux qualifiés RGE. <strong>Spécialisation cadres Airbus/aéronautique</strong> :
                  financement adapté profil ingénieur, timing coordination mutations professionnelles Toulouse.
                  Accompagnement recherche terrain prix compétitifs. Délais 13-15 mois respectés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Prix */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Prix Construction Villa Colomiers 2025
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <div className="bg-white border-2 border-amber-200 p-8 rounded mb-10">
                <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire construction Colomiers</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 100m²</h4>
                        <p className="text-sm text-gray-600">Terrain 400m² + construction complète</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">350 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 400m² : 140 000€ (350€/m²)</li>
                      <li>• Construction pure : 160 000€</li>
                      <li>• VRD + raccordements : 18 000€</li>
                      <li>• Frais annexes (notaire, assurances) : 30 000€</li>
                    </ul>
                  </div>

                  <div className="bg-amber-800 text-white p-6 rounded">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Villa 120m²</h4>
                        <p className="text-sm text-amber-100">Configuration familiale standard</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light">386 000€</div>
                        <div className="text-sm text-amber-100">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-amber-100 space-y-1.5">
                      <li>• Terrain 400m² : 140 000€ (350€/m²)</li>
                      <li>• Construction pure : 192 000€</li>
                      <li>• VRD + raccordements : 20 000€</li>
                      <li>• Frais annexes : 34 000€</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 150m²</h4>
                        <p className="text-sm text-gray-600">Grande famille, terrain 500m²</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">477 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 500m² : 175 000€ (350€/m²)</li>
                      <li>• Construction pure : 240 000€</li>
                      <li>• VRD + raccordements : 22 000€</li>
                      <li>• Frais annexes : 40 000€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-3">Prix Compétitif 2ème Ville Haute-Garonne</h4>
                <p className="text-base text-amber-900 mb-3">
                  <strong>Prix terrain 350€/m² = -8% vs Toulouse moyenne (380€/m²)</strong> malgré infrastructures
                  complètes grande ville. Attractivité Colomiers : services 2ème ville département, emploi Airbus
                  10min, transports Linéo 1 + future métro C, zones pavillonnaires calmes.
                </p>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Valorisation métro ligne C Ramassiers (2028)</strong> : quartiers nord Colomiers
                  (Ramassiers, Lespinet) = +10-15% anticipé post-ouverture station. Fenêtre opportunité 2025-2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Quartiers */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Meilleurs Secteurs pour Construire à Colomiers
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">En Jacca / Perget</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 360-380€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Quartiers pavillonnaires établis</strong> nord Colomiers, proximité zones activités En Jacca/Perget
                    (emplois locaux), cadre résidentiel calme, parcelles 400-600m². Profil familles cadres Airbus/aéronautique.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Quartiers établis, voisinage stable</li>
                      <li>• Proximité zones activités (emplois 5min)</li>
                      <li>• Écoles, commerces, services à 10min max</li>
                      <li>• Profil : Cadres Airbus, familles actives</li>
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
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Ramassiers (Futur Métro C 2028)</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 350-370€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Secteur valorisation métro ligne C (2028)</strong>, quartier nord-est, future station Ramassiers
                    (500m-1km), valorisation +10-15% anticipée. Parcelles disponibles, prix pré-métro attractif.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Future station métro ligne C (2028)</li>
                      <li>• Prix pré-métro = opportunité valorisation</li>
                      <li>• Parcelles disponibles 400-500m²</li>
                      <li>• Profil : Acheteurs valorisation anticipée</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Centre-Ville</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 370-390€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Centralité 2ème ville Haute-Garonne</strong>, services complets à pied (mairie, médiathèque,
                    commerces, marché, Linéo 1), vie locale dynamique, mixité résidentielle équilibrée.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Services complets à pied (grande ville)</li>
                      <li>• Linéo 1 direct Toulouse centre</li>
                      <li>• Vie locale active, associations, marché</li>
                      <li>• Profil : Actifs recherchant praticité/centralité</li>
                    </ul>
                  </div>
                </div>
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
