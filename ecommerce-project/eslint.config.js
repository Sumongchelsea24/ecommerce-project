import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config"; // dependent libraries herera import milaunus

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    // RULES BLOCK THAPIEKO:
    rules: {
      // useEffect ko dependency check garne warning lai disable gareko
      "react-hooks/exhaustive-deps": "off",

      // Kahile kahi unused variables le jhyau garcha vane eslai pani direct switch garna sakincha
      "no-unused-vars": "warn",
    },
  },
]);
