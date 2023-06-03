function Person(name, age){
    this.name = name;
    this.age = age;
}

function Teacher(name, age, job){
    Person.call(this, name, age)// similar to the super()
    this.job = job;
}

Teacher.prototype = Object.create(Person.prototype) 
Teacher.prototype.constructor = Teacher;

const james = new Teacher('James', 28, 'Engineer');
console.log(james);// works perfectly fine but has more work.
