/**
 * RENOVATEUR IA - Chat API Route
 *
 * Uses Google Gemini for conversation (FREE!)
 */

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ConversationContext, Message, Question } from "@/types/renovateur";

// Initialize Gemini
const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

// System prompt for the renovation AI
const SYSTEM_PROMPT = `Tu es un architecte d'intérieur IA expert de niveau international, travaillant pour "Renovateur IA".

TON RÔLE :
Tu es un partenaire de réflexion EXPERT pour les projets de rénovation. Tu ne fais pas que répondre - tu PENSES avec l'utilisateur, tu poses des questions pertinentes, et tu proposes des idées innovantes auxquelles il n'aurait pas pensé.

RÈGLES IMPORTANTES :
1. COMPRENDRE D'ABORD - Ne propose JAMAIS de solutions avant d'avoir posé des questions pour comprendre le contexte
2. QUESTIONS CIBLÉES - Pose 2-4 questions essentielles avant de proposer
3. FORMAT JSON - Quand tu poses des questions, inclus-les dans un bloc JSON à la fin de ta réponse
4. EXPERTISE - Partage ton expertise (contraintes techniques, bonnes pratiques)
5. INSPIRATION - Suggère des possibilités que l'utilisateur n'imaginait pas

FORMAT POUR LES QUESTIONS (inclure à la fin de ta réponse entre balises) :
<questions>
[
  {
    "id": "usage",
    "text": "Qui utilisera cet espace ?",
    "type": "single",
    "options": [
      {"id": "family", "label": "La famille", "icon": "👨‍👩‍👧"},
      {"id": "work", "label": "Télétravail", "icon": "💼"}
    ],
    "allowSkip": true,
    "skipLabel": "Je ne sais pas encore"
  }
]
</questions>

FORMAT POUR LES PROPOSITIONS (quand tu as assez d'infos) :
<proposals>
[
  {
    "id": "prop1",
    "title": "Option lumineuse",
    "description": "Description courte",
    "keyPoints": ["Point 1", "Point 2", "Point 3"],
    "imagePrompt": "VERY detailed prompt for image generation in english - include specific furniture, colors, materials, lighting, camera angle, interior photography style"
  }
]
</proposals>

CONTRAINTES TECHNIQUES QUE TU CONNAIS :
- Hauteur sous plafond minimum habitable : 1.80m (idéal 2.20m+)
- Mezzanine : hauteur totale minimum 4m pour confort
- Salle de bain : évacuations nécessaires, ventilation obligatoire
- Cuisine : triangle d'activité (évier-cuisson-frigo) < 6m
- Électricité : normes NF C 15-100, différentiel obligatoire
- Permis de construire : >40m² d'extension ou modification façade
- Déclaration préalable : 5-40m² extension selon zone

Tu réponds TOUJOURS en français. Sois chaleureux, professionnel et concis.`;

