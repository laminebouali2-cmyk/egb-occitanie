'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-end overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y,
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Elegant warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/30 to-stone-900/10" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container pb-16 md:pb-24 lg:pb-32"
        style={{ opacity }}
      >
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="w-12 h-px bg-white/40" />
            <span className="text-white/60 text-sm tracking-[0.25em] uppercase font-medium">
              Toulouse & Occitanie
            </span>
          </motion.div>

          {/* Main Title - Editorial Style */}
          <motion.h1
            className="text-white mb-8 leading-[1.05]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            L&apos;art de bâtir
            <br />
            <span className="text-white/50">l&apos;exception</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Construction de villas, rénovations prestigieuses et extensions sur-mesure
            pour une clientèle exigeante.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 font-medium transition-all duration-500 hover:bg-stone-100 hover:shadow-2xl hover:shadow-white/20"
            >
              Discuter de votre projet
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
            </Link>
            <Link
              href="/projets"
              className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <span className="border-b border-white/30 group-hover:border-white transition-colors duration-300">
                Découvrir nos réalisations
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Side indicator - Year/Location */}
      <motion.div
        className="absolute right-8 bottom-32 hidden lg:flex flex-col items-end gap-6 text-white/40 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <span className="tracking-wider">51.923&deg;N</span>
        </div>
        <div className="w-px h-8 bg-white/20" />
        <span className="tracking-wider [writing-mode:vertical-rl] rotate-180">
          EGB OCCITANIE
        </span>
      </motion.div>
    </section>
  );
}
