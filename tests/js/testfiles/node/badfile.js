/* Node */

// callback-return
function doSomething(err, callback) {
  if (err) {
    callback(err);
  }
  callback();
}

// handle-callback-err
function loadData (err, data) {
  doSomething();
}

// no-mixed-requires
var a = require('fs'),
  async = require('async');

// no-new-require
var appHeader = new require('app-header');

// no-path-concat
var fullPath = __dirname + "/foo.js";

// no-process-env
if(process.env.NODE_ENV === 'dev') {
  return 1;
}

// no-process-exit
if (somethingBadHappened) {
  console.error("Something bad happened!");
  process.exit(1);
}
