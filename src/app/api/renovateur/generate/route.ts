/**
 * RENOVATEUR IA - Image Generation API Route
 *
 * Uses multiple backends:
 * 1. Replicate (if API token available) - Best quality
 * 2. Together AI (if API key available) - Good quality, fast
 * 3. Pollinations.ai (FREE, no key needed) - Fallback, decent quality
 */

import { NextRequest, NextResponse } from "next/server";

// Style modifiers for better interior design prompts
const STYLE_MODIFIERS: Record<string, string> = {
  modern: "modern contemporary interior design, clean geometric lines, minimalist aesthetic, neutral color palette with white and gray tones, sleek chrome and glass finishes, open floor plan concept",
  scandinavian: "scandinavian interior design, nordic style, light oak wood accents, white painted walls, cozy hygge atmosphere, natural linen textiles, soft warm lighting",
  industrial: "industrial loft interior, exposed red brick walls, black metal fixtures, concrete flooring, edison bulb lighting, raw urban aesthetic, vintage factory elements",
  classic: "classic european interior design, elegant crown moldings, traditional furniture with rich wood tones, damask fabrics, chandelier lighting, refined sophisticated atmosphere",
  minimalist: "minimalist zen interior, essential furniture only, pure white walls, hidden storage solutions, japanese-inspired simplicity, clean uncluttered surfaces",
  cosy: "cozy warm interior, soft textured textiles, warm ambient lighting, plush comfortable seating, earth tone colors, inviting homey atmosphere",
  contemporary: "contemporary upscale interior, designer furniture pieces, statement lighting fixtures, curated art pieces, luxurious materials, sophisticated color scheme",
  bohemian: "bohemian eclectic interior, colorful patterns and textures, vintage and handmade elements, plants and natural materials, artistic creative atmosphere",
  mediterranean: "mediterranean interior design, terracotta and warm earth tones, arched doorways, wrought iron accents, rustic wood beams, sunny coastal atmosphere",
};

// Quality enhancers for photorealistic results
const QUALITY_SUFFIX = ", professional architectural interior photography, shot on Sony A7R IV with 24mm lens, natural soft daylight streaming through windows, high dynamic range, sharp focus throughout, editorial quality for Architectural Digest magazine, 8K resolution, photorealistic rendering, ray-traced global illumination";

const NEGATIVE_PROMPT = "cartoon, anime, illustration, painting, drawing, 3d render, CGI, artificial, plastic look, low quality, blurry, distorted, deformed, ugly, watermark, text, logo, signature, oversaturated, unrealistic proportions, bad perspective, amateur photography";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      prompt,
      style,
      roomType,
      originalImageBase64: _originalImageBase64,
      width = 1024,
      height = 768,
    } = body as {
      prompt: string;
      style?: string;
      roomType?: string;
      originalImageBase64?: string;
      width?: number;
      height?: number;
    };

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    const startTime = Date.now();

    // Build optimized prompt
    const styleModifier = style ? STYLE_MODIFIERS[style] || STYLE_MODIFIERS.modern : "";
    const roomPrefix = roomType ? `${roomType} interior, ` : "";
    const fullPrompt = `${roomPrefix}${prompt}, ${styleModifier}${QUALITY_SUFFIX}`.trim();

    console.log("[Generate] Processing with prompt:", fullPrompt.substring(0, 100) + "...");

    // Try backends in order of preference
    let result;

    // Option 1: Replicate (best quality, requires API key)
    if (process.env.REPLICATE_API_TOKEN) {
      result = await generateWithReplicate(fullPrompt, width, height);
    }
    // Option 2: Together AI (good quality, requires API key)
    else if (process.env.TOGETHER_API_KEY) {
      result = await generateWithTogether(fullPrompt, width, height);
    }
    // Option 3: Pollinations.ai (FREE, no key needed)
    else {
      result = await generateWithPollinations(fullPrompt, width, height);
    }

    return NextResponse.json({
      success: true,
      data: {
        imageUrl: result.imageUrl,
        prompt: fullPrompt,
        generationTimeMs: Date.now() - startTime,
        provider: result.provider,
      },
    });
  } catch (error) {
    console.error("Image generation error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate image: " + (error as Error).message,
      },
      { status: 500 }
    );
  }
}

/**
 * Generate with Replicate (SDXL) - Best quality
 */
async function generateWithReplicate(
  prompt: string,
  width: number,
  height: number
): Promise<{ imageUrl: string; provider: string }> {
  const Replicate = (await import("replicate")).default;
  const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! });

  const output = await replicate.run(
    "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    {
      input: {
        prompt,
        negative_prompt: NEGATIVE_PROMPT,
        width,
        height,
        num_inference_steps: 35,
        guidance_scale: 7.5,
        scheduler: "K_EULER_ANCESTRAL",
        refine: "expert_ensemble_refiner",
        high_noise_frac: 0.8,
      },
    }
  );

  const imageUrl = Array.isArray(output) ? output[0] : output;
  return { imageUrl: imageUrl as string, provider: "replicate" };
}

/**
 * Generate with Together AI - Good quality, fast
 */
async function generateWithTogether(
  prompt: string,
  width: number,
  height: number
): Promise<{ imageUrl: string; provider: string }> {
  const response = await fetch("https://api.together.xyz/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.TOGETHER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      prompt,
      negative_prompt: NEGATIVE_PROMPT,
      width,
      height,
      steps: 30,
      n: 1,
    }),
  });

  if (!response.ok) {
    throw new Error(`Together AI error: ${response.status}`);
  }

  const data = await response.json();
  return {
    imageUrl: data.data[0].url || data.data[0].b64_json,
    provider: "together",
  };
}

/**
 * Generate with Pollinations.ai - FREE, no key needed
 * Uses Flux model which is excellent for interior design
 */
async function generateWithPollinations(
  prompt: string,
  width: number,
  height: number
): Promise<{ imageUrl: string; provider: string }> {
  // Pollinations uses URL-based API - no key needed!
  // They use Flux model which is very good for photorealistic images

  const encodedPrompt = encodeURIComponent(prompt);

  // Pollinations.ai URL format with Flux model
  // The 'nologo' prevents watermark, 'enhance' improves quality
  const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&nologo=true&enhance=true&model=flux`;

  // Verify the URL is accessible (Pollinations generates on-the-fly)
  const response = await fetch(imageUrl, { method: "HEAD" });

  if (!response.ok) {
    throw new Error("Pollinations.ai generation failed");
  }

  return { imageUrl, provider: "pollinations" };
}
