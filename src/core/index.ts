/**
 * MulmoChat Plugin Core Exports
 *
 * Framework-agnostic types and plugin logic.
 * Import from "@mulmochat-plugin/generate-image/core"
 */

// Plugin-specific types
export type {
  ImageToolData,
  GenerateImageArgs,
  ImageGenerationConfigValue,
} from "./types";

// Core plugin
export {
  pluginCore,
  executeGenerateImage,
  createUploadedImageResult,
} from "./plugin";
export { TOOL_NAME, TOOL_DEFINITION } from "./definition";
export { SAMPLES } from "./samples";
