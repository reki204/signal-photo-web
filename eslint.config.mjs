import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next", "prettier"],
    plugins: ["simple-import-sort", "@typescript-eslint", "redos"],
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "redos/no-vulnerable": "error",
    },
  }),
];

export default eslintConfig;
