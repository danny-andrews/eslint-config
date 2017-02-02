module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
    camelcase: 'error',
    'capitalized-comments': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-return': 'error',
    'consistent-this': 'error',
    curly: ['error', 'all'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'func-call-spacing': 'error',
    'func-names': ['error', 'never'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    indent: ['error', 2],
    'init-declarations': 'error',
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': ['error', {
      overrides: {
        if: {after: false},
        for: {after: false},
        while: {after: false},
        switch: {after: false},
        catch: {after: false}
      }
    }],
    'linebreak-style': 'error',
    'max-len': ['error', 80], // eslint-disable-line no-magic-numbers
    'max-statements-per-line': 'error',
    'max-statements': 'error',
    'new-cap': ['error', {capIsNew: false}],
    'new-parens': 'error',
    'newline-before-return': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': [
      'error',
      {allow: ['methods', 'arrowFunctions']}
    ],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        enforceConst: true,
        ignore: [-1, 0, 1, 2, 3, 4, 5]
      }
    ],
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-spaced-func': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'one-var': ['error', {var: 'always', let: 'never', const: 'never'}],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'prefer-promise-reject-errors': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true}],
    radix: 'error',
    'require-await': 'error',
    'semi-spacing': 'error',
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    strict: 'error',
    'unicode-bom': 'error',
    'valid-jsdoc': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: 'error'
  }
};
