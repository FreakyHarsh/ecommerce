module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "eslint:recommended", "prettier"],
  rules: {
    "no-console": "warn",
    "no-undef": "off",
    "react/prop-types": "off"
  }
};
