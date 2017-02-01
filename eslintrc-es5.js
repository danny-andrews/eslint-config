module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    './rulesets/best-practices.js',
    './rulesets/legacy.js',
    './rulesets/possible-errors.js',
    './rulesets/stylistic-issues.js',
    './rulesets/variables.js'
  ],
  env: {node: false, browser: true}
};
