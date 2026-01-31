/**
 * RENOVATEUR IA - Image Generation API Route
 *
 * Generates interior design images using Replicate
 */

import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

// Initialize Replicate (only if API token is available)
const replicate = process.env.REPLICATE_API_TOKEN
  ? new Replicate({ auth: process.env.REPLICATE_API_TOKEN })
  : null;

// Style prompts for different design styles
const STYLE_PROMPTS: Record<string, string> = {
  modern: "modern interior design, clean lines, minimalist, neutral colors, sleek finishes",
  scandinavian: "scandinavian interior, light wood, white walls, cozy textiles, natural light, hygge",
  industrial: "industrial interior, exposed brick, metal fixtures, concrete, loft style",
  classic: "classic interior design, elegant moldings, traditional furniture, rich fabrics",
  minimalist: "minimalist interior, essential furniture, clean surfaces, zen atmosphere",
  cosy: "cozy interior, warm lighting, soft textiles, comfortable, inviting",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      prompt,
      style,
      inputImageUrl,
      width = 1024,
      height = 768,
    } = body as {
      prompt: string;
      style?: string;
      inputImageUrl?: string;
      width?: number;
      height?: number;
    };

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    // If no Replicate token, return a demo response
    if (!replicate) {
      return NextResponse.json({
        success: true,
        data: {
          imageUrl: getDemoImageUrl(style),
          prompt: prompt,
          generationTimeMs: 0,
          isDemo: true,
        },
      });
    }

    const startTime = Date.now();

    // Build full prompt with style
    const styleModifier = style ? STYLE_PROMPTS[style] || "" : "";
    const fullPrompt = `${prompt}, ${styleModifier}, professional interior photography, high resolution, 8k, detailed, realistic lighting, architectural digest style`.trim();

    const negativePrompt = "low quality, blurry, distorted, deformed, ugly, watermark, text, logo, cartoon, anime, illustration, painting, 3d render";

    let output;

    if (inputImageUrl) {
      // Transform existing image using img2img
      output = await replicate.run(
        "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        {
          input: {
            prompt: fullPrompt,
            negative_prompt: negativePrompt,
            image: inputImageUrl,
            prompt_strength: 0.75, // Balance between original and new
            width,
            height,
            num_inference_steps: 30,
            guidance_scale: 7.5,
            scheduler: "K_EULER",
            refine: "expert_ensemble_refiner",
            high_noise_frac: 0.8,
          },
        }
      );
    } else {
      // Generate new image from scratch
      output = await replicate.run(
        "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        {
          input: {
            prompt: fullPrompt,
            negative_prompt: negativePrompt,
            width,
            height,
            num_inference_steps: 30,
            guidance_scale: 7.5,
            scheduler: "K_EULER",
            refine: "expert_ensemble_refiner",
            high_noise_frac: 0.8,
          },
        }
      );
    }

    const imageUrl = Array.isArray(output) ? output[0] : output;

    return NextResponse.json({
      success: true,
      data: {
        imageUrl,
        prompt: fullPrompt,
        generationTimeMs: Date.now() - startTime,
        model: "stability-ai/sdxl",
      },
    });
  } catch (error) {
    console.error("Image generation error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate image" },
      { status: 500 }
    );
  }
}

/**
 * Returns a placeholder image URL for demo mode
 */
function getDemoImageUrl(style?: string): string {
  // Using Unsplash for demo images
  const styleImages: Record<string, string> = {
    modern: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1024&h=768&fit=crop",
    scandinavian: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1024&h=768&fit=crop",
    industrial: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1024&h=768&fit=crop",
    classic: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1024&h=768&fit=crop",
    minimalist: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1024&h=768&fit=crop",
    cosy: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1024&h=768&fit=crop",
  };

  return styleImages[style || "modern"] || styleImages.modern;
}
