module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-param-reassign': ['error', { props: false }],
    indent: [
      'error',
      2
    ],
    quotes: ['error', 'single'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off'
  }
};