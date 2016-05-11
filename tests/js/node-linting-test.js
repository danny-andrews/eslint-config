import {verifyLintResults} from './helpers/linting-helpers';

const TEST_FILE = './testfiles/node/badfile.js';
const REQUIRED_RULES = [
  'callback-return',
  'handle-callback-err',
  'no-mixed-requires',
  'no-new-require',
  'no-path-concat',
  'no-process-env',
  'no-process-exit'
];

verifyLintResults({testFile: TEST_FILE, requiredRules: REQUIRED_RULES});
