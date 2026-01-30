"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface BudgetWidgetProps {
  budget: number;
  onChange: (value: number) => void;
}

export function BudgetWidget({ budget, onChange }: BudgetWidgetProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(budget.toString());

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSubmit = () => {
    const newValue = parseInt(inputValue.replace(/\D/g, ""), 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
    setIsEditing(false);
  };

  const adjustBudget = (amount: number) => {
    const newBudget = Math.max(0, budget + amount);
    onChange(newBudget);
    setInputValue(newBudget.toString());
  };

  return (
    <motion.div
      className="glass-card budget-widget"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="budget-header">
        <span className="budget-label">Budget actuel</span>
        <div className="budget-status">
          <span className="status-dot" />
          <span>En cours</span>
        </div>
      </div>

      <div className="budget-value">
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="budget-input"
            autoFocus
          />
        ) : (
          <motion.span
            onClick={() => setIsEditing(true)}
            className="budget-amount"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {formatCurrency(budget)}
          </motion.span>
        )}
      </div>

      <div className="budget-actions">
        <motion.button
          className="budget-btn"
          onClick={() => adjustBudget(-1000)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.button>
        <motion.button
          className="budget-btn"
          onClick={() => adjustBudget(1000)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.button>
        <motion.button
          className="budget-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20V10M18 20V4M6 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>

      <div className="budget-breakdown">
        <div className="breakdown-item">
          <span className="breakdown-label">Materiaux</span>
          <span className="breakdown-value">62%</span>
        </div>
        <div className="breakdown-item">
          <span className="breakdown-label">Main d&apos;oeuvre</span>
          <span className="breakdown-value">28%</span>
        </div>
        <div className="breakdown-item">
          <span className="breakdown-label">Divers</span>
          <span className="breakdown-value">10%</span>
        </div>
      </div>

      <div className="budget-progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: "72%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
      <div className="budget-progress-label">
        <span>72% utilise</span>
        <span>{formatCurrency(budget * 0.28)} restant</span>
      </div>
    </motion.div>
  );
}
