"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CTASectionProps {
  onOpenDemo: () => void;
}

export function CTASection({ onOpenDemo }: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="rnv-cta" ref={ref}>
      <div className="rnv-container">
        <motion.div
          className="rnv-cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-title">
            Pret a planifier votre renovation ?
          </h2>
          <p className="cta-subtitle">
            Obtenez une estimation gratuite en moins de 3 minutes.
            Aucune carte bancaire requise.
          </p>
          <div className="cta-actions">
            <button onClick={onOpenDemo} className="rnv-btn-primary large">
              <span>Commencer maintenant</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="cta-note">
            Rejoint par plus de 500 proprietaires en Occitanie
          </p>
        </motion.div>
      </div>
    </section>
  );
}
