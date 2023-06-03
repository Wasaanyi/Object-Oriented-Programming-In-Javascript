class Person {
    // private field 
    #name
    constructor(name){
        this.#name = name;
    }

    // getter
    get name(){
        return this.#name;
    }

    // setter
    set name(userInput){
        // here we can do some userInput validation
        if (typeof userInput === 'number' || userInput.includes('@')){
            console.log('no numbers allowed in username');
        }else{
            this.#name = userInput;
        }      
    }


}

const james = new Person('James');
console.log(james.name);
james.name = 23;
console.log(james.name);

james.name = 'Wasaanyi';
console.log(james.name);