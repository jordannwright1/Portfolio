import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Import default configs from Next.js and TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rules
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variables warning
      "react/jsx-key": "warn", // Warn instead of error for missing keys in lists
      "@typescript-eslint/ban-ts-comment": "off", // Allow @ts-ignore comments
      "@typescript-eslint/no-explicit-any": "warn", // Warn instead of error for 'any' type
      "react/no-unescaped-entities": "off", // Disable warnings for unescaped entities
    },
  },

  // Override rules for specific files or patterns
  {
    files: ["**/*.ts", "**/*.tsx"], // Target TypeScript files
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Enable warnings for unused variables in TypeScript
    },
  },
];

export default eslintConfig;
