import rulesets from '../rulesets';
import test from 'ava';

const getUnsortedRulePairs = rules => {
  const ruleNames = Object.keys(rules).map(rule => `${rule}.`);
  const sortedRuleNames = ruleNames.concat().sort();
  const removePeriod = str => str.substr(0, str.length - 1);

  const unsortedPairs = ruleNames.map((name, i) => [
    removePeriod(name),
    removePeriod(sortedRuleNames[i])
  ]).filter(pair => pair[0] !== pair[1]);

  return unsortedPairs;
};

const errorMsg = unsortedPairs =>
  `Rules not sorted. Given vs expected:\n[${unsortedPairs.join(']\n[')}]`;

const testSet = (name, set) => {
  test(`#${name} rules are sorted`, t => {
    const unsortedPairs = getUnsortedRulePairs(set.rules);

    t.true(
      unsortedPairs.length === 0,
      errorMsg(unsortedPairs)
    );
  });
};

Object.keys(rulesets).forEach(key => testSet(key, rulesets[key]));
