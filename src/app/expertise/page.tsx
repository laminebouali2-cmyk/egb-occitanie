'use client';

import type { Metadata } from "next";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

// export const metadata: Metadata = {
//   title: "Notre Expertise | Construction, Rénovation, Extension en Occitanie",
//   description:
//     "Maîtres d'œuvre de projets d'exception. Construction neuve, rénovation haut de gamme, extension sur-mesure, gestion de sinistres et division d'immeuble à Toulouse et en Occitanie.",
// };

const expertises = [
  {
    id: "construction",
    title: "Construction neuve",
    tagline: "Bâtir votre vision",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    description:
      "Faire construire, c'est donner vie à un rêve. C'est choisir précisément l'emplacement, l'orientation, la lumière. C'est créer un lieu qui vous ressemble, sans compromis.",
    benefits: [
      {
        title: "Zéro contrainte de l'ancien",
        text: "Pas de murs porteurs à contourner, pas de réseaux vétustes à reprendre. Tout est pensé pour vous, dès le départ.",
      },
      {
        title: "Performance énergétique optimale",
        text: "RE2020, isolation renforcée, ventilation double flux : votre confort thermique et vos factures maîtrisées sur 30 ans.",
      },
      {
        title: "Personnalisation totale",
        text: "De la taille des pièces aux finitions, chaque centimètre carré est le reflet de votre mode de vie.",
      },
    ],
    process: "Études de sol, permis de construire, coordination des corps de métiers, réception de chantier : nous prenons tout en charge. Vous suivez l'avancement, vous validez les choix, vous emménagez serein.",
    image2: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
  },
  {
    id: "renovation",
    title: "Rénovation",
    tagline: "Révéler le potentiel caché",
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
    description:
      "Rénover, c'est transformer ce qui existe en ce qui devrait être. C'est redécouvrir des volumes, apporter la lumière, moderniser sans effacer l'âme du lieu.",
    benefits: [
      {
        title: "Valorisation patrimoniale",
        text: "Une rénovation bien menée peut doubler la valeur de votre bien. Nous travaillons avec des architectes du patrimoine si besoin.",
      },
      {
        title: "Préservation du caractère",
        text: "Parquets anciens restaurés, cheminées mises en valeur, hauteur sous plafond respectée : le charme de l'ancien avec le confort du neuf.",
      },
      {
        title: "Mise aux normes discrète",
        text: "Électricité, plomberie, isolation : tout est refait, rien ne se voit. Le standing d'aujourd'hui dans l'écrin d'hier.",
      },
    ],
    process: "Diagnostic complet, études structurelles si nécessaire, phasage des travaux pour limiter les nuisances, suivi quotidien. Nous gérons l'imprévu avec réactivité.",
    image2: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070",
  },
  {
    id: "extension",
    title: "Extension",
    tagline: "Grandir sans partir",
    hero: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070",
    description:
      "Vous aimez votre quartier, votre jardin, vos voisins. Mais il vous manque une chambre, un bureau, une véranda. L'extension, c'est agrandir votre vie sans tout recommencer.",
    benefits: [
      {
        title: "Aucun déménagement",
        text: "Pas de frais d'agence, pas de déménageurs, pas d'école à changer. Vous restez chez vous pendant que nous créons votre nouvel espace.",
      },
      {
        title: "Cohérence architecturale",
        text: "L'extension se fond dans l'existant ou affirme un contraste contemporain assumé : à vous de choisir le style qui vous parle.",
      },
      {
        title: "Rentabilité immédiate",
        text: "Un m² créé coûte souvent moins cher qu'un m² acheté. Et votre bien prend de la valeur dès la réception des travaux.",
      },
    ],
    process: "Déclaration préalable ou permis de construire selon la surface, études de faisabilité, intégration harmonieuse au bâti existant, livraison clé en main.",
    image2: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070",
  },
  {
    id: "sinistres",
    title: "Gestion de sinistres",
    tagline: "Reconstruire après le choc",
    hero: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    description:
      "Dégât des eaux, incendie, fissures : un sinistre bouleverse votre quotidien. Notre rôle ? Gérer la technique, négocier avec l'assurance, vous rendre votre sérénité.",
    benefits: [
      {
        title: "Expertise rapide",
        text: "Nous intervenons sous 48h pour sécuriser, évaluer les dégâts et établir un chiffrage précis pour votre assureur.",
      },
      {
        title: "Coordination assurance",
        text: "Nous parlons le langage des experts. Nous défendons vos intérêts, nous suivons le dossier jusqu'au règlement intégral.",
      },
      {
        title: "Remise en état fidèle",
        text: "Nous reconstituons à l'identique, ou profitons de la réfection pour moderniser si vous le souhaitez. Vous retrouvez votre bien en mieux.",
      },
    ],
    process: "État des lieux contradictoire, rapport détaillé, devis négocié, travaux de reprise, suivi administratif complet. Vous vous occupez de l'essentiel : votre famille.",
    image2: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
  },
];

