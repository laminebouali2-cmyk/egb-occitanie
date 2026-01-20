'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const stats = [
  { value: '15+', label: 'Années d\'expertise' },
  { value: '200+', label: 'Projets réalisés' },
  { value: '98%', label: 'Clients satisfaits' },
];

export function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text Content */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-px bg-stone-900" />
              <span className="text-overline">Qui sommes-nous</span>
            </motion.div>

            <motion.h2
              className="mb-8 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              La rigueur et le savoir-faire
              <br />
              <span className="text-stone-400">au service de l&apos;exceptionnel</span>
            </motion.h2>

            <motion.div
              className="space-y-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lead">
                Depuis plus de 15 ans, nous accompagnons une clientèle exigeante dans la réalisation
                de projets d&apos;exception à Toulouse et en Occitanie.
              </p>
              <p>
                Notre approche allie expertise technique pointue et écoute attentive de vos aspirations.
                Chaque projet est unique, chaque détail compte. De la construction de votre villa
                sur-mesure à la rénovation complète de votre bien, nous mettons notre savoir-faire
                au service de votre vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/expertise" className="btn btn-text group">
                Découvrir notre approche
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
          </div>

          {/* Right - Stats & Image */}
          <div>
            {/* Image */}
            <motion.div
              className="relative aspect-[4/3] mb-12 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')`,
                }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-stone-900/10" />
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.p
                    className="text-4xl md:text-5xl font-light text-stone-900 mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-stone-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
