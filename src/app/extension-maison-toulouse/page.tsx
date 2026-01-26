import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Extension Maison Toulouse | Agrandissement & Surélévation Expert Haute-Garonne",
  description:
    "Spécialiste extension maison à Toulouse depuis 15 ans. Extension latérale, surélévation, ossature bois, véranda. Prix 1800-3200€/m². Permis de construire géré. Architectes DPLG. Devis gratuit 48h.",
  keywords: [
    "extension maison toulouse",
    "agrandissement maison toulouse",
    "surélévation maison toulouse",
    "extension ossature bois toulouse",
    "extension véranda toulouse",
    "architecte extension toulouse",
    "prix extension maison toulouse",
    "permis construire extension toulouse",
    "extension maison toulousaine",
    "surelevation toit plat toulouse",
  ],
  openGraph: {
    title: "Extension Maison Toulouse | Agrandissement & Surélévation Expert",
    description:
      "Extension maison Toulouse: latérale, surélévation, ossature bois. 15 ans expertise, architectes DPLG, permis géré. Devis 48h.",
    url: "https://egb-occitanie.fr/extension-maison-toulouse",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une extension de maison à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix d'une extension de maison à Toulouse varie entre 1 800€ et 3 200€/m² selon le type d'extension. Extension latérale traditionnelle (parpaing, brique): 1 800-2 400€/m². Extension ossature bois: 2 000-2 600€/m². Surélévation: 2 400-3 200€/m² (complexité charpente, renforcement structure). Véranda alu/verre: 1 200-2 000€/m². Ces prix incluent: fondations, structure, toiture, isolation, électricité, plomberie, finitions, permis de construire."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un permis de construire pour une extension à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Permis de construire obligatoire si extension >20m² (ou >40m² si PLU le permet et maison <150m² après). Déclaration préalable si extension 5-20m². Pas de déclaration si <5m² (abri jardin). Zone ABF centre historique Toulouse: avis Architecte Bâtiments France obligatoire (délai +1 mois). Architecte obligatoire si surface totale maison >150m² après extension. EGB Occitanie gère toutes vos démarches administratives (permis, ABF, dossier complet)."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour réaliser une extension de maison ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durée totale extension maison Toulouse: Extension 20-30m²: 4-6 mois (2 mois permis + 2-4 mois travaux). Extension 40-60m²: 5-7 mois. Surélévation complète: 6-9 mois (complexité structure). Ces délais incluent: conception architecte 3-4 semaines, permis de construire 2 mois instruction, délai recours tiers 2 mois, travaux 2-5 mois selon surface. EGB Occitanie respecte 100% des délais contractuels (0 retard)."
      }
    },
    {
      "@type": "Question",
      "name": "Extension ou déménagement : que choisir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Extension souvent plus rentable que déménagement. Exemple 30m² extension (2 chambres + SdB): 72 000€. Déménagement maison équivalente: +150 000€ achat + 10 500€ notaire + 8 000€ déménagement/travaux = 168 500€. Économie extension: 96 500€. Avantages extension: conservation emplacement/quartier, pas de déménagement, valorisation patrimoine +20-30%, pas de frais notaire. Inconvénients: chantier 3-5 mois avec gêne, permis construire 4 mois avant démarrage."
      }
    }
  ]
};

