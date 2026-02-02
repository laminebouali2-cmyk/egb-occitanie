import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Extension Maison Toulouse | Agrandissement & Surélévation - EGB Occitanie',
  description:
    'Extension maison à Toulouse : agrandissement latéral, surélévation, véranda. Gagnez de l\'espace sans déménager. Maître d\'œuvre spécialisé. Devis gratuit.',
  openGraph: {
    title: 'Extension Maison Toulouse | EGB Occitanie',
    description:
      'Agrandissez votre maison avec EGB Occitanie. Extension sur-mesure, surélévation, véranda à Toulouse et Occitanie.',
    url: 'https://egb-occitanie.fr/services/extension-maison',
  },
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Aucun déménagement',
    description: 'Pas de frais d\'agence, pas de déménageurs, pas d\'école à changer. Vous restez chez vous pendant que nous créons votre nouvel espace.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Cohérence architecturale',
    description: 'L\'extension se fond dans l\'existant ou affirme un contraste contemporain assumé : à vous de choisir le style qui vous parle.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Rentabilité immédiate',
    description: 'Un m² créé coûte souvent moins cher qu\'un m² acheté. Votre bien prend de la valeur dès la réception des travaux.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Permis simplifié',
    description: 'Déclaration préalable (DP) si moins de 20m², permis de construire au-delà. Nous gérons toutes les démarches administratives.',
  },
];

const extensionTypes = [
  {
    title: 'Extension latérale',
    description: 'Agrandissement horizontal : salon, cuisine, chambre. Gain d\'espace immédiat sur votre terrain.',
    priceRange: '1 800 - 2 500€ HT/m²',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=600',
  },
  {
    title: 'Surélévation / Étage',
    description: 'Gagner de l\'espace en hauteur sans perdre de jardin. Chambres, suite parentale, bureau.',
    priceRange: '2 200 - 3 000€ HT/m²',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600',
  },
  {
    title: 'Véranda / Extension vitrée',
    description: 'Espace lumineux entre intérieur et extérieur. Salle à manger, jardin d\'hiver, bureau.',
    priceRange: '1 500 - 2 200€ HT/m²',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=600',
  },
  {
    title: 'Aménagement combles',
    description: 'Transformer vos combles perdus en surface habitable. Chambres, salle de jeux, espace détente.',
    priceRange: '1 200 - 1 800€ HT/m²',
    image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=600',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Étude de faisabilité',
    description: 'Visite technique : analyse structure existante, emprise au sol disponible, règles d\'urbanisme (PLU). Étude des possibilités d\'extension.',
    duration: '1-2 semaines',
  },
  {
    number: '02',
    title: 'Conception & autorisation',
    description: 'Plans d\'architecte, intégration architecturale (harmonie ou contraste). Dépôt DP ou PC selon surface. Obtention autorisation.',
    duration: '2-3 mois',
  },
  {
    number: '03',
    title: 'Préparation chantier',
    description: 'Repérage réseaux, préparation accès, commande matériaux. Planning travaux détaillé avec jalons.',
    duration: '2-3 semaines',
  },
  {
    number: '04',
    title: 'Construction extension',
    description: 'Fondations, ossature, élévation, raccordement à l\'existant, toiture, menuiseries, isolation, finitions. Suivi hebdomadaire.',
    duration: '2-5 mois selon surface',
  },
  {
    number: '05',
    title: 'Livraison clé en main',
    description: 'Réception travaux, levée réserves, nettoyage, remise des clés. Vous profitez de vos m² supplémentaires.',
    duration: '1-2 semaines',
  },
];

