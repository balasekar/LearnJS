/**
*
* Reference error -sample
*
*/
function foo(a) {
    console.log( a + b );
    b = a;
}

foo( 2 );


/**     Notes:
*
* Here RHS look up occurs for the variable 'b' the first time, it will not be found
* this is said as undeclared variable (not found in scope) -- it will be thrown Reference Error
*
* If the Engine is performing LHS look up for 'b' (in non strict mode) and not able to find it in scope as well as the global scope
* then a new variable 'b' will be created in global scope
*
*/

/*
 *
 * Type error -sample
 *
 */
function foo(a, b) {
    a(3);
    b.bar();

}

foo( 2, null );

/*       Notes:
* Type error is thrown when you try to execute a non function variable
* or reference a property on a null or undefined variable
*/
