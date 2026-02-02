import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Rénovation Busca Toulouse | Expert Villas 1920-1950 Art Déco & Jardins",
  description: "Rénovation villas Busca Toulouse. Quartier résidentiel bourgeois 1920-1950, maisons Art Déco, jardins arbres centenaires. Prix 2025 : 2 400-3 400€/m². Devis gratuit 06 65 01 58 82.",
  keywords: "rénovation Busca Toulouse, villa Art Déco Toulouse, rénovation maison jardin, quartier résidentiel Toulouse, prix rénovation Busca, maison bourgeoise Toulouse",
  alternates: {
    canonical: "https://www.egb-occitanie.fr/renovation-busca-toulouse"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une rénovation villa Busca Toulouse en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix rénovation villa Busca Toulouse 2025 : 2 400-3 400€/m² selon état initial et standing souhaité. Rénovation légère maison 1920-1950 : 2 400-2 800€/m² (peinture, sols, électricité, cuisine/SDB standards). Rénovation complète valorisation : 2 800-3 400€/m² (isolation, menuiseries, cuisine équipée, parquet massif, SDB prestige, jardin paysager). Rénovation prestige Art Déco : 3 500-4 500€/m² (restauration éléments patrimoine, matériaux nobles, prestations luxe). Exemple villa 150m² rénovation complète : 420 000-510 000€. AVANTAGE Busca : Pas ABF sur majorité maisons = liberté architecturale + coûts -15-20% vs centre historique. Valorisation post-rénovation : +30-40% prix vente (villa rénovée prime résidentielle +jardin). Devis gratuit villa Busca : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Comment rénover villa Art Déco années 1920-1930 Busca sans dénaturer style ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rénovation villa Art Déco Busca Toulouse (préservation caractère années 1920-1930) : 1) CONSERVER éléments patrimoniaux : bow-windows, ferronneries balcons, vitraux géométriques, mosaïques entrée, cheminées marbre, moulures plafond, carrelages ciment motifs 2) RESTAURER plutôt que remplacer : parquet chêne massif (ponçage + vitrification 40-60€/m²), carrelages anciens (nettoyage + joints 30-50€/m²), menuiseries bois (décapage + peinture vs remplacement PVC) 3) HARMONISER ajouts modernes : cuisine contemporaine sobre s'intégrant volumes, salle de bain moderne avec clins œil Art Déco (robinetterie laiton, carrelage métro, miroirs ronds), VMC/chauffage discrets (grilles décoratives) 4) VALORISER jardin : restauration portail fer forgé, allées graviers/pavés anciens, végétation période (rosiers, glycines, magnolias) 5) ISOLATION performante invisible : isolation intérieure murs (10-12 cm) + combles + fenêtres double vitrage bois sur-mesure reproduisant profils origine. Budget villa 120m² rénovation Art Déco respectueuse : 300 000-420 000€ (2 500-3 500€/m²). EGB Occitanie : expertise rénovation villas période, artisans spécialisés patrimoine, conseil préservation style. Visite villa gratuite : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi investir rénovation villa Busca plutôt qu'appartement centre Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avantages villa Busca vs appartement centre Toulouse (arbitrage investissement 2025) : 1) JARDIN privatif 200-500m² : valorisation +100 000-200 000€ vs appartement équivalent, demande familles illimitée (rareté jardins Toulouse), confort vie incomparable 2) COÛTS rénovation -15-20% : pas ABF Busca = matériaux standards, PVC/alu autorisé, délais courts vs Capitole/Carmes contraintes 3) CHARGES nulles : pas syndic (0€ vs 1 800-3 000€/an copropriété), autonomie décisions, pas AG 4) RENTABILITÉ famille CSP+ : loyers 1 800-2 500€/mois villa 120-150m² (vs 1 200-1 500€ appartement 80m² centre) = rentabilité 4-5% similaire mais cible solvable (cadres sup, professions libérales familles) 5) VALORISATION long terme : +40-60% sur 10 ans quartiers résidentiels (vs +30-40% appartements), rareté offre villas jardins centre-ville 6) QUALITÉ VIE propriétaire-occupant : calme résidentiel, pas vis-à-vis, espaces enfants/animaux, stationnement privatif 2-3 voitures. INCONVÉNIENTS : liquidité moindre (délai vente 6-12 mois vs 3-6 mois appartement), entretien jardin/extérieurs, cible acheteurs familles uniquement. STRATÉGIE : Villa Busca = investissement patrimoine familial long terme (10-20 ans) vs appartement centre = investissement rentabilité immédiate court terme. Simulation investissement villa gratuite : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Quels travaux prioriser rénovation villa Busca années 1950 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Priorités rénovation villa années 1950 Busca Toulouse (ordre importance ROI) : 1) ISOLATION thermique (priorité #1, ROI immédiat) : isolation combles 30-50€/m² (30% déperditions), murs par l'extérieur 120-180€/m² ou intérieur 60-90€/m² (25% déperditions), fenêtres double vitrage PVC 350-600€/unité (15% déperditions). Gain : -50-60% factures chauffage = -1 200-1 800€/an villa 150m² 2) CHAUFFAGE performant (priorité #2) : pompe chaleur air-eau 12 000-18 000€ (COP 3-4) remplace chaudière fioul/gaz ancienne. Gain : -40-50% coûts + valorisation DPE 3) CUISINE + SALLES DE BAIN (priorité #3, ROI vente) : cuisine équipée moderne 15 000-35 000€, SDB principale 12 000-25 000€, SDB secondaire 8 000-15 000€. Impact : +15-20% valorisation vente (acheteurs exigent équipements modernes) 4) ÉLECTRICITÉ remise normes (priorité #4, sécurité) : tableaux électriques, prises terre, disjoncteurs différentiels 80-120€/m² villa 150m² = 12 000-18 000€. Obligatoire vente + assurance 5) TOITURE + FAÇADES (priorité #5, entretien) : réfection toiture 80-150€/m², ravalement façades 40-80€/m². Évite dégradations + valorise 6) AMÉNAGEMENT JARDIN (priorité #6, différenciation) : terrasses bois/pierre 80-200€/m², éclairage extérieur 2 000-5 000€, arrosage automatique 1 500-3 000€, clôtures 50-150€/ml. Impact : +20-30% attractivité vente. Budget total villa 150m² rénovation complète années 1950 : 350 000-480 000€ (2 300-3 200€/m²). Valorisation +100 000-150 000€ post-travaux. Plan rénovation personnalisé gratuit : 06 65 01 58 82."
      }
    },
    {
      "@type": "Question",
      "name": "Y a-t-il contraintes ABF pour rénover maison Busca Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contraintes ABF Busca Toulouse 2025 (bonne nouvelle : quasi-nulles) : MAJORITÉ Busca HORS périmètre ABF = liberté totale rénovation. Vérification obligatoire votre adresse sur geoportail-urbanisme.gouv.fr (périmètre 500m Monuments Historiques = avis ABF). Rares exceptions Busca : quelques maisons proximité Jardin des Plantes ou Canal du Midi peuvent être périmètre ABF distant (avis simple consultatif, pas contraignant). AVANTAGES pas ABF Busca : 1) Matériaux libres : PVC/alu fenêtres autorisé (vs bois obligatoire centre) = -50% coûts menuiseries 2) Couleurs façades libres : pas validation palette couleurs (vs procédure ABF 1-2 mois centre) 3) Modification volumes autorisée : extension, surélévation, véranda selon PLU (vs refus fréquent ABF) 4) Délais courts : déclaration préalable 1 mois (vs 2-3 mois avec ABF) 5) Coûts -15-20% : matériaux standards + pas honoraires architecte patrimoine obligatoire. SEULES contraintes Busca : PLU Toulouse (Plan Local Urbanisme) règles constructibilité (hauteur max, emprise sol, aspects extérieurs harmonieux quartier). Exemple : extension 30m² villa Busca = déclaration préalable simple 1 mois délai (vs Capitole ABF = 2-3 mois + dossier complexe). EGB Occitanie : vérification contraintes PLU gratuite avant devis, accompagnement dossiers Mairie. Diagnostic réglementaire gratuit : 06 65 01 58 82."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Rénover villa Busca Toulouse",
  "step": [
    {
      "@type": "HowToStep",
      "text": "1. Vérifier absence contraintes ABF sur geoportail-urbanisme.gouv.fr (majorité Busca hors périmètre)"
    },
    {
      "@type": "HowToStep",
      "text": "2. Diagnostic technique global villa : état structure, toiture, humidité, électricité, plomberie, isolation"
    },
    {
      "@type": "HowToStep",
      "text": "3. Identifier éléments patrimoniaux à conserver si villa Art Déco 1920-1930 (bow-windows, ferronneries, mosaïques)"
    },
    {
      "@type": "HowToStep",
      "text": "4. Prioriser isolation thermique (combles + murs + fenêtres) avant changement chauffage pour maximiser efficacité"
    },
    {
      "@type": "HowToStep",
      "text": "5. Rénover cuisine et salles de bain avec équipements modernes pour valorisation vente/location"
    },
    {
      "@type": "HowToStep",
      "text": "6. Mettre électricité aux normes NF C15-100 (obligatoire vente, sécurité, assurance)"
    },
    {
      "@type": "HowToStep",
      "text": "7. Rénover toiture si nécessaire (tuiles cassées, charpente, isolation combles) pour éviter infiltrations"
    },
    {
      "@type": "HowToStep",
      "text": "8. Ravaler façades avec nettoyage + enduit + peinture pour valorisation esthétique (+10-15% attractivité)"
    },
    {
      "@type": "HowToStep",
      "text": "9. Aménager jardin paysager avec terrasses, éclairage, arrosage automatique (différenciation concurrence)"
    },
    {
      "@type": "HowToStep",
      "text": "10. Déposer déclaration préalable Mairie si modification aspect extérieur (fenêtres, façades, extension) - délai 1 mois"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EGB Occitanie Rénovation Busca",
  "image": "https://www.egb-occitanie.fr/images/renovation-busca-toulouse.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toulouse",
    "addressRegion": "Occitanie",
    "postalCode": "31000",
    "addressCountry": "FR"
  },
  "telephone": "+33665015882",
  "priceRange": "2400-3400€/m²",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "38"
  }
};

