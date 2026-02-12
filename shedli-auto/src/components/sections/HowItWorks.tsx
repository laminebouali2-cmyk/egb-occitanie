"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/constants";
import { Phone } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Vous appelez",
    description: "Un appel suffit. On évalue votre besoin et on vous donne un devis immédiat. Gratuit, sans engagement.",
  },
  {
    number: "2",
    title: "On intervient",
    description: "Notre technicien se déplace chez vous, à votre bureau ou sur votre parking. Sous 24 à 48h.",
  },
  {
    number: "3",
    title: "C'est réglé",
    description: "Pare-brise neuf, garanti 2 ans. On gère le dossier assurance de A à Z.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4">
            Comment ça marche
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text tracking-tight">
            Trois étapes. Votre pare-brise est neuf.
          </h2>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-5xl font-light text-border-strong tracking-tight mb-5">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-lg bg-text px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            <Phone size={16} />
            Commencer
          </a>
        </motion.div>
      </div>
    </section>
  );
}
