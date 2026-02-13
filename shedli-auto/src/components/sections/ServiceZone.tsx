"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/constants";
import { MapPin } from "lucide-react";

const MOBILE_CITY_LIMIT = 10;

export function ServiceZone() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const allCities = SITE.zone.cities;
  const remaining = allCities.length - MOBILE_CITY_LIMIT;

  return (
    <section className="py-16 lg:py-32 bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-3 lg:mb-4">
              Zone d&apos;intervention
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-[2.25rem] font-semibold text-text tracking-tight leading-[1.15]">
              Partout dans les Yvelines.
            </h2>
            <p className="mt-3 text-sm lg:text-base text-text-secondary leading-relaxed max-w-md">
              De Versailles à Mantes-la-Jolie, de Saint-Germain-en-Laye à
              Rambouillet. On se déplace dans tout le 78.
            </p>

            {/* Cities — mobile: limited, desktop: all */}
            <div className="mt-6 lg:mt-8">
              {/* Mobile */}
              <div className="flex flex-wrap gap-1.5 lg:hidden">
                {allCities.slice(0, MOBILE_CITY_LIMIT).map((city, i) => (
                  <motion.span
                    key={city}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.03, ease: [0.25, 0.1, 0.25, 1] as const }}
                    className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-2 py-1.5 text-[11px] text-text-secondary"
                  >
                    <MapPin size={9} className="text-text-muted" />
                    {city}
                  </motion.span>
                ))}
                {remaining > 0 && (
                  <span className="inline-flex items-center rounded-lg border border-primary-100 bg-primary-50/50 px-2 py-1.5 text-[11px] font-medium text-primary-600">
                    +{remaining} villes
                  </span>
                )}
              </div>

              {/* Desktop */}
              <div className="hidden lg:flex flex-wrap gap-1.5">
                {allCities.map((city, i) => (
                  <motion.span
                    key={city}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.03, ease: [0.25, 0.1, 0.25, 1] as const }}
                    className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-2.5 py-1.5 text-xs text-text-secondary"
                  >
                    <MapPin size={10} className="text-text-muted" />
                    {city}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[11px] lg:text-xs text-text-muted">
              Votre commune n&apos;est pas listée ?{" "}
              <a
                href={SITE.phoneHref}
                className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
              >
                Appelez-nous
              </a>
              , on couvre probablement votre secteur.
            </p>
          </motion.div>

          {/* Map — hidden on mobile for performance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden border border-border aspect-square bg-surface-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168000!2d1.85!3d48.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e688e3869a57e7%3A0x40b82c3688c5580!2sYvelines!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention Shedli Auto — Yvelines (78)"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
