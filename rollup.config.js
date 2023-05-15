import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";

const dts = require("rollup-plugin-dts").default;
const packageJson = require("./package.json");

const isDev = process.env.NODE_ENV === "development";
const sourcemap = isDev ? "inline" : false;

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap,
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      typescript({ tsconfig: "./tsconfig.build.json" }),
      external(),
      commonjs(),
      resolve(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts(), del({ hook: "buildEnd", targets: "dist/types" })],
  },
];
