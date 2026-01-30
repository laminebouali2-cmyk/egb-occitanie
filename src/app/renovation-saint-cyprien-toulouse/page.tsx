import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

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
                Rive Gauche Garonne · Quartier Bohème
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Rénovation Appartement
              <br />
              <span className="text-amber-800">Saint-Cyprien Toulouse</span>
            </h1>

            <div className="prose prose-lg prose-stone max-w-none mb-12">
              <p className="text-xl leading-relaxed">
                Expert rénovation quartier Saint-Cyprien depuis 15 ans. Rive gauche Garonne, immeubles briques roses authentiques 1880-1930, ABF modéré. 20 projets réussis, 100% validations ABF.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:0665015882" className="inline-block bg-amber-600 text-white px-8 py-4 rounded font-medium text-lg hover:bg-amber-700 transition-colors text-center">
                06 65 01 58 82 - Devis Gratuit
              </a>
              <a href="/contact" className="inline-block bg-gray-900 text-white px-8 py-4 rounded font-medium text-lg hover:bg-gray-800 transition-colors text-center">
                Dossier ABF Gratuit
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">17 320</div>
                <div className="text-sm text-gray-600">Habitants</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">4 747€</div>
                <div className="text-sm text-gray-600">Prix m² (nov 2025)</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">1880-1930</div>
                <div className="text-sm text-gray-600">Briques roses</div>
              </div>
              <div className="border-2 border-amber-200 p-6 rounded">
                <div className="text-3xl font-light mb-2 text-amber-900">90%</div>
                <div className="text-sm text-gray-600">Validation ABF</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Rénover Section */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Pourquoi Rénover
              <span className="text-amber-800"> Saint-Cyprien</span> ?
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Prix Attractifs vs Centre Historique
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    <strong>Achat</strong> : 3 500-6 000€/m² (moyenne 4 747€/m² nov 2025) soit <strong>-20% vs Capitole</strong>.
                  </p>
                  <p>
                    <strong>Rénovation</strong> : 2 400-3 200€/m² selon ampleur des travaux (vs 3 000-4 000€/m² Capitole). ABF modéré = coûts maîtrisés.
                  </p>
                  <p>
                    <strong>Total investissement</strong> : 5 900-9 200€/m² post-rénovation vs 10 000€/m²+ rive droite neuf. Budget rénovation confortable, <strong>marges de valorisation importantes : ROI +25-35%</strong> sur prix achat initial.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Gentrification Dynamique en Cours
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    <strong>+5,4% prix immobilier 2024-2025</strong> (vs +2% moyenne Toulouse). Saint-Cyprien est un <strong>quartier montant</strong> : artistes, jeunes actifs, familles CSP+, commerces branchés, restaurants de qualité.
                  </p>
                  <p>
                    Projets urbains structurants : réaménagement quais Garonne, nouvelles pistes cyclables, espaces piétons. <strong>Valorisation projetée : 5-7%/an pour 2025-2030</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Vue Garonne = Valorisation +15-20%
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    Appartements rénovés avec <strong>vue sur la Garonne ou terrasse panoramique</strong> : 6 000-6 500€/m² vs 4 500€/m² sans vue.
                  </p>
                  <p>
                    Quais piétons, pistes cyclables, guinguettes en été. <strong>Cadre de vie unique à Toulouse</strong> = argument de revente puissant. Rareté de l'offre vue Garonne.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Vie de Quartier Authentique & Bohème
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p>
                    <strong>Communauté artistes et créatifs</strong> : galeries d'art, ateliers, théâtres alternatifs. Marché Saint-Cyprien le dimanche, bars et restaurants branchés rue des Récollets.
                  </p>
                  <p>
                    <strong>Mixité sociale positive</strong>, ambiance village dans Toulouse. Écoles alternatives, crèches associatives, services de proximité complets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prix Détaillés */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Prix Rénovation
              <span className="text-amber-800"> Saint-Cyprien 2025</span>
            </h2>

            <div className="space-y-6">
              <div className="border-2 border-amber-200 p-8 rounded bg-white">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rénovation Légère
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-3xl font-light text-gray-900 mb-4">700 €/m²</p>
                  <ul>
                    <li>Peinture murs et plafonds</li>
                    <li>Sols stratifiés ou carrelage standard</li>
                    <li>Cuisine équipée standard</li>
                    <li>Salle de bain rafraîchie</li>
                  </ul>
                  <p className="text-amber-800 font-medium mt-4">
                    60m² : 42 000€ · 80m² : 56 000€ · 100m² : 70 000€
                  </p>
                </div>
              </div>

              <div className="border-2 border-amber-200 p-8 rounded bg-white">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rénovation Moyenne
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-3xl font-light text-gray-900 mb-4">1 400 €/m²</p>
                  <ul>
                    <li>+ Électricité aux normes (installations années 70-90)</li>
                    <li>+ Plomberie complète (remplacement canalisations plomb)</li>
                    <li>+ Isolation phonique renforcée (tramway T1)</li>
                  </ul>
                  <p className="text-amber-800 font-medium mt-4">
                    60m² : 84 000€ · 80m² : 112 000€ · 100m² : 140 000€
                  </p>
                </div>
              </div>

              <div className="border-2 border-amber-200 p-8 rounded bg-white">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rénovation Complète <span className="text-sm font-normal text-amber-600">(Le plus demandé)</span>
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-3xl font-light text-gray-900 mb-4">2 400 €/m²</p>
                  <ul>
                    <li>+ Gros œuvre (murs, sols, structures)</li>
                    <li>+ ITE façade arrière (côté cour, autorisée)</li>
                    <li>+ Cuisine et salle de bain premium</li>
                    <li>+ Conservation briques roses extérieures</li>
                  </ul>
                  <p className="text-amber-800 font-medium mt-4">
                    60m² : 144 000€ · 80m² : 192 000€ · 100m² : 240 000€
                  </p>
                </div>
              </div>

              <div className="border-2 border-amber-200 p-8 rounded bg-white">
                <h3 className="text-2xl font-light text-amber-900 mb-4">
                  Rénovation Haut Standing
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-3xl font-light text-gray-900 mb-4">3 200 €/m²</p>
                  <ul>
                    <li>+ Parquet massif chêne ou marbre</li>
                    <li>+ Domotique complète (éclairage, chauffage, volets)</li>
                    <li>+ Aménagement terrasse avec vue Garonne</li>
                    <li>+ Finitions architecte d'intérieur</li>
                  </ul>
                  <p className="text-amber-800 font-medium mt-4">
                    60m² : 192 000€ · 80m² : 256 000€ · 100m² : 320 000€
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mt-12">
              <p className="text-amber-900 font-medium mb-3">
                <strong>Inclus dans nos prix rénovation Saint-Cyprien :</strong>
              </p>
              <ul className="space-y-2 text-amber-900">
                <li>• Dossier ABF complet si travaux façade (architecte conseil, plans, photos)</li>
                <li>• Diagnostics obligatoires (amiante, plomb, électricité immeubles avant 1997)</li>
                <li>• Conservation briques roses extérieures (nettoyage, rejointoiement)</li>
                <li>• Isolation phonique renforcée (tramway T1, rue République)</li>
                <li>• Garanties décennale + parfait achèvement (protection totale 10 ans)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Travaux Prioritaires */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Travaux Prioritaires
              <span className="text-amber-800"> Saint-Cyprien</span>
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p>
                Les immeubles anciens de Saint-Cyprien (1880-1930) nécessitent des <strong>travaux spécifiques</strong> liés à leur âge et à l'environnement urbain (tramway, Garonne).
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                1. Isolation Phonique (95% appartements)
              </h3>

              <p>
                <strong>Problème</strong> : Tramway T1 sur rue République, trafic routier, vie nocturne branchée = nuisances sonores importantes.
              </p>

              <p>
                <strong>Solution</strong> :
              </p>

              <ul>
                <li>Double vitrage acoustique 45-50 dB : 8 000-12 000€ pour 80m²</li>
                <li>Isolation murs mitoyens avec laine minérale haute densité : 6 000-10 000€</li>
              </ul>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                2. Électricité Obsolète (80% immeubles avant 1990)
              </h3>

              <p>
                <strong>Problème</strong> : Installations années 70-90 non conformes normes NF C 15-100. Risques : courts-circuits, incendies.
              </p>

              <p>
                <strong>Solution</strong> : Mise aux normes complète 80-120€/m² (6 400-9 600€ pour 80m²). Tableau électrique, disjoncteurs différentiels, prises avec terre.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                3. Plomberie Plomb (60% immeubles avant 1950)
              </h3>

              <p>
                <strong>Problème</strong> : Canalisations en plomb interdites depuis 2013 (toxicité, saturnisme).
              </p>

              <p>
                <strong>Solution</strong> : Remplacement total par PER ou cuivre : 6 000-10 000€ pour 80m². Diagnostic plomb obligatoire avant travaux.
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                4. Amélioration DPE E-F (70% appartements)
              </h3>

              <p>
                <strong>Problème</strong> : Isolation thermique faible = factures chauffage élevées + malus à la vente.
              </p>

              <p>
                <strong>Solution</strong> :
              </p>

              <ul>
                <li>ITE façade arrière (côté cour, autorisée ABF) : 15 000-25 000€</li>
                <li>VMC double-flux : 3 000-5 000€</li>
                <li>Gain DPE : E/F → C/D = valorisation +8-12%</li>
              </ul>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                5. Cuisine et Salle de Bain Vétustes (85%)
              </h3>

              <p>
                <strong>Problème</strong> : Équipements années 80-2000 obsolètes, consommateurs d'eau/énergie.
              </p>

              <p>
                <strong>Solution</strong> : Rénovation complète standing 15 000-30 000€ (cuisine 10-20k€ + SDB 5-10k€). Équipements économes A+++.
              </p>
            </div>
          </div>
        </section>

        {/* ABF Modéré Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Gestion ABF
              <span className="text-amber-800"> Saint-Cyprien</span>
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p>
                Saint-Cyprien bénéficie d'un <strong>ABF modéré</strong> (vs ultra-strict Capitole/Carmes). Consultation ABF obligatoire uniquement pour :
              </p>

              <ul>
                <li>Travaux façades visibles depuis la Garonne ou rues principales (République, Récollets, Patte d'Oie)</li>
                <li>Changement menuiseries extérieures (fenêtres, volets, portes)</li>
                <li>Modification toiture (surélévation, lucarnes, chien-assis)</li>
                <li>Ravalement façade (couleur, enduit, briques)</li>
              </ul>

              <p>
                <strong>Intérieur libre</strong> sauf immeubles classés Monuments Historiques (rares).
              </p>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                Procédure ABF Saint-Cyprien (100% validations EGB Occitanie)
              </h3>

              <ol className="space-y-4">
                <li><strong>1. Consultation architecte conseil ABF</strong> (EGB Occitanie gère 100% dossiers)</li>
                <li><strong>2. Dossier photos + plans + nuancier</strong> (respect teintes briques roses existantes)</li>
                <li><strong>3. Déclaration préalable travaux</strong> mairie Toulouse</li>
                <li><strong>4. Instruction urbanisme</strong> : 1 mois + transmission ABF</li>
                <li><strong>5. Avis ABF</strong> : 3-4 semaines (favorable 90% cas si respect briques roses)</li>
                <li><strong>6. Décision mairie</strong> définitive</li>
              </ol>

              <p>
                <strong>Délai total</strong> : 3-4 mois vs 2 mois hors ABF. <strong>Taux acceptation</strong> : 90% si conservation briques roses extérieures + menuiseries bois/aluminium ton brique.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mt-12">
              <p className="text-amber-900 font-medium">
                <strong>EGB Occitanie gère votre dossier ABF</strong> : 20 projets Saint-Cyprien réalisés, 100% validations ABF, expertise architectes conseils, relations privilégiées DRAC Occitanie. Vous n'avez aucune démarche administrative à effectuer.
              </p>
            </div>
          </div>
        </section>

        {/* Comparaison Quartiers */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Saint-Cyprien vs
              <span className="text-amber-800"> Autres Quartiers</span>
            </h2>

            <div className="space-y-6">
              <div className="border-2 border-amber-200 p-6 rounded bg-amber-50">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="font-bold text-amber-900">Saint-Cyprien</p>
                    <p className="text-sm text-gray-600 mt-1">Artistes, familles</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-amber-900">4 747€</p>
                    <p className="text-xs text-gray-600">Achat/m²</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-amber-900">2 400-3 200€</p>
                    <p className="text-xs text-gray-600">Réno/m²</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-amber-900">Modéré</p>
                    <p className="text-xs text-gray-600">ABF</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-amber-200 p-6 rounded bg-white">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="font-bold text-gray-900">Carmes</p>
                    <p className="text-sm text-gray-600 mt-1">CSP++, patrimoine</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">5 200€</p>
                    <p className="text-xs text-gray-600">Achat/m²</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">2 800-3 500€</p>
                    <p className="text-xs text-gray-600">Réno/m²</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">Strict</p>
                    <p className="text-xs text-gray-600">ABF</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-amber-200 p-6 rounded bg-white">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="font-bold text-gray-900">Capitole</p>
                    <p className="text-sm text-gray-600 mt-1">Prestige, investisseurs</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">6 000€</p>
                    <p className="text-xs text-gray-600">Achat/m²</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">3 000-4 000€</p>
                    <p className="text-xs text-gray-600">Réno/m²</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">Ultra-strict</p>
                    <p className="text-xs text-gray-600">ABF</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-amber-200 p-6 rounded bg-white">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="font-bold text-gray-900">Minimes</p>
                    <p className="text-sm text-gray-600 mt-1">Investisseurs, DPE</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">3 200€</p>
                    <p className="text-xs text-gray-600">Achat/m²</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">1 800-2 500€</p>
                    <p className="text-xs text-gray-600">Réno/m²</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-gray-900">Non</p>
                    <p className="text-xs text-gray-600">ABF</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-amber-200 p-8 rounded mt-8">
              <h3 className="text-2xl font-light text-amber-900 mb-4">
                Conclusion Expert EGB Occitanie
              </h3>
              <div className="prose prose-stone max-w-none">
                <p>
                  <strong>Saint-Cyprien = meilleur rapport qualité/prix rénovation Toulouse rive gauche</strong>. Prix achat modérés vs Carmes/Capitole (-20 à -30%) + rénovation économique (ABF modéré) + gentrification dynamique (+5,4%/an) = <strong>ROI optimal 25-35%</strong> sur 3-5 ans.
                </p>
                <p>
                  Profil idéal : jeunes actifs et familles cherchant authenticité + vue Garonne + cadre de vie vibrant sans payer le prix premium du centre historique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                Ils Nous Ont
                <span className="text-amber-800"> Fait Confiance</span>
              </h2>
              <p className="text-gray-600">
                20 projets réussis Saint-Cyprien · 100% validations ABF · Note moyenne 4,9/5
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-amber-200 p-6 rounded bg-white">
                <div className="mb-4">
                  <p className="font-bold text-gray-900">Sophie C.</p>
                  <p className="text-sm text-gray-600">Rue Récollettes · Sept 2024</p>
                </div>
                <div className="text-amber-600 mb-3">★★★★★</div>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "Rénovation complète 75m² avec vue Garonne. EGB Occitanie a géré tout le dossier ABF en 3 semaines. Travaux terminés en 5 mois pile, qualité irréprochable. Notre appartement vaut maintenant +30% selon l'agence."
                </p>
              </div>

              <div className="border-2 border-amber-200 p-6 rounded bg-white">
                <div className="mb-4">
                  <p className="font-bold text-gray-900">Marc L.</p>
                  <p className="text-sm text-gray-600">Place Intérieure · Mars 2024</p>
                </div>
                <div className="text-amber-600 mb-3">★★★★★</div>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "Isolation phonique + électricité + cuisine neuve pour 82m². Budget tenu au centime près (164 000€), délais respectés. Le double vitrage a transformé notre quotidien, plus aucun bruit du tramway."
                </p>
              </div>

              <div className="border-2 border-amber-200 p-6 rounded bg-white">
                <div className="mb-4">
                  <p className="font-bold text-gray-900">Anne D.</p>
                  <p className="text-sm text-gray-600">Quai Garonne · Janv 2024</p>
                </div>
                <div className="text-amber-600 mb-3">★★★★★</div>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "Investissement locatif : achat 350k€ + réno 180k€ = 530k€. Appartement loué 1 350€/mois 48h après annonce. ROI conforme prévisions. Équipe pro, suivi hebdomadaire, aucune surprise."
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}
