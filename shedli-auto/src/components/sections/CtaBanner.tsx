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
            "linear-gradient(90deg, transparent, rgba(13,148,136,0.4), transparent)",
        }}
      />

      <div className="mx-auto w-full max-w-3xl px-5 lg:px-8 py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-4">
            Prêt à régler ça ?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug">
            Pare-brise fissuré ?
            <br />
            <span className="text-white/40">Réglez ça maintenant.</span>
          </h2>
          <p className="mt-4 text-base text-white/40 leading-relaxed max-w-md mx-auto">
            Un seul appel et on s&apos;occupe de tout.
            Intervention, assurance, garantie.
          </p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#09090b] transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              <Phone size={16} strokeWidth={2.2} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.1] px-6 py-3.5 text-sm font-semibold text-white/70 transition-all duration-200 hover:text-white hover:border-white/20 active:scale-[0.98]"
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
