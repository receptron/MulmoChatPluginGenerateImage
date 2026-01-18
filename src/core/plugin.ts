/**
 * MulmoChat GenerateImage Plugin Core (Framework-agnostic)
 *
 * Contains the plugin logic without UI components.
 * Can be used by any framework (Vue, React, etc.)
 */

import type {
  ToolPluginCore,
  ToolContext,
  ToolResult,
  ToolDefinition,
  ToolSample,
  ImageToolData,
  GenerateImageArgs,
} from "./types";

// ============================================================================
// Tool Definition
// ============================================================================

export const TOOL_NAME = "generateImage";

export const TOOL_DEFINITION: ToolDefinition = {
  type: "function",
  name: TOOL_NAME,
  description:
    "Generate an image based on the prompt and display it on the screen. Be descriptive and specify the concrete details of the images in the prompt. Each call generates one image.",
  parameters: {
    type: "object",
    properties: {
      prompt: {
        type: "string",
        description: "A detailed prompt describing the image to generate",
      },
    },
    required: ["prompt"],
  },
};

// ============================================================================
// Sample Data
// ============================================================================

export const SAMPLES: ToolSample[] = [
  {
    name: "Sunset Beach",
    args: {
      imageData: "https://picsum.photos/id/28/800/600",
      prompt: "A beautiful sunset over a calm ocean beach with palm trees",
    },
  },
  {
    name: "Mountain Lake",
    args: {
      imageData: "https://picsum.photos/id/29/800/600",
      prompt: "A serene mountain lake surrounded by pine trees and snow-capped peaks",
    },
  },
  {
    name: "City Skyline",
    args: {
      imageData: "https://picsum.photos/id/43/800/600",
      prompt: "A modern city skyline at night with glowing skyscrapers",
    },
  },
  {
    name: "Forest Path",
    args: {
      imageData: "https://picsum.photos/id/15/800/600",
      prompt: "A winding path through an enchanted forest with sunlight filtering through the leaves",
    },
  },
];

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

export const executeGenerateImage = async (
  context: ToolContext,
  args: GenerateImageArgs,
): Promise<ToolResult<ImageToolData, never>> => {
  const { prompt } = args;

  if (!context.app?.generateImage) {
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
