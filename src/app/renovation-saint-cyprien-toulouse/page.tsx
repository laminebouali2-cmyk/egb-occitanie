'use client';

import { useState, useEffect } from 'react';
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowStickyCTA(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-rose-600 to-orange-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky CTA Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white border-t-2 border-rose-600 shadow-2xl z-40 transition-transform duration-300 ${
          showStickyCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="font-bold text-gray-900">Projet rénovation Saint-Cyprien ?</p>
            <p className="text-sm text-gray-600">Devis gratuit sous 48h - Expert ABF</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <a
              href="tel:0665015882"
              className="flex-1 md:flex-initial bg-gradient-to-r from-rose-600 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:from-rose-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg text-center"
            >
              📞 06 65 01 58 82
            </a>
            <Link
              href="/contact"
              className="flex-1 md:flex-initial bg-white text-rose-600 px-6 py-3 rounded-lg font-bold border-2 border-rose-600 hover:bg-rose-50 transition-all text-center"
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>

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
      <section className="relative bg-gradient-to-br from-rose-700 via-rose-600 to-orange-600 text-white py-20 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default group">
                <div className="text-3xl font-bold text-rose-100 mb-2 group-hover:scale-110 transition-transform">17 320</div>
                <div className="text-sm text-rose-50">Habitants</div>
                <div className="text-xs text-rose-200 mt-1">Quartier dynamique</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default group">
                <div className="text-3xl font-bold text-rose-100 mb-2 group-hover:scale-110 transition-transform">4 747€</div>
                <div className="text-sm text-rose-50">Prix m² (nov 2025)</div>
                <div className="text-xs text-rose-200 mt-1">+5,4% en 1 an</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default group">
                <div className="text-3xl font-bold text-rose-100 mb-2 group-hover:scale-110 transition-transform">1880-1930</div>
                <div className="text-sm text-rose-50">Immeubles Briques</div>
                <div className="text-xs text-rose-200 mt-1">Patrimoine authentique</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default group">
                <div className="text-3xl font-bold text-rose-100 mb-2 group-hover:scale-110 transition-transform">90%</div>
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
            <div className="group bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-rose-600">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
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
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-600">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
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
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-600">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
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
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-600">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
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

      {/* Trust Section - Témoignages & Social Proof */}
      <section className="py-16 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-rose-600 text-white px-6 py-2 rounded-full font-bold mb-4">
              ⭐ 20 Projets Réussis Saint-Cyprien
            </div>
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
              Ils Nous Ont Fait Confiance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              100% validations ABF · Note moyenne 4,9/5 · Garanties décennales
            </p>
          </div>

          {/* Témoignages Grid - Placeholder pour contenu authentique */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Témoignage 1 - À REMPLIR */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-rose-600">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {/* Photo client à ajouter */}
                  ?
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">[Nom Client]</p>
                  <p className="text-sm text-gray-600">[Quartier] · [Date]</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3 text-xl">★★★★★</div>
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;[Témoignage authentique à ajouter - expérience projet, qualité travaux, respect délais, gestion ABF, etc.]&rdquo;
              </p>
            </div>

            {/* Témoignage 2 - À REMPLIR */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-orange-600">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {/* Photo client à ajouter */}
                  ?
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">[Nom Client]</p>
                  <p className="text-sm text-gray-600">[Quartier] · [Date]</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3 text-xl">★★★★★</div>
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;[Témoignage authentique à ajouter - expérience projet, qualité travaux, respect délais, gestion ABF, etc.]&rdquo;
              </p>
            </div>

            {/* Témoignage 3 - À REMPLIR */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-amber-600">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {/* Photo client à ajouter */}
                  ?
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">[Nom Client]</p>
                  <p className="text-sm text-gray-600">[Quartier] · [Date]</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-3 text-xl">★★★★★</div>
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;[Témoignage authentique à ajouter - expérience projet, qualité travaux, respect délais, gestion ABF, etc.]&rdquo;
              </p>
            </div>
          </div>

          {/* Étude de Cas - Placeholder */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-rose-600">
            <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white p-6">
              <h3 className={`${playfair.className} text-2xl font-bold mb-2`}>
                📊 Étude de Cas : Rénovation Complète Saint-Cyprien
              </h3>
              <p className="text-rose-100">
                Transformation appartement 85m² avec vue Garonne - [Date projet]
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 p-8">
              {/* Photo Avant - À AJOUTER */}
              <div>
                <div className="bg-gray-200 h-48 rounded-lg mb-3 flex items-center justify-center text-gray-500 font-bold">
                  [Photo AVANT]
                </div>
                <p className="text-sm font-bold text-gray-900">État initial</p>
                <p className="text-xs text-gray-600">[Description état avant]</p>
              </div>

              {/* Détails Projet */}
              <div>
                <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-lg h-48 mb-3">
                  <h4 className="font-bold text-gray-900 mb-3">Détails Projet</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>🏠 <strong>[X]m²</strong> rénovés</li>
                    <li>💰 Budget : <strong>[XX]€</strong></li>
                    <li>⏱️ Durée : <strong>[X] mois</strong></li>
                    <li>📋 ABF : <strong>[Statut]</strong></li>
                    <li>⭐ Note : <strong>5/5</strong></li>
                  </ul>
                </div>
                <p className="text-sm font-bold text-gray-900">[Travaux effectués]</p>
                <p className="text-xs text-gray-600">[Liste travaux]</p>
              </div>

              {/* Photo Après - À AJOUTER */}
              <div>
                <div className="bg-gray-200 h-48 rounded-lg mb-3 flex items-center justify-center text-gray-500 font-bold">
                  [Photo APRÈS]
                </div>
                <p className="text-sm font-bold text-gray-900">Résultat final</p>
                <p className="text-xs text-gray-600">[Valorisation +XX%]</p>
              </div>
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

          <div className="overflow-x-auto rounded-xl shadow-2xl">
            <table className="w-full bg-white overflow-hidden">
              <thead className="bg-gradient-to-r from-rose-600 to-orange-600 text-white">
                <tr>
                  <th className="px-6 py-5 text-left font-bold text-lg">Type Rénovation</th>
                  <th className="px-6 py-5 text-right font-bold text-lg">Appart 60m²</th>
                  <th className="px-6 py-5 text-right font-bold text-lg">Appart 80m²</th>
                  <th className="px-6 py-5 text-right font-bold text-lg">Appart 100m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 transition-all duration-200 group">
                  <td className="px-6 py-5 font-medium text-gray-900">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">🎨</span>
                      <div>
                        <p className="font-bold">Rénovation Légère</p>
                        <p className="text-sm text-gray-500">Peinture, sols, cuisine/SDB standards</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">42 000€</td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">56 000€</td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">70 000€</td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 transition-all duration-200 group">
                  <td className="px-6 py-5 font-medium text-gray-900">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">🔧</span>
                      <div>
                        <p className="font-bold">Rénovation Moyenne</p>
                        <p className="text-sm text-gray-500">+ Électricité, plomberie, isolation phonique</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">84 000€</td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">112 000€</td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">140 000€</td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 transition-all duration-200 group border-l-4 border-l-rose-600">
                  <td className="px-6 py-5 font-medium text-gray-900">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">⭐</span>
                      <div>
                        <p className="font-bold text-rose-600">Rénovation Complète</p>
                        <p className="text-sm text-gray-500">+ Gros œuvre, ITE, cuisine/SDB premium</p>
                        <p className="text-xs text-rose-600 font-semibold mt-1">✓ Le plus demandé</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-bold text-rose-600 text-lg">144 000€</td>
                  <td className="px-6 py-5 text-right font-bold text-rose-600 text-lg">192 000€</td>
                  <td className="px-6 py-5 text-right font-bold text-rose-600 text-lg">240 000€</td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 transition-all duration-200 group">
                  <td className="px-6 py-5 font-medium text-gray-900">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">💎</span>
                      <div>
                        <p className="font-bold">Rénovation Haut Standing</p>
                        <p className="text-sm text-gray-500">+ Parquet massif, marbre, domotique, terrasse</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">192 000€</td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">256 000€</td>
                  <td className="px-6 py-5 text-right font-bold text-gray-900 text-lg">320 000€</td>
                </tr>
                <tr className="bg-gradient-to-r from-rose-600 to-orange-600 text-white">
                  <td className="px-6 py-4 text-base font-bold">
                    📊 Prix au m² TTC
                  </td>
                  <td className="px-6 py-4 text-right text-base font-bold">700-3 200€/m²</td>
                  <td className="px-6 py-4 text-right text-base font-bold">700-3 200€/m²</td>
                  <td className="px-6 py-4 text-right text-base font-bold">700-3 200€/m²</td>
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

      {/* Micro CTA - Quick Action */}
      <section className="py-8 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <p className="font-bold text-xl mb-1">💡 Saint-Cyprien = Meilleur Rapport Qualité/Prix</p>
              <p className="text-rose-100">ROI optimal 25-35% sur 3-5 ans · Prix modérés · Gentrification dynamique</p>
            </div>
            <a
              href="tel:0665015882"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-bold hover:bg-rose-50 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              📞 Discutons de votre projet
            </a>
          </div>
        </div>
      </section>

      {/* Lead Capture Form - Inline */}
      <section className="py-16 bg-gradient-to-br from-rose-700 via-rose-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left - Form */}
              <div className="p-8 md:p-10">
                <h3 className={`${playfair.className} text-3xl font-bold text-gray-900 mb-3`}>
                  Devis Gratuit Sous 48h
                </h3>
                <p className="text-gray-600 mb-6">
                  Expert rénovation Saint-Cyprien · Gestion ABF incluse
                </p>
                <form className="space-y-4" action="/contact" method="GET">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-1">
                      Surface appartement (m²)
                    </label>
                    <input
                      type="number"
                      id="surface"
                      name="surface"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                      placeholder="80"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Votre projet en quelques mots
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition-all outline-none resize-none"
                      placeholder="Rénovation complète appartement Saint-Cyprien..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-600 to-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:from-rose-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    ✉️ Recevoir Mon Devis Gratuit
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Réponse sous 48h · Sans engagement · 100% gratuit
                  </p>
                </form>
              </div>

              {/* Right - Trust Badges */}
              <div className="bg-gradient-to-br from-rose-600 to-orange-600 p-8 md:p-10 text-white flex flex-col justify-center">
                <h4 className={`${playfair.className} text-2xl font-bold mb-6`}>
                  Pourquoi EGB Occitanie ?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Expert ABF Saint-Cyprien</p>
                      <p className="text-sm text-rose-100">100% validations sur 20 projets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Délais Tenus</p>
                      <p className="text-sm text-rose-100">95% projets livrés à temps</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Garanties Complètes</p>
                      <p className="text-sm text-rose-100">Décennale + parfait achèvement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Note 4,9/5</p>
                      <p className="text-sm text-rose-100">Clients satisfaits ⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/30">
                  <p className="text-center font-bold text-lg mb-2">Ou appelez directement :</p>
                  <a
                    href="tel:0665015882"
                    className="block text-center bg-white text-rose-600 px-6 py-3 rounded-lg font-bold hover:bg-rose-50 transition-all text-xl"
                  >
                    📞 06 65 01 58 82
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900`}>
            Questions Fréquentes Rénovation Saint-Cyprien
          </h2>

          <div className="space-y-6">
            <details className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-rose-600">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center gap-4">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🔧</span>
                  <span>Quels sont les travaux prioritaires en rénovation Saint-Cyprien ?</span>
                </span>
                <span className="text-rose-600 text-2xl group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
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

            <details className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-rose-600">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center gap-4">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <span>Comment gérer l'ABF pour travaux façade Saint-Cyprien ?</span>
                </span>
                <span className="text-rose-600 text-2xl group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
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

            <details className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-rose-600">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center gap-4">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <span>Rentabilité investissement locatif après rénovation Saint-Cyprien ?</span>
                </span>
                <span className="text-rose-600 text-2xl group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
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

            <details className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-rose-600">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center gap-4">
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🎁</span>
                  <span>Quelles aides rénovation disponibles Saint-Cyprien 2025 ?</span>
                </span>
                <span className="text-rose-600 text-2xl group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
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
      <section className="py-20 bg-gradient-to-br from-rose-700 via-rose-600 to-orange-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-bold mb-6 border border-white/30">
            🎯 Prêt à Passer à l'Action ?
          </div>
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6 leading-tight`}>
            Transformez Votre Appartement
            <span className="block text-rose-200 mt-2">Saint-Cyprien en 2025</span>
          </h2>
          <p className="text-xl text-rose-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            EGB Occitanie vous accompagne de A à Z : diagnostic complet, dossier ABF si besoin,
            travaux clés en main, garanties décennales. <strong className="text-white">Devis détaillé gratuit sous 48h</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:0665015882"
              className="group inline-block bg-white text-rose-700 px-10 py-5 rounded-xl font-bold hover:bg-rose-50 transition-all transform hover:scale-105 shadow-2xl text-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">📞</span>
                <span>
                  <span className="block text-sm font-normal text-gray-600">Appelez maintenant</span>
                  <span className="block">06 65 01 58 82</span>
                </span>
              </span>
            </a>
            <Link
              href="/contact"
              className="inline-block bg-rose-800 text-white px-10 py-5 rounded-xl font-bold hover:bg-rose-900 transition-all border-2 border-white text-lg hover:scale-105 transform shadow-2xl"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">✉️</span>
                <span>Demande Devis Gratuit</span>
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-6 border-t border-white/30">
            <div>
              <div className="text-3xl font-bold mb-1">20</div>
              <div className="text-sm text-rose-100">Projets Réussis</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-rose-100">Validations ABF</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4,9/5</div>
              <div className="text-sm text-rose-100">Note Moyenne ⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section - Optimisé pour engagement */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className={`${playfair.className} text-3xl font-bold text-center mb-4 text-gray-900`}>
            Découvrez Aussi Nos Services Rénovation
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Expert rénovation Toulouse · Tous quartiers · Gestion ABF · Devis gratuit 48h
          </p>

          {/* Quartiers Principaux */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🏘️</span>
              <span>Rénovation par Quartier</span>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/renovation-maison-carmes-toulouse"
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-rose-600 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-600/10 to-orange-600/10 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="relative">
                  <div className="text-3xl mb-2">🏛️</div>
                  <p className="font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Carmes</p>
                  <p className="text-xs text-gray-500 mt-1">Patrimoine · ABF Strict</p>
                </div>
              </Link>

              <Link
                href="/renovation-capitole-toulouse"
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-rose-600 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-600/10 to-orange-600/10 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="relative">
                  <div className="text-3xl mb-2">⭐</div>
                  <p className="font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Capitole</p>
                  <p className="text-xs text-gray-500 mt-1">Prestige · Centre</p>
                </div>
              </Link>

              <Link
                href="/renovation-minimes-toulouse"
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-rose-600 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-600/10 to-orange-600/10 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="relative">
                  <div className="text-3xl mb-2">🏢</div>
                  <p className="font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Minimes</p>
                  <p className="text-xs text-gray-500 mt-1">Investissement · Prix</p>
                </div>
              </Link>

              <Link
                href="/renovation-busca-toulouse"
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-rose-600 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-600/10 to-orange-600/10 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="relative">
                  <div className="text-3xl mb-2">🌳</div>
                  <p className="font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Busca</p>
                  <p className="text-xs text-gray-500 mt-1">Familial · Verdure</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Services & Actions */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔧</span>
              <span>Nos Services</span>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/renovation"
                className="group bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl mb-2">🏠</div>
                <p className="font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Rénovation</p>
                <p className="text-xs text-gray-500 mt-1">Tous types travaux</p>
              </Link>

              <Link
                href="/extension"
                className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl mb-2">📐</div>
                <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Extension</p>
                <p className="text-xs text-gray-500 mt-1">Agrandissement</p>
              </Link>

              <Link
                href="/contact"
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl mb-2">✉️</div>
                <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">Devis Gratuit</p>
                <p className="text-xs text-gray-500 mt-1">Réponse 48h</p>
              </Link>

              <Link
                href="/avis"
                className="group bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl mb-2">⭐</div>
                <p className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">Avis Clients</p>
                <p className="text-xs text-gray-500 mt-1">Note 4,9/5</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
