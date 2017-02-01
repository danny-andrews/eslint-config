import test from 'ava';
import bestPractices from '../eslint-rules/best-practices';
import codeQuality from '../eslint-rules/code-quality';
import es6 from '../eslint-rules/es6';
import legacy from '../eslint-rules/legacy';
import node from '../eslint-rules/node';
import possibleErrors from '../eslint-rules/possible-errors';
import stylisticIssues from '../eslint-rules/stylistic-issues';
import variables from '../eslint-rules/variables';

const getUnsortedRulePairs = rules => {
  const ruleNames = Object.keys(rules).map(rule => `${rule}.`);
  const sortedRuleNames = ruleNames.concat().sort();
  const removePeriod = str => str.substr(0, str.length - 1);

  const unsortedPairs = ruleNames.map((name, i) => [
    removePeriod(name),
    removePeriod(sortedRuleNames[i])
  ]).filter(pair => pair[0] !== pair[1]);

  return unsortedPairs;
}

const errorMsg = unsortedPairs =>
  `Rules not sorted. Given vs expected:\n[${unsortedPairs.join(']\n[')}]`;

const rulesets = {
  bestPractices,
  codeQuality,
  es6,
  legacy,
  node,
  possibleErrors,
  stylisticIssues,
  variables
};
Object.keys(rulesets).forEach(key => {
  test(`#${key} rules are sorted`, t => {
    const unsortedPairs = getUnsortedRulePairs(rulesets[key].rules);

    t.true(
      unsortedPairs.length === 0,
      errorMsg(unsortedPairs)
    );
  });
})
