"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { reviews, averageRating, reviewCount } from "@/lib/reviews";
import { Star } from "lucide-react";
import Link from "next/link";

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diffDays < 7) return `il y a ${diffDays}j`;
  if (diffDays < 30) return `il y a ${Math.floor(diffDays / 7)} sem`;
  if (diffDays < 365) return `il y a ${Math.floor(diffDays / 30)} mois`;
  return "il y a +1 an";
}

export function ReviewsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const featured = reviews.slice(0, 3);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
              Avis clients
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-text tracking-tight leading-[1.15]">
              Ils nous font confiance.
            </h2>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Google icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={
                    i < Math.round(averageRating)
                      ? "fill-star text-star"
                      : "fill-border text-border"
                  }
                />
              ))}
            </div>
            <span className="text-sm font-medium text-text">
              {averageRating}
            </span>
            <span className="text-xs text-text-muted">
              · {reviewCount} avis
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="rounded-xl border border-border bg-white p-6 transition-shadow duration-200 hover:shadow-sm"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    className={
                      j < review.rating
                        ? "fill-star text-star"
                        : "fill-border text-border"
                    }
                  />
                ))}
              </div>

              <blockquote className="text-sm text-text-secondary leading-relaxed line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="mt-5 pt-4 border-t border-border flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-xs font-semibold text-primary-600">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-medium text-text">
                    {review.author}
                  </div>
                  <div className="text-[11px] text-text-muted">
                    {review.vehicle && `${review.vehicle} · `}
                    {timeAgo(review.date)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Link
            href="/avis"
            className="text-sm font-medium text-text-muted hover:text-text transition-colors"
          >
            Voir tous les avis &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
