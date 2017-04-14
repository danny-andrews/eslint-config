import {map, merge, pipe, reduce, values} from 'ramda';
import allEslintRules from 'eslint/conf/eslint-all';
import {CLIEngine} from 'eslint';
import rulesets from '../rulesets';

export const allCoreRules = allEslintRules.rules;

export const rulePairs = rules => {
  const ruleNames = Object.keys(rules);
  const sortedRuleNames = ruleNames.concat().sort();

  return ruleNames
    .map((name, i) => [name, sortedRuleNames[i]])
    .filter(pair => pair[0] !== pair[1]);
};

export const rulesForConfig = config => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: config
  });

  return cli.getConfigForFile('.').rules;
};

export const allMyRules = pipe(
  map(({rules}) => rules),
  values,
  reduce((acc, rules) => merge(acc, rules), {}),
)(rulesets);
