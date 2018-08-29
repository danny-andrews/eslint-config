import allEslintRules from 'eslint/conf/eslint-all';
import {CLIEngine} from 'eslint';
import R from 'ramda';
import rulesets from '../rulesets';

export const coreRuleNames = Object.keys(allEslintRules.rules);

const ruleMapToList = R.pipe(
  R.toPairs,
  R.map(([name, rule]) => ({name, rule}))
);

export const rulesForConfig = config => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: config
  });

  return ruleMapToList(cli.getConfigForFile('.').rules);
};

export const myRules = R.pipe(
  R.map(({rules}) => rules),
  R.values,
  R.reduce((acc, rules) => R.merge(acc, rules), {}),
  ruleMapToList
)(rulesets);

export const IGNORED_RULES = [
  'block-scoped-var',
  'func-name-matching',
  'id-blacklist',
  'id-match',
  'id-length',
  'implicit-arrow-linebreak',
  'line-comment-position',
  'max-classes-per-file',
  'newline-per-chained-call',
  'no-eq-null',
  'no-extra-label',
  'no-extra-parens',
  'no-mixed-operators',
  'no-restricted-globals',
  'no-restricted-imports',
  'no-restricted-modules',
  'no-restricted-properties',
  'no-ternary',
  'no-warning-comments',
  'nonblock-statement-body-position',
  'require-unicode-regexp',
  'semi-style',
  'sort-imports',
  'sort-keys',
  'sort-vars',
  'wrap-regex'
];
