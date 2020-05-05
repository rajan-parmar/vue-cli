module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/require-render-return': 'off'
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ]
};
