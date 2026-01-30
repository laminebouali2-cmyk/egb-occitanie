"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageAnalysis, RenovationAnalysis } from "./ImageAnalysis";
import { AnalysisResults } from "./AnalysisResults";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface DemoSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

type DemoMode = "select" | "chat" | "image_upload" | "image_results";

const projectTypes = [
  { id: "kitchen", label: "Cuisine", icon: "🍳" },
  { id: "bathroom", label: "Salle de bain", icon: "🚿" },
  { id: "living", label: "Salon", icon: "🛋️" },
  { id: "bedroom", label: "Chambre", icon: "🛏️" },
  { id: "full", label: "Renovation complete", icon: "🏠" },
];

const getAIResponse = (message: string, projectType?: string): string => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("budget") || lowerMessage.includes("cout") || lowerMessage.includes("prix") || lowerMessage.includes("combien")) {
    if (projectType === "kitchen" || lowerMessage.includes("cuisine")) {
      return `**Estimation pour une renovation de cuisine :**

- **Rafraichissement simple** (peinture, credence) : 2 000 - 5 000 EUR
- **Renovation moyenne** (nouveaux meubles, electromenager) : 8 000 - 15 000 EUR
- **Renovation haut de gamme** (sur-mesure, materiaux nobles) : 15 000 - 30 000 EUR

Ces prix incluent la main d'oeuvre pour la region Toulouse. Quelle surface fait votre cuisine ?`;
    }
    if (projectType === "bathroom" || lowerMessage.includes("salle de bain") || lowerMessage.includes("bain")) {
      return `**Estimation pour une salle de bain :**

- **Rafraichissement** (peinture, accessoires) : 1 500 - 3 000 EUR
- **Renovation standard** (douche, vasque, carrelage) : 5 000 - 10 000 EUR
- **Renovation complete** (reconfiguration, haut de gamme) : 10 000 - 20 000 EUR

Avez-vous besoin de deplacer la plomberie existante ?`;
    }
    return `Pour vous donner une estimation precise, j'ai besoin de quelques informations :

1. **Type de piece** - Cuisine, salle de bain, salon... ?
2. **Surface** - Combien de m2 ?
3. **Niveau de renovation** - Simple rafraichissement ou renovation complete ?

Dites-moi en plus sur votre projet !`;
  }

  if (lowerMessage.includes("duree") || lowerMessage.includes("temps") || lowerMessage.includes("combien de jours") || lowerMessage.includes("semaine")) {
    return `**Durees moyennes de renovation :**

- **Cuisine** : 2 a 4 semaines
- **Salle de bain** : 1 a 3 semaines
- **Piece complete** : 1 a 2 semaines
- **Appartement entier** : 2 a 4 mois

Ces delais peuvent varier selon la complexite des travaux et la disponibilite des artisans.

Quel type de travaux envisagez-vous ?`;
  }

  if (lowerMessage.includes("materiau") || lowerMessage.includes("carrelage") || lowerMessage.includes("parquet") || lowerMessage.includes("peinture")) {
    return `**Recommandations materiaux :**

**Sols**
- Carrelage gres cerame : 30-80 EUR/m2
- Parquet contrecolle : 40-100 EUR/m2
- Vinyl/LVT : 20-50 EUR/m2

**Murs**
- Peinture qualite pro : 25-40 EUR/m2 pose comprise
- Faience : 40-80 EUR/m2

Quelle piece souhaitez-vous renover ?`;
  }

  if (lowerMessage.includes("artisan") || lowerMessage.includes("professionnel") || lowerMessage.includes("entreprise") || lowerMessage.includes("trouver")) {
    return `**Mise en relation artisans**

Je peux vous mettre en contact avec des professionnels verifies :

- **Plombiers** certifies RGE
- **Electriciens** agrees
- **Carreleurs** et **peintres** experimentes

Tous sont assures decennale et disponibles sous 48h pour un devis.

Souhaitez-vous recevoir des devis gratuits ?`;
  }

  if (lowerMessage.match(/\d+\s*m2|\d+\s*metres/i)) {
    const surfaceMatch = lowerMessage.match(/(\d+)\s*m/i);
    const surface = surfaceMatch ? parseInt(surfaceMatch[1]) : 0;

    return `**Projet de ${surface}m2 - Estimation**

Pour une renovation standard :
- **Budget materiaux** : ${surface * 80} - ${surface * 150} EUR
- **Main d'oeuvre** : ${surface * 50} - ${surface * 100} EUR
- **Total estime** : ${surface * 130} - ${surface * 250} EUR

Voulez-vous que je detaille les postes de depenses ?`;
  }

  return `Je suis la pour vous aider a planifier votre renovation !

Je peux vous renseigner sur :
- **Les couts** estimes selon votre projet
- **Les delais** de realisation
- **Les materiaux** recommandes
- **Les artisans** disponibles

Decrivez-moi votre projet ou posez-moi une question !`;
};

