import test from 'ava';
import {verifyLintResults} from './test-helpers';

const TEST_FILE = '../../testfiles/js/node/badfile.js';
const ERR_COUNT = 7;
const REQUIRED_RULES = [
  'callback-return',
  'handle-callback-err',
  'no-mixed-requires',
  'no-new-require',
  'no-path-concat',
  'no-process-env',
  'no-process-exit'
];

test('lints stuff correctly', t => {
  verifyLintResults({
    testFile: TEST_FILE,
    errCount: ERR_COUNT,
    requiredRules: REQUIRED_RULES,
    t
  });
});
