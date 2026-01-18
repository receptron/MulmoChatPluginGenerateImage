/**
 * MulmoChat GenerateImage Plugin - Vue Implementation
 *
 * Full Vue plugin with UI components.
 * Import from "@mulmochat-plugin/generate-image/vue"
 */

// Import styles for Vue components
import "../style.css";

import type { ToolPlugin, ImageToolData, GenerateImageArgs } from "./types";
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

// Re-export types
export type { ToolPlugin, ToolPluginConfig } from "./types";

// Re-export core types for convenience
export type {
  BackendType,
  ToolContextApp,
  ToolContext,
  ToolResult,
  ToolResultComplete,
  JsonSchemaProperty,
  ToolDefinition,
  StartApiResponse,
  ToolSample,
  InputHandler,
  FileUploadConfig,
  ConfigValue,
  ConfigFieldSchema,
  PluginConfigSchema,
  ViewComponentProps,
  PreviewComponentProps,
  ToolPluginCore,
  ImageToolData,
  GenerateImageArgs,
  ImageGenerationConfigValue,
} from "./types";

// Re-export core plugin utilities
export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SAMPLES,
  createUploadedImageResult,
  executeGenerateImage,
  pluginCore,
} from "../core/plugin";

// Export components for direct use
export { View, Preview };

// Default export for MulmoChat compatibility: { plugin }
export default { plugin };
