/**
 * MulmoChat GenerateImage Plugin
 *
 * Default export is the framework-agnostic core.
 * For Vue implementation, import from "@mulmochat-plugin/generate-image/vue"
 *
 * @example Default (Core - framework-agnostic)
 * ```typescript
 * import { pluginCore, TOOL_NAME, ImageToolData } from "@mulmochat-plugin/generate-image";
 * ```
 *
 * @example Vue implementation
 * ```typescript
 * import GenerateImagePlugin from "@mulmochat-plugin/generate-image/vue";
 * import "@mulmochat-plugin/generate-image/style.css";
 * ```
 */

// Default export is core (framework-agnostic)
export * from "./core";
export { pluginCore as default } from "./core";
