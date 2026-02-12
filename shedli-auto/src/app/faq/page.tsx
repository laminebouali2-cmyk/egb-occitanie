import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { faqItems } from "@/lib/faq";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ Pare-Brise | Prix, Durée, Assurance — Shedli Auto",
  description:
    "Trouvez les réponses à vos questions sur le remplacement de pare-brise : prix, durée, prise en charge assurance, intervention mobile dans les Yvelines.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
              Questions fréquentes
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur le remplacement et la réparation
              de pare-brise.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-b border-border py-6${index === 0 ? " pt-0" : ""}${index === faqItems.length - 1 ? " border-0" : ""}`}
              >
                <h3 className="text-lg font-semibold text-text">
                  {item.question}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-surface-soft rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-text">
              Vous avez une autre question ?
            </h2>
            <p className="mt-2 text-text-secondary">
              Appelez-nous, on vous répond en moins de 2 minutes.
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
    </>
  );
}
