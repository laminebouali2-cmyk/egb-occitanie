"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function Maitrise() {
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

  const stats = [
    { value: "15+", label: "Années d'expérience" },
    { value: "200+", label: "Projets réalisés" },
    { value: "100%", label: "Projets livrés" },
  ];

  return (
    <section ref={sectionRef} className="section bg-[var(--color-background)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/3] lg:aspect-[4/5] img-container transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Placeholder - Replace with actual project image */}
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, #d4d4d4 0%, #a3a3a3 100%)",
              }}
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-border)] hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <p
              className={`text-overline mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Notre maîtrise
            </p>

            <h2
              className={`mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              La rigueur au service
              <br />
              de vos projets
            </h2>

            <p
              className={`text-lead mb-10 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Chaque projet est une promesse tenue. De la conception à la
              livraison, nous garantissons une exécution irréprochable, des
              délais respectés et une qualité sans compromis.
            </p>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mb-10 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl md:text-4xl font-light text-[var(--color-primary)] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/projets"
              className={`link-arrow text-[var(--color-primary)] transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Voir nos réalisations
              <svg
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
