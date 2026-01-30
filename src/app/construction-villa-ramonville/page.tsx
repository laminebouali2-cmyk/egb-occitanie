import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Construction Villa Ramonville | Expert Young Professionals + Métro 2027",
  description: "Constructeur villa Ramonville. 62% jeunes professionnels 25-45 ans, métro ligne B 2027 (+25-30% valorisation), université proximité. Prix terrain 480€/m² → 620€/m² post-métro. Expert Ramonville.",
  keywords: [
    "construction villa ramonville",
    "constructeur maison ramonville",
    "terrain ramonville métro",
    "villa métro ligne b toulouse",
    "construction ramonville saint-agne",
    "maison neuve ramonville"
  ],
};

export default function ConstructionVillaRamonvillePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-amber-600" />
              <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
                Métro Ligne B 2027 · Université · Ramonville
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Construction Villa
              <br />
              <span className="text-amber-800">Ramonville-Saint-Agne</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
              Young professionals 62% (25-45 ans), métro ligne B 2027 (+25-30% valorisation anticipée),
              université Paul Sabatier 5min. Prix terrain 480€/m² pré-métro → 620€/m² post-2027.
              <strong className="font-medium text-gray-900"> Fenêtre opportunité 2025-2026.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Devis gratuit Ramonville
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
                <div className="text-3xl font-light text-amber-900 mb-2">2027</div>
                <div className="text-sm text-gray-600">Métro Ligne B</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">+25%</div>
                <div className="text-sm text-gray-600">Valorisation prévue</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">62%</div>
                <div className="text-sm text-gray-600">25-45 ans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Pourquoi Ramonville */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Ramonville-Saint-Agne : Suburb Universitaire + Métro 2027
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ramonville-Saint-Agne = suburb toulousain jeune dynamique en pleine mutation : commune 13 400 habitants
                sud-est Toulouse, <strong>62% population 25-45 ans</strong> (jeunes actifs, chercheurs, doctorants),
                université Paul Sabatier 5min (38 000 étudiants campus), pôle recherche CNRS/CNES proximité immédiate.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>RÉVOLUTION 2027 : prolongement métro ligne B</strong> (terminus actuel Ramonville-Université).
                Impact colossal valorisation immobilière : <strong>prix terrains +25-30% anticipés post-mise service métro</strong>
                (480€/m² aujourd'hui → 620€/m² 2028-2029 selon études notaires). Fenêtre opportunité 2025-2026 pour
                acheter terrain prix pré-métro.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Stratégie investissement Ramonville</h3>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Construire 2025-2026 = capter valorisation métro 2027</strong>. Livraison villa avant ouverture
                  ligne B, bénéfice +25-30% valorisation immédiat post-mise en service. Profil acheteur idéal : jeunes
                  actifs 30-40 ans, cadres secteur tech/recherche, cherchant proximité université + transport ultra-rapide
                  Toulouse centre (métro 15min vs 35min bus actuel).
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
              Prix Construction Villa Ramonville 2025-2026
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <div className="bg-white border-2 border-amber-200 p-8 rounded mb-10">
                <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire pré-métro (2025-2026)</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 100m²</h4>
                        <p className="text-sm text-gray-600">Terrain 400m² + construction complète</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">382 000€</div>
                        <div className="text-sm text-gray-600">TTC (prix 2025)</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 400m² : 192 000€ (480€/m²)</li>
                      <li>• Construction pure : 160 000€</li>
                      <li>• VRD + raccordements : 18 000€</li>
                      <li>• Frais annexes : 30 000€</li>
                    </ul>
                  </div>

                  <div className="bg-amber-800 text-white p-6 rounded">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Villa 120m²</h4>
                        <p className="text-sm text-amber-100">Configuration jeunes actifs optimale</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light">434 000€</div>
                        <div className="text-sm text-amber-100">TTC (prix 2025)</div>
                      </div>
                    </div>
                    <ul className="text-sm text-amber-100 space-y-1.5">
                      <li>• Terrain 400m² : 192 000€ (480€/m²)</li>
                      <li>• Construction pure : 192 000€</li>
                      <li>• VRD + raccordements : 20 000€</li>
                      <li>• Frais annexes : 34 000€</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 150m²</h4>
                        <p className="text-sm text-gray-600">Famille, terrain 500m²</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">537 000€</div>
                        <div className="text-sm text-gray-600">TTC (prix 2025)</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 500m² : 240 000€ (480€/m²)</li>
                      <li>• Construction pure : 240 000€</li>
                      <li>• VRD + raccordements : 22 000€</li>
                      <li>• Frais annexes : 40 000€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-3">Valorisation Métro 2027 : +25-30%</h4>
                <p className="text-base text-amber-900 mb-3">
                  <strong>Villa 120m² achetée 434k€ (2025)</strong> → valeur estimée <strong>543-565k€ (2028-2029)</strong>
                  post-ouverture métro ligne B = <strong>+109-131k€ plus-value potentielle</strong> (données études notaires
                  impact métro immobilier Toulouse).
                </p>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Fenêtre opportunité limitée 2025-2026</strong> : acheter terrain prix pré-métro avant spéculation
                  foncière. Délai construction 12-14 mois = livraison juste avant/pendant ouverture métro = valorisation immédiate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Profil Jeunes Actifs */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Profil Young Professionals : 62% 25-45 ans
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Démographie Ramonville 2025</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Population & Profil</h4>
                    <ul className="text-sm space-y-1.5 text-gray-700">
                      <li>• 13 400 habitants (croissance +8% depuis 2015)</li>
                      <li>• 62% jeunes actifs 25-45 ans (vs 35% France)</li>
                      <li>• Chercheurs, doctorants, cadres tech/recherche</li>
                      <li>• Université Paul Sabatier : 38 000 étudiants 5min</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Économie & Emploi</h4>
                    <ul className="text-sm space-y-1.5 text-gray-700">
                      <li>• Pôle recherche CNRS/CNES proximité immédiate</li>
                      <li>• Labège Innopôle 3km (1 958 entreprises tech)</li>
                      <li>• Taux chômage : 6,8% (vs 8% national)</li>
                      <li>• Revenus médian : 26 400€/an (+17% vs France)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-amber-900 text-white p-6 rounded">
                  <p className="text-sm leading-relaxed mb-0">
                    <strong>Profil type acheteur Ramonville 2025-2026</strong> : Jeune actif/couple 28-38 ans, cadre/ingénieur
                    secteur tech/recherche, revenus 3 500-5 500€/mois, primo-accédant ou 2e achat. Recherche proximité université
                    (travail/études), transport rapide Toulouse centre (métro 2027), investissement valorisant (+25-30%).
                    Apport 50-80k€, financement 350-450k€.
                  </p>
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
