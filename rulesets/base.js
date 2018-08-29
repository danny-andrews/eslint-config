module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    camelcase: ['error', {properties: 'always'}],
    'capitalized-comments': [
      'error',
      'always',
      {ignoreConsecutiveComments: true}
    ],
    'consistent-this': 'error',
    curly: ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'func-names': ['error', 'never'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'function-paren-newline': ['error', 'consistent'],
    'global-require': 'error',
    indent: ['error', 2, {SwitchCase: 0}],
    'init-declarations': 'error',
    'jsx-quotes': 'error',
    'keyword-spacing': [
      'error', {
        overrides: {
          catch: {after: false},
          for: {after: false},
          if: {after: false},
          switch: {after: false},
          while: {after: false}
        }
      }
    ],
    'linebreak-style': 'error',
    'lines-around-comment': [
      'error', {
        afterBlockComment: false,
        afterLineComment: false,
        allowArrayStart: true,
        allowBlockStart: true,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: true
      }
    ],
    'lines-between-class-members': 'error',
    'max-len': ['error', 80],
    'multiline-comment-style': ['error', 'separate-lines'],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': ['error', {capIsNew: false}],
    'newline-per-chained-call': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': 'off',
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
        detectObjects: true,
        enforceConst: true,
        ignore: [-1, 0, 1, 100],
        ignoreArrayIndexes: true
      }
    ],
    'no-misleading-character-class': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-negated-condition': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-process-env': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-sync': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef': ['error', {typeof: false}],
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    'no-useless-call': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', {consistent: true}],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'one-var': [
      'error',
      {
        const: 'never',
        let: 'never',
        var: 'always'
      }
    ],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before', {overrides: {'=': 'after'}}],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*'
      }
    ],
    quotes: ['error', 'single', {avoidEscape: true}],
    'require-await': 'error',
    'require-jsdoc': 'off',
    'require-unicode-regexp': 'error',
    'semi-spacing': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'spaced-comment': ['error', 'always', {exceptions: []}],
    'switch-colon-spacing': 'error',
    'unicode-bom': 'error',
    'vars-on-top': 'error'
  }
};
