import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Notre Méthode | Process Construction & Rénovation - EGB Occitanie',
  description:
    'Découvrez notre méthode de travail en 5 étapes : de la première rencontre à la livraison. Transparence totale, suivi hebdomadaire, 0 retard. 15 ans d\'expérience à Toulouse.',
  openGraph: {
    title: 'Notre Méthode de Travail | EGB Occitanie',
    description:
      'Un processus transparent et structuré pour votre projet de construction ou rénovation à Toulouse.',
    url: 'https://egb-occitanie.fr/notre-methode',
  },
};

const processSteps = [
  {
    number: '01',
    title: 'Premier contact',
    subtitle: 'Gratuit & sans engagement',
    duration: '1-2 heures',
    description:
      'Tout commence par une rencontre. Nous prenons le temps de comprendre votre projet dans ses moindres détails : vos besoins, vos envies, vos contraintes, votre budget, et vos délais.',
    details: [
      'Rencontre à votre domicile, sur le terrain, ou dans nos locaux',
      'Écoute active de votre vision et de vos attentes',
      'Première évaluation de faisabilité technique',
      'Discussion ouverte sur le budget et les délais réalistes',
      'Présentation de notre approche et de nos références',
      'Aucun engagement, aucun frais',
    ],
    deliverables: [
      'Compte-rendu écrit de notre échange',
      'Premières recommandations',
      'Fourchette budgétaire indicative',
    ],
  },
  {
    number: '02',
    title: 'Étude de faisabilité',
    subtitle: 'Analyse technique & financière',
    duration: '2-3 semaines',
    description:
      'Nous analysons en profondeur votre projet pour vous garantir sa faisabilité technique, réglementaire et financière. Cette étape évite les mauvaises surprises et pose les bases solides de votre projet.',
    details: [
      'Visite technique approfondie du site',
      'Études de sol si nécessaire (géotechnique)',
      'Analyse des règles d\'urbanisme (PLU, ABF si secteur protégé)',
      'Consultation de nos architectes partenaires',
      'Identification des contraintes techniques (réseaux, accès, mitoyenneté)',
      'Chiffrage détaillé par corps de métier',
    ],
    deliverables: [
      'Rapport de faisabilité technique',
      'Devis détaillé par poste',
      'Planning prévisionnel',
      'Proposition contractuelle',
    ],
  },
  {
    number: '03',
    title: 'Conception & Permis',
    subtitle: 'Plans, permis, optimisation',
    duration: '1-3 mois',
    description:
      'Avec votre architecte (le vôtre ou l\'un de nos 5+ partenaires toulousains), nous finalisons les plans et gérons l\'intégralité des démarches administratives.',
    details: [
      'Coordination avec l\'architecte pour les plans',
      'Optimisation technique et financière du projet',
      'Dépôt du permis de construire ou déclaration préalable',
      'Suivi de l\'instruction administrative',
      'Réponse aux éventuelles demandes de pièces complémentaires',
      'Validation des matériaux et finitions',
      'Signature du contrat de construction',
    ],
    deliverables: [
      'Plans architecte validés',
      'Permis de construire obtenu',
      'Contrat de construction signé',
      'Planning détaillé des travaux',
      'Assurances et garanties activées',
    ],
  },
  {
    number: '04',
    title: 'Réalisation',
    subtitle: 'Construction & suivi',
    duration: '6-18 mois selon projet',
    description:
      'Le chantier démarre. Nous coordonnons l\'ensemble des corps de métiers et vous tenons informé chaque semaine de l\'avancement. Vous suivez votre projet en temps réel, sans surprise.',
    details: [
      'Installation de chantier et sécurisation',
      'Terrassement et fondations (si construction)',
      'Gros œuvre (murs, planchers, charpente)',
      'Hors d\'eau / hors d\'air (toiture, menuiseries extérieures)',
      'Second œuvre (électricité, plomberie, isolation, cloisons)',
      'Finitions (revêtements sols/murs, peinture, menuiseries intérieures)',
      'Point hebdomadaire avec vous (visite + compte-rendu)',
      'Photos d\'avancement partagées',
      'Gestion des imprévus avec transparence totale',
    ],
    deliverables: [
      'Comptes-rendus hebdomadaires',
      'Photos d\'avancement',
      'Gestion des modifications en cours de chantier',
      'Nettoyage et sécurisation permanente',
    ],
  },
  {
    number: '05',
    title: 'Livraison & Garanties',
    subtitle: 'Réception & SAV',
    duration: '1-2 semaines',
    description:
      'Nous organisons la réception de votre projet avec vous. Chaque détail est vérifié. Les éventuelles réserves sont levées rapidement. Vous emménagez serein avec toutes les garanties légales.',
    details: [
      'Visite de pré-réception pour anticiper les ajustements',
      'Réception officielle avec vous et l\'architecte',
      'Liste des réserves éventuelles',
      'Levée des réserves sous 30 jours',
      'Remise des documents (DOE, plans, notices)',
      'Remise des clés',
      'Activation des garanties (parfait achèvement, biennale, décennale)',
    ],
    deliverables: [
      'Procès-verbal de réception',
      'Dossier des Ouvrages Exécutés (DOE)',
      'Attestations de garantie',
      'Notice d\'utilisation et d\'entretien',
      'SAV réactif pendant 1 an',
    ],
  },
];

