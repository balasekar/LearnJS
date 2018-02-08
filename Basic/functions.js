function foo(){
    return 42;
};

foo.bar = "hello world";

console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);

/*function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();
console.log('p:', p);

function Person1() {
  var self = this; // Some choose `that` instead of `self`.
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

var p1 = new Person1();
console.log('p1:', p1);*/


function Person2() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p2 = new Person2();
console.log('p2:', p2);

function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}

printArguments(1,2,3);

Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr);
});