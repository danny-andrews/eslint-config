/* eslint-env node */
/* eslint-disable prefer-arrow-callback */
import {CLIEngine} from 'eslint';
import test from 'ava';

function lintFile(filepath) {
  const results = new CLIEngine().executeOnFiles([filepath]).results;
  const errors = CLIEngine.getErrorResults(results);
  const errorMessages = errors[0] ? errors[0].messages : [];
  const infractionCounts = errorMessages.reduce((prevVal, val) => {
    prevVal[val.ruleId] = prevVal[val.ruleId]
      ? prevVal[val.ruleId] + 1
      : 1;

    return prevVal;
  }, {});

  return infractionCounts;
}

export function verifyLintResults(opts = {}) {
  const {testFile, requiredRules} = opts;
  const expInfractionCounts = requiredRules.reduce((acc, val) => {
    if(typeof val === 'object') {
      acc[val[0]] = val[1];
    }
    else {
      acc[val] = 1;
    }

    return acc;
  }, {});

  const actualInfractionCounts = lintFile(testFile);
  const expRuleIds = Object.keys(expInfractionCounts);
  const extraneousRuleIds = Object.keys(actualInfractionCounts)
    .filter(ruleId => !expInfractionCounts[ruleId]);

  expRuleIds.forEach(ruleId => {
    const expInfractionCount = expInfractionCounts[ruleId];
    const actualInfractionCount = actualInfractionCounts[ruleId];
    test(`lints ${ruleId} correctly`, t => {
      t.is(
        actualInfractionCount,
        expInfractionCount,
        `Expected ruleId: ${ruleId} to be in error list ${expInfractionCount} `
          + `times but was found ${actualInfractionCount} times`
      );
    });
  });
  test('has no extraneous rule infractions', t => {
    t.is(
      extraneousRuleIds.length,
      0,
      `Unexpected rule infraction(s) detected: ${extraneousRuleIds.join(', ')}`
    );
  });
}
