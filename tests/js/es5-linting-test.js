import test from 'ava';
import {verifyLintResults} from './helpers/linting-helpers';

const TEST_FILE = '../../testfiles/js/es5/badfile.js';
const ERR_COUNT = 7;
const REQUIRED_RULES = [
  // Best Practices
  'no-caller',
  'no-implicit-globals',
  'no-useless-call',
  'vars-on-top',
  // Strict
  'strict',
  // Stylistic Issues
  'one-var',
  'one-var-declaration-per-line'
];

test('lints stuff correctly', t => {
  verifyLintResults({
    testFile: TEST_FILE,
    errCount: ERR_COUNT,
    requiredRules: REQUIRED_RULES,
    t
  });
});
