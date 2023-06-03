class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce(){
        return `Hi! my name is ${this.name} and I'm born in ${2023 - this.age}. `
    }

}


class Teacher extends Person{
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    work () {
        return super.introduce() + `I'm also ${this.job}, thanks.`
    }
}

const james = new Teacher('james', 28, 'Engineer');
console.log(james)
console.log(james.introduce());
console.log(james.work());