"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RenovationAnalysis } from "./ImageAnalysis";

interface AnalysisResultsProps {
  analysis: RenovationAnalysis;
  imageUrl: string | null;
  onBack: () => void;
  onNewAnalysis: () => void;
}

const categoryLabels: Record<string, string> = {
  structure: "Structure",
  sols: "Sols",
  murs: "Murs & Peinture",
  plomberie: "Plomberie",
  electricite: "Electricite",
  menuiserie: "Menuiserie",
  optimisation: "Optimisation",
};

const categoryColors: Record<string, string> = {
  structure: "#DC2626",
  sols: "#D97706",
  murs: "#059669",
  plomberie: "#2563EB",
  electricite: "#7C3AED",
  menuiserie: "#DB2777",
  optimisation: "#0891B2",
};

const impactLabels: Record<string, string> = {
  esthetique: "Esthetique",
  fonctionnel: "Fonctionnel",
  valeur: "Valeur du bien",
  confort: "Confort",
};

const conditionLabels: Record<string, { label: string; color: string }> = {
  bon: { label: "Bon etat general", color: "#059669" },
  moyen: { label: "Etat moyen - Travaux recommandes", color: "#D97706" },
  a_renover: { label: "Renovation necessaire", color: "#DC2626" },
};

const priorityLabels: Record<string, { label: string; color: string }> = {
  faible: { label: "Priorite faible", color: "#059669" },
  moyen: { label: "Priorite moyenne", color: "#D97706" },
  urgent: { label: "Travaux urgents", color: "#DC2626" },
};

export function AnalysisResults({ analysis, imageUrl, onBack, onNewAnalysis }: AnalysisResultsProps) {
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const toggleSuggestion = (id: string) => {
    setSelectedSuggestions(prev =>
      prev.includes(id)
        ? prev.filter(s => s !== id)
        : [...prev, id]
    );
  };

  const selectedTotal = analysis.suggestions
    .filter(s => selectedSuggestions.includes(s.id))
    .reduce((acc, s) => ({
      min: acc.min + s.budgetMin,
      max: acc.max + s.budgetMax
    }), { min: 0, max: 0 });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="analysis-results">
      {/* Header */}
      <div className="results-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour
        </button>
        <button className="new-analysis-btn" onClick={onNewAnalysis}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Nouvelle photo
        </button>
      </div>

      <div className="results-content">
        {/* Image & Summary */}
        <motion.div
          className="results-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="summary-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {imageUrl && <img src={imageUrl} alt="Piece analysee" />}
            <div className="summary-overlay">
              <span className="room-badge">{analysis.roomType}</span>
            </div>
          </div>

          <div className="summary-info">
            <h3>Analyse de votre {analysis.roomType.toLowerCase()}</h3>

            <div className="summary-stats">
              <div className="stat">
                <span className="stat-label">Surface estimee</span>
                <span className="stat-value">{analysis.surfaceEstimate} m2</span>
              </div>
              <div className="stat">
                <span className="stat-label">Etat</span>
                <span className="stat-value" style={{ color: conditionLabels[analysis.condition].color }}>
                  {conditionLabels[analysis.condition].label}
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Priorite</span>
                <span className="stat-value" style={{ color: priorityLabels[analysis.priorityLevel].color }}>
                  {priorityLabels[analysis.priorityLevel].label}
                </span>
              </div>
            </div>

            <div className="detected-elements">
              <h4>Elements detectes :</h4>
              <div className="elements-list">
                {analysis.detectedElements.map((element, index) => (
                  <span key={index} className="element-tag">{element}</span>
                ))}
              </div>
            </div>

            <div className="budget-estimate">
              <h4>Budget global estime</h4>
              <div className="budget-range">
                <span className="budget-min">{formatPrice(analysis.totalBudgetMin)}</span>
                <span className="budget-separator">a</span>
                <span className="budget-max">{formatPrice(analysis.totalBudgetMax)}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          className="suggestions-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="suggestions-header">
            <h3>Suggestions de renovation</h3>
            <p>Selectionnez les travaux qui vous interessent pour calculer le budget</p>
          </div>

          <div className="suggestions-list">
            {analysis.suggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.id}
                className={`suggestion-card ${selectedSuggestions.includes(suggestion.id) ? "selected" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="suggestion-main" onClick={() => toggleSuggestion(suggestion.id)}>
                  <div className="suggestion-checkbox">
                    {selectedSuggestions.includes(suggestion.id) ? (
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor"/>
                        <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    )}
                  </div>

                  <div className="suggestion-content">
                    <div className="suggestion-top">
                      <span
                        className="category-badge"
                        style={{ backgroundColor: categoryColors[suggestion.category] }}
                      >
                        {categoryLabels[suggestion.category]}
                      </span>
                      <span className="impact-badge">{impactLabels[suggestion.impact]}</span>
                      <span className="priority-badge">Priorite {suggestion.priority}</span>
                    </div>

                    <h4 className="suggestion-title">{suggestion.title}</h4>

                    <div className="suggestion-meta">
                      <span className="suggestion-budget">
                        {formatPrice(suggestion.budgetMin)} - {formatPrice(suggestion.budgetMax)}
                      </span>
                      <span className="suggestion-duration">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {suggestion.duration}
                      </span>
                    </div>
                  </div>

                  <button
                    className="details-toggle"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDetails(showDetails === suggestion.id ? null : suggestion.id);
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ transform: showDetails === suggestion.id ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {showDetails === suggestion.id && (
                  <motion.div
                    className="suggestion-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p>{suggestion.description}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Budget Summary */}
        {selectedSuggestions.length > 0 && (
          <motion.div
            className="selected-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="selected-info">
              <span className="selected-count">{selectedSuggestions.length} travaux selectionnes</span>
              <div className="selected-budget">
                <span className="label">Budget estime :</span>
                <span className="value">{formatPrice(selectedTotal.min)} - {formatPrice(selectedTotal.max)}</span>
              </div>
            </div>
            <button className="contact-btn">
              Demander un devis gratuit
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
