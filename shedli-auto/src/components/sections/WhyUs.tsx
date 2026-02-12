"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { Phone } from "lucide-react";

const advantages = [
  { title: "Intervention mobile", description: "Domicile, bureau, parking — vous ne bougez pas." },
  { title: "Sous 24–48h", description: "Intervention rapide. Remplacement en 1 heure." },
  { title: "0 € d'avance", description: "Dossier assurance géré intégralement." },
  { title: "Garantie 2 ans", description: "Vitrages certifiés normes européennes." },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/technician.jpg"
                alt="Technicien pare-brise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4">
              Pourquoi nous choisir
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text tracking-tight leading-snug">
              Le spécialiste qui vient à vous
            </h2>
            <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-md">
              Pas de déplacement, pas de salle d&apos;attente.
              On gère tout pour que vous n&apos;ayez rien à faire.
            </p>

            <div className="mt-10 space-y-6">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-text">
                      {adv.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-text-muted leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-lg bg-text px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                <Phone size={16} />
                Appeler
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
