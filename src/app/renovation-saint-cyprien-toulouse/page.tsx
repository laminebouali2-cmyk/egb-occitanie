import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rénovation Saint-Cyprien Toulouse | Expert Briques Roses & ABF",
  description: "Rénovation appartement/maison Saint-Cyprien Toulouse. Rive gauche Garonne, briques roses authentiques. ABF modéré. Prix 2025 : 2 400-3 200€/m². Devis gratuit 06 65 01 58 82.",
  keywords: "rénovation Saint-Cyprien Toulouse, rénovation briques roses, appartement Garonne, rénovation ABF Toulouse, prix rénovation Saint-Cyprien, quartier authentique Toulouse",
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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-700 via-rose-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-rose-100">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/renovation" className="hover:text-white transition-colors">Rénovation</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium">Saint-Cyprien</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight`}>
                Rénovation Appartement
                <span className="block text-rose-200 mt-2">Saint-Cyprien Toulouse</span>
              </h1>
              <p className="text-xl text-rose-50 mb-8 leading-relaxed">
                Expert rénovation quartier Saint-Cyprien depuis 15 ans. Rive gauche Garonne,
                briques roses authentiques 1880-1930, ABF modéré.
                Prix 2025 : 2 400-3 200€/m². 20 projets réussis, 100% validations ABF.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0665015882"
                  className="inline-block bg-white text-rose-700 px-8 py-4 rounded-lg font-semibold hover:bg-rose-50 transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  📞 06 65 01 58 82
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-rose-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-900 transition-all border-2 border-white text-center"
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-rose-100 mb-2">17 320</div>
                <div className="text-sm text-rose-50">Habitants</div>
                <div className="text-xs text-rose-200 mt-1">Quartier dynamique</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-rose-100 mb-2">4 747€</div>
                <div className="text-sm text-rose-50">Prix m² (nov 2025)</div>
                <div className="text-xs text-rose-200 mt-1">+5,4% en 1 an</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-rose-100 mb-2">1880-1930</div>
                <div className="text-sm text-rose-50">Immeubles Briques</div>
                <div className="text-xs text-rose-200 mt-1">Patrimoine authentique</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-rose-100 mb-2">90%</div>
                <div className="text-sm text-rose-50">Taux ABF</div>
                <div className="text-xs text-rose-200 mt-1">Validation dossiers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Rénover Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Pourquoi Rénover à Saint-Cyprien Toulouse ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Avantage 1 */}
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prix Attractifs vs Centre Historique
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Achat 3 500-6 000€/m²</strong> (-20% vs Capitole) + rénovation 2 400-3 200€/m²
                = <strong>total 5 900-9 200€/m²</strong> vs 10 000€/m²+ rive droite neuf.
                Budget rénovation confortable, marges valorisation importantes.
                <strong>ROI rénovation : +25-35%</strong> sur prix achat initial.
              </p>
            </div>

            {/* Avantage 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gentrification Dynamique en Cours
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>+5,4% prix 2024-2025</strong> (vs +2% moyenne Toulouse).
                Quartier montant : artistes, jeunes actifs, familles CSP+.
                Commerces branches, restaurants, projets urbains (réaménagement quais Garonne).
                <strong>Valorisation 5-7%/an prévue 2025-2030</strong>.
              </p>
            </div>

            {/* Avantage 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Vue Garonne = Valorisation +15-20%
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Appartements rénovés <strong>vue Garonne/terrasse</strong> :
                6 000-6 500€/m² vs 4 500€/m² sans vue.
                Quais piétons, pistes cyclables, guinguettes.
                <strong>Cadre vie unique Toulouse</strong> = argument revente puissant.
                Rareté offre vue Garonne.
              </p>
            </div>

            {/* Avantage 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Vie Quartier Authentique & Bohème
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Communauté artistes/créatifs</strong>, galeries, ateliers, théâtres.
                Marché Saint-Cyprien (dimanche), bars/restaurants branchés rue Récollettes.
                <strong>Mixité sociale positive</strong>, ambiance village.
                École alternative, crèches, services complets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prix Détaillés Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900`}>
            Prix Rénovation Saint-Cyprien Toulouse 2025
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tarifs transparents selon ampleur travaux. Conservation briques roses extérieures,
            modernisation intérieure. Devis détaillé gratuit sous 48h.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-rose-600 to-orange-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Type Rénovation</th>
                  <th className="px-6 py-4 text-right font-semibold">Appart 60m²</th>
                  <th className="px-6 py-4 text-right font-semibold">Appart 80m²</th>
                  <th className="px-6 py-4 text-right font-semibold">Appart 100m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rénovation Légère
                    <div className="text-sm text-gray-500">Peinture, sols, cuisine/SDB standards</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">42 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">56 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">70 000€</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rénovation Moyenne
                    <div className="text-sm text-gray-500">+ Électricité, plomberie, isolation phonique</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">84 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">112 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">140 000€</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rénovation Complète
                    <div className="text-sm text-gray-500">+ Gros œuvre, ITE, cuisine/SDB premium</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">144 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">192 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">240 000€</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Rénovation Haut Standing
                    <div className="text-sm text-gray-500">+ Parquet massif, marbre, domotique, terrasse</div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-900">192 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">256 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">320 000€</td>
                </tr>
                <tr className="bg-gradient-to-r from-rose-50 to-orange-50">
                  <td className="px-6 py-4 text-sm text-gray-700 italic">
                    Prix au m² TTC
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">700-3 200€/m²</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">700-3 200€/m²</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">700-3 200€/m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>✅</span>
              <span>Inclus dans Nos Prix Rénovation Saint-Cyprien</span>
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Dossier ABF complet</strong> si travaux façade (consultation architecte, plans, photos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Diagnostics obligatoires</strong> (amiante, plomb, électricité immeubles avant 1997)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Conservation briques roses</strong> extérieures (nettoyage, rejointoiement si besoin)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Isolation phonique renforcée</strong> (tramway T1, rue République bruyante)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Électricité aux normes</strong> (remplacement installations années 70-90)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Garanties décennale + parfait achèvement</strong> (protection totale 10 ans)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparaison Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Saint-Cyprien vs Autres Quartiers Toulouse
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Quartier</th>
                  <th className="px-6 py-4 text-right font-semibold text-gray-900">Prix Achat/m²</th>
                  <th className="px-6 py-4 text-right font-semibold text-gray-900">Prix Réno/m²</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">ABF</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Profil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-rose-50 font-medium">
                  <td className="px-6 py-4 text-gray-900">Saint-Cyprien</td>
                  <td className="px-6 py-4 text-right text-gray-900">4 747€</td>
                  <td className="px-6 py-4 text-right text-gray-900">2 400-3 200€</td>
                  <td className="px-6 py-4 text-center text-gray-900">Modéré</td>
                  <td className="px-6 py-4 text-gray-700">Artistes, jeunes familles</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Carmes</td>
                  <td className="px-6 py-4 text-right text-gray-900">5 200€</td>
                  <td className="px-6 py-4 text-right text-gray-900">2 800-3 500€</td>
                  <td className="px-6 py-4 text-center text-gray-900">Strict</td>
                  <td className="px-6 py-4 text-gray-700">CSP++, patrimoine</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Capitole</td>
                  <td className="px-6 py-4 text-right text-gray-900">6 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900">3 000-4 000€</td>
                  <td className="px-6 py-4 text-center text-gray-900">Ultra-strict</td>
                  <td className="px-6 py-4 text-gray-700">Prestige, investisseurs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Minimes</td>
                  <td className="px-6 py-4 text-right text-gray-900">3 200€</td>
                  <td className="px-6 py-4 text-right text-gray-900">1 800-2 500€</td>
                  <td className="px-6 py-4 text-center text-gray-900">Non</td>
                  <td className="px-6 py-4 text-gray-700">Investisseurs, réno DPE</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Arnaud-Bernard</td>
                  <td className="px-6 py-4 text-right text-gray-900">3 800€</td>
                  <td className="px-6 py-4 text-right text-gray-900">2 200-2 800€</td>
                  <td className="px-6 py-4 text-center text-gray-900">Partiel</td>
                  <td className="px-6 py-4 text-gray-700">Étudiants, bohème</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">💡 Conclusion Expert EGB Occitanie</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Saint-Cyprien = meilleur rapport qualité/prix rénovation Toulouse rive gauche</strong>.
              Prix achat modérés vs Carmes/Capitole (-20 à -30%) + rénovation économique (ABF modéré) +
              gentrification dynamique (+5,4%/an) = <strong>ROI optimal 25-35%</strong> sur 3-5 ans.
              Profil idéal : jeunes actifs/familles cherchant authenticité + vue Garonne + cadre vie vibrant
              sans payer prix premium centre historique.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Questions Fréquentes Rénovation Saint-Cyprien
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quels sont les travaux prioritaires en rénovation Saint-Cyprien ?</span>
                <span className="text-rose-600 group-open:rotate-180 transition-transform">▼</span>
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

            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Comment gérer l'ABF pour travaux façade Saint-Cyprien ?</span>
                <span className="text-rose-600 group-open:rotate-180 transition-transform">▼</span>
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

            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Rentabilité investissement locatif après rénovation Saint-Cyprien ?</span>
                <span className="text-rose-600 group-open:rotate-180 transition-transform">▼</span>
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

            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quelles aides rénovation disponibles Saint-Cyprien 2025 ?</span>
                <span className="text-rose-600 group-open:rotate-180 transition-transform">▼</span>
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
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-gradient-to-br from-rose-700 via-rose-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-6`}>
            Prêt à Rénover Votre Appartement Saint-Cyprien ?
          </h2>
          <p className="text-xl text-rose-50 mb-8 leading-relaxed">
            EGB Occitanie vous accompagne de A à Z : diagnostic complet, dossier ABF si besoin,
            travaux clés en main, garanties décennales. <strong>Devis détaillé gratuit sous 48h</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0665015882"
              className="inline-block bg-white text-rose-700 px-8 py-4 rounded-lg font-semibold hover:bg-rose-50 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              📞 Appel Direct : 06 65 01 58 82
            </a>
            <Link
              href="/contact"
              className="inline-block bg-rose-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-900 transition-all border-2 border-white text-lg"
            >
              ✉️ Demande Devis Gratuit
            </Link>
          </div>
          <p className="mt-6 text-rose-100 text-sm">
            ⭐ 20 projets réussis Saint-Cyprien - 100% validations ABF - Note moyenne 4,9/5
          </p>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-center mb-8 text-gray-900">
            Découvrez Aussi Nos Autres Services Rénovation Toulouse
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/renovation-maison-carmes-toulouse" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-rose-600 hover:text-rose-700">
              Rénovation Carmes
            </Link>
            <Link href="/renovation-capitole-toulouse" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-rose-600 hover:text-rose-700">
              Rénovation Capitole
            </Link>
            <Link href="/renovation-minimes-toulouse" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-rose-600 hover:text-rose-700">
              Rénovation Minimes
            </Link>
            <Link href="/renovation-busca-toulouse" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-rose-600 hover:text-rose-700">
              Rénovation Busca
            </Link>
            <Link href="/renovation" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-rose-600 hover:text-rose-700">
              Rénovation Toulouse
            </Link>
            <Link href="/extension" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-rose-600 hover:text-rose-700">
              Extension Maison
            </Link>
            <Link href="/contact" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-rose-600 hover:text-rose-700">
              Devis Gratuit
            </Link>
            <Link href="/avis" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-rose-600 hover:text-rose-700">
              Avis Clients
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
