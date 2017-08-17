/**
 * When a function is invoked, an activation record, otherwise known as an execution context,
 * is created. This record contains information about where the function was called from (the call-stack),
 * how the function was invoked, what parameters were passed, etc. One of the properties of this record
 * is the this reference which will be used for the duration of that function’s execution.
 * */

function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Kyle"
};

var you = {
    name: "Reader"
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);


/**
 * Default Binding
 * */

function foo() {
    console.log(this.a);
}

var a = 2;

foo();
// outputs:  2

/**
 * Implicit Binding
 * */

obj = {
    a: 3,
    foo: foo
};

obj.foo();

// outputs:  3

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.foo();

// outputs: 42

/**
 * Implicitly Lost
 * */

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"


/**
 * Explicit Binding
 * */

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
};

foo.call(obj); // 2

/**
 * Hard Binding
 * ------------
 * call or apply - internally calls Function.prototype.bind(..)
 * */

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
};

var bar = function () {
    foo.call(obj);
};

bar(); // 2
setTimeout(bar, 100); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call(window); // 2


/**
 * using apply
 * */

function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

// simple `bind` helper
function bind(fn, obj) {
    return function () {
        return fn.apply(obj, arguments);
    };
}

var obj = {
    a: 2
};

var bar = bind(foo, obj);

var b = bar(3); // 2 3
console.log(b); // 5

/**
 * API call "contexts"
 * */

function foo(el) {
    console.log(el, this.id);
}

var obj = {
    id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach(foo, obj); // 1 awesome  2 awesome  3 awesome

/**
 *  new Binding
 * --------------
 * > new object is created
 * > [[Prototype]] - linked
 * > newly constructed object is set as the this binding
 * > Unless the function returns its own object, the new - invoked function will return a new object
 * */

function foo(a) {
    this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2

/**
 * Ignored Binding
 * ---------------
 * > null or undefined passed as this parameter to call, apply, bind
 * then the default values are ignored
 * */

function foo() {
    console.log(this.a);
}

var a = 2;
foo.call(null); // 2


function foo(a, b) {
    console.log('a: ' + a + ' b: ' + b);
}

foo.apply(null, [2, 3]);
//"a: 2 b: 3"

/**
 currying with bind
 * */

var bar = foo.bind( null, 4);
bar(5);

/**
 * Safer this
 * ------------
 * > If we always pass a DMZ (empty) object for ignored this bindings we don’t think we need to care about,
 * we’re sure any hidden/unexpected usage of this will be restricted to the empty object,
 * which insulates our program’s global object from side-effects.
 * */

º = Object.create(null);

foo.apply(º, [2, 3]);

var bar = foo.bind( º, 4 );
bar( 5 ); // a:4, b:5

/**
 * Indirection
 * ------------
 * we can create indirect reference to functions
 * */

function foo(){
    console.log(this.a);
}

var a =2;
var o = { a: 3, foo: foo};
var p = { a:4};

o.foo();
(p.foo = o.foo)();


/**
 * Softening Binding
 * -----------------
 * softBind() is a function which is similar to bind() but it wraps the function in logic
 * that checks the 'this' at call-time and if it's global or undefined it will revert back to the default object in soft bind
 * */

function foo() {
    console.log("name: " + this.name);
}

var obj = { name: "obj" },
    obj2 = { name: "obj2" },
    obj3 = { name: "obj3" };

var fooOBJ = foo.softBind( obj );

fooOBJ(); // name: obj

obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2   <---- look!!!

fooOBJ.call( obj3 ); // name: obj3   <---- look!

setTimeout( obj2.foo, 10 ); // name: obj   <---- falls back to soft-binding

/**
 * Lexical this
 * ------------
 * Normal functions abide by the above rules, but the special functions created by => "fat arrows" doesn't
 * > this inside this function will adopt the this from its containing scope.
 * */

function foo() {
    // return an arrow function
    return (a) => {
        // `this` here is lexically adopted from `foo()`
        console.log( this.a );
    };
}

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};

var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, not 3!