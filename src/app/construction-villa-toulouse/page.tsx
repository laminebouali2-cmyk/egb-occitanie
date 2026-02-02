import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Construction Villa Toulouse | Constructeur Maison Sur-Mesure Haute-Garonne',
  description:
    'Construction de villa neuve à Toulouse et Occitanie. 15 ans d\'expertise, 5+ architectes partenaires, garantie décennale. Devis gratuit sous 48h. Prix transparents. ☎ 06 65 01 58 82',
  keywords: [
    'construction villa toulouse',
    'constructeur maison toulouse',
    'construction neuve toulouse',
    'faire construire toulouse',
    'villa sur-mesure toulouse',
    'maison contemporaine toulouse',
  ],
  openGraph: {
    title: 'Construction Villa Toulouse | Constructeur Maison Premium',
    description:
      'Construisez votre villa sur-mesure à Toulouse avec EGB Occitanie. 15 ans d\'expérience, 200+ villas construites.',
    url: 'https://egb-occitanie.fr/construction-villa-toulouse',
  },
};

const faqs = [
  {
    question: 'Quel est le prix au m² pour construire une villa à Toulouse ?',
    answer:
      'Le coût de construction varie selon la qualité des finitions et les équipements. Comptez entre 1 800 € et 2 500 € HT/m² pour une villa standard, et 2 500 € à 3 500 € HT/m² pour une villa haut de gamme avec finitions premium. Par exemple, une villa de 200m² coûte entre 360 000 € et 700 000 € TTC selon vos choix.',
  },
  {
    question: 'Combien de temps faut-il pour construire une villa à Toulouse ?',
    answer:
      'Le délai total est généralement de 12 à 18 mois : 2-3 mois pour les études et le permis de construire, 1-2 mois pour les fondations et VRD, 6-9 mois pour la construction hors d\'eau/hors d\'air, et 3-4 mois pour les finitions intérieures et aménagements.',
  },
  {
    question: 'EGB Occitanie gère-t-il les démarches administratives ?',
    answer:
      'Oui, nous gérons l\'intégralité des démarches : dépôt et suivi du permis de construire, déclarations d\'ouverture et d\'achèvement de travaux, raccordements aux réseaux (eau, électricité, assainissement), conformité RT2020, et coordination avec les architectes des Bâtiments de France si nécessaire.',
  },
  {
    question: 'Puis-je choisir mon architecte ou travaillez-vous avec des partenaires ?',
    answer:
      'Les deux options sont possibles. Nous collaborons avec 5+ architectes toulousains de confiance que nous pouvons vous recommander. Si vous avez déjà votre architecte, nous travaillons en parfaite coordination pour concrétiser votre projet.',
  },
  {
    question: 'Quelles garanties proposez-vous ?',
    answer:
      'Nous offrons les garanties légales obligatoires : garantie de parfait achèvement (1 an), garantie biennale (2 ans) pour les équipements, et garantie décennale (10 ans) pour les dommages structurels. Nos assurances sont à jour et vérifiables à tout moment.',
  },
  {
    question: 'Quels sont les meilleurs quartiers pour construire à Toulouse ?',
    answer:
      'Les secteurs prisés pour la construction de villa incluent : Balma, Castanet-Tolosan, Ramonville, Auzeville, Labège pour le sud-est ; Saint-Orens, Escalquens pour l\'est ; Tournefeuille, Colomiers pour l\'ouest. Le choix dépend de votre budget foncier (3 000-8 000 €/m² selon le secteur) et de votre proximité souhaitée avec Toulouse centre.',
  },
];

const benefits = [
  {
    title: 'Zéro contrainte structurelle',
    description: 'Aucun mur porteur, aucun réseau vétuste. Tout est pensé pour vous dès le départ.',
  },
  {
    title: 'Performance énergétique RE2020',
    description: 'Conformité aux dernières normes, isolation renforcée, VMC double flux : économies garanties.',
  },
  {
    title: 'Personnalisation totale',
    description: 'De la distribution des pièces aux finitions, chaque détail reflète votre mode de vie.',
  },
  {
    title: 'Garanties complètes',
    description: 'Garantie décennale, biennale et de parfait achèvement pour une sérénité maximale.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Premier contact',
    description: 'Rencontre gratuite pour comprendre votre projet, budget, délais et contraintes.',
  },
  {
    number: '02',
    title: 'Étude de faisabilité',
    description: 'Analyse du terrain, études de sol, règles d\'urbanisme, chiffrage précis.',
  },
  {
    number: '03',
    title: 'Conception & permis',
    description: 'Plans avec votre architecte, dépôt du permis, optimisation technique et financière.',
  },
  {
    number: '04',
    title: 'Construction',
    description: 'Terrassement, fondations, élévation, toiture, isolation. Suivi hebdomadaire.',
  },
  {
    number: '05',
    title: 'Finitions & livraison',
    description: 'Revêtements, électricité, plomberie, peinture. Réception avec réserves levées.',
  },
];

