module.exports = {
  rules: {
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
    camelcase: 'error',
    'capitalized-comments': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-names': ['error', 'never'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    indent: ['error', 2],
    'jsx-quotes': 'error',
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
    'max-statements-per-line': 'error',
    'max-statements': 'error',
    'new-cap': ['error', {capIsNew: false}],
    'new-parens': 'error',
    'newline-before-return': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true}],
    'semi-spacing': 'error',
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'unicode-bom': 'error'
  }
};
