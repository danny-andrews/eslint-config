export default {
  babel: {
    testOptions: {
      babelrc: false
    }
  },
  files: ['tests/**/*-test.js'],
  verbose: true,
  require: ['@babel/register'],
  failFast: false
};
