"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { reviews, averageRating, reviewCount } from "@/lib/reviews";
import { Star } from "lucide-react";
import Link from "next/link";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating ? "fill-star text-star" : "fill-border/50 text-border"
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

export function ReviewsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const featured = reviews.slice(0, 3);

  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 bg-primary-50 rounded-full px-4 py-1.5 mb-6">
                Avis clients
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight leading-[1.1]">
                Ils nous font
                <br />
                <span className="text-text-secondary font-semibold">confiance.</span>
              </h2>
            </div>

            {/* Google rating summary */}
            <div className="flex items-center gap-4 lg:pb-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className={
                      i < Math.round(averageRating)
                        ? "fill-star text-star"
                        : "fill-border/50 text-border"
                    }
                  />
                ))}
              </div>
              <div>
                <span className="text-2xl font-extrabold text-text">
                  {averageRating}
                </span>
                <span className="text-sm text-text-muted ml-1">/5</span>
              </div>
              <span className="text-sm text-text-muted">
                {reviewCount} avis Google
              </span>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <div className="group h-full rounded-2xl bg-white border border-border/60 p-7 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] hover:border-border hover:-translate-y-1">
                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Quote */}
                <blockquote className="mt-5 text-base text-text leading-relaxed line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 pt-5 border-t border-border/40">
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-600">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-text">
                        {review.author}
                      </div>
                      <div className="text-xs text-text-muted">
                        {review.vehicle && `${review.vehicle} · `}
                        {timeAgo(review.date)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/avis"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors"
          >
            Voir tous les avis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
