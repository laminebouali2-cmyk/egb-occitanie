/**
 * RENOVATEUR IA - Core AI Logic
 *
 * This is the brain of the product - the contextual intelligence
 * that thinks WITH the user about their renovation project.
 */

import OpenAI from "openai";

// Types
export interface RoomContext {
  type: string;
  estimatedArea?: number;
  estimatedHeight?: number;
  detectedElements?: string[];
  lighting?: "bright" | "moderate" | "dark";
  condition?: "new" | "good" | "needs_work" | "poor";
}

export interface UserPreferences {
  usage?: string;
  style?: string;
  waterNeeded?: boolean;
  constraints?: string[];
  budget?: "low" | "medium" | "high" | "no_limit";
}

export interface ConversationContext {
  room: RoomContext;
  preferences: UserPreferences;
  questionsAsked: string[];
  currentStep: "understanding" | "questioning" | "proposing" | "refining";
}

export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIQuestion {
  id: string;
  text: string;
  type: "single" | "multiple";
  options: {
    id: string;
    label: string;
    icon?: string;
  }[];
  allowSkip: boolean;
  skipLabel?: string;
}

export interface AIProposal {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  elements: {
    id: string;
    name: string;
    category: string;
    selected: boolean;
  }[];
  imagePrompt: string;
}

// System prompt that defines the AI's personality and behavior
const SYSTEM_PROMPT = `Tu es un architecte d'intérieur IA expert, travaillant pour "Renovateur IA".

TON RÔLE :
Tu es un partenaire de réflexion pour les projets de rénovation. Tu ne fais pas que répondre - tu PENSES avec l'utilisateur, tu poses des questions pertinentes, et tu proposes des idées auxquelles il n'aurait pas pensé.

TON COMPORTEMENT :
1. COMPRENDRE D'ABORD - Ne propose JAMAIS avant d'avoir compris le contexte
2. QUESTIONS CIBLÉES - Pose 2-4 questions essentielles avant de proposer
3. EXPERTISE - Partage ton expertise (contraintes techniques, bonnes pratiques)
4. INSPIRATION - Suggère des possibilités que l'utilisateur n'imaginait pas
5. HONNÊTETÉ - Si quelque chose n'est pas faisable, dis-le clairement

FORMAT DE TES QUESTIONS :
Tu dois formatter tes questions en JSON pour qu'elles s'affichent comme choix multiples.
Chaque question doit avoir une option "Je ne sais pas encore" ou "Pas de préférence".

FORMAT DE TES PROPOSITIONS :
Quand tu proposes des idées, structure-les clairement avec :
- Un titre accrocheur
- 3-4 points clés
- Les éléments modifiables
- Un prompt pour la génération d'image

CONTRAINTES TECHNIQUES QUE TU CONNAIS :
- Hauteur sous plafond minimum habitable : 1.80m (idéal 2.20m+)
- Mezzanine : hauteur totale minimum 4m pour confort
- Salle de bain : évacuations nécessaires, ventilation obligatoire
- Cuisine : normes électriques, distance points d'eau/électricité
- Permis de construire : >40m² d'extension ou modification façade
- Déclaration préalable : 5-40m² d'extension

STYLES QUE TU MAÎTRISES :
- Moderne : lignes épurées, couleurs neutres, matériaux nobles
- Scandinave : bois clair, blanc, fonctionnel, hygge
- Industriel : métal, briques, béton, espaces ouverts
- Classique : moulures, symétrie, matériaux traditionnels
- Contemporain : mix des styles, personnalisé
- Minimaliste : essentiel uniquement, espaces zen

Tu réponds TOUJOURS en français.`;

