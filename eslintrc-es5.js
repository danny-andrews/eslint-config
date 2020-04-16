module.exports = {
  extends: [
    'eslint',
    './rulesets/imports.js',
    './rulesets/base.js',
    './rulesets/node.js'
  ],
  env: {browser: true}
};
