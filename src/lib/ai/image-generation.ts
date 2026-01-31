/**
 * RENOVATEUR IA - Image Generation Service
 *
 * Uses Replicate API for high-quality interior design image generation
 * with ControlNet for maintaining room structure when transforming existing photos.
 */

import Replicate from "replicate";

export interface GenerationOptions {
  prompt: string;
  negativePrompt?: string;
  // For transforming existing images
  inputImageUrl?: string;
  // Style settings
  style?: string;
  // Control how much to preserve original structure (0-1)
  structureStrength?: number;
  // Image dimensions
  width?: number;
  height?: number;
  // Quality
  numInferenceSteps?: number;
  guidanceScale?: number;
}

export interface GenerationResult {
  imageUrl: string;
  prompt: string;
  generationTimeMs: number;
  model: string;
}

// Default negative prompt to avoid common issues
const DEFAULT_NEGATIVE_PROMPT = `low quality, blurry, distorted, deformed, ugly, bad anatomy, watermark, signature, text, logo, cartoon, anime, illustration, painting, drawing, sketch, 3d render, cgi`;

// Style modifiers for different interior design styles
const STYLE_PROMPTS: Record<string, string> = {
  modern: "modern interior design, clean lines, minimalist furniture, neutral colors, sleek finishes, contemporary architecture",
  scandinavian: "scandinavian interior design, light wood, white walls, cozy textiles, natural light, hygge atmosphere, functional furniture",
  industrial: "industrial interior design, exposed brick, metal fixtures, concrete floors, open space, loft style, raw materials",
  classic: "classic interior design, elegant moldings, traditional furniture, rich fabrics, symmetrical layout, timeless elegance",
  minimalist: "minimalist interior design, essential furniture only, clean surfaces, zen atmosphere, uncluttered space, simple forms",
  cosy: "cozy interior design, warm lighting, soft textiles, comfortable furniture, inviting atmosphere, layered textures",
  contemporary: "contemporary interior design, mix of styles, bold accents, artistic elements, unique furniture pieces",
  bohemian: "bohemian interior design, eclectic mix, colorful textiles, plants, global influences, artistic atmosphere",
};

/**
 * Image Generation Service using Replicate
 */
export class ImageGenerationService {
  private replicate: Replicate;

  constructor(apiToken: string) {
    this.replicate = new Replicate({
      auth: apiToken,
    });
  }

  /**
   * Generate a new interior design image from a text prompt
   */
  async generateFromPrompt(options: GenerationOptions): Promise<GenerationResult> {
    const startTime = Date.now();

    const styleModifier = options.style ? STYLE_PROMPTS[options.style] || "" : "";
    const fullPrompt = `${options.prompt}, ${styleModifier}, professional interior photography, high resolution, 8k, detailed, realistic lighting, architectural photography`.trim();

    const output = await this.replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: fullPrompt,
          negative_prompt: options.negativePrompt || DEFAULT_NEGATIVE_PROMPT,
          width: options.width || 1024,
          height: options.height || 768,
          num_inference_steps: options.numInferenceSteps || 30,
          guidance_scale: options.guidanceScale || 7.5,
          scheduler: "K_EULER",
          refine: "expert_ensemble_refiner",
          high_noise_frac: 0.8,
        },
      }
    );

    const imageUrl = Array.isArray(output) ? output[0] : output;

    return {
      imageUrl: imageUrl as string,
      prompt: fullPrompt,
      generationTimeMs: Date.now() - startTime,
      model: "stability-ai/sdxl",
    };
  }

  /**
   * Transform an existing room image with a new style
   * Uses ControlNet to maintain the room structure
   */
  async transformImage(options: GenerationOptions): Promise<GenerationResult> {
    if (!options.inputImageUrl) {
      throw new Error("Input image URL is required for transformation");
    }

    const startTime = Date.now();

    const styleModifier = options.style ? STYLE_PROMPTS[options.style] || "" : "";
    const fullPrompt = `${options.prompt}, ${styleModifier}, professional interior photography, high resolution, detailed, realistic lighting`.trim();

    // Use ControlNet model for structure-preserving transformation
    const output = await this.replicate.run(
      "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56f33571d3",
      {
        input: {
          image: options.inputImageUrl,
          prompt: fullPrompt,
          negative_prompt: options.negativePrompt || DEFAULT_NEGATIVE_PROMPT,
          num_inference_steps: options.numInferenceSteps || 30,
          guidance_scale: options.guidanceScale || 9,
          // How much to preserve original structure
          a_prompt: "best quality, extremely detailed, interior design",
          n_prompt: DEFAULT_NEGATIVE_PROMPT,
          // Control strength
          ddim_steps: 30,
          scale: 9,
          seed: Math.floor(Math.random() * 1000000),
          eta: 0,
          image_resolution: 768,
        },
      }
    );

    const imageUrl = Array.isArray(output) ? output[0] : output;

    return {
      imageUrl: imageUrl as string,
      prompt: fullPrompt,
      generationTimeMs: Date.now() - startTime,
      model: "controlnet-hough",
    };
  }

  /**
   * Generate a floor plan modification
   * This is more experimental - uses img2img with specific prompts
   */
  async generateFloorPlan(
    originalPlanUrl: string | null,
    modifications: string
  ): Promise<GenerationResult> {
    const startTime = Date.now();

    const prompt = `architectural floor plan, 2D blueprint style, ${modifications}, clean lines, professional CAD drawing, black and white, labeled rooms, measurements shown`;

    if (originalPlanUrl) {
      // Transform existing plan
      const output = await this.replicate.run(
        "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        {
          input: {
            prompt,
            image: originalPlanUrl,
            prompt_strength: 0.6, // Preserve some of the original
            negative_prompt: "3d, realistic, photo, colored, furniture, decoration",
            width: 1024,
            height: 1024,
          },
        }
      );

      return {
        imageUrl: (Array.isArray(output) ? output[0] : output) as string,
        prompt,
        generationTimeMs: Date.now() - startTime,
        model: "stability-ai/sdxl",
      };
    } else {
      // Generate new plan
      const output = await this.replicate.run(
        "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        {
          input: {
            prompt,
            negative_prompt: "3d, realistic, photo, colored, furniture, decoration, people",
            width: 1024,
            height: 1024,
            num_inference_steps: 30,
            guidance_scale: 8,
          },
        }
      );

      return {
        imageUrl: (Array.isArray(output) ? output[0] : output) as string,
        prompt,
        generationTimeMs: Date.now() - startTime,
        model: "stability-ai/sdxl",
      };
    }
  }

  /**
   * Upscale an image for higher quality export
   */
  async upscaleImage(imageUrl: string, scale: number = 2): Promise<GenerationResult> {
    const startTime = Date.now();

    const output = await this.replicate.run(
      "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b",
      {
        input: {
          image: imageUrl,
          scale,
          face_enhance: false,
        },
      }
    );

    return {
      imageUrl: output as string,
      prompt: "upscale",
      generationTimeMs: Date.now() - startTime,
      model: "real-esrgan",
    };
  }
}

export default ImageGenerationService;
