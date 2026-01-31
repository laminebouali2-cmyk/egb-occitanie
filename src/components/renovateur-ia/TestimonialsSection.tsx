"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "J'ai obtenu une estimation en 5 minutes au lieu de passer des heures a chercher des devis. Le budget final etait tres proche de l'estimation.",
    author: "Marie L.",
    role: "Proprietaire a Toulouse",
    project: "Renovation cuisine",
    rating: 5,
  },
  {
    quote: "Tres utile pour avoir une premiere idee du budget avant de contacter des artisans. Ca m'a permis de mieux negocier.",
    author: "Pierre D.",
    role: "Investisseur immobilier",
    project: "Renovation appartement",
    rating: 5,
  },
  {
    quote: "L'IA pose les bonnes questions et donne des conseils pertinents sur les materiaux. Un vrai gain de temps !",
    author: "Sophie M.",
    role: "Proprietaire a Blagnac",
    project: "Salle de bain",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Projets estimes" },
  { value: "98%", label: "Satisfaction client" },
  { value: "< 3min", label: "Temps moyen" },
  { value: "15%", label: "Economies realisees" },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="rnv-testimonials" ref={ref}>
      <div className="rnv-container">
        {/* Stats */}
        <motion.div
          className="rnv-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          className="rnv-section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-label">Temoignages</span>
          <h2 className="section-title">
            Ils ont planifie leur renovation avec nous
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="rnv-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="rnv-testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Rating */}
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role}</span>
                  <span className="author-project">{testimonial.project}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
