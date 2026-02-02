import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Construction Villa Blagnac | Constructeur Aéroport Airbus Training",
  description: "Constructeur villa Blagnac - 29k habitants, Airbus Training Centre Europe, aéroport Toulouse-Blagnac immédiat. Prix terrain 391€/m², cadres internationaux. Expert construction Blagnac 12+ villas livrées.",
  keywords: [
    "construction villa blagnac",
    "constructeur maison blagnac",
    "villa airbus blagnac",
    "terrain blagnac aeroport",
    "maison neuve blagnac",
    "constructeur blagnac airbus",
    "villa aéroport toulouse"
  ],
  openGraph: {
    title: "Construction Villa Blagnac | Aéroport + Airbus Training Centre",
    description: "Constructeur spécialisé Blagnac. Airbus Training Centre Europe, aéroport immédiat, cadres internationaux. Expert local 12+ villas livrées.",
    type: "website",
  },
  alternates: {
    canonical: "https://egb-occitanie.fr/construction-villa-blagnac",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une construction de villa à Blagnac en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix construction villa Blagnac 2025 : 2 900-3 300€/m² tout compris (terrain + construction). Terrain : 391€/m² moyenne (quartiers premium Grand-Noble, Pinot : 450-550€/m²). Villa 120m² : budget 348 000-396 000€ TTC. Prix légèrement supérieur Colomiers (+3%) car connectivité aéroport unique (cadres internationaux déplacements fréquents)."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi Blagnac attire les cadres Airbus internationaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4 raisons Blagnac cadres internationaux : 1) Airbus Training Centre Europe : centre formation mondiale pilotes/ingénieurs, communauté expatriés importante 2) Aéroport Toulouse-Blagnac : 5min voiture, 7 millions passagers/an, vols directs Europe/international 3) International School of Toulouse : enseignement anglais, bac international 4) Revenu moyen 25 350€/hab (+23% vs France), profil cadres 35-55 ans (25% population)."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les meilleurs quartiers pour construire à Blagnac ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top 4 quartiers Blagnac construction : 1) Grand-Noble : quartier premium cadres, prix 450-550€/m², villa moderne architecture contemporaine acceptée 2) Pinot : résidentiel calme, familles établies, proche commerces, prix 400-500€/m² 3) Brassens : jeunes familles, écoles primées (8/10), prix 380-450€/m² 4) Centre-Ville : commodités pied, vie urbaine, prix 420-520€/m². PLU souple : architecture contemporaine OK, toits plats autorisés zones récentes."
      }
    },
    {
      "@type": "Question",
      "name": "Quel délai pour construire une villa à Blagnac ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Délai construction villa Blagnac : 12-15 mois total. Détail : Permis construire : 2 mois instruction + 2 mois recours. Gros-œuvre : 4-5 mois. Second-œuvre : 4-5 mois. PLU Blagnac moderne et constructif, délais instruction rapides. Contrainte spécifique : zones aéroportuaires (servitudes bruit PLU, isolation acoustique renforcée obligatoire). Notre expertise : conformité règles aéroportuaires, coordination acousticien agréé."
      }
    },
    {
      "@type": "Question",
      "name": "Comment gérer les contraintes aéroportuaires à Blagnac ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contraintes aéroportuaires Blagnac : Plan Exposition Bruit (PEB) : zones A, B, C selon proximité pistes. Zone B/C (majorité terrains constructibles) : isolation acoustique renforcée obligatoire (DnT,A,tr ≥35 dB). Coût supplémentaire : +8 000-15 000€ selon surface (double-vitrage acoustique, ventilation mécanique). Avantage : taxe habitation réduite zones PEB. Notre accompagnement : étude acoustique pré-construction, coordination Bureau Veritas/SOCOTEC, conformité certification."
      }
    }
  ]
};