export default function ConstructionVillaToulousePage() {
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
        overline="Construction de villa à Toulouse"
        title="Construisez la villa"
        subtitle="qui vous ressemble"
        description="À Toulouse et en Occitanie, nous donnons vie à votre projet de construction sur-mesure.<br />Du terrain nu à la remise des clés."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
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
              <div className="text-3xl font-light text-stone-900 mb-2">200+</div>
              <div className="text-sm text-stone-600">Villas construites</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">15 ans</div>
              <div className="text-sm text-stone-600">D\'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">5+</div>
              <div className="text-sm text-stone-600">Architectes partenaires</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">0</div>
              <div className="text-sm text-stone-600">Retard de chantier</div>
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
              pour votre construction ?
            </h2>
            <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Construire sa villa à Toulouse, c\'est bien plus qu\'empiler des briques. C\'est créer un lieu
                qui vous ressemble, qui évolue avec vous, qui respecte votre budget et vos délais.
              </p>
              <p>
                Depuis 2008, <strong>EGB Occitanie</strong> accompagne les particuliers et les investisseurs
                dans leurs projets de <strong>construction de villa neuve à Toulouse et en Occitanie</strong>.
                Nous travaillons main dans la main avec des{' '}
                <strong>architectes toulousains de renom</strong> pour transformer vos envies en réalité bâtie.
              </p>
              <p>
                Notre approche ? <strong>Transparence totale</strong> sur les coûts, les délais et le processus.
                <strong>Suivi hebdomadaire</strong> du chantier. <strong>Zéro surprise</strong>, zéro dépassement
                budgétaire injustifié. Nous construisons des villas qui durent, avec des matériaux de qualité et
                un souci du détail qui fait la différence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-6">Les avantages de la construction neuve</h2>
            <p className="text-lead">
              Partir d\'une page blanche vous offre une liberté totale de conception et des garanties maximales.
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
            <h2 className="mb-6">Notre processus de A à Z</h2>
            <p className="text-lead">
              De la première rencontre à la remise des clés, chaque étape est planifiée et transparente.
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
            <h2 className="!text-white mb-8">Prix construction villa Toulouse 2026</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-8 backdrop-blur-sm">
                <div className="text-4xl font-light mb-4">1 800 € - 2 500 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Villa standard</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Finitions qualité</li>
                  <li>• Normes RE2020</li>
                  <li>• Garanties incluses</li>
                </ul>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm border-2 border-white/30">
                <div className="text-4xl font-light mb-4">2 500 € - 3 200 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Villa premium</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Finitions haut de gamme</li>
                  <li>• Domotique intégrée</li>
                  <li>• Matériaux premium</li>
                </ul>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-sm">
                <div className="text-4xl font-light mb-4">3 200 € - 4 000 €</div>
                <div className="text-sm text-white/70 mb-6">HT / m²</div>
                <h4 className="text-lg font-medium mb-3">Villa d\'exception</h4>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Architecture signature</li>
                  <li>• Finitions luxe</li>
                  <li>• Équipements exclusifs</li>
                </ul>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              *Prix indicatifs TTC incluant tous les corps de métiers, hors terrain et frais de notaire. Devis
              personnalisé gratuit sur demande.
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
              <h2 className="mb-6">Démarrons votre projet ensemble</h2>
              <p className="text-lead">
                Recevez votre devis personnalisé sous 48h. Premier rendez-vous gratuit et sans engagement.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm">
              <ContactForm />
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-stone-600 mb-4">Besoin d\'un conseil immédiat ?</p>
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
                href="/renovation-maison-toulouse"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Rénovation maison</h4>
                <p className="text-sm text-stone-600">Transformer l\'existant en lieu d\'exception</p>
              </Link>
              <Link
                href="/extension-maison-toulouse"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Extension maison</h4>
                <p className="text-sm text-stone-600">Gagner de l\'espace sans déménager</p>
              </Link>
              <Link
                href="/projets"
                className="p-6 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <h4 className="font-medium mb-2">Nos réalisations</h4>
                <p className="text-sm text-stone-600">200+ villas construites à Toulouse</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
