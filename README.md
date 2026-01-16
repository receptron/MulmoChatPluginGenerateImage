# MulmoChat Plugin

A plugin for [MulmoChat](https://github.com/receptron/MulmoChat) - a multi-modal voice chat application with OpenAI's GPT-4 Realtime API.

## What this plugin does

Generate images using AI based on text prompts. This plugin provides the UI components and tool definition, while the actual image generation is handled by the host application via `context.app.generateImage()`.

## Installation

```bash
yarn add @mulmochat-plugin/generate-image @mulmochat-plugin/ui-image
```

## Usage

```typescript
import Plugin from "@mulmochat-plugin/generate-image";
import "@mulmochat-plugin/generate-image/style.css";

// Add to pluginList
const pluginList = [
  // ... other plugins
  Plugin,
];
```

## Development

```bash
# Install dependencies
yarn install

# Start dev server (http://localhost:5173/)
yarn dev

# Build
yarn build

# Type check
yarn typecheck

# Lint
yarn lint
```

## License

MIT
