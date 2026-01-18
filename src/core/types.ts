/**
 * GenerateImage Plugin Types
 *
 * Plugin-specific type definitions only.
 * Common types should be imported directly from gui-chat-protocol.
 */

// ============================================================================
// GenerateImage-specific Types
// ============================================================================

/** Image tool data stored in result.data */
export interface ImageToolData {
  imageData: string;
  prompt?: string;
}

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
