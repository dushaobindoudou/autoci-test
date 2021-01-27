module.exports = {
  // "extends": "eslint:recommended",
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    // override default options for rules from base configurations
    // "comma-dangle": ["error", {
    //     "arrays": "always",
    //     "objects": "always",
    //     "imports": "always",
    //     "exports": "always",
    //     "functions": "never",
    //   },
    // ],
    // 'comma-dangle': ['error', 'always-multiline'],
    'no-cond-assign': ['error', 'always'],
    // disable rules from base configurations
    'no-console': 'off',
  },
};
