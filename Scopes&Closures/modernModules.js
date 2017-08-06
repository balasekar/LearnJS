/*
This is a modern module written in JS which is using closure
*/

var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    }
})();

/*
This is invoking the definition wrapper function for a module
(passing in any dependencies), and storing the return value, the module’s API,
into an internal list of modules tracked by name.
*/

MyModules.define('bar', [], function () {
    function hello(who) {
        return 'let me introduce ' + who;
    }

    return {
        hello: hello
    };
});

MyModules.define('foo', [bar], function () {
    var name = 'bala';

    function printUpper() {
        console.log(bar.hello(name).toUpperCase());
    }

    return {
        printUpper: printUpper
    };
});

var bar = MyModules.get('bar');
var foo = MyModules.get('foo');

console.log(bar.hello('bala'));
foo.printUpper();