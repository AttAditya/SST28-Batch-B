// const studentName = "Sakshi";
var initials = 'S';
var balance = 431312.44;
var alive = true;
var notSet;
var age = 20;

studentName = "Not Sakshi";

console.log(typeof(studentName));
console.log(typeof(initials));
console.log(typeof(age));
console.log(typeof(balance));
console.log(typeof(alive));
console.log(typeof(notSet));

age = 19;

console.log(studentName + " is " + age + " years old.")

if (age >= 18) {
    console.log("Adult");
} else if (age >= 12) {
    console.log("Teenager");
} else if (age >= 5) {
    console.log("Child");
} else {
    console.log("Toddler");
}

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(hello);
var hello;

console.log(hello);
hello = 10;

var numbers = [0, 1, 2, 3];

console.log(numbers[4]);

console.log(numbers);

numbers.push(4);
numbers.unshift(-1);

console.log(numbers);

for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}

console.log(numbers);

var tripleArr = [];

for (var i = 0; i < numbers.length; i++) {
    tripleArr.push(numbers[i] * 3);
}

console.log(tripleArr);
console.log(numbers);

var oddArr = [];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        oddArr.push(numbers[i]);
    }
}

console.log(oddArr);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr);
console.log(arr.slice(3, 7));
console.log(arr);

console.log(arr.splice(3, 2, 10, 20, 30));
console.log(arr);

function add(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

var c = add(true, 2);
console.log(c);
console.log(c + 3);

console.log(typeof(add));

function fn(f) {
    console.log(f(10, 20));
}

fn(add);

function calc(operation, a, b) {
    // function intermediate() {
    //     return operation(a, b);
    // }
    return operation(a, b);
    // return intermediate;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(calc(divide, 10, 20));

var operationName = "subtract";
var operations = {
    "add" : add,
    "subtract" : subtract,
    "multiply" : multiply,
    "divide" : divide
};

console.log(operations["add"]);
var usingFn = operations[operationName];
console.log(usingFn(10, 20));

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var A = [1, 2, 3, 4];
// map(A, double) => [2, 4, 6, 8]
// map(A, triple) => [3, 6, 9, 12]

function map(arr, fn) {
    var outputArr = [];

    for (var element of arr) {
        outputArr.push(fn(element));
    }

    return outputArr;
}

console.log(A);
console.log(map(A, double));
console.log(map(A, triple));
console.log(map(A, isEven));

function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function add(a, b) {
    return a + b;
}

function printBird(n) {
    var bird = "🦉";
    console.log(bird.repeat(n));
}

var A = [1, 2, 3, 4];
let mapped = A.map(isEven);

console.log(A);
console.log(mapped);
console.log(A.filter(isEven));
console.log(A.reduce(add));
console.log(A.find(isEven));
console.log(A.findIndex(isEven));
console.log(A.some(isEven));
console.log(A.every(isEven));

console.log(A.forEach(printBird));

var str = "Hello";

console.log(str.length);
console.log(str.replace("e", "a"));
console.log(str.replace("l", "a"));

console.log([
    [1, 2, 3],
    [4, 5, 6]
].flat());

console.log(str.indexOf('e'));

str = str.split('');
console.log(str);
str[0] = 'm';
str = str.join('');
console.log(str);

var words = ["Hi", "hello", "hey"];
console.log(words);
console.log(words.join(', '));

console.log("aditya".toUpperCase());
console.log("ADITYA".toLowerCase());
console.log("ADitYa".toUpperCase());

var sentence = "Hello, Hi, Bye";
console.log(sentence.substring(1, 5));

console.log("1234567890".split("").reverse().join(''));
console.log("sakshi".split("").sort().join(''));

var a = 10;
var b = 'Aditya';
var c = `
Hello
b value is ${b}
c is ${a}
`;

console.log(c);

// given a string str
// reverse substring i to j
// return the new string
function reverseSubstr(str, i, j) {
    // str = abcdef
    // i = 2
    // j = 4
    // returns abedcf

    str = str.split('');

    let p1 = str.slice(0, i);
    let p2 = str.slice(i, j + 1);
    let p3 = str.slice(j + 1);

    p2 = p2.reverse();

    str = [
        p1.join(''),
        p2.join(''),
        p3.join('')
    ];

    // str = [p1, p2, p3];
    // str = str.flat();
    
    // str = p1.concat(p2).concat(p3);

    str = str.join('');

    return str;
}