export default function ConstructionVillaBlagnacPage() {
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
                Aéroport · Airbus Training · Blagnac
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Construction Villa
              <br />
              <span className="text-amber-800">Blagnac</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
              29 000 habitants, Airbus Training Centre Europe, aéroport Toulouse-Blagnac immédiat. Connectivité mondiale unique,
              cadres internationaux (25%), revenu moyen +23% vs France. Prix terrain 391€/m².
              <strong className="font-medium text-gray-900"> 12+ villas livrées.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Devis gratuit
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
                <div className="text-3xl font-light text-amber-900 mb-2">29k</div>
                <div className="text-sm text-gray-600">Habitants</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">25%</div>
                <div className="text-sm text-gray-600">Cadres internationaux</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">5min</div>
                <div className="text-sm text-gray-600">Aéroport</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Pourquoi Blagnac */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Pourquoi Construire Votre Villa à Blagnac en 2025 ?
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Centre de formation mondiale Airbus</strong> : formation pilotes, ingénieurs aéronautiques, techniciens maintenance.
                <strong> Communauté internationale importante</strong> : expatriés américains, britanniques, allemands, cadres missions longue durée.
                Environnement multiculturel unique périphérie toulousaine.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Aéroport Toulouse-Blagnac à 5min voiture</strong> : 3e aéroport France (7M passagers/an), vols directs Europe + international.
                <strong> Connectivité mondiale</strong> optimale pour cadres déplacements fréquents : Paris 1h, Londres 1h45, Madrid 1h20.
                Valeur ajoutée majeure profils internationaux.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>International School of Toulouse</strong> (campus Blagnac) : enseignement anglais, baccalauréat international (IB),
                programmes américain/britannique. <strong>Atout décisif familles expatriées</strong> : scolarité enfants anglophone
                continuité pédagogique lors mutations internationales.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Notre expertise Blagnac</h3>
                <p className="text-base text-amber-900 mb-0">
                  <strong>12+ villas construites</strong> secteurs Grand-Noble, Pinot, Brassens depuis 2019. Connaissance approfondie
                  contraintes aéroportuaires (Plan Exposition Bruit), coordination acousticien agréé, <strong>100% certifications
                  conformité acoustique</strong>. Spécialisation familles expatriées Airbus : accompagnement anglais disponible,
                  planning adapté mutations internationales.
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
              Prix Construction Villa Blagnac 2025 : Budgets Détaillés
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <div className="bg-white border-2 border-amber-200 p-8 rounded mb-10">
                <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire construction Blagnac</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 100m²</h4>
                        <p className="text-sm text-gray-600">Terrain 400m² + construction + isolation acoustique</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">377 400€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 400m² : 156 400€</li>
                      <li>• Construction pure : 165 000€</li>
                      <li>• Isolation acoustique renforcée : 8 000€</li>
                      <li>• VRD + raccordements : 18 000€</li>
                      <li>• Frais annexes : 30 000€</li>
                    </ul>
                  </div>

                  <div className="bg-amber-800 text-white p-6 rounded">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Villa 120m²</h4>
                        <p className="text-sm text-amber-100">Configuration familiale idéale</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light">416 400€</div>
                        <div className="text-sm text-amber-100">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-amber-100 space-y-1.5">
                      <li>• Terrain 400m² : 156 400€</li>
                      <li>• Construction pure : 198 000€</li>
                      <li>• Isolation acoustique renforcée : 10 000€</li>
                      <li>• VRD + raccordements : 18 000€</li>
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
                        <div className="text-3xl font-light text-amber-800">520 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 500m² : 195 500€</li>
                      <li>• Construction pure : 247 500€</li>
                      <li>• Isolation acoustique renforcée : 13 000€</li>
                      <li>• VRD + raccordements : 22 000€</li>
                      <li>• Frais annexes : 42 000€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-3">Avantage Aéroport Blagnac</h4>
                <p className="text-base text-amber-900 mb-3">
                  <strong>Pour cadres internationaux déplacements fréquents</strong>, proximité aéroport = <strong>gain temps annuel
                  estimé 40-60h</strong> (vs habiter Toulouse centre : +30min trajet x 40 déplacements/an = 20h minimum).
                </p>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Valorisation revente</strong> : proximité aéroport argument majeur acheteurs cadres internationaux
                  (demande locative forte 1 800-2 500€/mois meublé villa 120-150m²).
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
              Meilleurs Quartiers pour Construire à Blagnac
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Grand-Noble (Premium)</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 450-550€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Quartier premium cadres internationaux</strong>, villas modernes architecture contemporaine,
                    PLU souple (toits plats OK). Proximité International School.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Profil : cadres Airbus, expatriés</li>
                      <li>• Architecture : contemporaine acceptée</li>
                      <li>• Plus-value : forte (+3-5%/an)</li>
                      <li>• International School à proximité</li>
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
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Pinot (Résidentiel)</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 400-500€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Quartier résidentiel calme</strong>, familles établies, commerces proximité,
                    cadre verdoyant. Valeurs sûres revente.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Profil : familles 35-50 ans</li>
                      <li>• Architecture : traditionnelle + moderne</li>
                      <li>• Plus-value : stable</li>
                      <li>• Commerces et services à proximité</li>
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
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Brassens (Familles)</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 380-450€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Quartier jeunes familles</strong>, écoles primées (8/10 moyenne), espaces verts,
                    terrains disponibles régulièrement.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Profil : primo-accédants, jeunes couples</li>
                      <li>• Écoles : très bonnes (8/10)</li>
                      <li>• Disponibilité : bonne</li>
                      <li>• Espaces verts nombreux</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mt-8">
                <h4 className="font-semibold text-amber-900 mb-3">Contrainte Spécifique Blagnac : Plan Exposition Bruit</h4>
                <p className="text-base text-amber-900 mb-3">
                  <strong>Zones B et C Plan Exposition Bruit (PEB)</strong> : isolation acoustique renforcée obligatoire
                  (DnT,A,tr ≥35 dB). Majorité terrains constructibles en zone C (contraintes modérées).
                </p>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Notre accompagnement</strong> : étude acoustique pré-construction gratuite, coordination acousticien
                  agréé (Bureau Veritas/SOCOTEC), matériaux conformes (double-vitrage 44mm asymétrique, ventilation mécanique),
                  <strong> certification conformité garantie</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Étude de Cas */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Étude de Cas : Villa Cadre Expatrié - Quartier Grand-Noble Blagnac
            </h2>

            <div className="bg-white border-2 border-amber-200 p-8 rounded">
              <div className="mb-6">
                <div className="text-amber-800 text-sm font-semibold uppercase tracking-wider mb-2">Étude de cas</div>
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Villa Moderne 160m² - Grand-Noble</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>• Quartier Grand-Noble, Blagnac</span>
                  <span>• 2023 (14 mois total)</span>
                  <span>• 160m² habitables</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900 mb-3">Profil Client & Contexte:</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Client :</strong> Cadre britannique expatrié, directeur programme A350 Airbus, famille 3 personnes
                    (2 enfants 10 et 14 ans scolarisés International School). <strong>Objectif :</strong> villa moderne quartier
                    Grand-Noble, proximité aéroport (déplacements Londres/Hambourg fréquents), architecture contemporaine toit plat.
                  </p>
                </div>

                <div className="bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900 mb-3">Budget Détaillé:</h4>
                  <ul className="text-sm text-gray-700 space-y-1.5">
                    <li>• Terrain 480m² Grand-Noble : 240 000€ (500€/m²)</li>
                    <li>• Construction 160m² moderne : 224 000€</li>
                    <li>• Isolation acoustique renforcée PEB : 11 000€</li>
                    <li>• Frais totaux (VRD, notaire) : 37 000€</li>
                    <li>• <strong>TOTAL : 512 000€ TTC</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900 text-white p-6 rounded mb-6">
                <h4 className="font-bold mb-3">Caractéristiques Villa:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2">
                    <li>• <strong>Architecture contemporaine</strong> : toit plat, grandes baies vitrées</li>
                    <li>• <strong>Plain-pied</strong> : 4 chambres (suite parentale 32m² avec dressing)</li>
                    <li>• <strong>Pièce vie</strong> : 70m² open-space (salon-cuisine US)</li>
                    <li>• <strong>Bureau</strong> : 15m² (télétravail 2j/semaine)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• <strong>Isolation acoustique</strong> : double-vitrage 44mm asymétrique, VMC double-flux</li>
                    <li>• <strong>PAC air-air</strong> : chauffage + climatisation</li>
                    <li>• <strong>Domotique Somfy</strong> : contrôle volets/chauffage smartphone</li>
                    <li>• <strong>Terrasse</strong> : 50m² bois exotique, pergola bioclimatique</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Témoignage Client (Janvier 2024)</h4>
                <p className="text-amber-900 italic leading-relaxed mb-2">
                  "EGB understood our specific needs as expat family: modern architecture, airport proximity (I fly London weekly,
                  10min door to gate now), International School 5min. <strong>Acoustic expertise was crucial - we can't hear planes
                  inside</strong>. 14-month timeline respected despite Covid delays. Quality excellent, resale value strong
                  (neighbor sold similar villa +8% after 2 years). Highly recommend."
                </p>
                <p className="text-sm text-amber-800 mb-0">— James W., Programme Director Airbus, Blagnac</p>
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
