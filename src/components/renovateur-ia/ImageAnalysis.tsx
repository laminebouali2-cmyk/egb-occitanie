"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageAnalysisProps {
  onBack: () => void;
  onAnalysisComplete: (analysis: RenovationAnalysis, imageUrl: string) => void;
}

export interface RenovationAnalysis {
  roomType: string;
  detectedElements: string[];
  surfaceEstimate: number;
  condition: "bon" | "moyen" | "a_renover";
  suggestions: RenovationSuggestion[];
  totalBudgetMin: number;
  totalBudgetMax: number;
  priorityLevel: "faible" | "moyen" | "urgent";
}

export interface RenovationSuggestion {
  id: string;
  title: string;
  description: string;
  category: "structure" | "sols" | "murs" | "plomberie" | "electricite" | "menuiserie" | "optimisation";
  budgetMin: number;
  budgetMax: number;
  duration: string;
  priority: number;
  impact: "esthetique" | "fonctionnel" | "valeur" | "confort";
}

// Simulated AI analysis based on room type detection
const analyzeImage = (roomType: string): RenovationAnalysis => {
  const analyses: Record<string, RenovationAnalysis> = {
    cuisine: {
      roomType: "Cuisine",
      detectedElements: ["Plan de travail ancien", "Electromenager visible", "Carrelage sol", "Eclairage central", "Placards muraux"],
      surfaceEstimate: 12,
      condition: "moyen",
      priorityLevel: "moyen",
      suggestions: [
        {
          id: "1",
          title: "Remplacement du plan de travail",
          description: "Le plan de travail montre des signes d'usure. Un remplacement par du quartz ou du granit augmenterait la valeur et la fonctionnalite.",
          category: "menuiserie",
          budgetMin: 800,
          budgetMax: 2500,
          duration: "2-3 jours",
          priority: 1,
          impact: "valeur"
        },
        {
          id: "2",
          title: "Modernisation de l'eclairage",
          description: "L'eclairage central unique est insuffisant. Ajout de spots encastres et bandeau LED sous les meubles hauts.",
          category: "electricite",
          budgetMin: 400,
          budgetMax: 1200,
          duration: "1 jour",
          priority: 2,
          impact: "fonctionnel"
        },
        {
          id: "3",
          title: "Remplacement credence",
          description: "Une credence moderne en carreaux metro ou verre laque transformerait l'esthetique.",
          category: "murs",
          budgetMin: 300,
          budgetMax: 800,
          duration: "1 jour",
          priority: 3,
          impact: "esthetique"
        },
        {
          id: "4",
          title: "Optimisation rangements",
          description: "Installation de rangements coulissants et organisateurs de tiroirs pour maximiser l'espace.",
          category: "optimisation",
          budgetMin: 500,
          budgetMax: 1500,
          duration: "1-2 jours",
          priority: 4,
          impact: "fonctionnel"
        }
      ],
      totalBudgetMin: 2000,
      totalBudgetMax: 6000
    },
    salle_de_bain: {
      roomType: "Salle de bain",
      detectedElements: ["Baignoire ancienne", "Carrelage mural", "Lavabo sur colonne", "WC visible", "Fenetre"],
      surfaceEstimate: 6,
      condition: "a_renover",
      priorityLevel: "urgent",
      suggestions: [
        {
          id: "1",
          title: "Remplacement baignoire par douche italienne",
          description: "Gain de place considerable et modernisation. Douche a l'italienne avec paroi vitree.",
          category: "plomberie",
          budgetMin: 2500,
          budgetMax: 5000,
          duration: "3-5 jours",
          priority: 1,
          impact: "valeur"
        },
        {
          id: "2",
          title: "Nouveau carrelage sol et murs",
          description: "Carrelage grand format pour agrandir visuellement l'espace. Tons clairs recommandes.",
          category: "sols",
          budgetMin: 1500,
          budgetMax: 3500,
          duration: "3-4 jours",
          priority: 2,
          impact: "esthetique"
        },
        {
          id: "3",
          title: "Meuble vasque suspendu",
          description: "Remplacement du lavabo sur colonne par un meuble vasque suspendu avec rangements.",
          category: "menuiserie",
          budgetMin: 600,
          budgetMax: 2000,
          duration: "1 jour",
          priority: 3,
          impact: "fonctionnel"
        },
        {
          id: "4",
          title: "Ventilation VMC",
          description: "Installation d'une VMC pour eviter les problemes d'humidite.",
          category: "electricite",
          budgetMin: 300,
          budgetMax: 800,
          duration: "1 jour",
          priority: 4,
          impact: "confort"
        }
      ],
      totalBudgetMin: 4900,
      totalBudgetMax: 11300
    },
    salon: {
      roomType: "Salon / Sejour",
      detectedElements: ["Parquet ancien", "Murs peints", "Grande fenetre", "Cheminee", "Plafond haut"],
      surfaceEstimate: 25,
      condition: "bon",
      priorityLevel: "faible",
      suggestions: [
        {
          id: "1",
          title: "Renovation du parquet",
          description: "Poncage et vitrification du parquet existant pour lui redonner son eclat.",
          category: "sols",
          budgetMin: 1200,
          budgetMax: 2500,
          duration: "2-3 jours",
          priority: 1,
          impact: "esthetique"
        },
        {
          id: "2",
          title: "Rafraichissement peinture",
          description: "Peinture des murs en teintes contemporaines. Mur d'accent possible.",
          category: "murs",
          budgetMin: 800,
          budgetMax: 1800,
          duration: "2-3 jours",
          priority: 2,
          impact: "esthetique"
        },
        {
          id: "3",
          title: "Modernisation cheminee",
          description: "Habillage contemporain de la cheminee avec insert performant.",
          category: "structure",
          budgetMin: 2000,
          budgetMax: 5000,
          duration: "2-3 jours",
          priority: 3,
          impact: "valeur"
        },
        {
          id: "4",
          title: "Eclairage d'ambiance",
          description: "Creation de differentes zones lumineuses avec variateurs.",
          category: "electricite",
          budgetMin: 500,
          budgetMax: 1500,
          duration: "1-2 jours",
          priority: 4,
          impact: "confort"
        }
      ],
      totalBudgetMin: 4500,
      totalBudgetMax: 10800
    },
    chambre: {
      roomType: "Chambre",
      detectedElements: ["Sol moquette", "Murs clairs", "Fenetre simple vitrage", "Placard integre", "Radiateur ancien"],
      surfaceEstimate: 14,
      condition: "moyen",
      priorityLevel: "moyen",
      suggestions: [
        {
          id: "1",
          title: "Remplacement sol",
          description: "Remplacement de la moquette par un parquet stratifie ou contrecolle. Plus hygienique et durable.",
          category: "sols",
          budgetMin: 700,
          budgetMax: 1800,
          duration: "1-2 jours",
          priority: 1,
          impact: "confort"
        },
        {
          id: "2",
          title: "Isolation fenetre",
          description: "Remplacement par double vitrage pour ameliorer l'isolation thermique et phonique.",
          category: "menuiserie",
          budgetMin: 500,
          budgetMax: 1200,
          duration: "1 jour",
          priority: 2,
          impact: "confort"
        },
        {
          id: "3",
          title: "Amenagement placard",
          description: "Optimisation de l'interieur du placard avec amenagements sur mesure.",
          category: "optimisation",
          budgetMin: 400,
          budgetMax: 1000,
          duration: "1 jour",
          priority: 3,
          impact: "fonctionnel"
        },
        {
          id: "4",
          title: "Remplacement radiateur",
          description: "Radiateur design a inertie pour un meilleur confort thermique.",
          category: "plomberie",
          budgetMin: 300,
          budgetMax: 800,
          duration: "0.5 jour",
          priority: 4,
          impact: "confort"
        }
      ],
      totalBudgetMin: 1900,
      totalBudgetMax: 4800
    },
    couloir: {
      roomType: "Couloir / Entree",
      detectedElements: ["Sol carrelage", "Murs sombres", "Eclairage insuffisant", "Pas de rangement", "Portes anciennes"],
      surfaceEstimate: 8,
      condition: "a_renover",
      priorityLevel: "moyen",
      suggestions: [
        {
          id: "1",
          title: "Eclairage repense",
          description: "Spots encastres ou appliques murales pour eclairer sans encombrer. Detecteur de presence possible.",
          category: "electricite",
          budgetMin: 400,
          budgetMax: 1000,
          duration: "1 jour",
          priority: 1,
          impact: "fonctionnel"
        },
        {
          id: "2",
          title: "Peinture claire",
          description: "Peinture en teintes claires pour agrandir visuellement l'espace.",
          category: "murs",
          budgetMin: 300,
          budgetMax: 600,
          duration: "1 jour",
          priority: 2,
          impact: "esthetique"
        },
        {
          id: "3",
          title: "Rangements integres",
          description: "Creation de rangements malins : pateres, banc coffre, etageres.",
          category: "optimisation",
          budgetMin: 500,
          budgetMax: 1500,
          duration: "1-2 jours",
          priority: 3,
          impact: "fonctionnel"
        },
        {
          id: "4",
          title: "Renovation portes",
          description: "Peinture ou remplacement des portes pour un style uniforme.",
          category: "menuiserie",
          budgetMin: 200,
          budgetMax: 800,
          duration: "1 jour",
          priority: 4,
          impact: "esthetique"
        }
      ],
      totalBudgetMin: 1400,
      totalBudgetMax: 3900
    }
  };

  return analyses[roomType] || analyses.salon;
};

