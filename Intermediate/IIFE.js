(function IIFE(){
    console.log('This is an Immediately Invoked function');
})();

// It can also have returned values

var x = (function IIFE(){
   return 42;
})();

console.log(x);

