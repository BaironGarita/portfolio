// @ts-check
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "public/**"],
  },
  ...tseslint.configs.recommended,
  // Debe ir después de tseslint: fija el parser de los archivos .astro.
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    // Frontmatter y <script> de los .astro en TypeScript.
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
