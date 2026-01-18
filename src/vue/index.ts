/**
 * MulmoChat GenerateImage Plugin - Vue Implementation
 *
 * Full Vue plugin with UI components.
 * Import from "@mulmochat-plugin/generate-image/vue"
 */

// Import styles for Vue components
import "../style.css";

import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { ImageToolData, GenerateImageArgs } from "../core/types";
import { pluginCore } from "../core/plugin";
import View from "./View.vue";
import Preview from "./Preview.vue";

// ============================================================================
// Vue Plugin (with components)
// ============================================================================

/**
 * GenerateImage plugin instance with Vue components
 */
export const plugin: ToolPlugin<ImageToolData, never, GenerateImageArgs> = {
  ...pluginCore,
  viewComponent: View,
  previewComponent: Preview,
};

// Plugin-specific types
export type {
  ImageToolData,
  GenerateImageArgs,
  ImageGenerationConfigValue,
} from "../core/types";

// Core plugin utilities
export {
  pluginCore,
  executeGenerateImage,
  createUploadedImageResult,
} from "../core/plugin";
export { TOOL_NAME, TOOL_DEFINITION } from "../core/definition";
export { SAMPLES } from "../core/samples";

// Export components for direct use
export { View, Preview };

// Default export for MulmoChat compatibility: { plugin }
export default { plugin };
