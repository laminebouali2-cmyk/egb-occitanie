/**
 * RENOVATEUR IA - Type Definitions
 */

// ============================================
// Room Types
// ============================================

export type RoomType =
  | "salon"
  | "cuisine"
  | "chambre"
  | "salle_de_bain"
  | "bureau"
  | "grenier"
  | "sous_sol"
  | "garage"
  | "couloir"
  | "entree"
  | "terrasse"
  | "jardin"
  | "autre";

export const ROOM_TYPE_LABELS: Record<RoomType, string> = {
  salon: "Salon",
  cuisine: "Cuisine",
  chambre: "Chambre",
  salle_de_bain: "Salle de bain",
  bureau: "Bureau",
  grenier: "Grenier / Combles",
  sous_sol: "Sous-sol / Cave",
  garage: "Garage",
  couloir: "Couloir",
  entree: "Entrée",
  terrasse: "Terrasse",
  jardin: "Jardin",
  autre: "Autre",
};

// ============================================
// Style Types
// ============================================

export type StyleType =
  | "modern"
  | "scandinavian"
  | "industrial"
  | "classic"
  | "minimalist"
  | "cosy"
  | "contemporary"
  | "bohemian";

export const STYLE_LABELS: Record<StyleType, string> = {
  modern: "Moderne",
  scandinavian: "Scandinave",
  industrial: "Industriel",
  classic: "Classique",
  minimalist: "Minimaliste",
  cosy: "Cosy / Chaleureux",
  contemporary: "Contemporain",
  bohemian: "Bohème",
};

// ============================================
// Project Types
// ============================================

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: "draft" | "active" | "completed" | "archived";
  userId?: string;
  sessionToken?: string;
  rooms: Room[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  originalImageUrl?: string;
  estimatedArea?: number;
  estimatedHeight?: number;
  aiContext?: RoomContext;
  conversations: Conversation[];
  proposals: Proposal[];
  createdAt: Date;
}

export interface RoomContext {
  type: string;
  estimatedArea?: number;
  estimatedHeight?: number;
  detectedElements?: string[];
  lighting?: "bright" | "moderate" | "dark";
  condition?: "new" | "good" | "needs_work" | "poor";
  observations?: string;
}

// ============================================
// Conversation Types
// ============================================

export interface Conversation {
  id: string;
  roomId: string;
  messages: Message[];
  context: ConversationContext;
  status: "active" | "completed" | "abandoned";
  createdAt: Date;
}

export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  // For questions
  question?: Question;
  // For answers
  selectedOptions?: string[];
}

export interface ConversationContext {
  room: RoomContext;
  preferences: UserPreferences;
  questionsAsked: string[];
  currentStep: "understanding" | "questioning" | "proposing" | "refining";
}

export interface UserPreferences {
  usage?: string;
  style?: StyleType;
  waterNeeded?: boolean;
  constraints?: string[];
  budget?: "low" | "medium" | "high" | "no_limit";
}

// ============================================
// Question Types
// ============================================

export interface Question {
  id: string;
  text: string;
  type: "single" | "multiple";
  options: QuestionOption[];
  allowSkip: boolean;
  skipLabel?: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

// ============================================
// Proposal Types
// ============================================

export interface Proposal {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  elements: ProposalElement[];
  generatedImageUrl?: string;
  planImageUrl?: string;
  imagePrompt?: string;
  isSelected: boolean;
  userFeedback?: string;
  createdAt: Date;
}

export interface ProposalElement {
  id: string;
  name: string;
  category: ElementCategory;
  description?: string;
  selected: boolean;
}

export type ElementCategory =
  | "structure"
  | "ouvertures"
  | "sols"
  | "murs"
  | "plafond"
  | "electricite"
  | "plomberie"
  | "menuiserie"
  | "decoration";

// ============================================
// Export Types
// ============================================

export interface ProjectExport {
  id: string;
  projectId: string;
  type: "pdf" | "images" | "share_link";
  fileUrl?: string;
  shareToken?: string;
  isPublic: boolean;
  budgetEstimate?: BudgetEstimate;
  createdAt: Date;
  expiresAt?: Date;
}

export interface BudgetEstimate {
  min: number;
  max: number;
  currency: "EUR";
  breakdown: BudgetItem[];
  disclaimer: string;
}

export interface BudgetItem {
  category: string;
  label: string;
  min: number;
  max: number;
}

// ============================================
// API Response Types
// ============================================

export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ChatResponse {
  message: Message;
  questions?: Question[];
  proposals?: Proposal[];
  context: ConversationContext;
}

export interface ImageGenerationResponse {
  imageUrl: string;
  prompt: string;
  generationTime: number;
}
