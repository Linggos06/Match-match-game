module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ["airbnb-typescript/base",
              "plugin:prettier/recommended"],
    parserOptions: {
           project: ["./tsconfig.json"],
         },
    ignorePatterns: ["/*.*"]
  };