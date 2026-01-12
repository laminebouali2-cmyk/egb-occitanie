"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Écoute",
    description:
      "Nous analysons votre projet, vos contraintes et vos attentes pour définir un cahier des charges précis.",
  },
  {
    number: "02",
    title: "Étude",
    description:
      "Nos équipes élaborent une solution technique et financière adaptée, dans le respect des normes et réglementations.",
  },
  {
    number: "03",
    title: "Réalisation",
    description:
      "Pilotage rigoureux du chantier, coordination des corps de métiers, suivi qualité et respect des délais.",
  },
  {
    number: "04",
    title: "Livraison",
    description:
      "Réception des travaux, vérifications complètes et accompagnement jusqu'à la parfaite satisfaction.",
  },
];

export function Methode() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-[var(--color-background)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p
            className={`text-overline mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Notre méthode
          </p>
          <h2
            className={`mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Un processus clair,
            <br />
            des résultats prévisibles
          </h2>
          <p
            className={`text-lead transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Chaque projet suit une méthodologie éprouvée qui garantit qualité,
            transparence et sérénité.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-[var(--color-border)]" />
              )}

              {/* Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-light text-[var(--color-muted)]">
                  {step.number}
                </span>
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-[var(--color-primary)] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
