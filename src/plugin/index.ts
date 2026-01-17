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
  const { prompt } = args;

  if (!context.app?.generateImage) {
    return { message: "generateImage function not available" };
  }

  return context.app.generateImage(context, prompt);
};

// ============================================================================
// File Upload Handler
// ============================================================================

export function createUploadedImageResult(
  imageData: string,
  fileName: string,
  prompt: string,
): ToolResult<ImageToolData, never> {
  return {
    toolName: TOOL_NAME,
    data: { imageData, prompt },
    message: "",
    title: fileName,
  };
}

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
  fileUpload: {
    acceptedTypes: ["image/png", "image/jpeg"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleUpload: createUploadedImageResult as any,
  },
  systemPrompt: `When you are talking about places, objects, people, movies, books and other things, you MUST use the ${TOOL_NAME} API to draw pictures to make the conversation more engaging.`,
  backends: ["imageGen"],
  samples: SAMPLES,
};
