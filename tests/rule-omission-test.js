import allEslintRules from './utils/all-core-rules';
import allRules from './utils/all-rules';
import {difference} from 'ramda';

const allEslintRuleNames = Object.keys(allEslintRules);
const allRuleNames = Object.keys(allRules);
const diff = difference(allRuleNames, allEslintRuleNames)

console.log('diff', Object.keys(eslintConfigRules).length);
