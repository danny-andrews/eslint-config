/* eslint-env node */
/* eslint-disable prefer-arrow-callback */
import {CLIEngine} from 'eslint';

function lintFile(filepath) {
  const cli = new CLIEngine();
  const report = cli.executeOnFiles([filepath]);
  const errResults = CLIEngine.getErrorResults(report.results)[0].messages;
  const errResultsByRuleId = errResults.reduce(function(prevVal, val) {
    prevVal[val.ruleId] = prevVal[val.ruleId]
      ? prevVal[val.ruleId].concat(val)
      : [val];
    return prevVal;
  }, {});
  return {errResults, errResultsByRuleId};
}

export function verifyLintResults(opts = {}) {
  const {testFile, errCount, requiredRules, t} = opts;
  const {errResults, errResultsByRuleId} = lintFile(testFile);
  t.is(errResults.length, errCount);

  requiredRules.forEach(rule => {
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
}
