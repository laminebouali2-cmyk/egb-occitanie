"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface DemoSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectTypes = [
  { id: "kitchen", label: "Cuisine", icon: "🍳" },
  { id: "bathroom", label: "Salle de bain", icon: "🚿" },
  { id: "living", label: "Salon", icon: "🛋️" },
  { id: "bedroom", label: "Chambre", icon: "🛏️" },
  { id: "full", label: "Renovation complete", icon: "🏠" },
];

const getAIResponse = (message: string, projectType?: string): string => {
  const lowerMessage = message.toLowerCase();

  // Budget questions
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

  // Duration questions
  if (lowerMessage.includes("duree") || lowerMessage.includes("temps") || lowerMessage.includes("combien de jours") || lowerMessage.includes("semaine")) {
    return `**Durees moyennes de renovation :**

- **Cuisine** : 2 a 4 semaines
- **Salle de bain** : 1 a 3 semaines
- **Piece complete** : 1 a 2 semaines
- **Appartement entier** : 2 a 4 mois

Ces delais peuvent varier selon :
- La complexite des travaux
- Les delais de livraison des materiaux
- La disponibilite des artisans

Quel type de travaux envisagez-vous ?`;
  }

  // Materials questions
  if (lowerMessage.includes("materiau") || lowerMessage.includes("carrelage") || lowerMessage.includes("parquet") || lowerMessage.includes("peinture")) {
    return `**Recommandations materiaux :**

**Sols**
- Carrelage gres cerame : 30-80 EUR/m2 (durable, facile d'entretien)
- Parquet contrecolle : 40-100 EUR/m2 (chaleureux, elegant)
- Vinyl/LVT : 20-50 EUR/m2 (economique, resistant a l'eau)

**Murs**
- Peinture qualite pro : 25-40 EUR/m2 pose comprise
- Faience : 40-80 EUR/m2 (ideal cuisines/SDB)

Quelle piece souhaitez-vous renover ?`;
  }

  // Artisan questions
  if (lowerMessage.includes("artisan") || lowerMessage.includes("professionnel") || lowerMessage.includes("entreprise") || lowerMessage.includes("trouver")) {
    return `**Mise en relation artisans**

Je peux vous mettre en contact avec des professionnels verifies dans votre region :

- **Plombiers** certifies RGE
- **Electriciens** agrees
- **Carreleurs** et **peintres** experimentes
- **Cuisinistes** partenaires

Tous nos artisans sont :
✓ Assures decennale
✓ Notes par nos clients
✓ Disponibles sous 48h pour un devis

Souhaitez-vous recevoir des devis gratuits ?`;
  }

  // Surface/size mentioned
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

  // Default response
  return `Je suis la pour vous aider a planifier votre renovation !

Je peux vous renseigner sur :
- **Les couts** estimes selon votre projet
- **Les delais** de realisation
- **Les materiaux** recommandes
- **Les artisans** disponibles pres de chez vous

Decrivez-moi votre projet ou posez-moi une question !`;
};

export function DemoSection({ isOpen, onClose }: DemoSectionProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [step, setStep] = useState<"select" | "chat">("select");
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

  useEffect(() => {
    if (isOpen && step === "select") {
      // Reset state when opening
      setMessages([]);
      setSelectedProject(null);
      setStep("select");
    }
  }, [isOpen, step]);

  const startChat = useCallback((projectId: string) => {
    setSelectedProject(projectId);
    setStep("chat");

    const project = projectTypes.find(p => p.id === projectId);
    const welcomeMessage: Message = {
      id: generateId(),
      role: "assistant",
      content: `Parfait, vous souhaitez renover votre **${project?.label.toLowerCase()}** !

Je vais vous aider a estimer votre projet. Pour commencer :

- Quelle est la **surface** approximative ?
- Quel **type de renovation** envisagez-vous ? (rafraichissement, renovation partielle, complete)
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

    // Simulate AI thinking
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
          className="rnv-demo-modal"
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
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="demo-title">Renovateur IA</h3>
                <span className="demo-status">En ligne - Pret a vous aider</span>
              </div>
            </div>
            <button className="demo-close" onClick={onClose} aria-label="Fermer">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="demo-content">
            {step === "select" ? (
              <div className="demo-select">
                <h4>Quel type de projet souhaitez-vous estimer ?</h4>
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
            ) : (
              <>
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
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
