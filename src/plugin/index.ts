/**
 * MulmoChat GenerateImage Plugin
 *
 * A plugin for generating images using AI backends.
 *
 * @example Basic usage
 * ```typescript
 * import { plugin } from "@mulmochat-plugin/generate-image";
 * import "@mulmochat-plugin/generate-image/style.css";
 * // Use plugin directly
 * ```
 */

import type { ToolPlugin, ToolContext, ToolResult } from "../common";
import { TOOL_DEFINITION, TOOL_NAME } from "./tools";
import type { ImageToolData, GenerateImageArgs } from "./types";
import { SAMPLES } from "./samples";
import View from "./View.vue";
import Preview from "./Preview.vue";

// ============================================================================
// Plugin Implementation
// ============================================================================

const generateImage = async (
  context: ToolContext,
  args: GenerateImageArgs,
): Promise<ToolResult<ImageToolData, never>> => {
  try {
    const { prompt } = args;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      throw new Error("A prompt is required to generate an image");
    }

    // Call the backend API if available
    if (context.app?.generateImage) {
      const result = await context.app.generateImage(TOOL_NAME, prompt);
      return result;
    }

    // Fallback for demo/testing - return placeholder
    return {
      message: `Image generation requested: "${prompt}"`,
      data: {
        imageData: `https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/600`,
        prompt,
      },
      instructions:
        "The image has been generated and displayed. Ask the user if they like it or want any modifications.",
    };
  } catch (error) {
    console.error("Image generation error", error);
    return {
      message: `Image generation error: ${error instanceof Error ? error.message : "Unknown error"}`,
      instructions:
        "Acknowledge that there was an error generating the image and suggest trying again with a different prompt.",
    };
  }
};

// ============================================================================
// Export
// ============================================================================

/**
 * GenerateImage plugin instance
 */
export const plugin: ToolPlugin<ImageToolData, never, GenerateImageArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: generateImage,
  generatingMessage: "Generating image...",
  isEnabled: () => true,
  viewComponent: View,
  previewComponent: Preview,
  samples: SAMPLES,
};
