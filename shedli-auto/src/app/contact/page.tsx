"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Send, ChevronDown, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";
import { submitContactForm } from "@/app/actions/contact";

type FormState = "idle" | "success" | "error";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [showOptional, setShowOptional] = useState(false);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setState("success");
      } else {
        setState("error");
        setError(result.error || "Une erreur est survenue.");
      }
    });
  }

  return (
    <section className="pt-20 pb-8 lg:pt-28 lg:pb-16">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-3">
            Contact
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text tracking-tight leading-tight">
            Un appel suffit.
          </h1>
          <p className="mt-3 text-sm lg:text-base text-text-secondary max-w-md">
            Choisissez votre mode de contact préféré. On vous répond en moins de 2 heures.
          </p>
        </motion.div>

        {/* Quick contact strip — mobile */}
        <motion.div
          className="flex gap-3 overflow-x-auto pb-1 mb-8 lg:hidden scrollbar-hide"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <a
            href={SITE.phoneHref}
            className="flex shrink-0 items-center gap-2.5 rounded-xl bg-[#09090b] px-5 py-3 text-sm font-semibold text-white"
          >
            <Phone size={16} />
            Appeler
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-text"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-text"
          >
            <Mail size={16} />
            Email
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="rounded-2xl border border-border bg-white p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {state === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-soft text-text mb-5">
                      <CheckCircle2 size={24} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl font-semibold text-text">Message envoyé</h2>
                    <p className="mt-2 text-sm text-text-secondary max-w-xs">
                      On vous recontacte dans les 2 heures. Pour une urgence, appelez-nous directement.
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#09090b] px-6 py-3 text-sm font-semibold text-white"
                    >
                      <Phone size={16} />
                      {SITE.phone}
                    </a>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    action={handleSubmit}
                    className="space-y-5"
                  >
                    <h2 className="text-lg font-semibold text-text mb-1">
                      Demande de rappel
                    </h2>

                    {/* Type */}
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-text mb-1.5">
                        Type de demande
                      </label>
                      <select
                        id="type"
                        name="type"
                        defaultValue="rappel"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text transition-colors focus:border-border-strong focus:outline-none"
                      >
                        <option value="rappel">Être rappelé</option>
                        <option value="devis">Demande de devis</option>
                        <option value="rdv">Prendre rendez-vous</option>
                        <option value="question">Question</option>
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                        Nom complet
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jean Dupont"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted transition-colors focus:border-border-strong focus:outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="06 12 34 56 78"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted transition-colors focus:border-border-strong focus:outline-none"
                      />
                    </div>

                    {/* Optional fields toggle */}
                    <button
                      type="button"
                      onClick={() => setShowOptional(!showOptional)}
                      className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text transition-colors"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${showOptional ? "rotate-180" : ""}`}
                      />
                      {showOptional ? "Moins d\u2019options" : "Ajouter des détails"}
                    </button>

                    <AnimatePresence>
                      {showOptional && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-5 overflow-hidden"
                        >
                          {/* Vehicle */}
                          <div>
                            <label htmlFor="vehicle" className="block text-sm font-medium text-text mb-1.5">
                              Véhicule <span className="text-text-muted font-normal">(optionnel)</span>
                            </label>
                            <input
                              id="vehicle"
                              name="vehicle"
                              type="text"
                              placeholder="Ex: Peugeot 308, 2019"
                              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted transition-colors focus:border-border-strong focus:outline-none"
                            />
                          </div>

                          {/* Message */}
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                              Message <span className="text-text-muted font-normal">(optionnel)</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              placeholder="Décrivez votre besoin..."
                              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted transition-colors focus:border-border-strong focus:outline-none resize-none"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Error */}
                    {state === "error" && (
                      <p className="text-sm text-error font-medium">{error}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-[#09090b] px-6 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                    >
                      {isPending ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        <>
                          <Send size={16} />
                          Envoyer ma demande
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-text-muted text-center">
                      En envoyant ce formulaire, vous acceptez d&apos;être recontacté par Shedli Auto.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="space-y-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 lg:p-5 transition-shadow hover:shadow-sm"
              >
                <Phone size={18} strokeWidth={1.5} className="text-text-muted shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-text">{SITE.phone}</p>
                  <p className="text-xs text-text-muted">Réponse immédiate</p>
                </div>
              </a>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 lg:p-5 transition-shadow hover:shadow-sm"
              >
                <MessageCircle size={18} strokeWidth={1.5} className="text-text-muted shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-text">WhatsApp</p>
                  <p className="text-xs text-text-muted">Envoyez-nous un message</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 lg:p-5 transition-shadow hover:shadow-sm"
              >
                <Mail size={18} strokeWidth={1.5} className="text-text-muted shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-text">{SITE.email}</p>
                  <p className="text-xs text-text-muted">Réponse sous 24h</p>
                </div>
              </a>

              <div className="rounded-xl border border-border bg-white p-4 lg:p-5">
                <div className="flex items-center gap-4">
                  <Clock size={18} strokeWidth={1.5} className="text-text-muted shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-text">Horaires</p>
                    <div className="mt-1 space-y-0.5">
                      <p className="text-xs text-text-muted">{SITE.hours.weekdays}</p>
                      <p className="text-xs text-text-muted">{SITE.hours.saturday}</p>
                      <p className="text-xs text-text-muted">{SITE.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-white p-4 lg:p-5">
                <div className="flex items-center gap-4">
                  <MapPin size={18} strokeWidth={1.5} className="text-text-muted shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-text">Adresse</p>
                    <p className="text-xs text-text-muted mt-0.5">{SITE.address.full}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
