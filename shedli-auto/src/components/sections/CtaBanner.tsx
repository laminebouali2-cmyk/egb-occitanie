"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, PhoneIncoming } from "lucide-react";

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#09090b]">
      {/* Gradient accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
        }}
      />

      <div className="mx-auto w-full max-w-3xl px-5 lg:px-8 py-16 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p className="text-[10px] lg:text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-3 lg:mb-4">
            Ne laissez pas traîner
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white tracking-tight leading-snug">
            Chaque jour qui passe,
            <br />
            <span className="text-white/40">la fissure avance.</span>
          </h2>
          <p className="mt-3 text-[13px] lg:text-base text-white/40 leading-relaxed max-w-md mx-auto">
            Ne laissez pas un simple impact devenir un problème coûteux.
            Un appel maintenant — et on s&apos;occupe de tout.
          </p>

          <motion.div
            className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <a
              href={SITE.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#09090b] transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              <Phone size={16} strokeWidth={2.2} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.1] px-6 py-3.5 text-sm font-semibold text-white/70 transition-all duration-200 hover:text-white hover:border-white/20 active:scale-[0.98]"
            >
              <PhoneIncoming size={16} strokeWidth={2.2} />
              Être rappelé
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
