import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Extension Maison Toulouse | Agrandissement & Surélévation Haute-Garonne',
  description:
    'Extension de maison à Toulouse et Occitanie. Agrandissement latéral, surélévation, ossature bois. 15 ans d\'expertise. Devis gratuit sous 48h. Prix transparents. ☎ 06 65 01 58 82',
  keywords: [
    'extension maison toulouse',
    'agrandissement maison toulouse',
    'surélévation toulouse',
    'extension ossature bois toulouse',
    'extension maison toulousaine',
    'architecte extension toulouse',
  ],
  openGraph: {
    title: 'Extension Maison Toulouse | Agrandissez Sans Déménager',
    description:
      'Agrandissez votre maison à Toulouse avec EGB Occitanie. 15 ans d\'expérience, architectes partenaires, 150+ extensions réalisées.',
    url: 'https://egb-occitanie.fr/extension-maison-toulouse',
  },
};

const faqs = [
  {
    question: 'Quel est le prix au m² pour une extension de maison à Toulouse ?',
    answer:
      'Le coût d\'extension varie selon le type de projet et les finitions. Comptez entre 1 500 € et 2 200 € HT/m² pour une extension traditionnelle (parpaing, brique) avec finitions standards, 2 200 € à 3 000 € HT/m² pour une extension ossature bois ou contemporaine avec finitions premium, et 3 000 € à 4 000 € HT/m² pour une surélévation ou extension architecturale d\'exception. Par exemple, une extension de 30m² coûte entre 45 000 € et 120 000 € TTC selon la complexité et le niveau de finitions.',
  },
  {
    question: 'Combien de temps faut-il pour réaliser une extension à Toulouse ?',
    answer:
      'Le délai total est généralement de 5 à 9 mois : 3-4 semaines pour la conception avec l\'architecte, 2 mois pour l\'instruction du permis de construire, 2 mois de délai de recours des tiers (obligatoire), et 2-4 mois de travaux selon la surface (20 à 50m²). Pour une surélévation complète, comptez 6 à 12 mois en raison de la complexité structurelle et des renforcements nécessaires.',
  },
  {
    question: 'Faut-il un permis de construire pour une extension à Toulouse ?',
    answer:
      'Oui, le permis de construire est obligatoire pour toute extension de plus de 20m² (ou 40m² si le PLU le permet et que la surface totale reste inférieure à 150m²). Une simple déclaration préalable suffit pour les extensions entre 5 et 20m². En zone ABF (Architecte des Bâtiments de France) comme le centre historique de Toulouse, l\'avis de l\'ABF est requis, ce qui ajoute environ 1 mois au délai. Nous gérons l\'intégralité des démarches administratives pour vous.',
  },
  {
    question: 'Peut-on faire une extension sur une maison toulousaine en brique ?',
    answer:
      'Absolument. C\'est même notre spécialité. Nous réalisons des extensions qui s\'harmonisent parfaitement avec l\'architecture toulousaine : reprise de la brique foraine rose pour une continuité esthétique, ou contraste contemporain assumé (ossature bois, zinc, enduit blanc) qui met en valeur l\'ancien. L\'important est de respecter les proportions et les règles du PLU. Nous travaillons avec des architectes qui maîtrisent parfaitement l\'intégration architecturale dans le tissu toulousain.',
  },
  {
    question: 'Extension ou déménagement : que choisir à Toulouse ?',
    answer:
      'L\'extension est souvent plus avantageuse financièrement et pratiquement. Pour gagner 30-40m² (2 chambres + SDB), comptez 60 000 € à 100 000 € en extension, contre 200 000 € à 300 000 € pour acheter plus grand (prix immobilier + frais de notaire + déménagement + travaux). Vous conservez votre emplacement, votre quartier, vos habitudes, et valorisez immédiatement votre bien de 15 à 25%. L\'extension offre un excellent retour sur investissement immédiat.',
  },
  {
    question: 'Quels types d\'extension sont possibles à Toulouse ?',
    answer:
      'Plusieurs options s\'offrent à vous : extension latérale en continuité de la maison (la plus courante, pour cuisine, salon, chambre), surélévation d\'un étage complet (si la structure le permet), extension à ossature bois (rapide, écologique, contemporaine), véranda ou extension vitrée (luminosité maximale), extension sur garage existant. Le choix dépend de votre terrain, de la configuration de votre maison, du PLU, et de votre budget. Nous réalisons une étude de faisabilité gratuite pour identifier la meilleure solution.',
  },
];

