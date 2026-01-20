'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const expertises = [
  {
    id: 'construction',
    title: 'Construction de Villas',
    subtitle: 'Créer l\'exceptionnel',
    description: 'De la parcelle vierge à la villa de vos rêves. Nous orchestrons chaque étape avec une précision d\'orfèvre pour donner vie à des demeures d\'exception.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    href: '/expertise/construction',
  },
  {
    id: 'renovation',
    title: 'Rénovation Haut de Gamme',
    subtitle: 'Sublimer l\'existant',
    description: 'Maisons de maître, appartements de prestige, bâtisses de caractère. Nous redonnons vie aux espaces avec respect du patrimoine et exigence contemporaine.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
    href: '/expertise/renovation',
  },
  {
    id: 'extension',
    title: 'Extension & Surélévation',
    subtitle: 'Agrandir avec harmonie',
    description: 'Prolonger votre espace de vie en parfaite continuité avec l\'existant. Architecture cohérente, intégration fluide, finitions irréprochables.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
    href: '/expertise/extension',
  },
];

const additionalServices = [
  {
    id: 'sinistres',
    title: 'Restauration Sinistres',
    description: 'Intervention rapide après inondation, incendie ou dégât des eaux. Remise en état complète.',
    href: '/expertise/sinistres',
  },
  {
    id: 'division',
    title: 'Division d\'Immeubles',
    description: 'Transformation de bâtiments en appartements distincts. Optimisation et valorisation patrimoniale.',
    href: '/expertise/division',
  },
];

export function Expertises() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section bg-stone-100">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-stone-400" />
            <span className="text-overline">Nos Expertises</span>
          </div>
          <h2 className="mb-6">
            Chaque projet mérite
            <br />
            <span className="text-stone-400">une attention absolue</span>
          </h2>
          <p className="text-lead">
            Que vous rêviez de construire, de transformer ou d&apos;agrandir,
            nous mettons notre savoir-faire au service de vos ambitions.
          </p>
        </motion.div>

        {/* Main Expertises - Large Cards */}
        <div className="space-y-8 mb-20">
          {expertises.map((expertise, index) => (
            <ExpertiseCard
              key={expertise.id}
              expertise={expertise}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Additional Services - Smaller Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {additionalServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-stone-200/50"
            >
              <h4 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-stone-500 mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-stone-900">
                En savoir plus
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExpertiseCard({
  expertise,
  index,
  isInView,
}: {
  expertise: (typeof expertises)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <Link
        href={expertise.href}
        className="group grid lg:grid-cols-2 bg-white overflow-hidden"
      >
        {/* Image */}
        <div className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${expertise.image}')` }}
          />
          <div className="absolute inset-0 bg-stone-900/10 transition-opacity duration-500 group-hover:opacity-0" />
        </div>

        {/* Content */}
        <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <span className="text-overline text-stone-400 mb-4">{expertise.subtitle}</span>
          <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-stone-600 transition-colors duration-300">
            {expertise.title}
          </h3>
          <p className="text-stone-500 mb-8 leading-relaxed">
            {expertise.description}
          </p>
          <div className="inline-flex items-center gap-3 text-stone-900 font-medium">
            <span>Découvrir</span>
            <span className="w-8 h-px bg-stone-300 transition-all duration-500 group-hover:w-12 group-hover:bg-stone-900" />
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
