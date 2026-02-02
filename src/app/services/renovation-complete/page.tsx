import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Rénovation Maison Toulouse | Rénovation Complète & Patrimoine - EGB Occitanie',
  description:
    'Spécialiste rénovation maison à Toulouse. Rénovation complète, rénovation énergétique, patrimoine. Maître d\'œuvre expérimenté. Aides MaPrimeRénov\'. Devis gratuit.',
  openGraph: {
    title: 'Rénovation Maison Toulouse | EGB Occitanie',
    description:
      'Transformez votre maison avec EGB Occitanie. Rénovation complète de qualité à Toulouse : maisons toulousaines, patrimoine, rénovation énergétique.',
    url: 'https://egb-occitanie.fr/services/renovation-complete',
  },
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Valorisation patrimoniale',
    description: 'Une rénovation bien menée peut doubler la valeur de votre bien. Nous travaillons avec des architectes du patrimoine si nécessaire.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Préservation du caractère',
    description: 'Parquets anciens restaurés, cheminées en valeur, hauteur sous plafond respectée. Le charme de l\'ancien avec le confort du neuf.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Rénovation énergétique',
    description: 'Isolation performante, changement fenêtres, VMC, chauffage performant. Aides MaPrimeRénov\' jusqu\'à 90% selon revenus.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Mise aux normes discrète',
    description: 'Électricité, plomberie, isolation : tout refait, rien ne se voit. Standing d\'aujourd\'hui dans l\'écrin d\'hier.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnostic complet',
    description: 'Visite technique approfondie : structure, réseaux, isolation, humidité. État des lieux détaillé avec photos. Analyse des possibilités.',
    duration: '1-2 semaines',
  },
  {
    number: '02',
    title: 'Études & conception',
    description: 'Plans de rénovation avec architecte si besoin. Études structurelles (murs porteurs). Dossier autorisation travaux (DP ou PC selon ampleur).',
    duration: '3-6 semaines',
  },
  {
    number: '03',
    title: 'Chiffrage détaillé',
    description: 'Devis par corps de métier, planning travaux, identification aides financières (MaPrimeRénov\', éco-PTZ). Budget maîtrisé.',
    duration: '2-3 semaines',
  },
  {
    number: '04',
    title: 'Travaux de rénovation',
    description: 'Démolitions, gros œuvre, réseaux, isolation, second œuvre, finitions. Phasage pour limiter nuisances. Suivi hebdomadaire garanti.',
    duration: '2-6 mois selon ampleur',
  },
  {
    number: '05',
    title: 'Livraison & finitions',
    description: 'Réception avec vous, ajustements finaux, nettoyage complet, remise des documents. Garanties activées, vous profitez de votre maison rénovée.',
    duration: '1-2 semaines',
  },
];

const renovationTypes = [
  {
    title: 'Rénovation complète',
    description: 'Tout refaire de A à Z : réseaux, isolation, cloisons, sols, peintures. Comme dans du neuf.',
    priceRange: '800 - 1 500€ HT/m²',
  },
  {
    title: 'Rénovation énergétique',
    description: 'Isolation (combles, murs, sols), menuiseries, VMC, chauffage performant. Aides jusqu\'à 90%.',
    priceRange: '300 - 800€ HT/m²',
  },
  {
    title: 'Rénovation patrimoine',
    description: 'Maisons anciennes, immeubles classés. Respect matériaux d\'origine, ABF si nécessaire.',
    priceRange: '1 200 - 2 500€ HT/m²',
  },
  {
    title: 'Rénovation partielle',
    description: 'Cuisine, salle de bain, parquet, peintures. Rafraîchissement ciblé sans gros œuvre.',
    priceRange: '500 - 1 000€ HT/m²',
  },
];

const projects = [
  {
    title: 'Rénovation complète Carmes',
    location: 'Toulouse Carmes (31)',
    surface: '120m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
    url: '/renovation-maison-carmes-toulouse',
  },
  {
    title: 'Maison toulousaine Capitole',
    location: 'Toulouse Capitole (31)',
    surface: '95m²',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800',
    url: '/renovation-capitole-toulouse',
  },
  {
    title: 'Rénovation Saint-Cyprien',
    location: 'Toulouse Saint-Cyprien (31)',
    surface: '110m²',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
    url: '/renovation-saint-cyprien-toulouse',
  },
];