// VISION PROMPT - Specialized for detailed room analysis
const VISION_ANALYSIS_PROMPT = `Tu es un expert en architecture d'intérieur avec 20 ans d'expérience. Analyse cette photo de pièce en DÉTAIL.

ANALYSE OBLIGATOIRE (sois précis et technique) :

1. **TYPE DE PIÈCE** : Identifie avec certitude (salon, cuisine, chambre, salle de bain, etc.)

2. **DIMENSIONS ESTIMÉES** :
   - Estime la surface en m² (utilise les éléments de référence : portes standard 80cm, fenêtres, meubles)
   - Hauteur sous plafond approximative
   - Configuration (carré, rectangulaire, en L, etc.)

3. **ÉLÉMENTS EXISTANTS** (liste exhaustive) :
   - Fenêtres/portes : nombre, type, orientation lumière
   - Revêtements : sol (parquet, carrelage, moquette), murs, plafond
   - Menuiseries : portes, placards, encadrements
   - Électricité visible : prises, interrupteurs, luminaires
   - Chauffage : radiateurs, convecteurs, etc.

4. **ANALYSE LUMIÈRE** :
   - Type d'éclairage naturel (direct, indirect, zénithal)
   - Points lumineux artificiels
   - Orientation probable (nord/sud/est/ouest selon la lumière)

5. **STYLE ACTUEL** :
   - Époque de la construction/décoration
   - Style dominant (moderne, ancien, industriel, etc.)
   - État général (neuf, bon état, à rafraîchir, à rénover)

6. **POTENTIEL DE RÉNOVATION** :
   - Points forts à conserver
   - Éléments datés à moderniser
   - Contraintes visibles (poutre, pilier, etc.)

7. **OPPORTUNITÉS** :
   - Murs potentiellement non porteurs à ouvrir
   - Espaces perdus à optimiser
   - Idées créatives adaptées à l'espace

Après ton analyse, pose 2-3 questions pertinentes pour comprendre le projet de l'utilisateur.

IMPORTANT pour imagePrompt : Quand tu feras des propositions, le prompt pour générer l'image doit être ULTRA DÉTAILLÉ en anglais :
- Mentionner la pièce exacte et ses dimensions
- Décrire précisément les meubles, matériaux, couleurs
- Inclure l'éclairage, l'ambiance, l'heure du jour
- Spécifier l'angle de caméra et le style photo
- Ajouter : "professional interior photography, architectural digest, 8k, photorealistic"

Réponds en français.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, context, roomImageBase64 } = body as {
      messages: Message[];
      context?: Partial<ConversationContext>;
      roomImageBase64?: string;
    };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { success: false, error: "Messages array is required" },
        { status: 400 }
      );
    }

    // If no Gemini key, return a demo response
    if (!genAI) {
      console.log("No Gemini API key, returning demo response");
      return NextResponse.json({
        success: true,
        data: getDemoResponse(messages, context),
      });
    }

    // Use Gemini 1.5 Pro (free and powerful)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // Build context string
    let contextString = "";
    if (context?.room) {
      contextString += `\nCONTEXTE DE LA PIÈCE:\n`;
      contextString += `- Type: ${context.room.type || "non spécifié"}\n`;
      if (context.room.estimatedArea) {
        contextString += `- Surface estimée: ${context.room.estimatedArea}m²\n`;
      }
      if (context.room.detectedElements?.length) {
        contextString += `- Éléments détectés: ${context.room.detectedElements.join(", ")}\n`;
      }
    }
    if (context?.preferences) {
      contextString += `\nPRÉFÉRENCES:\n`;
      if (context.preferences.usage) contextString += `- Usage: ${context.preferences.usage}\n`;
      if (context.preferences.style) contextString += `- Style: ${context.preferences.style}\n`;
    }

    // Build conversation history for Gemini
    const history = messages.slice(0, -1).map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    // Start chat with history
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Voici tes instructions:\n" + SYSTEM_PROMPT + contextString }],
        },
        {
          role: "model",
          parts: [{ text: "Compris ! Je suis prêt à aider avec les projets de rénovation. Je poserai des questions avant de proposer des solutions." }],
        },
        ...history,
      ],
    });

    let result;

    // If there's an image, use vision capability with DETAILED analysis
    if (roomImageBase64 && messages.length === 1) {
      // Convert base64 to the format Gemini expects
      const imageData = roomImageBase64.replace(/^data:image\/\w+;base64,/, "");

      // Detect mime type from base64 header
      const mimeMatch = roomImageBase64.match(/^data:(image\/\w+);base64,/);
      const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

      const visionModel = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 4096,
        }
      });

      result = await visionModel.generateContent([
        {
          inlineData: {
            mimeType,
            data: imageData,
          },
        },
        { text: VISION_ANALYSIS_PROMPT + "\n\n---\n\nMessage de l'utilisateur: " + lastMessage.content },
      ]);
    } else {
      result = await chat.sendMessage(lastMessage.content);
    }

    const aiContent = result.response.text();

    // Parse questions and proposals from the response
    const { text, questions, proposals } = parseAIResponse(aiContent);

    // Determine next step based on response content
    let currentStep: ConversationContext["currentStep"] = "questioning";
    if (proposals && proposals.length > 0) {
      currentStep = "proposing";
    }

    return NextResponse.json({
      success: true,
      data: {
        message: {
          id: `msg_${Date.now()}`,
          role: "assistant",
          content: text,
          timestamp: new Date(),
          question: questions?.[0],
        },
        questions,
        proposals,
        context: {
          ...context,
          currentStep,
          questionsAsked: [
            ...(context?.questionsAsked || []),
            ...(questions?.map((q: Question) => q.id) || []),
          ],
        },
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process chat message: " + (error as Error).message },
      { status: 500 }
    );
  }
}

/**
 * Parse AI response to extract questions and proposals
 */
function parseAIResponse(content: string): {
  text: string;
  questions?: Question[];
  proposals?: Array<{
    id: string;
    title: string;
    description: string;
    keyPoints: string[];
    imagePrompt: string;
  }>;
} {
  let text = content;
  let questions: Question[] | undefined;
  let proposals: Array<{
    id: string;
    title: string;
    description: string;
    keyPoints: string[];
    imagePrompt: string;
  }> | undefined;

  // Extract questions block
  const questionsMatch = content.match(/<questions>([\s\S]*?)<\/questions>/);
  if (questionsMatch) {
    try {
      questions = JSON.parse(questionsMatch[1]);
      text = text.replace(questionsMatch[0], "").trim();
    } catch {
      console.error("Failed to parse questions JSON");
    }
  }

  // Extract proposals block
  const proposalsMatch = content.match(/<proposals>([\s\S]*?)<\/proposals>/);
  if (proposalsMatch) {
    try {
      proposals = JSON.parse(proposalsMatch[1]);
      text = text.replace(proposalsMatch[0], "").trim();
    } catch {
      console.error("Failed to parse proposals JSON");
    }
  }

  // Also try JSON code blocks as fallback
  const jsonBlockRegex = /```json\s*([\s\S]*?)```/g;
  let match;
  while ((match = jsonBlockRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed.questions && !questions) {
        questions = parsed.questions;
      }
      if (parsed.proposals && !proposals) {
        proposals = parsed.proposals;
      }
      text = text.replace(match[0], "").trim();
    } catch {
      // Invalid JSON, keep as text
    }
  }

  return { text, questions, proposals };
}

/**
 * Demo response when no API key is configured
 */
function getDemoResponse(
  messages: Message[],
  context?: Partial<ConversationContext>
) {
  const isFirstMessage = messages.length === 1;
  // Note: lastMessage can be used for more advanced demo logic in the future
  const _lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

  if (isFirstMessage) {
    return {
      message: {
        id: `msg_${Date.now()}`,
        role: "assistant",
        content: `Bonjour ! Je suis votre assistant rénovation. J'ai bien reçu votre demande.

