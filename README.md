# @mulmochat-plugin/generate-image

Image generation plugin for MulmoChat.

## Installation

```bash
yarn add @mulmochat-plugin/generate-image @mulmochat-plugin/ui-image
```

## Usage

```typescript
import { plugin } from "@mulmochat-plugin/generate-image";
import "@mulmochat-plugin/generate-image/style.css";

// Register plugin with MulmoChat
```

## Dependencies

This plugin requires `@mulmochat-plugin/ui-image` as a peer dependency for the view components.

## Host App Integration

This plugin calls `context.app.generateImage(toolName, prompt)` to generate images. The host application (MulmoChat) must provide this function via the `ToolContext.app` object.

The host app is responsible for:
- Selecting the image generation backend (Google Gemini, OpenAI, ComfyUI, etc.)
- Configuring API keys and model settings
- Handling the actual image generation API calls

Example host app implementation:

```typescript
const context: ToolContext = {
  app: {
    generateImage: async (toolName: string, prompt: string) => {
      // Call your image generation API here
      const imageData = await yourImageGenerationAPI(prompt);
      return {
        message: "Image generated",
        data: { imageData, prompt },
      };
    },
  },
};
```

## Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Type check
yarn typecheck

# Lint
yarn lint

# Build
yarn build
```
