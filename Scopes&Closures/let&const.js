/*
let is another way of declaration but it attaches variable to whatever block it contained it
*/
var foo = true;

if(foo){
    let bar = 3 *  2;
    console.log(bar);
}

console.log(bar);

for(let i=0;i<5;i++){
    console.log(i);
}

console.log(i);

/*
const will also declare a variable whose value can't be changed and it attaches itself to the block contained it
*/

var foo = true;

if(foo){
    let bar = 3 *  2;
    console.log(bar);

    bar = 1;
}
console.log(bar);

/*
 let will not hoist to the eniter scope
*/

{
    console.log(bar);
    let bar = 2;
}

