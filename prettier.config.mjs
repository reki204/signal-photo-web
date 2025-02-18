/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  overrides: [
    {
      files: "*.{json,json5,html,yaml,yml}",
      options: {
        tabWidth: 2,
      },
    },
    {
      files: "*.md",
      options: {
        tabWidth: 2,
        trailingComma: "none",
      },
    },
  ],
};

export default config;
