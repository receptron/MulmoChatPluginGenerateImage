<template>
  <ImagePreview :result="result" />
</template>

<script setup lang="ts">
import { ImagePreview } from "@mulmochat-plugin/ui-image";
import type { ToolResult, ImageToolData } from "./types";

defineProps<{
  result: ToolResult<ImageToolData>;
}>();
</script>