const faqs = [
  {
    question: 'Quel est le coût d\'une rénovation complète à Toulouse ?',
    answer: 'Pour une rénovation complète (réseaux, isolation, sols, peintures), comptez entre 800€ et 1 500€ HT/m² selon l\'état initial et les finitions. Pour une maison de 100m², budget 80 000€ à 150 000€ HT. Devis détaillé gratuit après visite.',
  },
  {
    question: 'Peut-on rester dans la maison pendant les travaux ?',
    answer: 'Cela dépend de l\'ampleur des travaux. Pour une rénovation légère (peintures, sols), oui avec gêne limitée. Pour une rénovation lourde (réseaux, gros œuvre), nous recommandons de vous reloger temporairement (2-4 mois). Nous phasons les travaux pour limiter la durée.',
  },
  {
    question: 'Quelles aides financières pour la rénovation ?',
    answer: 'MaPrimeRénov\' (jusqu\'à 90% selon revenus pour rénovation énergétique), éco-PTZ (prêt à taux zéro jusqu\'à 50 000€), TVA réduite à 5,5%, aides locales Toulouse Métropole. Nous vous aidons à monter les dossiers.',
  },
  {
    question: 'Faut-il un architecte pour rénover ?',
    answer: 'Obligatoire si vous modifiez la structure (murs porteurs) ou créez plus de 20m² de surface. Recommandé dans tous les cas pour optimiser l\'agencement. Nous travaillons avec des architectes spécialisés patrimoine si maison ancienne.',
  },
  {
    question: 'Combien de temps dure une rénovation complète ?',
    answer: 'Rénovation légère : 3-6 semaines. Rénovation complète : 2-4 mois. Rénovation lourde avec gros œuvre : 4-6 mois. Planning précis établi dès le départ avec jalons hebdomadaires.',
  },
  {
    question: 'Peut-on rénover une maison toulousaine en briques ?',
    answer: 'Absolument, c\'est notre spécialité. Toulouse compte des milliers de maisons en briques foraines rose/rouge. Nous savons préserver le charme (briques apparentes, tomettes, cheminées) tout en modernisant (isolation, réseaux, confort). Résultat : authenticité + performance.',
  },
  {
    question: 'Que faire si on découvre des problèmes en cours de chantier ?',
    answer: 'C\'est fréquent en rénovation (réseaux vétustes, humidité cachée, structure fragilisée). Nous vous alertons immédiatement, proposons des solutions, chiffrons le surcoût. Transparence totale. Budget prévisionnel avec marge de sécurité conseillée : +10-15%.',
  },
  {
    question: 'Travaillez-vous sur immeubles classés (ABF) ?',
    answer: 'Oui. Nous avons l\'habitude des contraintes ABF (Architectes des Bâtiments de France) sur secteurs sauvegardés Toulouse (Capitole, Carmes, Saint-Étienne). Nos architectes partenaires connaissent les procédures et obtiennent les autorisations.',
  },
];

