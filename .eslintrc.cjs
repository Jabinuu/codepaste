//  {
//   "root": true,
//   "extends": [
//     "@antfu",
//     // 'plugin:vue/vue3-essential',
//     // 'eslint:recommended',
//     "@vue/eslint-config-typescript",
//     "@vue/eslint-config-prettier/skip-formatting"
//   ],
//   "rules":{
//     "no-console": 0
//   },
//   "overrides": [
//     {
//       "files": [
//         "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"
//       ],
//       "extends": [
//         "plugin:cypress/recommended"
//       ]
//     }
//   ],
//   "parserOptions": {
//     "ecmaVersion": "latest"
//   }
// }


module.exports =  {
  root: true,
  extends: [
    "@antfu",
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  rules:{
    "no-console": 'off'
  },
  overrides: [
    {
      files: [
        "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"
      ],
      extends: [
        "plugin:cypress/recommended"
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: "latest"
  }
}
