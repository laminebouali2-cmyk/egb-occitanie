"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/constants";
import { Phone, PhoneIncoming } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Vous nous appelez",
    description:
      "Évaluation immédiate de votre situation, devis gratuit et planification de l\u2019intervention. Sans engagement.",
  },
  {
    number: "02",
    title: "On vient à vous",
    description:
      "Notre technicien certifié se déplace à votre domicile, bureau ou parking avec tout le matériel. Vous ne bougez pas.",
  },
  {
    number: "03",
    title: "C'est réglé",
    description:
      "Pare-brise neuf posé dans les règles de l\u2019art. Collage garanti à vie. Dossier assurance traité — 0 € à payer.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-32">
      <div className="mx-auto w-full max-w-5xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-10 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-3 lg:mb-4">
            Comment ça marche
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-[2.25rem] font-semibold text-text tracking-tight leading-[1.15] max-w-md">
            Trois étapes.
            <br />
            Votre pare-brise est neuf.
          </h2>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Vertical line — desktop only */}
          <div className="absolute left-[19px] lg:left-[23px] top-2 bottom-2 w-[1px] bg-border hidden lg:block" />

          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="flex gap-4 lg:gap-10"
              >
                {/* Number circle */}
                <div className="relative shrink-0">
                  <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-border bg-white text-xs lg:text-sm font-semibold text-text-secondary">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-1.5">
                    <h3 className="text-base lg:text-lg font-semibold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[13px] lg:text-sm text-text-secondary leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          className="mt-10 lg:mt-14 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all duration-200 hover:bg-primary-700 hover:shadow-md active:scale-[0.98]"
          >
            <Phone size={16} strokeWidth={2.2} />
            Appeler maintenant
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:bg-surface-soft active:scale-[0.98]"
          >
            <PhoneIncoming size={16} strokeWidth={2.2} />
            Être rappelé
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
