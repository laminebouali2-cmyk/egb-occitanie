"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Villa Contemporaine",
    category: "Construction neuve",
    location: "Toulouse",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
  },
  {
    title: "Rénovation Maison de Maître",
    category: "Rénovation",
    location: "Albi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
  {
    title: "Extension Bois",
    category: "Extension",
    location: "Montauban",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
  },
];

export function Maitrise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-dark section">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-overline mb-4 block">Nos réalisations</span>
            <h2>
              La preuve par
              <br />
              <span className="text-neutral-500">l'excellence</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Chaque projet témoigne de notre savoir-faire. Des constructions pensées pour durer,
              réalisées avec rigueur et passion.
            </p>
            <Link href="/projets" className="btn btn-white w-fit">
              Tous nos projets
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link href="/projets" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium flex items-center gap-2">
                      Voir le projet
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-neutral-500">{project.category}</span>
                  <h3 className="text-xl font-medium text-white mt-1">{project.title}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{project.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
