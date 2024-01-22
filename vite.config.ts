/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "./src/index.ts",
      },
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    outDir: "dist/es",
    rollupOptions: {
      output: {
        chunkFileNames: "[name]-[hash].js",
      },
    },
  },
  test: {
    passWithNoTests: true,
    coverage: {
      provider: "istanbul",
    },
  },
});
