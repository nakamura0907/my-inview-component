import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";

const dts = require("rollup-plugin-dts").default;
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: "inline",
        name: "my-inview-component",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: "inline",
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      typescript({ tsconfig: "./tsconfig.build.json" }),
      external(),
      commonjs(),
      resolve(),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts(), del({ hook: "buildEnd", targets: "dist/types" })],
  },
];
