import { rimraf } from "rimraf";
import { type LibraryOptions, build } from "vite";
import viteConfig from "../vite.config.js";

async function buildIife() {
  await rimraf("dist/iife");
  await Promise.all(
    Object.entries((viteConfig.build!.lib as LibraryOptions).entry).map(
      ([entryAlias, entryPath]) => {
        return build({
          ...viteConfig,
          build: {
            ...viteConfig.build,
            lib: {
              ...viteConfig.build!.lib,
              entry: {
                [entryAlias]: entryPath,
              },
              formats: ["iife"],
              name: "VanillaTs",
            },
            rollupOptions: undefined,
            outDir: "dist/iife",
            emptyOutDir: false,
          },
          test: undefined,
          configFile: false,
        });
      },
    ),
  );
}

buildIife();
