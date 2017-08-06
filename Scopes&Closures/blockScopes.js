/*
 for loop doesn't create a new scope in JS
 */

(function foo() {
    console.log('i inside for:');
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('i outside:', i);
})();


/*
 if cond doesn't create a new scope in JS
 */

(function foo() {
    var a = true;
    if (a) {
        var b = 2;
        console.log('b inside if:', b);
        b = b + 1;
    }
    console.log('b outside if:', b);
})();

/*
 catch block creates a block scope
 */

(function foo() {
    try {

    }
    catch (err) {
        console.log(err);
    }

    console.log(err);
})();