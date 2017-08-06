/**
 * While compiling JS code - the function declarations are hoisted first and then variable declarations
 * to the start of the containing scope
 */


var a = 2;

foo();                    // works because `foo()`
// declaration is "hoisted"

function foo() {
    a = 3;

    console.log( a );    // 3

    var a;                // declaration is "hoisted"
    // to the top of `foo()`
}

console.log( a );    // 2