export default function RenovationBuscaToulouse() {
  return (
    <>
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
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-amber-600" />
              <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
                Quartier Busca - Villas Art Déco & Jardins
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
              Rénovation Villa
              <br />
              <span className="text-amber-800">Busca Toulouse</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
              Expert rénovation villas Busca depuis 15 ans. Maisons Art Déco 1920-1950, jardins privatifs 200-500m². 
              Pas ABF = liberté architecturale totale. Valorisation +40-60% sur 10 ans.
              <strong className="font-medium text-gray-900"> Devis gratuit sous 48h.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Visite villa gratuite
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href="tel:+33665015882"
                className="inline-flex items-center justify-center gap-3 border-2 border-amber-800 text-amber-900 px-8 py-4 text-base font-medium hover:bg-amber-50 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 65 01 58 82
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-amber-200">
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">1920-50</div>
                <div className="text-sm text-gray-600">Villas Art Déco période</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">200-500m²</div>
                <div className="text-sm text-gray-600">Jardins privatifs</div>
              </div>
              <div>
                <div className="text-3xl font-light text-amber-900 mb-2">0 ABF</div>
                <div className="text-sm text-gray-600">Liberté architecturale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Quartier */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              Busca : quartier résidentiel bourgeois recherché
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le quartier Busca, entre centre historique et Canal du Midi, est l'un des <strong>quartiers 
                résidentiels les plus prisés de Toulouse</strong>. Développé principalement dans les années 1920-1950, 
                il se caractérise par ses villas Art Déco, ses maisons bourgeoises avec jardins privatifs de 
                200-500m², et ses arbres centenaires qui confèrent un charme incomparable.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Avantage majeur : <strong>majorité du quartier Busca HORS périmètre ABF</strong>, contrairement au 
                centre historique (Carmes, Capitole, Saint-Cyprien). Cette liberté architecturale permet rénovations 
                modernes avec matériaux standards (PVC/alu autorisés), réduction coûts 15-20% vs centre protégé, 
                et délais administratifs courts (1 mois déclaration préalable vs 3-4 mois avec ABF).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>EGB Occitanie</strong> a rénové 25+ villas Busca depuis 2010 : maisons Art Déco avec 
                conservation éléments patrimoniaux (bow-windows, ferronneries, vitraux), pavillons 1950 modernisés, 
                extensions vérandas, aménagements jardins paysagers. Notre expertise : maximiser valorisation tout 
                en préservant caractère architectural période.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Pourquoi villa Busca = investissement premium ?</h3>
                <ul className="text-base text-amber-900 space-y-2">
                  <li><strong>Jardin privatif 200-500m² :</strong> Valorisation +100 000-200 000€ vs appartement, rareté absolue Toulouse intra-muros</li>
                  <li><strong>Calme résidentiel :</strong> Quartier bourgeois sans nuisances centre-ville, demande familles CSP+ illimitée</li>
                  <li><strong>Libertés rénovation :</strong> Pas ABF = extensions, vérandas, modifications façades possibles selon PLU</li>
                  <li><strong>Zéro charges copropriété :</strong> Autonomie totale vs 1 800-3 000€/an appartement</li>
                  <li><strong>Valorisation long terme :</strong> +40-60% sur 10 ans (vs +30-40% appartements)</li>
                  <li><strong>Proximités :</strong> Jardin des Plantes, Canal du Midi, centre-ville 10min vélo, écoles réputées</li>
                </ul>
              </div>

              <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
                Typologie architecture villas Busca
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 border-2 border-amber-200 rounded">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Villas Art Déco 1920-1930</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Surface 120-200m² habitables + jardin 250-400m²</li>
                    <li>• Bow-windows caractéristiques, balcons ferronneries</li>
                    <li>• Vitraux géométriques, mosaïques entrée</li>
                    <li>• Moulures plafond, cheminées marbre</li>
                    <li>• Parquet chêne massif à chevrons</li>
                    <li>• Carrelages ciment motifs années 1920</li>
                    <li>• Hauteur sous plafond 2,80-3,20m</li>
                  </ul>
                </div>

                <div className="bg-white p-6 border-2 border-amber-200 rounded">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Pavillons 1950-1970</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Surface 100-150m² + jardin 200-350m²</li>
                    <li>• Architecture fonctionnelle sobre</li>
                    <li>• Plain-pied ou RDC + combles aménageables</li>
                    <li>• Garage attenant ou indépendant</li>
                    <li>• Grandes baies vitrées salon/séjour</li>
                    <li>• Isolation faible (priorité rénovation)</li>
                    <li>• Potentiel extension/surélévation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prix Rénovation */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Prix rénovation villa Busca : 2 400 - 3 400€/m²
            </h2>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Prix rénovation villa Busca <strong>15-20% inférieur vs centre historique</strong> grâce absence 
                contraintes ABF. Matériaux standards autorisés (PVC/alu fenêtres vs bois obligatoire zone ABF), 
                pas honoraires architecte patrimoine obligatoires, délais courts réduisant coûts indirects.
              </p>

              <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
                <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire rénovation villa Busca 2025</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Rénovation légère rafraîchissement</h4>
                        <p className="text-sm text-gray-600">Peinture, sols, électricité partielle, cuisine/SDB standards</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">2 400€</div>
                        <div className="text-sm text-gray-600">/m²</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Peinture murs/plafonds complète</li>
                      <li>• Sols parquet flottant ou carrelage standard</li>
                      <li>• Électricité mise aux normes partielle</li>
                      <li>• Cuisine équipée entrée gamme 12-18k€</li>
                      <li>• SDB standard douche 8-12k€</li>
                      <li>• Jardin entretien courant (tonte, taille, désherbage)</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-6 rounded border-2 border-amber-600">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-amber-900">Rénovation complète valorisation</h4>
                        <p className="text-sm text-amber-800">Isolation, menuiseries, équipements modernes, jardin paysager</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-900">3 000€</div>
                        <div className="text-sm text-amber-800">/m²</div>
                      </div>
                    </div>
                    <ul className="text-sm text-amber-900 space-y-1.5">
                      <li>• Isolation combles + murs + fenêtres double vitrage</li>
                      <li>• Chauffage pompe à chaleur air-eau</li>
                      <li>• Cuisine équipée moderne 25-35k€</li>
                      <li>• SDB prestige douche italienne 15-25k€</li>
                      <li>• Parquet massif chêne ou sols premium</li>
                      <li>• Électricité complète aux normes + domotique</li>
                      <li>• Toiture réfection si nécessaire</li>
                      <li>• Ravalement façades 4 faces</li>
                      <li>• Jardin terrasses bois + éclairage + arrosage automatique</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Rénovation prestige Art Déco</h4>
                        <p className="text-sm text-gray-600">Restauration patrimoine, matériaux nobles, prestations luxe</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-amber-800">3 800€</div>
                        <div className="text-sm text-gray-600">/m²</div>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1.5">
                      <li>• Restauration bow-windows, ferronneries, vitraux</li>
                      <li>• Parquet massif point de Hongrie restauré</li>
                      <li>• Moulures, corniches restauration artisan Compagnon</li>
                      <li>• Cuisine luxe sur-mesure 40-60k€</li>
                      <li>• SDB marbre/pierre naturelle 25-35k€</li>
                      <li>• Menuiseries bois sur-mesure double vitrage</li>
                      <li>• Domotique complète invisible</li>
                      <li>• Jardin paysagiste designer + éclairage scénographique</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                <h4 className="font-semibold text-amber-900 mb-3">Exemple budget rénovation villa 150m² Busca:</h4>
                <div className="space-y-2 text-sm text-amber-900">
                  <div className="flex justify-between pb-2 border-b border-amber-200">
                    <span>Rénovation complète valorisation (3 000€/m² × 150m²)</span>
                    <strong>450 000€</strong>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-200">
                    <span>Maîtrise d'œuvre (8% coordination travaux)</span>
                    <strong>36 000€</strong>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-200">
                    <span>Études techniques (thermique, structure si nécessaire)</span>
                    <strong>3 500€</strong>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-200">
                    <span>Imprévus 10% (découvertes chantier)</span>
                    <strong>48 950€</strong>
                  </div>
                  <div className="h-[1px] bg-amber-300 my-3"></div>
                  <div className="flex justify-between text-base">
                    <strong>BUDGET TOTAL:</strong>
                    <strong className="text-lg">538 450€</strong>
                  </div>
                </div>
                <p className="text-xs text-amber-800 mt-4 mb-0">
                  Valorisation : Villa 150m² + jardin 300m² état moyen 550k€ → rénovée 750-850k€ = plus-value 
                  200-300k€ (investissement travaux largement amorti).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travaux à Prioriser */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Travaux prioritaires villa Busca (ROI optimal)
            </h2>

            <div className="space-y-8">
              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Isolation thermique (priorité absolue)</h3>
                    <p className="text-amber-800 font-medium">ROI: 6-8 ans | Économies: -1 200-1 800€/an</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Villas 1920-1950 Busca = isolation quasi inexistante (murs simples 20-30cm, simple vitrage, combles 
                    non isolés). <strong>Isolation = travaux #1 avant changement chauffage</strong> pour maximiser 
                    efficacité énergétique et réduire factures.
                  </p>

                  <div className="bg-gray-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Programme isolation complet villa 150m²:</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>Combles perdus :</strong> Soufflage laine roche 30-35cm = 30-50€/m² × 150m² = 4 500-7 500€ (30% déperditions)</li>
                      <li><strong>Murs par intérieur :</strong> Laine bois 10-12cm + placo = 60-90€/m² × 400m² murs = 24 000-36 000€ (25% déperditions)</li>
                      <li><strong>Fenêtres double vitrage :</strong> PVC 4/16/4 = 350-600€/unité × 15 fenêtres = 5 250-9 000€ (15% déperditions)</li>
                      <li><strong>Total isolation :</strong> 35 000-55 000€ → Économies -50-60% chauffage = -1 200-1 800€/an → ROI 6-8 ans</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Chauffage performant pompe à chaleur</h3>
                    <p className="text-amber-800 font-medium">ROI: 8-10 ans | Valorisation DPE: D→B (+15-20% valeur)</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Après isolation, remplacer chaudière fioul/gaz ancienne par <strong>pompe à chaleur air-eau 
                    (PAC)</strong>. COP 3-4 = 1 kWh électrique consommé produit 3-4 kWh chaleur. Coûts exploitation 
                    divisés par 2-3 vs chaudière ancienne.
                  </p>

                  <div className="bg-gray-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Installation PAC villa 150m²:</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>PAC air-eau 12-16 kW :</strong> 12 000-18 000€ pose comprise (groupe extérieur + ballon eau chaude + régulation)</li>
                      <li><strong>Radiateurs alu basse température :</strong> 3 000-5 000€ si remplacement nécessaire</li>
                      <li><strong>Aides MaPrimeRénov' :</strong> -3 000-5 000€ selon revenus (déduction directe)</li>
                      <li><strong>Coût net :</strong> 12 000-18 000€ → Économies -40-50% vs gaz/fioul = -800-1 200€/an</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Cuisine & salles de bain modernes</h3>
                    <p className="text-amber-800 font-medium">ROI vente: +15-20% valorisation | Critère décisif acheteurs</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Cuisine et SDB = pièces décisives pour vente/location. Acheteurs/locataires CSP+ exigent 
                    équipements modernes et fonctionnels. <strong>Investissement cuisine/SDB premium = retour 
                    quasi-intégral valorisation vente.</strong>
                  </p>

                  <div className="bg-gray-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Budget cuisine + SDB villa 150m²:</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>Cuisine équipée moderne :</strong> 25-35k€ (meubles sur-mesure, électroménager encastré haut de gamme, plan travail quartz, îlot central)</li>
                      <li><strong>SDB principale prestige :</strong> 15-25k€ (douche italienne, double vasque, meuble suspendu, carrelage grand format, robinetterie design)</li>
                      <li><strong>SDB secondaire :</strong> 8-12k€ (douche standard, simple vasque, carrelage moyen format)</li>
                      <li><strong>Total :</strong> 48-72k€ → Valorisation +30-50k€ vente immédiate</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-8 rounded">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Aménagement jardin paysager</h3>
                    <p className="text-amber-800 font-medium">Différenciation concurrence | +20-30% attractivité vente</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Jardin 200-500m² = atout majeur villa Busca mais souvent négligé. <strong>Jardin paysager 
                    professionnel multiplie attractivité vente/location</strong> et permet prix premium vs villas 
                    jardins mal entretenus.
                  </p>

                  <div className="bg-gray-50 p-5 rounded">
                    <h4 className="font-semibold text-gray-900 mb-3">Aménagement jardin 300m² budget moyen:</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>Terrasse bois exotique 40m² :</strong> 80-150€/m² = 3 200-6 000€</li>
                      <li><strong>Éclairage jardin LED :</strong> 2 000-4 000€ (spots arbres, allées, terrasse)</li>
                      <li><strong>Arrosage automatique enterré :</strong> 1 500-3 000€</li>
                      <li><strong>Végétal (arbustes, massifs, gazon) :</strong> 3 000-5 000€</li>
                      <li><strong>Clôture/portail :</strong> 50-150€/ml × 60ml = 3 000-9 000€</li>
                      <li><strong>Total jardin :</strong> 12 700-27 000€ → Impact vente/location considérable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Questions fréquentes rénovation villa Busca
            </h2>

            <div className="space-y-6">
              <details className="bg-white border-2 border-amber-200 rounded p-6">
                <summary className="font-semibold text-xl text-gray-900 cursor-pointer">
                  Puis-je faire extension véranda villa Busca sans permis ?
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                  <p><strong>Réglementation extension/véranda villa Busca Toulouse 2025 :</strong></p>
                  <p><strong>Déclaration préalable (1 mois délai) :</strong> Extension 5-20m² emprise sol OU 5-40m² 
                  surface plancher, véranda &lt;20m² emprise, modification aspect extérieur (fenêtres, façades, toiture).</p>
                  <p><strong>Permis construire (2 mois délai) :</strong> Extension &gt;20m² emprise sol, extension 
                  portant surface totale &gt;150m² (architecte obligatoire), modification volume bâtiment (surélévation, 
                  création niveau).</p>
                  <p><strong>Aucune autorisation :</strong> Extension &lt;5m² emprise (abri jardin, pergola non-close), 
                  travaux intérieurs sans modification structure/façades.</p>
                  <p>Majorité quartier Busca HORS ABF = pas avis ABF (vs centre +1 mois délai). Véranda 20m² = 
                  déclaration préalable simple 1 mois. Coûts : 1 500-2 500€/m² selon matériaux.</p>
                </div>
              </details>

              <details className="bg-white border-2 border-amber-200 rounded p-6">
                <summary className="font-semibold text-xl text-gray-900 cursor-pointer">
                  Comment préserver caractère Art Déco lors rénovation villa 1920-1930 ?
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                  <p><strong>Rénovation villa Art Déco Busca (préservation caractère années 1920-1930) :</strong></p>
                  <p><strong>1) CONSERVER éléments patrimoniaux :</strong> Bow-windows, ferronneries balcons, vitraux 
                  géométriques, mosaïques entrée, cheminées marbre, moulures plafond, carrelages ciment motifs.</p>
                  <p><strong>2) RESTAURER plutôt que remplacer :</strong> Parquet chêne massif (ponçage + vitrification 
                  40-60€/m²), carrelages anciens (nettoyage + joints 30-50€/m²), menuiseries bois (décapage + peinture 
                  vs remplacement PVC).</p>
                  <p><strong>3) HARMONISER ajouts modernes :</strong> Cuisine contemporaine sobre s'intégrant volumes, 
                  salle de bain moderne avec clins d'œil Art Déco (robinetterie laiton, carrelage métro, miroirs ronds), 
                  VMC/chauffage discrets.</p>
                  <p>Budget villa 120m² rénovation Art Déco respectueuse : 300 000-420 000€ (2 500-3 500€/m²).</p>
                </div>
              </details>

              <details className="bg-white border-2 border-amber-200 rounded p-6">
                <summary className="font-semibold text-xl text-gray-900 cursor-pointer">
                  Vaut-il mieux acheter villa à rénover ou villa rénovée Busca ?
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed space-y-3">
                  <p><strong>Comparaison achat villa à rénover vs rénovée Busca Toulouse :</strong></p>
                  <p><strong>Option A : Villa à rénover</strong> - Achat 150m² état moyen : 550 000€ (3 667€/m²) + 
                  Rénovation complète : 450 000€ (3 000€/m²) + Frais notaire : 44 000€ = <strong>TOTAL : 1 044 000€</strong></p>
                  <p><strong>Option B : Villa rénovée clé en main</strong> - Achat 150m² rénovée 2023-2024 : 850 000€ 
                  (5 667€/m²) + Frais notaire : 68 000€ = <strong>TOTAL : 918 000€</strong></p>
                  <p><strong>AVANTAGES achat rénovée :</strong> Coût total -12% (126k€ économie), habitable immédiat, 
                  zéro stress chantier, garanties décennales valides 10 ans.</p>
                  <p><strong>AVANTAGES achat à rénover :</strong> Personnalisation totale, choix matériaux/artisans, 
                  étalement investissement 12-18 mois, valorisation post-travaux +15-20% vs rénovée récente (effet neuf).</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
