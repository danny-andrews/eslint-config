/* eslint-env node */
/* eslint-disable no-magic-numbers */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    './eslint-rules/best-practices.js',
    './eslint-rules/legacy.js',
    './eslint-rules/possible-errors.js',
    './eslint-rules/stylistic-issues.js',
    './eslint-rules/variables.js'
  ],
  env: {node: false, browser: true}
};
