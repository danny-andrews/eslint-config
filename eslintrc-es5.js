/* eslint-env node */
module.exports = {
  extends: 'eslint:recommended',
  env: {browser: true},
  rules: {
    // Possible Errors
    'no-cond-assign': ['error', 'always'],
    'no-extra-parens': 'error',
    'no-unsafe-finally': 'error',
    'valid-jsdoc': 'error',
    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'complexity': ['error', 10],
    curly: 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
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
        ignore: [-1, 0, 1, 2]
      }
    ],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
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
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: 'error',
    // Strict
    strict: 'error',
    // Variables
    'init-declarations': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undefined': 'error',
    'no-use-before-define': 'error',
    // Stylistic Issues
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup'],
    camelcase: 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'error',
    'eol-last': 'error',
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    indent: ['error', 2],
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: {after: false},
          for: {after: false},
          while: {after: false},
          switch: {after: false},
          catch: {after: false}
        }
      }
    ],
    'linebreak-style': 'error',
    'max-len': ['error', 80],
    'max-statements-per-line': ['error', {max: 1}],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', {let: 'never', const: 'never'}],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': 'error',
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: 'error',
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error'
  }
};
