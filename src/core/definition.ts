/**
 * GenerateImage Tool Definition (Schema)
 */

import type { ToolDefinition } from "gui-chat-protocol";

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
