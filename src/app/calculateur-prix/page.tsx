"use client";

import { useState } from "react";
import Link from "next/link";

const quartiers = [
  { id: "toulouse-centre", label: "Toulouse Centre", facteur: 1.3 },
  { id: "cote-pavee", label: "Côte Pavée", facteur: 1.4 },
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
  { id: "labege", label: "Labège", facteur: 1.05 },
  { id: "portet", label: "Portet-sur-Garonne", facteur: 0.9 },
  { id: "escalquens", label: "Escalquens", facteur: 0.95 },
];

export default function CalculateurPrixPage() {
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

  const calculatePrice = () => {
    let basePrice = 0;

    if (formData.projectType === "construction") {
      basePrice = 2800;
    } else if (formData.projectType === "renovation") {
      basePrice = 1600;
    } else if (formData.projectType === "extension") {
      basePrice = 2400;
    }

    let finitionMultiplier = 1;
    if (formData.finition === "standard") finitionMultiplier = 0.9;
    if (formData.finition === "confort") finitionMultiplier = 1.0;
    if (formData.finition === "premium") finitionMultiplier = 1.25;

    const quartierData = quartiers.find(q => q.id === formData.quartier);
    const quartierMultiplier = quartierData?.facteur || 1;

    const prixM2 = basePrice * finitionMultiplier * quartierMultiplier;
    const total = prixM2 * formData.surface;

    setResult({
      min: Math.round(total * 0.92),
      max: Math.round(total * 1.08),
    });
  };

  const handleNext = () => {
    if (step === 4) {
      calculatePrice();
    }
    setStep(step + 1);
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
    <main className="min-h-screen bg-stone-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full mb-6">
            <span className="text-emerald-400 font-medium text-sm">💰 CALCULATEUR GRATUIT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calculateur Prix Construction & Rénovation
          </h1>
          <p className="text-xl text-stone-300">
            Estimez votre projet en 2 minutes • Résultat personnalisé gratuit
          </p>
        </div>
      </section>

      <section className="py-4 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm text-stone-600">
            <Link href="/">Accueil</Link> <span className="mx-2">›</span>
            <span className="text-stone-900 font-medium">Calculateur Prix</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`w-full h-2 mx-1 rounded ${
                    s <= step ? "bg-emerald-600" : "bg-stone-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-stone-600 text-center">
              Étape {Math.min(step, 5)} sur 5
            </p>
          </div>

          {step === 1 && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Quel est votre projet ?
              </h2>
              <div className="space-y-4">
                {[
                  { id: "construction", label: "Construction villa neuve", icon: "🏗️" },
                  { id: "renovation", label: "Rénovation complète maison", icon: "🔨" },
                  { id: "extension", label: "Extension / Agrandissement", icon: "📐" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setFormData({ ...formData, projectType: type.id });
                      handleNext();
                    }}
                    className="w-full p-6 border-2 border-stone-200 hover:border-emerald-600 hover:bg-emerald-50 rounded-lg transition-all text-left"
                  >
                    <span className="text-3xl mr-4">{type.icon}</span>
                    <span className="text-lg font-semibold text-stone-900">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Quelle surface ?
              </h2>
              <div className="mb-8">
                <div className="text-center mb-4">
                  <span className="text-5xl font-bold text-emerald-700">
                    {formData.surface}m²
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={formData.surface}
                  onChange={(e) => setFormData({ ...formData, surface: parseInt(e.target.value) })}
                  className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-sm text-stone-600 mt-2">
                  <span>50m²</span>
                  <span>300m²</span>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
              >
                Continuer →
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Quel quartier ?
              </h2>
              <select
                value={formData.quartier}
                onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                className="w-full p-4 border-2 border-stone-200 rounded-lg text-lg mb-6"
              >
                <option value="">Sélectionnez un quartier</option>
                {quartiers.map((q) => (
                  <option key={q.id} value={q.id}>{q.label}</option>
                ))}
              </select>
              <button
                onClick={handleNext}
                disabled={!formData.quartier}
                className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed"
              >
                Continuer →
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Niveau de finition ?
              </h2>
              <div className="space-y-4">
                {[
                  { id: "standard", label: "Standard", desc: "Finitions classiques, bon rapport qualité/prix" },
                  { id: "confort", label: "Confort", desc: "Finitions supérieures, prestations premium" },
                  { id: "premium", label: "Premium", desc: "Finitions haut de gamme, sur-mesure" },
                ].map((fin) => (
                  <button
                    key={fin.id}
                    onClick={() => {
                      setFormData({ ...formData, finition: fin.id });
                      handleNext();
                    }}
                    className="w-full p-6 border-2 border-stone-200 hover:border-emerald-600 hover:bg-emerald-50 rounded-lg transition-all text-left"
                  >
                    <div className="font-bold text-lg text-stone-900">{fin.label}</div>
                    <div className="text-sm text-stone-600 mt-1">{fin.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && !result && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                Où envoyer votre estimation ?
              </h2>
              <p className="text-stone-600 mb-6">
                Recevez votre estimation détaillée + guide gratuit construction/rénovation (PDF 40 pages)
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  calculatePrice();
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  required
                  className="w-full p-4 border-2 border-stone-200 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-4 border-2 border-stone-200 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Votre téléphone (optionnel)"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full p-4 border-2 border-stone-200 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-lg transition-colors"
                >
                  Voir Mon Estimation 🎁
                </button>
                <p className="text-xs text-stone-500 text-center">
                  Vos données sont sécurisées. Nous ne vendons jamais vos informations.
                </p>
              </form>
            </div>
          )}

          {step === 5 && result && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full mb-4">
                  ✅ Estimation calculée
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">
                  Votre Projet : {formData.surface}m²
                </h2>
                <p className="text-stone-600">
                  {formData.projectType === "construction" ? "Construction neuve" : formData.projectType === "renovation" ? "Rénovation complète" : "Extension"} • Finition {formData.finition}
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg p-8 mb-8">
                <div className="text-center">
                  <div className="text-sm mb-2">Budget estimé</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {formatPrice(result.min)} - {formatPrice(result.max)}
                  </div>
                  <div className="text-sm opacity-90">TTC tout compris</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-bold text-blue-900 mb-2">✉️ Email envoyé !</div>
                  <div className="text-sm text-blue-800">
                    Nous vous avons envoyé votre estimation détaillée + guide PDF gratuit à <strong>{formData.email}</strong>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/contact"
                  className="block text-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
                >
                  Devis Gratuit Précis
                </a>
                <a
                  href="tel:+33582950495"
                  className="block text-center px-8 py-4 border-2 border-emerald-600 text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  📱 05 82 95 04 95
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
              <div className="text-4xl font-bold text-emerald-700 mb-2">150+</div>
              <div className="text-stone-600">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-700 mb-2">4.9/5</div>
              <div className="text-stone-600">Note moyenne clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-700 mb-2">48h</div>
              <div className="text-stone-600">Devis détaillé gratuit</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
