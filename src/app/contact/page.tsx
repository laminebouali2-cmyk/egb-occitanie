import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Démarrer votre projet de construction",
  description:
    "Contactez EGB Occitanie pour votre projet de construction, rénovation ou extension. Devis gratuit et réponse sous 24h.",
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
              Une question, un projet en tête ? Notre équipe est disponible pour
              échanger et vous accompagner dans votre réflexion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 md:pb-32 bg-[var(--color-background)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div className="animate-fade-in-up delay-300">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-8">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up delay-400">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-8">
                Coordonnées
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">
                    Adresse
                  </h3>
                  <address className="not-italic text-[var(--color-text-secondary)] leading-relaxed">
                    3 Rue de l'équipement
                    <br />
                    31320 Castanet-Tolosan
                    <br />
                    France
                  </address>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+33665015882"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    06 65 01 58 82
                  </a>
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

                {/* Hours */}
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">
                    Horaires
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Lundi – Vendredi : 8h00 – 18h00
                  </p>
                </div>

                {/* Response Time */}
                <div className="pt-8 border-t border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Nous nous engageons à répondre à toutes les demandes sous
                    24 heures ouvrées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-[var(--color-surface)]">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #e5e5e5 0%, #d4d4d4 50%, #e5e5e5 100%)",
          }}
        />
      </section>
    </>
  );
}
