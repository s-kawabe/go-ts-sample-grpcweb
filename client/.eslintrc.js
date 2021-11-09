module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  }, 
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  plugins: ["simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "info", "error"] }], // console.logが残っていればwarn
    "no-restricted-syntax": [ // for in, for of, enumは使わない
      "error",
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      { 
        selector: "TSEnumDeclaration", 
        message: "Don't declare enums" 
      }
    ],
    "prefer-arrow-callback": "error", // arrow functionを許可
    "prefer-const": "error", // const推奨
    "func-style": ["error", "expression"], // 関数式を使わなければいけない
    "arrow-body-style": ["error", "always"], // 関数式の中身は必ず中括弧で囲む
    "no-restricted-imports": ["error", { paths: [{ name: "react", importNames: ["default"] }] }], // reactの明示的なimportは不要なので禁止
    "react/prop-types": "off", // ts使うので不要
    "react/react-in-jsx-scope": "off", // reactはグローバルなので不要
    "react/display-name": "error", // 無名関数を禁止する
    "react-hooks/rules-of-hooks": "error", // hooksの基本的なlinter
    "react-hooks/exhaustive-deps": "warn", // effectやcallbackのdeps linter
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }], // 未使用変数はエラー
  },
  overrides: [
    {
      files: ["src/pages/**/*.tsx", "src/pages/api/**/*.ts"],
      rules: { "import/no-default-export": "off" },
    },
  ],
}