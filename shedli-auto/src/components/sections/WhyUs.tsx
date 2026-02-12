"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, ShieldCheck, Clock, Award, CreditCard, Wrench } from "lucide-react";

const guarantees = [
  {
    icon: Truck,
    title: "Intervention mobile",
    description: "On vient chez vous, à votre bureau ou sur votre parking. Vous ne vous déplacez pas.",
  },
  {
    icon: Clock,
    title: "Sous 24–48h",
    description: "Intervention rapide. Remplacement effectué en 1 heure sur place.",
  },
  {
    icon: CreditCard,
    title: "0 € à payer",
    description: "On gère votre dossier assurance de A à Z. Pas d'avance, pas de paperasse.",
  },
  {
    icon: Award,
    title: "Garantie 2 ans",
    description: "Vitrages certifiés conformes aux normes européennes. Qualité constructeur.",
  },
  {
    icon: ShieldCheck,
    title: "Agréé toutes assurances",
    description: "Macif, MAIF, AXA, Matmut, Groupama, MMA, Allianz… On travaille avec toutes.",
  },
  {
    icon: Wrench,
    title: "Techniciens certifiés",
    description: "Formés et expérimentés. +2 000 interventions réalisées dans les Yvelines.",
  },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 lg:py-32 bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
            Nos engagements
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-text tracking-tight leading-[1.15] max-w-lg">
            Pourquoi +2 000 conducteurs
            <br />
            nous font confiance.
          </h2>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-xl border border-border bg-white p-6 transition-shadow duration-200 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500 mb-4">
                <item.icon size={18} strokeWidth={1.8} />
              </div>
              <h3 className="text-sm font-semibold text-text">{item.title}</h3>
              <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
