import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Construction Villa L'Union | Suburb Résidentiel Premium Toulouse Nord",
  description: "Constructeur villa L'Union. Suburb résidentiel premium 12k habitants, revenu médian 48k€/an, écoles 8.7/10. 15 permis/an, prix 480-560€/m². Expert L'Union.",
  keywords: ["construction villa l'union", "constructeur maison l'union", "terrain l'union toulouse", "villa premium l'union"],
};

export default function ConstructionVillaLUnionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-amber-600" />
              <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
                Suburb Premium · CSP+ 58% · L'Union
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Construction Villa
              <br />
              <span className="text-amber-800">L'Union</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
              Suburb résidentiel premium Toulouse Nord, 12 000 habitants, revenu médian 48 000€/an (CSP+ 58%).
              Écoles 8.7/10, 15 permis/an, prix terrain 480-560€/m².
              <strong className="font-medium text-gray-900"> Quartier recherché cadres supérieurs.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Devis gratuit L'Union
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
                <div className="text-3xl font-light text-amber-900 mb-2">15</div>
                <div className="text-sm text-gray-600">Permis/an</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">58%</div>
                <div className="text-sm text-gray-600">CSP+</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">480€</div>
                <div className="text-sm text-gray-600">Terrain/m²</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Pourquoi L'Union */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              L'Union : Suburb Résidentiel Premium Toulouse Nord
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                L'Union = suburb résidentiel calme premium Nord Toulouse, 12 000 habitants, <strong>profil CSP+ 58%</strong>
                (revenu médian 48 000€/an vs 28 400€ Toulouse), cadres supérieurs, professions libérales.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Marché construction sélectif : 15 permis/an, prix terrain 480-560€/m² (positionnement premium).
                Infrastructures excellentes : écoles primaires 8.7/10, collège Jean Moulin réputé, transports
                (métro ligne A 12min voiture Balma-Gramont).
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Notre expertise L'Union</h3>
                <p className="text-base text-amber-900 mb-0">
                  Connaissance approfondie profil CSP+ L'Union, réseau notaires spécialisé terrains premium.
                  <strong> Accompagnement recherche parcelles rares</strong>, financement patrimoine adapté,
                  délais garantis pour familles cadres actifs. Construction sur-mesure standing quartier.
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
              Prix Construction Villa L'Union 2025
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <div className="bg-white border-2 border-amber-200 p-8 rounded mb-10">
                <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire construction L'Union</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 120m²</h4>
                        <p className="text-sm text-gray-600">Terrain 400m² + construction complète</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">474 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 400m² : 200 000€ (500€/m²)</li>
                      <li>• Construction pure : 192 000€</li>
                      <li>• VRD + raccordements : 20 000€</li>
                      <li>• Frais annexes (notaire, assurances) : 34 000€</li>
                    </ul>
                  </div>

                  <div className="bg-amber-800 text-white p-6 rounded">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Villa 150m²</h4>
                        <p className="text-sm text-amber-100">Configuration familiale premium</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light">567 000€</div>
                        <div className="text-sm text-amber-100">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-amber-100 space-y-1.5">
                      <li>• Terrain 500m² : 250 000€ (500€/m²)</li>
                      <li>• Construction pure : 240 000€</li>
                      <li>• VRD + raccordements : 22 000€</li>
                      <li>• Frais annexes : 40 000€</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 200m²</h4>
                        <p className="text-sm text-gray-600">Grande famille, terrain 600m²</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">700 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 600m² : 300 000€ (500€/m²)</li>
                      <li>• Construction pure : 320 000€</li>
                      <li>• VRD + raccordements : 24 000€</li>
                      <li>• Frais annexes : 48 000€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-3">Positionnement Premium L'Union</h4>
                <p className="text-base text-amber-900 mb-3">
                  <strong>Prix terrain +30-40% vs Toulouse moyenne</strong> justifiés par : profil CSP++ voisinage
                  (48k€ revenu médian), écoles excellentes (8.7/10), cadre résidentiel préservé, rotation faible (2%/an) = stabilité.
                </p>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Investissement patrimoine sécurisé</strong> : valorisation +25-30% en 10 ans données notaires.
                  Marché liquide cadres, revente facilitée profil homogène acheteurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Profil Démographique */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Profil Démographique L'Union : CSP++ 58%
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Caractéristiques Socio-Économiques</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Revenus & CSP</h4>
                    <ul className="text-sm space-y-1.5 text-gray-700">
                      <li>• Revenu médian : 48 000€/an (+69% vs France)</li>
                      <li>• CSP++ : 58% (cadres sup., prof. libérales)</li>
                      <li>• Taux chômage : 5,2% (vs 8% national)</li>
                      <li>• Propriétaires : 78% (stabilité résidentielle)</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Éducation & Famille</h4>
                    <ul className="text-sm space-y-1.5 text-gray-700">
                      <li>• Écoles primaires : 8.7/10 moyenne</li>
                      <li>• Collège Jean Moulin : réputé secteur</li>
                      <li>• Taille foyer : 3,1 personnes (familles)</li>
                      <li>• Âge moyen : 42 ans (actifs établis)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-amber-900 text-white p-6 rounded">
                  <p className="text-sm leading-relaxed mb-0">
                    <strong>Profil type acheteur L'Union</strong> : Cadre supérieur 38-50 ans, revenus foyer 6 000-10 000€/mois,
                    2 enfants scolarisés, recherche calme résidentiel + écoles qualité + voisinage homogène CSP+.
                    Apport 100-150k€, financement 350-450k€. Revente facilitée marché cadres liquide.
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
