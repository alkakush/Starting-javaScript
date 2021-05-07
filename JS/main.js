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