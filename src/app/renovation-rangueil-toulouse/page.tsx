import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

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

      <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-sky-600">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/renovation-maison-toulouse" className="hover:text-sky-600">Rénovation Toulouse</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Rangueil</span>
            </nav>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-sky-700 via-blue-600 to-indigo-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
              Rénovation Rangueil Toulouse
              <span className="block text-3xl md:text-4xl mt-4 text-sky-200">
                Expert Petits T1-T2 Investissement Locatif Étudiants CHU
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
              Rénovation studios T1-T2 Rangueil Toulouse. Quartier universitaire CHU Purpan, facs sciences/médecine, années 60. Rentabilité locative 6-7% étudiants, prix attractifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:0665015882" className="inline-block bg-white text-sky-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-100 transition-colors text-center shadow-lg">
                📞 06 65 01 58 82 - Devis Gratuit
              </a>
              <Link href="/contact" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors text-center shadow-lg">
                Simulation Rentabilité Locative
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">CHU</div>
                <div className="text-sky-200">Hôpital Purpan proximité</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">6-7%</div>
                <div className="text-sky-200">Rentabilité locative brute</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">Étudiants</div>
                <div className="text-sky-200">Médecine sciences facs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">-30%</div>
                <div className="text-sky-200">Coûts vs centre historique</div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${playfair.className} text-4xl font-bold text-gray-900 mb-12 text-center`}>
              Pourquoi Investir Locatif Rangueil ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3">Demande Étudiants Illimitée</h3>
                <p className="text-gray-700 leading-relaxed">
                  CHU Purpan, fac médecine, fac sciences 10 min. 15 000+ étudiants secteur recherchent logements. Vacance locative quasi-nulle (&lt;1 mois/an). Loyers T2 40m² meublé : 550-650€/mois.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Rentabilité 6-7% Brute</h3>
                <p className="text-gray-700 leading-relaxed">
                  T2 40m² : achat 120k€ + rénovation 88k€ = 208k€ total. Loyer meublé 600€/mois = 7 200€/an = 6,9% brut (vs 4-5% quartiers résidentiels). ROI 10-12 ans via loyers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-3">Prix Attractifs Années 60</h3>
                <p className="text-gray-700 leading-relaxed">
                  Achat 3 000€/m² (vs 5 500€ Capitole). Rénovation 1 800-2 400€/m² (vs 3 500€ centre). Pas ABF = coûts -30%. Investissement accessible primo-investisseurs 200-250k€.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-sky-700 via-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>
              Projet Investissement Locatif Rangueil ?
            </h2>
            <p className="text-xl mb-8">
              Expert petits T1-T2, optimisation espace étudiants, simulation rentabilité locative personnalisée. Accompagnement gestion locative, garants, fiscalité LMNP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0665015882" className="inline-block bg-white text-sky-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-100 shadow-xl">
                📞 06 65 01 58 82
              </a>
              <Link href="/contact" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 shadow-xl">
                Simulation Rentabilité Gratuite
              </Link>
            </div>
            <p className="text-sky-200 mt-8">
              28 investissements Rangueil • Note 4,6/5 • Rentabilité moyenne 6,5%
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${playfair.className} text-3xl font-bold text-gray-900 mb-8 text-center`}>
              Rénovation Autres Quartiers Toulouse
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/renovation-arnaud-bernard-toulouse" className="block p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-indigo-200">
                <h3 className="font-bold text-lg mb-2">Arnaud-Bernard</h3>
                <p className="text-gray-600 text-sm">Bohème locatif étudiants</p>
              </Link>
              <Link href="/renovation-minimes-toulouse" className="block p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-green-200">
                <h3 className="font-bold text-lg mb-2">Minimes</h3>
                <p className="text-gray-600 text-sm">DPE F-G rénovation énergétique</p>
              </Link>
              <Link href="/renovation-capitole-toulouse" className="block p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-rose-200">
                <h3 className="font-bold text-lg mb-2">Capitole</h3>
                <p className="text-gray-600 text-sm">Prestige hyper-centre</p>
              </Link>
              <Link href="/renovation-saint-aubin-dupuy-toulouse" className="block p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-teal-200">
                <h3 className="font-bold text-lg mb-2">Saint-Aubin Dupuy</h3>
                <p className="text-gray-600 text-sm">Maisons familles sud</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
