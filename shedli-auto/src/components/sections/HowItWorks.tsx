"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Vous nous appelez",
    description:
      "Un seul appel suffit. On évalue votre situation, on vérifie votre assurance et on vous donne un devis immédiat. Gratuit, sans engagement, en 2 minutes.",
    accent: "bg-primary-500",
  },
  {
    number: "02",
    icon: MapPin,
    title: "On vient chez vous",
    description:
      "Notre technicien certifié se déplace à votre domicile, bureau ou parking avec tout le matériel professionnel. Sous 24 à 48h, à l'heure qui vous arrange.",
    accent: "bg-accent-500",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "C'est réglé",
    description:
      "Pare-brise neuf, certifié aux normes européennes, garanti 2 ans. Le dossier assurance est géré de A à Z. Vous ne faites rien.",
    accent: "bg-success",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 bg-primary-50 rounded-full px-4 py-1.5 mb-6">
            Simple et rapide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight leading-[1.1]">
            3 étapes.
            <br />
            <span className="text-text-secondary font-semibold">Votre pare-brise est neuf.</span>
          </h2>
        </motion.div>

        {/* Steps — editorial timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block" />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.2,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className={`relative flex items-start gap-8 mb-20 last:mb-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number dot on timeline */}
                <div className="hidden sm:flex absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.accent} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-xl font-extrabold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`sm:ml-24 lg:ml-0 lg:w-[calc(50%-56px)] ${
                    isEven ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:ml-auto"
                  }`}
                >
                  {/* Mobile number */}
                  <div
                    className={`sm:hidden w-12 h-12 rounded-xl ${step.accent} flex items-center justify-center mb-4`}
                  >
                    <span className="text-lg font-extrabold text-white">
                      {step.number}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      isEven ? "lg:justify-end" : ""
                    }`}
                  >
                    <step.icon
                      size={20}
                      className="text-primary-500"
                      strokeWidth={2}
                    />
                    <h3 className="text-xl sm:text-2xl font-bold text-text">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-3 rounded-2xl bg-primary-700 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-primary-800 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Phone size={20} />
            Commencer maintenant
          </a>
          <p className="mt-3 text-sm text-text-muted">
            Appel gratuit · Devis en 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
