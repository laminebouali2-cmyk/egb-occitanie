import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Division d\'Immeuble Toulouse | Création Copropriété - EGB Occitanie',
  description:
    'Division d\'immeuble et création de copropriété à Toulouse. Mise en lots, tantièmes, règlement copropriété, travaux de conformité. Expert maître d\'œuvre.',
  openGraph: {
    title: 'Division d\'Immeuble Toulouse | EGB Occitanie',
    description:
      'Divisez votre immeuble en copropriété avec EGB Occitanie. Accompagnement complet de A à Z à Toulouse et Occitanie.',
    url: 'https://egb-occitanie.fr/services/division-immeuble',
  },
};

const reasons = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Optimiser la rentabilité locative',
    description: '3 studios louent mieux qu\'une grande maison. Multiplication des loyers, vacance locative divisée par 3.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Faciliter la revente lot par lot',
    description: 'Vendre un immeuble entier est difficile. Vendre lot par lot est plus rapide et valorise mieux le patrimoine.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Transmettre le patrimoine',
    description: 'Donation ou succession : diviser permet de répartir équitablement entre plusieurs héritiers.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Séparer usage professionnel et personnel',
    description: 'Un lot pour habiter, un lot pour louer, un lot pour votre activité professionnelle. Total flexibilité.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Étude de faisabilité',
    description: 'Visite complète de l\'immeuble. Analyse technique (structure, réseaux, accès indépendants possibles), juridique (PLU, ABF si secteur protégé), et financière (coût division vs gain attendu). Nous vous disons si c\'est viable.',
    duration: '2-3 semaines',
  },
  {
    number: '02',
    title: 'Conception de la division',
    description: 'Création des lots (T1, T2, T3, etc.), plans avec architecte, calcul des tantièmes (quote-part de chaque lot), identification des parties communes et privatives. Optimisation pour maximiser la valeur.',
    duration: '4-6 semaines',
  },
  {
    number: '03',
    title: 'Travaux de mise en conformité',
    description: 'Création accès indépendants si nécessaire, séparation réseaux (eau, électricité, gaz), mise aux normes (électricité, gaz, diagnostics), isolation phonique entre lots. Tout pour être conforme.',
    duration: '2-6 mois selon ampleur',
  },
  {
    number: '04',
    title: 'Création de la copropriété',
    description: 'Rédaction règlement de copropriété avec notaire, état descriptif de division, calcul charges, constitution documents juridiques. Dépôt au rang des hypothèques.',
    duration: '2-3 mois',
  },
  {
    number: '05',
    title: 'Finalisation & commercialisation',
    description: 'Immatriculation des lots, obtention numéros cadastraux, mise en vente ou location possible. Vous êtes propriétaire de lots séparés, libres de les gérer indépendamment.',
    duration: '1-2 mois',
  },
];

const servicesCovered = [
  {
    title: 'Étude technique & architecturale',
    items: [
      'Relevé complet du bâti existant',
      'Plans de division par architecte',
      'Étude structure (porteurs, planchers)',
      'Diagnostic accessibilité PMR si nécessaire',
    ],
  },
  {
    title: 'Étude juridique & administrative',
    items: [
      'Analyse PLU et règles d\'urbanisme',
      'Vérification contraintes ABF si applicable',
      'Autorisation travaux (DP ou PC)',
      'Rédaction règlement copropriété avec notaire',
    ],
  },
  {
    title: 'Travaux de division',
    items: [
      'Création entrées indépendantes',
      'Séparation réseaux (eau, élec, gaz)',
      'Isolation phonique entre lots',
      'Mise aux normes électricité/gaz/incendie',
    ],
  },
  {
    title: 'Gestion administrative',
    items: [
      'Calcul tantièmes de copropriété',
      'État descriptif de division',
      'Dépôt documents au rang des hypothèques',
      'Immatriculation cadastrale des lots',
    ],
  },
];

const faqs = [
  {
    question: 'Qu\'est-ce que la division d\'immeuble en copropriété ?',
    answer: 'C\'est transformer un immeuble appartenant à un seul propriétaire en plusieurs lots distincts (appartements, locaux commerciaux), chacun avec son propre propriétaire possible. Chaque lot a sa propre référence cadastrale et peut être vendu/loué indépendamment.',
  },
  {
    question: 'Combien coûte une division d\'immeuble ?',
    answer: 'Cela dépend du nombre de lots et de l\'ampleur des travaux. Division simple 2-3 lots sans gros travaux : 30 000€ - 60 000€. Division complexe 5+ lots avec travaux importants : 80 000€ - 150 000€+. L\'investissement est rapidement rentabilisé par la valorisation et l\'optimisation des loyers.',
  },
  {
    question: 'Combien de temps dure une division ?',
    answer: 'Projet simple : 6-9 mois (études, travaux légers, documents juridiques). Projet complexe : 12-18 mois (travaux lourds, autorisations multiples). La durée dépend de l\'ampleur des travaux et des contraintes administratives (ABF, PLU).',
  },
  {
    question: 'Peut-on diviser n\'importe quel immeuble ?',
    answer: 'Pas toujours. Contraintes techniques (structure, accès indépendants possibles), juridiques (PLU, superficie minimale des lots, ABF si patrimoine), et financières (coût division vs gain). Nous faisons l\'étude de faisabilité en amont pour vous dire si c\'est viable.',
  },
  {
    question: 'Que sont les tantièmes de copropriété ?',
    answer: 'C\'est la quote-part de chaque lot dans la copropriété, exprimée en millièmes. Sert à répartir les charges et le pouvoir de vote en assemblée générale. Calcul basé sur surface, étage, orientation, état. Exemple : lot 45m² = 120 tantièmes, lot 80m² = 220 tantièmes.',
  },
  {
    question: 'Faut-il forcément créer des accès indépendants ?',
    answer: 'Oui pour une copropriété classique. Chaque lot doit avoir son entrée depuis les parties communes (cage d\'escalier) ou depuis l\'extérieur. Si impossible techniquement, servitude de passage possible mais moins valorisant. Nous étudions la solution optimale.',
  },
  {
    question: 'Peut-on diviser un immeuble déjà loué ?',
    answer: 'Oui mais complexe. Si locataires en place avec baux en cours : travaux possibles en respectant jouissance paisible (notification préalable, travaux hors logements loués). À l\'issue de la division, chaque locataire reste dans son lot avec son bail. Opportunité : proposer vente aux locataires.',
  },
  {
    question: 'La division augmente-t-elle vraiment la valeur ?',
    answer: 'Oui significativement. Exemple Toulouse : immeuble 300m² entier vaut 600 000€ (2 000€/m²). Divisé en 5 lots : valeur totale 750 000€ - 900 000€ (2 500-3 000€/m² car lots séparés valent plus). Plus-value immédiate : +25% à +50%. Rentabilité locative aussi améliorée.',
  },
];

