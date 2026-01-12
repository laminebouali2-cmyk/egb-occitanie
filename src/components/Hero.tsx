"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-surface)]">
        {/* Placeholder for video/image - Using gradient for now */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #f0f0f0 100%)",
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Overline */}
          <p
            className={`text-overline mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Construction & Bâtiment
          </p>

          {/* Main Headline */}
          <h1
            className={`text-[var(--color-primary)] mb-8 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nous construisons
            <br />
            <span className="text-[var(--color-secondary)]">
              ce qui dure
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lead max-w-xl mb-12 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Entreprise générale de bâtiment en Occitanie. Expertise technique,
            maîtrise des délais, excellence d&apos;exécution.
          </p>

          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/projets" className="btn btn-primary">
              Découvrir nos projets
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[var(--color-muted)] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-[var(--color-border)] relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-[var(--color-primary)]"
              style={{
                height: "50%",
                animation: "scrollIndicator 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollIndicator {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </section>
  );
}
