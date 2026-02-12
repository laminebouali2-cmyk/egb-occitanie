import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-primary-100">404</p>
        <h1 className="mt-4 text-2xl font-bold text-text">
          Page introuvable
        </h1>
        <p className="mt-3 text-text-secondary leading-relaxed">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
          >
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text transition hover:bg-surface-soft"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