// Question templates based on room type and context
const QUESTION_TEMPLATES: Record<string, AIQuestion[]> = {
  grenier: [
    {
      id: "usage",
      text: "Qui utilisera principalement cet espace ?",
      type: "single",
      options: [
        { id: "couple", label: "Moi / Mon couple", icon: "👫" },
        { id: "child", label: "Un enfant / adolescent", icon: "🧒" },
        { id: "guest", label: "Des invités occasionnels", icon: "🏠" },
        { id: "work", label: "Usage professionnel (bureau)", icon: "💼" },
        { id: "leisure", label: "Loisirs (salle de jeux, cinéma)", icon: "🎮" },
      ],
      allowSkip: true,
      skipLabel: "Je ne sais pas encore",
    },
    {
      id: "water",
      text: "Avez-vous besoin d'un point d'eau ?",
      type: "single",
      options: [
        { id: "full_bath", label: "Salle de bain complète", icon: "🚿" },
        { id: "shower", label: "Douche uniquement", icon: "🚿" },
        { id: "sink", label: "Juste un lavabo", icon: "🚰" },
        { id: "none", label: "Non, pas nécessaire", icon: "❌" },
      ],
      allowSkip: false,
    },
  ],
  cuisine: [
    {
      id: "layout",
      text: "Comment est actuellement votre cuisine ?",
      type: "single",
      options: [
        { id: "closed", label: "Fermée (avec murs)", icon: "🚪" },
        { id: "semi_open", label: "Semi-ouverte (avec bar/comptoir)", icon: "🍽️" },
        { id: "open", label: "Ouverte sur le salon", icon: "🏠" },
      ],
      allowSkip: false,
    },
    {
      id: "goal",
      text: "Quel est votre objectif principal ?",
      type: "single",
      options: [
        { id: "more_space", label: "Plus d'espace de travail", icon: "📐" },
        { id: "modern", label: "Moderniser l'équipement", icon: "✨" },
        { id: "open_up", label: "Ouvrir sur le salon", icon: "🔓" },
        { id: "storage", label: "Plus de rangements", icon: "🗄️" },
        { id: "full_reno", label: "Tout refaire", icon: "🔨" },
      ],
      allowSkip: true,
      skipLabel: "Je veux explorer les possibilités",
    },
  ],
  // Default questions for any room type
  default: [
    {
      id: "condition",
      text: "Dans quel état est cette pièce actuellement ?",
      type: "single",
      options: [
        { id: "good", label: "Bon état, juste envie de changement", icon: "👍" },
        { id: "dated", label: "Vieillotte, besoin de modernisation", icon: "📅" },
        { id: "needs_work", label: "Travaux nécessaires (humidité, etc.)", icon: "🔧" },
        { id: "empty", label: "Vide / à aménager", icon: "📦" },
      ],
      allowSkip: false,
    },
  ],
  // Style question (always asked)
  style: [
    {
      id: "style",
      text: "Quel style vous attire ?",
      type: "single",
      options: [
        { id: "modern", label: "Moderne", icon: "🏢" },
        { id: "scandinavian", label: "Scandinave", icon: "🌲" },
        { id: "industrial", label: "Industriel", icon: "🏭" },
        { id: "classic", label: "Classique", icon: "🏛️" },
        { id: "minimalist", label: "Minimaliste", icon: "⬜" },
        { id: "cosy", label: "Cosy / Chaleureux", icon: "🛋️" },
      ],
      allowSkip: true,
      skipLabel: "Surprenez-moi",
    },
  ],
};

/**
 * Get relevant questions based on room type and current context
 */
export function getQuestionsForRoom(
  roomType: string,
  context: Partial<ConversationContext>
): AIQuestion[] {
  const roomQuestions = QUESTION_TEMPLATES[roomType.toLowerCase()] || QUESTION_TEMPLATES.default;
  const styleQuestion = QUESTION_TEMPLATES.style;

  // Filter out already asked questions
  const askedIds = context.questionsAsked || [];
  const availableQuestions = [...roomQuestions, ...styleQuestion].filter(
    (q) => !askedIds.includes(q.id)
  );

  return availableQuestions;
}

/**
 * Build the AI prompt based on context
 */
export function buildContextPrompt(context: ConversationContext): string {
  let prompt = "";

  if (context.room) {
    prompt += `PIÈCE ANALYSÉE:\n`;
    prompt += `- Type: ${context.room.type}\n`;
    if (context.room.estimatedArea) {
      prompt += `- Surface estimée: ${context.room.estimatedArea}m²\n`;
    }
    if (context.room.estimatedHeight) {
      prompt += `- Hauteur sous plafond: ${context.room.estimatedHeight}m\n`;
    }
    if (context.room.detectedElements?.length) {
      prompt += `- Éléments détectés: ${context.room.detectedElements.join(", ")}\n`;
    }
    if (context.room.lighting) {
      prompt += `- Luminosité: ${context.room.lighting}\n`;
    }
  }

  if (context.preferences) {
    prompt += `\nPRÉFÉRENCES UTILISATEUR:\n`;
    if (context.preferences.usage) {
      prompt += `- Usage souhaité: ${context.preferences.usage}\n`;
    }
    if (context.preferences.style) {
      prompt += `- Style préféré: ${context.preferences.style}\n`;
    }
    if (context.preferences.waterNeeded !== undefined) {
      prompt += `- Point d'eau: ${context.preferences.waterNeeded ? "Oui" : "Non"}\n`;
    }
    if (context.preferences.constraints?.length) {
      prompt += `- Contraintes: ${context.preferences.constraints.join(", ")}\n`;
    }
  }

  return prompt;
}

