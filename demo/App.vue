<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-gray-800 mb-8">{{ pluginName }} Demo</h1>

    <!-- Sample Selection -->
    <div class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">Sample Images</h2>
      <div v-if="samples.length > 0" class="flex flex-wrap gap-2 mb-3">
        <button
          v-for="(sample, index) in samples"
          :key="index"
          @click="loadSample(sample)"
          class="py-2 px-4 bg-indigo-100 border border-indigo-200 rounded-md cursor-pointer text-sm text-indigo-700 transition-all hover:bg-indigo-200 hover:border-indigo-300"
        >
          {{ sample.name }}
        </button>
      </div>
      <div class="mt-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Or enter custom image URL:</label>
        <input
          v-model="customImageUrl"
          type="text"
          placeholder="https://example.com/image.jpg"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-[3px] focus:ring-indigo-500/10"
        />
        <input
          v-model="customPrompt"
          type="text"
          placeholder="Enter prompt description"
          class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-[3px] focus:ring-indigo-500/10"
        />
        <button
          @click="applyCustomImage"
          class="mt-3 py-2.5 px-6 bg-indigo-600 text-white border-none rounded-md cursor-pointer text-sm font-medium transition-colors hover:bg-indigo-700"
        >
          Apply Custom Image
        </button>
      </div>
    </div>

    <!-- View Component -->
    <div v-if="ViewComponent" class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">View Component</h2>
      <div class="border border-gray-200 rounded p-4 h-[400px]">
        <component
          :is="ViewComponent"
          :selectedResult="result"
          :sendTextMessage="handleSendTextMessage"
          @updateResult="handleUpdate"
        />
      </div>
    </div>

    <!-- Preview Component -->
    <div v-if="PreviewComponent" class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">Preview Component</h2>
      <div class="max-w-[200px]">
        <component :is="PreviewComponent" :result="result" />
      </div>
    </div>

    <!-- Current Result Data -->
    <div class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">Current Result Data</h2>
      <pre class="bg-gray-100 p-3 rounded overflow-x-auto text-xs">{{ JSON.stringify(result, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { plugin } from "../src/plugin";
import type { ToolResult, ToolSample, ToolPlugin } from "../src/common";

// Plugin configuration - cast to base ToolPlugin for generic demo usage
const currentPlugin = plugin as unknown as ToolPlugin;

// Computed properties from plugin
const pluginName = computed(() => currentPlugin.toolDefinition.name);
const toolName = computed(() => currentPlugin.toolDefinition.name);
const samples = computed(() => currentPlugin.samples || []);
const ViewComponent = computed(() => currentPlugin.viewComponent);
const PreviewComponent = computed(() => currentPlugin.previewComponent);

// State
const customImageUrl = ref("");
const customPrompt = ref("");

const result = ref<ToolResult>({
  toolName: toolName.value,
  message: "Ready",
  data: undefined,
});

// Actions
const loadSample = (sample: ToolSample) => {
  result.value = {
    toolName: toolName.value,
    message: "Sample loaded",
    data: {
      imageData: sample.args.imageData as string,
      prompt: sample.args.prompt as string,
    },
  };
};

const applyCustomImage = () => {
  if (customImageUrl.value) {
    result.value = {
      toolName: toolName.value,
      message: "Custom image applied",
      data: {
        imageData: customImageUrl.value,
        prompt: customPrompt.value || "Custom image",
      },
    };
  }
};

const handleSendTextMessage = (text?: string) => {
  console.log("sendTextMessage called:", text);
};

const handleUpdate = (updated: ToolResult) => {
  result.value = updated;
  console.log("Result updated:", updated);
};

// Load first sample on mount
onMounted(() => {
  if (samples.value.length > 0) {
    loadSample(samples.value[0]);
  }
});
</script>
