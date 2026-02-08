'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const featuredProject = {
  title: 'Villa Contemporaine',
  category: 'Construction',
  location: 'Toulouse',
  year: '2024',
  description: 'Une villa contemporaine alliant architecture moderne et matériaux nobles. Piscine miroir, terrasses panoramiques et finitions d\'exception.',
  image: '/realisation-1.jpg',
};

const projects = [
  {
    title: 'Appartement Toulousain',
    category: 'Rénovation complète',
    location: 'Toulouse',
    image: '/realisation-2.jpg',
  },
  {
    title: 'Extension Jardin',
    category: 'Extension',
    location: 'Haute-Garonne',
    image: '/realisation-3.jpg',
  },
  {
    title: 'Mas Provençal',
    category: 'Construction',
    location: 'Occitanie',
    image: '/realisation-4.jpg',
  },
];

export function Realisations() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={sectionRef} className="section bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-stone-900" />
              <span className="text-overline">Nos Réalisations</span>
            </div>
            <h2>
              Des projets qui
              <br />
              <span className="text-stone-400">parlent d&apos;eux-mêmes</span>
            </h2>
          </div>
          <Link
            href="/projets"
            className="btn btn-secondary self-start md:self-auto"
          >
            Voir tous les projets
            <svg
              className="w-4 h-4"
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
          </Link>
        </motion.div>

        {/* Featured Project - Large */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Link href="/projets" className="group block">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Image - Takes 3 columns */}
              <div className="lg:col-span-3 relative aspect-[16/10] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{ y: imageY }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url('${featuredProject.image}')` }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content - Takes 2 columns */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 text-sm text-stone-500">
                  <span>{featuredProject.category}</span>
                  <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  <span>{featuredProject.location}</span>
                  <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  <span>{featuredProject.year}</span>
                </div>
                <h3 className="text-3xl md:text-4xl mb-6 group-hover:text-stone-600 transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-stone-500 leading-relaxed mb-8">
                  {featuredProject.description}
                </p>
                <div className="inline-flex items-center gap-3 text-stone-900 font-medium">
                  <span>Découvrir ce projet</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
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
            </div>
          </Link>
        </motion.div>

        {/* Secondary Projects - Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              <Link href="/projets" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />

                  {/* Hover State */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 bg-white text-stone-900 font-medium text-sm">
                      Voir le projet
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-stone-500 mb-2">
                    {project.category} — {project.location}
                  </p>
                  <h4 className="text-xl text-stone-900 group-hover:text-stone-600 transition-colors">
                    {project.title}
                  </h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
