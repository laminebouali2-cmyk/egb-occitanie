import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

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
                3ème Ville · La Ramée · Tournefeuille
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Construction Villa
              <br />
              <span className="text-amber-800">Tournefeuille</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
              31 543 habitants, 3ème ville Haute-Garonne, La Ramée 243ha nature/sport (lac 44ha + golf),
              revenus 29 020€/hab (+41% vs France). Prix terrain 350-400€/m².
              <strong className="font-medium text-gray-900"> Construction clés en main.</strong>
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
                <div className="text-3xl font-light text-amber-900 mb-2">31.5k</div>
                <div className="text-sm text-gray-600">Habitants</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">243ha</div>
                <div className="text-sm text-gray-600">La Ramée Nature</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">370€</div>
                <div className="text-sm text-gray-600">Prix terrain/m²</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Pourquoi Tournefeuille */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Pourquoi Construire Votre Villa à Tournefeuille en 2025 ?
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>31 543 habitants</strong> (INSEE 2025), 3ème ville Haute-Garonne après Toulouse et Colomiers.
                <strong> Services complets ville importante</strong> : 16 écoles (publiques/privées), 2 collèges, lycée,
                médiathèque, conservatoire, complexe aquatique, 40 associations sportives/culturelles.
                <strong> Croissance +16% depuis 2006</strong> = valorisation immobilière soutenue.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>La Ramée base loisirs unique Sud-Ouest</strong> : lac 44 hectares (baignade, voile, pédalo),
                golf 18 trous, 150 hectares forêts/prairies, 12km sentiers randonnée/VTT, aires pique-nique.
                <strong> À domicile</strong> = qualité vie inégalée familles actives. Valorisation +8-12% propriétés
                proximité (moins de 1km).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>Revenus moyens 29 020€/hab</strong> (+41% vs France 20 590€), taux chômage 7,4% (vs 8% national).
                Profil résidentiel aisé : cadres Airbus/Thales/CNES, professions libérales, commerces premium.
                <strong> Quartiers résidentiels calmes</strong>, 71% propriétaires La Ramée.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Notre expertise Tournefeuille</h3>
                <p className="text-base text-amber-900 mb-0">
                  Connaissance approfondie PLU Tournefeuille, réseau artisans locaux qualifiés RGE, <strong>délais 13-15 mois
                  respectés</strong>. Spécialisation familles cadres Ouest toulousain : financement adapté, coordination timing
                  mutations professionnelles. Accompagnement recherche terrain secteurs La Ramée, Centre-Ville, Nord Socamil.
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
              Prix Construction Villa Tournefeuille 2025
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <div className="bg-white border-2 border-amber-200 p-8 rounded mb-10">
                <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire construction Tournefeuille</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 100m²</h4>
                        <p className="text-sm text-gray-600">Terrain 400m² + construction complète</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">356 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 400m² : 148 000€</li>
                      <li>• Construction pure : 160 000€</li>
                      <li>• VRD + raccordements : 18 000€</li>
                      <li>• Frais annexes (notaire, assurances) : 30 000€</li>
                    </ul>
                  </div>

                  <div className="bg-amber-800 text-white p-6 rounded">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Villa 120m²</h4>
                        <p className="text-sm text-amber-100">Configuration familiale idéale</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light">394 000€</div>
                        <div className="text-sm text-amber-100">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-amber-100 space-y-1.5">
                      <li>• Terrain 400m² : 148 000€</li>
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
                        <div className="text-3xl font-light text-amber-800">450 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 500m² : 185 000€</li>
                      <li>• Construction pure : 240 000€</li>
                      <li>• VRD + raccordements : 22 000€</li>
                      <li>• Frais annexes : 40 000€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-3">Avantage Proximité La Ramée</h4>
                <p className="text-base text-amber-900 mb-3">
                  <strong>Valeur ajoutée immobilier</strong> : proximité La Ramée (2-3km) =
                  <strong> argument majeur familles achat villa Tournefeuille</strong>. Nature exceptionnelle à domicile
                  (lac, golf, forêt), activités sportives/loisirs famille week-end, cadre vie unique Sud-Ouest.
                </p>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Revente</strong> : villas Tournefeuille secteurs proches La Ramée se vendent 8-12% plus cher
                  que secteurs éloignés (données notaires 2023-2024).
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
              Meilleurs Secteurs pour Construire à Tournefeuille
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">La Ramée (Proximité Lac/Golf)</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 380-400€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Quartier résidentiel calme premium</strong>, sud-ouest Tournefeuille, bords lac 44ha + golf 18 trous.
                    71% propriétaires, familles aisées, cadres supérieurs. Parcelles 400-600m², emplacement nature exceptionnel.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Cadre vie exceptionnel (lac/golf/forêt moins de 500m)</li>
                      <li>• Disponibilité terrains : Bonne (parcelles spacieuses)</li>
                      <li>• Profil habitants : Familles aisées 35-55 ans</li>
                      <li>• Valorisation +8-12% vs centre Tournefeuille</li>
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
                    <p className="text-amber-800 font-medium">Prix terrain : 350-380€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Centralité absolue</strong>, cœur ville (mairie, commerces, Linéo 2 direct). Services immédiats,
                    écoles, marché hebdomadaire, vie associative. Mixité résidentielle équilibrée.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Services/commerces à pied moins de 10min</li>
                      <li>• Linéo 2 direct Toulouse 25min</li>
                      <li>• Liquidité marché immobilier élevée</li>
                      <li>• Profil : Actifs + familles privilégiant commodités</li>
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
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Nord Socamil (Reconversion Écologique)</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 340-370€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Projet urbain 20 hectares environnemental</strong>, nord Tournefeuille. Écoquartier mixte
                    logements/activités/espaces verts 40%. Architecture contemporaine autorisée, normes RE2025 poussées.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Parcelles viabilisées neuves 400-700m²</li>
                      <li>• Espaces naturels préservés (nature en ville)</li>
                      <li>• Valorisation future +15-20% (quartier structurant)</li>
                      <li>• Profil : Acheteurs éco-responsables, familles modernes</li>
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
