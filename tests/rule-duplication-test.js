import {intersection, toPairs} from 'ramda';
import allRules from './utils/all-rules';
import rulesForConfig from './utils/rules-for-config';
import test from 'ava';

test('config has no duplicate rules inherited from eslint', t => {
  const eslintConfigRulePairs = toPairs(rulesForConfig({extends: 'eslint'}));
  const allRulePairs = toPairs(allRules);

  const dupes = intersection(eslintConfigRulePairs, allRulePairs);

  t.deepEqual(dupes, []);
});
