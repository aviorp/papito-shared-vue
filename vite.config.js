import babel from "@rollup/plugin-babel";
import svgr from "@svgr/rollup";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import autoExternal from "rollup-plugin-auto-external";
import { terser } from "rollup-plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.js", import.meta.url)),
      name: "papito-shared-vue",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue", "css"],
      plugins: [
        babel({
          babelHelpers: "bundled",
          exclude: "node_modules/**",
        }),
        svgr(),
        terser(),
        autoExternal({
          builtins: true,
          dependencies: true,
          devDependencies: true,
          peerDependencies: true,
          packagePath: fileURLToPath(new URL("./package.json", import.meta.url)),
        }),
        visualizer(),
      ],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
