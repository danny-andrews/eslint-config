/* eslint-env node */
module.exports = {
  root: true,
  env: {node: true},
  rules: {
    'callback-return': 'error',
    'handle-callback-err': 'error',
    'no-mixed-requires': ['error', {grouping: true}],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error'
  }
};
