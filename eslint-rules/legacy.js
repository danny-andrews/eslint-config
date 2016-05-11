module.exports = {
  rules: {
    'no-caller': 'error',
    'no-implicit-globals': 'error',
    'no-useless-call': 'error',
    'vars-on-top': 'error',
    strict: 'error',
    'one-var': ['error', {var: 'always', let: 'never', const: 'never'}],
    'one-var-declaration-per-line': 'error'
  }
};
