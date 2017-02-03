module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
    camelcase: ['error', {properties: 'never'}],
    'capitalized-comments': [
      'error',
      'always',
      {ignoreConsecutiveComments: true}
    ],
    'computed-property-spacing': 'error',
    'consistent-this': 'error',
    'dot-location': ['error', 'property'],
    'func-names': ['error', 'never'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'global-require': 'error',
    indent: ['error', 2, {SwitchCase: 0}],
    'init-declarations': 'error',
    'jsx-quotes': 'error',
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
    'new-cap': ['error', {capIsNew: false}],
    'newline-after-var': 'off',
    'newline-before-return': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-empty-function': [
      'error',
      {allow: ['methods', 'arrowFunctions']}
    ],
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-lonely-if': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        enforceConst: true,
        ignore: [-1, 0, 1, 2, 3, 4, 5]
      }
    ],
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-negated-condition': 'error',
    'no-param-reassign': 'error',
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-spaced-func': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef': ['error', {typeof: false}],
    'no-unsafe-negation': 'error',
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    'no-useless-call': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', {var: 'always', let: 'never', const: 'never'}],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before', {overrides: {'=': 'after'}}],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true}],
    'require-await': 'error',
    'require-jsdoc': 'off',
    'semi-spacing': 'error',
    'spaced-comment': ['error', 'always', {exceptions: []}],
    'unicode-bom': 'error',
    'vars-on-top': 'error'
  }
};
