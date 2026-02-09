import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact EGB Occitanie | Devis Gratuit Sous 48h - Toulouse & Occitanie",
  description:
    "Contactez EGB Occitanie pour votre projet de construction, r\u00e9novation ou extension \u00e0 Toulouse. Devis gratuit sous 48h, r\u00e9ponse garantie sous 24h. 15 ans d'expertise, 5+ architectes partenaires.",
  keywords: [
    "contact constructeur toulouse",
    "devis construction toulouse",
    "devis r\u00e9novation toulouse",
    "contact egb occitanie",
    "rdv constructeur toulouse",
  ],
  alternates: {
    canonical: "https://egb-occitanie.fr/contact",
  },
  openGraph: {
    title: "Contactez EGB Occitanie | Devis Gratuit Construction & R\u00e9novation",
    description:
      "Devis gratuit sous 48h pour votre projet de construction ou r\u00e9novation \u00e0 Toulouse. R\u00e9ponse garantie sous 24h.",
    url: "https://egb-occitanie.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-background)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-overline mb-4 animate-fade-in-up">Contact</p>
            <h1 className="mb-6 animate-fade-in-up delay-100">
              Parlons de
              <br />
              votre projet
            </h1>
            <p className="text-lead animate-fade-in-up delay-200">
              Laissez-nous vos coordonn&eacute;es et nous vous recontactons sous 24h
              pour &eacute;changer sur votre projet. Simple, rapide, sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 md:pb-32 bg-[var(--color-background)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form - Takes more space */}
            <div className="lg:col-span-3 animate-fade-in-up delay-300">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-2">
                Demande de rappel
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mb-8">
                Remplissez le formulaire, on vous rappelle. C&rsquo;est aussi simple que &ccedil;a.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info - Sidebar */}
            <div className="lg:col-span-2 animate-fade-in-up delay-400">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-8">
                Coordonn&eacute;es
              </h2>

              <div className="space-y-8">
                {/* Phone - Primary CTA */}
                <div
                  className="p-6"
                  style={{
                    background: 'var(--color-stone-900)',
                  }}
                >
                  <h3 className="text-sm font-medium text-white/60 mb-3">
                    Appelez-nous directement
                  </h3>
                  <a
                    href="tel:+33665015882"
                    className="text-2xl font-medium text-white hover:text-white/80 transition-colors"
                  >
                    06 65 01 58 82
                  </a>
                  <p className="text-sm text-white/40 mt-2">
                    Lundi &ndash; Vendredi : 8h00 &ndash; 18h00
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@egb-occitanie.fr"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    contact@egb-occitanie.fr
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">
                    Adresse
                  </h3>
                  <address className="not-italic text-[var(--color-text-secondary)] leading-relaxed">
                    3 Rue de l&rsquo;&eacute;quipement
                    <br />
                    31320 Castanet-Tolosan
                    <br />
                    France
                  </address>
                </div>

                {/* Guarantees */}
                <div className="pt-8 border-t border-[var(--color-border)]">
                  <h3 className="text-sm font-medium text-[var(--color-text)] mb-4">
                    Nos engagements
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--color-success)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-[var(--color-text-secondary)]">R&eacute;ponse garantie sous 24h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--color-success)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-[var(--color-text-secondary)]">Devis gratuit sous 48h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--color-success)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-[var(--color-text-secondary)]">Sans engagement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--color-success)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-[var(--color-text-secondary)]">Garantie d&eacute;cennale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with real Google Maps embed */}
      <section className="h-[400px] relative" style={{ backgroundColor: 'var(--color-stone-100)' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.8!2d1.4985!3d43.5162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMwJzU4LjMiTiAxwrAyOSc1NC42IkU!5e0!3m2!1sfr!2sfr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation EGB Occitanie - Castanet-Tolosan"
        />
      </section>
    </>
  );
}
