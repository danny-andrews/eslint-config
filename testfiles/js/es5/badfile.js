/* Best Practices */

// no-implicit-globals
var k = 2; // eslint-disable-line no-unused-vars
/* eslint-disable no-implicit-globals, no-redeclare */

// no-caller
function foo() {
  'use strict';
  arguments.callee(1);
}

// no-useless-call
foo.call(undefined, 1, 2);

// vars-on-top
function foo() {
  'use strict';
  if(k) {
    var d = 2;
  }

  return d;
}

/* Strict */

// strict
function foo() {
  return 1;
}

/* Variables */

// init-declarations
function foo() {
  'use strict';
  var k;
  return k;
}

foo();
