module.exports = {
  root: true,
  extends: [
    '@antfu',
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'no-console': 'off',
  },
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      ],
      extends: [
        'plugin:cypress/recommended',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