const faqs = [
  {
    question: 'Quelle surface peut-on ajouter sans permis de construire ?',
    answer: 'Jusqu\'à 20m² d\'emprise au sol ou de surface de plancher, une simple déclaration préalable (DP) suffit. Au-delà de 20m², permis de construire obligatoire. Si votre maison dépasse 150m² après extension, architecte obligatoire. Nous gérons toutes les démarches.',
  },
  {
    question: 'Quel est le prix au m² d\'une extension ?',
    answer: 'Extension latérale traditionnelle : 1 800 - 2 500€ HT/m². Surélévation : 2 200 - 3 000€ HT/m². Véranda : 1 500 - 2 200€ HT/m². Combles : 1 200 - 1 800€ HT/m². Prix variable selon finitions, contraintes techniques, accès chantier. Devis détaillé gratuit.',
  },
  {
    question: 'Peut-on rester dans la maison pendant l\'extension ?',
    answer: 'Oui dans la majorité des cas. Nous isolons le chantier de votre espace de vie. Gêne limitée (bruit, poussière) surtout en phase finitions et raccordement. Pour une surélévation, 1-2 semaines de gêne lors de l\'ouverture de la toiture.',
  },
  {
    question: 'Combien de temps pour réaliser une extension ?',
    answer: 'Extension 20m² : 2-3 mois travaux. Extension 40m² : 3-4 mois. Surélévation complète : 4-5 mois. Ajoutez 2-3 mois pour obtention permis de construire si nécessaire. Planning précis fourni dès validation du projet.',
  },
  {
    question: 'L\'extension valorise-t-elle vraiment mon bien ?',
    answer: 'Oui, immédiatement. Un m² créé coûte entre 1 500€ et 3 000€ selon type. Un m² habitable à Toulouse vaut 3 000€ à 5 000€ en moyenne (plus dans quartiers prisés). Vous créez de la valeur instantanée. Plus-value à la revente garantie.',
  },
  {
    question: 'Peut-on créer un étage sur une maison plain-pied ?',
    answer: 'Tout dépend de la structure existante (fondations, murs porteurs). Nous faisons une étude structurelle avec bureau d\'études. Si fondations insuffisantes, renforcement possible. Dans 80% des cas, surélévation faisable avec adaptations.',
  },
  {
    question: 'Extension en bois ou traditionnelle ?',
    answer: 'Extension ossature bois : plus rapide (préfabrication), léger (moins de contraintes fondations), écologique, isolation performante. Coût similaire à extension traditionnelle. Contraintes PLU/ABF parfois (intégration visuelle). Nous vous conseillons selon votre projet.',
  },
  {
    question: 'Faut-il refaire l\'isolation de toute la maison ?',
    answer: 'Non, seulement l\'extension doit être aux normes actuelles (RE2020). Mais c\'est l\'occasion de revoir l\'isolation existante, surtout au niveau du raccordement (ponts thermiques). Nous vous conseillons sur l\'opportunité d\'une isolation globale.',
  },
];

export default function ExtensionMaisonPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        overline="Extension maison"
        title="Grandir"
        subtitle="sans partir"
        description="Vous aimez votre quartier, votre jardin, vos voisins. Mais il vous manque une chambre, un bureau, une véranda.<br />L'extension, c'est agrandir votre vie sans tout recommencer."
        backgroundImage="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070"
        primaryCTA={{
          text: 'Étudier mon extension',
          href: '#contact',
        }}
        secondaryCTA={{
          text: 'Voir nos extensions',
          href: '/projets',
        }}
      />

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Pourquoi choisir l'extension plutôt que le déménagement ?</h2>
            <p className="text-xl text-stone-700 leading-relaxed mb-6">
              Votre famille s'agrandit, vous télétravaillez, vous voulez une suite parentale, un espace détente...
              L'extension vous permet de gagner l'espace qui vous manque sans quitter votre maison, votre quartier,
              vos habitudes.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              C'est souvent plus rentable qu'acheter plus grand ailleurs : pas de frais d'agence (7-10%), pas de
              frais de notaire (7-8%), pas de déménagement, pas de travaux de remise aux normes dans l'ancien. Vous
              créez exactement l'espace dont vous avez besoin, où vous le souhaitez.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Les avantages de l'extension</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Gagnez de l'espace, valorisez votre bien, restez chez vous. L'extension combine les avantages du
              neuf et de l'ancien.
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

      {/* Types d'extension */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Types d'extension que nous réalisons</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Extension latérale, surélévation, véranda, combles : nous adaptons la solution à votre terrain,
              votre maison, votre budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {extensionTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[16/10] overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${type.image}')` }}
                  />
                </div>
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
            <h2 className="mb-6">Notre processus d'extension</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              De l'étude de faisabilité à la livraison clé en main, nous gérons votre projet d'extension de A à Z.
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

      {/* Calculateur */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="!text-white mb-6">Estimez le coût de votre extension</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Utilisez notre calculateur pour obtenir une estimation budgétaire personnalisée de votre projet d'extension.
            </p>
            <Link
              href="/calculateur-prix"
              className="btn btn-primary !bg-white !text-stone-900 hover:!bg-stone-100 inline-flex items-center gap-3"
            >
              <span>Calculer le prix de mon extension</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Questions fréquentes sur l'extension de maison</h2>
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
              <h2 className="mb-6">Étudier votre projet d'extension</h2>
              <p className="text-xl text-stone-600">
                Étude de faisabilité gratuite. Nous visitons votre maison, analysons les possibilités, vous conseillons.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 border border-stone-200">
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
            <h3 className="text-2xl font-medium mb-6">Extensions à Toulouse et Occitanie</h3>
            <p className="text-white/80 mb-8">
              Nous réalisons des extensions de maison à Toulouse et dans toute l'agglomération :
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
                'Plaisance',
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
