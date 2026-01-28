import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

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

      <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-teal-600">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/renovation-maison-toulouse" className="hover:text-teal-600">Rénovation Toulouse</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Saint-Aubin Dupuy</span>
            </nav>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
              Rénovation Saint-Aubin Dupuy Toulouse
              <span className="block text-3xl md:text-4xl mt-4 text-teal-200">
                Expert Maisons Familiales Résidentielles Sud Toulouse
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
              Rénovation maisons pavillons Saint-Aubin Dupuy sud Toulouse. Quartier résidentiel calme familles, jardins, écoles réputées. Prix attractifs, pas ABF, verdure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:0665015882" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-100 transition-colors text-center shadow-lg">
                📞 06 65 01 58 82 - Devis Gratuit
              </a>
              <Link href="/contact" className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-700 transition-colors text-center shadow-lg">
                Visite Maison Gratuite
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">Familles</div>
                <div className="text-teal-200">Quartier résidentiel calme</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">Jardins</div>
                <div className="text-teal-200">Pavillons 200-400m²</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">Écoles</div>
                <div className="text-teal-200">Réputées proximité</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">-25%</div>
                <div className="text-teal-200">Coûts vs centre historique</div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
              Pourquoi Rénover Maison Saint-Aubin Dupuy ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quartier Familial Idéal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sud Toulouse résidentiel calme : pavillons jardins, écoles réputées (primaires, collèges), espaces verts, commerces proximité. Cible familles CSP+ (cadres, professions intermédiaires) 3-4 enfants. Zéro nuisances urbaines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌳</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Jardins Privatifs 200-400m²</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pavillons maisons jardins 200-400m² standard : aire jeux enfants, potager, terrasses familiales. Valorisation jardin +80-150k€ vs appartement équivalent. Qualité vie famille incomparable.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Prix Attractifs vs Centre</h3>
                <p className="text-gray-700 leading-relaxed">
                  Prix m² achat 3 400-3 800€ (vs 5 500€ Capitole). Rénovation 2 200-3 000€/m² (vs 3 500-4 500€ centre). Pas ABF = liberté matériaux, coûts -25%. Maison 110m² jardin 300m² rénovée : 550-650k€ total.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Valorisation +25-35% 10 ans</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quartiers résidentiels sud Toulouse recherchés familles : demande soutenue, offre limitée. Plus-value revente +25-35% décennie. Maison 110m² rénovée 550k€ (2025) → 715-742k€ (2035). Patrimoine familial pérenne.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
              Projet Rénovation Maison Famille ?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Expert maisons familiales, rénovation pavillons jardins, aménagement espaces enfants. Devis gratuit avec visite maison, plan 3D, simulation financement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="tel:0665015882" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-100 transition-colors shadow-xl">
                📞 06 65 01 58 82
              </a>
              <Link href="/contact" className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-700 transition-colors shadow-xl">
                Devis Gratuit Maison Famille
              </Link>
            </div>
            <p className="text-teal-200">
              41 maisons rénovées Saint-Aubin Dupuy • Note 4,8/5 • Spécialiste familles
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${playfair.className} text-3xl font-bold text-gray-900 mb-8 text-center`}>
              Rénovation Autres Quartiers Toulouse
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/renovation-capitole-toulouse" className="block p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-rose-200">
                <h3 className="font-bold text-lg mb-2">Capitole</h3>
                <p className="text-gray-600 text-sm">Prestige centre</p>
              </Link>
              <Link href="/renovation-minimes-toulouse" className="block p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-green-200">
                <h3 className="font-bold text-lg mb-2">Minimes</h3>
                <p className="text-gray-600 text-sm">DPE F-G années 60-70</p>
              </Link>
              <Link href="/renovation-busca-toulouse" className="block p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <h3 className="font-bold text-lg mb-2">Busca</h3>
                <p className="text-gray-600 text-sm">Villas jardins Art Déco</p>
              </Link>
              <Link href="/renovation-arnaud-bernard-toulouse" className="block p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-indigo-200">
                <h3 className="font-bold text-lg mb-2">Arnaud-Bernard</h3>
                <p className="text-gray-600 text-sm">Bohème jeunes locatif</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
