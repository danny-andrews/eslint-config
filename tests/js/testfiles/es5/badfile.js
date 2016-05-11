/* Best Practices */

// no-implicit-globals
var k = 2;
/* eslint-disable no-implicit-globals, no-redeclare, no-unused-vars */

// no-caller
function foo() {
  'use strict';
  arguments.callee(1);
}

// no-useless-call
foo.call(null, 1, 2);

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

/* Stylistic Issues */

// one-var
function foo() {
  'use strict';
  var m = 2;
  var n = 1;
}

// one-var-declaration-per-line
function foo() {
  'use strict';
  var m = 2, n = 1;
}

foo();
