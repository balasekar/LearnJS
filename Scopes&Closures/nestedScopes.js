function foo(a) {
    console.log( a + b );
}

var b = 2;

foo( 2 ); // 4”

// b not available in foo scope so went to global scope to fetch the value.