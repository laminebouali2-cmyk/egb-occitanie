"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";

export function ServiceZone() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-36 bg-primary-700 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0062FF, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0062FF, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* ——— Left — Content ——— */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-300 bg-white/[0.06] rounded-full px-4 py-1.5 mb-6">
              Zone d&apos;intervention
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Partout dans
              <br />
              les Yvelines.
            </h2>

            <p className="mt-5 text-lg text-white/50 leading-relaxed max-w-md">
              De Versailles à Mantes-la-Jolie, de Saint-Germain-en-Laye à
              Rambouillet. On se déplace partout dans le 78.
            </p>

            {/* Cities cloud */}
            <div className="mt-10 flex flex-wrap gap-2">
              {SITE.zone.cities.map((city, i) => (
                <motion.span
                  key={city}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.03,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/[0.12] hover:text-white"
                >
                  <MapPin size={12} className="text-primary-300" />
                  {city}
                </motion.span>
              ))}
            </div>

            <p className="mt-6 text-sm text-white/30">
              Votre ville n&apos;est pas listée ?{" "}
              <a
                href={SITE.phoneHref}
                className="text-primary-300 font-medium hover:text-primary-200 transition-colors"
              >
                Appelez-nous
              </a>
              , on couvre probablement votre secteur.
            </p>
          </motion.div>

          {/* ——— Right — Map ——— */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168000!2d1.85!3d48.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e688e3869a57e7%3A0x40b82c3688c5580!2sYvelines!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.7) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention Shedli Auto — Yvelines"
                className="w-full h-full"
              />
            </div>

            {/* Floating badge on map */}
            <motion.div
              className="absolute -bottom-4 left-6 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-lg text-sm font-bold text-primary-700 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
