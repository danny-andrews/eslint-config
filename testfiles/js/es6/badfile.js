const number = 7;
let obj = {};
let bar = {};
let bool = true;
let string = 'string';
let regexp = /32/;
let array = [];
function func() { // eslint-disable-line no-redeclare
  return 1;
}

/* Possible Errors */

// comma-dangle
obj = {
  bar: 'blah',
};

// no-cond-assign
if(bar = 1 && bar === 2) {
  return 1;
}

// no-console
console.log("I shouldn't be doing this in production code");

// no-constant-condition
if(true) {
  return 1;
}

// no-control-regex
regexp = new RegExp('\x1f');

// no-debugger
debugger;

// no-dupe-keys
obj = {
  a: 1,
  b: 5,
  a: 4
};

// no-duplicate-case
switch(number) {
case 1:
  break;
case 2:
  break;
case 1:
  break;
}

// no-empty
if(obj) {}

// no-empty-character-class
obj = /[].*/;

// no-ex-assign
try {
  throw new Error('this failed');
}
catch(e) {
  e = 10;
}

// no-extra-boolean-cast
if(Boolean(bool)) {
  return 1;
}

// no-extra-parens
obj = (1 + 0);

// no-extra-semi
obj = 2; ; // eslint-disable-line max-statements-per-line

// no-func-assign
func = function() {
  return 2;
};

// no-inner-declarations
function foo() { // eslint-disable-line no-redeclare
  if(bool) {
    function foo2() { // eslint-disable-line no-redeclare
      return 1;
    }
    foo2();
  }
}

// no-invalid-regexp
regexp = new RegExp('[');

// no-irregular-whitespace
if(bool) {
  return 1;
}

// no-negated-in-lhs
if(!string in obj) {
  return 1;
}

// no-obj-calls
Math(); // eslint-disable-line new-cap

// no-regex-spaces
regexp = /foo   bar/;

// no-sparce-arrays
array = ['red',, 'blue'];

// no-unexpected-multiline
string = 'world'
  [1].forEach(num => num + 1);

// no-unreachable
if(bool) {
  return 1;
  return 2;
}

// no-unsafe-finally
function foo() { // eslint-disable-line no-redeclare
  try {
    throw Error('bad stuff');
  }
  finally {
    return 2;
  }
}

// use-isnan
if(bool === NaN) {
  return 2;
}

// valid-jsdoc
/**
* A description
* @param {int} num1 The first number.
*/
function foo(num1) { // eslint-disable-line no-redeclare
  return num1;
}

// valid-typeof
if(typeof bool === 'thing') {
  return 1;
}

/* Best Practices */

// accessor-pairs
obj = {
  set a(value) {
    this.val = value;
  }
};

// array-callback-return
[1, 2].map(function(num) {
  foo(num);
});

/* eslint-disable no-magic-numbers */
// complexity
function foo() { // eslint-disable-line no-redeclare
  if(number > 1) {
    if(number === 10) {
      return 32;
    }
    else if(number === 11) {
      return 23;
    }
    else if(number > 19) {
      return 98;
    }

    return 1;
  }
  else if(number < 1 && number > -3) {
    if(number === 0) {
      return 1;
    }
    else if(number === -1) {
      return 23;
    }

    return 2;
  }
  if(number === -9) {
    return 4;
  }
  else if(number === -18) {
    return 6;
  }
  else if(number < -20) {
    return 190;
  }

  return 9;
}
/* eslint-enable no-magic-numbers */

// consistent-return
function foo2() {
  if(bool) {
    return true;
  }

  return;
}

// curly
if(bool) number++;

// dot-location
obj = obj.thing.
  otherThing;

// dot-notation
obj = obj['thing'];

// eqeqeq
bool = bool == null;

// guard-for-in
for(string in obj) {
  foo();
}

// no-alert
alert('hi');

// no-case-declarations
switch(foo) {
case 1:
  const x = 1;
  return x;
}

// no-div-regex
regexp = /=foo/;

// no-else-return
function foo() { // eslint-disable-line no-redeclare
  if(bool) {
    return 1;
  }
  else {
    return 2;
  }
}

// no-empty-function
function foo() {} // eslint-disable-line no-redeclare

// no-empty-battern
const {} = obj;

// no-eval
eval('const a = 2;');

// no-extend-native
Object.prototype.extra = 55;

// no-extra-bind
(function foo() { // eslint-disable-line no-redeclare
  return 1;
}).bind(number);

// no-floating-decimal
bar = .8;

// no-implicit-coercion
bar = !!bool;

// no-implied-eval
setTimeout('const d = 3;');

// no-iterator
/* eslint-disable no-underscore-dangle */
obj.prototype.__iterator__ = function() {
/* eslint-enable no-underscore-dangle */
  return 2;
};

// no-labels
outer: while(bool) { // eslint-disable-line no-unused-labels
  bool = false;
}

// no-lone-blocks
{
  bar = 2;
}

// no-loop-func
for(bar = 0; bar < 2; bar++) {
  obj = function() {
    return bar;
  };
}

// no-magic-numbers
bar = 2343 + 2;
array[23] = 2;

// no-multi-spaces
bar  = 1;

// no-multi-str


// no-native-reassign
String = 'hi';

// no-new
new Math();

// no-new-func
bar = new Function('a', 'b', 'return a + b;');

// no-new-wrappers
bar = new String('');

// no-param-reassign
function foo(param1) { // eslint-disable-line no-redeclare
  param1 = 13;
  return param1;
}

// no-proto
bar = obj.__proto__;

// no-redeclare
function foo() {
  return 1;
}

// no-return-assign
function foo() { // eslint-disable-line no-redeclare
  return bar = 2;
}

// no-script-url
location.href = 'javascript:void(0)';

// no-self-assign
bar = bar;

// no-self-compare
bar = 1 === 1;

// no-sequences
bar = foo(), 2; // eslint-disable-line no-unused-expressions

// no-throw-literal
if(bool) {
  throw 'Error';
}

// no-unmodified-loop-condition
while(bool) {
  bar++;
}

// no-unused-expressions
0;
0 || foo();

// no-useless-concat
bar = '23' + 'jk';

// no-useless-escape
bar = /\:/;

// no-void
if(bool) {
  return void 0;
}

// radix
bar = parseInt('071');

// wrap-iife
bar = function() {
  return 1;
}();

// yoda
if('2' === bar) {
  return 1;
}

/* Variables */

// no-shadow
function foo() { // eslint-disable-line no-redeclare
  const bar = 2;
  return bar;
}

// no-shadow-restricted-names
function NaN() {
  return 1;
}

// no-undef
b = 10;

// no-unused-vars
const k = 2;

// no-use-before-define
if(bool) {
  return l;
}
const l = 1;

/* Stylistic Issues */

return (function() {
  foo();
  foo2();
  return {obj, regexp, array};
})();
