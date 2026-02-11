import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { reviews, averageRating, reviewCount } from "@/lib/reviews";
import { Star, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Avis Clients — Shedli Auto | Pare-Brise Yvelines",
  description:
    "Découvrez les avis de nos clients sur le remplacement de pare-brise à domicile dans les Yvelines. Note moyenne et témoignages vérifiés Google.",
  alternates: {
    canonical: "/avis",
  },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-star text-star"
              : "fill-none text-text-muted"
          }
        />
      ))}
    </div>
  );
}

function formatDateFr(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function AvisPage() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Ce que nos clients disent de nous
          </h1>
        </div>

        {/* Summary bar */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={22}
                className={
                  i < Math.round(averageRating)
                    ? "fill-star text-star"
                    : "fill-none text-text-muted"
                }
              />
            ))}
          </div>
          <span className="text-xl font-bold text-text">
            {averageRating}/5
          </span>
          <span className="text-text-secondary">
            — {reviewCount} avis Google
          </span>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-border bg-white p-7"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-text leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-5">
                <p className="font-semibold text-sm text-text">
                  {review.author}
                </p>
                {review.vehicle && (
                  <p className="text-xs text-text-muted mt-0.5">
                    {review.vehicle}
                  </p>
                )}
                <p className="text-xs text-text-muted mt-0.5">
                  {formatDateFr(review.date)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-surface-soft rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-text">
            Vous aussi, faites confiance à Shedli Auto
          </h2>
          <p className="mt-2 text-text-secondary">
            Appelez-nous pour un devis gratuit et une intervention rapide.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
