"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    id: "free",
    name: "Decouverte",
    price: "0",
    period: "",
    description: "Pour tester l'outil et obtenir une premiere estimation",
    features: [
      "3 estimations par mois",
      "Assistant IA basique",
      "Estimation budgetaire",
      "Export PDF simple",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    id: "pro",
    name: "Particulier",
    price: "19",
    period: "/mois",
    description: "Pour planifier sereinement votre projet de renovation",
    features: [
      "Estimations illimitees",
      "Assistant IA avance",
      "Planning detaille",
      "Liste materiaux complete",
      "Export PDF complet",
      "Mise en relation artisans",
      "Support prioritaire",
    ],
    cta: "Essai gratuit 14 jours",
    popular: true,
  },
  {
    id: "business",
    name: "Professionnel",
    price: "Sur mesure",
    period: "",
    description: "Pour les entreprises du batiment et agences immobilieres",
    features: [
      "Tout du plan Particulier",
      "Multi-utilisateurs",
      "API d'integration",
      "Marque blanche disponible",
      "Tableau de bord analytics",
      "Account manager dedie",
      "Formation equipe",
    ],
    cta: "Nous contacter",
    popular: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="rnv-pricing" ref={ref}>
      <div className="rnv-container">
        {/* Section header */}
        <motion.div
          className="rnv-section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Tarifs</span>
          <h2 className="section-title">
            Un plan adapte a chaque besoin
          </h2>
          <p className="section-subtitle">
            Commencez gratuitement, passez a la version Pro quand vous etes pret.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="rnv-pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`rnv-pricing-card ${plan.popular ? "popular" : ""} ${hoveredPlan === plan.id ? "hovered" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="popular-badge">Le plus populaire</div>
              )}

              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price !== "Sur mesure" && <span className="currency">EUR</span>}
                  <span className="amount">{plan.price}</span>
                  {plan.period && <span className="period">{plan.period}</span>}
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`pricing-cta ${plan.popular ? "primary" : "secondary"}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          className="pricing-note"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Tous les prix sont HT. Annulation possible a tout moment. Paiement securise.
        </motion.p>
      </div>
    </section>
  );
}
