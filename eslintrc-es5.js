module.exports = {
  extends: [
    'eslint',
    './rulesets/imports.js',
    './rulesets/base.js'
  ],
  env: {browser: true}
};
