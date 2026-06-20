import js from "@eslint/js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

const reactRefreshConfig = reactRefreshPlugin.configs.vite;

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  reactRefreshConfig,
  {
    files: ["src/main.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  {
    ignores: ["**/*.{mjs,cjs,js,d.ts,d.mts}"],
  },
);
