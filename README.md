# @mulmochat-plugin/generate-image

Image generation plugin for MulmoChat.

## Installation

```bash
yarn add @mulmochat-plugin/generate-image @mulmochat-plugin/ui-image
```

## Usage

```typescript
import { plugin } from "@mulmochat-plugin/generate-image";

// Register plugin with MulmoChat
```

## Dependencies

This plugin requires `@mulmochat-plugin/ui-image` as a peer dependency for the view components.

## Configuration

The plugin supports multiple image generation backends:
- **Google Gemini** (default)
- **OpenAI**
- **ComfyUI** (local)

Configuration options:
- `backend`: Select the image generation backend
- `styleModifier`: Additional style to append to all prompts
- `geminiModel`: Model selection for Gemini backend
- `openaiModel`: Model selection for OpenAI backend

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