export default function DivisionImmeublePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        overline="Division d\'immeuble"
        title="Valorisez votre patrimoine"
        subtitle="par la division"
        description="Vous possédez un immeuble que vous souhaitez diviser en plusieurs lots ?<br />Nous gérons la mise en copropriété de A à Z : technique, juridique, travaux."
        backgroundImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"
        primaryCTA={{
          text: 'Étude de faisabilité gratuite',
          href: '#contact',
        }}
        secondaryCTA={{
          text: 'Nous appeler',
          href: 'tel:+33665015882',
        }}
      />

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Pourquoi diviser votre immeuble en copropriété ?</h2>
            <p className="text-xl text-stone-700 leading-relaxed mb-6">
              Vous possédez un immeuble de rapport, une grande maison, un local commercial avec étages ? La division
              en copropriété permet de créer plusieurs lots distincts, chacun avec son propre propriétaire potentiel.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Résultat : optimisation de la rentabilité locative, facilité de revente lot par lot, transmission
              patrimoniale simplifiée, valorisation immédiate du bien (+25% à +50% en moyenne).
            </p>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">4 bonnes raisons de diviser</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Rentabilité, transmission, flexibilité : la division d'immeuble répond à de nombreux objectifs patrimoniaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 border border-stone-200">
                <div className="text-stone-900 mb-4">{reason.icon}</div>
                <h3 className="text-xl font-medium mb-3">{reason.title}</h3>
                <p className="text-stone-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Notre processus de division</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              5 étapes pour transformer votre immeuble en copropriété conforme et valorisée.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-24 flex-shrink-0">
                  <div className="text-6xl font-light text-stone-300">{step.number}</div>
                </div>
                <div className="flex-1 border-t-2 border-stone-900 pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-medium">{step.title}</h3>
                    <span className="text-sm text-stone-500 mt-2 md:mt-0">⏱️ {step.duration}</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Covered */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Notre accompagnement complet</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Technique, juridique, travaux, administratif : nous gérons tous les aspects de la division.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicesCovered.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-stone-200">
                <h3 className="text-xl font-medium mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemple valorisation */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="!text-white mb-12 text-center">Exemple de valorisation</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-medium mb-4">Avant division</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/60 text-sm">Immeuble entier</p>
                    <p className="text-3xl font-light">300m²</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Valeur estimée</p>
                    <p className="text-3xl font-light">600 000€</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Prix au m²</p>
                    <p className="text-xl">2 000€/m²</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-medium mb-4">Après division</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/60 text-sm">5 lots créés</p>
                    <p className="text-3xl font-light">300m² total</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Valeur totale</p>
                    <p className="text-3xl font-light">825 000€</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Prix moyen m²</p>
                    <p className="text-xl">2 750€/m²</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-green-500/20 border border-green-500/50 px-8 py-4 mb-6">
                <p className="text-white/80 text-sm mb-1">Plus-value immédiate</p>
                <p className="text-4xl font-light">+ 225 000€</p>
                <p className="text-white/60 text-sm mt-1">(+37,5%)</p>
              </div>
              <p className="text-white/80">
                * Exemple indicatif Toulouse centre. Coût division : 80 000€ environ. Plus-value nette : +145 000€
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Questions fréquentes sur la division d'immeuble</h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-stone-50 p-8 border border-stone-200">
                  <h3 className="text-xl font-medium mb-4">{faq.question}</h3>
                  <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">Étudier votre projet de division</h2>
              <p className="text-xl text-stone-600">
                Étude de faisabilité gratuite. Nous analysons votre immeuble, vous conseillons, chiffrons le projet.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 border border-stone-200">
              <ContactForm />
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-stone-600 mb-4">Ou appelez-nous pour en discuter</p>
              <a
                href="tel:+33665015882"
                className="inline-flex items-center gap-3 text-2xl font-medium text-stone-900 hover:text-stone-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                06 65 01 58 82
              </a>
              <p className="text-sm text-stone-500 mt-2">Lundi – Vendredi : 8h00 – 18h00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-medium mb-6">Division d'immeuble à Toulouse et Occitanie</h3>
            <p className="text-white/80 mb-8">
              Nous accompagnons les propriétaires bailleurs et investisseurs dans toute la région :
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                'Toulouse centre',
                'Carmes',
                'Capitole',
                'Saint-Cyprien',
                'Compans',
                'Colomiers',
                'Blagnac',
                'Tournefeuille',
                'Balma',
                'Toute Occitanie',
              ].map((area, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
