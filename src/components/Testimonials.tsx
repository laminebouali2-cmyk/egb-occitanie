'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie & Jean Martin',
    project: 'Villa 280m² Balma',
    category: 'Construction neuve',
    year: '2024',
    rating: 5,
    quote:
      "EGB Occitanie a transformé notre rêve en réalité. De la conception à la livraison, chaque étape a été gérée avec un professionnalisme exemplaire. Aucun retard, budget respecté, et une qualité de finition qui dépasse nos attentes.",
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'Marc Dubois',
    project: 'Rénovation corps de ferme 450m²',
    category: 'Rénovation',
    year: '2024',
    rating: 5,
    quote:
      "Nous cherchions une entreprise capable de comprendre l'âme de notre bâtisse du XIXe siècle tout en la modernisant. EGB a su préserver le charme de l'ancien avec le confort du neuf. Un travail remarquable.",
    avatar: 'MD',
  },
  {
    id: 3,
    name: 'Isabelle Roux',
    project: 'Extension 120m² Castanet',
    category: 'Extension',
    year: '2023',
    rating: 5,
    quote:
      "Notre maison nous convenait parfaitement, mais il nous manquait de l'espace. L'extension réalisée par EGB s'intègre harmonieusement à l'existant. Nous avons gagné en confort sans déménager. Merci pour votre écoute et votre réactivité.",
    avatar: 'IR',
  },
  {
    id: 4,
    name: 'Pierre Lacombe',
    project: 'Division immeuble Toulouse Centre',
    category: 'Division',
    year: '2023',
    rating: 5,
    quote:
      "La division de mon immeuble en copropriété nécessitait une expertise technique et juridique pointue. EGB a géré l'intégralité du projet, de la faisabilité aux travaux de mise en conformité. Un accompagnement complet et transparent.",
    avatar: 'PL',
  },
  {
    id: 5,
    name: 'Claire & Thomas Bernard',
    project: 'Maison passive 180m² Castres',
    category: 'Construction neuve',
    year: '2023',
    rating: 5,
    quote:
      "Nous voulions une maison à très haute performance énergétique. EGB nous a proposé une approche innovante avec des matériaux biosourcés. Résultat : des factures d'énergie divisées par 4 et un confort incomparable.",
    avatar: 'CB',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 md:p-10 border border-stone-200 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-stone-200">
        <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-white font-medium text-sm">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-medium text-stone-900">{testimonial.name}</p>
          <p className="text-sm text-stone-600">
            {testimonial.project}
          </p>
          <p className="text-xs text-stone-500 mt-1">
            {testimonial.category} • {testimonial.year}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-stone-50">
      <div className="container">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-overline mb-4 block">Témoignages clients</span>
          <h2 className="mb-6">
            Ce que disent
            <br />
            nos clients
          </h2>
          <p className="text-lead">
            La satisfaction de nos clients est notre meilleure référence. Découvrez leurs
            expériences et les projets que nous avons réalisés ensemble.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="font-medium text-stone-900">5/5</span>
            </div>
            <span className="text-sm text-stone-600">
              Noté 5 étoiles sur Google Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
