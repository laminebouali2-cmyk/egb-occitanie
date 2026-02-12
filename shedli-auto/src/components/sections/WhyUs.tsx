"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { Truck, Zap, Shield, Award, Phone } from "lucide-react";

const advantages = [
  {
    icon: Truck,
    title: "On vient à vous",
    description: "Domicile, bureau, parking — vous ne bougez pas.",
  },
  {
    icon: Zap,
    title: "Sous 24–48h",
    description: "Intervention rapide, remplacement en 1 heure.",
  },
  {
    icon: Shield,
    title: "0 € d'avance",
    description: "Dossier assurance géré intégralement par nos soins.",
  },
  {
    icon: Award,
    title: "Garantie 2 ans",
    description: "Vitrages certifiés normes européennes.",
  },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-36 bg-surface-soft overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* ——— Left — Image with overlapping badge ——— */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="/images/technician.jpg"
                alt="Technicien Shedli Auto en intervention"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat badge */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:-right-8 z-10"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl bg-white px-6 py-5 shadow-xl border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-text">100%</div>
                    <div className="text-xs text-text-muted font-medium">
                      Clients satisfaits
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary-500/10 -z-10" />
          </motion.div>

          {/* ——— Right — Content ——— */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 bg-primary-50 rounded-full px-4 py-1.5 mb-6">
              Pourquoi nous
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-text tracking-tight leading-[1.1]">
              Le spécialiste
              <br />
              qui vient à vous
            </h2>

            <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-lg">
              Pas de déplacement, pas de salle d&apos;attente, pas de paperasse.
              On gère tout pour que vous n&apos;ayez qu&apos;à nous ouvrir.
            </p>

            {/* Advantages grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                    <adv.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text">{adv.title}</h3>
                    <p className="mt-0.5 text-sm text-text-secondary leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 rounded-2xl bg-primary-500 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(0,98,255,0.3)]"
              >
                <Phone size={18} />
                Appeler maintenant
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
