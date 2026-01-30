import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rénovation Appartement Saint-Cyprien Toulouse (31000) | EGB Occitanie",
  description: "Expert rénovation quartier Saint-Cyprien depuis 15 ans. Briques roses 1880-1930, ABF modéré. Prix 2025 : 2 400-3 200€/m². 20 projets réussis, 100% validations ABF.",
  keywords: "rénovation Saint-Cyprien Toulouse, rénovation appartement Saint-Cyprien, ABF Saint-Cyprien, rénovation briques roses, prix rénovation Saint-Cyprien",
  alternates: {
    canonical: "https://www.egb-occitanie.fr/renovation-saint-cyprien-toulouse"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une rénovation à Saint-Cyprien Toulouse en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix rénovation Saint-Cyprien Toulouse 2025 : 2 400-3 200€/m² selon ampleur travaux et conservation briques. Rénovation complète appartement 80m² : 192 000-256 000€. Prix modérés vs Capitole car ABF moins strict + accès Garonne valorise. Inclus : conservation briques roses extérieures, rénovation intérieure moderne, isolation thermique/phonique renforcée (Garonne/tramway), électricité aux normes, plomberie complète."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il une autorisation ABF pour rénover à Saint-Cyprien ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Saint-Cyprien ABF modéré : consultation ABF obligatoire travaux façades/toitures visibles Garonne ou rues principales. Intérieur : libre sauf immeubles classés MH (rares). Délai : +3-4 semaines vs quartiers hors ABF. Taux acceptation : 90% si respect briques roses extérieures. EGB Occitanie gère dossier ABF : 100% validations Saint-Cyprien (20 projets)."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi rénover à Saint-Cyprien plutôt qu'un autre quartier Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Saint-Cyprien offre 4 avantages rénovation : 1) Prix attractifs 3 500-6 000€/m² achat (-20% vs Capitole) = budget réno confortable. 2) Gentrification dynamique : +5,4% prix 2024-2025, quartier montant = valorisation forte. 3) Vue Garonne : appartements rénovés terrasse/vue se vendent +15-20% vs sans vue. 4) Vie quartier authentique : marchés, artistes, jeunes familles = cadre vivant. Rentabilité : réno 2 400€/m² + achat 4 500€/m² = 6 900€/m² total vs 7 500€/m² Capitole neuf."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour rénover un appartement Saint-Cyprien ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Délai rénovation Saint-Cyprien : 4-6 mois selon ampleur. Détail : 1 mois dossier ABF (si façade), 3-5 mois travaux (gros œuvre 1-2 mois + second œuvre 2-3 mois). Contraintes : immeubles anciens 1880-1930 = surprises chantier (planchers bois, huisseries bois massif). EGB Occitanie : délais tenus 95% projets Saint-Cyprien."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les travaux prioritaires en rénovation Saint-Cyprien ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top 5 travaux prioritaires Saint-Cyprien : 1) Isolation phonique (tramway T1, rue République bruyante) : double vitrage acoustique 45-50 dB = 8 000-12 000€. 2) Électricité (installations années 70-90 obsolètes) : mise aux normes complète = 80-120€/m². 3) Plomberie (canalisations plomb) : remplacement total = 6 000-10 000€ pour 80m². 4) Isolation thermique (DPE E-F fréquent) : ITE façade arrière autorisée = 15 000-25 000€. 5) Cuisine/salle de bain (équipements vétustes) : rénovation complète standing = 15 000-30 000€."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Rénover appartement Saint-Cyprien Toulouse",
  "step": [
    {"@type": "HowToStep", "text": "1. Vérifier si immeuble classé ABF (consultation DRAC Occitanie)"},
    {"@type": "HowToStep", "text": "2. Diagnostic amiante/plomb/électricité obligatoire (immeubles avant 1997)"},
    {"@type": "HowToStep", "text": "3. Architecte/maître d'œuvre si travaux façade/toiture (ABF)"},
    {"@type": "HowToStep", "text": "4. Devis détaillés 3 entreprises minimum (comparer prestations)"},
    {"@type": "HowToStep", "text": "5. Déclaration préalable travaux mairie (si façade/toiture)"},
    {"@type": "HowToStep", "text": "6. Travaux gros œuvre (murs, sols, plomberie, électricité)"},
    {"@type": "HowToStep", "text": "7. Second œuvre (isolation, cloisons, revêtements)"},
    {"@type": "HowToStep", "text": "8. Finitions (peinture, cuisine, salle de bain)"},
    {"@type": "HowToStep", "text": "9. Réception travaux + garanties (décennale, parfait achèvement)"}
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EGB Occitanie Rénovation Saint-Cyprien",
  "image": "https://www.egb-occitanie.fr/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toulouse",
    "addressRegion": "Occitanie",
    "postalCode": "31000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6045,
    "longitude": 1.4442
  },
  "telephone": "+33665015882",
  "priceRange": "2400-3200€/m²",
  "areaServed": "Saint-Cyprien Toulouse"
};

