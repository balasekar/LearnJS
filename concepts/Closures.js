var count = (function() {
    var _counter = 0;
    return function(){return ++_counter;};
  }
)();

console.log(count());
console.log(count());
console.log(count());