export default function RenovationCompletePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        overline="Rénovation"
        title="Révéler le potentiel"
        subtitle="caché de votre maison"
        description="Rénover, c'est transformer ce qui existe en ce qui devrait être.<br />Redécouvrir des volumes, apporter la lumière, moderniser sans effacer l'âme du lieu."
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070"
        primaryCTA={{
          text: 'Demander un devis gratuit',
          href: '#contact',
        }}
        secondaryCTA={{
          text: 'Voir nos rénovations',
          href: '/projets',
        }}
      />

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Pourquoi rénover avec EGB Occitanie ?</h2>
            <p className="text-xl text-stone-700 leading-relaxed mb-6">
              Rénover une maison, c'est lui redonner vie tout en préservant son caractère. À Toulouse, nos maisons
              en briques, nos immeubles haussmanniens, nos bâtisses anciennes méritent une rénovation qui respecte
              leur histoire tout en offrant le confort moderne.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Depuis 15 ans, nous rénovons des maisons toulousaines : quartiers historiques (Carmes, Capitole,
              Saint-Étienne), périphérie, avec ou sans contraintes ABF. Nous connaissons les spécificités du bâti
              local et les pièges à éviter.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Les avantages de la rénovation</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Rénover plutôt que racheter ailleurs, c'est valoriser votre patrimoine, rester dans votre quartier,
              et créer la maison de vos rêves sans tout recommencer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 border border-stone-200">
                <div className="text-stone-900 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de rénovation */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Types de rénovation</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              De la rénovation légère à la transformation complète, nous adaptons notre intervention à vos besoins et votre budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {renovationTypes.map((type, index) => (
              <div key={index} className="bg-stone-50 p-8 border border-stone-200">
                <h3 className="text-2xl font-medium mb-3">{type.title}</h3>
                <p className="text-stone-700 leading-relaxed mb-4">{type.description}</p>
                <div className="text-lg font-medium text-stone-900">{type.priceRange}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Notre processus de rénovation</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              5 étapes structurées pour une rénovation sans mauvaise surprise. Diagnostic précis, budget maîtrisé, livraison dans les délais.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-24 flex-shrink-0">
                  <div className="text-6xl font-light text-stone-300">{step.number}</div>
                </div>
                <div className="flex-1 border-t-2 border-stone-900 pt-6 bg-white p-6">
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

      {/* Aides financières */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="!text-white mb-12 text-center">Aides financières rénovation 2026</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-medium mb-4">MaPrimeRénov'</h3>
                <div className="text-4xl font-light mb-4">Jusqu'à 90%</div>
                <p className="text-white/60 mb-6">du montant des travaux selon revenus</p>
                <ul className="space-y-3">
                  {[
                    'Isolation (combles, murs, sols)',
                    'Changement fenêtres double vitrage',
                    'Chauffage performant (pompe à chaleur)',
                    'VMC double flux',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-medium mb-4">Éco-PTZ + TVA réduite</h3>
                <div className="text-4xl font-light mb-4">50 000€</div>
                <p className="text-white/60 mb-6">prêt à taux zéro sans condition de ressources</p>
                <ul className="space-y-3">
                  {[
                    'Prêt bancaire 0% sur 20 ans',
                    'TVA à 5,5% (au lieu de 20%)',
                    'Cumulable avec MaPrimeRénov\'',
                    'Aides locales Toulouse Métropole',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/80 mb-6">
                Nous vous accompagnons dans le montage des dossiers d'aides. Estimation gratuite de vos aides.
              </p>
              <Link href="#contact" className="btn btn-primary !bg-white !text-stone-900 hover:!bg-stone-100">
                Estimer mes aides rénovation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Realisations */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Nos rénovations récentes</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Découvrez nos rénovations de maisons toulousaines : patrimoine, énergétique, complète.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={project.url} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-stone-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-600">{project.location} • {project.surface}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projets" className="btn btn-secondary">
              Voir toutes nos rénovations
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Questions fréquentes sur la rénovation</h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-8 border border-stone-200">
                  <h3 className="text-xl font-medium mb-4">{faq.question}</h3>
                  <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">Démarrer votre projet de rénovation</h2>
              <p className="text-xl text-stone-600">
                Diagnostic gratuit à domicile. Nous visitons votre maison, évaluons les travaux, vous conseillons.
              </p>
            </div>

            <div className="bg-stone-50 p-8 md:p-12 border border-stone-200">
              <ContactForm />
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-stone-600 mb-4">Ou appelez-nous directement</p>
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
            <h3 className="text-2xl font-medium mb-6">Rénovation à Toulouse et Occitanie</h3>
            <p className="text-white/80 mb-8">
              Nous rénovons des maisons dans tous les quartiers de Toulouse et en Occitanie :
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                'Carmes',
                'Capitole',
                'Saint-Cyprien',
                'Saint-Étienne',
                'Compans-Caffarelli',
                'Rangueil',
                'Minimes',
                'Busca',
                'Arnaud Bernard',
                'Côte Pavée',
                'Colomiers',
                'Blagnac',
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
