// Challenge 2


// create Two(2) new objects named newPhil and newPatrick
// each of these new objects must have (makeMeThePrototype) as the prototype
// newPhil.__proto__ === makeMeThePrototype must return True
// hint: look up how to use Object.assign property

const objPhil = {
    name : 'phil',
    favFood: 'lobstrer tails'
}

const objPatrick = {
    name: 'patrick',
    retired: 'true',
    favFood: 'cowboy steak'
}

const makeMeThePrototype = {
    isRetired: function(){
        if (this.retired){
            console.log(`hello, ${this.name} IS RETIRED`);
        }else{
            console.log(`${this.name} IS NOT RETIRED YET`);
        }
    },
    getFavFood: function () {
        console.log(`${this.name}'s favorite food is ${this.favFood}`);
    }
}


/*
Object.assign (target, ...source)  

Object.create(makeMeThePrototype) creates a new object with makeMeThePrototype as
its prototype

Object.assign() to assign the properties from objPhil and objPatrick to 
the new objects, effectively merging them. 

*/

const newPhil = Object.assign(Object.create(makeMeThePrototype), objPhil)
const newPatrick = Object.assign(Object.create(makeMeThePrototype), objPatrick)

// confirming assignment
console.log(newPhil)
console.log(newPatrick)

// is Retired
newPhil.isRetired();
newPatrick.isRetired();

// favFood
newPhil.getFavFood();
newPatrick.getFavFood();

// confirming prototype
console.log('newPhil.__proto__ === makeMeThePrototype :', newPhil.__proto__ === makeMeThePrototype)
console.log('newPatrick.__proto__ === makeMeThePrototype : ', newPatrick.__proto__ === makeMeThePrototype)


//AOB
console.log(Object.getPrototypeOf(newPhil));
console.log(Object.getPrototypeOf(newPatrick));
