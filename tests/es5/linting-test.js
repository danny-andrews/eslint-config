import {verifyLintResults} from '../helpers/linting-helpers';

const TEST_FILE = './badfile.js';
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

verifyLintResults({testFile: TEST_FILE, requiredRules: REQUIRED_RULES});
