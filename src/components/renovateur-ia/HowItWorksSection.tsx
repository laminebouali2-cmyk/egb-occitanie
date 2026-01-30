"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Decrivez votre projet",
    description: "Indiquez le type de renovation, la surface et vos attentes. Notre IA pose les bonnes questions pour bien comprendre vos besoins.",
  },
  {
    number: "02",
    title: "Recevez une estimation",
    description: "En quelques secondes, obtenez une fourchette de prix realiste avec le detail des postes de depenses.",
  },
  {
    number: "03",
    title: "Affinez votre projet",
    description: "Explorez differentes options, comparez les materiaux et ajustez votre budget selon vos priorites.",
  },
  {
    number: "04",
    title: "Passez a l'action",
    description: "Telechargez votre dossier complet et connectez-vous avec des artisans qualifies pres de chez vous.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="rnv-how-it-works" ref={ref}>
      <div className="rnv-container">
        {/* Section header */}
        <motion.div
          className="rnv-section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Comment ca marche</span>
          <h2 className="section-title">
            De l&apos;idee au projet en 4 etapes
          </h2>
          <p className="section-subtitle">
            Un processus simple et rapide pour planifier votre renovation en toute serenite.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="rnv-steps">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="rnv-step"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
