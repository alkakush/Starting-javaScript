// object

const person = {
    firstname: 'Jonh',
    lastname: 'Deo',
    age:30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 main st',
      city: 'Boston',
      state: 'MA'
    }
}

console.log(person);

console.log(person.hobbies[2]);

console.log(person.address.city);

const { firstname, lastname, address: { city } } = person;

console.log(firstname);
console.log(city);

person.email = 'Jonh@gmail.com';

console.log(person);