const roomTypes = [
  { id: "cuisine", label: "Cuisine", icon: "🍳" },
  { id: "salle_de_bain", label: "Salle de bain", icon: "🚿" },
  { id: "salon", label: "Salon", icon: "🛋️" },
  { id: "chambre", label: "Chambre", icon: "🛏️" },
  { id: "couloir", label: "Couloir / Entree", icon: "🚪" },
];

export function ImageAnalysis({ onBack, onAnalysisComplete }: ImageAnalysisProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [step, setStep] = useState<"upload" | "select_room" | "analyzing">("upload");

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setStep("select_room");
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setStep("select_room");
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const startAnalysis = useCallback(async (roomType: string) => {
    setSelectedRoom(roomType);
    setStep("analyzing");

    // Simulate AI analysis time
    await new Promise(resolve => setTimeout(resolve, 2500));

    const analysis = analyzeImage(roomType);
    onAnalysisComplete(analysis, uploadedImage || "");
  }, [onAnalysisComplete, uploadedImage]);

  return (
    <div className="image-analysis">
      <AnimatePresence mode="wait">
        {step === "upload" && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="upload-step"
          >
            <button className="back-btn" onClick={onBack}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Retour
            </button>

            <div className="upload-header">
              <h3>Analysez votre piece</h3>
              <p>Importez une photo de la piece a renover pour recevoir des suggestions personnalisees</p>
            </div>

            <div
              className={`upload-zone ${isDragging ? "dragging" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="file-input"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="upload-label">
                <div className="upload-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="upload-text">
                  <strong>Glissez une photo ici</strong>
                  <span>ou cliquez pour parcourir</span>
                </span>
                <span className="upload-formats">JPG, PNG, WEBP - Max 10MB</span>
              </label>
            </div>

            <div className="upload-tips">
              <h4>Conseils pour une meilleure analyse :</h4>
              <ul>
                <li>Prenez la photo de face, a hauteur des yeux</li>
                <li>Incluez le maximum de la piece dans le cadre</li>
                <li>Assurez-vous d&apos;avoir un bon eclairage</li>
                <li>Evitez les photos floues ou trop sombres</li>
              </ul>
            </div>
          </motion.div>
        )}

        {step === "select_room" && (
          <motion.div
            key="select"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="select-step"
          >
            <button className="back-btn" onClick={() => setStep("upload")}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Retour
            </button>

            <div className="image-preview">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {uploadedImage && <img src={uploadedImage} alt="Piece a analyser" />}
            </div>

            <div className="room-select">
              <h4>Quel type de piece est-ce ?</h4>
              <p>Selectionnez pour affiner l&apos;analyse</p>

              <div className="room-options">
                {roomTypes.map((room) => (
                  <button
                    key={room.id}
                    className={`room-option ${selectedRoom === room.id ? "selected" : ""}`}
                    onClick={() => startAnalysis(room.id)}
                  >
                    <span className="room-icon">{room.icon}</span>
                    <span className="room-label">{room.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === "analyzing" && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="analyzing-step"
          >
            <div className="image-preview analyzing">
              {uploadedImage && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={uploadedImage} alt="Analyse en cours" />
                  <div className="scan-overlay">
                    <motion.div
                      className="scan-line"
                      animate={{ y: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="analyzing-info">
              <div className="analyzing-spinner">
                <motion.div
                  className="spinner"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <h4>Analyse en cours...</h4>
              <p>Notre IA examine votre piece et prepare des suggestions de renovation personnalisees</p>

              <div className="analyzing-steps">
                <motion.div
                  className="step-item done"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Detection du type de piece
                </motion.div>
                <motion.div
                  className="step-item done"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Identification des elements
                </motion.div>
                <motion.div
                  className="step-item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <div className="step-spinner" />
                  Generation des suggestions
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
