const score = 400

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const otherNumber = 123.84749
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString);
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++ Maths +++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(3, 4, 5, 6, 1, 0));
console.log(Math.max(3, 4, 5, 6, 1, 0));
console.log(Math.random()); // Alsways give [0,1] between
console.log(Math.random() * 10 + 1);
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)+min));