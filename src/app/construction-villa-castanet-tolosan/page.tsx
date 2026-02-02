import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

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
                Technopole Sud-Est · Labège Innopôle · Castanet-Tolosan
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Construction Villa
              <br />
              <span className="text-amber-800">Castanet-Tolosan</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
              Technopole Sud-Est, cadres CNES/Labège Innopôle, ville +48% depuis 2006, métro ligne 3 (2025-2028).
              Prix terrain 380-420€/m², 25% cadres tech/recherche.
              <strong className="font-medium text-gray-900"> Valorisation forte.</strong>
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
                <div className="text-3xl font-light text-amber-900 mb-2">+48%</div>
                <div className="text-sm text-gray-600">Croissance depuis 2006</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">25%</div>
                <div className="text-sm text-gray-600">Cadres tech/recherche</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">400€</div>
                <div className="text-sm text-gray-600">Prix terrain/m²</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Pourquoi Castanet */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Castanet-Tolosan : Technopole Sud-Est en Pleine Croissance
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Castanet-Tolosan = suburb toulousain dynamique sud-est, <strong>13 900 habitants (+48% depuis 2006)</strong>,
                ville jeune en expansion portée par Technopole Sud-Est. Proximité immédiate Labège Innopôle
                (1 958 entreprises tech), CNES Rangueil, Agrobiopole INRAE = bassin emploi qualifié 5-10min.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Profil démographique <strong>25% cadres tech/recherche</strong>, revenus moyens 25 080€/hab (+11% vs France),
                population jeune active 30-50 ans. Ville résidentielle calme malgré croissance, PLU 2019 contrôle qualité urbaine,
                services complets (écoles, commerces, loisirs). <strong>Future ligne 3 métro Toulouse Aerospace Express
                (2025-2028)</strong> : connexion directe pôles emploi, valorisation +15-20% anticipée.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Notre expertise Castanet-Tolosan</h3>
                <p className="text-base text-amber-900 mb-0">
                  Connaissance approfondie PLU 2019 révisé, contraintes Canal du Midi (ABF si 500m), réseau artisans locaux
                  qualifiés RGE. <strong>Spécialisation cadres tech Labège/CNES</strong> : financement adapté profil ingénieur,
                  timing coordination mutations professionnelles. Accompagnement recherche terrain secteurs Lauragais-Tolosan,
                  Centre-Ville, Agrobiopole Sud. Délais 13-15 mois respectés.
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
              Prix Construction Villa Castanet-Tolosan 2025
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <div className="bg-white border-2 border-amber-200 p-8 rounded mb-10">
                <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire construction Castanet</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 100m²</h4>
                        <p className="text-sm text-gray-600">Terrain 400m² + construction complète</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">370 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 400m² : 160 000€ (400€/m²)</li>
                      <li>• Construction pure : 160 000€</li>
                      <li>• VRD + raccordements : 18 000€</li>
                      <li>• Frais annexes (notaire, assurances) : 30 000€</li>
                    </ul>
                  </div>

                  <div className="bg-amber-800 text-white p-6 rounded">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Villa 120m²</h4>
                        <p className="text-sm text-amber-100">Configuration cadre tech idéale</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light">410 000€</div>
                        <div className="text-sm text-amber-100">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-amber-100 space-y-1.5">
                      <li>• Terrain 400m² : 160 000€ (400€/m²)</li>
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
                        <div className="text-3xl font-light text-amber-800">507 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 500m² : 200 000€ (400€/m²)</li>
                      <li>• Construction pure : 240 000€</li>
                      <li>• VRD + raccordements : 22 000€</li>
                      <li>• Frais annexes : 40 000€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-3">Valorisation Métro Ligne 3 (2025-2028)</h4>
                <p className="text-base text-amber-900 mb-3">
                  <strong>Future ligne 3 métro Toulouse Aerospace Express</strong> (station Labège Innopôle 869m) =
                  <strong> valorisation immobilière +15-20% anticipée post-mise service</strong> (données études notaires).
                  Villa 120m² 410k€ (2025) → valeur estimée 472-492k€ (2029-2030).
                </p>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Fenêtre opportunité 2025-2026</strong> : construire avant ouverture métro, bénéficier valorisation
                  immédiate. Profil acheteur cadres tech Labège/CNES recherchant transport rapide centre Toulouse (métro 20min vs 40min bus).
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
              Meilleurs Secteurs pour Construire à Castanet-Tolosan
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Quartier Durable Lauragais-Tolosan</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 400-420€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Projet urbain neuf RD813/Canal du Midi</strong>, écoquartier mixte (logements/commerces/espaces verts 30%).
                    Normes environnementales RE2025 poussées, architecture contemporaine encouragée. Proximité immédiate commerces
                    (Super U, pharmacie, médecins).
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Parcelles viabilisées neuves 400-600m²</li>
                      <li>• Espaces verts préservés, mobilité douce</li>
                      <li>• Services proximité immédiate (500m max)</li>
                      <li>• Profil : Familles jeunes actifs éco-responsables</li>
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
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Centre-Ville</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 390-410€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Cœur historique restructuré</strong>, mairie/écoles/commerces à pied (5min max). Restructuration
                    urbaine 2015-2020 (places rénovées, circulation apaisée). Mixité résidentielle équilibrée, vie locale dynamique.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Services/commerces à pied (centralité absolue)</li>
                      <li>• Marché hebdomadaire, associations actives</li>
                      <li>• Liquidité marché immobilier élevée</li>
                      <li>• Profil : Actifs recherchant praticité/vie locale</li>
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
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Agrobiopole Sud</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 380-400€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Technopole agricole INRAE</strong>, secteur sud calme absolu, parcelles spacieuses 500-800m².
                    Environnement recherche agronomique, cadre verdoyant préservé, profil habitants cadres/chercheurs.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Parcelles spacieuses 500-800m² (vs 400m² ailleurs)</li>
                      <li>• Calme absolu, environnement verdoyant</li>
                      <li>• Proximité INRAE (cadres recherche agronomique)</li>
                      <li>• Profil : Chercheurs, ingénieurs agronomes, familles nature</li>
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
