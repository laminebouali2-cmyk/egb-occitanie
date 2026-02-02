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
      <div className="bg-[var(--color-surface)] p-8 md:p-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[var(--color-success)] flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
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
          <h3 className="text-xl font-medium text-[var(--color-primary)]">
            Message envoyé
          </h3>
        </div>
        <p className="text-[var(--color-text-secondary)]">
          Merci pour votre message. Notre équipe vous recontactera dans les plus
          brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
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
            placeholder="votre@email.fr"
          />
        </div>
        <div>
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
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
            Sélectionnez un type de projet
          </option>
          <option value="construction">Construction neuve</option>
          <option value="renovation">Rénovation</option>
          <option value="extension">Extension</option>
          <option value="sinistres">Gestion de sinistres</option>
          <option value="division">Division d'immeuble</option>
          <option value="other">Autre</option>
        </select>
      </div>

      {/* Location & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="location">Localisation du projet</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            placeholder="Ex: Toulouse, Balma, Castanet..."
          />
        </div>
        <div>
          <label htmlFor="budget">Budget envisagé</label>
          <select
            id="budget"
            name="budget"
            required
            className="w-full p-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] focus:border-[var(--color-primary)] outline-none transition-colors"
            defaultValue=""
          >
            <option value="" disabled>
              Sélectionnez une fourchette
            </option>
            <option value="<100k">Moins de 100 000 €</option>
            <option value="100-200k">100 000 € - 200 000 €</option>
            <option value="200-500k">200 000 € - 500 000 €</option>
            <option value=">500k">Plus de 500 000 €</option>
            <option value="non-defini">Non défini</option>
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline">Échéance souhaitée</label>
        <select
          id="timeline"
          name="timeline"
          required
          className="w-full p-4 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] focus:border-[var(--color-primary)] outline-none transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            Quand souhaitez-vous démarrer ?
          </option>
          <option value="urgent">Dès que possible (moins de 3 mois)</option>
          <option value="moyen-terme">Moyen terme (3-6 mois)</option>
          <option value="long-terme">Long terme (6-12 mois)</option>
          <option value="reflexion">En phase de réflexion (plus de 12 mois)</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message">Décrivez votre projet</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Expliquez-nous votre projet : vos besoins, vos contraintes, vos attentes..."
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
          "Envoyer le message"
        )}
      </button>

      {/* Privacy Note */}
      <p className="text-xs text-[var(--color-text-muted)]">
        En soumettant ce formulaire, vous acceptez que vos données soient
        utilisées pour vous recontacter dans le cadre de votre demande.
      </p>
    </form>
  );
}
