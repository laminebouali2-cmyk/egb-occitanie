"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[var(--color-surface-elevated)] p-8 md:p-12" style={{ border: '1px solid var(--color-border)' }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[var(--color-success)] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[var(--color-primary)]">
              Demande bien re&ccedil;ue
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              Merci pour votre confiance
            </p>
          </div>
        </div>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          Notre &eacute;quipe vous recontactera <strong>sous 24 heures ouvr&eacute;es</strong> pour
          &eacute;changer sur votre projet et r&eacute;pondre &agrave; toutes vos questions.
        </p>
        <p className="text-sm text-[var(--color-text-muted)]">
          Besoin urgent ? Appelez-nous directement au{" "}
          <a href="tel:+33665015882" className="font-medium text-[var(--color-primary)] hover:underline">
            06 65 01 58 82
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Reassurance message */}
      <div
        className="flex items-start gap-3 p-4"
        style={{
          background: 'var(--color-stone-50)',
          border: '1px solid var(--color-stone-200)',
        }}
      >
        <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-stone-600)' }}>
          <strong style={{ color: 'var(--color-stone-800)' }}>Laissez-nous vos coordonn&eacute;es, on s&rsquo;occupe du reste.</strong>
          <br />
          Notre &eacute;quipe vous rappelle sous 24h pour discuter de votre projet. Aucun engagement.
        </p>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName">Pr&eacute;nom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="Votre pr&eacute;nom"
          />
        </div>
        <div>
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            placeholder="Votre nom"
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="votre@email.fr"
          />
        </div>
        <div>
          <label htmlFor="phone">
            T&eacute;l&eacute;phone <span className="text-[var(--color-text-muted)] font-normal">(recommand&eacute;)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType">Type de projet</label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full p-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] focus:border-[var(--color-primary)] outline-none transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            S&eacute;lectionnez un type de projet
          </option>
          <option value="construction">Construction neuve</option>
          <option value="renovation">R&eacute;novation</option>
          <option value="extension">Extension</option>
          <option value="other">Autre</option>
        </select>
      </div>

      {/* Message - Now optional */}
      <div>
        <label htmlFor="message">
          Un mot sur votre projet{" "}
          <span className="text-[var(--color-text-muted)] font-normal">(optionnel)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Budget approximatif, surface, localisation... Ou laissez vide, on en discutera ensemble."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Envoi en cours...
          </>
        ) : (
          "Demander \u00e0 \u00eatre rappel\u00e9"
        )}
      </button>

      {/* Privacy Note */}
      <p className="text-xs text-[var(--color-text-muted)]">
        En soumettant ce formulaire, vous acceptez que vos donn&eacute;es soient
        utilis&eacute;es pour vous recontacter dans le cadre de votre demande.
        Consultez notre{" "}
        <a href="/politique-confidentialite" className="underline hover:text-[var(--color-primary)]">
          politique de confidentialit&eacute;
        </a>.
      </p>
    </form>
  );
}
