/**
 * RENOVATEUR IA - Chat API Route
 *
 * Handles conversation with the AI renovation assistant
 */

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import type { ConversationContext, Message, Question } from "@/types/renovateur";

// Initialize OpenAI (only if API key is available)
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

// System prompt for the renovation AI
const SYSTEM_PROMPT = `Tu es un architecte d'intérieur IA expert, travaillant pour "Renovateur IA".

TON RÔLE :
Tu es un partenaire de réflexion pour les projets de rénovation. Tu ne fais pas que répondre - tu PENSES avec l'utilisateur, tu poses des questions pertinentes, et tu proposes des idées auxquelles il n'aurait pas pensé.

RÈGLES IMPORTANTES :
1. COMPRENDRE D'ABORD - Ne propose JAMAIS de solutions avant d'avoir posé des questions pour comprendre le contexte
2. QUESTIONS CIBLÉES - Pose 2-4 questions essentielles avant de proposer
3. FORMAT JSON - Quand tu poses des questions, inclus-les dans un bloc JSON à la fin de ta réponse
4. EXPERTISE - Partage ton expertise (contraintes techniques, bonnes pratiques)
5. INSPIRATION - Suggère des possibilités que l'utilisateur n'imaginait pas

FORMAT POUR LES QUESTIONS (inclure à la fin de ta réponse) :
\`\`\`json
{
  "questions": [
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
}
\`\`\`

FORMAT POUR LES PROPOSITIONS (quand tu as assez d'infos) :
\`\`\`json
{
  "proposals": [
    {
      "id": "prop1",
      "title": "Option lumineuse",
      "description": "Description courte",
      "keyPoints": ["Point 1", "Point 2", "Point 3"],
      "imagePrompt": "detailed prompt for image generation"
    }
  ]
}
\`\`\`

CONTRAINTES TECHNIQUES QUE TU CONNAIS :
- Hauteur sous plafond minimum habitable : 1.80m (idéal 2.20m+)
- Mezzanine : hauteur totale minimum 4m pour confort
- Salle de bain : évacuations nécessaires, ventilation obligatoire
- Permis de construire : >40m² d'extension ou modification façade

Tu réponds TOUJOURS en français. Sois chaleureux et professionnel.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, context, roomImageUrl } = body as {
      messages: Message[];
      context?: Partial<ConversationContext>;
      roomImageUrl?: string;
    };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { success: false, error: "Messages array is required" },
        { status: 400 }
      );
    }

    // If no OpenAI key, return a demo response
    if (!openai) {
      return NextResponse.json({
        success: true,
        data: getDemoResponse(messages, context),
      });
    }

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

    // Prepare messages for OpenAI
    const openaiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT + contextString },
    ];

    // Add image if provided (for initial analysis)
    if (roomImageUrl && messages.length === 1) {
      openaiMessages.push({
        role: "user",
        content: [
          {
            type: "text",
            text: messages[0].content + "\n\nVoici une photo de la pièce à analyser.",
          },
          {
            type: "image_url",
            image_url: { url: roomImageUrl },
          },
        ],
      });
    } else {
      // Add conversation history
      for (const msg of messages) {
        openaiMessages.push({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        });
      }
    }

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: openaiMessages,
      max_tokens: 2000,
      temperature: 0.7,
    });

    const aiContent = completion.choices[0]?.message?.content || "";

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
          question: questions?.[0], // Send first question for display
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
      { success: false, error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}

/**
 * Parse AI response to extract questions and proposals from JSON blocks
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

  // Extract JSON blocks
  const jsonBlockRegex = /```json\s*([\s\S]*?)```/g;
  let match;

  while ((match = jsonBlockRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed.questions) {
        questions = parsed.questions;
      }
      if (parsed.proposals) {
        proposals = parsed.proposals;
      }
      // Remove JSON block from text
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
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

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

  // Check if user answered a question
  if (lastMessage.includes("moderne") || lastMessage.includes("scandinave")) {
    return {
      message: {
        id: `msg_${Date.now()}`,
        role: "assistant",
        content: `Excellent choix ! Basé sur vos préférences, voici 2 propositions pour votre espace :`,
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
          imagePrompt: "modern bright interior, large windows, minimalist furniture, white walls, natural light",
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
          imagePrompt: "modern cozy interior, oak wood floor, indirect lighting, warm atmosphere",
        },
      ],
      context: {
        ...context,
        currentStep: "proposing",
      },
    };
  }

  // Default follow-up question
  return {
    message: {
      id: `msg_${Date.now()}`,
      role: "assistant",
      content: `Merci pour cette information ! Une dernière question pour affiner mes propositions :`,
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
