document.writeln('Hello, world!');

function a ()
{
  return {
    name: 'bala'
  }
}

console.log(a());
console.log(typeof Object.create)
console.log(typeof Object.prototype)
console.log(Object.prototype)

function classObj (str){
  this.value = str;
}

classObj.prototype.getVal = function () {
  return this.value;
}

var object1 = new classObj('constructStr');

object1.constructor.prototype.modifiedVal = function (){
  return 10;
};

var object2 = Object.create(object1);
console.log('object0:', classObj);
console.log('object1:', object1);
console.log('object1:', object1.getVal());
console.log('object2:', object2);
console.log('object2:', object2.modifiedVal());


