import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { 
    files: ['**/*.{js,mjs,cjs}'], 
    plugins: { js }, 
    extends: ['js/recommended'], 
    languageOptions: { 
        globals: globals.node, 
    },
    rules: {
      // Semicolons: "always" or "never"
      semi: ['error', 'always'],

      // Quotes: "single" or "double"
      quotes: ['error', 'double', { avoidEscape: true, allowTemplateLiterals: true }],
    },
  },
]);
