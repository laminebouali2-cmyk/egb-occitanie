import { SITE } from "@/lib/constants";
import { averageRating, reviewCount } from "@/lib/reviews";
import { Phone, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="lg:col-span-7">
            {/* Google rating badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 mb-8">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(averageRating)
                        ? "fill-star text-star"
                        : "text-white/30"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">
                {averageRating}/5 sur Google
              </span>
              <span className="text-white/40">·</span>
              <span className="text-sm text-white/60">
                {reviewCount} avis
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] tracking-tight">
              Pare-brise fissuré
              <br />
              dans les Yvelines ?
              <br />
              <span className="text-primary-300">On vient à vous.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Intervention rapide à domicile. Prise en charge assurance
              directe. Devis gratuit en 2 minutes.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                <Phone size={20} />
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
              >
                Demander un devis
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust micro-badges */}
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Prise en charge assurance",
                "Intervention sous 48h",
                "Garantie 2 ans",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <svg
                    className="h-4 w-4 text-success shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual element */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative">
              {/* Abstract shape / placeholder for hero image */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-400/20 to-primary-600/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-12 h-12 text-white/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5h17.25a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-.375m-17.25 0h17.25"
                      />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm font-medium">
                    Photo d&apos;intervention
                  </p>
                  <p className="text-white/25 text-xs mt-1">
                    À remplacer par photo réelle
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Intervention mobile
                </div>
                <div className="text-2xl font-bold text-primary-700 mt-1">
                  &lt; 48h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
