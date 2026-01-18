/**
 * MulmoChat GenerateImage Plugin - Core (Framework-agnostic)
 *
 * This module exports the core plugin logic without UI components.
 * Import from "@mulmochat-plugin/generate-image" or "@mulmochat-plugin/generate-image/core"
 */

// Export all types
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
  FileInputHandler,
  ClipboardImageInputHandler,
  UrlInputHandler,
  TextInputHandler,
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

// Export plugin utilities
export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SAMPLES,
  createUploadedImageResult,
  executeGenerateImage,
  pluginCore,
} from "./plugin";