const benefits = [
  {
    title: 'ROI immédiat et valorisation',
    description: 'Une extension bien conçue valorise votre bien de 15 à 25% tout en créant l\'espace dont vous avez besoin.',
  },
  {
    title: 'Harmonie architecturale garantie',
    description: 'Intégration parfaite avec l\'existant : continuité ou contraste assumé, toujours dans le respect du caractère toulousain.',
  },
  {
    title: 'Pas de déménagement',
    description: 'Vous restez dans votre quartier, conservez vos habitudes, et évitez le stress et les coûts d\'un déménagement.',
  },
  {
    title: 'Conception sur-mesure',
    description: 'Chaque extension est unique : plans personnalisés, choix des matériaux, optimisation de la lumière et des volumes.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Étude de faisabilité gratuite',
    description: 'Visite de votre maison, analyse du terrain, étude du PLU, identification des contraintes techniques et réglementaires. Esquisse des possibilités.',
  },
  {
    number: '02',
    title: 'Conception architecturale',
    description: 'Plans détaillés avec architecte partenaire, perspectives 3D réalistes, optimisation des volumes et de la lumière. Validation avec vous.',
  },
  {
    number: '03',
    title: 'Permis de construire',
    description: 'Constitution et dépôt du dossier complet, gestion de l\'instruction (2 mois), consultation ABF si nécessaire. Suivi jusqu\'à l\'obtention.',
  },
  {
    number: '04',
    title: 'Travaux et construction',
    description: 'Fondations, élévation, toiture, isolation, menuiseries, réseaux. Coordination de tous les corps de métier. Suivi hebdomadaire rigoureux.',
  },
  {
    number: '05',
    title: 'Finitions et livraison',
    description: 'Sols, peintures, cuisine, salle de bain selon le projet. Raccordement à l\'existant. Réception avec levée des réserves.',
  },
];

