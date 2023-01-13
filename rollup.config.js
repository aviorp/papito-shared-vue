// import json from "@rollup/plugin-json";
// import vue from "@vitejs/plugin-vue";
// import FastGlob from "fast-glob";
// import { createRequire } from "node:module";
// import postcss from "rollup-plugin-postcss";
// const require = createRequire(import.meta.url);
// const pkg = require("./package.json");

// export default [
//   {
//     input: "./package.json",

//     output: {
//       file: "dist/package.json",
//       format: "system",
//     },
//     external: Object.keys(pkg.dependencies || {}),
//     plugins: [json()],
//   },

//   {
//     input: "src/assets/main.css",
//     output: {
//       file: "dist/src/assets/main.css",
//       format: "system",
//     },
//     plugins: [
//       postcss({
//         extensions: [".css", ".scss"],
//         extract: true,
//         sourceMap: true,
//       }),
//     ],
//   },
//   ...FastGlob.sync("src/**/*", {
//     ignore: [
//       "src/components/__tests__/**/*",
//       "src/assets/**/*",
//       "src/pages/**/*",
//       "src/imports.js",
//       "src/router/**/*",
//       "src/App.vue",
//       "src/main.js",
//       "src/logo.svg",
//     ],
//   }).map((file) => ({
//     input: file,
//     output: {
//       file: `dist/${file}`,
//     },
//     plugins: [vue()],
//   })),
//   {
//     input: "src/imports.js",
//     output: {
//       file: "dist/src/imports.js",
//     },
//     plugins: [vue()],
//   },
// ];

import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import autoExternal from "rollup-plugin-auto-external";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";
import vue from "rollup-plugin-vue";
import pkg from "./package.json" assert { type: "json" };

import svgr from "@svgr/rollup";

const config = [
  {
    input: pkg.source,
    output: [
      {
        dir: "dist/",
        format: process.env.LIB_FORMAT || "es",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      resolve({
        mainFields: ["main"],
        extensions: [".js", ".json", ".vue"],
      }),
      vue(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      svgr(),
      image(),
      postcss({
        extract: true,
        minimize: true,
      }),
      terser(),
      autoExternal({
        builtins: false,
        dependencies: true,
        peerDependencies: true,
        packagePath: "./package.json",
      }),
      visualizer({
        title: "visualizer",
        template: "treemap",
      }),
      del({ targets: ["dist/*"] }),
    ],
    external: ["vue", "postcss", "vue-router", "vuex", "axios"],
  },
];

export default config;
