// function syntax
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.rest = function (){
        return `${this.name} is now tired and resting`;
    }
}

const james = new Person('James', 28)
console.log(james);


//...........................................................................
// class syntax from function

class Person2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // prototype methods go here
    rest () {
        return `${this.name} is now tired and resting`;
    }
}

const james2 = new Person2('James2', 28)
console.log(james2);
console.log(james2.rest());