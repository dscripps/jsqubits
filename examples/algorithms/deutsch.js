/*
 * Deutsch's Algorithm.
 * Determine the value of (f(0) + f(1)) mod 2 with a single invocation of f (where f is a single bit function)
 */

/*global require:true, console:true, exports:true, __dirname:true */

(function () {
    "use strict";
    var jsqubits = require(__dirname + '/../../index').jsqubits;

    var deutsch = exports.deutsch = function(f) {
       return jsqubits('|01>').hadamard(jsqubits.ALL).applyFunction(1, 0, f).hadamard(jsqubits.ALL).measure(1).result;
    };

    var f = function(x) {return (x + 1) % 2;};

    console.log("(f(0) + f(1)) mod 2 = " + deutsch(f));
})();


