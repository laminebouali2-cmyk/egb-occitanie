import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Construction Neuve Toulouse et Occitanie | Maison Sur-Mesure - EGB Occitanie',
  description:
    'Constructeur de maisons individuelles à Toulouse. Construction neuve clé en main, villa contemporaine ou traditionnelle. Maître d\'œuvre expérimenté. Devis gratuit.',
  openGraph: {
    title: 'Construction Neuve à Toulouse | EGB Occitanie',
    description:
      'Faites construire votre maison sur-mesure avec EGB Occitanie. Construction neuve de qualité à Toulouse et en Occitanie.',
    url: 'https://egb-occitanie.fr/services/construction-neuve',
  },
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Zéro contrainte de l\'ancien',
    description: 'Pas de murs porteurs à contourner, pas de réseaux vétustes. Tout est pensé pour vous dès le départ, selon vos besoins exacts.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance énergétique RE2020',
    description: 'Maison aux normes RE2020, isolation renforcée, VMC double flux. Confort thermique optimal et factures maîtrisées sur 30 ans.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Personnalisation totale',
    description: 'De la taille des pièces aux finitions, chaque centimètre carré reflète votre mode de vie. Votre projet, vos choix.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Gestion complète du projet',
    description: 'Terrain, permis de construire, coordination artisans, réception : nous gérons tout. Vous suivez, vous validez, vous emménagez serein.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Recherche & choix du terrain',
    description: 'Nous vous aidons à trouver et analyser le terrain idéal : orientation, viabilisation, règles d\'urbanisme (PLU), contraintes techniques.',
    duration: '2-4 semaines',
  },
  {
    number: '02',
    title: 'Conception avec architecte',
    description: 'Plans personnalisés avec l\'un de nos 5 architectes partenaires ou le vôtre. Optimisation technique et financière du projet.',
    duration: '4-8 semaines',
  },
  {
    number: '03',
    title: 'Permis de construire',
    description: 'Dépôt et suivi du permis de construire. Gestion des éventuelles demandes de pièces complémentaires. Obtention garantie.',
    duration: '2-3 mois',
  },
  {
    number: '04',
    title: 'Construction',
    description: 'Fondations, gros œuvre, hors d\'eau/hors d\'air, second œuvre, finitions. Suivi hebdomadaire, photos d\'avancement, transparence totale.',
    duration: '8-14 mois',
  },
  {
    number: '05',
    title: 'Livraison & garanties',
    description: 'Réception avec vous, levée des réserves sous 30 jours, remise des clés. Garanties décennale, biennale, parfait achèvement activées.',
    duration: '2-3 semaines',
  },
];

const projects = [
  {
    title: 'Villa contemporaine Colomiers',
    location: 'Colomiers (31)',
    surface: '180m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    url: '/construction-villa-colomiers',
  },
  {
    title: 'Maison familiale Balma',
    location: 'Balma (31)',
    surface: '160m²',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800',
    url: '/construction-villa-balma',
  },
  {
    title: 'Villa plain-pied Tournefeuille',
    location: 'Tournefeuille (31)',
    surface: '140m²',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=800',
    url: '/construction-villa-tournefeuille',
  },
];

const faqs = [
  {
    question: 'Quel est le prix au m² pour une construction neuve à Toulouse ?',
    answer: 'Le prix moyen se situe entre 1 800€ et 2 500€ HT/m² selon la complexité du projet, les finitions et les équipements. Pour une maison de 150m², comptez entre 270 000€ et 375 000€ HT hors terrain. Nous vous fournissons un devis détaillé après étude de votre projet.',
  },
  {
    question: 'Combien de temps faut-il pour construire une maison ?',
    answer: 'De l\'obtention du permis de construire à la livraison, comptez 10 à 16 mois en moyenne : 2-3 mois pour le permis, 8-14 mois de construction selon la taille et la complexité. Nous établissons un planning précis et réaliste dès le départ.',
  },
  {
    question: 'Peut-on construire sans apport personnel ?',
    answer: 'Oui, certaines banques financent jusqu\'à 110% du projet (terrain + construction + frais). Nous travaillons avec des courtiers spécialisés qui négocient les meilleures conditions pour vous.',
  },
  {
    question: 'Quelles sont les normes RE2020 ?',
    answer: 'La RE2020 impose des performances énergétiques élevées : isolation renforcée, étanchéité à l\'air, ventilation double flux, chauffage bas carbone. Résultat : maison confortable été comme hiver, factures énergétiques divisées par 3 à 5.',
  },
  {
    question: 'Faut-il obligatoirement un architecte ?',
    answer: 'Oui, pour toute construction de plus de 150m² de surface de plancher. Même en dessous, nous recommandons un architecte pour optimiser l\'agencement, l\'orientation et la conformité réglementaire. Nous avons 5 architectes partenaires à Toulouse.',
  },
  {
    question: 'Quelles garanties avez-vous ?',
    answer: 'Toutes les garanties légales : décennale (10 ans sur la solidité), biennale (2 ans sur les équipements), parfait achèvement (1 an sur tous désordres). Assurance dommages-ouvrage pour financement rapide des réparations si besoin.',
  },
  {
    question: 'Puis-je suivre l\'avancement du chantier ?',
    answer: 'Absolument. Point hebdomadaire garanti (visite + compte-rendu écrit), photos d\'avancement partagées, accès chantier quand vous voulez. Transparence totale du début à la fin.',
  },
  {
    question: 'Dans quelles villes intervenez-vous ?',
    answer: 'Toulouse et toute l\'agglomération : Colomiers, Blagnac, Tournefeuille, Balma, L\'Union, Ramonville, Castanet-Tolosan, et toute l\'Occitanie dans un rayon de 50km autour de Toulouse.',
  },
];

