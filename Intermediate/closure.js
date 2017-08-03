function makeAdder(x) {

    function add(y) {
        return x + y;
    }

    return add;
}

var plusOne = makeAdder(1);
var plusThree = makeAdder(3);

var a =42;
console.log(plusOne(a));
console.log(plusThree(a));

/*
In this case the inner variable x's value is retained till plusOne and plusThree functions are executed
*/

