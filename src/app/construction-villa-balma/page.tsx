import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Construction Villa Balma | Constructeur Familles Gramont Métro A",
  description: "Constructeur villa Balma - 18k habitants, ville familiale #1 Est Toulouse, Centre Commercial Gramont (100 boutiques), métro ligne A. Prix terrain 410-450€/m², écoles primées. Expert construction Balma 10+ villas livrées.",
  keywords: [
    "construction villa balma",
    "constructeur maison balma",
    "terrain balma toulouse",
    "villa famille balma",
    "construction balma gramont",
    "maison neuve balma",
    "constructeur balma métro",
    "villa balma écoles"
  ],
  openGraph: {
    title: "Construction Villa Balma | Familles + Gramont + Métro A",
    description: "Constructeur spécialisé Balma. Ville familiale, Centre Commercial Gramont, métro ligne A. Expert local 10+ villas livrées.",
    type: "website",
  },
  alternates: {
    canonical: "https://egb-occitanie.fr/construction-villa-balma",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une construction de villa à Balma en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix construction villa Balma 2025 : 2 850-3 250€/m² tout compris (terrain + construction). Terrain : 410-450€/m² moyenne (zones récentes ville Est : 430-470€/m²). Villa 120m² : budget 342 000-390 000€ TTC. Prix attractifs vs Toulouse centre (-25%) car 6km seulement, métro A 10min. Ville récente (53% logements post-1990), PLU moderne souple."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi Balma est la ville familiale #1 de Toulouse Est ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "5 raisons Balma ville familiale #1 : 1) Infrastructures enfants : 63% logements 4+ pièces, écoles primées, crèches nombreuses 2) Centre Commercial Gramont : 52 000m², 100 boutiques, Auchan, shopping familial 6km centre 3) Métro ligne A : 10min Toulouse centre, 7 bus, connectivité excellente 4) Ville récente : 53% construction post-1990, logements modernes, normes actuelles 5) Cadre vie : ville verte, espaces verts, sécurité, vie associative dynamique. Profil familles 30-45 ans, enfants scolarisés."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les avantages du Centre Commercial Gramont pour les familles ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avantages Centre Commercial Gramont familles Balma : 52 000m² commerces : Auchan hypermarché #1 métropole, 100 boutiques mode/maison/sports/loisirs (H&M, Maisons du Monde, Intersport, JD Sports), 6 restaurants. 3 000 places parking gratuites : courses familiales simplifiées. Zone chalandise 564 000 habitants : attractivité régionale. Métro A + 7 bus : accès transport. Proximité Balma : 2-3km majorité quartiers, 5-10min voiture. Valeur ajoutée immobilier : proximité Gramont argument achat villa familles (courses, loisirs, services concentrés)."
      }
    },
    {
      "@type": "Question",
      "name": "Quel délai pour construire une villa familiale à Balma ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Délai construction villa familiale Balma : 12-14 mois total. Détail : Permis construire : 2 mois instruction + 2 mois recours. Gros-œuvre : 4-5 mois. Second-œuvre : 4-5 mois. PLU Balma moderne constructif, ville récente habituée construction (53% logements post-1990). Anticipation rentrée scolaire : démarrer projet janvier-février pour livraison août année suivante (timing optimal familles enfants scolarisés)."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les meilleurs quartiers familiaux à Balma ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top 3 quartiers familiaux Balma construction : 1) Secteur Vidailhan (Est) : quartier récent familles, écoles primaire/maternelle, prix 410-450€/m², terrains disponibles régulièrement 2) Secteur Lasbordes : résidentiel calme, proximité Gramont (3km), prix 430-460€/m², familles établies 3) Secteur Centre-Ville : commodités pied, écoles centrales, métro A proche, prix 450-480€/m², vie quartier animée. Tous secteurs : ville sûre, espaces verts, associations jeunesse nombreuses."
      }
    }
  ]
};

