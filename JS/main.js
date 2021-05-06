// Arrays - Variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5); //by using constructor

console.log(numbers);

const fruits = ['apples', 'orange', 'mango', 10, true ];

fruits[3] = 'grapes';

fruits.push(20);

fruits.unshift('strawberries');

console.log(fruits[1]);

console.log(fruits);

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('orange'));

