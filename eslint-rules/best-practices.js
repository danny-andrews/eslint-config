module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    eqeqeq: 'error',
    'no-alert': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': [
      'error',
      {allow: ['methods', 'arrowFunctions']}
    ],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        enforceConst: true,
        ignore: [-1, 0, 1, 2, 3, 4, 5]
      }
    ],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    radix: 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: 'error'
  }
};