const guarantees = [
  {
    title: 'Garantie de parfait achèvement',
    duration: '1 an',
    description:
      'Nous réparons tous les désordres signalés pendant l\'année qui suit la réception, quelle que soit leur nature.',
  },
  {
    title: 'Garantie biennale',
    duration: '2 ans',
    description:
      'Couvre le bon fonctionnement des équipements dissociables du bâti (chauffage, sanitaires, menuiseries, etc.).',
  },
  {
    title: 'Garantie décennale',
    duration: '10 ans',
    description:
      'Protège contre les dommages compromettant la solidité de l\'ouvrage ou le rendant impropre à sa destination.',
  },
  {
    title: 'Assurance dommages-ouvrage',
    duration: '10 ans',
    description:
      'Permet le financement rapide des réparations avant même la recherche des responsabilités.',
  },
];

const differences = [
  {
    title: 'Transparence totale',
    description:
      'Devis détaillé par poste, suivi hebdomadaire, budget actualisé en temps réel. Aucune zone d\'ombre.',
  },
  {
    title: 'Zéro retard',
    description:
      'Planning réaliste dès le départ, coordination rigoureuse, gestion proactive des imprévus. 0 retard sur nos chantiers depuis 5 ans.',
  },
  {
    title: 'Architectes partenaires',
    description:
      '5+ architectes toulousains de confiance. Vous avez le vôtre ? Nous travaillons main dans la main avec lui.',
  },
  {
    title: 'Suivi personnalisé',
    description:
      'Un interlocuteur unique du début à la fin. Point hebdomadaire garanti. Disponibilité permanente.',
  },
  {
    title: 'Qualité sans compromis',
    description:
      'Matériaux sélectionnés, artisans qualifiés, contrôles qualité à chaque étape. Votre satisfaction avant tout.',
  },
  {
    title: 'Engagement financier',
    description:
      'Paiement échelonné selon avancement. Pas d\'acompte excessif. Protection garantie.',
  },
];

export default function NotreMethodePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        overline="Notre méthode"
        title="Un processus"
        subtitle="transparent & structuré"
        description="De la première rencontre à la remise des clés, chaque étape est planifiée,<br />documentée et partagée avec vous."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Une méthode éprouvée depuis 15 ans</h2>
            <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Construire ou rénover, c\'est un projet de vie. Pas une simple transaction. C\'est
                pourquoi nous avons structuré notre méthode autour de <strong>5 étapes claires</strong>,
                avec un objectif : <strong>zéro surprise, zéro dépassement injustifié, zéro retard</strong>.
              </p>
              <p>
                Depuis 2008, nous avons accompagné <strong>200+ projets</strong> à Toulouse et en Occitanie.
                Chaque projet est unique, mais notre méthode reste la même : <strong>transparence</strong>,
                <strong> suivi</strong>, et <strong>qualité</strong>.
              </p>
              <p>
                Vous savez toujours où vous en êtes. Vous suivez l\'avancement en temps réel. Vous validez
                chaque étape avant de passer à la suivante. Et vous emménagez serein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row gap-12">
                  {/* Number */}
                  <div className="lg:w-32 flex-shrink-0">
                    <div className="text-8xl font-light text-stone-300">{step.number}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-3xl font-medium mb-2">{step.title}</h3>
                      <p className="text-stone-600 text-lg">{step.subtitle}</p>
                      <p className="text-sm text-stone-500 mt-2">⏱️ Durée : {step.duration}</p>
                    </div>

                    <p className="text-lg text-stone-700 mb-8 leading-relaxed">{step.description}</p>

                    {/* Details */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-4">
                        Ce que nous faisons
                      </h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-stone-900 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-stone-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="bg-white p-6 border border-stone-200">
                      <h4 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-4">
                        Ce que vous recevez
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                            <span className="text-stone-700">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="!text-white mb-12">Garanties & Assurances</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                  <div className="flex items-baseline gap-4 mb-4">
                    <h3 className="text-xl font-medium flex-1">{guarantee.title}</h3>
                    <span className="text-3xl font-light">{guarantee.duration}</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">{guarantee.description}</p>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-8">
              Toutes nos assurances sont à jour et vérifiables. Attestations fournies dès signature du contrat.
            </p>
          </div>
        </div>
      </section>

      {/* Differences */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12">Ce qui nous différencie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {differences.map((diff, index) => (
                <div key={index} className="border-t-2 border-stone-900 pt-6">
                  <h3 className="text-xl font-medium mb-3">{diff.title}</h3>
                  <p className="text-stone-700 leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">Prêt à démarrer votre projet ?</h2>
              <p className="text-lead">
                Rencontrons-nous. Premier rendez-vous gratuit et sans engagement.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm">
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

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-medium mb-6">Découvrez nos services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/construction-villa-toulouse"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Construction villa</h4>
                <p className="text-sm text-stone-600">Construire du neuf sur-mesure</p>
              </Link>
              <Link
                href="/renovation-maison-toulouse"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Rénovation maison</h4>
                <p className="text-sm text-stone-600">Transformer l\'existant</p>
              </Link>
              <Link
                href="/extension-maison-toulouse"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Extension maison</h4>
                <p className="text-sm text-stone-600">Gagner de l\'espace</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
