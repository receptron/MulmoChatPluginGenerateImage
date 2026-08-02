/**
 * MulmoChat GenerateImage Plugin Core (Framework-agnostic)
 *
 * Contains the plugin logic without UI components.
 * Can be used by any framework (Vue, React, etc.)
 */

import type { ToolPluginCore, ToolContext, ToolResult } from "gui-chat-protocol";
import type { ImageToolData, GenerateImageArgs } from "./types";
import { TOOL_NAME, TOOL_DEFINITION } from "./definition";
import { SAMPLES } from "./samples";

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Create a ToolResult for an uploaded image file
 */
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
// Execute Function
// ============================================================================

// context is nullable on purpose: hosts that run the plugin without client-side
// state (MulmoClaude's server bridge) pass an empty or missing context, and
// reading through it unguarded threw a TypeError instead of returning a result.
export const executeGenerateImage = async (
  context: ToolContext | null | undefined,
  args: GenerateImageArgs,
): Promise<ToolResult<ImageToolData, never>> => {
  const { prompt } = args;

  if (!context?.app?.generateImage) {
    return { message: "generateImage function not available" };
  }

  return context.app.generateImage(prompt);
};

// ============================================================================
// Core Plugin (without UI components)
// ============================================================================

export const pluginCore: ToolPluginCore<ImageToolData, never, GenerateImageArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: executeGenerateImage,
  generatingMessage: "Generating image...",
  isEnabled: () => true,
  inputHandlers: [
    {
      type: "file",
      acceptedTypes: ["image/png", "image/jpeg"],
      handleInput: (fileData: string, fileName: string) =>
        createUploadedImageResult(fileData, fileName, ""),
    },
    {
      type: "clipboard-image",
      handleInput: (imageData: string) =>
        createUploadedImageResult(imageData, "clipboard-image.png", ""),
    },
  ],
  systemPrompt: `When you are talking about places, objects, people, movies, books and other things, you MUST use the ${TOOL_NAME} API to draw pictures to make the conversation more engaging.`,
  backends: ["imageGen"],
  samples: SAMPLES,
};
