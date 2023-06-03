// constructor function
// name should start with capital letter
// Never use return in it
function Person (name, age){
    this.name = name
    this.age = age
}

// calling the constructor function using 'new' keyword
// this takes us back to polymorphism
const james = new Person('James', 28)
const bob = new Person('Bob', 18)

// under the hood
// const newObj = {
//     func: function Person(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
console.log(james);
console.log(bob)