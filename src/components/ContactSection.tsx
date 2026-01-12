"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-[var(--color-primary)] text-white"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p
              className={`text-overline !text-white/50 mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Votre projet
            </p>
            <h2
              className={`!text-white mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Parlons de votre
              <br />
              prochain projet
            </h2>
            <p
              className={`text-lg text-white/70 max-w-md mb-10 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Une question, un projet en tête ? Notre équipe est disponible pour
              échanger et vous accompagner.
            </p>

            {/* Contact Info */}
            <div
              className={`space-y-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white/70"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+33500000000"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  05 00 00 00 00
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white/70"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                </div>
                <a
                  href="mailto:contact@egb-occitanie.fr"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  contact@egb-occitanie.fr
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div
            className={`bg-white p-8 md:p-12 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
              Démarrer un projet
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Décrivez votre projet et nous vous recontacterons sous 24 heures
              pour en discuter.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary w-full md:w-auto"
            >
              Nous contacter
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
