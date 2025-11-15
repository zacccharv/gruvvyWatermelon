import { defineConfig } from "tsup";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import globals from "globals";

import { builtinModules } from "node:module";

const nodeStdLibrary = builtinModules.map((module) => `node:${module}`);

export default defineConfig([
    {
        ignores: ["**/node_modules/**", "**/dist/**"],
        files: ["**/*.ts"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2021,
            },
            globals: {
                ...globals.node,
                ...globals.es2023,
            },
        },
        rules: {
			"@typescript-eslint/no-unused-vars": ["warning", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "no-restricted-imports": ["error", { paths: nodeStdLibrary }],
            "no-restricted-modules": ["error", { paths: nodeStdLibrary }],
            "linebreak-style": ["error", "windows"],
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended
        ],
    },

])