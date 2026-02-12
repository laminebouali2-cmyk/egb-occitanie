"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { reviews, averageRating, reviewCount } from "@/lib/reviews";
import { Star } from "lucide-react";
import Link from "next/link";

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < 7) return `il y a ${diffDays}j`;
  if (diffDays < 30) return `il y a ${Math.floor(diffDays / 7)} sem`;
  if (diffDays < 365) return `il y a ${Math.floor(diffDays / 30)} mois`;
  return `il y a +1 an`;
}

export function ReviewsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const featured = reviews.slice(0, 3);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-4">
              Avis clients
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text tracking-tight">
              Ils nous font confiance
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < Math.round(averageRating) ? "fill-star text-star" : "fill-border text-border"} />
              ))}
            </div>
            <span className="text-sm font-medium text-text">{averageRating}</span>
            <span className="text-xs text-text-muted">· {reviewCount} avis</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <Star key={j} size={13} className={j < review.rating ? "fill-star text-star" : "fill-border text-border"} />
                ))}
              </div>

              <blockquote className="text-sm text-text-secondary leading-relaxed line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="mt-5 pt-4 border-t border-border flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-surface-muted flex items-center justify-center text-xs font-medium text-text-muted">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-medium text-text">{review.author}</div>
                  <div className="text-[11px] text-text-muted">
                    {review.vehicle && `${review.vehicle} · `}{timeAgo(review.date)}
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
