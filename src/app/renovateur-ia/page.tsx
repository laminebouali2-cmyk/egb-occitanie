"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface Question {
  id: string;
  text: string;
  type: "single" | "multiple";
  options: { id: string; label: string; icon?: string }[];
  allowSkip: boolean;
  skipLabel?: string;
}

interface Proposal {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  imagePrompt: string;
  generatedImage?: string;
  isGenerating?: boolean;
}

interface ConversationContext {
  currentStep: string;
  questionsAsked: string[];
  preferences: Record<string, string>;
  room?: {
    type?: string;
    estimatedArea?: number;
    detectedElements?: string[];
  };
}

type AppMode = "select" | "upload" | "describe" | "chat";

export default function RenovateurIAPage() {
  const [mode, setMode] = useState<AppMode>("select");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [context, setContext] = useState<ConversationContext>({
    currentStep: "understanding",
    questionsAsked: [],
    preferences: {},
  });
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Send message to API
  const sendMessage = useCallback(async (content: string, imageBase64?: string) => {
    const userMessage: Message = {
      id: `msg_${Date.now()}`,
      role: "user",
      content,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);
    setQuestions([]);

    try {
      const response = await fetch("/api/renovateur/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          context,
          roomImageBase64: imageBase64,
        }),
      });

      const data = await response.json();

      if (data.success && data.data) {
        const assistantMessage: Message = {
          id: data.data.message.id,
          role: "assistant",
          content: data.data.message.content,
        };
        setMessages((prev) => [...prev, assistantMessage]);

        if (data.data.questions) {
          setQuestions(data.data.questions);
        }
        if (data.data.proposals) {
          setProposals(data.data.proposals);
        }
        if (data.data.context) {
          setContext(data.data.context);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `error_${Date.now()}`,
          role: "assistant",
          content: "Désolé, une erreur est survenue. Veuillez réessayer.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, context]);

  // Handle image upload
  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setUploadedImage(base64);
        setMode("chat");
        sendMessage("Voici une photo de ma pièce. Pouvez-vous l'analyser et me poser des questions sur mon projet ?", base64);
      };
      reader.readAsDataURL(file);
    }
  }, [sendMessage]);

  // Handle drag and drop
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setUploadedImage(base64);
        setMode("chat");
        sendMessage("Voici une photo de ma pièce. Pouvez-vous l'analyser et me poser des questions sur mon projet ?", base64);
      };
      reader.readAsDataURL(file);
    }
  }, [sendMessage]);

  // Handle question answer
  const handleAnswer = useCallback((questionId: string, answerId: string, answerLabel: string) => {
    setContext((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, [questionId]: answerId },
      questionsAsked: [...prev.questionsAsked, questionId],
    }));
    setQuestions([]);
    sendMessage(answerLabel);
  }, [sendMessage]);

  // Handle text input submit
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      if (mode === "describe") {
        setMode("chat");
      }
      sendMessage(inputValue.trim());
      setInputValue("");
    }
  }, [inputValue, isLoading, mode, sendMessage]);

  // Handle back button
  const handleBack = useCallback(() => {
    setMode("select");
    setUploadedImage(null);
    setMessages([]);
    setQuestions([]);
    setProposals([]);
    setContext({
      currentStep: "understanding",
      questionsAsked: [],
      preferences: {},
    });
    setInputValue("");
  }, []);

  // Handle image generation for a proposal
  const handleGenerateImage = useCallback(async (proposalId: string) => {
    const proposal = proposals.find((p) => p.id === proposalId);
    if (!proposal || proposal.isGenerating) return;

    // Mark as generating
    setProposals((prev) =>
      prev.map((p) =>
        p.id === proposalId ? { ...p, isGenerating: true } : p
      )
    );

    try {
      const response = await fetch("/api/renovateur/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: proposal.imagePrompt,
          style: context.preferences.style || "modern",
          roomType: context.room?.type,
        }),
      });

      const data = await response.json();

      if (data.success && data.data?.imageUrl) {
        setProposals((prev) =>
          prev.map((p) =>
            p.id === proposalId
              ? { ...p, generatedImage: data.data.imageUrl, isGenerating: false }
              : p
          )
        );
      } else {
        throw new Error(data.error || "Generation failed");
      }
    } catch (error) {
      console.error("Image generation error:", error);
      setProposals((prev) =>
        prev.map((p) =>
          p.id === proposalId ? { ...p, isGenerating: false } : p
        )
      );
      // Show error in a toast or alert
      alert("Erreur lors de la generation de l'image. Veuillez reessayer.");
    }
  }, [proposals, context]);

  return (
    <div className="rnv-app-wrapper">
      {/* Header */}
      <header className="rnv-app-header">
        <div className="rnv-app-brand">
          <div className="brand-logo">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ai-badge">IA</span>
          </div>
          <span className="brand-name">Renovateur IA</span>
        </div>
        {mode !== "select" && (
          <button onClick={handleBack} className="back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Retour</span>
          </button>
        )}
      </header>

      {/* Main */}
      <main className="rnv-app-content">
        <AnimatePresence mode="wait">
          {/* Selection Screen */}
          {mode === "select" && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="screen-select"
            >
              <div className="select-hero">
                <h1>Bienvenue sur Renovateur IA</h1>
                <p>
                  Je suis votre assistant intelligent pour imaginer et planifier vos projets de renovation.
                  Je pose des questions pour comprendre vos besoins avant de vous proposer des idees.
                </p>
              </div>

              <div className="select-options">
                {/* Photo Card */}
                <label
                  className={`option-card primary ${isDragging ? "dragging" : ""}`}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="sr-only"
                  />
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </div>
                  <div className="card-content">
                    <h3>Commencer avec une photo</h3>
                    <p>Uploadez ou glissez une photo de votre piece</p>
                  </div>
                  <span className="recommended-badge">Recommande</span>
                </label>

                {/* Text Card */}
                <button
                  className="option-card"
                  onClick={() => setMode("describe")}
                >
                  <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                  </div>
                  <div className="card-content">
                    <h3>Decrire mon projet</h3>
                    <p>Pas de photo ? Decrivez votre projet</p>
                  </div>
                </button>
              </div>

              <div className="select-features">
                <div className="feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                  <span>Intelligence contextuelle</span>
                </div>
                <div className="feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <span>Questions avant suggestions</span>
                </div>
                <div className="feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <span>Visualisations IA</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Describe Screen */}
          {mode === "describe" && (
            <motion.div
              key="describe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="screen-describe"
            >
              <h2>Decrivez votre projet</h2>
              <p>Expliquez-moi ce que vous avez en tete</p>

              <form onSubmit={handleSubmit} className="describe-form">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ex: J'ai une maison de 100m² et je voudrais transformer le grenier en chambre pour mon fils adolescent..."
                  rows={5}
                  autoFocus
                />
                <button type="submit" disabled={!inputValue.trim()}>
                  Demarrer la conversation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>

              <div className="quick-suggestions">
                <span>Idees :</span>
                <div className="chips">
                  {[
                    "Renover ma cuisine",
                    "Amenager mes combles",
                    "Ouvrir le salon",
                    "Moderniser la salle de bain",
                    "Ajouter une extension",
                  ].map((text) => (
                    <button key={text} onClick={() => setInputValue(text)}>
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Chat Screen */}
          {mode === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="screen-chat"
            >
              {/* Image Preview */}
              {uploadedImage && (
                <div className="uploaded-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={uploadedImage} alt="Votre piece" />
                </div>
              )}

              {/* Messages */}
              <div className="chat-messages">
                {messages.map((msg) => (
                  <div key={msg.id} className={`chat-message ${msg.role}`}>
                    {msg.role === "assistant" && (
                      <div className="avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                      </div>
                    )}
                    <div className="bubble">
                      {msg.content.split("\n").map((line, i) => (
                        <p key={i}>{line || <br />}</p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Loading */}
                {isLoading && (
                  <div className="chat-message assistant">
                    <div className="avatar">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                      </svg>
                    </div>
                    <div className="bubble loading">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                )}

                {/* Questions */}
                {questions.length > 0 && !isLoading && (
                  <div className="questions-panel">
                    {questions.map((q) => (
                      <div key={q.id} className="question-block">
                        <h4>{q.text}</h4>
                        <div className="question-options">
                          {q.options.map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => handleAnswer(q.id, opt.id, opt.label)}
                              className="question-option"
                            >
                              {opt.icon && <span className="opt-icon">{opt.icon}</span>}
                              <span>{opt.label}</span>
                            </button>
                          ))}
                          {q.allowSkip && (
                            <button
                              onClick={() => handleAnswer(q.id, "skip", q.skipLabel || "Je ne sais pas")}
                              className="question-option skip"
                            >
                              {q.skipLabel || "Je ne sais pas"}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Proposals */}
                {proposals.length > 0 && !isLoading && (
                  <div className="proposals-panel">
                    <h3>Mes propositions :</h3>
                    <div className="proposals-list">
                      {proposals.map((p) => (
                        <div key={p.id} className="proposal-card">
                          {/* Generated Image */}
                          {p.generatedImage && (
                            <div className="proposal-image">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={p.generatedImage} alt={p.title} />
                            </div>
                          )}
                          <h4>{p.title}</h4>
                          <p>{p.description}</p>
                          <ul>
                            {p.keyPoints.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                          <button
                            className={`btn-generate ${p.isGenerating ? "generating" : ""}`}
                            onClick={() => handleGenerateImage(p.id)}
                            disabled={p.isGenerating}
                          >
                            {p.isGenerating ? (
                              <>
                                <span className="spinner"></span>
                                Generation en cours...
                              </>
                            ) : p.generatedImage ? (
                              <>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M23 4l-11 11-4-4m-3 3l-4-4L12 21l11-11"/>
                                </svg>
                                Regenerer l&apos;image
                              </>
                            ) : (
                              <>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                                  <circle cx="8.5" cy="8.5" r="1.5"/>
                                  <path d="M21 15l-5-5L5 21"/>
                                </svg>
                                Generer l&apos;image IA
                              </>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="chat-input">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Votre message..."
                  disabled={isLoading}
                />
                <button type="submit" disabled={!inputValue.trim() || isLoading}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
