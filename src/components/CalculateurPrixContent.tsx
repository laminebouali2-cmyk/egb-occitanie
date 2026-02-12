"use client";

import { useState } from "react";
import Link from "next/link";

const quartiers = [
  { id: "toulouse-centre", label: "Toulouse Centre", facteur: 1.3 },
  { id: "cote-pavee", label: "C\u00f4te Pav\u00e9e", facteur: 1.4 },
  { id: "les-carmes", label: "Les Carmes", facteur: 1.25 },
  { id: "saint-orens", label: "Saint-Orens", facteur: 1.2 },
  { id: "castanet", label: "Castanet-Tolosan", facteur: 1.15 },
  { id: "lunion", label: "L'Union", facteur: 1.15 },
  { id: "balma", label: "Balma", facteur: 1.0 },
  { id: "ramonville", label: "Ramonville", facteur: 1.05 },
  { id: "blagnac", label: "Blagnac", facteur: 1.1 },
  { id: "colomiers", label: "Colomiers", facteur: 0.95 },
  { id: "tournefeuille", label: "Tournefeuille", facteur: 0.98 },
  { id: "cugnaux", label: "Cugnaux", facteur: 0.92 },
  { id: "plaisance", label: "Plaisance-du-Touch", facteur: 0.95 },
  { id: "labege", label: "Lab\u00e8ge", facteur: 1.05 },
  { id: "portet", label: "Portet-sur-Garonne", facteur: 0.9 },
  { id: "escalquens", label: "Escalquens", facteur: 0.95 },
];

export function CalculateurPrixContent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    surface: 150,
    quartier: "",
    finition: "",
    email: "",
    nom: "",
    telephone: "",
  });
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const calculatePrice = (overrideFinition?: string) => {
    let basePrice = 0;

    if (formData.projectType === "construction") {
      basePrice = 2800;
    } else if (formData.projectType === "renovation") {
      basePrice = 1600;
    } else if (formData.projectType === "extension") {
      basePrice = 2400;
    }

    const finition = overrideFinition || formData.finition;
    let finitionMultiplier = 1;
    if (finition === "standard") finitionMultiplier = 0.9;
    if (finition === "confort") finitionMultiplier = 1.0;
    if (finition === "premium") finitionMultiplier = 1.25;

    const quartierData = quartiers.find(q => q.id === formData.quartier);
    const quartierMultiplier = quartierData?.facteur || 1;

    const prixM2 = basePrice * finitionMultiplier * quartierMultiplier;
    const total = prixM2 * formData.surface;

    setResult({
      min: Math.round(total * 0.92),
      max: Math.round(total * 1.08),
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <section className="bg-white text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full mb-6">
            <span className="text-emerald-400 font-medium text-sm">CALCULATEUR GRATUIT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calculateur Prix Construction & R\u00e9novation
          </h1>
          <p className="text-xl text-gray-300">
            Estimez votre projet en 2 minutes
          </p>
        </div>
      </section>

      <section className="py-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-600" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link> <span className="mx-2" aria-hidden="true">&rsaquo;</span>
            <span className="text-gray-900 font-medium">Calculateur Prix</span>
          </nav>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex justify-between mb-2" role="progressbar" aria-valuenow={Math.min(step, 5)} aria-valuemin={1} aria-valuemax={5} aria-label="Progression du calculateur">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`w-full h-2 mx-1 rounded ${
                    s <= step ? "bg-emerald-600" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 text-center">
              \u00c9tape {Math.min(step, 5)} sur 5
            </p>
          </div>

          {step === 1 && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quel est votre projet ?
              </h2>
              <div className="space-y-4">
                {[
                  { id: "construction", label: "Construction villa neuve" },
                  { id: "renovation", label: "R\u00e9novation compl\u00e8te maison" },
                  { id: "extension", label: "Extension / Agrandissement" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setFormData({ ...formData, projectType: type.id });
                      setStep(2);
                    }}
                    className="w-full p-6 border-2 border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 rounded-lg transition-all text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quelle surface ?
              </h2>
              <div className="mb-8">
                <div className="text-center mb-4">
                  <span className="text-5xl font-bold text-emerald-700">
                    {formData.surface}m\u00b2
                  </span>
                </div>
                <label htmlFor="surface-range" className="sr-only">Surface en m\u00b2</label>
                <input
                  id="surface-range"
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={formData.surface}
                  onChange={(e) => setFormData({ ...formData, surface: parseInt(e.target.value) })}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>50m\u00b2</span>
                  <span>300m\u00b2</span>
                </div>
              </div>
              <button
                onClick={() => setStep(3)}
                className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
              >
                Continuer
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quel quartier ?
              </h2>
              <label htmlFor="quartier-select" className="sr-only">S\u00e9lectionnez un quartier</label>
              <select
                id="quartier-select"
                value={formData.quartier}
                onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                className="w-full p-4 border-2 border-gray-200 rounded-lg text-lg mb-6"
              >
                <option value="">S\u00e9lectionnez un quartier</option>
                {quartiers.map((q) => (
                  <option key={q.id} value={q.id}>{q.label}</option>
                ))}
              </select>
              <button
                onClick={() => setStep(4)}
                disabled={!formData.quartier}
                className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continuer
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Niveau de finition ?
              </h2>
              <div className="space-y-4">
                {[
                  { id: "standard", label: "Standard", desc: "Finitions classiques, bon rapport qualit\u00e9/prix" },
                  { id: "confort", label: "Confort", desc: "Finitions sup\u00e9rieures, prestations premium" },
                  { id: "premium", label: "Premium", desc: "Finitions haut de gamme, sur-mesure" },
                ].map((fin) => (
                  <button
                    key={fin.id}
                    onClick={() => {
                      setFormData({ ...formData, finition: fin.id });
                      setStep(5);
                      // Pass the finition directly to avoid stale state
                      calculatePrice(fin.id);
                    }}
                    className="w-full p-6 border-2 border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 rounded-lg transition-all text-left"
                  >
                    <div className="font-bold text-lg text-gray-900">{fin.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{fin.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && result && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full mb-4">
                  Estimation calcul\u00e9e
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Votre Projet : {formData.surface}m\u00b2
                </h2>
                <p className="text-gray-600">
                  {formData.projectType === "construction" ? "Construction neuve" : formData.projectType === "renovation" ? "R\u00e9novation compl\u00e8te" : "Extension"} &bull; Finition {formData.finition}
                </p>
              </div>

              <div className="bg-stone-900 text-white rounded-lg p-8 mb-8">
                <div className="text-center">
                  <div className="text-sm mb-2 text-stone-300">Budget estim\u00e9</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {formatPrice(result.min)} - {formatPrice(result.max)}
                  </div>
                  <div className="text-sm text-stone-400">TTC tout compris</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="font-bold text-amber-900 mb-2">Estimation indicative</div>
                  <div className="text-sm text-amber-800">
                    Ce montant est une fourchette indicative. Pour un devis pr\u00e9cis adapt\u00e9 \u00e0 votre projet, contactez-nous gratuitement.
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/contact"
                  className="block text-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+33665015882"
                  className="block text-center px-8 py-4 border-2 border-emerald-600 text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  06 65 01 58 82
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-700 mb-2">4 ans</div>
              <div className="text-gray-600">d&apos;activit\u00e9 continue</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-700 mb-2">4.8/5</div>
              <div className="text-gray-600">Note moyenne clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-700 mb-2">48h</div>
              <div className="text-gray-600">Devis d\u00e9taill\u00e9 gratuit</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