export function DemoSection({ isOpen, onClose }: DemoSectionProps) {
  const [mode, setMode] = useState<DemoMode>("select");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<RenovationAnalysis | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  const generateId = useCallback(() => {
    messageIdRef.current += 1;
    return `msg-${messageIdRef.current}`;
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Reset modal state when opening - this is intentional as we want a clean state each time
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode("select");
      setMessages([]);
      setSelectedProject(null);
      setUploadedImage(null);
      setAnalysisResults(null);
    }
  }, [isOpen]);

  const startChat = useCallback((projectId: string) => {
    setSelectedProject(projectId);
    setMode("chat");

    const project = projectTypes.find(p => p.id === projectId);
    const welcomeMessage: Message = {
      id: generateId(),
      role: "assistant",
      content: `Parfait, vous souhaitez renover votre **${project?.label.toLowerCase()}** !

Je vais vous aider a estimer votre projet. Pour commencer :

- Quelle est la **surface** approximative ?
- Quel **type de renovation** envisagez-vous ?
- Avez-vous un **budget** en tete ?`,
    };
    setMessages([welcomeMessage]);
  }, [generateId]);

  const handleSend = useCallback(async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const aiResponse: Message = {
      id: generateId(),
      role: "assistant",
      content: getAIResponse(input, selectedProject || undefined),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, aiResponse]);
  }, [input, selectedProject, generateId]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  const handleAnalysisComplete = useCallback((analysis: RenovationAnalysis, imageUrl: string) => {
    setAnalysisResults(analysis);
    setUploadedImage(imageUrl);
    setMode("image_results");
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="rnv-demo-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`rnv-demo-modal ${mode === "image_upload" || mode === "image_results" ? "large" : ""}`}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="demo-header">
            <div className="demo-header-left">
              <div className="demo-avatar">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="demo-title">Renovateur IA</h3>
                <span className="demo-status">
                  {mode === "image_upload" || mode === "image_results" ? "Analyse par photo" : "Assistant renovation"}
                </span>
              </div>
            </div>
            <button className="demo-close" onClick={onClose} aria-label="Fermer">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="demo-content">
            <AnimatePresence mode="wait">
              {mode === "select" && (
                <motion.div
                  key="select"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="demo-select"
                >
                  <h4>Comment souhaitez-vous commencer ?</h4>

                  {/* Two main options */}
                  <div className="mode-options">
                    <button
                      className="mode-option"
                      onClick={() => setMode("image_upload")}
                    >
                      <div className="mode-icon photo">
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                          <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="mode-info">
                        <span className="mode-title">Analyser une photo</span>
                        <span className="mode-desc">Importez une photo de votre piece pour des suggestions personnalisees</span>
                      </div>
                      <span className="mode-badge recommended">Recommande</span>
                    </button>

                    <button
                      className="mode-option"
                      onClick={() => {
                        const welcomeMessage: Message = {
                          id: generateId(),
                          role: "assistant",
                          content: `Bonjour ! Je suis votre assistant renovation.

Quel type de projet souhaitez-vous realiser ?`,
                        };
                        setMessages([welcomeMessage]);
                        setMode("chat");
                      }}
                    >
                      <div className="mode-icon chat">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="mode-info">
                        <span className="mode-title">Discuter avec l&apos;IA</span>
                        <span className="mode-desc">Posez vos questions et obtenez des estimations</span>
                      </div>
                    </button>
                  </div>

                  {/* Quick project types */}
                  <div className="quick-projects">
                    <p className="quick-projects-label">Ou selectionnez directement un projet :</p>
                    <div className="project-grid">
                      {projectTypes.map((project) => (
                        <button
                          key={project.id}
                          className="project-option"
                          onClick={() => startChat(project.id)}
                        >
                          <span className="project-icon">{project.icon}</span>
                          <span className="project-label">{project.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {mode === "image_upload" && (
                <motion.div
                  key="image_upload"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <ImageAnalysis
                    onBack={() => setMode("select")}
                    onAnalysisComplete={handleAnalysisComplete}
                  />
                </motion.div>
              )}

              {mode === "image_results" && analysisResults && (
                <motion.div
                  key="image_results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <AnalysisResults
                    analysis={analysisResults}
                    imageUrl={uploadedImage}
                    onBack={() => setMode("select")}
                    onNewAnalysis={() => {
                      setUploadedImage(null);
                      setAnalysisResults(null);
                      setMode("image_upload");
                    }}
                  />
                </motion.div>
              )}

              {mode === "chat" && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="chat-mode"
                >
                  <button className="chat-back-btn" onClick={() => setMode("select")}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Retour
                  </button>

                  {/* Messages */}
                  <div className="demo-messages">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`demo-message ${message.role}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {message.role === "assistant" && (
                          <div className="message-avatar">
                            <svg viewBox="0 0 24 24" fill="none">
                              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                        )}
                        <div
                          className="message-content"
                          dangerouslySetInnerHTML={{
                            __html: message.content
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\n/g, '<br/>')
                          }}
                        />
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div
                        className="demo-message assistant"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="message-avatar">
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="demo-input-area">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Decrivez votre projet..."
                      className="demo-input"
                    />
                    <button
                      className="demo-send"
                      onClick={handleSend}
                      disabled={!input.trim()}
                    >
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