Pour vous proposer des idées vraiment adaptées, j'aurais quelques questions :`,
        timestamp: new Date(),
      },
      questions: [
        {
          id: "usage",
          text: "Qui utilisera principalement cet espace ?",
          type: "single",
          options: [
            { id: "family", label: "Toute la famille", icon: "👨‍👩‍👧" },
            { id: "couple", label: "Mon couple", icon: "👫" },
            { id: "child", label: "Un enfant / ado", icon: "🧒" },
            { id: "work", label: "Télétravail", icon: "💼" },
            { id: "guests", label: "Des invités", icon: "🏠" },
          ],
          allowSkip: true,
          skipLabel: "Je ne sais pas encore",
        },
      ],
      context: {
        ...context,
        currentStep: "questioning",
        questionsAsked: ["usage"],
      },
    };
  }

  // Style question if usage was answered
  if (context?.questionsAsked?.includes("usage") && !context?.questionsAsked?.includes("style")) {
    return {
      message: {
        id: `msg_${Date.now()}`,
        role: "assistant",
        content: `Parfait, je comprends mieux ! Une dernière question pour affiner mes propositions :`,
        timestamp: new Date(),
      },
      questions: [
        {
          id: "style",
          text: "Quel style vous attire le plus ?",
          type: "single",
          options: [
            { id: "modern", label: "Moderne", icon: "🏢" },
            { id: "scandinavian", label: "Scandinave", icon: "🌲" },
            { id: "industrial", label: "Industriel", icon: "🏭" },
            { id: "cosy", label: "Cosy", icon: "🛋️" },
          ],
          allowSkip: true,
          skipLabel: "Surprenez-moi",
        },
      ],
      context: {
        ...context,
        currentStep: "questioning",
        questionsAsked: [...(context?.questionsAsked || []), "style"],
      },
    };
  }

  // Generate proposals
  return {
    message: {
      id: `msg_${Date.now()}`,
      role: "assistant",
      content: `Excellent ! Basé sur vos préférences, voici 2 propositions pour votre espace :`,
      timestamp: new Date(),
    },
    proposals: [
      {
        id: "prop1",
        title: "Option Lumineuse",
        description: "Un espace épuré qui maximise la lumière naturelle",
        keyPoints: [
          "Grande baie vitrée ou verrière",
          "Tons neutres (blanc, gris clair)",
          "Mobilier aux lignes simples",
        ],
        imagePrompt: "modern bright interior, large windows, minimalist furniture, white walls, natural light, professional interior photography",
      },
      {
        id: "prop2",
        title: "Option Chaleureuse",
        description: "Un cocon moderne avec des touches de bois",
        keyPoints: [
          "Parquet en chêne clair",
          "Éclairage indirect",
          "Touches de bois naturel",
        ],
        imagePrompt: "modern cozy interior, oak wood floor, indirect warm lighting, natural materials, inviting atmosphere, professional interior photography",
      },
    ],
    context: {
      ...context,
      currentStep: "proposing",
    },
  };
}
