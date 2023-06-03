// Challenge 1

// define a custom constructor function with the name Person and only takes in ONE argument 'name'
// create new instances of Person with each of the names in the array below
// 'bonus' assign proper name variables to each newly created object instance
// for example, the variable bob should hold the Object bob constructed by Person

const arrOfNames = ['bob', 'jack', 'tony', 'john'];

// constructor 
function Person (name) {
    this.name = name;
}


// Create new instances of Person using the names from the array
const bob = new Person(arrOfNames[0]);
const jack = new Person(arrOfNames[1]);
const tony = new Person(arrOfNames[2]);
const john = new Person(arrOfNames[3]);

console.log(bob);   // Person { name: 'bob' }
console.log(jack);  // Person { name: 'jack' }
console.log(tony);  // Person { name: 'tony' }
console.log(john);  // Person { name: 'john' }


