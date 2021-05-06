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







//  while loop
/*
let i = 2;
while(i < 10){
   console.log(i);

   i++;
}
*/