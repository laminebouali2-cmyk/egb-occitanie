"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  isOpen: boolean;
  onToggle: () => void;
}

const quickSuggestions = [
  "Calculer le budget",
  "Trouver un designer",
  "Choisir materiaux",
];

const aiResponses: Record<string, string> = {
  budget: `Pour votre projet de renovation, voici une estimation detaillee :

**Materiaux** : 28 000 EUR - 32 000 EUR
- Carrelage sol : 4 500 EUR
- Peinture murs : 2 800 EUR
- Cuisine equipee : 12 000 EUR
- Salle de bain : 8 500 EUR

**Main d'oeuvre** : 15 000 EUR - 18 000 EUR

**Total estime** : 43 000 EUR - 50 000 EUR

Souhaitez-vous que je detaille un poste en particulier ?`,

  designer: `Je peux vous mettre en relation avec nos architectes d'interieur partenaires :

1. **Studio Archi Toulouse** - Specialiste renovation contemporaine
2. **Atelier Design 31** - Expert espaces optimises
3. **Maison & Sens** - Design bioclimatique

Tous sont certifies et travaillent regulierement avec EGB Occitanie. Voulez-vous prendre rendez-vous ?`,

  materiaux: `Voici les materiaux recommandes pour votre projet :

**Sols**
- Parquet chene massif (durable, +15% valeur)
- Carrelage grand format (entretien facile)
- Beton cire (style contemporain)

**Murs**
- Enduit a la chaux (respirant, ecologique)
- Peinture minerale (saine, durable)

**Cuisine**
- Plan de travail quartz ou granit
- Facades stratifie ou laque mat

Je peux simuler l'aspect de ces materiaux dans votre espace. Voulez-vous voir un apercu ?`,

  default: `Je suis l'assistant IA d'EGB Occitanie, specialise dans la renovation et la construction. Je peux vous aider a :

- **Estimer votre budget** de renovation
- **Visualiser** les transformations possibles
- **Choisir les materiaux** adaptes
- **Planifier** les etapes de votre projet
- **Trouver** des artisans qualifies

Que souhaitez-vous faire aujourd'hui ?`,
};

function getAIResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("budget") || lowerMessage.includes("cout") || lowerMessage.includes("prix") || lowerMessage.includes("calculer")) {
    return aiResponses.budget;
  }
  if (lowerMessage.includes("designer") || lowerMessage.includes("architecte") || lowerMessage.includes("trouver")) {
    return aiResponses.designer;
  }
  if (lowerMessage.includes("materiau") || lowerMessage.includes("choisir") || lowerMessage.includes("sol") || lowerMessage.includes("mur")) {
    return aiResponses.materiaux;
  }

  return aiResponses.default;
}

export function AIChat({ isOpen, onToggle }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Bonjour ! Je suis votre assistant renovation IA. Comment puis-je vous aider a transformer votre espace aujourd'hui ?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdCounter = useRef(1);

  const generateMessageId = useCallback(() => {
    const id = `msg-${messageIdCounter.current}`;
    messageIdCounter.current += 1;
    return id;
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = useCallback(async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: generateMessageId(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const aiResponse: Message = {
      id: generateMessageId(),
      role: "assistant",
      content: getAIResponse(messageText),
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, aiResponse]);
  }, [input, generateMessageId]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  return (
    <motion.div
      className={`ai-chat-container ${isOpen ? "open" : "collapsed"}`}
      layout
    >
      {/* Chat Header */}
      <motion.div className="chat-header" onClick={onToggle}>
        <div className="chat-header-left">
          <div className="ai-avatar">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="chat-title">
            <span className="title-text">Assistant IA</span>
            <span className="status-indicator">
              <span className="status-dot online" />
              En ligne
            </span>
          </div>
        </div>
        <motion.button
          className="toggle-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </motion.div>

      {/* Chat Messages */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="messages-container">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.role === "assistant" && (
                    <div className="message-avatar">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  )}
                  <div className="message-content">
                    <div className="message-text" dangerouslySetInnerHTML={{
                      __html: message.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br/>')
                    }} />
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="message assistant"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-avatar">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {/* Quick Suggestions */}
            <div className="quick-suggestions">
              {quickSuggestions.map((suggestion) => (
                <motion.button
                  key={suggestion}
                  className="suggestion-btn"
                  onClick={() => handleSend(suggestion)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="suggestion-icon">
                    {suggestion.includes("budget") && "💰"}
                    {suggestion.includes("designer") && "👤"}
                    {suggestion.includes("materiau") && "🎨"}
                  </span>
                  {suggestion}
                </motion.button>
              ))}
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
              <div className="input-container">
                <motion.button
                  className="attach-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Posez votre question..."
                  className="chat-input"
                />
                <motion.button
                  className="send-btn"
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                <motion.button
                  className="voice-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19V23M8 23H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
