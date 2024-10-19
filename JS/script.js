const hello = 0;
// console.log(hello);
// // hello = 10;
// console.log(hello);

// var firstName = "Aditya";
var balance = 8000000000000000000000000000000000000000000;

var iDontWantToGiveValue = null;

console.log(firstName);
var firstName = "Daksh";

console.log(iDontWantToGiveValue);

hoisting
console.log(pi);

const pi = 3.14;
var x = 20;

console.log(pi);

var lowerLimit = 5000;
var upperLimit = 20000;

balance = 10000;

if (lowerLimit <= balance && balance <= upperLimit) {
    console.log("Balance looks valid");
} else {
    console.log(balance + " looks sus.");
}

console.log(firstName);
console.log(balance);

console.log(!![].length);
console.log(false);
console.log(typeof(!!1));
console.log(typeof(!!0 + ""));

console.log(!!"0");

var one = 1;
var two = 2;
var three = 3;

var numbers = [1, 2, 3, 6, 9, 14, 67, 18];
console.log(numbers);

var k = 3;

for (var i = 0; i < numbers.length; i++) {
    if (!(numbers[i] % k)) {
        console.log(numbers[i]);
    }
}

var num = 2;
var k = 10;

var multiples = [];

for (var i = 1; i <= k; i++) {
    multiples.unshift(i * num);
}

console.log(multiples);

multiples.pop();
console.log(multiples);

multiples.shift();
console.log(multiples);

console.log(multiples.slice(1, 3));
console.log(multiples);

multiples.splice(2, 0, 1);
console.log(multiples);

console.log(multiples.shift());

console.log(multiples.slice(3, 6))
console.log(multiples.splice(2, 2));
console.log(multiples);