export default function RenovationSaintCyprienToulouse() {
  return (
    <main className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section - Editorial Style */}
      <section className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Accueil</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/renovation" className="hover:text-gray-900 transition-colors">Rénovation</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-gray-900 font-medium">Saint-Cyprien</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight`}>
            Rénovation Appartement Saint-Cyprien Toulouse
          </h1>

          {/* Intro */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Expert rénovation quartier Saint-Cyprien depuis 15 ans. Rive gauche Garonne,
            briques roses authentiques 1880-1930, ABF modéré.
            Prix 2025 : 2 400-3 200€/m². 20 projets réussis, 100% validations ABF.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">17 320</div>
              <div className="text-sm text-gray-600">Habitants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4 747€</div>
              <div className="text-sm text-gray-600">Prix m² (nov 2025)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1880-1930</div>
              <div className="text-sm text-gray-600">Immeubles Briques</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">90%</div>
              <div className="text-sm text-gray-600">Taux validation ABF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Section 1 */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-3xl font-bold mb-6 text-gray-900`}>
            Pourquoi Rénover à Saint-Cyprien Toulouse ?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prix Attractifs vs Centre Historique</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Achat 3 500-6 000€/m²</strong> (-20% vs Capitole) + rénovation 2 400-3 200€/m²
                = <strong>total 5 900-9 200€/m²</strong> vs 10 000€/m²+ rive droite neuf.
                Budget rénovation confortable, marges valorisation importantes.
                <strong>ROI rénovation : +25-35%</strong> sur prix achat initial.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gentrification Dynamique en Cours</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>+5,4% prix 2024-2025</strong> (vs +2% moyenne Toulouse).
                Quartier montant : artistes, jeunes actifs, familles CSP+.
                Commerces branches, restaurants, projets urbains (réaménagement quais Garonne).
                <strong>Valorisation 5-7%/an prévue 2025-2030</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vue Garonne = Valorisation +15-20%</h3>
              <p className="text-gray-700 leading-relaxed">
                Appartements rénovés <strong>vue Garonne/terrasse</strong> :
                6 000-6 500€/m² vs 4 500€/m² sans vue.
                Quais piétons, pistes cyclables, guinguettes.
                <strong>Cadre vie unique Toulouse</strong> = argument revente puissant.
                Rareté offre vue Garonne.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vie Quartier Authentique & Bohème</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Communauté artistes/créatifs</strong>, galeries, ateliers, théâtres.
                Marché Saint-Cyprien (dimanche), bars/restaurants branchés rue Récollettes.
                <strong>Mixité sociale positive</strong>, ambiance village.
                École alternative, crèches, services complets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Témoignages */}
        <section className="mb-16 bg-gray-50 -mx-6 px-6 py-12 md:-mx-12 md:px-12">
          <div className="text-center mb-10">
            <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              20 Projets Réussis Saint-Cyprien
            </div>
            <h2 className={`${playfair.className} text-3xl font-bold text-gray-900 mb-2`}>
              Ils Nous Ont Fait Confiance
            </h2>
            <p className="text-gray-600">
              100% validations ABF · Note moyenne 4,9/5 · Garanties décennales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  SC
                </div>
                <div className="ml-3">
                  <p className="font-bold text-gray-900">Sophie C.</p>
                  <p className="text-sm text-gray-600">Rue Récollettes · Sept 2024</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700 italic leading-relaxed text-sm">
                "Rénovation complète 75m² avec vue Garonne. EGB Occitanie a géré tout le dossier ABF en 3 semaines. Travaux terminés en 5 mois pile, qualité irréprochable. Notre appartement vaut maintenant +30% selon l'agence."
              </p>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  ML
                </div>
                <div className="ml-3">
                  <p className="font-bold text-gray-900">Marc L.</p>
                  <p className="text-sm text-gray-600">Place Intérieure · Mars 2024</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700 italic leading-relaxed text-sm">
                "Isolation phonique + électricité + cuisine neuve pour 82m². Budget tenu au centime près (164 000€), délais respectés. Le double vitrage a transformé notre quotidien, plus aucun bruit du tramway."
              </p>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  AD
                </div>
                <div className="ml-3">
                  <p className="font-bold text-gray-900">Anne D.</p>
                  <p className="text-sm text-gray-600">Quai Garonne · Janv 2024</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="text-gray-700 italic leading-relaxed text-sm">
                "Investissement locatif : achat 350k€ + réno 180k€ = 530k€. Appartement loué 1 350€/mois 48h après annonce. ROI conforme prévisions. Équipe pro, suivi hebdomadaire, aucune surprise."
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Prix */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-3xl font-bold mb-4 text-gray-900`}>
            Prix Rénovation Saint-Cyprien Toulouse 2025
          </h2>
          <p className="text-gray-600 mb-8">
            Tarifs transparents selon ampleur travaux. Conservation briques roses extérieures,
            modernisation intérieure. Devis détaillé gratuit sous 48h.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Type Rénovation</th>
                  <th className="px-6 py-4 text-right font-semibold">60m²</th>
                  <th className="px-6 py-4 text-right font-semibold">80m²</th>
                  <th className="px-6 py-4 text-right font-semibold">100m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-gray-900">Rénovation Légère</p>
                      <p className="text-sm text-gray-600">Peinture, sols, cuisine/SDB standards</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">42 000€</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">56 000€</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">70 000€</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-gray-900">Rénovation Moyenne</p>
                      <p className="text-sm text-gray-600">+ Électricité, plomberie, isolation phonique</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">84 000€</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">112 000€</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">140 000€</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-gray-900">Rénovation Complète</p>
                      <p className="text-sm text-gray-600">+ Gros œuvre, ITE, cuisine/SDB premium</p>
                      <p className="text-xs text-gray-900 font-semibold mt-1">Le plus demandé</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">144 000€</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">192 000€</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">240 000€</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-gray-900">Rénovation Haut Standing</p>
                      <p className="text-sm text-gray-600">+ Parquet massif, marbre, domotique, terrasse</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">192 000€</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">256 000€</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">320 000€</td>
                </tr>
                <tr className="bg-gray-900 text-white">
                  <td className="px-6 py-3 font-bold">Prix au m² TTC</td>
                  <td className="px-6 py-3 text-right font-bold">700-3 200€/m²</td>
                  <td className="px-6 py-3 text-right font-bold">700-3 200€/m²</td>
                  <td className="px-6 py-3 text-right font-bold">700-3 200€/m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r">
            <h3 className="font-bold text-gray-900 mb-3">Inclus dans Nos Prix Rénovation Saint-Cyprien</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-900 font-bold mt-1">·</span>
                <span><strong>Dossier ABF complet</strong> si travaux façade (consultation architecte, plans, photos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 font-bold mt-1">·</span>
                <span><strong>Diagnostics obligatoires</strong> (amiante, plomb, électricité immeubles avant 1997)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 font-bold mt-1">·</span>
                <span><strong>Conservation briques roses</strong> extérieures (nettoyage, rejointoiement si besoin)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 font-bold mt-1">·</span>
                <span><strong>Isolation phonique renforcée</strong> (tramway T1, rue République bruyante)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 font-bold mt-1">·</span>
                <span><strong>Électricité aux normes</strong> (remplacement installations années 70-90)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 font-bold mt-1">·</span>
                <span><strong>Garanties décennale + parfait achèvement</strong> (protection totale 10 ans)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 - Comparaison */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-3xl font-bold mb-6 text-gray-900`}>
            Saint-Cyprien vs Autres Quartiers Toulouse
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-900">Quartier</th>
                  <th className="px-6 py-3 text-right font-semibold text-gray-900">Prix Achat/m²</th>
                  <th className="px-6 py-3 text-right font-semibold text-gray-900">Prix Réno/m²</th>
                  <th className="px-6 py-3 text-center font-semibold text-gray-900">ABF</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-900">Profil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50 font-medium">
                  <td className="px-6 py-3 text-gray-900">Saint-Cyprien</td>
                  <td className="px-6 py-3 text-right text-gray-900">4 747€</td>
                  <td className="px-6 py-3 text-right text-gray-900">2 400-3 200€</td>
                  <td className="px-6 py-3 text-center text-gray-900">Modéré</td>
                  <td className="px-6 py-3 text-gray-700">Artistes, jeunes familles</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Carmes</td>
                  <td className="px-6 py-3 text-right text-gray-900">5 200€</td>
                  <td className="px-6 py-3 text-right text-gray-900">2 800-3 500€</td>
                  <td className="px-6 py-3 text-center text-gray-900">Strict</td>
                  <td className="px-6 py-3 text-gray-700">CSP++, patrimoine</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Capitole</td>
                  <td className="px-6 py-3 text-right text-gray-900">6 000€</td>
                  <td className="px-6 py-3 text-right text-gray-900">3 000-4 000€</td>
                  <td className="px-6 py-3 text-center text-gray-900">Ultra-strict</td>
                  <td className="px-6 py-3 text-gray-700">Prestige, investisseurs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Minimes</td>
                  <td className="px-6 py-3 text-right text-gray-900">3 200€</td>
                  <td className="px-6 py-3 text-right text-gray-900">1 800-2 500€</td>
                  <td className="px-6 py-3 text-center text-gray-900">Non</td>
                  <td className="px-6 py-3 text-gray-700">Investisseurs, réno DPE</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-900">Arnaud-Bernard</td>
                  <td className="px-6 py-3 text-right text-gray-900">3 800€</td>
                  <td className="px-6 py-3 text-right text-gray-900">2 200-2 800€</td>
                  <td className="px-6 py-3 text-center text-gray-900">Partiel</td>
                  <td className="px-6 py-3 text-gray-700">Étudiants, bohème</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r">
            <h3 className="font-bold text-gray-900 mb-2">Conclusion Expert EGB Occitanie</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Saint-Cyprien = meilleur rapport qualité/prix rénovation Toulouse rive gauche</strong>.
              Prix achat modérés vs Carmes/Capitole (-20 à -30%) + rénovation économique (ABF modéré) +
              gentrification dynamique (+5,4%/an) = <strong>ROI optimal 25-35%</strong> sur 3-5 ans.
              Profil idéal : jeunes actifs/familles cherchant authenticité + vue Garonne + cadre vie vibrant
              sans payer prix premium centre historique.
            </p>
          </div>
        </section>

        {/* Section 5 - FAQ */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-3xl font-bold mb-8 text-gray-900`}>
            Questions Fréquentes Rénovation Saint-Cyprien
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-gray-400 transition-colors group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quels sont les travaux prioritaires en rénovation Saint-Cyprien ?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                <p><strong>Top 5 travaux Saint-Cyprien selon fréquence :</strong></p>
                <p><strong>1. Isolation phonique (95% appartements nécessitent)</strong> : Tramway T1 rue République,
                trafic routier, vie nocturne = nuisances sonores importantes. <strong>Solution</strong> : double vitrage
                acoustique 45-50 dB (8 000-12 000€ pour 80m²) + isolation murs mitoyens (6 000-10 000€).</p>
                <p><strong>2. Électricité obsolète (80% immeubles avant 1990)</strong> : Installations années 70-90
                non conformes normes NF C 15-100. Risques : court-circuits, incendies. <strong>Solution</strong> :
                mise aux normes complète 80-120€/m² (6 400-9 600€ pour 80m²).</p>
                <p><strong>3. Plomberie plomb (60% immeubles avant 1950)</strong> : Canalisations plomb interdites
                depuis 2013 (toxicité). <strong>Solution</strong> : remplacement total PER/cuivre 6 000-10 000€ pour 80m².</p>
                <p><strong>4. DPE E-F améliorer (70% appartements)</strong> : Isolation thermique faible = factures
                chauffage élevées + malus vente. <strong>Solution</strong> : ITE façade arrière (côté cour) 15 000-25 000€ +
                VMC double-flux 3 000-5 000€.</p>
                <p><strong>5. Cuisine/SDB vétustes (85% appartements)</strong> : Équipements années 80-2000 obsolètes.
                <strong>Solution</strong> : rénovation complète standing 15 000-30 000€ (cuisine 10-20k€ + SDB 5-10k€).</p>
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-gray-400 transition-colors group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Comment gérer l'ABF pour travaux façade Saint-Cyprien ?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                <p><strong>ABF Saint-Cyprien = modéré vs Carmes/Capitole</strong>. Consultation obligatoire si :</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Travaux façades visibles Garonne ou rues principales (République, Récollettes, Patte d'Oie)</li>
                  <li>Changement menuiseries extérieures (fenêtres, volets, portes)</li>
                  <li>Modification toiture (surélévation, lucarnes, chien-assis)</li>
                  <li>Ravalement façade (couleur, enduit, briques)</li>
                </ul>
                <p><strong>Procédure :</strong></p>
                <ol className="list-decimal ml-6 space-y-2">
                  <li>Consultation architecte conseil ABF (EGB Occitanie gère 100% dossiers)</li>
                  <li>Dossier photos + plans + nuancier couleurs briques/enduits (respect teintes existantes)</li>
                  <li>Déclaration préalable travaux mairie Toulouse</li>
                  <li>Instruction urbanisme 1 mois + transmission ABF</li>
                  <li>Avis ABF 3-4 semaines (favorable 90% cas si respect briques roses)</li>
                  <li>Décision mairie définitive</li>
                </ol>
                <p><strong>Délai total</strong> : 3-4 mois vs 2 mois hors ABF. <strong>Taux acceptation</strong> : 90%
                si conservation briques roses extérieures + menuiseries bois/aluminium ton brique.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-gray-400 transition-colors group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Rentabilité investissement locatif après rénovation Saint-Cyprien ?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                <p><strong>Exemple type investissement locatif Saint-Cyprien 2025 :</strong></p>
                <p><strong>Achat</strong> : Appartement 80m² à rénover = 380 000€ (4 750€/m²)</p>
                <p><strong>Rénovation</strong> : Complète standing = 200 000€ (2 500€/m²)</p>
                <p><strong>Total investissement</strong> : 580 000€ (7 250€/m² post-rénovation)</p>
                <p><strong>Loyer mensuel post-réno</strong> : 1 400€/mois (17,5€/m²) pour T3 rénové standing</p>
                <p><strong>Rendement brut</strong> : (16 800€ × 100) / 580 000€ = <strong>2,9% brut</strong></p>
                <p><strong>Rendement net</strong> : 2,0-2,3% après charges (copro 150€/mois, taxe foncière 1 500€/an, entretien)</p>
                <p><strong>Valorisation</strong> : Appartement rénové 80m² vaut 480 000-520 000€ (6 000-6 500€/m² si vue Garonne)
                = <strong>plus-value immédiate -60 000€ à +60 000€</strong> selon emplacement exact.</p>
                <p><strong>ROI total 5 ans</strong> : Loyers 84 000€ + valorisation moyenne +50 000€ (gentrification +5%/an)
                = <strong>134 000€ gain sur 580k€ = 23% ROI</strong> soit 4,6%/an.</p>
                <p><strong>Conclusion</strong> : Rentabilité modérée MAIS sécurisée (quartier montant + demande locative forte jeunes actifs).</p>
              </div>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-gray-400 transition-colors group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quelles aides rénovation disponibles Saint-Cyprien 2025 ?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                <p><strong>Aides rénovation énergétique Saint-Cyprien (cumul possible) :</strong></p>
                <p><strong>1. MaPrimeRénov' (État)</strong> :</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Isolation murs extérieurs (ITE) : jusqu'à 75€/m² (75m² = 5 625€)</li>
                  <li>Changement chauffage gaz → PAC : jusqu'à 5 000€</li>
                  <li>VMC double-flux : jusqu'à 2 500€</li>
                  <li>Audit énergétique : 500€</li>
                </ul>
                <p><strong>Conditions</strong> : Résidence principale, revenus modestes/intermédiaires, RGE obligatoire</p>
                <p><strong>2. Éco-PTZ (Prêt taux 0%)</strong> :</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Jusqu'à 50 000€ prêt 0% sur 20 ans</li>
                  <li>Financer travaux rénovation énergétique</li>
                  <li>Sans condition ressources</li>
                </ul>
                <p><strong>3. TVA réduite 5,5%</strong> :</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Travaux rénovation énergétique (vs 20% standard)</li>
                  <li>Économie : 14,5% sur montant travaux</li>
                  <li>Exemple : 50 000€ travaux = 7 250€ économie TVA</li>
                </ul>
                <p><strong>4. Aides Toulouse Métropole (locales)</strong> :</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Subvention ravalement façades : jusqu'à 30% coût HT (max 10 000€)</li>
                  <li>Prime isolation thermique : 1 000-3 000€ selon revenus</li>
                </ul>
                <p><strong>Exemple cumul</strong> : Rénovation énergétique 80m² = 80 000€ TTC → Aides MaPrimeRénov
                13 625€ + Éco-PTZ 50 000€ + TVA 5,5% économie 10 000€ = <strong>23 625€ aides</strong> soit 30% coût total.</p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-200 pt-12 text-center">
          <h2 className={`${playfair.className} text-3xl font-bold mb-4 text-gray-900`}>
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            EGB Occitanie vous accompagne de A à Z : diagnostic complet, dossier ABF si besoin,
            travaux clés en main, garanties décennales. Devis détaillé gratuit sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0665015882"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Appeler 06 65 01 58 82
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-colors"
            >
              Devis Gratuit
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            20 projets réussis · 100% validations ABF · Note 4,9/5
          </p>
        </section>
      </article>

      {/* Internal Links */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-bold text-center mb-8 text-gray-900">
            Découvrez Aussi Nos Services Rénovation Toulouse
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link
              href="/renovation-maison-carmes-toulouse"
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow transition-all text-center"
            >
              <p className="font-bold text-gray-900">Carmes</p>
              <p className="text-xs text-gray-500 mt-1">Patrimoine · ABF Strict</p>
            </Link>
            <Link
              href="/renovation-capitole-toulouse"
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow transition-all text-center"
            >
              <p className="font-bold text-gray-900">Capitole</p>
              <p className="text-xs text-gray-500 mt-1">Prestige · Centre</p>
            </Link>
            <Link
              href="/renovation-minimes-toulouse"
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow transition-all text-center"
            >
              <p className="font-bold text-gray-900">Minimes</p>
              <p className="text-xs text-gray-500 mt-1">Investissement</p>
            </Link>
            <Link
              href="/renovation-busca-toulouse"
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow transition-all text-center"
            >
              <p className="font-bold text-gray-900">Busca</p>
              <p className="text-xs text-gray-500 mt-1">Familial</p>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/renovation"
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow transition-all text-center"
            >
              <p className="font-bold text-gray-900">Rénovation</p>
              <p className="text-xs text-gray-500 mt-1">Tous travaux</p>
            </Link>
            <Link
              href="/extension"
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow transition-all text-center"
            >
              <p className="font-bold text-gray-900">Extension</p>
              <p className="text-xs text-gray-500 mt-1">Agrandissement</p>
            </Link>
            <Link
              href="/contact"
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow transition-all text-center"
            >
              <p className="font-bold text-gray-900">Devis Gratuit</p>
              <p className="text-xs text-gray-500 mt-1">Réponse 48h</p>
            </Link>
            <Link
              href="/avis"
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow transition-all text-center"
            >
              <p className="font-bold text-gray-900">Avis Clients</p>
              <p className="text-xs text-gray-500 mt-1">Note 4,9/5</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
