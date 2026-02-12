"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, ArrowRight } from "lucide-react";

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[480px] flex items-center">
      {/* Background image */}
      <Image
        src="/images/car-dramatic.jpg"
        alt="Voiture premium"
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={80}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-950/60" />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Un impact ?
            <br />
            Une fissure ?
          </h2>

          <p className="mt-5 text-lg text-white/50 leading-relaxed">
            Un seul appel et on s&apos;occupe de tout. Intervention, assurance,
            garantie. Vous ne faites rien.
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={SITE.phoneHref}
              className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-extrabold text-primary-700 transition-all duration-300 hover:shadow-[0_20px_40px_-8px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
            >
              <Phone size={20} />
              {SITE.phone}
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/25"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
