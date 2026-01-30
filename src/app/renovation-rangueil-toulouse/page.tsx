import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Rénovation Rangueil Toulouse | Expert Étudiants CHU Université",
  description: "Rénovation appartements Rangueil Toulouse. Quartier universitaire CHU, années 60, petits T1-T2 étudiants. Prix 2025 : 1 800-2 400€/m². Rentabilité locative 6-7%. Devis 06 65 01 58 82.",
  keywords: "rénovation Rangueil Toulouse, investissement locatif étudiant, CHU Toulouse rénovation, quartier universitaire, prix rénovation Rangueil, studio T2 étudiant rénover",
  alternates: {
    canonical: "https://www.egb-occitanie.fr/renovation-rangueil-toulouse"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel prix rénovation Rangueil Toulouse 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix rénovation Rangueil Toulouse 2025 : 1 800-2 400€/m² selon travaux. Rénovation légère T1-T2 : 1 800-2 100€/m². Rénovation complète optimisation espace : 2 100-2 400€/m². Pas ABF = coûts -30% vs centre. Exemple T2 40m² rénovation complète : 72 000-96 000€. Quartier universitaire CHU, cible étudiants médecine/sciences. Rentabilité locative excellente 6-7% brut. Loyer T2 40m² meublé : 550-650€/mois. Demande étudiants illimitée. Devis gratuit investissement locatif : 06 65 01 58 82."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EGB Occitanie Rénovation Rangueil",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toulouse",
    "postalCode": "31400",
    "addressCountry": "FR"
  },
  "telephone": "+33665015882",
  "priceRange": "1800-2400€/m²"
};

