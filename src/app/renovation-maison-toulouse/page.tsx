import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Rénovation Maison Toulouse | Expert Rénovation Maison Toulousaine Brique Rose",
  description:
    "Spécialiste rénovation maison toulousaine en brique rose depuis 15 ans. Rénovation complète, énergétique, façade. Prix détaillés, devis gratuit 48h, architectes DPLG partenaires. 200+ maisons rénovées à Toulouse.",
  keywords: [
    "rénovation maison toulouse",
    "rénovation maison toulousaine",
    "rénovation brique rose toulouse",
    "rénovation complète maison toulouse",
    "rénovation énergétique toulouse",
    "entreprise rénovation toulouse",
    "architecte rénovation toulouse",
    "prix rénovation maison toulouse",
    "rénovation maison ancienne toulouse",
    "rénovation maison de maître toulouse",
  ],
  openGraph: {
    title: "Rénovation Maison Toulouse | Expert Maison Toulousaine",
    description:
      "Spécialiste rénovation maison toulousaine brique rose. 200+ rénovations, architectes DPLG, garanties décennale. Devis gratuit 48h.",
    url: "https://egb-occitanie.fr/renovation-maison-toulouse",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une rénovation complète de maison à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix d'une rénovation complète à Toulouse varie entre 1 200€ et 2 500€/m² selon l'ampleur des travaux. Pour une maison toulousaine de 120m², comptez 144 000€ à 300 000€. Rénovation légère (peinture, sols, cuisine, SdB): 1 200-1 500€/m². Rénovation complète (structure, isolation, électricité, plomberie, finitions): 1 800-2 500€/m². Restauration patrimoine (maison de maître, conservation éléments): 2 200-3 000€/m²."
      }
    },
    {
      "@type": "Question",
      "name": "Comment rénover une maison toulousaine en brique rose ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La rénovation d'une maison toulousaine en brique rose nécessite une expertise spécifique. Conservation des murs en brique rose apparente (nettoyage par micro-gommage, rejointoiement à la chaux). Isolation par l'intérieur pour préserver la façade (12-14cm laine de bois). Respect du PLU centre historique si applicable. Toiture: conservation tuiles canal traditionnelles. EGB Occitanie a rénové 80+ maisons toulousaines traditionnelles avec conservation du patrimoine architectural."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un permis pour rénover une maison à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le permis de construire n'est pas nécessaire pour rénovation intérieure sans modification façade ni structure. Déclaration préalable obligatoire si: modification aspect extérieur (fenêtres, couleur façade, toiture), création ouvertures, extension <20m². Permis de construire obligatoire si: extension >20m², surélévation, modification structure porteuse, zone ABF (Architecte des Bâtiments de France) comme hypercentre Toulouse. EGB Occitanie gère l'ensemble des démarches administratives."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour rénover une maison à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durée rénovation maison Toulouse selon ampleur: Rénovation légère (peinture, sols, cuisine): 2-3 mois. Rénovation complète sans gros œuvre: 4-6 mois. Rénovation lourde avec structure: 6-9 mois. Restauration maison de maître: 9-12 mois. EGB Occitanie garantit les délais contractuels avec 0 retard sur nos chantiers de rénovation ces 5 dernières années."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles aides pour rénover une maison à Toulouse en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aides disponibles rénovation énergétique Toulouse 2025: MaPrimeRénov' (jusqu'à 20 000€ selon revenus), MaPrimeRénov' Sérénité (50% coût travaux, plafond 35 000€ ménages modestes), Éco-PTZ (prêt 0% jusqu'à 50 000€), CEE Certificats Économie Énergie (primes énergies), TVA 5,5% sur travaux rénovation énergétique, Exonération taxe foncière possible (2 ans). EGB Occitanie vous accompagne dans montage dossiers aides (service inclus)."
      }
    }
  ]
};

