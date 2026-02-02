import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Rénovation Saint-Aubin Dupuy Toulouse | Expert Maisons Familiales Sud",
  description: "Rénovation maisons Saint-Aubin Dupuy Toulouse Sud. Quartier résidentiel familles, pavillons jardins, écoles. Prix 2025 : 2 200-3 000€/m². Calme verdure. Devis 06 65 01 58 82.",
  keywords: "rénovation Saint-Aubin Toulouse, rénovation Dupuy Toulouse, maison famille Toulouse Sud, quartier résidentiel Toulouse, prix rénovation sud Toulouse, pavillon jardin rénover",
  alternates: {
    canonical: "https://www.egb-occitanie.fr/renovation-saint-aubin-dupuy-toulouse"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel prix rénovation maison Saint-Aubin Dupuy Toulouse 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix rénovation Saint-Aubin Dupuy Toulouse Sud 2025 : 2 200-3 000€/m² selon travaux. Rénovation légère pavillon : 2 200-2 600€/m² (peinture, sols, électricité, cuisine/SDB standards). Rénovation complète famille : 2 600-3 000€/m² (isolation, fenêtres, cuisine équipée, SDB moderne, parquet, jardin). Pas ABF = coûts -25% vs centre. Exemple maison 110m² rénovation complète : 286 000-330 000€. Prix m² achat : 3 400-3 800€. Cible familles CSP+ (cadres, professions intermédiaires), écoles réputées proximité, calme résidentiel. Valorisation post-rénovation : +25-35%. Devis gratuit maison famille : 06 65 01 58 82."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Rénover maison familiale Saint-Aubin Dupuy",
  "step": [
    {
      "@type": "HowToStep",
      "text": "1. Prioriser isolation thermique (combles, murs, fenêtres) pour confort famille + économies chauffage"
    },
    {
      "@type": "HowToStep",
      "text": "2. Créer cuisine ouverte familiale conviviale 15-20m² avec îlot central"
    },
    {
      "@type": "HowToStep",
      "text": "3. Aménager 2-3 chambres enfants avec rangements optimisés"
    },
    {
      "@type": "HowToStep",
      "text": "4. Moderniser salles de bain (1 parentale + 1 enfants) avec douches pratiques"
    },
    {
      "@type": "HowToStep",
      "text": "5. Aménager jardin famille : terrasse, pelouse, aire jeux enfants, potager"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EGB Occitanie Rénovation Saint-Aubin Dupuy",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toulouse",
    "postalCode": "31400",
    "addressCountry": "FR"
  },
  "telephone": "+33665015882",
  "priceRange": "2200-3000€/m²"
};

export default function RenovationSaintAubinDupuyToulouse() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-amber-600" />
              <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
                Maisons Familiales Sud Toulouse
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Rénovation Saint-Aubin
              <br />
              <span className="text-amber-800">Dupuy Toulouse</span>
            </h1>

            <div className="prose prose-lg prose-stone max-w-none mb-12">
              <p className="text-xl leading-relaxed">
                Expert rénovation maisons familiales pavillons avec jardins Saint-Aubin Dupuy sud Toulouse. Quartier résidentiel calme, écoles réputées, espaces verts. Prix attractifs, qualité de vie exceptionnelle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:0665015882" className="inline-block bg-amber-600 text-white px-8 py-4 rounded font-medium text-lg hover:bg-amber-700 transition-colors text-center">
                06 65 01 58 82 - Devis Gratuit
              </a>
              <a href="/contact" className="inline-block bg-gray-900 text-white px-8 py-4 rounded font-medium text-lg hover:bg-gray-800 transition-colors text-center">
                Visite Maison Gratuite
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">Familles</div>
                <div className="text-sm text-gray-600">Quartier calme</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">200-400m²</div>
                <div className="text-sm text-gray-600">Jardins privatifs</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">Écoles</div>
                <div className="text-sm text-gray-600">Réputées proximité</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">-25%</div>
                <div className="text-sm text-gray-600">Coûts vs centre</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Rénover Section */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Pourquoi Rénover Maison
              <span className="text-amber-800"> Saint-Aubin Dupuy</span> ?
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Quartier Familial Idéal
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    Sud Toulouse résidentiel calme par excellence : pavillons avec jardins, écoles réputées (primaires, collèges), espaces verts à proximité, commerces de quartier.
                  </p>
                  <p>
                    Cible <strong>familles CSP+</strong> (cadres, professions intermédiaires) avec 3-4 enfants recherchant tranquillité et qualité de vie. Zéro nuisances urbaines, circulation apaisée.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Jardins Privatifs 200-400m²
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    Les pavillons disposent systématiquement de <strong>jardins privatifs de 200-400m²</strong> permettant :
                  </p>
                  <ul>
                    <li>Aire de jeux sécurisée pour les enfants</li>
                    <li>Potager familial et arbres fruitiers</li>
                    <li>Terrasse couverte pour repas extérieurs</li>
                    <li>Pelouse pour activités sportives</li>
                  </ul>
                  <p>
                    <strong>Valorisation jardin : +80 000 à 150 000€</strong> par rapport à un appartement équivalent. Qualité de vie famille incomparable.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Prix Attractifs vs Centre Historique
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    <strong>Prix achat</strong> : 3 400-3 800€/m² (vs 5 500€/m² Capitole).
                  </p>
                  <p>
                    <strong>Prix rénovation</strong> : 2 200-3 000€/m² selon ampleur des travaux (vs 3 500-4 500€/m² centre historique). Pas de contraintes ABF = <strong>liberté totale sur matériaux</strong>, coûts réduits de 25%.
                  </p>
                  <p>
                    <strong>Exemple complet</strong> : Maison 110m² avec jardin 300m² entièrement rénovée = 550 000-650 000€ total (achat + travaux + aménagement jardin).
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Valorisation +25-35% sur 10 Ans
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    Les quartiers résidentiels sud de Toulouse sont <strong>très recherchés par les familles</strong> : demande soutenue, offre de maisons limitée.
                  </p>
                  <p>
                    <strong>Plus-value patrimoniale estimée</strong> : +25-35% sur une décennie.
                  </p>
                  <p>
                    Exemple : Maison 110m² rénovée à 550 000€ (2025) → valeur projetée 715 000-742 000€ (2035). Patrimoine familial pérenne et transmissible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rénovation Spécifique Maisons Familiales */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Rénovation Spécifique
              <span className="text-amber-800"> Maisons Familiales</span>
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p>
                Les maisons familiales de Saint-Aubin Dupuy nécessitent une <strong>approche spécifique</strong> centrée sur le confort, la praticité et la durabilité.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                1. Isolation Thermique Prioritaire
              </h3>

              <p>
                Pour le confort familial et les économies d'énergie, nous priorisons :
              </p>

              <ul>
                <li><strong>Combles perdus</strong> : isolation soufflée 300-400mm (R=7-10)</li>
                <li><strong>Murs extérieurs</strong> : ITE 140-160mm ou ITI si façade conservée</li>
                <li><strong>Fenêtres</strong> : double vitrage 4/16/4 argon, Uw ≤ 1,3 W/m²K</li>
                <li><strong>Portes-fenêtres</strong> : PVC ou alu avec rupture thermique</li>
              </ul>

              <p>
                Budget isolation complète maison 110m² : <strong>25 000-35 000€</strong>. Économies chauffage : 800-1 200€/an. Amortissement 5-7 ans via MaPrimeRénov' + CEE.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                2. Cuisine Ouverte Familiale 15-20m²
              </h3>

              <p>
                Création d'un <strong>espace de vie convivial</strong> par suppression de cloisons :
              </p>

              <ul>
                <li>Cuisine ouverte avec îlot central (4-6 personnes)</li>
                <li>Électroménager encastré haut de gamme (four, lave-vaisselle silencieux)</li>
                <li>Rangements optimisés (garde-manger, cellier attenant)</li>
                <li>Verrière ou baie vitrée vers jardin</li>
              </ul>

              <p>
                Budget cuisine familiale équipée : <strong>15 000-25 000€</strong>.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                3. Chambres Enfants avec Rangements
              </h3>

              <p>
                Aménagement 2-3 chambres enfants (12-15m² chacune) avec :
              </p>

              <ul>
                <li>Placards intégrés sur-mesure (penderie + étagères)</li>
                <li>Bureaux avec prises USB pour devoirs</li>
                <li>Sol stratifié résistant (AC5, facile entretien)</li>
                <li>Peinture lessivable anti-taches</li>
              </ul>

              <p>
                Budget par chambre : <strong>4 000-6 000€</strong>.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                4. Deux Salles de Bain Modernes
              </h3>

              <p>
                Configuration idéale pour famille :
              </p>

              <ul>
                <li><strong>SDB parentale</strong> : douche italienne 120x90, double vasque, WC séparé (8-10m²)</li>
                <li><strong>SDB enfants</strong> : baignoire + douche, vasque, rangements muraux (6-8m²)</li>
                <li>Carrelage grand format antidérapant</li>
                <li>VMC double flux pour aération optimale</li>
              </ul>

              <p>
                Budget 2 salles de bain : <strong>20 000-30 000€</strong>.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                5. Aménagement Jardin Famille
              </h3>

              <p>
                Travaux extérieurs pour profiter pleinement du jardin :
              </p>

              <ul>
                <li>Terrasse bois composite 25-30m² (entretien minimal)</li>
                <li>Pelouse engazonnée avec arrosage automatique</li>
                <li>Aire de jeux sécurisée (sol amortissant)</li>
                <li>Potager surélevé 15-20m²</li>
                <li>Éclairage LED basse consommation</li>
                <li>Portillon sécurisé</li>
              </ul>

              <p>
                Budget aménagement jardin 300m² : <strong>15 000-25 000€</strong>.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mt-12">
              <p className="text-amber-900 font-medium">
                <strong>Conseil famille :</strong> Planifiez les travaux en 2 phases pour maintenir l'habitabilité. Phase 1 (3-4 mois) : isolation, électricité, cuisine, SDB. Phase 2 (2-3 mois) : chambres, peintures, jardin. Permet de vivre sur place et réduire frais d'hébergement temporaire.
              </p>
            </div>
          </div>
        </section>

        {/* Prix Détaillés */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Prix Rénovation
              <span className="text-amber-800"> Saint-Aubin Dupuy 2025</span>
            </h2>

            <div className="space-y-6">
              <div className="border-2 border-amber-200 p-8 rounded bg-white">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rénovation Légère Pavillon
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-3xl font-light text-gray-900 mb-4">2 200 - 2 600 €/m²</p>
                  <ul>
                    <li>Peinture intérieure complète (murs, plafonds, boiseries)</li>
                    <li>Sols stratifiés ou carrelage standard</li>
                    <li>Électricité mise aux normes (tableau, prises, éclairages)</li>
                    <li>Cuisine équipée standard (meubles + plan de travail)</li>
                    <li>Salle de bain rafraîchie (robinetterie, joints, faïence partielle)</li>
                  </ul>
                  <p className="text-amber-800 font-medium mt-4">
                    Exemple maison 110m² : 242 000 - 286 000€
                  </p>
                </div>
              </div>

              <div className="border-2 border-amber-200 p-8 rounded bg-white">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rénovation Complète Famille
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-3xl font-light text-gray-900 mb-4">2 600 - 3 000 €/m²</p>
                  <ul>
                    <li>Isolation thermique complète (combles, murs, fenêtres PVC)</li>
                    <li>Cuisine ouverte familiale 15-20m² avec îlot</li>
                    <li>2 salles de bain modernes (douche italienne, baignoire)</li>
                    <li>Parquet flottant chambres, carrelage grand format pièces d'eau</li>
                    <li>Électricité refaite intégralement (tableau 100A, domotique)</li>
                    <li>Aménagement jardin (terrasse bois, pelouse, aire jeux)</li>
                  </ul>
                  <p className="text-amber-800 font-medium mt-4">
                    Exemple maison 110m² : 286 000 - 330 000€
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-amber-200 p-8 rounded mt-8">
              <h3 className="text-2xl font-light text-amber-900 mb-4">
                Budget Total Acquisition + Rénovation
              </h3>
              <div className="prose prose-stone max-w-none">
                <p>
                  <strong>Exemple maison 110m² avec jardin 300m²</strong> :
                </p>
                <ul>
                  <li>Achat : 380 000€ (3 450€/m²)</li>
                  <li>Rénovation complète : 308 000€ (2 800€/m²)</li>
                  <li>Frais notaire + agence : 32 000€</li>
                  <li><strong>Total investissement : 720 000€</strong></li>
                </ul>
                <p>
                  Valeur post-travaux : 750-800k€. Plus-value immédiate + patrimoine familial durable.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-amber-200 p-8 rounded mt-8">
              <h3 className="text-2xl font-light text-amber-900 mb-4">
                Pourquoi -25% vs Centre Historique ?
              </h3>
              <div className="prose prose-stone max-w-none">
                <ul>
                  <li><strong>Pas de contraintes ABF</strong> : liberté totale sur choix matériaux (fenêtres PVC, ITE, toiture)</li>
                  <li><strong>Accès chantier simplifié</strong> : stationnement, livraisons sans restrictions horaires</li>
                  <li><strong>Structure pavillons standard</strong> : travaux prévisibles, pas de surprises structurelles</li>
                  <li><strong>Délais raccourcis</strong> : pas d'autorisations spéciales ABF, chantiers 4-6 mois</li>
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
