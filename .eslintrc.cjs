module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "arrow-parens": ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "indent": ["warn", 2],
    "semi": ["error", "always"],
    "no-multi-spaces": ["error"],
    "no-empty-function": "off",
    "no-unused-vars": "off",
    "space-infix-ops": ["error", { "int32Hint": false }],
    "eqeqeq": ["error", "always"],
    "camelcase": ["error", { "properties": "never" }],
    // "no-console": ["error"],
    // "no-debugger": ["error"],
    // "no-alert": ["error"],
  },
}
