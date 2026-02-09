import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ Construction & Rénovation Toulouse - Questions Fréquentes Expert",
  description: "Réponses expertes à vos questions construction villa, rénovation maison, extension Toulouse. Prix, délais, permis, financement, quartiers. Tout ce qu'il faut savoir.",
  keywords: ["faq construction toulouse", "questions construction maison", "prix construction toulouse", "délai construction", "permis construire toulouse"],
  alternates: {
    canonical: "https://egb-occitanie.fr/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix moyen construction maison Toulouse en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix moyen construction maison Toulouse 2025 : 2 800-3 800€/m² selon finition et quartier. Budget total villa 150m² : 650-750k€ (terrain + construction + viabilisation). Détail prix : terrain 350-600€/m² (selon quartier : Blagnac 380€, Castanet 520€, Côte Pavée 650€), construction 2 500-3 400€/m² (standard à premium), viabilisation 12-18k€, honoraires architecte 8-12% si obligatoire, assurances 2-3%. Finitions premium (+500-800€/m²) : domotique KNX, menuiseries bois massif, cuisine haut de gamme."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour construire une maison à Toulouse (terrain à clés) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durée totale projet construction Toulouse terrain → clés : 12-16 mois. Détail timeline : Recherche terrain + avant-projet (6-10 semaines), Permis construire (2.5-4 mois instruction selon commune : Toulouse ville 4 mois, Castanet 2.5 mois, Blagnac 3 mois), Gros œuvre (3-5 mois : fondations, maçonnerie, charpente, toiture), Second œuvre + finitions (3-4 mois : électricité, plomberie, isolation, revêtements). 92% de nos chantiers livrés dans délai contractuel ±2 semaines. Pénalités retard contractuelles 1/3000e valeur/jour."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les meilleurs quartiers pour construire à Toulouse en 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TOP quartiers construction Toulouse 2025 par profil : Airbus : Blagnac #1 (40% salariés Airbus, 50 permis/an, aéroport 5min), Castanet (35% Airbus, fiscalité -16% vs Toulouse), Colomiers (25% Airbus, biggest market 45 permis/an). Familles : Balma (2.8 enfants/foyer, écoles 8.2/10, PLU souple), Cugnaux (métro 2028, prix compétitif 340€/m²). Premium : Côte Pavée (CSP++ 68%, terrains rares 650€/m²), Saint-Orens (CSP++ 62%, golf, écoles 8.9/10). Investissement : Ramonville (métro 2027 = +25% valorisation anticipée, young professionals 62%)."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un architecte obligatoirement pour construire à Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Architecte obligatoire Toulouse : OUI si surface plancher >150m² (loi depuis 2017). Honoraires architecte DPLG : 8-12% coût construction HT (villa 500k€ = 40-60k€ honoraires). Services inclus : conception plans conformes PLU local, dépôt permis construire, suivi chantier, réception travaux. Avantages architecte même <150m² : optimisation projet (gains 5-10% budget via conception intelligente), expertise PLU strict (ex: Castanet brique rose obligatoire), valorisation revente (+8-12% vs constructeur catalogue). Alternative <150m² : dessinateur-projeteur (2-4% coût vs 8-12% architecte) mais sans visa DPLG ni assurance décennale conception."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les aides financières construction maison 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aides construction neuve 2025 : PTZ (Prêt Taux Zéro) : jusqu'à 40% prix achat (max 96 000€ zone A, Toulouse éligible), conditions primo-accédant + ressources plafonnées, remboursement différé 5-15 ans. Prêt Action Logement (ex-1% patronal) : max 40 000€ taux 0.5%, réservé salariés entreprise privée >10 salariés. TVA réduite 5.5% (vs 20%) : applicable terrains situés zones ANRU uniquement (non généralisé Toulouse). Exonération taxe foncière 2 ans : automatique construction neuve RT 2020. Crédit impôt borne recharge électrique : 75% coût (max 300€) si installation lors construction. MaPrimeRénov' : NON applicable construction neuve (rénovation uniquement)."
      }
    },
    {
      "@type": "Question",
      "name": "Quel budget prévoir pour extension maison Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix extension maison Toulouse 2025 : 2 200-3 600€/m² selon type et finition. Extension horizontale (plain-pied) : 2 200-2 800€/m² (fondations neuves, toiture simple). Surélévation étage : 2 800-3 600€/m² (renforcement structure existante, raccordements complexes). Véranda/pergola : 800-1 800€/m² (structure légère, vitrage). Budget extension 30m² type : Extension cuisine 30m² plain-pied finition standard = 66-84k€ TTC, Surélévation chambre+SDB 30m² = 84-108k€ TTC. Inclus : gros œuvre, second œuvre, raccordements réseaux, finitions. Exclus : permis construire (1 500-3 000€), architecte si >150m² total (8-12%), imprévus 10%."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte rénovation complète maison toulousaine ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prix rénovation complète maison toulousaine : 1 200-2 500€/m² selon état initial et niveau finition. Rénovation légère (bon état général) : 1 200-1 600€/m² (peintures, sols, cuisine/SDB, électricité partielle). Rénovation moyenne (état moyen, 20-30 ans) : 1 600-2 000€/m² (refonte électricité/plomberie, isolation, menuiseries, cuisine/SDB haut de gamme). Rénovation lourde (mauvais état, >40 ans) : 2 000-2 500€/m² (structure, toiture, isolation complète, réseaux neufs, conformité totale). Maison 150m² rénovation moyenne = 240-300k€ TTC. Spécificités maison toulousaine : brique rose rénovation 80-120€/m² façade, tomettes anciennes conservation 60-90€/m², poutres apparentes sablage/traitement 40-60€/ml."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les contraintes PLU construction Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contraintes PLU Toulouse 2025 par zone : Centre-ville/zones ABF : Architecture traditionnelle obligatoire (brique rose 40% façades, tuiles canal, hauteur R+2 max, pas toits plats). Permis 12% refus zones ABF si non-conformité esthétique. Périphérie zones UC/UD : PLU plus souple (toits plats autorisés zones récentes, architecture contemporaine OK si qualité architecturale). Emprise sol max 40-50% terrain, recul rue 5m, recul limites latérales H/2 (ex: maison 7m haut = 3.5m recul). Stationnement : 2 places minimum/logement. Hauteur max : R+1 périphérie (sauf dérogation zones spécifiques). Espaces verts : 30% surface terrain minimum (Toulouse ville). Variation forte selon communes : Castanet strict (brique rose + tuiles canal obligatoires), Balma/Colomiers souples (toits plats OK)."
      }
    },
    {
      "@type": "Question",
      "name": "Comment financer construction maison sans apport Toulouse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Financement construction 0 apport possible mais difficile 2025 (taux 3.6-4.2%) : PTZ (Prêt Taux Zéro) : couvre jusqu'à 40% achat (96k€ max zone A Toulouse) si primo-accédant ressources plafonnées. Complété par prêt principal 60%. Prêt 110% (terrain + construction + frais) : proposé certaines banques si profil excellent (CDI ancienneté >3 ans, revenus stables >4 000€/mois, taux endettement <30%, apport indirect via épargne). Taux majoré +0.3-0.5% vs prêt avec apport 20%. Courtier recommandé : négocie meilleures conditions (économie 0.1-0.2% taux = 15-30k€ sur 300k€/20 ans). Alternative apport faible : vente bien existant avant achat (différé acquisition), donation familiale, déblocage PEE/épargne salariale (si ancienneté), prêt familial formalisé notaire (reconnaissance dette)."
      }
    },
    {
      "@type": "Question",
      "name": "Rénovation énergétique : quelles aides MaPrimeRénov' Toulouse 2025 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MaPrimeRénov' 2025 Toulouse (réforme janvier 2025) : MaPrimeRénov' Parcours Accompagné (rénovation globale >2 classes DPE) : 30-90% coût travaux selon revenus (max 63k€ très modestes, 49k€ modestes, 35k€ intermédiaires, 21k€ supérieurs). Obligatoire : AMO (Assistance Maîtrise d'Ouvrage) Mon Accompagnateur Rénov' 2 000€ financé MaPrimeRénov'. Exemple DPE F→C maison 150m² : Travaux 85k€ (isolation 35k, PAC 18k, menuiseries 22k, VMC 10k), Aide revenus modestes 42.5k€ (50%), Reste charge 42.5k€. MaPrimeRénov' Décarbonation (geste par geste, <2 classes DPE) : PAC air/eau 4-11k€, Isolation combles 15-50€/m², Menuiseries 80-100€/fenêtre. CEE (Certificats Économies Énergie) : cumulable MaPrimeRénov', 2-8k€ selon travaux. Éco-PTZ : prêt 0% max 50k€ rénovation globale."
      }
    }
  ]
};

