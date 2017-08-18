/**
When you reference a property on an object, if that property doesn't exist,
JavaScript will automatically use that object's internal prototype reference to find another object
to look for the property on. You could think of this almost as a fallback if the property is missing.
*/

var foo={
  a: 42
};

//bar proto type linked to foo
var bar = Object.create(foo);

bar.b = 43;

console.log(bar);
console.log(bar.a);
console.log(bar.b);

