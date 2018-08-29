module.exports = {
  env: {es6: true},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'computed-property-spacing': 'error',
    'generator-star-spacing': ['error', 'both'],
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'require-atomic-updates': 'error',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'both']
  }
};