const faqs = [
  {
    question: "Quel est le prix moyen construction maison Toulouse en 2025 ?",
    answer: `**Prix moyen construction maison Toulouse 2025 : 2 800-3 800€/m²** selon finition et quartier.

**Budget total villa 150m² : 650-750k€** (terrain + construction + viabilisation + honoraires).

**Détail prix par poste :**
- **Terrain :** 350-600€/m² selon quartier (Blagnac 380€, Castanet 520€, Côte Pavée 650€)
- **Construction :** 2 500-3 400€/m² (standard à premium)
- **Viabilisation :** 12-18k€ (eau, électricité, assainissement)
- **Honoraires architecte :** 8-12% si >150m² (obligatoire)
- **Assurances :** 2-3% (dommage-ouvrage)

**Finitions premium** (+500-800€/m²) : domotique KNX, menuiseries bois massif, cuisine haut de gamme.`,
    category: "Prix & Budget"
  },
  {
    question: "Combien de temps pour construire une maison à Toulouse (terrain à clés) ?",
    answer: `**Durée totale projet construction Toulouse terrain → clés : 12-16 mois**

**Timeline détaillée :**

1. **Recherche terrain + avant-projet** : 6-10 semaines
   - Monitoring quotidien terrains
   - Validation PLU + esquisse architecte

2. **Permis construire** : 2.5-4 mois instruction selon commune
   - Toulouse ville : 4 mois
   - Castanet : 2.5 mois
   - Blagnac : 3 mois

3. **Gros œuvre** : 3-5 mois
   - Fondations, maçonnerie, charpente, toiture

4. **Second œuvre + finitions** : 3-4 mois
   - Électricité, plomberie, isolation, revêtements

**92% de nos chantiers livrés dans délai contractuel ±2 semaines.** Pénalités retard contractuelles 1/3000e valeur/jour.`,
    category: "Délais & Planning"
  },
  {
    question: "Quels sont les meilleurs quartiers pour construire à Toulouse en 2025 ?",
    answer: `**TOP quartiers construction Toulouse 2025 par profil :**

**🛩️ Profil Airbus :**
- **Blagnac** : #1 ville Airbus (40% salariés, 50 permis/an, aéroport 5min)
- **Castanet** : 35% Airbus, fiscalité -16% vs Toulouse
- **Colomiers** : 25% Airbus, biggest market 45 permis/an

**👨‍👩‍👧‍👦 Familles :**
- **Balma** : 2.8 enfants/foyer, écoles 8.2/10, PLU souple
- **Cugnaux** : Métro 2028, prix compétitif 340€/m²

**💎 Premium :**
- **Côte Pavée** : CSP++ 68%, terrains rares 650€/m²
- **Saint-Orens** : CSP++ 62%, golf, écoles 8.9/10

**📈 Investissement :**
- **Ramonville** : Métro 2027 = +25% valorisation anticipée, young professionals 62%`,
    category: "Quartiers & Localisation"
  },
  {
    question: "Faut-il un architecte obligatoirement pour construire à Toulouse ?",
    answer: `**Architecte obligatoire Toulouse : OUI si surface plancher >150m²** (loi depuis 2017).

**Honoraires architecte DPLG : 8-12% coût construction HT**
- Exemple : villa 500k€ = 40-60k€ honoraires

**Services inclus :**
- Conception plans conformes PLU local
- Dépôt permis construire
- Suivi chantier
- Réception travaux

**Avantages architecte même <150m² :**
- Optimisation projet (gains 5-10% budget via conception intelligente)
- Expertise PLU strict (ex: Castanet brique rose obligatoire)
- Valorisation revente (+8-12% vs constructeur catalogue)

**Alternative <150m² :** Dessinateur-projeteur (2-4% coût vs 8-12% architecte) mais sans visa DPLG ni assurance décennale conception.`,
    category: "Réglementation & Permis"
  },
  {
    question: "Quelles sont les aides financières construction maison 2025 ?",
    answer: `**Aides construction neuve 2025 :**

**1. PTZ (Prêt Taux Zéro) :**
- Jusqu'à 40% prix achat (max 96 000€ zone A, Toulouse éligible)
- Conditions : primo-accédant + ressources plafonnées
- Remboursement différé 5-15 ans

**2. Prêt Action Logement (ex-1% patronal) :**
- Max 40 000€ taux 0.5%
- Réservé salariés entreprise privée >10 salariés

**3. TVA réduite 5.5% (vs 20%) :**
- Applicable terrains zones ANRU uniquement (non généralisé Toulouse)

**4. Exonération taxe foncière 2 ans :**
- Automatique construction neuve RT 2020

**5. Crédit impôt borne recharge électrique :**
- 75% coût (max 300€) si installation lors construction

**❌ MaPrimeRénov' :** NON applicable construction neuve (rénovation uniquement)`,
    category: "Aides & Financement"
  },
  {
    question: "Quel budget prévoir pour extension maison Toulouse ?",
    answer: `**Prix extension maison Toulouse 2025 : 2 200-3 600€/m²** selon type et finition.

**Par type d'extension :**

**Extension horizontale (plain-pied) :** 2 200-2 800€/m²
- Fondations neuves, toiture simple

**Surélévation étage :** 2 800-3 600€/m²
- Renforcement structure existante, raccordements complexes

**Véranda/pergola :** 800-1 800€/m²
- Structure légère, vitrage

**Budget extension 30m² type :**
- Extension cuisine 30m² plain-pied finition standard = **66-84k€ TTC**
- Surélévation chambre+SDB 30m² = **84-108k€ TTC**

**Inclus :** gros œuvre, second œuvre, raccordements réseaux, finitions
**Exclus :** permis construire (1 500-3 000€), architecte si >150m² total (8-12%), imprévus 10%`,
    category: "Extension & Agrandissement"
  },
  {
    question: "Combien coûte rénovation complète maison toulousaine ?",
    answer: `**Prix rénovation complète maison toulousaine : 1 200-2 500€/m²** selon état initial et niveau finition.

**Rénovation légère (bon état général) :** 1 200-1 600€/m²
- Peintures, sols, cuisine/SDB, électricité partielle

**Rénovation moyenne (état moyen, 20-30 ans) :** 1 600-2 000€/m²
- Refonte électricité/plomberie, isolation, menuiseries, cuisine/SDB haut de gamme

**Rénovation lourde (mauvais état, >40 ans) :** 2 000-2 500€/m²
- Structure, toiture, isolation complète, réseaux neufs, conformité totale

**Exemple : Maison 150m² rénovation moyenne = 240-300k€ TTC**

**Spécificités maison toulousaine :**
- Brique rose rénovation : 80-120€/m² façade
- Tomettes anciennes conservation : 60-90€/m²
- Poutres apparentes sablage/traitement : 40-60€/ml`,
    category: "Rénovation"
  },
  {
    question: "Quelles sont les contraintes PLU construction Toulouse ?",
    answer: `**Contraintes PLU Toulouse 2025 par zone :**

**Centre-ville / zones ABF :**
- Architecture traditionnelle obligatoire (brique rose 40% façades, tuiles canal)
- Hauteur R+2 max, pas toits plats
- **12% permis refusés zones ABF** si non-conformité esthétique

**Périphérie zones UC/UD :**
- PLU plus souple (toits plats autorisés zones récentes, architecture contemporaine OK)

**Règles générales :**
- Emprise sol max 40-50% terrain
- Recul rue 5m
- Recul limites latérales H/2 (ex: maison 7m haut = 3.5m recul)
- Stationnement : 2 places minimum/logement
- Espaces verts : 30% surface terrain minimum (Toulouse ville)

**Variation forte selon communes :**
- **Castanet** : strict (brique rose + tuiles canal obligatoires)
- **Balma/Colomiers** : souples (toits plats OK)`,
    category: "PLU & Réglementation"
  },
  {
    question: "Comment financer construction maison sans apport Toulouse ?",
    answer: `**Financement construction 0 apport possible mais difficile 2025** (taux 3.6-4.2%) :

**1. PTZ (Prêt Taux Zéro) :**
- Couvre jusqu'à 40% achat (96k€ max zone A Toulouse)
- Si primo-accédant ressources plafonnées
- Complété par prêt principal 60%

**2. Prêt 110% (terrain + construction + frais) :**
- Proposé certaines banques si profil excellent :
  - CDI ancienneté >3 ans
  - Revenus stables >4 000€/mois
  - Taux endettement <30%
  - Apport indirect via épargne
- **Taux majoré +0.3-0.5%** vs prêt avec apport 20%

**3. Courtier recommandé :**
- Négocie meilleures conditions
- **Économie 0.1-0.2% taux = 15-30k€** sur 300k€/20 ans

**Alternatives apport faible :**
- Vente bien existant avant achat (différé acquisition)
- Donation familiale
- Déblocage PEE/épargne salariale
- Prêt familial formalisé notaire`,
    category: "Financement"
  },
  {
    question: "Rénovation énergétique : quelles aides MaPrimeRénov' Toulouse 2025 ?",
    answer: `**MaPrimeRénov' 2025 Toulouse (réforme janvier 2025) :**

**MaPrimeRénov' Parcours Accompagné (rénovation globale >2 classes DPE) :**
- **30-90% coût travaux** selon revenus
  - Très modestes : max 63k€
  - Modestes : max 49k€
  - Intermédiaires : max 35k€
  - Supérieurs : max 21k€
- **Obligatoire :** AMO Mon Accompagnateur Rénov' (2 000€ financé)

**Exemple DPE F→C maison 150m² :**
- Travaux 85k€ (isolation 35k, PAC 18k, menuiseries 22k, VMC 10k)
- Aide revenus modestes : **42.5k€ (50%)**
- Reste à charge : 42.5k€

**MaPrimeRénov' Décarbonation (geste par geste, <2 classes DPE) :**
- PAC air/eau : 4-11k€
- Isolation combles : 15-50€/m²
- Menuiseries : 80-100€/fenêtre

**CEE (Certificats Économies Énergie) :** Cumulable, 2-8k€

**Éco-PTZ :** Prêt 0% max 50k€ rénovation globale`,
    category: "Rénovation Énergétique"
  }
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-stone-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/40 rounded-full mb-6">
              <span className="text-amber-400 font-medium text-sm">❓ FAQ EXPERT CONSTRUCTION & RÉNOVATION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Questions Fréquentes<br />
              <span className="text-amber-500">Construction & Rénovation Toulouse</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 max-w-3xl">
              Réponses expertes à toutes vos questions sur la construction villa, rénovation maison, extension, prix, délais, permis, financement, quartiers Toulouse.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="py-4 bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-sm text-stone-600">
              <Link href="/" className="hover:text-amber-600">Accueil</Link>
              <span className="mx-2">›</span>
              <span className="text-stone-900 font-medium">FAQ</span>
            </div>
          </div>
        </section>

        {/* Navigation catégories */}
        <section className="py-8 bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl font-bold text-stone-900 mb-4">Navigation rapide</h2>
            <div className="flex flex-wrap gap-3">
              {["Prix & Budget", "Délais & Planning", "Quartiers & Localisation", "Réglementation & Permis", "Aides & Financement", "Extension & Agrandissement", "Rénovation", "PLU & Réglementation", "Financement", "Rénovation Énergétique"].map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'et')}`}
                  className="px-4 py-2 bg-amber-50 hover:bg-amber-100 border border-amber-600 text-amber-900 rounded-lg text-sm font-medium transition-colors"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  id={faq.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'et')}
                  className="bg-stone-50 border-2 border-stone-200 rounded-lg p-6 group open:border-amber-600 open:bg-white"
                >
                  <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="text-2xl text-amber-600 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="mt-4 text-stone-700 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-medium rounded-full">
                      {faq.category}
                    </span>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Votre Question N'Est Pas Listée ?</h2>
            <p className="text-xl text-stone-300 mb-8">
              Nos experts répondent à toutes vos questions construction & rénovation sous 3h ouvrées
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-block px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg rounded-lg transition-colors shadow-xl">
                Poser Votre Question
              </a>
              <a href="tel:+33665015882" className="inline-block px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-lg transition-colors">
                06 65 01 58 82
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-8 bg-white border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="font-bold text-stone-900 mb-4">Nos Services Construction & Rénovation Toulouse</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/construction-villa-toulouse" className="text-amber-700 hover:underline">→ Construction Villa Toulouse</Link>
              <Link href="/renovation-maison-toulouse" className="text-amber-700 hover:underline">→ Rénovation Maison Toulouse</Link>
              <Link href="/extension-maison-toulouse" className="text-amber-700 hover:underline">→ Extension Maison Toulouse</Link>
              <Link href="/renovation-energetique-toulouse" className="text-amber-700 hover:underline">→ Rénovation Énergétique Toulouse</Link>
              <Link href="/construction-villa-blagnac" className="text-amber-700 hover:underline">→ Construction Villa Blagnac</Link>
              <Link href="/construction-villa-castanet-tolosan" className="text-amber-700 hover:underline">→ Construction Villa Castanet</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
