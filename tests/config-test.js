import {coreRuleNames, myRules, rulesForConfig, IGNORED_RULES} from './utils';
import R from 'ramda';
import Rules from 'eslint/lib/rules';
import test from 'ava';

const inheritedRules = rulesForConfig({extends: 'eslint'});
const finalRules = rulesForConfig({extends: '.eslintrc.yaml'});

const inheritedDisabledRules = inheritedRules
  .filter(({rule}) => rule === 'off');

test('config has no deprecated rules', t => {
  const rules = new Rules();
  const actual = myRules.map(R.prop('name')).filter(
    ruleName => rules.get(ruleName).meta.deprecated
  );

  t.deepEqual(actual, []);
});

test('config has no duplicate rules inherited from parent configs', t => {
  const actual = R.intersection(inheritedRules, myRules);

  t.deepEqual(actual, []);
});

test('config has no omitted core rules', t => {
  const allRuleNames = finalRules.map(R.prop('name'));
  const inheritedDisabledRuleNames = inheritedDisabledRules.map(R.prop('name'));
  const myRuleNames = myRules.map(R.prop('name'));

  const actual = R.difference(
    coreRuleNames,
    R.difference(
      allRuleNames,
      R.difference(
        inheritedDisabledRuleNames,
        myRuleNames.concat(IGNORED_RULES)
      )
    )
  );

  t.deepEqual(actual, []);
});
