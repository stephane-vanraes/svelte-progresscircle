import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/pages/index.js",
  output: {
    file: "./index.js",
    format: "iife"
  },
  treeshake: true,
  plugins: [
    resolve({
      extensions: [".js", ".mjs", ".svelte"]
    }),
    svelte({
      css: function(css) {
        css.write("index.css", false);
      }
    }),
    terser()
  ]
};
