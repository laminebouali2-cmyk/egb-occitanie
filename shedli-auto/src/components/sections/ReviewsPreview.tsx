"use client";

import { motion } from "framer-motion";
import { reviews, averageRating, reviewCount } from "@/lib/reviews";
import { Star } from "lucide-react";
import Link from "next/link";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={
            i < rating ? "fill-star text-star" : "fill-border text-border"
          }
        />
      ))}
    </div>
  );
}

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 7) return `il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
  if (diffDays < 30)
    return `il y a ${Math.floor(diffDays / 7)} semaine${Math.floor(diffDays / 7) > 1 ? "s" : ""}`;
  if (diffDays < 365)
    return `il y a ${Math.floor(diffDays / 30)} mois`;
  return `il y a plus d'un an`;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function ReviewsPreview() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-500 mb-4">
              Témoignages
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-text tracking-tight leading-tight">
              Ils nous font confiance
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.round(averageRating)
                      ? "fill-star text-star"
                      : "fill-border text-border"
                  }
                />
              ))}
            </div>
            <span className="text-lg font-bold text-text">
              {averageRating}/5
            </span>
            <span className="text-sm text-text-muted">
              · {reviewCount} avis Google
            </span>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((review) => (
            <motion.div key={review.id} variants={cardVariants}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.04]">
                <StarRating rating={review.rating} />

                <blockquote className="mt-5 text-base text-text leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                <div className="mt-6 pt-5 border-t border-border/50">
                  <div className="font-semibold text-sm text-text">
                    {review.author}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {review.vehicle && (
                      <>
                        <span className="text-xs text-text-muted">
                          {review.vehicle}
                        </span>
                        <span className="text-text-muted">·</span>
                      </>
                    )}
                    <span className="text-xs text-text-muted">
                      {timeAgo(review.date)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Link */}
        <div className="mt-10 text-center">
          <Link
            href="/avis"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
          >
            Voir tous les avis
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