export default function ConstructionVillaBalmaPage() {
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
                Ville Familiale #1 · Gramont · Balma
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Construction Villa
              <br />
              <span className="text-amber-800">Balma</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
              18 000 habitants, ville familiale #1 Est Toulouse, Centre Commercial Gramont (100 boutiques),
              métro ligne A 10min centre. Ville récente (53% post-1990), écoles primées,
              prix terrain 410-450€/m².
              <strong className="font-medium text-gray-900"> 10+ villas livrées.</strong>
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
                <div className="text-3xl font-light text-amber-900 mb-2">18k</div>
                <div className="text-sm text-gray-600">Habitants</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">63%</div>
                <div className="text-sm text-gray-600">Logements 4+ pièces</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">6km</div>
                <div className="text-sm text-gray-600">Centre Toulouse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Pourquoi Balma */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Pourquoi Construire Votre Villa Familiale à Balma en 2025 ?
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>17 959 habitants</strong> (INSEE 2025), profil ultra-familial : <strong>63% logements 4+ pièces</strong>
                (vs 45% moyenne France). Infrastructures enfants exceptionnelles : écoles primées, crèches nombreuses,
                centres loisirs, associations jeunesse dynamiques. Ville sûre, cadre vie calme, espaces verts.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Métro ligne A + 7 lignes bus</strong> : connexion Toulouse centre 10min métro
                (vs 25min voiture heures pointe). <strong>6km seulement centre Toulouse</strong> : proximité urbaine +
                calme résidentiel. Accès périphérique sortie 17 immédiate (Albi, Castres, Montauban rapides).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>52 000 m² commerces à 2-3km</strong> : Auchan hypermarché #1 métropole, <strong>100 boutiques</strong>
                mode/maison/sports (H&M, Maisons du Monde, Intersport), 6 restaurants, 3 000 places parking gratuites.
                <strong> Zone chalandise 564 000 habitants</strong>. Shopping familial complet sans aller Toulouse centre.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Notre expertise Balma</h3>
                <p className="text-base text-amber-900 mb-0">
                  <strong>10+ villas familiales construites</strong> secteurs Vidailhan, Lasbordes, Centre-Ville depuis 2020.
                  Connaissance approfondie profil familles Balma (priorité : chambres enfants spacieuses, jardin sécurisé,
                  proximité écoles), PLU souple, <strong>délais 12-14 mois respectés</strong>. Coordination timing rentrée
                  scolaire : livraison août optimale familles enfants scolarisés.
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
              Prix Construction Villa Familiale Balma 2025
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <div className="bg-white border-2 border-amber-200 p-8 rounded mb-10">
                <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire construction Balma</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 100m²</h4>
                        <p className="text-sm text-gray-600">Terrain 400m² + construction complète</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">381 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 400m² : 172 000€</li>
                      <li>• Construction pure : 162 000€</li>
                      <li>• VRD + raccordements : 18 000€</li>
                      <li>• Frais annexes (notaire, assurances) : 29 000€</li>
                    </ul>
                  </div>

                  <div className="bg-amber-800 text-white p-6 rounded">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Villa 120m²</h4>
                        <p className="text-sm text-amber-100">Configuration familiale idéale</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light">417 400€</div>
                        <div className="text-sm text-amber-100">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-amber-100 space-y-1.5">
                      <li>• Terrain 400m² : 172 000€</li>
                      <li>• Construction pure : 194 400€</li>
                      <li>• VRD + raccordements : 18 000€</li>
                      <li>• Frais annexes : 33 000€</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Villa 150m²</h4>
                        <p className="text-sm text-gray-600">Grande famille, terrain 500m²</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">521 000€</div>
                        <div className="text-sm text-gray-600">TTC</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Terrain 500m² : 215 000€</li>
                      <li>• Construction pure : 243 000€</li>
                      <li>• VRD + raccordements : 22 000€</li>
                      <li>• Frais annexes : 41 000€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-3">Avantage Proximité Gramont</h4>
                <p className="text-base text-amber-900 mb-3">
                  <strong>Valeur ajoutée immobilier</strong> : proximité Centre Commercial Gramont (2-3km) =
                  <strong> argument majeur familles achat villa Balma</strong>. Shopping hebdomadaire simplifié,
                  courses familiales rapides (3 000 places parking), loisirs enfants (boutiques jouets, restaurants, cinéma).
                </p>
                <p className="text-base text-amber-900 mb-0">
                  <strong>Revente</strong> : villas Balma secteurs proches Gramont se vendent 5-8% plus cher que secteurs éloignés
                  (données notaires 2023-2024).
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
              Meilleurs Quartiers Familiaux pour Construire à Balma
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Vidailhan (Est)</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 410-450€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Quartier récent familles jeunes</strong>, école primaire + maternelle 300m, terrains disponibles
                    régulièrement, prix attractifs. Profil familles 30-40 ans avec enfants scolarisés.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Écoles primaire/maternelle à pied</li>
                      <li>• Disponibilité terrains : Très bonne</li>
                      <li>• Profil habitants : Familles 30-40 ans</li>
                      <li>• Espaces verts et aires de jeux nombreux</li>
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
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Lasbordes</h3>
                    <p className="text-amber-800 font-medium">Prix terrain : 430-460€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Proximité Gramont 3km</strong>, quartier résidentiel calme, familles établies,
                    infrastructures complètes, cadre verdoyant. Profil familles 35-50 ans.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Distance Gramont : 3km (5min voiture)</li>
                      <li>• Quartier résidentiel calme établi</li>
                      <li>• Plus-value immobilière stable</li>
                      <li>• Cadre verdoyant, vie de quartier</li>
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
                    <p className="text-amber-800 font-medium">Prix terrain : 450-480€/m²</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>Commodités pied, métro A proche</strong>, vie quartier animée, écoles centrales,
                    commerces proximité. Idéal actifs travaillant à Toulouse centre.
                  </p>

                  <div className="bg-amber-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <ul className="text-sm space-y-1.5">
                      <li>• Transport : Métro A + 7 lignes bus</li>
                      <li>• Profil : Actifs + familles</li>
                      <li>• Disponibilité terrains : Limitée</li>
                      <li>• Commerces et services à pied</li>
                    </ul>
                  </div>
                </div>
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
              Étude de Cas : Villa Famille 3 Enfants - Quartier Vidailhan Balma
            </h2>

            <div className="bg-white border-2 border-amber-200 p-8 rounded">
              <div className="mb-6">
                <div className="text-amber-800 text-sm font-semibold uppercase tracking-wider mb-2">Étude de cas</div>
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Villa Familiale 140m² - Vidailhan</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>• Quartier Vidailhan, Balma</span>
                  <span>• 2023 (13 mois total)</span>
                  <span>• 140m² habitables</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900 mb-3">Profil Client & Contexte:</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Client :</strong> Famille 5 personnes (3 enfants 6, 9, 12 ans), père cadre bancaire Toulouse centre,
                    mère professeur collège Balma. <strong>Objectif :</strong> villa familiale 4 chambres Balma secteur Vidailhan,
                    proximité école primaire à pied (500m), jardin sécurisé enfants, livraison août 2023 (rentrée scolaire).
                  </p>
                </div>

                <div className="bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900 mb-3">Budget Détaillé:</h4>
                  <ul className="text-sm text-gray-700 space-y-1.5">
                    <li>• Terrain 520m² : 218 400€ (420€/m²)</li>
                    <li>• Construction 140m² (R+1) : 189 000€</li>
                    <li>• Aménagements jardin sécurisé : 18 000€</li>
                    <li>• Frais totaux (VRD, notaire) : 39 000€</li>
                    <li>• <strong>TOTAL : 448 000€ TTC</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900 text-white p-6 rounded mb-6">
                <h4 className="font-bold mb-3">Caractéristiques Villa Familiale:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2">
                    <li>• <strong>R+1</strong> : 4 chambres enfants (10-12m² chacune)</li>
                    <li>• <strong>Suite parentale</strong> : 25m² (chambre + dressing + SdB)</li>
                    <li>• <strong>Pièce vie</strong> : 55m² (salon-salle à manger-cuisine ouverte)</li>
                    <li>• <strong>Cellier</strong> : 8m² (courses familiales Gramont)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• <strong>Jardin sécurisé</strong> : 350m² clôture 1,80m, portillon verrouillable</li>
                    <li>• <strong>Garage double</strong> : 35m² (2 voitures parents)</li>
                    <li>• <strong>DPE A</strong> : isolation renforcée, PAC air-eau</li>
                    <li>• <strong>École primaire</strong> : 500m à pied</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Témoignage Client (Septembre 2023)</h4>
                <p className="text-amber-900 italic leading-relaxed mb-2">
                  "EGB a parfaitement compris nos besoins famille 3 enfants : 4 chambres spacieuses (10-12m² chacune,
                  enfants ravis), jardin sécurisé (clôture haute, on est sereins), <strong>livraison 15 août 2023 timing
                  parfait rentrée</strong>. École primaire 500m pied (matin tranquille), Gramont 5min voiture (courses samedi rapides).
                  Papa travail Toulouse centre : métro A 12min porte bureau. <strong>Vie familiale Balma idéale : calme,
                  écoles, activités enfants nombreuses</strong>. Prix 448k€ vs 580k€ équivalent Toulouse = économie 132k€.
                  Je recommande famille hésitante périphérie."
                </p>
                <p className="text-sm text-amber-800 mb-0">— Caroline & Julien F., Famille 5 personnes, Balma Vidailhan</p>
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
