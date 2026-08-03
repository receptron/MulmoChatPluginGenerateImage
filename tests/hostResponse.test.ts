/**
 * `context.app.generateImage` returns `unknown` since gui-chat-protocol 2.0.0,
 * and the host builds the whole ToolResult, so the plugin narrows it here
 * instead of trusting the host's shape.
 *
 * Run with: yarn test
 */

import { test, describe } from "node:test";
import assert from "node:assert";
import { isGenerateImageResult } from "../src/core/hostResponse.js";

describe("isGenerateImageResult", () => {
  test("accepts a result carrying a generated image", () => {
    assert.equal(
      isGenerateImageResult({
        message: "Generated",
        title: "cat",
        data: { imageData: "base64", prompt: "a cat" },
      }),
      true,
    );
  });

  test("accepts image data without a prompt", () => {
    assert.equal(
      isGenerateImageResult({ message: "Generated", data: { imageData: "base64" } }),
      true,
    );
  });

  test("accepts a narrate-only result with no data", () => {
    assert.equal(isGenerateImageResult({ message: "No image" }), true);
  });

  test("rejects a result without a message", () => {
    assert.equal(isGenerateImageResult({ data: { imageData: "base64" } }), false);
  });

  test("rejects jsonData, which this tool never sends to the LLM", () => {
    assert.equal(
      isGenerateImageResult({ message: "Generated", jsonData: { a: 1 } }),
      false,
    );
  });

  test("rejects values that are not a result object", () => {
    [null, undefined, "ok", 7].forEach((value) => {
      assert.equal(
        isGenerateImageResult(value),
        false,
        `should reject ${JSON.stringify(value)}`,
      );
    });
  });
});
