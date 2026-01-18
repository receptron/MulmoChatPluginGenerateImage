<template>
  <ImagePreview :result="result" />
</template>

<script setup lang="ts">
import { ImagePreview } from "@mulmochat-plugin/ui-image";
import type { ToolResult } from "gui-chat-protocol";
import type { ImageToolData } from "../core/types";

defineProps<{
  result: ToolResult<ImageToolData>;
}>();
</script>
