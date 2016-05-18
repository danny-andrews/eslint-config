/* eslint-disable no-unused-vars, no-redeclare, import/no-unresolved */
// no-duplicate-imports
import {otherThing} from 'other-thing';
import {thing} from 'other-thing';

// sort-imports
import z from 'z';
import y from 'y';

const number = 7;
let obj = {};
let bar = {};
let bool = true;
let string = 'string';
let regexp = /32/;
let array = [];
function func() {
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
func = function() { // eslint-disable-line no-const-assign
  return 2;
};

// no-inner-declarations
function foo() {
  if(bool) {
    function foo2() { // eslint-disable-line no-shadow
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
function foo() {
  try {
    throw Error('bad stuff');
  }
  finally {
    return 2;
  }
}

// use-isnan
if(bool === NaN) { // eslint-disable-line no-use-before-define
  return 2;
}

// valid-jsdoc
/**
* A description
* @param {int} num1 The first number.
*/
function foo(num1) {
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
[1, 2].map(num => {
  bar = 2;
  foo(num);
});

/* eslint-disable no-magic-numbers */
// complexity
function foo() { // eslint-disable-line max-statements
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
if(bool) bar++;

// dot-location
obj = obj.thing.
  otherThing;

// dot-notation
obj = obj['thing'];

// eqeqeq
bool = bool == null;

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
function foo() {
  if(bool) {
    return 1;
  }
  else {
    return 2;
  }
}

// no-empty-function
function foo() {}

// no-empty-battern
const {} = obj;

// no-eval
eval('const a = 2;');

// no-extend-native
Object.prototype.extra = 55;

// no-extra-bind
(function foo() { // eslint-disable-line no-shadow
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
bar = 'Line 1 \
         Line 2';

// no-native-reassign
String = 'hi';

// no-new
new Error();

// no-new-func
bar = new Function('a', 'b', 'return a + b;');

// no-new-wrappers
bar = new String('');

// no-param-reassign
function foo(param1) {
  param1 = 13;

  return param1;
}

// no-proto
bar = obj.__proto__;

// no-redeclare
/* eslint-enable no-redeclare */
function foo() {
  return 1;
}
/* eslint-disable no-redeclare */

// no-return-assign
function foo() {
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

// init-declarations
let blah;

// no-shadow
function foo() {
  const bar = 2;

  return bar;
}

// no-shadow-restricted-names
function NaN() {
  return 1;
}

// no-undef
b = 10;

// no-undefined
let bar = undefined;

// no-unused-vars
/* eslint-enable no-unused-vars */
const k = 2;
/* eslint-disable no-unused-vars */

// no-use-before-define
if(bool) {
  return l;
}
const l = 1;

/* Node */

// callback-return
function doSomething(err, callback) {
  if(err) {
    callback(err);
  }
  callback();
}

// handle-callback-err
function loadData(err, data) {
  doSomething();
}

// no-mixed-requires
/* eslint-disable no-var, one-var, vars-on-top */
const fs = require('fs'),
  async = require('async');
/* eslint-enable no-var, one-var, vars-on-top */

// no-new-require
const appHeader = new require('app-header'); // eslint-disable-line new-cap

// no-path-concat
const fullPath = __dirname + '/foo.js'; // eslint-disable-line prefer-template

// no-process-env
if(process.env.NODE_ENV === 'dev') {
  return 1;
}

// no-process-exit
if(bool) {
  process.exit(1);
}

/* Stylistic Issues */

// array-bracket-spacing
bar = [ 1 ];

// block-spacing
if(bool) {return true;}

// brace-style
if(bool) {
  bar = 2;
} else {
  bar = 1;
}

// camelcase
const djs_klds = 3;

// comma-spacing
array = [1 ,2];

// comma-style
array = [1
  , 2];

// computed-property-spacing
bar = obj[ bar ];

// consistent-this
bar = this;

// func-style
const func = function() {
  return 1;
};

// indent
  bar = 2;

// key-spacing
obj = {d :3};
obj = {
  d :3
};

// keyword-spacing
if (bool) {
  return 1;
}
for (bar; bar < 1; bar++) {
  return 2;
}
while (bool) {
  bool = !bool;
}
switch (string) {
case '1':
  break;
}
try {
  throw new Error('ahhh');
}
catch (e) {
  bar = e;
}

// max-depth
if(bool) {
  if(bool) {
    if(bool) {
      if(bool) {
        return 1;
      }
    }
  }
}

// max-len
// This comment is way to long, and should be broken over a few different lines to make it readable

// max-nested-callbacks
foo(() => {
  bar(() => {
    foo(() => true);
  });
});

// max-params
function foo(a, b, c, d) {
  return 1;
}

// max-statements
function foo() {
  bar++;
  bar++;
  bar++;
  bar++;
  bar++;
  bar++;
  bar++;
  bar++;
  bar++;
  bar++;
  bar++;
}

// max-statements-per-line
const thing1 = 2; const thing2 = 1;

// newline-before-return
function foo() {
  bar = 0;
  return 3;
}

// new-cap
/* eslint-disable no-undef */
bar = Blah();
bar = new blah();
/* eslint-enable no-undef */

// new-parens
bar = new Error;

// no-array-constructor
bar = Array(0, 1, 2);

// no-bitwise
bar = 2 | 1;

// no-continue
for(bar = 0; bar < 2; bar++) {
  if(bar >= 1) {
    continue;
  }
  bar += bar;
}

// no-inline-comments
bar = 2; // bad comment

// no-lonely-if
if(bool) {
  bar = 2;
}
else {
  if(bool) {
    return 1;
  }
}

// no-multiple-empty-lines


// no-negated-condition
if(!bool) {
  bar = 1;
}
else {
  bar = 2;
}

// no-nested-ternary
bar = bar ? 1 : bar === 2 ? 2 : 0;

// no-new-object
bar = new Object();

// no-spaced-func
foo ();

// no-trailing-spaces
bar = 2; 

// no-underscore-dangle
const _lk = 2; // eslint-disable-line no-unused-vars

// no-unneeded-ternay
bool = bool === 1 ? true : false;

// no-whitespace-before-property
bar = obj .ok;

// object-curly-spacing
bar = { a: 1 };

// operator-assignment
bar = bar + 1;

// operator-linebreak
bar = 1 +
  2;

// padded-blocks
if(bool) {

  return 2; // eslint-disable-line newline-before-return

}

// quote-props
obj = {'a': 3};

// quotes
bar = "2";
bar = "'2'";

// semi
bar = 2

// semi-spacing
bar = 2 ;

// space-before-blocks
if(bool){
  return 2;
}

// space-before-function-paren
function foo () {
  return 2;
}

// space-in-parens
foo( 1 );

// space-infix-opts
bar = 1+2;

// space-unary-opts
bar = bar ++;

// spaced-comment
/*Not spaced */

/* ES6 */

// arrow-body-style
bar = () => { return 2; };

// arrow-parens
bar = (a) => 2;

// arrow-spacing
bar = ()=>{
  bar = 2;

  return bar;
};

// constructor-super
class A { // eslint-disable-line no-unused-vars
  constructor() {
    super();
  }
}

// generator-star-spacing
function*foo() {
  yield 2;
}

// no-class-assign
A = 2;

// no-confusing-arrow
bar = d => bar === 1 ? 2 : d;

// no-const-assign
number = 2;

// no-dupe-class-members
class G { // eslint-disable-line no-unused-vars
  bar() {
    return 1;
  }
  bar() {
    return 2;
  }
}

// no-new-symbol
bar = new Symbol('thing');

// no-this-before-super
class K extends G { // eslint-disable-line no-unused-vars
  constructor() {
    this.l = 1;
    super();
  }
}

// no-useless-computed-key
obj = {['k']: 2};

// no-useless-constructor
class M extends G { // eslint-disable-line no-unused-vars
  constructor() {
    super();
  }
}

// no-var
var lk = 2; // eslint-disable-line no-unused-vars, vars-on-top

// object-shorthand
obj = {bar: bar};
obj = {
  k: function() {
    return 2;
  }
};

// prefer-arrow-callback
foo(function(a) { return a; });

// prefer-const
let neverChanges = 2; // eslint-disable-line no-unused-vars

// prefer-rest-params
function foo() {
  return arguments;
}

// prefer-spread
array = [1, 2];
Math.max.apply(Math, array);

// prefer-template
bar = 'ok';
bar = string + 'ok';

// require-yield
function * foo() {
  return 2;
}

// template-curly-spacing
bar = `${ bar } hi`;

// yield-star-spacing
function * foo() {
  yield*bar();
}

return (function() {
  foo();
  foo2();

  return {obj, regexp, array};
})();

// eol-last