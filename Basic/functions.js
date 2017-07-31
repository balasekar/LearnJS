function foo(){
    return 42;
};

foo.bar = "hello world";

console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);