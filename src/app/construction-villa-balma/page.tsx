import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

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

export default function ConstructionVillaBalmaPage() {
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

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero - Magazine Feature Style */}
      <section className="bg-gray-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Content */}
            <div className="p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider">
                  Ville Familiale #1 · Gramont · Balma
                </span>
              </div>

              <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight`}>
                Construction Villa Balma
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                18 000 habitants, ville familiale #1 Est Toulouse, Centre Commercial Gramont (100 boutiques),
                métro ligne A 10min centre. Ville récente (53% post-1990), écoles primées,
                prix terrain 410-450€/m².
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+33665015882"
                  className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold text-center hover:bg-gray-800 transition-colors"
                >
                  Appeler 06 65 01 58 82
                </a>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold text-center border-2 border-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Devis Gratuit
                </a>
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div className="bg-white p-12 border-l border-gray-300 flex items-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-1">18k</div>
                  <div className="text-sm text-gray-600">Habitants</div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-1">63%</div>
                  <div className="text-sm text-gray-600">Logements 4+ pièces</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">430€</div>
                  <div className="text-sm text-gray-600">Terrain/m²</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">6km</div>
                  <div className="text-sm text-gray-600">Centre Toulouse</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/construction-villa-toulouse" className="hover:text-gray-900">Construction Villa Toulouse</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900 font-medium">Balma</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-5xl mx-auto px-6 py-16">
        {/* Section 1 */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-4xl font-bold mb-8 text-gray-900`}>
            Pourquoi Construire Votre Villa Familiale à Balma en 2025 ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ville Familiale #1</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>17 959 habitants</strong> (INSEE 2025), profil ultra-familial : <strong>63% logements 4+ pièces</strong>
                  (vs 45% moyenne France). Infrastructures enfants exceptionnelles : écoles primées, crèches nombreuses,
                  centres loisirs, associations jeunesse dynamiques. Ville sûre, cadre vie calme, espaces verts.
                </p>
              </div>

              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Métro Ligne A + Transport</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Métro ligne A + 7 lignes bus</strong> : connexion Toulouse centre 10min métro
                  (vs 25min voiture heures pointe). <strong>6km seulement centre Toulouse</strong> : proximité urbaine +
                  calme résidentiel. Accès périphérique sortie 17 immédiate (Albi, Castres, Montauban rapides).
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Centre Commercial Gramont</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>52 000 m² commerces à 2-3km</strong> : Auchan hypermarché #1 métropole, <strong>100 boutiques</strong>
                  mode/maison/sports (H&M, Maisons du Monde, Intersport), 6 restaurants, 3 000 places parking gratuites.
                  <strong>Zone chalandise 564 000 habitants</strong>. Shopping familial complet sans aller Toulouse centre.
                </p>
              </div>

              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ville Récente Moderne</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>53% logements construits après 1990</strong> : ville récente, normes construction modernes
                  (isolation, accessibilité), PLU souple constructif. Croissance démographique +2,2%/an (2020-2025) =
                  ville dynamique, demande locative forte (familles mutation Toulouse cherchent calme + écoles).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-l-4 border-gray-900 p-6 mt-8">
            <p className="text-gray-800 leading-relaxed">
              <strong>Notre expertise Balma :</strong> <strong>10+ villas familiales construites</strong> secteurs Vidailhan,
              Lasbordes, Centre-Ville depuis 2020. Connaissance approfondie profil familles Balma (priorité : chambres enfants
              spacieuses, jardin sécurisé, proximité écoles), PLU souple, <strong>délais 12-14 mois respectés</strong>.
              Coordination timing rentrée scolaire : livraison août optimale familles enfants scolarisés.
            </p>
          </div>
        </section>

        {/* Section 2 - Prix */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-4xl font-bold mb-8 text-gray-900`}>
            Prix Construction Villa Familiale Balma 2025
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Poste</th>
                  <th className="px-6 py-4 text-right font-semibold">Villa 100m²</th>
                  <th className="px-6 py-4 text-right font-semibold">Villa 120m²</th>
                  <th className="px-6 py-4 text-right font-semibold">Villa 150m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700">Terrain 400m²</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">172 000€</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">172 000€</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">215 000€ (500m²)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700">Construction pure</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">162 000€</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">194 400€</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">243 000€</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700">VRD + raccordements</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">18 000€</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">18 000€</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">22 000€</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700">Frais annexes (notaire, assurances)</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">29 000€</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">33 000€</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">41 000€</td>
                </tr>
                <tr className="bg-gray-100 font-bold border-t-2 border-gray-900">
                  <td className="px-6 py-4 text-gray-900">TOTAL TTC</td>
                  <td className="px-6 py-4 text-right text-gray-900 text-lg">381 000€</td>
                  <td className="px-6 py-4 text-right text-gray-900 text-lg">417 400€</td>
                  <td className="px-6 py-4 text-right text-gray-900 text-lg">521 000€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 border-l-4 border-gray-900 p-6">
              <p className="text-sm text-gray-700 font-semibold mb-2">Inclus</p>
              <p className="text-sm text-gray-700">
                Garanties décennale + achèvement, assurance dommages-ouvrage, suivi chantier hebdomadaire,
                coordination artisans RGE
              </p>
            </div>
            <div className="bg-gray-100 border-l-4 border-gray-900 p-6">
              <p className="text-sm text-gray-700 font-semibold mb-2">Spécial Familles</p>
              <p className="text-sm text-gray-700">
                Conseils configuration chambres enfants, jardin sécurisé (portillon, clôture), proximité écoles vérifiée,
                livraison août (rentrée scolaire)
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 mt-8">
            <h3 className="text-xl font-bold mb-3">Avantage Proximité Gramont</h3>
            <p className="leading-relaxed mb-3">
              <strong>Valeur ajoutée immobilier</strong> : proximité Centre Commercial Gramont (2-3km) =
              <strong>argument majeur familles achat villa Balma</strong>. Shopping hebdomadaire simplifié,
              courses familiales rapides (3 000 places parking), loisirs enfants (boutiques jouets, restaurants, cinéma).
            </p>
            <p className="leading-relaxed">
              <strong>Revente</strong> : villas Balma secteurs proches Gramont se vendent 5-8% plus cher que secteurs éloignés
              (données notaires 2023-2024).
            </p>
          </div>
        </section>

        {/* Section 3 - Quartiers */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-4xl font-bold mb-8 text-gray-900`}>
            Meilleurs Quartiers Familiaux pour Construire à Balma
          </h2>

          <div className="space-y-8">
            <div className="border border-gray-300 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vidailhan (Est)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Quartier récent familles jeunes</strong>, école primaire + maternelle 300m, terrains disponibles
                régulièrement, prix attractifs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Prix terrain</p>
                  <p className="font-bold text-gray-900">410-450€/m²</p>
                </div>
                <div>
                  <p className="text-gray-600">Profil</p>
                  <p className="font-bold text-gray-900">Familles 30-40 ans</p>
                </div>
                <div>
                  <p className="text-gray-600">Écoles</p>
                  <p className="font-bold text-gray-900">Primaire/maternelle pied</p>
                </div>
                <div>
                  <p className="text-gray-600">Disponibilité</p>
                  <p className="font-bold text-gray-900">Très bonne</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lasbordes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Proximité Gramont 3km</strong>, quartier résidentiel calme, familles établies,
                infrastructures complètes, cadre verdoyant.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Prix terrain</p>
                  <p className="font-bold text-gray-900">430-460€/m²</p>
                </div>
                <div>
                  <p className="text-gray-600">Profil</p>
                  <p className="font-bold text-gray-900">Familles 35-50 ans</p>
                </div>
                <div>
                  <p className="text-gray-600">Gramont</p>
                  <p className="font-bold text-gray-900">3km (5min)</p>
                </div>
                <div>
                  <p className="text-gray-600">Plus-value</p>
                  <p className="font-bold text-gray-900">Stable</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Centre-Ville</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Commodités pied, métro A proche</strong>, vie quartier animée, écoles centrales,
                commerces proximité, actifs Toulouse.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Prix terrain</p>
                  <p className="font-bold text-gray-900">450-480€/m²</p>
                </div>
                <div>
                  <p className="text-gray-600">Profil</p>
                  <p className="font-bold text-gray-900">Actifs + familles</p>
                </div>
                <div>
                  <p className="text-gray-600">Transport</p>
                  <p className="font-bold text-gray-900">Métro A + bus</p>
                </div>
                <div>
                  <p className="text-gray-600">Disponibilité</p>
                  <p className="font-bold text-gray-900">Limitée</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-l-4 border-gray-900 p-6 mt-8">
            <h3 className="font-bold text-gray-900 mb-2">Tous Secteurs Balma : Ville Sûre Familles</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              <strong>Sécurité</strong> : taux criminalité faible, ville calme résidentielle.
              <strong>Espaces verts nombreux</strong> : parcs, aires jeux enfants.
              <strong>Vie associative</strong> : 50+ associations jeunesse, sports, loisirs.
              <strong>Écoles</strong> : toutes écoles primaires/maternelles Balma bien notées (moyenne 8/10).
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Conseil</strong> : visite quartiers samedi matin (marchés, animation locale) + mercredi après-midi
              (sorties écoles, centres loisirs) pour ressentir ambiance familiale.
            </p>
          </div>
        </section>

        {/* Section 4 - Étude de Cas */}
        <section className="mb-16 bg-gray-50 -mx-6 px-6 py-12">
          <h2 className={`${playfair.className} text-4xl font-bold mb-8 text-gray-900`}>
            Étude de Cas : Villa Famille 3 Enfants - Quartier Vidailhan Balma
          </h2>

          <div className="bg-white border-2 border-gray-900 p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">140m²</div>
                <div className="text-sm text-gray-600">Surface habitable</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">13 mois</div>
                <div className="text-sm text-gray-600">Délai total</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">448k€</div>
                <div className="text-sm text-gray-600">Budget TTC</div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Profil Client & Contexte</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Client :</strong> Famille 5 personnes (3 enfants 6, 9, 12 ans), père cadre bancaire Toulouse centre,
                  mère professeur collège Balma. <strong>Objectif :</strong> villa familiale 4 chambres Balma secteur Vidailhan,
                  proximité école primaire maman à pied (500m), jardin sécurisé enfants, livraison août 2023 (rentrée scolaire).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Détaillé</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Terrain 520m² Vidailhan</p>
                    <p className="text-lg font-bold text-gray-900">218 400€ (420€/m²)</p>
                  </div>
                  <div className="bg-gray-50 p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Construction 140m² (R+1)</p>
                    <p className="text-lg font-bold text-gray-900">189 000€ (1 350€/m²)</p>
                  </div>
                  <div className="bg-gray-50 p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Aménagements jardin sécurisé</p>
                    <p className="text-lg font-bold text-gray-900">18 000€</p>
                  </div>
                  <div className="bg-gray-50 p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Frais totaux (VRD, notaire, assurances)</p>
                    <p className="text-lg font-bold text-gray-900">39 000€</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Caractéristiques Villa Familiale</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>· <strong>R+1</strong> : 4 chambres enfants (10-12m² chacune)</li>
                    <li>· <strong>Suite parentale</strong> : 25m² (chambre + dressing + salle bain)</li>
                    <li>· <strong>Pièce vie</strong> : 55m² (salon-salle à manger-cuisine ouverte)</li>
                    <li>· <strong>Cellier</strong> : 8m² (courses familiales Gramont)</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>· <strong>Jardin sécurisé</strong> : 350m² clôture 1,80m, portillon verrouillable</li>
                    <li>· <strong>Garage double</strong> : 35m² (2 voitures parents)</li>
                    <li>· <strong>DPE A</strong> : isolation renforcée, PAC air-eau</li>
                    <li>· <strong>École primaire</strong> : 500m à pied (maman collège Balma 2km)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 border-l-4 border-gray-900 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Témoignage Client (Septembre 2023)</h3>
                <p className="text-gray-700 italic leading-relaxed mb-2">
                  "EGB a parfaitement compris nos besoins famille 3 enfants : 4 chambres spacieuses (10-12m² chacune,
                  enfants ravis), jardin sécurisé (clôture haute, on est sereins), <strong>livraison 15 août 2023 timing
                  parfait rentrée</strong>. École primaire 500m pied (matin tranquille), Gramont 5min voiture (courses samedi rapides).
                  Papa travail Toulouse centre : métro A 12min porte bureau. <strong>Vie familiale Balma idéale : calme,
                  écoles, activités enfants nombreuses</strong>. Prix 448k€ vs 580k€ équivalent Toulouse = économie 132k€.
                  Je recommande famille hésitante périphérie."
                </p>
                <p className="text-sm text-gray-600">— Caroline & Julien F., Famille 5 personnes, Balma Vidailhan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - FAQ */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-4xl font-bold mb-8 text-gray-900 text-center`}>
            Questions Fréquentes Construction Villa Balma
          </h2>

          <div className="space-y-4">
            <details className="bg-white border border-gray-300 p-6 hover:border-gray-900 transition-colors group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quel est le prix d'une construction de villa à Balma en 2025 ?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-2">
                <p><strong>Prix construction villa Balma 2025 : 2 850-3 250€/m² tout compris</strong></p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li>· <strong>Terrain</strong> : 410-450€/m² moyenne (zones Est : 430-470€/m²)</li>
                  <li>· <strong>Villa 120m²</strong> : budget 342 000-390 000€ TTC</li>
                  <li>· <strong>Économie vs Toulouse</strong> : -25% grâce terrain moins cher + 6km seulement</li>
                  <li>· PLU souple moderne (ville récente 53% post-1990)</li>
                </ul>
              </div>
            </details>

            <details className="bg-white border border-gray-300 p-6 hover:border-gray-900 transition-colors group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Pourquoi Balma est la ville familiale #1 de Toulouse Est ?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-2">
                <p><strong>5 raisons Balma ville familiale #1 :</strong></p>
                <ol className="space-y-1 ml-4 list-decimal text-sm">
                  <li><strong>Infrastructures enfants</strong> : 63% logements 4+ pièces, écoles primées, crèches</li>
                  <li><strong>Gramont</strong> : 52 000m², 100 boutiques, Auchan, shopping familial 6km centre</li>
                  <li><strong>Métro A</strong> : 10min Toulouse centre, 7 bus, connectivité excellente</li>
                  <li><strong>Ville récente</strong> : 53% post-1990, logements modernes, normes actuelles</li>
                  <li><strong>Cadre vie</strong> : ville verte, sécurité, vie associative dynamique</li>
                </ol>
              </div>
            </details>

            <details className="bg-white border border-gray-300 p-6 hover:border-gray-900 transition-colors group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quels sont les avantages du Centre Commercial Gramont ?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-2">
                <p><strong>Avantages Gramont familles Balma :</strong></p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li>· <strong>52 000m² commerces</strong> : Auchan #1, 100 boutiques mode/maison/sports</li>
                  <li>· <strong>3 000 places parking gratuites</strong> : courses familiales simplifiées</li>
                  <li>· <strong>Proximité</strong> : 2-3km Balma, 5-10min voiture</li>
                  <li>· <strong>Valeur immobilier</strong> : proximité Gramont = argument achat villa familles</li>
                  <li>· <strong>Revente</strong> : +5-8% vs secteurs éloignés (données notaires)</li>
                </ul>
              </div>
            </details>

            <details className="bg-white border border-gray-300 p-6 hover:border-gray-900 transition-colors group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                <span>Quels sont les meilleurs quartiers familiaux à Balma ?</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-2">
                <p><strong>Top 3 quartiers familiaux Balma :</strong></p>
                <ol className="space-y-2 ml-4 list-decimal text-sm">
                  <li><strong>Vidailhan (Est)</strong> : récent familles, écoles pied, 410-450€/m²</li>
                  <li><strong>Lasbordes</strong> : résidentiel, Gramont 3km, 430-460€/m²</li>
                  <li><strong>Centre-Ville</strong> : commodités pied, métro A, 450-480€/m²</li>
                </ol>
                <p className="mt-2 text-sm">Tous secteurs : ville sûre, espaces verts, associations jeunesse</p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-200 pt-12 text-center">
          <h2 className={`${playfair.className} text-3xl font-bold mb-4 text-gray-900`}>
            Construisez Votre Villa Familiale à Balma
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            10+ villas familiales Balma livrées · Gramont 2-3km · Métro A 10min · Écoles primées ·
            Livraison août (rentrée scolaire)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33665015882"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Appeler 06 65 01 58 82
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-colors"
            >
              Devis Gratuit
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Réponse sous 24h · Visite quartiers avec vous · Conseil configuration familiale
          </p>
        </section>
      </article>

      {/* Internal Links */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-bold text-gray-900 mb-6 text-xl">
            Découvrez Nos Autres Secteurs Construction Toulouse
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/construction-villa-toulouse" className="bg-white border border-gray-200 p-4 hover:border-gray-900 transition-colors">
              <p className="font-semibold text-gray-900">Construction Villa Toulouse</p>
              <p className="text-xs text-gray-600 mt-1">Hub principal</p>
            </Link>
            <Link href="/construction-villa-colomiers" className="bg-white border border-gray-200 p-4 hover:border-gray-900 transition-colors">
              <p className="font-semibold text-gray-900">Colomiers</p>
              <p className="text-xs text-gray-600 mt-1">Airbus + Métro C</p>
            </Link>
            <Link href="/construction-villa-blagnac" className="bg-white border border-gray-200 p-4 hover:border-gray-900 transition-colors">
              <p className="font-semibold text-gray-900">Blagnac</p>
              <p className="text-xs text-gray-600 mt-1">Aéroport</p>
            </Link>
            <Link href="/construction-villa-tournefeuille" className="bg-white border border-gray-200 p-4 hover:border-gray-900 transition-colors">
              <p className="font-semibold text-gray-900">Tournefeuille</p>
              <p className="text-xs text-gray-600 mt-1">3e ville</p>
            </Link>
            <Link href="/construction-villa-cote-pavee-toulouse" className="bg-white border border-gray-200 p-4 hover:border-gray-900 transition-colors">
              <p className="font-semibold text-gray-900">Côte Pavée</p>
              <p className="text-xs text-gray-600 mt-1">Ultra-premium</p>
            </Link>
            <Link href="/renovation-maison-toulouse" className="bg-white border border-gray-200 p-4 hover:border-gray-900 transition-colors">
              <p className="font-semibold text-gray-900">Rénovation Toulouse</p>
              <p className="text-xs text-gray-600 mt-1">Tous quartiers</p>
            </Link>
            <Link href="/extension-maison-toulouse" className="bg-white border border-gray-200 p-4 hover:border-gray-900 transition-colors">
              <p className="font-semibold text-gray-900">Extension Maison</p>
              <p className="text-xs text-gray-600 mt-1">Agrandissement</p>
            </Link>
            <Link href="/contact" className="bg-white border border-gray-200 p-4 hover:border-gray-900 transition-colors">
              <p className="font-semibold text-gray-900">Contact</p>
              <p className="text-xs text-gray-600 mt-1">Devis gratuit</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
