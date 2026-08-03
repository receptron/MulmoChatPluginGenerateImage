import type { ToolResult } from "gui-chat-protocol";
import type { ImageToolData } from "./types";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isOptionalString = (value: unknown): value is string | undefined =>
  value === undefined || typeof value === "string";

const isOptionalBoolean = (value: unknown): value is boolean | undefined =>
  value === undefined || typeof value === "boolean";

const isImageToolData = (value: unknown): value is ImageToolData =>
  isRecord(value) &&
  typeof value.imageData === "string" &&
  isOptionalString(value.prompt);

// The host builds the whole ToolResult for this tool, so every field the
// protocol declares is checked rather than just the ones read back here.
// `jsonData` is typed `never`: this tool sends nothing structured to the LLM.
export const isGenerateImageResult = (
  value: unknown,
): value is ToolResult<ImageToolData, never> =>
  isRecord(value) &&
  typeof value.message === "string" &&
  isOptionalString(value.toolName) &&
  isOptionalString(value.uuid) &&
  isOptionalString(value.title) &&
  isOptionalString(value.action) &&
  isOptionalString(value.instructions) &&
  isOptionalBoolean(value.instructionsRequired) &&
  isOptionalBoolean(value.updating) &&
  isOptionalBoolean(value.cancelled) &&
  value.jsonData === undefined &&
  (value.data === undefined || isImageToolData(value.data)) &&
  (value.viewState === undefined || isRecord(value.viewState));
