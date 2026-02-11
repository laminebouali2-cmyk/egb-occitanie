interface ReviewCardProps {
  author: string;
  rating: number;
  text: string;
  date: string;
  vehicle?: string;
}

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="var(--color-star)"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function ReviewCard({
  author,
  rating,
  text,
  date,
  vehicle,
}: ReviewCardProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-7">
      {/* Stars */}
      <div className="mb-4 flex items-center gap-1" aria-label={`${rating} sur 5 etoiles`}>
        {Array.from({ length: rating }, (_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-5 text-text leading-relaxed">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Footer */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-text">{author}</span>
        <span className="text-xs text-text-muted">{date}</span>
        {vehicle && (
          <span className="text-xs text-text-secondary">{vehicle}</span>
        )}
      </div>
    </div>
  );
}