/**
 * Generate proposals based on conversation context
 */
export function generateProposalPrompts(context: ConversationContext): AIProposal[] {
  // This would be enhanced with actual AI generation
  // For now, return template-based proposals

  const style = context.preferences?.style || "modern";
  const roomType = context.room?.type || "piece";
  const usage = context.preferences?.usage || "polyvalent";

  return [
    {
      id: "proposal_1",
      title: `${roomType} ${style} - Option lumineuse`,
      description: `Une configuration qui maximise la lumière naturelle avec des lignes épurées.`,
      keyPoints: [
        "Grande ouverture vitrée",
        "Couleurs claires pour agrandir l'espace",
        "Rangements intégrés discrets",
      ],
      elements: [
        { id: "window", name: "Verrière de toit", category: "ouvertures", selected: true },
        { id: "floor", name: "Parquet chêne clair", category: "sols", selected: true },
        { id: "walls", name: "Murs blancs texturés", category: "murs", selected: true },
      ],
      imagePrompt: `Interior design photo, ${roomType} renovation, ${style} style, bright natural light, ${usage} space, professional photography, 8k, detailed`,
    },
    {
      id: "proposal_2",
      title: `${roomType} ${style} - Option cocooning`,
      description: `Un espace chaleureux et enveloppant, idéal pour se ressourcer.`,
      keyPoints: [
        "Matériaux naturels et texturés",
        "Éclairage d'ambiance",
        "Coin lecture/détente intégré",
      ],
      elements: [
        { id: "lighting", name: "Éclairage indirect", category: "électricité", selected: true },
        { id: "floor", name: "Parquet noyer", category: "sols", selected: true },
        { id: "walls", name: "Enduit à la chaux", category: "murs", selected: true },
      ],
      imagePrompt: `Interior design photo, ${roomType} renovation, cozy ${style} style, warm lighting, ${usage} space, inviting atmosphere, professional photography, 8k`,
    },
  ];
}

/**
 * Main AI class for renovation conversations
 */
export class RenovationAI {
  private openai: OpenAI;

  constructor(apiKey: string) {
    this.openai = new OpenAI({ apiKey });
  }

  /**
   * Analyze an uploaded image to understand the room
   */
  async analyzeRoomImage(imageUrl: string): Promise<RoomContext> {
    const response = await this.openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analyse cette image d'une pièce et donne-moi les informations suivantes en JSON:
              {
                "type": "type de pièce (salon, cuisine, chambre, grenier, etc.)",
                "estimatedArea": "surface estimée en m² (nombre)",
                "estimatedHeight": "hauteur sous plafond estimée en m (nombre)",
                "detectedElements": ["liste des éléments visibles: fenêtres, portes, radiateurs, etc."],
                "lighting": "bright/moderate/dark",
                "condition": "new/good/needs_work/poor",
                "observations": "autres observations utiles pour une rénovation"
              }`,
            },
            {
              type: "image_url",
              image_url: { url: imageUrl },
            },
          ],
        },
      ],
      max_tokens: 1000,
    });

    const content = response.choices[0]?.message?.content || "{}";

    // Parse JSON from response
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch {
      console.error("Failed to parse room analysis:", content);
    }

    return { type: "autre" };
  }

  /**
   * Process user message and generate AI response
   */
  async chat(
    messages: AIMessage[],
    context: ConversationContext
  ): Promise<{
    response: string;
    questions?: AIQuestion[];
    proposals?: AIProposal[];
    updatedContext: ConversationContext;
  }> {
    const contextPrompt = buildContextPrompt(context);

    const response = await this.openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT + "\n\n" + contextPrompt },
        ...messages,
      ],
      max_tokens: 2000,
    });

    const aiResponse = response.choices[0]?.message?.content || "";

    // Determine if we should show questions or proposals
    const shouldAskQuestions = context.currentStep === "questioning" ||
                               context.currentStep === "understanding";
    const shouldPropose = context.currentStep === "proposing";

    let questions: AIQuestion[] | undefined;
    let proposals: AIProposal[] | undefined;

    if (shouldAskQuestions) {
      questions = getQuestionsForRoom(context.room?.type || "default", context);
    }

    if (shouldPropose) {
      proposals = generateProposalPrompts(context);
    }

    return {
      response: aiResponse,
      questions,
      proposals,
      updatedContext: context,
    };
  }
}

export default RenovationAI;
