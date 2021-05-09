/*
// starting  with loop

const todos = [
 {
   id: 1,
   text: 'Take out trash',
   isCompleted: true 
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true 
 },
 {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false 
 },
];

*/

/*
// for loop

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
   //   console.log('For Loop Number: ');
}

for(let todo of todos){
   console.log(todo);
   // console.log(todo.id);

}
*/

/*
// forEach
 
 todos.forEach(function(todo){
  console.log(todo.isCompleted);
 });

 //map
const todoText = todos.map(function(todo){
   return todo.text;
});

console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo){
   return todo.isCompleted === true;
});

console.log(todoCompleted);
*/


//  while loop
/*
let i = 2;
while(i < 10){
   console.log(i);

   i++;
}
*/

/*
//======= conditional statements ================

//  if , if else statement
 

const x = 20;

if(x == 20 ) {
   console.log('x is 20');
}

const y = '20';

if(y == 10 ) {
   console.log('y is 20');
}else{
   console.log('y is NOT 20');
}


const z = '20';

if(z === 20 ) {        
   console.log('z is 20');  // will not print because === contains data type
}
*/

/*
//  else if statement
 

const x = 20;

if(x === 10 ) {
   console.log('x is 10');
} else if(x > 10){
   console.log('x is grater then 10');
} else{
   console.log('x is less then 10');
}

const y = 5;

if(y === 10 ) {
   console.log('y is 10');
} else if(y > 10){
   console.log('y is grater then 10');
} else{
   console.log('y is less then 10');
}

*/

/*
//  nested if statement

const x = 5;
const y = 9;

if(x > 5 || y > 10){
   console.log('x is more then 5');
   console.log('y is more then 10');
} else{
   console.log('x is less then 5');
   console.log('y is less then 10');
}
*/

/*
// ============ ternary Operator ===================

 const x = 11;

 const color = x > 10 ? 'red' : 'blue';
 console.log(color);



 const y = 11;

 const subject = y > 10 ? 'java' : 'javascript';

 switch(subject){
    case 'java':
      console.log('subject is java');
      break;
    case 'javascript':
       console.log('subject is javascript');
      break;
    default:
       console.log('subject is NOT java or javascript');  
 }
 */


 // ================= functions ============================
/*
 function addNums(num1, num2){
    return num1 + num2;
 }
 console.log(addNums(5, 4));


 function addNum(Num1 = 1, Num2 = 2){ 
   console.log(Num1 + Num2);
}
addNum();
addNum(5, 7);
*/

/*
// arrow function

const addNums = (num1 = 1, num2 = 2 ) =>{
   return num1 + num2;
}
console.log(addNums(5,5));



const addNum = (Num1 = 1, Num2 = 2 ) => Num1 + Num2;

console.log(addNum(6, 6));
*/


// ========================== OOPs concepts ================
/*
// Constructor function

function Person(firstName, lastName, dob){
   this.firstName = firstName;
   this.lastName = lastName;
   this.dob = new Date(dob);

   this.getBirthYear = function() {
      return this.dob.getFullYear();
   }

   this.getFullName = function() {
      return `${this.firstName} ${this.lastName}`; 
   }
}

// Instantiate object

const person1 = new Person('John', 'Deo', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '4-10-1990');

console.log(person1);
console.log(person1.lastName);

console.log(person2.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());

console.log(person2.getFullName());
*/

/*
//=== proto type ==

// Constructor function
function results(subject, minMark , maxMark) {
   this.subject = subject;
   this.minMark = minMark;
   this.maxMark = maxMark;
}

results.prototype.getMaximumNumber = function() {
   return this.maxMark.getMaximumNumber();
}
results.prototype.getFullinfo = function() {
   return `${this.subject} ${this.minMark} ${this.maxMark}`;
}


// Instantiate object
 const subject1 = new results('java', '20', '40' );
 const subject2 = new results('javascript', '15', '40' );

 console.log(subject1);
 console.log(subject2);
 */

 /*
 // ================== OOPs Class =============================


// Class

class Person {
   constructor(firstName, lastName, dob){
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
   }

   getBirthYear() {
      return this.dob.getFullYear();
   }

   getFullName() {
      return `${this.firstName} ${this.lastName}`; 
   }

}

// Instantiate object

const person1 = new Person('John', 'Deo', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '4-10-1990');

console.log(person1);
console.log(person1.lastName);

console.log(person2.getFullName());

*/


//====================== Use DOM js  =====================

// single element
/*
 console.log(document.getElementById('my-form'));
 console.log(document.querySelector('.container'));
*/
/*
 //same as above
const form = document.getElementById('my-form');
console.log(form);
*/


// multiple element
/*
console.log(document.querySelector('.item'));
console.log(document.getElementsByClassName('.item'));
console.log(document.getElementsByTagName('li'));

*/

// manipulate Dom
/*
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));  

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>hello</h1>';
*/


const btn = document.querySelector('.btn');
btn.style.background = 'red';
// eventlistener mouseover, click, mousout
btn.addEventListener('mouseover', (e) => {
   e.preventDefault();
   // console.log('click');
   // console.log(e.target);
   // console.log(e.target.className);

   document.querySelector('#my-form').style.background = '#ccc';
   document.querySelector('body').classList.add('bg-dark');
});
