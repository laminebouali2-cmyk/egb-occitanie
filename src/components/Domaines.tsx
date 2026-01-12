"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const domains = [
  {
    id: "construction",
    title: "Construction neuve",
    description:
      "De la maison individuelle aux bâtiments tertiaires, nous concevons et réalisons des constructions durables et performantes.",
    href: "/expertise#construction",
  },
  {
    id: "renovation",
    title: "Rénovation",
    description:
      "Restructuration complète ou rénovation partielle, nous redonnons vie à vos espaces avec exigence et savoir-faire.",
    href: "/expertise#renovation",
  },
  {
    id: "extension",
    title: "Extension",
    description:
      "Agrandissement harmonieux de votre habitat, dans le respect de l'existant et des normes actuelles.",
    href: "/expertise#extension",
  },
];

export function Domaines() {
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
    <section
      ref={sectionRef}
      className="section bg-[var(--color-surface)]"
    >
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
            Nos domaines
          </p>
          <h2
            className={`mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Une expertise complète
          </h2>
          <p
            className={`text-lead transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Trois domaines d&apos;intervention, une même exigence de qualité.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]">
          {domains.map((domain, index) => (
            <Link
              key={domain.id}
              href={domain.href}
              className={`group bg-[var(--color-background)] p-8 md:p-12 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Number */}
              <span className="text-6xl md:text-7xl font-light text-[var(--color-border)] group-hover:text-[var(--color-muted)] transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-medium text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                  {domain.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                  {domain.description}
                </p>
                <span className="link-arrow text-[var(--color-primary)] text-sm">
                  En savoir plus
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