function ExpertiseSection({ expertise, index }: { expertise: typeof expertises[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id={expertise.id}
      ref={ref}
      className="scroll-mt-24 py-20 md:py-32 bg-white"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Image */}
          <motion.div
            className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${expertise.hero}')` }}
            />
            <div className="absolute inset-0 bg-stone-900/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            className={index % 2 === 1 ? 'lg:order-1' : ''}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-overline mb-4 block">{expertise.tagline}</span>
            <h2 className="mb-6">{expertise.title}</h2>
            <p className="text-lead mb-8">
              {expertise.description}
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {expertise.benefits.map((benefit, i) => (
            <div key={i} className="border-t-2 border-stone-900 pt-6">
              <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Process */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-medium mb-4">Comment nous procédons</h3>
            <p className="text-stone-600 leading-relaxed text-lg">
              {expertise.process}
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${expertise.image2}')` }}
            />
            <div className="absolute inset-0 bg-stone-900/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        overline="Nos expertises"
        title="Ce que nous faisons"
        subtitle="pour vous"
        description="Quatre domaines d'intervention. Une même exigence : votre satisfaction totale."
        backgroundImage="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070"
      />

      {/* Expertises Sections */}
      {expertises.map((expertise, index) => (
        <ExpertiseSection
          key={expertise.id}
          expertise={expertise}
          index={index}
        />
      ))}

      {/* Division d'immeuble Section */}
      <section className="py-20 md:py-32 bg-stone-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-overline mb-4 block">Expertise complémentaire</span>
              <h2 className="mb-6">Division d'immeuble</h2>
              <p className="text-lead">
                Vous possédez un immeuble que vous souhaitez diviser en plusieurs lots ? Nous gérons la mise en copropriété de A à Z.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Pourquoi diviser ?</h3>
                <ul className="space-y-3">
                  {[
                    'Optimiser la rentabilité locative',
                    'Faciliter la revente lot par lot',
                    'Transmettre le patrimoine en plusieurs parts',
                    'Séparer usage professionnel et personnel',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2" />
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">Notre accompagnement</h3>
                <ul className="space-y-3">
                  {[
                    'Étude de faisabilité technique et juridique',
                    'Création des lots et calcul des tantièmes',
                    'Travaux de mise en conformité si nécessaire',
                    'Constitution du règlement de copropriété',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2" />
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-stone-600 mb-6">
                Un projet de division ? Contactez-nous pour une étude personnalisée.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Discutons-en
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container text-center">
          <h2 className="!text-white mb-6">Un projet en tête ?</h2>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto mb-10">
            Que vous partiez d'une page blanche ou d'un bien existant, nous transformons
            votre intention en réalité bâtie.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn btn-primary !bg-white !text-stone-900 hover:!bg-stone-100">
              Démarrer un projet
            </Link>
            <Link href="/projets" className="btn btn-secondary !border-white !text-white hover:!bg-white hover:!text-stone-900">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
