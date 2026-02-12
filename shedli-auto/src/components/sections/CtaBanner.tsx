"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, ArrowRight } from "lucide-react";

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#09090b]">
      {/* Gradient accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
      />

      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug">
            Un impact ? Une fissure ?
          </h2>
          <p className="mt-4 text-base text-white/40 leading-relaxed max-w-md mx-auto">
            Un seul appel et on s&apos;occupe de tout.
            Intervention, assurance, garantie.
          </p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#09090b] transition-all duration-200 hover:bg-white/90"
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] px-6 py-3 text-sm font-medium text-white/70 transition-all duration-200 hover:text-white hover:border-white/20"
            >
              Demander un devis
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
