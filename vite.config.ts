import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig(({ command }) => ({
  plugins: command === "serve" ? [vue(), tailwindcss()] : [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MulmoChatPluginGenerateImage",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: ["vue", "@mulmochat-plugin/ui-image"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "@mulmochat-plugin/ui-image": "MulmoChatPluginUiImage",
        },
        assetFileNames: "style.[ext]",
      },
    },
    cssCodeSplit: false,
  },
}));
