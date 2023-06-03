// having a function in our constructor can slow down our application in case
// we have many record
function Person (name, age){
    this.name = name
    this.age = age
    // this.greet = function (){
    //     return `hello I'm ${this.name} and I'm ${this.age} years old.`
    // }
}

// resoluton 
Person.prototype.greet = function (){
    return `hello I'm ${this.name} and I'm ${this.age} years old.`
}



const james = new Person('James', 28)
const bob = new Person('Bob', 18)

console.log(james)
console.log(bob.greet());