export default function ExtensionMaisonToulouse() {
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
              <span className="h-[1px] w-12 bg-stone-400" />
              <span className="text-stone-600 text-xs uppercase tracking-[0.3em] font-medium">
                Agrandissement
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-8 leading-[1.1]">
              Extension Maison
              <br />
              <span className="text-stone-500">à Toulouse</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-700 font-light leading-relaxed mb-12 max-w-3xl">
              Agrandissez votre maison à Toulouse. Extension latérale, surélévation, ossature bois.
              Architectes DPLG, permis de construire géré, délais garantis.
              <strong className="font-medium text-stone-900"> 50+ extensions réalisées. Devis gratuit sous 48h.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 text-base font-medium hover:bg-stone-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Obtenir un devis gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href="tel:+33665015882"
                className="inline-flex items-center justify-center gap-3 border border-stone-300 text-stone-700 px-8 py-4 text-base font-medium hover:border-stone-400 hover:text-stone-900 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 65 01 58 82
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
              <div>
                <div className="text-3xl font-light text-stone-900 mb-2">50+</div>
                <div className="text-sm text-stone-600">Extensions réalisées</div>
              </div>
              <div>
                <div className="text-3xl font-light text-stone-900 mb-2">100%</div>
                <div className="text-sm text-stone-600">Permis obtenus</div>
              </div>
              <div>
                <div className="text-3xl font-light text-stone-900 mb-2">0</div>
                <div className="text-sm text-stone-600">Retard de chantier</div>
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
              Pourquoi faire une extension plutôt que déménager ?
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Votre famille s'agrandit, vous avez besoin d'un bureau pour télétravail, ou vous souhaitez une suite parentale ?
                <strong> L'extension de maison est souvent plus économique et moins stressante qu'un déménagement</strong>.
                À Toulouse où les prix immobiliers ont explosé (+42% entre 2018 et 2024), agrandir votre maison actuelle
                représente un excellent investissement patrimonial.
              </p>

              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Pour 60 000€ à 90 000€, vous ajoutez 30m² à votre maison (2 chambres + salle de bain, ou grand séjour).
                Un déménagement vers une maison équivalente coûterait 150 000€ à 200 000€ supplémentaires (prix achat + notaire + travaux).
                <strong> L'extension vous fait économiser 100 000€ à 150 000€</strong> tout en valorisant votre patrimoine de +20 à +30%.
              </p>

              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                <strong>EGB Occitanie</strong> a réalisé 50+ extensions de maisons à Toulouse et sa périphérie depuis 2008.
                Notre expertise : conception architecturale sur-mesure, obtention permis de construire (100% acceptés),
                respect des délais, intégration harmonieuse à l'existant.
              </p>

              <div className="bg-stone-50 border-l-4 border-stone-900 p-6 my-8">
                <h3 className="text-lg font-semibold text-stone-900 mb-3">Extension vs Déménagement : Comparatif financier</h3>
                <div className="space-y-3 text-base text-stone-800">
                  <div className="flex justify-between items-center">
                    <span>Extension 30m² (2 chambres + SdB)</span>
                    <strong>72 000€</strong>
                  </div>
                  <div className="h-[1px] bg-stone-200"></div>
                  <div className="flex justify-between items-center">
                    <span>Maison équivalente (30m² en plus)</span>
                    <strong>+150 000€</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>+ Frais notaire (7-8%)</span>
                    <strong>+ 10 500€</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>+ Déménagement + travaux finitions</span>
                    <strong>+ 8 000€</strong>
                  </div>
                  <div className="h-[1px] bg-stone-300"></div>
                  <div className="flex justify-between items-center text-lg">
                    <strong>ÉCONOMIE avec extension :</strong>
                    <strong className="text-green-700">96 500€</strong>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Les avantages de l'extension de maison
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Économie 80 000€ à 150 000€</strong> vs achat maison plus grande (prix + notaire + déménagement)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Conservation emplacement</strong> : quartier aimé, proximité écoles/travail, voisinage, jardin mature</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Valorisation patrimoine +20-30%</strong> : maison agrandie = valeur très supérieure (source SeLoger 2024)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Personnalisation totale</strong> : conception sur-mesure adaptée à vos besoins exacts, style architectural harmonieux</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Pas de double logement</strong> : vous restez chez vous pendant études/permis (4 mois), déménagement temporaire seulement pendant travaux si nécessaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Garanties construction neuve</strong> : garantie décennale 10 ans, biennale 2 ans, parfait achèvement 1 an (partie extension)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Frais notaire réduits</strong> : 0€ de notaire (extension = travaux pas achat), vs 7-8% sur achat immobilier</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'extension et Prix */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Types d'extension et prix à Toulouse (2025)
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-10">
                Il existe 4 types principaux d'extension de maison, chacun avec ses avantages, contraintes et prix.
                Le choix dépend de votre terrain (emprise au sol disponible), PLU local, budget, et besoins d'espace.
              </p>

              <div className="space-y-8 mb-12">
                {/* Extension latérale */}
                <div className="bg-white border-2 border-stone-200 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center text-xl font-light">1</div>
                    <h3 className="text-2xl font-medium text-stone-900">Extension latérale (plain-pied)</h3>
                  </div>

                  <p className="text-stone-700 leading-relaxed mb-6">
                    Extension horizontale la plus courante. Agrandissement sur terrain adjacent (côté ou arrière maison).
                    Construction traditionnelle (parpaing, brique) ou ossature bois. Raccordement à la maison existante par ouverture mur.
                    Permet de créer : cuisine ouverte, séjour agrandi, suite parentale, bureau, chambres supplémentaires.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-stone-50 p-5">
                      <h4 className="font-semibold text-stone-900 mb-3">Avantages</h4>
                      <ul className="text-sm text-stone-700 space-y-2">
                        <li>✓ Solution la plus économique (1 800-2 400€/m²)</li>
                        <li>✓ Chantier rapide (2-4 mois travaux)</li>
                        <li>✓ Peu de contraintes techniques</li>
                        <li>✓ Accès plain-pied (PMR compatible)</li>
                        <li>✓ Pas de renforcement structure existante</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 p-5">
                      <h4 className="font-semibold text-stone-900 mb-3">Contraintes</h4>
                      <ul className="text-sm text-stone-700 space-y-2">
                        <li>• Nécessite terrain disponible (emprise sol)</li>
                        <li>• Respect CES (Coefficient Emprise Sol) PLU</li>
                        <li>• Perte surface jardin</li>
                        <li>• Raccordement réseaux (élec, plomberie)</li>
                        <li>• Permis construire si &gt;20m²</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-stone-900 text-white p-6 rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-stone-400 uppercase mb-1">Prix extension latérale</div>
                        <div className="text-3xl font-light">1 800 - 2 400€<span className="text-xl text-stone-400">/m²</span></div>
                      </div>
                      <div className="text-right">
                        <div className="text-stone-400 text-sm mb-1">Extension 30m²</div>
                        <div className="text-2xl font-light">54 000 - 72 000€</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extension ossature bois */}
                <div className="bg-white border-2 border-stone-200 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center text-xl font-light">2</div>
                    <h3 className="text-2xl font-medium text-stone-900">Extension ossature bois</h3>
                  </div>

                  <p className="text-stone-700 leading-relaxed mb-6">
                    Extension en structure bois préfabriquée en atelier puis montée sur site. Murs ossature bois (MOB) 145mm avec isolation intégrée,
                    bardage extérieur bois (mélèze, douglas, red cedar) ou enduit. Très performante énergétiquement (R ≥ 4).
                    Style contemporain ou traditionnel selon bardage. Idéale pour : extension bioclimatique, bureau jardin, suite parentale.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-stone-50 p-5">
                      <h4 className="font-semibold text-stone-900 mb-3">Avantages</h4>
                      <ul className="text-sm text-stone-700 space-y-2">
                        <li>✓ Rapidité chantier (montage 1-2 semaines)</li>
                        <li>✓ Performance énergétique supérieure</li>
                        <li>✓ Chantier sec (pas d'eau, moins nuisances)</li>
                        <li>✓ Légère (pas/peu fondations lourdes)</li>
                        <li>✓ Esthétique contemporaine premium</li>
                        <li>✓ Matériau écologique biosourcé</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 p-5">
                      <h4 className="font-semibold text-stone-900 mb-3">Contraintes</h4>
                      <ul className="text-sm text-stone-700 space-y-2">
                        <li>• Prix légèrement supérieur (+10-15%)</li>
                        <li>• Entretien bardage bois (lasure tous 10 ans)</li>
                        <li>• Isolation phonique inférieure maçonnerie</li>
                        <li>• Parfois refusé PLU (zones patrimoniales)</li>
                        <li>• Nécessite étude thermique RE2020</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-stone-900 text-white p-6 rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-stone-400 uppercase mb-1">Prix extension ossature bois</div>
                        <div className="text-3xl font-light">2 000 - 2 600€<span className="text-xl text-stone-400">/m²</span></div>
                      </div>
                      <div className="text-right">
                        <div className="text-stone-400 text-sm mb-1">Extension 25m²</div>
                        <div className="text-2xl font-light">50 000 - 65 000€</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Surélévation */}
                <div className="bg-white border-2 border-stone-900 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center text-xl font-light">3</div>
                    <h3 className="text-2xl font-medium text-stone-900">Surélévation (étage complet)</h3>
                  </div>

                  <p className="text-stone-700 leading-relaxed mb-6">
                    Création d'un étage complet au-dessus de la maison existante. Solution idéale si terrain petit (pas d'emprise sol disponible).
                    Nécessite renforcement structure (murs porteurs, fondations), dépose toiture existante, nouvelle charpente et couverture.
                    Ossature bois recommandée (légère, limite surcharge). Permet : 2-3 chambres, suite parentale, espace nuit complet indépendant.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-stone-50 p-5">
                      <h4 className="font-semibold text-stone-900 mb-3">Avantages</h4>
                      <ul className="text-sm text-stone-700 space-y-2">
                        <li>✓ Pas d'emprise sol terrain (jardin conservé)</li>
                        <li>✓ Grande surface créée (50-80m² possible)</li>
                        <li>✓ Étage nuit indépendant (intimité)</li>
                        <li>✓ Vue dégagée depuis étage</li>
                        <li>✓ Valorisation patrimoine +30-40%</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 p-5">
                      <h4 className="font-semibold text-stone-900 mb-3">Contraintes</h4>
                      <ul className="text-sm text-stone-700 space-y-2">
                        <li>• Prix élevé (2 400-3 200€/m²)</li>
                        <li>• Étude structure obligatoire (bureau études)</li>
                        <li>• Renforcement fondations souvent nécessaire</li>
                        <li>• Chantier long (5-8 mois)</li>
                        <li>• Respect hauteur maxi PLU (8-9m souvent)</li>
                        <li>• Permis construire obligatoire</li>
                        <li>• Déménagement pendant travaux (toiture déposée)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-stone-900 text-white p-6 rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-stone-400 uppercase mb-1">Prix surélévation</div>
                        <div className="text-3xl font-light">2 400 - 3 200€<span className="text-xl text-stone-400">/m²</span></div>
                      </div>
                      <div className="text-right">
                        <div className="text-stone-400 text-sm mb-1">Surélévation 50m²</div>
                        <div className="text-2xl font-light">120 000 - 160 000€</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Véranda */}
                <div className="bg-white border-2 border-stone-200 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center text-xl font-light">4</div>
                    <h3 className="text-2xl font-medium text-stone-900">Véranda / Extension vitrée</h3>
                  </div>

                  <p className="text-stone-700 leading-relaxed mb-6">
                    Extension vitrée (véranda) en structure aluminium ou acier avec grandes baies vitrées, toiture verre ou polycarbonate.
                    Apport lumière naturelle exceptionnel. Usage : jardin d'hiver, salle à manger lumineuse, salon TV, serre bioclimatique.
                    Véranda 4 saisons (isolation renforcée, chauffage) ou véranda mi-saison (usage printemps-automne).
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-stone-50 p-5">
                      <h4 className="font-semibold text-stone-900 mb-3">Avantages</h4>
                      <ul className="text-sm text-stone-700 space-y-2">
                        <li>✓ Prix accessible (1 200-2 000€/m²)</li>
                        <li>✓ Lumière naturelle maximale</li>
                        <li>✓ Chantier rapide (2-4 semaines)</li>
                        <li>✓ Vue jardin panoramique</li>
                        <li>✓ Déclaration préalable si &lt;20m²</li>
                      </ul>
                    </div>
                    <div className="bg-stone-50 p-5">
                      <h4 className="font-semibold text-stone-900 mb-3">Contraintes</h4>
                      <ul className="text-sm text-stone-700 space-y-2">
                        <li>• Surchauffe été (stores obligatoires)</li>
                        <li>• Déperditions thermiques hiver si mal isolée</li>
                        <li>• Entretien vitrage régulier</li>
                        <li>• Pas considéré surface habitable (revente)</li>
                        <li>• Intimité limitée (vis-à-vis voisins)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-stone-900 text-white p-6 rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-stone-400 uppercase mb-1">Prix véranda alu/verre</div>
                        <div className="text-3xl font-light">1 200 - 2 000€<span className="text-xl text-stone-400">/m²</span></div>
                      </div>
                      <div className="text-right">
                        <div className="text-stone-400 text-sm mb-1">Véranda 20m²</div>
                        <div className="text-2xl font-light">24 000 - 40 000€</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <p className="text-base text-amber-900 mb-0">
                  <strong className="font-semibold">Ces prix incluent :</strong> Conception architecte, dossier permis de construire,
                  fondations, structure (murs, charpente), toiture, isolation, menuiseries, électricité, plomberie (si SdB/cuisine),
                  sols, peinture, raccordement à l'existant. <strong>Notre conseil gratuit vous aide à choisir le type d'extension optimal
                  selon votre terrain, budget et PLU.</strong>
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 text-base font-medium hover:bg-stone-800 transition-all duration-300 hover:shadow-xl"
              >
                Recevoir une étude personnalisée gratuite
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Permis de Construire Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Permis de construire extension à Toulouse : réglementation 2025
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                La réglementation pour une extension de maison dépend de la surface créée et de votre localisation (PLU, zone ABF).
                <strong> EGB Occitanie gère l'intégralité de vos démarches administratives</strong> : dossier permis, plans architecte,
                pièces justificatives, dépôt mairie, suivi instruction, obtention autorisation.
              </p>

              <h3 className="text-2xl font-light text-stone-900 mt-10 mb-6">
                Quelle autorisation selon surface extension ?
              </h3>

              <div className="overflow-x-auto mb-10">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="border-b-2 border-stone-900">
                      <th className="py-4 px-4 text-stone-900 font-semibold">Surface extension</th>
                      <th className="py-4 px-4 text-stone-900 font-semibold">Autorisation requise</th>
                      <th className="py-4 px-4 text-stone-900 font-semibold">Délai instruction</th>
                      <th className="py-4 px-4 text-stone-900 font-semibold">Architecte obligatoire ?</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-700">
                    <tr className="border-b border-stone-200">
                      <td className="py-4 px-4 font-medium">Moins de 5m²</td>
                      <td className="py-4 px-4">Aucune (sauf ABF)</td>
                      <td className="py-4 px-4">-</td>
                      <td className="py-4 px-4">Non</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <td className="py-4 px-4 font-medium">5m² à 20m²</td>
                      <td className="py-4 px-4">Déclaration préalable</td>
                      <td className="py-4 px-4">1 mois</td>
                      <td className="py-4 px-4">Non</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-4 px-4 font-medium">20m² à 40m²</td>
                      <td className="py-4 px-4">Permis de construire</td>
                      <td className="py-4 px-4">2 mois</td>
                      <td className="py-4 px-4">Si total >150m²</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <td className="py-4 px-4 font-medium">Plus de 40m²</td>
                      <td className="py-4 px-4">Permis de construire</td>
                      <td className="py-4 px-4">2 mois (+1 si ABF)</td>
                      <td className="py-4 px-4">Obligatoire</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-stone-100 p-6 rounded mb-8">
                <h4 className="text-lg font-medium text-stone-900 mb-3">Important surface totale maison</h4>
                <p className="text-stone-700 leading-relaxed mb-0">
                  Si votre maison après extension dépasse <strong>150m² de surface de plancher</strong>, le recours à un architecte DPLG
                  devient obligatoire quel que soit la surface de l'extension. Exemple : maison 130m² + extension 30m² = 160m² total → architecte obligatoire.
                  EGB Occitanie travaille avec 5 architectes DPLG toulousains (honoraires inclus dans nos devis).
                </p>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Composition dossier permis de construire extension
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  { doc: "Formulaire Cerfa 13406*10", desc: "Formulaire officiel permis de construire, rempli et signé" },
                  { doc: "Plan de situation (PCMI1)", desc: "Localisation terrain sur carte cadastrale" },
                  { doc: "Plan de masse (PCMI2)", desc: "Vue d'ensemble terrain avec extension, cotations, limites" },
                  { doc: "Plan de coupe (PCMI3)", desc: "Coupe terrain/construction montrant implantation, hauteurs" },
                  { doc: "Notice descriptive (PCMI4)", desc: "Description projet, matériaux, aspect extérieur, insertion paysage" },
                  { doc: "Plan des façades (PCMI5)", desc: "Façades existantes et projetées (4 orientations)" },
                  { doc: "Document graphique 3D (PCMI6)", desc: "Insertion projet dans environnement proche (photo-montage)" },
                  { doc: "Photographies (PCMI7 et 8)", desc: "Photos terrain dans environnement proche et lointain" },
                  { doc: "Attestation RT2020 ou RE2020", desc: "Si extension >50m² : respect réglementation thermique" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 bg-white border border-stone-200 p-5">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded bg-stone-900 text-white flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-stone-900 mb-1">{item.doc}</div>
                      <div className="text-sm text-stone-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-stone-900 text-white p-8 rounded mb-8">
                <h3 className="text-2xl font-light mb-4">Délais complets permis de construire extension</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-stone-700">
                    <span className="text-stone-300">Conception architecturale + plans</span>
                    <strong>3-4 semaines</strong>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-700">
                    <span className="text-stone-300">Constitution dossier complet</span>
                    <strong>1 semaine</strong>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-700">
                    <span className="text-stone-300">Instruction mairie (délai légal)</span>
                    <strong>2 mois</strong>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-700">
                    <span className="text-stone-300">Délai recours des tiers</span>
                    <strong>2 mois</strong>
                  </div>
                  <div className="flex justify-between items-center text-lg pt-2">
                    <strong>TOTAL avant démarrage travaux :</strong>
                    <strong>4,5 à 5 mois</strong>
                  </div>
                </div>
                <p className="text-stone-400 text-sm mt-4 mb-0">
                  Pendant les 4 mois de délai recours, vous pouvez préparer le chantier (choix finitions, commande matériaux) pour démarrer immédiatement après.
                </p>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Spécificités Toulouse : PLU et zone ABF
              </h3>

              <p className="text-stone-700 leading-relaxed mb-6">
                À Toulouse, certaines zones sont soumises à des règles urbanistiques strictes qui impactent votre projet d'extension.
                EGB Occitanie maîtrise parfaitement le PLU toulousain et les contraintes ABF (80+ projets validés).
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-stone-50 p-6 border border-stone-200">
                  <h4 className="text-lg font-medium text-stone-900 mb-3">PLU Toulouse : règles courantes</h4>
                  <ul className="text-sm text-stone-700 space-y-2">
                    <li>• <strong>Emprise sol (CES)</strong> : 40-60% selon zone (ex: terrain 400m² → 240m² maxi)</li>
                    <li>• <strong>Hauteur maximale</strong> : 8-9m généralement (R+1 autorisé)</li>
                    <li>• <strong>Recul limites</strong> : 3m min depuis clôture (vérifier PLU local)</li>
                    <li>• <strong>Aspect extérieur</strong> : harmonie avec existant, teintes imposées parfois</li>
                    <li>• <strong>Stationnement</strong> : 1 place par 80m² créés souvent</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-6 border border-stone-200">
                  <h4 className="text-lg font-medium text-stone-900 mb-3">Zone ABF centre historique</h4>
                  <ul className="text-sm text-stone-700 space-y-2">
                    <li>• <strong>Avis ABF obligatoire</strong> pour toute extension visible rue</li>
                    <li>• <strong>Délai +1 mois</strong> instruction permis (total 3 mois)</li>
                    <li>• <strong>Matériaux imposés</strong> : brique rose, enduit traditionnel, tuiles canal</li>
                    <li>• <strong>Menuiseries</strong> : couleurs restreintes (gris, vert, bordeaux)</li>
                    <li>• <strong>Toiture</strong> : pente 30-35%, tuiles canal obligatoires</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Extension */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Les étapes de votre projet d'extension
            </h2>

            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Visite technique et étude de faisabilité",
                  duration: "1 visite (2h)",
                  description: "Visite de votre maison et terrain par notre conducteur de travaux. Analyse : emprise sol disponible, PLU applicable (CES, hauteur, recul), structure existante (porteurs, fondations), réseaux (élec, plomberie, assainissement). Discussion besoins, budget, délais. Photos, mesures, relevé côtes. Étude de faisabilité gratuite : 2-3 scénarios extension possibles avec esquisse, surfaces, budget estimatif."
                },
                {
                  number: "02",
                  title: "Conception architecturale et plans",
                  duration: "4-5 semaines",
                  description: "Collaboration avec architecte DPLG pour conception extension sur-mesure. Plans 2D (existant + projet, tous niveaux), perspectives 3D photoréalistes intérieur/extérieur. Choix matériaux (bardage, toiture, menuiseries), finitions, couleurs. Note calcul structure si surélévation. Plans conformes PLU et respect codes urbanisme. Plusieurs itérations jusqu'à validation finale par vous."
                },
                {
                  number: "03",
                  title: "Dossier permis de construire et dépôt mairie",
                  duration: "1 semaine",
                  description: "Constitution dossier permis construire complet (9 pièces PCMI1-8 + RE2020). Plans architecte, formulaire Cerfa, notice descriptive, photo-montages 3D. Dépôt mairie Toulouse ou commune périphérie (4 exemplaires). Récépissé dépôt avec date limite instruction. Affichage panneau chantier réglementaire sur terrain (obligation légale)."
                },
                {
                  number: "04",
                  title: "Instruction permis et obtention autorisation",
                  duration: "2-3 mois",
                  description: "Instruction dossier par service urbanisme mairie : vérification conformité PLU, règles construction, avis ABF si zone protégée. Délai légal 2 mois (3 mois si ABF). Possibles demandes pièces complémentaires (nous gérons). Réception arrêté autorisation ou refus. Si acceptation : affichage terrain + mairie, départ délai recours tiers 2 mois. Aucun travaux avant fin délai recours."
                },
                {
                  number: "05",
                  title: "Devis détaillé et signature contrat",
                  duration: "1 semaine",
                  description: "Pendant instruction permis : élaboration devis détaillé ligne par ligne (30-40 pages). Prix forfaitaire définitif, planning travaux semaine par semaine (Gantt), descriptif matériaux avec références. Rendez-vous présentation devis avec explications poste par poste. Ajustements possibles. Signature contrat extension avec garanties (décennale, RC, délais). Commande matériaux longue durée (menuiseries 6 semaines, charpente)."
                },
                {
                  number: "06",
                  title: "Préparation chantier et déclaration ouverture",
                  duration: "1 semaine",
                  description: "Installation chantier : palissade sécurité, benne gravats, WC chantier, panneau permis (obligation). DICT (Déclaration Intention Commencement Travaux) réseaux enterrés 10 jours avant. DOC (Déclaration Ouverture Chantier) mairie. Protection parties existantes (bâches, cloisons temporaires). Piquetage emprise extension, traçage fondations. Organisation coactivité si vous restez sur place."
                },
                {
                  number: "07",
                  title: "Fondations et structure",
                  duration: "2-4 semaines",
                  description: "Terrassement : fouilles fondations (60-80cm profondeur), semelles béton armé, drainage périphérique. Fondations + vide sanitaire ou dalle béton selon projet. Élévation structure : murs parpaing/brique ou ossature bois. Ouverture mur porteur existant pour raccordement (IPN, linteau béton). Chaînages horizontaux/verticaux. Plancher étage si surélévation (poutrelles hourdis ou dalle). Contrôles bureau vérification si surélévation."
                },
                {
                  number: "08",
                  title: "Charpente, couverture et hors d'eau",
                  duration: "2-3 semaines",
                  description: "Charpente traditionnelle bois ou fermettes industrielles selon portée. Pose (liteaux, contre-liteaux), écran sous-toiture HPV (haute perméabilité vapeur). Couverture tuiles mécaniques ou canal selon PLU. Zinguerie (gouttières alu, descentes EP). Menuiseries extérieures : fenêtres/portes-fenêtres alu ou PVC double vitrage, volets roulants. Étanchéité périphérie (compribande, mousse PU). État hors d'eau = protection pluie."
                },
                {
                  number: "09",
                  title: "Isolation, électricité, plomberie, chauffage",
                  duration: "3-4 semaines",
                  description: "Isolation thermique RE2020 : combles 300mm laine soufflée (R=7), murs 140mm laine bois/verre (R=3,7), plancher bas 100mm PSE. Électricité : tableau divisionnaire extension, câblage, prises (mini 1 par 4m²), éclairages, protection différentielle. Plomberie si SdB/cuisine : arrivée eau, évacuation, radiateurs raccordés chauffage central. Extension réseau chauffage existant ou PAC dédiée selon surface. VMC simple ou double-flux."
                },
                {
                  number: "10",
                  title: "Cloisons, doublage, sols, finitions",
                  duration: "3-4 semaines",
                  description: "Doublage murs plaques plâtre BA13 (hydrofuge SdB si besoin). Cloisons séparatives (chambre, SdB) en BA13 70mm ou 100mm phonique. Isolation acoustique laine minérale. Passage gaines électriques/plomberie. Bandes joints, enduit. Ragréage sols si nécessaire. Pose carrelage grès cérame ou parquet contrecollé selon pièces. Plinthes. Peinture acrylique lessivable 2 couches murs, 1 couche plafond. Cuisine équipée et/ou salle de bain si prévues."
                },
                {
                  number: "11",
                  title: "Raccordement à la maison existante",
                  duration: "1 semaine",
                  description: "Harmonisation extension/existant : raccordement sols (seuils, rattrapage niveaux), peinture murs liaison, électricité (repiquage tableau principal), plomberie/chauffage (raccordement réseau). Isolation thermique jonction (pont thermique traité). Étanchéité air périphérie (joints, mousse). Habillage IPN si ouverture mur porteur (placo, enduit). Finitions esthétiques : cohérence revêtements, couleurs, style."
                },
                {
                  number: "12",
                  title: "Réception travaux et déclaration achèvement",
                  duration: "1 journée",
                  description: "Visite réception en votre présence. Vérification conformité plans/devis (checklist). Liste réserves éventuelles (finitions mineures, ajustements). Signature PV réception = départ garantie parfait achèvement 1 an. DAACT (Déclaration Achèvement et Conformité Travaux) mairie sous 30 jours. Certificats conformité Consuel électricité. Remise dossiers complets : plans, factures, garanties décennale, notices équipements. Paiement solde (5-10%)."
                }
              ].map((step) => (
                <div key={step.number} className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="text-5xl font-light text-stone-300">{step.number}</div>
                  </div>
                  <div className="flex-grow pt-2">
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                      <h3 className="text-xl font-medium text-stone-900">{step.title}</h3>
                      <span className="text-sm text-stone-500 bg-stone-100 px-3 py-1 rounded-full whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-stone-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-stone-900 text-white p-8 rounded-sm">
              <h3 className="text-2xl font-light mb-4">Durée totale projet extension</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-light mb-2">5-7 mois</div>
                  <div className="text-stone-400">Extension 20-40m² latérale</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">7-10 mois</div>
                  <div className="text-stone-400">Surélévation 50-80m²</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">0</div>
                  <div className="text-stone-400">Retard de chantier (garantie)</div>
                </div>
              </div>
              <p className="text-stone-400 text-sm mt-6 text-center mb-0">
                Ces délais incluent : conception (4 sem), permis construire (2-3 mois), travaux (2-5 mois)
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
              Questions fréquentes extension maison Toulouse
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Quel est le prix d'une extension de maison à Toulouse ?",
                  answer: "Le prix d'une extension de maison à Toulouse varie entre 1 800€ et 3 200€/m² selon le type d'extension. Extension latérale traditionnelle (parpaing, brique): 1 800-2 400€/m². Extension ossature bois: 2 000-2 600€/m². Surélévation: 2 400-3 200€/m² (complexité charpente, renforcement structure). Véranda alu/verre: 1 200-2 000€/m². Ces prix incluent: fondations, structure, toiture, isolation, électricité, plomberie, finitions, permis de construire, architecte si obligatoire. Exemple: extension 30m² latérale = 54 000-72 000€ tout compris."
                },
                {
                  question: "Faut-il un permis de construire pour une extension à Toulouse ?",
                  answer: "Permis de construire obligatoire si extension >20m² (ou >40m² si PLU le permet et maison <150m² après). Déclaration préalable si extension 5-20m². Pas de déclaration si <5m² (abri jardin). Zone ABF centre historique Toulouse: avis Architecte Bâtiments France obligatoire (délai +1 mois instruction). Architecte DPLG obligatoire si surface totale maison >150m² après extension. Délai instruction: 2 mois permis + 2 mois recours tiers = 4 mois avant démarrage travaux. EGB Occitanie gère toutes vos démarches administratives (permis, ABF, dossier complet 9 pièces, suivi instruction)."
                },
                {
                  question: "Combien de temps pour réaliser une extension de maison ?",
                  answer: "Durée totale extension maison Toulouse: Extension 20-30m²: 5-7 mois (1 mois conception + 2 mois permis + 2 mois recours + 2-3 mois travaux). Extension 40-60m²: 6-8 mois. Surélévation complète: 7-10 mois (complexité structure, renforcement fondations). Ces délais incluent: conception architecte 4 semaines, constitution dossier 1 semaine, instruction permis 2 mois, délai recours tiers 2 mois, travaux 2-5 mois selon surface/complexité. EGB Occitanie respecte 100% des délais contractuels (0 retard sur 50+ extensions)."
                },
                {
                  question: "Extension ou déménagement : que choisir ?",
                  answer: "Extension souvent plus rentable que déménagement. Exemple 30m² extension (2 chambres + SdB): 72 000€. Déménagement maison équivalente: +150 000€ prix achat + 10 500€ frais notaire + 8 000€ déménagement/travaux/finitions = 168 500€ coût total. Économie extension: 96 500€. Avantages extension: conservation emplacement/quartier adoré, pas de stress déménagement, valorisation patrimoine +20-30%, 0€ frais notaire, personnalisation totale. Inconvénients: chantier 3-5 mois avec gêne (bruit, poussière), permis construire 4 mois délai avant démarrage, possible déménagement temporaire pendant travaux lourds."
                },
                {
                  question: "Peut-on habiter pendant les travaux d'extension ?",
                  answer: "Cela dépend du type d'extension et de l'ampleur des travaux. Extension latérale: oui possible dans 80% cas (séparation bâche étanche entre existant/chantier, accès indépendant). Gênes: bruit perceuse/disqueuse 8h-17h, poussière, camions livraisons. Surélévation totale: impossible car dépose toiture complète (maison ouverte). Solution: location temporaire 4-6 mois, ou rénovation phasée (moitié maison puis autre moitié). Extension ossature bois: plus facile rester (chantier sec, montage rapide 2-3 semaines). Nous pouvons prévoir sanitaires chantier, repiquage électrique provisoire pour minimiser gêne."
                },
                {
                  question: "Comment choisir entre extension latérale et surélévation ?",
                  answer: "Choix dépend principalement de votre terrain et budget. Extension latérale si: terrain emprise sol disponible (CES PLU <60% utilisé), budget serré (1 800-2 400€/m² vs 2 400-3 200€/m² surélévation), besoin plain-pied (PMR, enfants, personnes âgées), chantier rapide souhaité (3-4 mois vs 6-8 mois). Surélévation si: terrain petit sans emprise disponible, volonté conserver jardin intégralement, recherche valorisation patrimoniale maximale (+30-40% vs +20-25% latérale), souhait étage nuit indépendant, vue dégagée recherchée. Nous réalisons étude personnalisée gratuite avec 2-3 scénarios (plans, prix, délais) pour vous aider à choisir."
                },
                {
                  question: "Extension maison : quelle valorisation patrimoine ?",
                  answer: "Une extension de maison valorise significativement votre patrimoine immobilier. Extension 30m² bien réalisée (finitions qualité, architecte, harmonie existant): +20-30% valeur maison. Exemple: maison 100m² valeur 320 000€ + extension 30m² = maison 130m² valeur 400 000€ (+25% soit +80 000€) pour investissement 70 000€ = plus-value nette 10 000€ + surface gagnée. Surélévation: valorisation supérieure +30-40% (étage complet, vue, cachet architectural). Clés valorisation: qualité architecturale (architecte DPLG), finitions premium, performance énergétique (RE2020), intégration harmonieuse existant, conformité totale permis construire (pas de non-déclaré)."
                },
                {
                  question: "Extension maison toulousaine brique : spécificités ?",
                  answer: "Extension maison toulousaine traditionnelle en brique rose nécessite attention particulière pour harmonie architecturale. Façade extension: 3 options possibles: 1) Brique rose apparente assortie existant (coût +15% mais esthétique parfaite), 2) Enduit traditionnel à la chaux teinte assortie (respecte PLU), 3) Ossature bois bardage contemporain (contraste assumé, accepté hors ABF). Toiture: tuiles canal rouges obligatoires si zone ABF, mécaniques acceptées hors zones. Hauteur: respect génoise traditionnelle si maison ancienne. Menuiseries: alu gris anthracite ou bois lasure selon PLU. EGB Occitanie a réalisé 25+ extensions maisons toulousaines avec respect parfait patrimoine architectural + validation ABF 100%."
                }
              ].map((faq, index) => (
                <details key={index} className="group border border-stone-200 bg-stone-50">
                  <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-stone-900 font-medium text-lg hover:bg-stone-100 transition-colors">
                    {faq.question}
                    <svg className="w-5 h-5 text-stone-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
                Une question sur votre projet d'extension de maison à Toulouse ?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33665015882"
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-3 text-base font-medium hover:bg-stone-800 transition-colors"
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
                  Recevoir une étude gratuite
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
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12">
              Pourquoi choisir EGB Occitanie pour votre extension ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "50+ extensions réalisées depuis 2008",
                  description: "Expertise tous types: latérale, ossature bois, surélévation, véranda. Maîtrise parfaite techniques et réglementations Toulouse."
                },
                {
                  title: "100% permis de construire obtenus",
                  description: "Dossiers complets, conformes PLU, validés 1ère présentation. Gestion zones ABF centre historique. 0 refus en 15 ans."
                },
                {
                  title: "Architectes DPLG partenaires",
                  description: "5 architectes toulousains spécialisés extensions. Conception sur-mesure harmonieuse. Plans 3D réalistes pour visualiser projet."
                },
                {
                  title: "0 retard de chantier garanti",
                  description: "Planning contractuel respecté au jour près. Coordination parfaite corps d'état. Pénalités retard prévues contrat."
                },
                {
                  title: "Prix forfaitaire définitif",
                  description: "Devis détaillé ligne par ligne, aucun dépassement, aucune surprise. Transparence financière totale du début à la fin."
                },
                {
                  title: "Garanties construction neuve",
                  description: "Garantie décennale 10 ans Allianz, biennale 2 ans, parfait achèvement 1 an. Assurance dommage-ouvrage optionnelle."
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
                Prêt à agrandir votre maison à Toulouse ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 text-base font-medium hover:bg-stone-100 transition-all duration-300"
              >
                Recevoir une étude de faisabilité gratuite
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
                href="/construction-villa-toulouse"
                className="group bg-white p-6 border border-stone-200 hover:border-stone-400 transition-all"
              >
                <h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-stone-700">
                  Construction Villa Toulouse
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  Construction villa neuve sur-mesure. Architectes DPLG, délais garantis, 0 retard.
                </p>
                <span className="inline-flex items-center gap-2 text-stone-500 text-sm group-hover:gap-3 transition-all">
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/renovation-maison-toulouse"
                className="group bg-white p-6 border border-stone-200 hover:border-stone-400 transition-all"
              >
                <h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-stone-700">
                  Rénovation Maison Toulouse
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  Rénovation complète maisons toulousaines. Expertise brique rose, DPE G→B.
                </p>
                <span className="inline-flex items-center gap-2 text-stone-500 text-sm group-hover:gap-3 transition-all">
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
                <p className="text-stone-600 text-sm mb-3">
                  50+ extensions réalisées à Toulouse. Photos avant/après, témoignages clients.
                </p>
                <span className="inline-flex items-center gap-2 text-stone-500 text-sm group-hover:gap-3 transition-all">
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
