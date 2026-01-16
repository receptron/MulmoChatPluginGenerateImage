/**
 * GenerateImage Types
 */

/** Re-export from ui-image for convenience */
export type { ImageToolData } from "@mulmochat-plugin/ui-image";

/** Arguments passed to the generateImage tool */
export interface GenerateImageArgs {
  prompt: string;
}

/** Configuration value for image generation backend */
export interface ImageGenerationConfigValue {
  backend: "gemini" | "openai" | "comfyui";
  styleModifier?: string;
  geminiModel?: "gemini-2.5-flash-image" | "gemini-3-pro-image-preview";
  openaiModel?: "gpt-image-1" | "gpt-image-1.5" | "gpt-image-1-mini";
}
