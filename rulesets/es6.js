module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {jsx: true}
  },
  env: {es6: true},
  rules: {
    'generator-star-spacing': ['error', 'both'],
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': ['error', {ignoreCase: true}],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'both']
  }
};
