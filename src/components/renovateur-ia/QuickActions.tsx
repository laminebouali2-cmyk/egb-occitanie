"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const actions = [
  {
    id: "upload",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Importer photo",
    color: "#BEF264",
  },
  {
    id: "scan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: "Scanner piece",
    color: "#4ADE80",
  },
  {
    id: "plan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: "Creer plan",
    color: "#60A5FA",
  },
  {
    id: "compare",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="7" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Avant/Apres",
    color: "#F472B6",
  },
  {
    id: "estimate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Estimer cout",
    color: "#FBBF24",
  },
  {
    id: "share",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2"/>
        <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: "Partager",
    color: "#A78BFA",
  },
];

export function QuickActions() {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  return (
    <div className="quick-actions">
      <div className="actions-grid">
        {actions.map((action, index) => (
          <motion.button
            key={action.id}
            className="action-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onHoverStart={() => setHoveredAction(action.id)}
            onHoverEnd={() => setHoveredAction(null)}
            whileHover={{
              scale: 1.05,
              backgroundColor: `${action.color}20`,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderColor: hoveredAction === action.id ? action.color : "rgba(255,255,255,0.15)",
            }}
          >
            <motion.div
              className="action-icon"
              style={{ color: action.color }}
              animate={{
                scale: hoveredAction === action.id ? 1.1 : 1,
              }}
            >
              {action.icon}
            </motion.div>
            <span className="action-label">{action.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Upload Modal Hint */}
      <motion.div
        className="upload-hint glass-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="hint-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="hint-text">
          <strong>Astuce :</strong> Importez une photo de votre piece pour recevoir des suggestions personnalisees de renovation
        </div>
      </motion.div>
    </div>
  );
}
