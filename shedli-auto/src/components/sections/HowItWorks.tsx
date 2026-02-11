"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Vous nous appelez",
    description:
      "Un appel suffit. On évalue votre besoin et on vous donne un devis immédiat. Gratuit, sans engagement.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "On vient chez vous",
    description:
      "Notre technicien intervient à votre domicile, sur votre lieu de travail ou sur tout parking. Sous 24 à 48h.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "C'est réglé",
    description:
      "Pare-brise neuf, certifié, garanti 2 ans. On gère le dossier assurance de A à Z. Vous ne faites rien.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-500 mb-4">
            Simple et rapide
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-text tracking-tight leading-tight">
            Comment ça marche
          </h2>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            En 3 étapes, votre pare-brise est remplacé. Pas de déplacement, pas
            de paperasse, pas de surprise.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants}>
              <div className="relative h-full rounded-2xl bg-surface-soft p-8 lg:p-10 transition-all duration-300 hover:bg-surface-muted group">
                {/* Number */}
                <span className="text-[56px] font-bold leading-none text-primary-500/10 absolute top-6 right-8 select-none group-hover:text-primary-500/20 transition-colors">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-border/50 text-primary-500 mb-7 group-hover:shadow-md transition-shadow">
                  <step.icon size={24} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-bold text-text mb-3">
                  {step.title}
                </h3>
                <p className="relative z-10 text-base text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (desktop only, not on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
