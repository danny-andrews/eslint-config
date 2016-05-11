import {CLIEngine} from 'eslint';
import test from 'ava';

test('lints stuff rightly', () => {
  const cli = new CLIEngine();
  const report = cli.executeOnFiles(['../../testfiles/js/es6/badfile.js']);
  const errResults = CLIEngine.getErrorResults(report.results);
  const fileErrResults = errResults[0].messages;
  console.log(JSON.stringify(fileErrResults));
});
