import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Rénovation Maison Toulouse | Entreprise Rénovation Complète Haute-Garonne',
  description:
    'Rénovation complète de maison à Toulouse et Occitanie. Préservation du cachet, valorisation patrimoniale, 15 ans d\'expertise. Devis gratuit sous 48h. Prix transparents. ☎ 06 65 01 58 82',
  keywords: [
    'rénovation maison toulouse',
    'renovation complete toulouse',
    'entreprise rénovation toulouse',
    'rénovation maison toulousaine',
    'renovation brique toulouse',
    'rénovation architecte toulouse',
  ],
  openGraph: {
    title: 'Rénovation Maison Toulouse | Transformer l\'Ancien en Exceptionnel',
    description:
      'Rénovez votre maison à Toulouse avec EGB Occitanie. 15 ans d\'expérience, respect du patrimoine toulousain, 180+ rénovations réalisées.',
    url: 'https://egb-occitanie.fr/renovation-maison-toulouse',
  },
};

const faqs = [
  {
    question: 'Quel est le prix au m² pour rénover une maison à Toulouse ?',
    answer:
      'Le coût de rénovation varie selon l\'état initial et le niveau de finitions souhaité. Comptez entre 1 200 € et 1 800 € HT/m² pour une rénovation complète standard (électricité, plomberie, isolation, finitions), 1 800 € à 2 500 € HT/m² pour une rénovation premium avec matériaux haut de gamme, et 2 500 € à 3 500 € HT/m² pour une rénovation architecturale d\'exception avec restructuration complète. Par exemple, rénover une maison toulousaine de 150m² coûte entre 180 000 € et 525 000 € TTC selon l\'ampleur des travaux.',
  },
  {
    question: 'Combien de temps dure une rénovation complète de maison à Toulouse ?',
    answer:
      'Le délai total est généralement de 6 à 12 mois selon l\'ampleur : 2-4 semaines pour les études et diagnostics obligatoires (amiante, plomb, termites), 1-2 mois pour les travaux de gros œuvre et restructuration si nécessaire, 2-3 mois pour l\'isolation, électricité, plomberie et menuiseries, et 2-3 mois pour les finitions (sols, peintures, cuisine, salles de bain). Les maisons toulousaines en brique nécessitent une attention particulière pour préserver leur cachet.',
  },
  {
    question: 'Gérez-vous les démarches administratives et les autorisations ?',
    answer:
      'Oui, nous prenons en charge toutes les démarches : déclaration préalable de travaux ou permis de construire si modification de façade, déclarations d\'ouverture et d\'achèvement, conformité avec les règles d\'urbanisme de Toulouse (zones protégées, Architecte des Bâtiments de France), certificats de conformité électrique et gaz, et coordination avec les diagnostiqueurs et bureaux de contrôle.',
  },
  {
    question: 'Comment préserver le cachet d\'une maison toulousaine en brique ?',
    answer:
      'La préservation du patrimoine toulousain est notre spécialité. Nous travaillons avec soin sur les éléments caractéristiques : restauration des briques foraines roses, conservation et restauration des tomettes anciennes, mise en valeur des poutres apparentes, restauration des volets en bois, et intégration harmonieuse des équipements modernes (VMC, isolation) sans dénaturer l\'architecture d\'origine. Nous consultons systématiquement les règles du PLU et de l\'ABF si nécessaire.',
  },
  {
    question: 'Peut-on restructurer complètement l\'intérieur en gardant la façade ?',
    answer:
      'Absolument. C\'est même l\'approche la plus courante pour les maisons toulousaines. Nous pouvons redistribuer entièrement les espaces intérieurs, créer une cuisine ouverte, abattre ou déplacer des cloisons, créer une suite parentale, tout en conservant la façade en brique et le caractère extérieur. Nous réalisons une étude structure au préalable pour identifier les murs porteurs et proposer des solutions techniques adaptées.',
  },
  {
    question: 'La rénovation valorise-t-elle vraiment mon bien immobilier ?',
    answer:
      'Oui, de façon significative. Une rénovation complète bien menée valorise le bien de 20% à 40% à Toulouse. Une maison toulousaine en brique rénovée avec goût (préservation du cachet + confort moderne + performance énergétique) se vend beaucoup plus vite et plus cher qu\'un bien vétuste. De plus, vous réalisez des économies d\'énergie immédiates (jusqu\'à 60% sur les factures) grâce à l\'isolation performante et aux équipements modernes.',
  },
];

