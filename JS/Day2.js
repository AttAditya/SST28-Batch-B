console.log(add(3, 2));

function add(a, b) {
    return a + b;
}

console.log(printHello);
printHello();

var printHello = () => {
    console.log("Hello");
};

var add = (a, b) => a + b;

printHello("A");

printHello = function(a) {
    console.log("Hello " + a);
}

printHello("A");

function f1() {
    return 1;
}

function f2() {
    console.log(1);
}

var v1 = f1();
var v2 = f2();

console.log(v1);
console.log(v1);
console.log(v1);
console.log(v1);
console.log(v2);

var a = 1;
var b = 2;
console.log(a);

function add() {
    a = 10;
    return a + b;
}

console.log(a);
console.log(add());
console.log(a);

a = 2;

add();
console.log(a);

var c = 0;

function inc(c) {
    c++;
    console.log(c);
    return c;
}

console.log(c);
inc(2);
inc(c);
console.log(c);

function dec() {
    c--;
    return c;
}

console.log(c);
console.log(inc(c));
console.log(c);

console.log(dec(c));
console.log(dec(c));
console.log(dec(c));
console.log(dec(c));
console.log(dec(c));

var a = 20;
var a = 20;

function f1() {
    var a = 10;

    function f2() {
        console.log(a);
    }

    var a = 10;
    f2();
    console.log(a);
}

f1();

function add(a, b) {
    return a + b;
}

function square(x) {
    return x * x;
}

function pythagoras(f1, f2) {
    var a = 10;
    var b = 10;

    return f1(f2(a), f2(b));
}

console.log(pythagoras(add, square));

function invoke(f) {
    f();
}

function printHello() {
    console.log("Hello");
}

invoke(printHello);

function f1() {
    console.log(1);
}

function f2() {
    console.log(2);
}

function f3() {
    console.log(3);
}

var fs = [f1, f2, f3];

function callAll(fs) {
    for (var i = 0; i < fs.length; i++) {
        var fn = fs[i];
        fn();
    }
}

callAll(fs);

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

var arr = [1, 3, 4, 5];
var arr = [2, 4, 6];
var arr = [1, 2, 3];
console.log(arr.map(double).map(triple));
console.log(arr.map(triple));

function isEven(x) {
    return x % 2 == 0;
}

console.log(arr.filter(isEven));

function add(a, b) {
    return a + b;
}

function print(x) {
    console.log(x);
}

console.log(arr.map(print));

var arr = [1, 2, 3];

function f(a) {
    return a == 5;
}

console.log(arr.some(f));

function distinctElements(arr) {
    var output = [];

    for (var i = 0; i < arr.length; i++) {
        var el1 = arr[i];
        var found = false;

        for (var j = 0; j < output.length; j++) {
            var el2 = output[j];

            if (el1 == el2) {
                found = true;
            }
        }

        if (!found) {
            output.push(el1);
        }
    }

    return output;
}

console.log(distinctElements([
    1, 2, 3, 4, 5, 5, 6, 6, 7
]))

var s = "Aditya";

console.log(s[2]);

var arr = ["a", "b", "c"];
console.log(arr.join(''));
console.log("abc".split(''))

var add = a => 2 * a;
console.log(add(6));

var len = arr => arr.length;
console.log(len([1, 2, 3]));

console.log([].map(x => 2 * x));

console.log(1 ? "a" : "b");

function filter() {}

var person = {
    name: "Aditya",
    age: 19,
    address: {
        city: "Bangalore",
        pincode: "560100"
    }
};

var arr = [];
arr.push(person, person.address);

var key = "Aditya";
console.log(arr[0].name);

console.log(`
    Hello
    Hi
    Hey
    ${key}
`);