export default function ExtensionMaisonToulousePage() {
  // Schema Markup for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <PageHero
        overline="Extension de maison à Toulouse"
        title="Agrandissez sans déménager,"
        subtitle="vivez mieux chez vous"
        description="À Toulouse et en Occitanie, nous créons l'espace qu'il vous manque.<br />Extension latérale, surélévation, ossature bois : des solutions sur-mesure."
        backgroundImage="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070"
        primaryCTA={{
          text: 'Devis gratuit sous 48h',
          href: '#contact',
        }}
        secondaryCTA={{
          text: '☎ 06 65 01 58 82',
          href: 'tel:+33665015882',
        }}
      />

      {/* Trust Bar */}
      <section className="border-b border-stone-200 bg-stone-50 py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">150+</div>
              <div className="text-sm text-stone-600">Extensions réalisées</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">15 ans</div>
              <div className="text-sm text-stone-600">D'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">100%</div>
              <div className="text-sm text-stone-600">Permis obtenus</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">+22%</div>
              <div className="text-sm text-stone-600">Valorisation moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="mb-8">
              Pourquoi choisir EGB Occitanie
              <br />
              pour votre extension ?
            </h2>
            <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Faire une extension de maison à Toulouse, c'est gagner de l'espace sans perdre ce qui fait
                votre attachement à votre lieu de vie : votre quartier, votre jardin, vos souvenirs, vos
                habitudes.
              </p>
              <p>
                Depuis 2008, <strong>EGB Occitanie</strong> accompagne les propriétaires dans leurs projets
                d'<strong>extension et d'agrandissement de maison à Toulouse et en Occitanie</strong>. Nous
                avons réalisé plus de <strong>150 extensions</strong> de tous types : latérales,
                surélévations, ossatures bois, vérandas.
              </p>
              <p>
                Notre expertise ? Créer des extensions qui s'intègrent harmonieusement à l'architecture
                toulousaine existante. Que vous souhaitiez une <strong>continuité parfaite</strong> en brique
                rose, ou un <strong>contraste contemporain assumé</strong> (ossature bois, zinc, grande
                verrière), nous concevons avec vous la solution qui sublime votre maison.
              </p>
              <p>
                Chaque projet d'extension est unique. Nous travaillons main dans la main avec des{' '}
                <strong>architectes toulousains expérimentés</strong> pour maximiser les volumes, optimiser la
                lumière, et respecter les contraintes du PLU. <strong>Transparence totale</strong> sur les
                coûts, les délais et le processus. <strong>Gestion complète du permis de construire</strong>.
                <strong>Coordination de tous les corps de métier</strong>. <strong>Zéro stress</strong> pour
                vous, zéro retard de notre côté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-6">Les avantages de l'extension de maison</h2>
            <p className="text-lead">
              Agrandir votre maison plutôt que déménager offre des bénéfices financiers, pratiques et
              émotionnels immédiats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 border border-stone-200">
                <h3 className="text-xl font-medium mb-4">{benefit.title}</h3>
                <p className="text-stone-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-6">Notre processus d'extension</h2>
            <p className="text-lead">
              De l'étude de faisabilité à la livraison finale, chaque étape est maîtrisée et transparente.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="text-6xl font-light text-stone-300 min-w-[80px]">{step.number}</div>
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                  <p className="text-stone-700 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Range */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="!text-white mb-8">Prix extension maison Toulouse 2026</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-8 backdrop-blur-sm">
                <div className="text-4xl font-light mb-4">1 500 € - 2 200 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Extension traditionnelle</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Parpaing ou brique</li>
                  <li>• Toiture tuiles</li>
                  <li>• Finitions standard</li>
                </ul>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm border-2 border-white/30">
                <div className="text-4xl font-light mb-4">2 200 € - 3 000 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Extension premium</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Ossature bois</li>
                  <li>• Grandes baies vitrées</li>
                  <li>• Finitions haut de gamme</li>
                </ul>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm">
                <div className="text-4xl font-light mb-4">3 000 € - 4 000 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Surélévation & exception</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Architecture signature</li>
                  <li>• Renforcement structure</li>
                  <li>• Matériaux d'exception</li>
                </ul>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              *Prix indicatifs TTC incluant tous les corps de métiers, permis de construire et coordination.
              Devis personnalisé gratuit après étude de faisabilité.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-12">Questions fréquentes</h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-stone-200 pb-8 last:border-0">
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
              <h2 className="mb-6">Démarrons votre projet d'extension</h2>
              <p className="text-lead">
                Recevez votre devis personnalisé sous 48h. Étude de faisabilité gratuite et sans engagement.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm">
              <ContactForm />
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-stone-600 mb-4">Besoin d'un conseil immédiat ?</p>
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
            <h3 className="text-lg font-medium mb-6">Découvrez aussi</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/construction-villa-toulouse"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Construction villa</h4>
                <p className="text-sm text-stone-600">Construire du neuf sur-mesure à Toulouse</p>
              </Link>
              <Link
                href="/renovation-maison-toulouse"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Rénovation maison</h4>
                <p className="text-sm text-stone-600">Transformer l'existant en lieu d'exception</p>
              </Link>
              <Link
                href="/projets"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Nos réalisations</h4>
                <p className="text-sm text-stone-600">150+ extensions réalisées à Toulouse</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
