module.exports = {
  extends: ['google'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Règles spécifiques pour le projet
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
  },
};
