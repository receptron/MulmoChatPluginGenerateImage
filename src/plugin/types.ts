/**
 * GenerateImage Types
 */

/** Re-export from ui-image for convenience */
export type { ImageToolData } from "@mulmochat-plugin/ui-image";

/** Arguments passed to the generateImage tool */
export interface GenerateImageArgs {
  prompt: string;
}
