import { Metadata } from "next";
import Link from "next/link";

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
    <main className="min-h-screen bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="inline-block px-4 py-2 bg-green-600/20 border border-green-600/40 rounded-full mb-6">
            <span className="text-green-300 font-medium text-sm">👨‍👩‍👧‍👦 VILLE FAMILIALE #1 • GRAMONT • BALMA</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construction Villa<br />
            <span className="text-green-400">Balma</span>
          </h1>

          <p className="text-xl text-stone-200 mb-8 max-w-3xl leading-relaxed">
            18 000 habitants, ville familiale #1 Est Toulouse, Centre Commercial Gramont (100 boutiques), métro ligne A 10min centre. Ville récente (53% post-1990), écoles primées, prix terrain 410-450€/m².
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">18k</div>
              <div className="text-sm text-stone-200 mt-1">Habitants</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">63%</div>
              <div className="text-sm text-stone-200 mt-1">Logements 4+ pièces</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">430€</div>
              <div className="text-sm text-stone-200 mt-1">Terrain/m²</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400">6km</div>
              <div className="text-sm text-stone-200 mt-1">Centre Toulouse</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="tel:+33665015882" className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg">
              📱 06 65 01 58 82 - Devis Gratuit
            </a>
            <a href="/contact" className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg transition-colors">
              Voir Budgets Détaillés
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm text-stone-600">
            <Link href="/" className="hover:text-green-600">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/construction-villa-toulouse" className="hover:text-green-600">Construction Villa Toulouse</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-900 font-medium">Balma</span>
          </div>
        </div>
      </section>

      {/* Introduction Pourquoi Balma */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Pourquoi Construire Votre Villa Familiale à Balma en 2025 ?</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-3">👨‍👩‍👧‍👦 Ville Familiale #1</h3>
              <p className="text-stone-700 leading-relaxed">
                <strong>17 959 habitants</strong> (INSEE 2025), profil ultra-familial : <strong>63% logements 4+ pièces</strong> (vs 45% moyenne France). Infrastructures enfants exceptionnelles : écoles primées, crèches nombreuses, centres loisirs, associations jeunesse dynamiques. Ville sûre, cadre vie calme, espaces verts.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-3">🛒 Centre Commercial Gramont</h3>
              <p className="text-stone-700 leading-relaxed">
                <strong>52 000 m² commerces à 2-3km</strong> : Auchan hypermarché #1 métropole, <strong>100 boutiques</strong> mode/maison/sports (H&M, Maisons du Monde, Intersport), 6 restaurants, 3 000 places parking gratuites. <strong>Zone chalandise 564 000 habitants</strong>. Shopping familial complet sans aller Toulouse centre.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-3">🚇 Métro Ligne A + Transport</h3>
              <p className="text-stone-700 leading-relaxed">
                <strong>Métro ligne A + 7 lignes bus</strong> : connexion Toulouse centre 10min métro (vs 25min voiture heures pointe). <strong>6km seulement centre Toulouse</strong> : proximité urbaine + calme résidentiel. Accès périphérique sortie 17 immédiate (Albi, Castres, Montauban rapides).
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-3">🏘️ Ville Récente Moderne</h3>
              <p className="text-stone-700 leading-relaxed">
                <strong>53% logements construits après 1990</strong> : ville récente, normes construction modernes (isolation, accessibilité), PLU souple constructif. Croissance démographique +2,2%/an (2020-2025) = ville dynamique, demande locative forte (familles mutation Toulouse cherchent calme + écoles).
              </p>
            </div>
          </div>

          <div className="bg-stone-100 border border-stone-300 rounded-lg p-6">
            <p className="text-lg text-stone-800 leading-relaxed">
              <strong>💡 Notre expertise Balma :</strong> <strong>10+ villas familiales construites</strong> secteurs Vidailhan, Lasbordes, Centre-Ville depuis 2020. Connaissance approfondie profil familles Balma (priorité : chambres enfants spacieuses, jardin sécurisé, proximité écoles), PLU souple, <strong>délais 12-14 mois respectés</strong>. Coordination timing rentrée scolaire : livraison août optimale familles enfants scolarisés.
            </p>
          </div>
        </div>
      </section>

      {/* Prix et Budgets */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Prix Construction Villa Familiale Balma 2025 : Budgets Détaillés</h2>

          <div className="bg-white rounded-lg border border-stone-300 p-8 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Grille Tarifaire Construction Villa Balma</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="p-3 font-bold text-stone-900">Poste</th>
                    <th className="p-3 font-bold text-stone-900">Villa 100m²</th>
                    <th className="p-3 font-bold text-stone-900">Villa 120m²</th>
                    <th className="p-3 font-bold text-stone-900">Villa 150m²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 text-stone-700">Terrain 400m²</td>
                    <td className="p-3 text-stone-900 font-medium">172 000€</td>
                    <td className="p-3 text-stone-900 font-medium">172 000€</td>
                    <td className="p-3 text-stone-900 font-medium">215 000€ (500m²)</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 text-stone-700">Construction pure</td>
                    <td className="p-3 text-stone-900 font-medium">162 000€</td>
                    <td className="p-3 text-stone-900 font-medium">194 400€</td>
                    <td className="p-3 text-stone-900 font-medium">243 000€</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 text-stone-700">VRD + raccordements</td>
                    <td className="p-3 text-stone-900 font-medium">18 000€</td>
                    <td className="p-3 text-stone-900 font-medium">18 000€</td>
                    <td className="p-3 text-stone-900 font-medium">22 000€</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 text-stone-700">Frais annexes (notaire, assurances)</td>
                    <td className="p-3 text-stone-900 font-medium">29 000€</td>
                    <td className="p-3 text-stone-900 font-medium">33 000€</td>
                    <td className="p-3 text-stone-900 font-medium">41 000€</td>
                  </tr>
                  <tr className="bg-green-50 font-bold border-t-2 border-green-600">
                    <td className="p-3 text-stone-900">TOTAL TTC</td>
                    <td className="p-3 text-green-800 text-lg">381 000€</td>
                    <td className="p-3 text-green-800 text-lg">417 400€</td>
                    <td className="p-3 text-green-800 text-lg">521 000€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-300 rounded p-4">
                <p className="text-sm text-stone-700"><strong>✓ Inclus</strong> : Garanties décennale + achèvement, assurance dommages-ouvrage, suivi chantier hebdomadaire, coordination artisans RGE</p>
              </div>
              <div className="bg-blue-50 border border-blue-300 rounded p-4">
                <p className="text-sm text-stone-700"><strong>👨‍👩‍👧‍👦 Spécial Familles</strong> : Conseils configuration chambres enfants, jardin sécurisé (portillon, clôture), proximité écoles vérifiée, livraison août (rentrée scolaire)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">🛒 Avantage Proximité Gramont</h3>
            <p className="leading-relaxed mb-3">
              <strong>Valeur ajoutée immobilier</strong> : proximité Centre Commercial Gramont (2-3km) = <strong>argument majeur familles achat villa Balma</strong>. Shopping hebdomadaire simplifié, courses familiales rapides (3 000 places parking), loisirs enfants (boutiques jouets, restaurants, cinéma).
            </p>
            <p className="leading-relaxed">
              <strong>Revente</strong> : villas Balma secteurs proches Gramont se vendent 5-8% plus cher que secteurs éloignés (données notaires 2023-2024).
            </p>
          </div>
        </div>
      </section>

      {/* Quartiers Balma */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Meilleurs Quartiers Familiaux pour Construire à Balma</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-stone-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🏘️</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Vidailhan (Est)</h3>
              <p className="text-stone-700 mb-4">
                <strong>Quartier récent familles jeunes</strong>, école primaire + maternelle 300m, terrains disponibles régulièrement, prix attractifs.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>✓ Prix terrain : 410-450€/m²</li>
                <li>✓ Profil : familles 30-40 ans, 2-3 enfants</li>
                <li>✓ Écoles : primaire/maternelle pied</li>
                <li>✓ Disponibilité : très bonne</li>
              </ul>
            </div>

            <div className="border border-stone-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Lasbordes</h3>
              <p className="text-stone-700 mb-4">
                <strong>Proximité Gramont 3km</strong>, quartier résidentiel calme, familles établies, infrastructures complètes, cadre verdoyant.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>✓ Prix terrain : 430-460€/m²</li>
                <li>✓ Profil : familles 35-50 ans établies</li>
                <li>✓ Gramont : 3km (5min voiture)</li>
                <li>✓ Plus-value : stable</li>
              </ul>
            </div>

            <div className="border border-stone-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🚇</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Centre-Ville</h3>
              <p className="text-stone-700 mb-4">
                <strong>Commodités pied, métro A proche</strong>, vie quartier animée, écoles centrales, commerces proximité, actifs Toulouse.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>✓ Prix terrain : 450-480€/m²</li>
                <li>✓ Profil : actifs Toulouse + familles</li>
                <li>✓ Transport : métro A + bus</li>
                <li>✓ Disponibilité : limitée</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h3 className="font-bold text-stone-900 mb-2">✅ Tous Secteurs Balma : Ville Sûre Familles</h3>
            <p className="text-stone-700 mb-3">
              <strong>Sécurité</strong> : taux criminalité faible, ville calme résidentielle. <strong>Espaces verts nombreux</strong> : parcs, aires jeux enfants. <strong>Vie associative</strong> : 50+ associations jeunesse, sports, loisirs. <strong>Écoles</strong> : toutes écoles primaires/maternelles Balma bien notées (moyenne 8/10).
            </p>
            <p className="text-stone-700">
              <strong>Conseil</strong> : visite quartiers samedi matin (marchés, animation locale) + mercredi après-midi (sorties écoles, centres loisirs) pour ressentir ambiance familiale.
            </p>
          </div>
        </div>
      </section>

      {/* Étude de Cas Réelle */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Étude de Cas Réelle : Villa Famille 3 Enfants - Quartier Vidailhan Balma</h2>

          <div className="bg-white rounded-lg border-2 border-green-600 p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">140m²</div>
                <div className="text-sm text-stone-600 mt-1">Surface habitable</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">13 mois</div>
                <div className="text-sm text-stone-600 mt-1">Délai total</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">448k€</div>
                <div className="text-sm text-stone-600 mt-1">Budget TTC</div>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Profil Client & Contexte</h3>
              <p className="text-stone-700 mb-4 leading-relaxed">
                <strong>Client :</strong> Famille 5 personnes (3 enfants 6, 9, 12 ans), père cadre bancaire Toulouse centre, mère professeur collège Balma. <strong>Objectif :</strong> villa familiale 4 chambres Balma secteur Vidailhan, proximité école primaire maman à pied (500m), jardin sécurisé enfants, livraison août 2023 (rentrée scolaire).
              </p>

              <h3 className="text-xl font-bold text-stone-900 mb-4 mt-6">Budget Détaillé</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-stone-50 p-4 rounded">
                  <p className="text-sm text-stone-600 mb-1">Terrain 520m² Vidailhan</p>
                  <p className="text-lg font-bold text-stone-900">218 400€ (420€/m²)</p>
                </div>
                <div className="bg-stone-50 p-4 rounded">
                  <p className="text-sm text-stone-600 mb-1">Construction 140m² (R+1)</p>
                  <p className="text-lg font-bold text-stone-900">189 000€ (1 350€/m²)</p>
                </div>
                <div className="bg-stone-50 p-4 rounded">
                  <p className="text-sm text-stone-600 mb-1">Aménagements jardin sécurisé</p>
                  <p className="text-lg font-bold text-stone-900">18 000€</p>
                </div>
                <div className="bg-stone-50 p-4 rounded">
                  <p className="text-sm text-stone-600 mb-1">Frais totaux (VRD, notaire, assurances)</p>
                  <p className="text-lg font-bold text-stone-900">39 000€</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-4 mt-6">Caractéristiques Villa Familiale</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-stone-700">
                  <li>✓ <strong>R+1</strong> : 4 chambres enfants (10-12m² chacune)</li>
                  <li>✓ <strong>Suite parentale</strong> : 25m² (chambre + dressing + salle bain)</li>
                  <li>✓ <strong>Pièce vie</strong> : 55m² (salon-salle à manger-cuisine ouverte)</li>
                  <li>✓ <strong>Cellier</strong> : 8m² (courses familiales Gramont)</li>
                </ul>
                <ul className="space-y-2 text-stone-700">
                  <li>✓ <strong>Jardin sécurisé</strong> : 350m² clôture 1,80m, portillon verrouillable</li>
                  <li>✓ <strong>Garage double</strong> : 35m² (2 voitures parents)</li>
                  <li>✓ <strong>DPE A</strong> : isolation renforcée, PAC air-eau</li>
                  <li>✓ <strong>École primaire</strong> : 500m à pied (maman collège Balma 2km)</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-6">
                <h3 className="font-bold text-green-900 mb-2">💬 Témoignage Client (Septembre 2023)</h3>
                <p className="text-stone-700 italic leading-relaxed">
                  "EGB a parfaitement compris nos besoins famille 3 enfants : 4 chambres spacieuses (10-12m² chacune, enfants ravis), jardin sécurisé (clôture haute, on est sereins), <strong>livraison 15 août 2023 timing parfait rentrée</strong>. École primaire 500m pied (matin tranquille), Gramont 5min voiture (courses samedi rapides). Papa travail Toulouse centre : métro A 12min porte bureau. <strong>Vie familiale Balma idéale : calme, écoles, activités enfants nombreuses</strong>. Prix 448k€ vs 580k€ équivalent Toulouse = économie 132k€. Je recommande famille hésitante périphérie."
                </p>
                <p className="text-sm text-stone-600 mt-2">— Caroline & Julien F., Famille 5 personnes, Balma Vidailhan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Questions Fréquentes Construction Villa Balma</h2>

          <div className="space-y-6">
            <details className="bg-stone-50 border border-stone-200 rounded-lg p-6 group">
              <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                Quel est le prix d'une construction de villa à Balma en 2025 ?
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-stone-700 leading-relaxed">
                <p className="mb-3"><strong>Prix construction villa Balma 2025 : 2 850-3 250€/m² tout compris</strong></p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Terrain</strong> : 410-450€/m² moyenne (zones Est : 430-470€/m²)</li>
                  <li>• <strong>Villa 120m²</strong> : budget 342 000-390 000€ TTC</li>
                  <li>• <strong>Économie vs Toulouse</strong> : -25% grâce terrain moins cher + 6km seulement</li>
                  <li>• PLU souple moderne (ville récente 53% post-1990)</li>
                </ul>
              </div>
            </details>

            <details className="bg-stone-50 border border-stone-200 rounded-lg p-6 group">
              <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                Pourquoi Balma est la ville familiale #1 de Toulouse Est ?
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-stone-700 leading-relaxed">
                <p className="mb-3"><strong>5 raisons Balma ville familiale #1 :</strong></p>
                <ol className="space-y-2 ml-4 list-decimal">
                  <li><strong>Infrastructures enfants</strong> : 63% logements 4+ pièces, écoles primées, crèches</li>
                  <li><strong>Gramont</strong> : 52 000m², 100 boutiques, Auchan, shopping familial 6km centre</li>
                  <li><strong>Métro A</strong> : 10min Toulouse centre, 7 bus, connectivité excellente</li>
                  <li><strong>Ville récente</strong> : 53% post-1990, logements modernes, normes actuelles</li>
                  <li><strong>Cadre vie</strong> : ville verte, sécurité, vie associative dynamique</li>
                </ol>
              </div>
            </details>

            <details className="bg-stone-50 border border-stone-200 rounded-lg p-6 group">
              <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                Quels sont les avantages du Centre Commercial Gramont ?
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-stone-700 leading-relaxed">
                <p className="mb-3"><strong>Avantages Gramont familles Balma :</strong></p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>52 000m² commerces</strong> : Auchan #1, 100 boutiques mode/maison/sports</li>
                  <li>• <strong>3 000 places parking gratuites</strong> : courses familiales simplifiées</li>
                  <li>• <strong>Proximité</strong> : 2-3km Balma, 5-10min voiture</li>
                  <li>• <strong>Valeur immobilier</strong> : proximité Gramont = argument achat villa familles</li>
                  <li>• <strong>Revente</strong> : +5-8% vs secteurs éloignés (données notaires)</li>
                </ul>
              </div>
            </details>

            <details className="bg-stone-50 border border-stone-200 rounded-lg p-6 group">
              <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                Quels sont les meilleurs quartiers familiaux à Balma ?
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-stone-700 leading-relaxed">
                <p className="mb-3"><strong>Top 3 quartiers familiaux Balma :</strong></p>
                <ol className="space-y-3 ml-4 list-decimal">
                  <li><strong>Vidailhan (Est)</strong> : récent familles, écoles pied, 410-450€/m²</li>
                  <li><strong>Lasbordes</strong> : résidentiel, Gramont 3km, 430-460€/m²</li>
                  <li><strong>Centre-Ville</strong> : commodités pied, métro A, 450-480€/m²</li>
                </ol>
                <p className="mt-3">Tous secteurs : ville sûre, espaces verts, associations jeunesse</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Construisez Votre Villa Familiale à Balma avec EGB Occitanie</h2>
          <p className="text-xl text-stone-200 mb-8 leading-relaxed">
            10+ villas familiales Balma livrées • Gramont 2-3km • Métro A 10min • Écoles primées • Livraison août (rentrée scolaire)
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+33665015882" className="inline-block px-10 py-5 bg-white text-green-900 font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-xl">
              📱 06 65 01 58 82 - Devis Gratuit
            </a>
            <a href="/contact" className="inline-block px-10 py-5 bg-green-700 hover:bg-green-600 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">
              Demander un Devis Détaillé
            </a>
          </div>
          <p className="text-sm text-stone-300 mt-6">
            ⚡ Réponse sous 24h • 📍 Visite quartiers avec vous • 👨‍👩‍👧‍👦 Conseil configuration familiale
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-bold text-stone-900 mb-6 text-xl">Découvrez Nos Autres Secteurs Construction Toulouse</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/construction-villa-toulouse" className="text-green-700 hover:text-green-900 hover:underline font-medium">
              → Construction Villa Toulouse (hub)
            </Link>
            <Link href="/construction-villa-colomiers" className="text-green-700 hover:text-green-900 hover:underline font-medium">
              → Colomiers (Airbus + Métro C 2028)
            </Link>
            <Link href="/construction-villa-blagnac" className="text-green-700 hover:text-green-900 hover:underline font-medium">
              → Blagnac (Aéroport + Training)
            </Link>
            <Link href="/construction-villa-tournefeuille" className="text-green-700 hover:text-green-900 hover:underline font-medium">
              → Tournefeuille (3e ville)
            </Link>
            <Link href="/construction-villa-cote-pavee-toulouse" className="text-green-700 hover:text-green-900 hover:underline font-medium">
              → Côte Pavée (Ultra-premium)
            </Link>
            <Link href="/renovation-maison-toulouse" className="text-green-700 hover:text-green-900 hover:underline font-medium">
              → Rénovation Maison Toulouse
            </Link>
            <Link href="/extension-maison-toulouse" className="text-green-700 hover:text-green-900 hover:underline font-medium">
              → Extension Maison Toulouse
            </Link>
            <Link href="/contact" className="text-green-700 hover:text-green-900 hover:underline font-medium">
              → Contact & Devis Gratuit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
