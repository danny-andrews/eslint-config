import {CLIEngine} from 'eslint';
import test from 'ava';

const ERR_COUNT = 183;
const REQUIRED_RULE_IDS = [
  // Possible Errors
  'no-cond-assign',
  'no-extra-parens',
  'no-unsafe-finally',
  'valid-jsdoc',
  // Best Practices
  'accessor-pairs',
  'array-callback-return',
  'consistent-return',
  'complexity',
  'curly',
  'dot-location',
  'dot-notation',
  'eqeqeq',
  'guard-for-in',
  'no-alert',
  'no-div-regex',
  'no-else-return',
  'no-empty-function',
  'no-eval',
  'no-extend-native',
  'no-extra-bind',
  'no-floating-decimal',
  'no-implicit-coercion',
  'no-implied-eval',
  'no-iterator',
  'no-labels',
  'no-lone-blocks',
  'no-loop-func',
  'no-magic-numbers',
  'no-multi-spaces',
  'no-multi-str',
  'no-native-reassign',
  'no-new',
  'no-new-func',
  'no-new-wrappers',
  'no-param-reassign',
  'no-proto',
  'no-return-assign',
  'no-script-url',
  'no-self-compare',
  'no-sequences',
  'no-throw-literal',
  'no-unmodified-loop-condition',
  'no-unused-expressions',
  'no-useless-concat',
  'no-useless-escape',
  'no-void',
  'radix',
  'wrap-iife',
  'yoda',
  // Variables
  'init-declarations',
  'no-shadow',
  'no-shadow-restricted-names',
  'no-undefined',
  'no-use-before-define',
  // Stylistic Issues
  ['array-bracket-spacing', 2],
  ['block-spacing', 2],
  'brace-style',
  'camelcase',
  ['comma-spacing', 2],
  'comma-style',
  ['computed-property-spacing', 2],
  'consistent-this',
  'eol-last',
  'func-style',
  'indent',
  ['key-spacing', 4],
  ['keyword-spacing', 5],
  'max-depth',
  'max-len',
  'max-nested-callbacks',
  'max-params',
  'max-statements-per-line',
  'max-statements',
  ['new-cap', 2],
  'new-parens',
  'no-array-constructor',
  'no-bitwise',
  'no-continue',
  'no-inline-comments',
  'no-lonely-if',
  'no-multiple-empty-lines',
  'no-negated-condition',
  'no-nested-ternary',
  'no-new-object',
  'no-spaced-func',
  'no-trailing-spaces',
  'no-underscore-dangle',
  'no-unneeded-ternary',
  'no-whitespace-before-property',
  ['object-curly-spacing', 2],
  'operator-assignment',
  'operator-linebreak',
  ['padded-blocks', 2],
  'quote-props',
  'quotes',
  'semi',
  'semi-spacing',
  'space-before-blocks',
  'space-before-function-paren',
  ['space-in-parens', 2],
  'space-infix-ops',
  'space-unary-ops',
  'spaced-comment',
  'arrow-body-style',
  'arrow-parens',
  ['arrow-spacing', 2],
  'constructor-super',
  ['generator-star-spacing', 2],
  'no-class-assign',
  'no-confusing-arrow',
  'no-duplicate-imports',
  'no-this-before-super',
  'no-useless-computed-key',
  'no-useless-constructor',
  'no-var',
  ['object-shorthand', 2],
  'prefer-arrow-callback',
  'prefer-const',
  'prefer-rest-params',
  'prefer-spread',
  'prefer-template',
  'require-yield',
  'sort-imports',
  ['template-curly-spacing', 2],
  ['yield-star-spacing', 2]
];

// Not included: jsx-quotes, line-endings, no-mixed-spaces-and-tabs

let errResults = null;
let errResultsByRuleId = null;

test.beforeEach(() => {
  const cli = new CLIEngine();
  const report = cli.executeOnFiles(['../../testfiles/js/es6/badfile.js']);
  errResults = CLIEngine.getErrorResults(report.results)[0].messages;
  errResultsByRuleId = errResults.reduce((prevVal, val) => {
    prevVal[val.ruleId] = prevVal[val.ruleId]
      ? prevVal[val.ruleId].concat(val)
      : [val];
    return prevVal;
  }, {});
});

test('lints stuff correctly', t => {
  t.is(errResults.length, ERR_COUNT);

  REQUIRED_RULE_IDS.forEach(rule => {
    let ruleId = rule;
    let infractionCount = 1;
    if(typeof rule === 'object') {
      ruleId = rule[0];
      infractionCount = rule[1];
    }
    t.truthy(
      errResultsByRuleId[ruleId],
      `Expected ruleId: ${ruleId} to be in error list`
    );
    t.is(
      errResultsByRuleId[ruleId].length,
      infractionCount,
      `Expected ruleId: ${ruleId} to be in error list ${infractionCount} times`
    );
  });
});
