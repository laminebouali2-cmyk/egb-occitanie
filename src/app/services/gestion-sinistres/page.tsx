import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Gestion de Sinistres Toulouse | Dégât des Eaux, Incendie - EGB Occitanie',
  description:
    'Expert gestion sinistres à Toulouse : dégât des eaux, incendie, fissures. Coordination assurance, travaux de reprise, remise en état. Intervention rapide sous 48h.',
  openGraph: {
    title: 'Gestion Sinistres Toulouse | EGB Occitanie',
    description:
      'Sinistre dans votre maison ? EGB Occitanie gère tout : expertise, coordination assurance, travaux de remise en état à Toulouse.',
    url: 'https://egb-occitanie.fr/services/gestion-sinistres',
  },
};

const sinistresTypes = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Dégât des eaux',
    description: 'Fuite, inondation, rupture canalisation, débordement. Sécurisation immédiate, séchage, travaux de reprise.',
    interventions: ['Recherche fuite', 'Séchage professionnel', 'Reprise sols/murs', 'Remise en peinture'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: 'Incendie',
    description: 'Feu, fumée, suie. Sécurisation structure, nettoyage spécialisé, reconstruction partielle ou totale.',
    interventions: ['Sécurisation structure', 'Décontamination fumée', 'Reconstruction', 'Mise aux normes'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fissures & Malfaçons',
    description: 'Fissures structurelles, affaissement, désordres construction. Expertise, travaux de reprise, consolidation.',
    interventions: ['Expertise structure', 'Injection résine', 'Reprise fondations', 'Réfection façades'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: 'Catastrophe naturelle',
    description: 'Inondation, tempête, grêle, sécheresse. État des lieux, dossier catastrophe naturelle, travaux urgents.',
    interventions: ['État des lieux urgent', 'Dossier CatNat', 'Travaux d\'urgence', 'Réparations complètes'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Intervention d\'urgence',
    description: 'Nous intervenons sous 48h maximum. Sécurisation du site, état des lieux photographique complet, premiers travaux d\'urgence si nécessaire.',
    duration: '24-48h',
  },
  {
    number: '02',
    title: 'Expertise & chiffrage',
    description: 'Diagnostic complet des dégâts, identification des causes, évaluation précise des travaux nécessaires. Chiffrage détaillé pour votre assureur.',
    duration: '1 semaine',
  },
  {
    number: '03',
    title: 'Coordination assurance',
    description: 'Nous parlons le langage des experts. Défense de vos intérêts, suivi du dossier, négociation indemnisation. Vous ne gérez rien.',
    duration: '2-6 semaines',
  },
  {
    number: '04',
    title: 'Travaux de remise en état',
    description: 'Reconstruction, reprise, finitions. Nous reconstituons à l\'identique ou modernisons si vous le souhaitez. Suivi chantier rigoureux.',
    duration: '1-4 mois selon ampleur',
  },
  {
    number: '05',
    title: 'Livraison & garanties',
    description: 'Réception des travaux, levée réserves, nettoyage complet. Garanties activées. Vous retrouvez votre bien en meilleur état.',
    duration: '1 semaine',
  },
];

const benefits = [
  {
    title: 'Expertise rapide',
    description: 'Intervention sous 48h pour sécuriser, évaluer les dégâts et établir un chiffrage précis pour votre assureur.',
  },
  {
    title: 'Coordination assurance',
    description: 'Nous parlons le langage des experts. Nous défendons vos intérêts, suivons le dossier jusqu\'au règlement intégral.',
  },
  {
    title: 'Travaux tous corps d\'état',
    description: 'Gros œuvre, second œuvre, finitions : nous gérons tout. Un seul interlocuteur du début à la fin.',
  },
  {
    title: 'Respect planning',
    description: 'Vous voulez retrouver votre maison rapidement. Nous accélérons au maximum tout en garantissant la qualité.',
  },
  {
    title: 'Remise à neuf',
    description: 'Nous reconstituons à l\'identique, ou profitons de la réfection pour moderniser si vous le souhaitez.',
  },
  {
    title: 'Accompagnement administratif',
    description: 'Dossiers, devis, factures, expertises : nous gérons toute la paperasse. Vous vous occupez de l\'essentiel.',
  },
];

const faqs = [
  {
    question: 'Que faire en cas de sinistre ?',
    answer: '1) Sécurisez les lieux (coupure eau/électricité si danger). 2) Prévenez immédiatement votre assurance (délai légal 5 jours). 3) Prenez des photos. 4) Ne jetez rien avant expertise. 5) Appelez-nous : nous intervenons sous 48h pour état des lieux et travaux d\'urgence.',
  },
  {
    question: 'Mon assurance va-t-elle tout prendre en charge ?',
    answer: 'Cela dépend de votre contrat (garanties souscrites, franchise). Nous vous aidons à comprendre votre contrat, établissons un chiffrage précis, défendons vos intérêts auprès de l\'expert. Objectif : obtenir la meilleure indemnisation possible.',
  },
  {
    question: 'Combien de temps pour les travaux de remise en état ?',
    answer: 'Dégât des eaux léger (séchage + peinture) : 2-4 semaines. Dégât moyen (reprise sols/murs) : 1-2 mois. Sinistre lourd (reconstruction partielle) : 2-4 mois. Nous accélérons au maximum tout en respectant la qualité.',
  },
  {
    question: 'Vais-je devoir avancer l\'argent des travaux ?',
    answer: 'Non dans la plupart des cas. Soit l\'assurance verse une provision, soit nous travaillons en mandat (factures directes à l\'assurance), soit assurance dommages-ouvrage finance. Nous trouvons la solution adaptée à votre situation.',
  },
  {
    question: 'Peut-on rester dans la maison pendant les travaux ?',
    answer: 'Dégât léger : oui avec gêne limitée. Dégât important (électricité, eau, structure compromis) : relogement temporaire nécessaire. Votre assurance prend en charge l\'hébergement (hôtel, location) selon garanties contractées.',
  },
  {
    question: 'Travaillez-vous avec tous les assureurs ?',
    answer: 'Oui. Nous connaissons les procédures de tous les grands assureurs (Maif, Macif, Groupama, Allianz, Axa, Matmut, GMF, etc.) et experts (Stelliant, Setec, Neoce, etc.). Nous savons négocier avec eux.',
  },
  {
    question: 'Que faire si l\'assurance refuse de tout couvrir ?',
    answer: 'Nous vous aidons à contester la décision : contre-expertise indépendante, recours amiable, médiation assurance si nécessaire. Nous défendons vos droits jusqu\'au bout.',
  },
  {
    question: 'Puis-je profiter des travaux pour moderniser ?',
    answer: 'Oui. L\'assurance prend en charge la remise en état à l\'identique. Si vous souhaitez moderniser (meilleurs matériaux, agencement différent), vous payez la différence. Nous chiffrons les deux options.',
  },
];

export default function GestionSinistresPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        overline="Gestion de sinistres"
        title="Reconstruire"
        subtitle="après le choc"
        description="Dégât des eaux, incendie, fissures : un sinistre bouleverse votre quotidien.<br />Notre rôle ? Gérer la technique, négocier avec l'assurance, vous rendre votre sérénité."
        backgroundImage="https://images.unsplash.com/photo-1600566753355-35792bedcfea?q=80&w=2070"
        primaryCTA={{
          text: 'Demander une intervention',
          href: '#contact',
        }}
        secondaryCTA={{
          text: '06 65 01 58 82',
          href: 'tel:+33665015882',
        }}
      />

      {/* Urgence */}
      <section className="py-12 bg-red-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-medium mb-4">🚨 Sinistre en cours ? Intervention d'urgence sous 48h</h3>
            <p className="text-xl text-red-100 mb-6">
              Dégât des eaux, incendie, tempête : appelez-nous immédiatement. Nous intervenons rapidement pour
              sécuriser et établir l'état des lieux.
            </p>
            <a
              href="tel:+33665015882"
              className="btn btn-primary !bg-white !text-red-900 hover:!bg-red-50 inline-flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Appeler maintenant : 06 65 01 58 82
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Pourquoi nous confier la gestion de votre sinistre ?</h2>
            <p className="text-xl text-stone-700 leading-relaxed mb-6">
              Un sinistre, c'est un choc. Entre le stress, les démarches assurance, trouver des artisans, coordonner
              les travaux... Vous avez mieux à faire : vous occuper de votre famille, de votre travail, de l'essentiel.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Nous prenons tout en charge. Nous connaissons les procédures d'assurance, nous parlons le langage des
              experts, nous coordonnons tous les corps de métiers. Vous avez un seul interlocuteur, nous gérons tout
              le reste.
            </p>
          </div>
        </div>
      </section>

      {/* Types de sinistres */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Types de sinistres que nous gérons</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Dégât des eaux, incendie, fissures, catastrophe naturelle : nous intervenons sur tous types de sinistres.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sinistresTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 border border-stone-200">
                <div className="text-stone-900 mb-4">{type.icon}</div>
                <h3 className="text-2xl font-medium mb-3">{type.title}</h3>
                <p className="text-stone-700 leading-relaxed mb-6">{type.description}</p>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                    Nos interventions
                  </h4>
                  <ul className="space-y-2">
                    {type.interventions.map((intervention, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                        <span className="text-stone-600">{intervention}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Notre processus de gestion sinistre</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              De l'intervention d'urgence à la livraison, nous gérons tout pour vous.
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

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Réactivité, expertise, défense de vos intérêts. Nous sommes à vos côtés du début à la fin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 border border-stone-200">
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Questions fréquentes sur la gestion de sinistres</h2>
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
      <section id="contact" className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="!text-white mb-6">Besoin d'aide après un sinistre ?</h2>
              <p className="text-xl text-white/80">
                Nous intervenons sous 48h. Remplissez le formulaire ou appelez-nous directement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12">
              <ContactForm />
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-white/60 mb-4">Urgence ? Appelez-nous directement</p>
              <a
                href="tel:+33665015882"
                className="inline-flex items-center gap-3 text-2xl font-medium text-white hover:text-white/80 transition-colors"
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
              <p className="text-sm text-white/60 mt-2">Disponible 7j/7 pour les urgences</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
