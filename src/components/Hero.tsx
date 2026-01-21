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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y,
            backgroundImage: `url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Lighter, more elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-stone-900/10" />
      </motion.div>

      {/* Content - Centered */}
      <motion.div
        className="relative z-10 container text-center"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Overline */}
          <motion.div
            className="flex items-center gap-4 mb-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="w-12 h-px bg-white/40" />
            <span className="text-white/70 text-sm tracking-[0.25em] uppercase font-medium">
              Toulouse & Occitanie
            </span>
            <span className="w-12 h-px bg-white/40" />
          </motion.div>

          {/* Main Title - Centered & Emotional */}
          <motion.h1
            className="text-white mb-8 leading-[1.1] text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Nous construisons
            <br />
            <span className="text-white/60">ce qui dure</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Maîtres d&apos;œuvre de vos projets d&apos;exception.
            <br />
            Construction, rénovation, extension en Occitanie.
          </motion.p>

          {/* CTA Group - Premium buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-5 font-medium text-base transition-all duration-500 hover:bg-stone-50 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)] hover:-translate-y-1"
            >
              Démarrer votre projet
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
            </Link>
            <Link
              href="/projets"
              className="group inline-flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 px-10 py-5 border border-white/30 hover:border-white/60 hover:bg-white/5 backdrop-blur-sm"
            >
              <span className="font-medium">Nos réalisations</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
