function dump_props(obj, obj_name) {
  var result = '';
  for (var i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}

console.log(dump_props({test1: 'test1Val', test2: 'test2Val'}, 'testName'));

var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
  console.log(i); // logs 3, 5, 7
}