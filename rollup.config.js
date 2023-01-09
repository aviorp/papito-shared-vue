import json from "@rollup/plugin-json";
import vue from "@vitejs/plugin-vue";
import FastGlob from "fast-glob";
import { createRequire } from "node:module";
import postcss from "rollup-plugin-postcss";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default [
  {
    input: "./package.json",

    output: {
      file: "dist/package.json",
      format: "system",
    },
    external: Object.keys(pkg.dependencies || {}),
    plugins: [json()],
  },

  {
    input: "src/assets/main.css",
    output: {
      file: "dist/src/assets/main.css",
      format: "system",
    },
    plugins: [
      postcss({
        extensions: [".css", ".scss"],
        extract: true,
        sourceMap: true,
      }),
    ],
  },
  ...FastGlob.sync("src/components/*").map((file) => ({
    input: file,
    output: {
      file: `dist/${file}`,
    },
    plugins: [vue()],
  })),
  {
    input: "src/constants/index.js",
    output: {
      file: "dist/src/constants/index.js",
    },
  },
  {
    input: "src/imports.js",
    output: {
      file: "dist/src/imports.js",
    },
    plugins: [vue()],
  },
];
