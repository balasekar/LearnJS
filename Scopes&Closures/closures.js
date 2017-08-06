/**
 *
 * Closure is when a function is able to remember and access its lexical scope
 * even when that function is executing outside its lexical scope.
 *
 */

function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    return bar;
}

var baz = foo();
baz();
// closure is observed -> here var a =2 is remembered in global scope


/*
 Loops + closures
 */

for (var i = 0; i <= 5; i++) {
    setTimeout(function bar() {
        console.log(i);
    }, 1000 * i);
}

// here 6 is printed 5 times (because only i is variable is printed not the value)


for (var i = 0; i <= 5; i++) {
    (function () {
        var j = i;
        setTimeout(function bar() {
            console.log(j);
        }, 1000 * j);
    })();
}

// here 0,1 ..5 is printed


/*
 Block scoping used
 */
for (let i = 0; i <= 5; i++) {
    setTimeout(function bar() {
        console.log(i);
    }, 1000 * i);
}

// here 0,1 ..5 is printed


/*Module - closure */

function coolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! "));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