export default function RenovationMaisonToulouse() {
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
                Expertise Rénovation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-8 leading-[1.1]">
              Rénovation Maison
              <br />
              <span className="text-stone-500">à Toulouse</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-700 font-light leading-relaxed mb-12 max-w-3xl">
              Experts de la maison toulousaine en brique rose depuis 15 ans.
              Rénovation complète, énergétique, conservation patrimoine.
              <strong className="font-medium text-stone-900"> 200+ maisons rénovées. Devis gratuit sous 48h.</strong>
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
                <div className="text-3xl font-light text-stone-900 mb-2">200+</div>
                <div className="text-sm text-stone-600">Maisons rénovées</div>
              </div>
              <div>
                <div className="text-3xl font-light text-stone-900 mb-2">80+</div>
                <div className="text-sm text-stone-600">Maisons toulousaines brique</div>
              </div>
              <div>
                <div className="text-3xl font-light text-stone-900 mb-2">0</div>
                <div className="text-sm text-stone-600">Retard de chantier</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction: Pourquoi rénover */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-8">
              Pourquoi rénover votre maison à Toulouse plutôt que déménager ?
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Face à l'explosion des prix de l'immobilier à Toulouse (+42% entre 2018 et 2024, source Notaires de France),
                <strong> la rénovation de votre maison actuelle est souvent plus rentable qu'un déménagement</strong>.
                Pour 180 000€ à 240 000€, vous transformez complètement une maison de 120m² en maison moderne, performante énergétiquement,
                et adaptée à votre mode de vie actuel.
              </p>

              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                À Toulouse, le patrimoine de maisons anciennes en brique rose (années 1920-1980) représente 65% du parc immobilier résidentiel.
                Ces maisons ont un <strong>potentiel architectural exceptionnel</strong> : volumes généreux, hauteur sous plafond, matériaux nobles,
                emplacement central. Mais elles souffrent de performances énergétiques catastrophiques (DPE E, F ou G dans 78% des cas).
              </p>

              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                <strong>EGB Occitanie</strong> est spécialiste de la rénovation de la maison toulousaine traditionnelle depuis 2008.
                Nous avons rénové 200+ maisons dont 80+ maisons en brique rose avec conservation du patrimoine architectural.
                Notre expertise : concilier modernité, performance énergétique et respect de l'architecture toulousaine.
              </p>

              <div className="bg-stone-50 border-l-4 border-stone-900 p-6 my-8">
                <h3 className="text-lg font-semibold text-stone-900 mb-3">Rénovation vs Déménagement : Le calcul</h3>
                <div className="space-y-3 text-base text-stone-800">
                  <div className="flex justify-between items-center">
                    <span>Rénovation complète 120m²</span>
                    <strong>216 000€</strong>
                  </div>
                  <div className="h-[1px] bg-stone-200"></div>
                  <div className="flex justify-between items-center">
                    <span>Nouvelle maison équivalente</span>
                    <strong>450 000€</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>+ Frais notaire (7-8%)</span>
                    <strong>+ 32 000€</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>+ Déménagement, travaux finitions</span>
                    <strong>+ 12 000€</strong>
                  </div>
                  <div className="h-[1px] bg-stone-300"></div>
                  <div className="flex justify-between items-center text-lg">
                    <strong>ÉCONOMIE en rénovant :</strong>
                    <strong className="text-green-700">278 000€</strong>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Les avantages de la rénovation vs achat maison neuve
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Économie 200 000€ à 300 000€</strong> vs achat équivalent (prix + notaire + travaux finitions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Emplacement préservé</strong> : centre-ville, proximité écoles/commerces, quartier que vous connaissez</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Charme architectural unique</strong> : brique rose, volumes anciens, hauteur sous plafond (2,80m-3,20m vs 2,50m neuf)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Jardin mature</strong> : arbres de 30-50 ans, végétation établie (vs terrain nu en construction)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Valorisation patrimoniale</strong> : maison rénovée = +35% valeur vs avant travaux (source SeLoger 2024)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Aides rénovation énergétique</strong> : MaPrimeRénov' jusqu'à 20 000€, Éco-PTZ 50 000€, TVA 5,5%</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-stone-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700"><strong>Pas de déménagement stressant</strong> : rénovation par zone, possibilité de rester sur place selon projet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prix Rénovation Section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Prix rénovation maison à Toulouse : grille tarifaire 2025
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Le coût d'une rénovation de maison à Toulouse varie considérablement selon l'ampleur des travaux,
                l'état initial du bien, et le niveau de finition souhaité. Voici nos prix constatés en 2025 en Haute-Garonne,
                issus de 200+ chantiers de rénovation réalisés.
              </p>

              <h3 className="text-2xl font-light text-stone-900 mt-10 mb-6">
                Grille tarifaire par type de rénovation (€/m²)
              </h3>

              <div className="overflow-x-auto mb-10">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="border-b-2 border-stone-900">
                      <th className="py-4 px-4 text-stone-900 font-semibold">Type de rénovation</th>
                      <th className="py-4 px-4 text-stone-900 font-semibold">Prix / m²</th>
                      <th className="py-4 px-4 text-stone-900 font-semibold">Travaux inclus</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-700">
                    <tr className="border-b border-stone-200">
                      <td className="py-4 px-4 font-medium">Rafraîchissement</td>
                      <td className="py-4 px-4"><strong>600 - 900€</strong></td>
                      <td className="py-4 px-4 text-sm">Peinture, sols, électricité mise aux normes partielle</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-4 px-4 font-medium">Rénovation légère</td>
                      <td className="py-4 px-4"><strong>1 200 - 1 500€</strong></td>
                      <td className="py-4 px-4 text-sm">Peinture complète, sols neufs, cuisine équipée, SdB neuve, électricité normes</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <td className="py-4 px-4 font-medium">Rénovation complète</td>
                      <td className="py-4 px-4"><strong>1 800 - 2 200€</strong></td>
                      <td className="py-4 px-4 text-sm">Isolation, électricité totale, plomberie, chauffage, cuisine, SdB, sols, peintures, menuiseries</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-4 px-4 font-medium">Rénovation lourde</td>
                      <td className="py-4 px-4"><strong>2 200 - 2 800€</strong></td>
                      <td className="py-4 px-4 text-sm">Modification structure (murs porteurs, charpente), agrandissement, tout corps d'état</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-4 px-4 font-medium">Restauration patrimoine</td>
                      <td className="py-4 px-4"><strong>2 500 - 3 500€</strong></td>
                      <td className="py-4 px-4 text-sm">Maison de maître, conservation éléments (moulures, parquet ancien, brique apparente)</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-4 px-4 font-medium">Rénovation énergétique</td>
                      <td className="py-4 px-4"><strong>800 - 1 400€</strong></td>
                      <td className="py-4 px-4 text-sm">Isolation complète (combles, murs, plancher bas), menuiseries, VMC, chauffage performant</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Budgets rénovation par surface
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 border border-stone-200">
                  <div className="text-sm uppercase tracking-wider text-stone-500 mb-3">Maison 80m²</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-stone-100">
                      <span className="text-stone-600">Légère</span>
                      <strong className="text-stone-900">96 000€</strong>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-stone-100">
                      <span className="text-stone-600">Complète</span>
                      <strong className="text-stone-900">160 000€</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Lourde</span>
                      <strong className="text-stone-900">200 000€</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-900 p-6 border border-stone-900 text-white">
                  <div className="text-sm uppercase tracking-wider text-stone-400 mb-3">Maison 120m²</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-stone-700">
                      <span className="text-stone-300">Légère</span>
                      <strong className="text-white">168 000€</strong>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-stone-700">
                      <span className="text-stone-300">Complète</span>
                      <strong className="text-white">240 000€</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-300">Lourde</span>
                      <strong className="text-white">300 000€</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-stone-200">
                  <div className="text-sm uppercase tracking-wider text-stone-500 mb-3">Maison 180m²</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-stone-100">
                      <span className="text-stone-600">Légère</span>
                      <strong className="text-stone-900">252 000€</strong>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-stone-100">
                      <span className="text-stone-600">Complète</span>
                      <strong className="text-stone-900">360 000€</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Lourde</span>
                      <strong className="text-stone-900">450 000€</strong>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Prix détaillés par poste de travaux
              </h3>

              <div className="bg-white border border-stone-200 divide-y divide-stone-200 mb-8">
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Démolition et évacuation gravats</div>
                    <div className="text-sm text-stone-600">Dépose cuisine/SdB, cloisons, revêtements sols</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">40 - 80€ /m²</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Électricité complète aux normes</div>
                    <div className="text-sm text-stone-600">Tableau, câblage, prises, éclairages, protection</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">120 - 180€ /m²</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Plomberie et chauffage</div>
                    <div className="text-sm text-stone-600">Tuyauterie, radiateurs, chaudière, sanitaires</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">100 - 160€ /m²</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Isolation thermique</div>
                    <div className="text-sm text-stone-600">Combles (300mm laine soufflée), murs intérieur, plancher</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">80 - 140€ /m²</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Doublage cloisons et placo</div>
                    <div className="text-sm text-stone-600">Plaques plâtre BA13, isolation, bandes, enduit</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">50 - 70€ /m²</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Menuiseries extérieures</div>
                    <div className="text-sm text-stone-600">Fenêtres PVC/alu double vitrage, portes-fenêtres</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">400 - 800€ /unité</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Sols (carrelage grès cérame)</div>
                    <div className="text-sm text-stone-600">Fourniture, pose, ragréage préalable</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">70 - 120€ /m²</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Parquet contrecollé chêne</div>
                    <div className="text-sm text-stone-600">Parquet 14mm épaisseur, pose flottante</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">60 - 100€ /m²</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Peinture complète</div>
                    <div className="text-sm text-stone-600">2 couches murs, 1 couche plafond, lessivable</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">25 - 40€ /m²</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Cuisine équipée premium</div>
                    <div className="text-sm text-stone-600">Meubles, plan travail, électroménager, robinetterie</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">8 000 - 18 000€</div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-stone-900 mb-1">Salle de bain complète</div>
                    <div className="text-sm text-stone-600">Douche italienne, meuble vasque, WC, faïence, plomberie</div>
                  </div>
                  <div className="text-stone-900 font-semibold whitespace-nowrap ml-4">6 000 - 12 000€</div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <p className="text-base text-amber-900">
                  <strong className="font-semibold">Aides déductibles :</strong> MaPrimeRénov' jusqu'à 20 000€,
                  MaPrimeRénov' Sérénité 35 000€ (ménages modestes), Éco-PTZ 50 000€ (prêt 0%),
                  CEE (primes énergies) 2 000-5 000€, TVA réduite 5,5% au lieu de 20% = économie 10 000-30 000€.
                  <strong> Nous gérons vos dossiers d'aides (service inclus).</strong>
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 text-base font-medium hover:bg-stone-800 transition-all duration-300 hover:shadow-xl"
              >
                Recevoir une estimation budgétaire personnalisée
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificité Maison Toulousaine */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Rénover une maison toulousaine en brique rose : notre expertise
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                La maison toulousaine traditionnelle en brique rose possède des caractéristiques architecturales uniques
                qui nécessitent une expertise spécifique. <strong>EGB Occitanie a rénové 80+ maisons toulousaines</strong> et
                maîtrise parfaitement les techniques de conservation et modernisation de ce patrimoine.
              </p>

              <h3 className="text-2xl font-light text-stone-900 mt-10 mb-6">
                Caractéristiques de la maison toulousaine
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-stone-50 p-6 border border-stone-200">
                  <h4 className="text-lg font-medium text-stone-900 mb-3">Architecture typique</h4>
                  <ul className="text-sm text-stone-700 space-y-2">
                    <li>• <strong>Brique rose toulousaine</strong> (terre cuite locale)</li>
                    <li>• Murs porteurs épais (40-50cm)</li>
                    <li>• Hauteur sous plafond 2,80m à 3,20m</li>
                    <li>• Toiture tuiles canal rouges</li>
                    <li>• Génoise (corniche brique) sous toit</li>
                    <li>• Volets bois traditionnels</li>
                    <li>• Enduit à la chaux sur brique</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-6 border border-stone-200">
                  <h4 className="text-lg font-medium text-stone-900 mb-3">Problématiques courantes</h4>
                  <ul className="text-sm text-stone-700 space-y-2">
                    <li>• <strong>DPE catastrophique</strong> (F ou G dans 78% cas)</li>
                    <li>• Isolation inexistante (années 1920-1970)</li>
                    <li>• Électricité vétuste et dangereuse</li>
                    <li>• Plomberie en plomb (pré-1950)</li>
                    <li>• Chauffage inefficace (convecteurs)</li>
                    <li>• Simple vitrage d'origine</li>
                    <li>• Humidité remontées capillaires</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-light text-stone-900 mt-12 mb-6">
                Notre méthode de rénovation respectueuse
              </h3>

              <div className="space-y-6 mb-10">
                <div className="bg-white border border-stone-200 p-6">
                  <h4 className="text-lg font-medium text-stone-900 mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-semibold">1</span>
                    Conservation de la brique rose apparente
                  </h4>
                  <p className="text-stone-700 leading-relaxed mb-3">
                    Nous préservons les façades en brique rose (patrimoine architectural toulousain). Nettoyage par <strong>micro-gommage</strong> à
                    basse pression (pas de sablage agressif qui abîme la brique). Rejointoiement à la <strong>chaux naturelle</strong> (respirant,
                    compatible brique ancienne). Protection hydrofuge invisible longue durée.
                  </p>
                  <p className="text-sm text-stone-600">
                    <strong>Coût :</strong> Nettoyage façade 35-55€/m² | Rejointoiement chaux 60-90€/m² | Protection hydrofuge 15-25€/m²
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6">
                  <h4 className="text-lg font-medium text-stone-900 mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-semibold">2</span>
                    Isolation thermique par l'intérieur (ITI)
                  </h4>
                  <p className="text-stone-700 leading-relaxed mb-3">
                    Impossible d'isoler par l'extérieur (conservation façade brique). Nous isolons par l'intérieur avec <strong>laine de bois
                    12-14cm</strong> (respirante, régule humidité, compatible brique ancienne). Membrane pare-vapeur hygrovariable (évite
                    condensation). Finition plaques plâtre BA13 ou brique de parement intérieur.
                  </p>
                  <p className="text-sm text-stone-600">
                    <strong>Performance :</strong> Passage DPE G (380 kWh/m²/an) → DPE B (70 kWh/m²/an) | Économie chauffage -65%
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6">
                  <h4 className="text-lg font-medium text-stone-900 mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-semibold">3</span>
                    Respect du PLU et zones protégées
                  </h4>
                  <p className="text-stone-700 leading-relaxed mb-3">
                    Centre historique Toulouse = zone ABF (Architecte des Bâtiments de France). Déclaration préalable obligatoire pour modification
                    façade/toiture. Nous gérons <strong>l'instruction ABF</strong> (dossier, plans, photos, justifications techniques).
                    Choix menuiseries conformes (couleur, matériau). Conservation tuiles canal traditionnelles.
                  </p>
                  <p className="text-sm text-stone-600">
                    <strong>Délai ABF :</strong> 2 mois instruction + 1 mois validation (total 3 mois) | Nous accélérons les démarches
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6">
                  <h4 className="text-lg font-medium text-stone-900 mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-semibold">4</span>
                    Traitement humidité et assainissement
                  </h4>
                  <p className="text-stone-700 leading-relaxed mb-3">
                    Maisons anciennes = humidité remontées capillaires fréquente. Diagnostic humidimétrie complet. Traitement par
                    <strong> injection résine hydrofuge</strong> dans murs (barrière étanche). Drainage périphérique si nécessaire.
                    Assèchement naturel sur 6-12 mois. Ventilation VMC double-flux (renouvellement air + récupération chaleur).
                  </p>
                  <p className="text-sm text-stone-600">
                    <strong>Coût :</strong> Injection barrière étanche 120-180€/ml | Drainage extérieur 150-250€/ml | VMC double-flux 6 000-9 000€
                  </p>
                </div>
              </div>

              <div className="bg-stone-900 text-white p-8 rounded-sm mb-8">
                <h3 className="text-2xl font-light mb-4">Études de cas : Maison toulousaine rénovée à Saint-Cyprien</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <div className="text-sm text-stone-400 uppercase tracking-wider mb-2">Avant rénovation</div>
                    <ul className="text-stone-300 space-y-2 text-sm">
                      <li>• Maison 1932, brique rose, 135m²</li>
                      <li>• DPE : G (420 kWh/m²/an)</li>
                      <li>• Facture gaz : 3 200€/an</li>
                      <li>• Électricité 1960 (fusibles)</li>
                      <li>• Simple vitrage bois</li>
                      <li>• Isolation : 0cm</li>
                      <li>• Cuisine et SdB 1975</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm text-stone-400 uppercase tracking-wider mb-2">Après rénovation (6 mois)</div>
                    <ul className="text-stone-300 space-y-2 text-sm">
                      <li>• Conservation façade brique rose</li>
                      <li>• DPE : B (65 kWh/m²/an)</li>
                      <li>• Facture énergie : 850€/an (-73%)</li>
                      <li>• Électricité normes + domotique</li>
                      <li>• Double vitrage alu gris anthracite</li>
                      <li>• Isolation 14cm + VMC DF</li>
                      <li>• Cuisine design + 2 SdB neuves</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-stone-700 pt-6 grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-light mb-1">248 000€</div>
                    <div className="text-sm text-stone-400">Budget rénovation complète</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light mb-1">22 000€</div>
                    <div className="text-sm text-stone-400">Aides MaPrimeRénov' + CEE</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light mb-1">6 mois</div>
                    <div className="text-sm text-stone-400">Durée chantier (dans délais)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Rénovation */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Les étapes de votre projet de rénovation
            </h2>

            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Visite technique et état des lieux détaillé",
                  duration: "1 visite (2-3h)",
                  description: "Visite complète de votre maison avec notre conducteur de travaux. Diagnostic précis : état structure, électricité (norme NF C 15-100), plomberie, isolation, humidité (humidimètre), performances énergétiques (thermographie si besoin). Photos, mesures, relevé de côtes. Discussion de vos besoins, contraintes, budget. Conseils architecturaux et techniques. Délivrance d'un rapport de visite détaillé (15-20 pages)."
                },
                {
                  number: "02",
                  title: "Conception projet avec architecte (si modification structure)",
                  duration: "3-5 semaines",
                  description: "Si modification murs porteurs, création ouvertures, changement distribution : collaboration avec architecte DPLG. Plans 2D (existant + projet), perspectives 3D réalistes. Note de calcul structure. Dossier déclaration préalable ou permis de construire si nécessaire. Plusieurs itérations jusqu'à validation finale. Si pas de modif structure : notre bureau d'études conçoit le projet."
                },
                {
                  number: "03",
                  title: "Devis détaillé et planning prévisionnel",
                  duration: "1 semaine",
                  description: "Devis détaillé ligne par ligne (30-50 pages) : démolition, gros œuvre si modif, isolation, électricité, plomberie, chauffage, menuiseries, sols, peinture, cuisine, SdB, avec quantités et références matériaux. Planning semaine par semaine (diagramme Gantt). Dossier aides financières : MaPrimeRénov', Éco-PTZ, CEE (nous gérons l'instruction). Rendez-vous présentation devis avec explications. Ajustements possibles selon budget."
                },
                {
                  number: "04",
                  title: "Signature contrat et démarrage administratif",
                  duration: "1 semaine",
                  description: "Signature contrat rénovation avec planning contractuel, prix forfaitaire, pénalités retard, garanties (décennale, RC pro). Délai rétractation 14 jours. Dépôt dossiers aides (MaPrimeRénov' : réponse 15 jours). Déclaration préalable travaux en mairie si modification extérieure (délai 1 mois). Commande matériaux longue durée (menuiseries 6-8 semaines, cuisine 8-10 semaines)."
                },
                {
                  number: "05",
                  title: "Protection, démolition et mise en sécurité",
                  duration: "1-2 semaines",
                  description: "Installation chantier : benne évacuation, protection sols/escaliers, bâches séparation zones. Coupure réseaux (élec, eau, gaz) avec repiquage provisoire si vous restez sur place. Démolition : cuisine/SdB anciennes, cloisons, doublages, revêtements sols. Dépose menuiseries. Évacuation gravats (8-15 tonnes selon surface). Mise en sécurité structure si nécessaire. Protection patrimoine (moulures, parquet ancien)."
                },
                {
                  number: "06",
                  title: "Gros œuvre structure (si modifications)",
                  duration: "2-4 semaines",
                  description: "Si création ouvertures murs porteurs : étaiement, découpe brique, pose IPN (poutre métallique), reprise maçonnerie, linteaux béton. Si ouverture toiture (Velux, chien-assis) : charpente, couverture. Si reprise plancher : renforcement solives, dalle béton. Toutes interventions structure = visa architecte + bureau contrôle si besoin. Contrôles et PV de réception intermédiaires."
                },
                {
                  number: "07",
                  title: "Réseaux techniques : électricité, plomberie, chauffage",
                  duration: "3-4 semaines",
                  description: "Électricité complète aux normes NF C 15-100 : tableau divisionnaire, câblage (gaine ICTA), prises (12 mini salon), inter différentiels 30mA, parafoudre, terre <100 ohms. Plomberie : tuyauterie PER (résiste calcaire), évacuation PVC, adoucisseur si eau dure. Chauffage : PAC air/eau ou chaudière gaz condensation, radiateurs alu, plancher chauffant si dalle. VMC double-flux (caisson, gaines isolées, bouches extraction/insufflation)."
                },
                {
                  number: "08",
                  title: "Isolation thermique et doublage",
                  duration: "2-3 semaines",
                  description: "Isolation combles perdus : laine de verre 300mm soufflée (R=7 mini RE2020). Isolation rampants (combles aménagés) : laine bois 200mm entre chevrons + 60mm sous-chevrons. Isolation murs intérieur : laine de bois 120-140mm + pare-vapeur hygrovariable + rail placo. Isolation plancher bas : liège 80mm ou PSE si vide sanitaire accessible. Doublage plaques plâtre BA13 hydrofuge SdB/cuisine."
                },
                {
                  number: "09",
                  title: "Menuiseries extérieures et étanchéité",
                  duration: "1 semaine (pose)",
                  description: "Pose fenêtres PVC ou alu double vitrage (Uw ≤ 1,3 W/m²K, Sw ≥ 0,30). Volets roulants alu motorisés ou battants alu/bois selon PLU. Porte d'entrée alu isolée (Ud ≤ 1,4). Étanchéité périphérique menuiseries (joint compribande, mousse PU, silicone). Seuils aluminium, appuis fenêtre alu. Test infiltrométrie (option) pour valider étanchéité air (Q4Pa-surf ≤ 0,6 m³/h/m²)."
                },
                {
                  number: "10",
                  title: "Sols, carrelage, parquet",
                  duration: "2-3 semaines",
                  description: "Ragréage fibré chapes irrégulières (épaisseur 5-30mm). Carrelage grès cérame 60×60cm ou 80×80cm (cuisine, SdB, séjour selon choix), joints époxy (anti-tache). Parquet contrecollé chêne 14mm (chambres), pose flottante sur sous-couche phonique. Plinthes assorties 80-100mm. Faïence murale SdB 30×60cm, mosaïque douches italiennes. Seuils de porte alu ou rattrapage niveau parquet/carrelage."
                },
                {
                  number: "11",
                  title: "Peinture, finitions, cuisine, salles de bain",
                  duration: "3-4 semaines",
                  description: "Enduit lissage murs (grain fin). Peinture acrylique lessivable : 2 couches murs (blanc, couleurs selon choix), 1 couche plafond mat. Pose cuisine équipée sur-mesure : meubles, plan travail (quartz, stratifié, inox), crédence, électroménager (four, plaque, hotte, lave-vaisselle), mitigeur, évier. Salles de bain : receveur douche 120×90 ou 140×90, paroi verre, colonne douche thermostatique, meuble vasque suspendu, miroir LED, WC suspendu Geberit, sèche-serviettes."
                },
                {
                  number: "12",
                  title: "Réception des travaux et garanties",
                  duration: "1 journée",
                  description: "Visite de réception en votre présence. Vérification conformité devis/réalisation (checklist 150 points). Liste réserves éventuelles (finitions mineures). Signature PV réception = départ garantie parfait achèvement 1 an (réserves levées sous 1 mois). Remise dossiers : factures, garanties décennale, certificats conformité (Consuel électricité, Qualigaz si gaz), notices équipements, carnet d'entretien. Déclenchement paiement solde (5-10% selon contrat)."
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
              <h3 className="text-2xl font-light mb-4">Durée totale projet rénovation</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-light mb-2">4-6 mois</div>
                  <div className="text-stone-400">Rénovation complète 100-150m²</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">6-9 mois</div>
                  <div className="text-stone-400">Rénovation lourde avec structure</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">0</div>
                  <div className="text-stone-400">Retard de chantier (garantie)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Questions fréquentes rénovation maison Toulouse
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Quel est le prix d'une rénovation complète de maison à Toulouse ?",
                  answer: "Le prix d'une rénovation complète à Toulouse varie entre 1 200€ et 2 500€/m² selon l'ampleur des travaux. Pour une maison toulousaine de 120m², comptez 144 000€ à 300 000€. Rénovation légère (peinture, sols, cuisine, SdB): 1 200-1 500€/m². Rénovation complète (structure, isolation, électricité, plomberie, finitions): 1 800-2 500€/m². Restauration patrimoine (maison de maître, conservation éléments): 2 200-3 000€/m². Ces tarifs incluent main d'œuvre, matériaux, garanties. Aides financières déductibles: MaPrimeRénov' jusqu'à 20 000€, Éco-PTZ 50 000€."
                },
                {
                  question: "Comment rénover une maison toulousaine en brique rose ?",
                  answer: "La rénovation d'une maison toulousaine en brique rose nécessite une expertise spécifique. Conservation des murs en brique rose apparente (nettoyage par micro-gommage, rejointoiement à la chaux). Isolation par l'intérieur pour préserver la façade (12-14cm laine de bois respirante). Respect du PLU centre historique si applicable (déclaration ABF). Toiture: conservation tuiles canal traditionnelles. Traitement humidité par injection si remontées capillaires. EGB Occitanie a rénové 80+ maisons toulousaines traditionnelles avec conservation du patrimoine architectural et performance énergétique optimale (DPE B)."
                },
                {
                  question: "Faut-il un permis pour rénover une maison à Toulouse ?",
                  answer: "Le permis de construire n'est pas nécessaire pour rénovation intérieure sans modification façade ni structure. Déclaration préalable obligatoire si: modification aspect extérieur (fenêtres, couleur façade, toiture), création ouvertures, extension <20m². Permis de construire obligatoire si: extension >20m², surélévation, modification structure porteuse. Zone ABF centre historique Toulouse: avis Architecte Bâtiments de France requis pour tout changement façade/toiture (délai instruction +1 mois). EGB Occitanie gère l'ensemble des démarches administratives pour vous."
                },
                {
                  question: "Combien de temps pour rénover une maison à Toulouse ?",
                  answer: "Durée rénovation maison Toulouse selon ampleur: Rénovation légère (peinture, sols, cuisine): 2-3 mois. Rénovation complète sans gros œuvre: 4-6 mois. Rénovation lourde avec structure: 6-9 mois. Restauration maison de maître: 9-12 mois. Ces délais incluent: études, commande matériaux, travaux, finitions, réception. EGB Occitanie garantit les délais contractuels avec 0 retard sur nos chantiers de rénovation ces 5 dernières années (suivi planning hebdomadaire rigoureux)."
                },
                {
                  question: "Quelles aides pour rénover une maison à Toulouse en 2025 ?",
                  answer: "Aides disponibles rénovation énergétique Toulouse 2025: MaPrimeRénov' (jusqu'à 20 000€ selon revenus et travaux), MaPrimeRénov' Sérénité (50% coût travaux, plafond 35 000€ ménages modestes, gain énergétique >35% obligatoire), Éco-PTZ (prêt 0% jusqu'à 50 000€, remboursable sur 20 ans), CEE Certificats Économie Énergie (primes énergies 2 000-5 000€), TVA réduite 5,5% sur travaux rénovation énergétique (vs 20% normal = économie 10 000-20 000€), Exonération taxe foncière possible 50-100% pendant 3 ans. EGB Occitanie vous accompagne dans montage dossiers aides (service inclus, taux acceptation 95%)."
                },
                {
                  question: "Peut-on habiter pendant les travaux de rénovation ?",
                  answer: "Cela dépend de l'ampleur des travaux. Rénovation légère (peinture, sols): possible de rester en aménageant pièce par pièce (durée +20-30%). Rénovation complète électricité/plomberie: difficile (coupures eau/élec fréquentes, poussière, bruit). Rénovation lourde structure: impossible (dangereux, chantier 8h-17h). Solution: location temporaire (6-9 mois), famille, ou rénovation en 2 phases (1er étage puis RDC = durée +40% mais permet occupation partielle). EGB Occitanie optimise le planning pour minimiser la gêne et peut organiser une rénovation phasée selon vos contraintes."
                },
                {
                  question: "Comment améliorer le DPE de ma maison toulousaine ?",
                  answer: "Pour passer d'un DPE G/F à un DPE B/C (gain 200-300 kWh/m²/an), priorités: 1) Isolation combles 300mm (30% économies chauffage), 2) Isolation murs intérieur 120-140mm (25% économies), 3) Changement menuiseries double vitrage (15% économies), 4) Changement chauffage PAC air/eau ou condensation (20% économies), 5) VMC double-flux avec récupération chaleur (10% économies). Budget DPE G→B pour 120m²: 35 000-55 000€ (isolation+menuiseries+chauffage). Aides MaPrimeRénov' Sérénité: jusqu'à 27 500€ déductibles. ROI: 8-12 ans via économies énergie. EGB Occitanie garantit le gain DPE contractuellement."
                },
                {
                  question: "Rénovation maison toulousaine : quelles erreurs éviter ?",
                  answer: "Erreurs fréquentes à éviter: 1) Isoler par l'extérieur (cache brique rose, interdit PLU centre), privilégier ITI. 2) Négliger traitement humidité avant isolation (moisissures, dégâts). 3) Sous-estimer budget (prévoir +15% imprévus structure ancienne). 4) Électricité partielle (tout refaire d'un coup, évite re-ouvrir murs). 5) Choisir artisans non qualifiés RGE (perte aides 10 000-30 000€). 6) Oublier déclaration préalable ABF centre historique (amende 6 000€, remise en état). 7) Modifier structure sans architecte (effondrement, assurance refuse sinistre). 8) Pas de contrat écrit détaillé (litiges, abandon chantier). EGB Occitanie sécurise votre projet avec contrat CCMI, garanties, suivi."
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
                Une question sur votre projet de rénovation de maison à Toulouse ?
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
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12">
              Pourquoi choisir EGB Occitanie pour votre rénovation ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Expertise maison toulousaine",
                  description: "80+ maisons toulousaines en brique rose rénovées. Maîtrise parfaite des techniques conservation patrimoine + performance énergétique. Connaissance PLU et zones ABF Toulouse."
                },
                {
                  title: "200+ rénovations depuis 2008",
                  description: "15 ans d'expérience rénovation tous types : légère, complète, lourde, patrimoine. Retour d'expérience sur tous les imprévus possibles en maisons anciennes."
                },
                {
                  title: "0 retard de chantier garanti",
                  description: "Planning contractuel au jour près, suivi hebdomadaire rigoureux. 100% de nos chantiers rénovation livrés dans les délais ces 5 dernières années. Pénalités retard prévues contrat."
                },
                {
                  title: "Artisans RGE qualifiés",
                  description: "Tous nos artisans RGE (Reconnu Garant Environnement) pour aides financières. Qualibat, Qualipac, Qualifelec. Savoir-faire traditionnel toulousain."
                },
                {
                  title: "Gestion complète aides financières",
                  description: "Montage dossiers MaPrimeRénov', Éco-PTZ, CEE (service inclus). Taux acceptation 95%. Avance des primes (pas d'attente remboursement). Économie 10 000-30 000€ garantie."
                },
                {
                  title: "Garanties et assurances complètes",
                  description: "Garantie décennale Allianz, RC pro AXA, garantie parfait achèvement 1 an, garantie biennale équipements 2 ans. Sécurité juridique et financière totale."
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
                Prêt à transformer votre maison toulousaine ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 text-base font-medium hover:bg-stone-100 transition-all duration-300"
              >
                Demander un devis gratuit sous 48h
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
                href="/extension-maison-toulouse"
                className="group bg-white p-6 border border-stone-200 hover:border-stone-400 transition-all"
              >
                <h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-stone-700">
                  Extension Maison Toulouse
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  Agrandissement, surélévation, extension bois. Permis de construire géré.
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
                  200+ maisons rénovées à Toulouse. Photos avant/après, témoignages clients.
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
