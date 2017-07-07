import {allCoreRules, allMyRules, rulePairs, rulesForConfig} from './utils';
import {difference, forEachObjIndexed, intersection, toPairs} from 'ramda';
import Rules from 'eslint/lib/rules';
import rulesets from '../rulesets';
import test from 'ava';

test('config has no deprecated rules', t => {
  const allRuleNames = Object.keys(allMyRules);
  const rules = new Rules();
  const actual = allRuleNames.filter(
    ruleName => rules.get(ruleName).meta.deprecated
  );

  t.deepEqual(actual, []);
});

test('config has no duplicate rules inherited from parent configs', t => {
  const eslintConfigRulePairs = toPairs(rulesForConfig({extends: 'eslint'}));
  const allRulePairs = toPairs(allMyRules);

  const actual = intersection(eslintConfigRulePairs, allRulePairs);

  t.deepEqual(actual, []);
});

forEachObjIndexed((set, name) => {
  test(`${name} rules are sorted`, t => {
    const actual = rulePairs(set.rules);

    t.deepEqual(actual, []);
  });
}, rulesets);

test('config has no omitted core rules', t => {
  const allRulesDeep = rulesForConfig({extends: '.eslintrc.yaml'});
  const allEslintRuleNames = Object.keys(allCoreRules);
  const allRuleNames = Object.keys(allRulesDeep);
  const actual = difference(allEslintRuleNames, allRuleNames);

  t.deepEqual(actual, []);
});
