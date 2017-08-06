/*
 Cheating Lexical
 ----------------
 eval(..): function actually takes string as a argument, and treats the
 contents of the string as if it had actually been authored code at that
 point in the program like programmatically generating code inside your code.

 we have other functions like setTimeout(..) and setInterval(..) which does the same eval for the first argument
 */

function foo(str, a) {
    eval(str);
    console.log(a, b);
}

var b = 2;

foo("var b = 3;", 1); // 1, 3


/*
 Can't use under strict mode :
 -----------------------------
 When used under strict mode eval operates under its own lexical scope
 ie) it does not modify the enclosing scope
 */

function foo(str) {
    "use strict";
    eval(str);
    console.log(a);
}

foo("var a = 2");


/*
 * with(obj) : is a shorthand to for making multiple object references
 */

var obj = {
    a: 1,
    b: 2,
    c: 3
};

// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// "easier" short-hand
with (obj) {
    a = 3;
    b = 4;
    c = 5;
}

function foo(obj) {
    with (obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3
};

foo(o1);
console.log(o1.a); // 2
foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2 -- Oops, leaked global!