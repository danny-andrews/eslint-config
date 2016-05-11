/* eslint-env node */
module.exports = {
  root: true,
  extends: './eslintrc-es5.js',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {es6: true},
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'both'],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'sort-imports': ['error', {ignoreCase: true}],
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'both']
  }
};