export default function RenovationRangueuilToulouse() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-amber-600" />
              <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
                Investissement Locatif Étudiant
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Rénovation Rangueil
              <br />
              <span className="text-amber-800">Toulouse</span>
            </h1>

            <div className="prose prose-lg prose-stone max-w-none mb-12">
              <p className="text-xl leading-relaxed">
                Expert rénovation studios T1-T2 Rangueil Toulouse. Quartier universitaire CHU Purpan, facultés médecine et sciences. Rentabilité locative exceptionnelle 6-7%, demande étudiante illimitée, prix attractifs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:0665015882" className="inline-block bg-amber-600 text-white px-8 py-4 rounded font-medium text-lg hover:bg-amber-700 transition-colors text-center">
                06 65 01 58 82 - Devis Gratuit
              </a>
              <a href="/contact" className="inline-block bg-gray-900 text-white px-8 py-4 rounded font-medium text-lg hover:bg-gray-800 transition-colors text-center">
                Simulation Rentabilité
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">CHU</div>
                <div className="text-sm text-gray-600">Purpan proximité</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">6-7%</div>
                <div className="text-sm text-gray-600">Rentabilité brute</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">15k+</div>
                <div className="text-sm text-gray-600">Étudiants secteur</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">-30%</div>
                <div className="text-sm text-gray-600">Coûts vs centre</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Investir Section */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Pourquoi Investir Locatif
              <span className="text-amber-800"> Rangueil</span> ?
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Demande Étudiants Illimitée
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    CHU Purpan à 5 min, faculté de médecine, faculté des sciences à 10 min. Plus de 15 000 étudiants dans le secteur recherchent constamment des logements.
                  </p>
                  <p>
                    <strong>Vacance locative quasi-nulle</strong> : moins d'1 mois par an en moyenne. Renouvellement annuel des baux étudiants garanti septembre-juin. Loyers T2 40m² meublé : 550-650€/mois.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rentabilité Locative 6-7% Brute
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    <strong>Exemple T2 40m²</strong> :
                  </p>
                  <ul>
                    <li>Achat : 120 000€ (3 000€/m²)</li>
                    <li>Rénovation complète : 88 000€ (2 200€/m²)</li>
                    <li><strong>Total investissement : 208 000€</strong></li>
                    <li>Loyer meublé : 600€/mois = 7 200€/an</li>
                    <li><strong>Rentabilité brute : 6,9%</strong> (vs 4-5% quartiers résidentiels)</li>
                    <li>ROI : 10-12 ans via loyers</li>
                  </ul>
                  <p>
                    Fiscalité optimisée en LMNP avec amortissement du bien et des travaux.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Prix Attractifs Copropriétés Années 60
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    <strong>Achat</strong> : 3 000€/m² en moyenne (vs 5 500€/m² Capitole).
                  </p>
                  <p>
                    <strong>Rénovation</strong> : 1 800-2 400€/m² selon ampleur des travaux (vs 3 500€/m² centre historique). Pas de contraintes ABF = <strong>coûts réduits de 30%</strong>.
                  </p>
                  <p>
                    Investissement total accessible aux primo-investisseurs : 200-250 000€ pour un T2 rénové clé en main avec rentabilité immédiate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spécificités Quartier */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Spécificités
              <span className="text-amber-800"> Quartier Universitaire</span>
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p>
                Rangueil est le <strong>quartier étudiant par excellence</strong> de Toulouse. La proximité immédiate du CHU Purpan (médecins, infirmiers, internes) et des facultés (médecine, pharmacie, sciences) génère une demande locative permanente et solvable.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                Optimisation Espace Petites Surfaces
              </h3>

              <p>
                Les T1-T2 des années 60 ont souvent des <strong>cloisonnements inadaptés</strong> aux usages actuels. Nous optimisons :
              </p>

              <ul>
                <li><strong>Cuisine ouverte</strong> : suppression cloison, gain espace apparent +20%</li>
                <li><strong>Salle d'eau compacte</strong> : douche italienne, gain 1-2m² valorisables</li>
                <li><strong>Rangements intégrés</strong> : placards sur-mesure, meuble sous pente</li>
                <li><strong>Coin nuit séparé</strong> : claustra bois ou verrière pour T1 optimisé</li>
              </ul>

              <p>
                Ces aménagements augmentent le loyer de 50-80€/mois (+10-15% rentabilité) pour un surcoût travaux de 8-12k€.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                Accompagnement Gestion Locative
              </h3>

              <p>
                Pour les investisseurs non-résidents ou primo-investisseurs, nous recommandons des <strong>partenaires gestion locative spécialisés étudiants</strong> :
              </p>

              <ul>
                <li>Recherche locataires pré-rentrée (juin-août)</li>
                <li>Validation dossiers avec garants parentaux</li>
                <li>État des lieux entrée/sortie systématique</li>
                <li>Gestion dépôts de garantie et APL</li>
                <li>Frais gestion : 7-9% loyers HT</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mt-12">
              <p className="text-amber-900 font-medium">
                <strong>Conseil investisseur :</strong> Privilégiez les immeubles avec ascenseur (étages élevés loués au même prix que RDC) et parking/cave (valorisation +30-50€/mois). La proximité métro Faculté de Pharmacie ou bus C6 vers CHU est un argument commercial majeur.
              </p>
            </div>
          </div>
        </section>

        {/* Prix Détaillés */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Prix Rénovation
              <span className="text-amber-800"> Rangueil 2025</span>
            </h2>

            <div className="space-y-6">
              <div className="border-2 border-amber-200 p-8 rounded bg-white">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rénovation Légère T1-T2
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-3xl font-light text-gray-900 mb-4">1 800 - 2 100 €/m²</p>
                  <ul>
                    <li>Peinture murs et plafonds</li>
                    <li>Sol stratifié ou carrelage</li>
                    <li>Cuisine équipée standard</li>
                    <li>Salle d'eau rafraîchie (robinetterie, joints)</li>
                    <li>Électricité aux normes (tableau, prises)</li>
                  </ul>
                  <p className="text-amber-800 font-medium mt-4">
                    Exemple T2 40m² : 72 000 - 84 000€
                  </p>
                </div>
              </div>

              <div className="border-2 border-amber-200 p-8 rounded bg-white">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rénovation Complète Optimisation Espace
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-3xl font-light text-gray-900 mb-4">2 100 - 2 400 €/m²</p>
                  <ul>
                    <li>Suppression cloisons (cuisine ouverte)</li>
                    <li>Création salle d'eau compacte (douche italienne)</li>
                    <li>Rangements intégrés sur-mesure</li>
                    <li>Électricité refaite (tableau 63A, prises USB)</li>
                    <li>Isolation phonique renforcée (cloisons, menuiseries)</li>
                    <li>Finitions qualité (carrelage imitation parquet, robinetterie design)</li>
                  </ul>
                  <p className="text-amber-800 font-medium mt-4">
                    Exemple T2 40m² : 84 000 - 96 000€
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-amber-200 p-8 rounded mt-8">
              <h3 className="text-2xl font-light text-amber-900 mb-4">
                Pourquoi -30% vs Centre Historique ?
              </h3>
              <div className="prose prose-stone max-w-none">
                <ul>
                  <li><strong>Pas de contraintes ABF</strong> : fenêtres PVC double vitrage autorisées (vs bois sur-mesure)</li>
                  <li><strong>Copropriétés standardisées</strong> : pas de façades classées, travaux simplifiés</li>
                  <li><strong>Accès chantier facile</strong> : stationnement véhicules, livraison matériaux sans restriction</li>
                  <li><strong>Délais raccourcis</strong> : pas d'autorisations spéciales, chantiers 6-8 semaines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}