export default function ConstructionNeuvePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        overline="Construction neuve"
        title="Bâtir votre vision"
        subtitle="sur-mesure"
        description="Faire construire, c'est donner vie à un rêve. Choisir l'emplacement, l'orientation, la lumière.<br />Créer un lieu qui vous ressemble, sans compromis."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
        primaryCTA={{
          text: 'Demander un devis gratuit',
          href: '#contact',
        }}
        secondaryCTA={{
          text: 'Voir nos constructions',
          href: '/projets',
        }}
      />

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Pourquoi construire du neuf avec EGB Occitanie ?</h2>
            <p className="text-xl text-stone-700 leading-relaxed mb-6">
              Construire une maison neuve, c'est partir d'une page blanche. Aucune contrainte structurelle,
              aucun compromis sur l'agencement, l'isolation ou les équipements. C'est la garantie d'un bien
              parfaitement adapté à votre mode de vie, aux normes les plus exigentes, pour un confort durable.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Depuis 15 ans, nous accompagnons les familles toulousaines dans leur projet de construction :
              du choix du terrain à la remise des clés, en passant par la conception architecturale et la
              coordination de tous les corps de métiers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Les avantages de la construction neuve</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Une maison neuve, c'est la liberté de tout choisir, l'assurance de la performance énergétique,
              et la tranquillité des garanties constructeur.
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

      {/* Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Notre processus de construction</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              5 étapes claires, un interlocuteur unique, une transparence totale. Voici comment nous
              construisons votre maison de A à Z.
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

      {/* Tarifs */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="!text-white mb-12 text-center">Prix construction neuve Toulouse</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-medium mb-4">Maison traditionnelle</h3>
                <div className="text-4xl font-light mb-4">1 800 - 2 200€</div>
                <p className="text-white/60 mb-6">HT / m²</p>
                <ul className="space-y-3">
                  {[
                    'Matériaux standards qualité',
                    'Finitions soignées',
                    'Isolation RT2020 minimum',
                    'Garanties légales incluses',
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
                <h3 className="text-2xl font-medium mb-4">Maison haut de gamme</h3>
                <div className="text-4xl font-light mb-4">2 200 - 2 800€</div>
                <p className="text-white/60 mb-6">HT / m²</p>
                <ul className="space-y-3">
                  {[
                    'Matériaux premium',
                    'Finitions luxueuses',
                    'Domotique & performance RE2020+',
                    'Prestations sur-mesure',
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
                Prix indicatifs hors terrain. Devis détaillé gratuit après étude de votre projet.
              </p>
              <Link href="#contact" className="btn btn-primary !bg-white !text-stone-900 hover:!bg-stone-100">
                Recevoir mon devis personnalisé
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Realisations */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Nos constructions récentes</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations à Toulouse et en Occitanie.
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
              Voir toutes nos constructions
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Questions fréquentes sur la construction neuve</h2>
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
              <h2 className="mb-6">Démarrer votre projet de construction</h2>
              <p className="text-xl text-stone-600">
                Premier rendez-vous gratuit et sans engagement. Nous étudions votre projet et vous conseillons.
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
            <h3 className="text-2xl font-medium mb-6">Zone d'intervention</h3>
            <p className="text-white/80 mb-8">
              Nous construisons des maisons neuves à Toulouse et dans toute l'Occitanie :
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                'Toulouse',
                'Colomiers',
                'Blagnac',
                'Tournefeuille',
                'Balma',
                'L\'Union',
                'Ramonville',
                'Castanet-Tolosan',
                'Cugnaux',
                'Plaisance-du-Touch',
                'Saint-Orens',
                'Labège',
              ].map((city, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
