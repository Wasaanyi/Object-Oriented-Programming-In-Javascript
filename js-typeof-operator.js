/*
typeof
- Unary operator (only takes 1 argument)
- Returns the Primitive "type" of the argument
- some exceptions!

*/
console.log(typeof ''); // returns string
console.log(typeof {}); // returns object

function person(){
    this.name = name;
}
console.log(typeof person); // returns functions

// some of the exceptions
// typeof null === "object"
console.log(typeof null);

// typeof NaN === "number"
console.log(typeof NaN);
// instead use
console.log(isNaN('x')); // true meaning cannot convert it to number hence NaN
console.log(isNaN('2')); // false meaning can convert to number hence not NaN
console.log(isNaN('')); // false because empty string is falsey

// typeof [3,4,5] === "object"
console.log(typeof []); // returns object.
console.log(Array.isArray([1,3,5])); // returns true
console.log(Array.isArray({})); // returns false