const benefits = [
  {
    title: 'Valorisation patrimoniale immédiate',
    description: 'Une rénovation bien menée augmente la valeur de votre bien de 20 à 40% tout en réduisant vos factures énergétiques.',
  },
  {
    title: 'Respect du cachet toulousain',
    description: 'Préservation des briques foraines, tomettes, poutres apparentes : modernité et authenticité en harmonie.',
  },
  {
    title: 'Confort moderne sans compromis',
    description: 'Isolation thermique et acoustique, VMC double flux, domotique : le confort du neuf dans le charme de l\'ancien.',
  },
  {
    title: 'Gestion complète et transparente',
    description: 'Autorisations, diagnostics, coordination des corps de métiers, suivi de chantier : nous gérons tout de A à Z.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnostic et visite technique',
    description: 'Analyse complète de l\'existant : structure, réseaux, diagnostics obligatoires (amiante, plomb, électricité). Identification des potentiels et contraintes.',
  },
  {
    number: '02',
    title: 'Conception et chiffrage détaillé',
    description: 'Plans de réaménagement, choix des matériaux et finitions, devis détaillé poste par poste. Validation du projet avec vous.',
  },
  {
    number: '03',
    title: 'Démarches administratives',
    description: 'Dépôt et suivi des autorisations nécessaires (DP ou PC), consultation ABF si zone protégée, déclarations de travaux.',
  },
  {
    number: '04',
    title: 'Travaux et coordination',
    description: 'Gros œuvre, isolation, réseaux électriques et plomberie, menuiseries, revêtements. Coordination de tous les corps de métier. Suivi hebdomadaire.',
  },
  {
    number: '05',
    title: 'Finitions et réception',
    description: 'Peintures, sols, cuisine, salles de bain, domotique. Réception avec levée des réserves. Certificats de conformité remis.',
  },
];

export default function RenovationMaisonToulousePage() {
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
        overline="Rénovation de maison à Toulouse"
        title="Transformez l'ancien"
        subtitle="en lieu d'exception"
        description="À Toulouse et en Occitanie, nous révélons le potentiel de votre maison.<br />Préservation du cachet, confort moderne, valorisation garantie."
        backgroundImage="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074"
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
              <div className="text-3xl font-light text-stone-900 mb-2">180+</div>
              <div className="text-sm text-stone-600">Maisons rénovées</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">15 ans</div>
              <div className="text-sm text-stone-600">D'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">4.9/5</div>
              <div className="text-sm text-stone-600">Satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">+35%</div>
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
              pour votre rénovation ?
            </h2>
            <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Rénover une maison à Toulouse, c'est bien plus que rafraîchir quelques murs. C'est réinventer
                un lieu de vie, préserver un patrimoine, créer de la valeur, tout en respectant l'âme d'une
                architecture toulousaine unique.
              </p>
              <p>
                Depuis 2008, <strong>EGB Occitanie</strong> accompagne les propriétaires dans leurs projets de{' '}
                <strong>rénovation complète de maison à Toulouse et en Occitanie</strong>. Nous sommes
                spécialistes de la <strong>rénovation des maisons toulousaines en brique foraine</strong>, ces
                bâtisses de caractère qui font le charme de notre région.
              </p>
              <p>
                Notre expertise ? <strong>Préserver le cachet authentique</strong> (briques roses, tomettes
                anciennes, poutres apparentes) tout en intégrant le <strong>confort moderne</strong> (isolation
                performante, domotique, VMC double flux). Nous transformons des maisons vétustes en lieux
                d'exception qui conjuguent charme de l'ancien et performance du neuf.
              </p>
              <p>
                Chaque projet de rénovation est unique. Que vous souhaitiez une <strong>rénovation légère</strong>{' '}
                (rafraîchissement et mise aux normes), une <strong>rénovation complète</strong> (tous corps d'état),
                ou une <strong>rénovation architecturale</strong> avec restructuration totale, nous adaptons notre
                approche à votre maison, votre budget, vos contraintes. <strong>Transparence totale</strong> sur les
                coûts et délais. <strong>Suivi hebdomadaire</strong> du chantier. <strong>Zéro surprise</strong>,
                zéro dépassement budgétaire injustifié.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-6">Les avantages de la rénovation complète</h2>
            <p className="text-lead">
              Transformer l'existant offre des bénéfices immédiats : valorisation patrimoniale, confort moderne,
              et économies d'énergie durables.
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
            <h2 className="mb-6">Notre processus de rénovation</h2>
            <p className="text-lead">
              De l'état des lieux initial à la réception finale, chaque étape est planifiée, transparente,
              et suivie avec rigueur.
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
            <h2 className="!text-white mb-8">Prix rénovation maison Toulouse 2026</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-8 backdrop-blur-sm">
                <div className="text-4xl font-light mb-4">1 200 € - 1 800 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Rénovation complète</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Électricité et plomberie</li>
                  <li>• Isolation performante</li>
                  <li>• Finitions qualité</li>
                </ul>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm border-2 border-white/30">
                <div className="text-4xl font-light mb-4">1 800 € - 2 500 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Rénovation premium</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Matériaux haut de gamme</li>
                  <li>• Domotique intégrée</li>
                  <li>• Préservation du cachet</li>
                </ul>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm">
                <div className="text-4xl font-light mb-4">2 500 € - 3 500 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Rénovation d'exception</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Restructuration complète</li>
                  <li>• Finitions luxe</li>
                  <li>• Architecture sur-mesure</li>
                </ul>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              *Prix indicatifs TTC incluant tous les corps de métiers, diagnostics et coordination. Devis
              personnalisé gratuit après visite technique.
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
              <h2 className="mb-6">Démarrons votre projet de rénovation</h2>
              <p className="text-lead">
                Recevez votre devis personnalisé sous 48h. Visite technique gratuite et sans engagement.
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
                href="/extension-maison-toulouse"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Extension maison</h4>
                <p className="text-sm text-stone-600">Gagner de l'espace sans déménager</p>
              </Link>
              <Link
                href="/projets"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Nos réalisations</h4>
                <p className="text-sm text-stone-600">180+ maisons rénovées à Toulouse</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
