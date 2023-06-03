/*
Constructors
- just functions that create new object instances
- js has constructors for all data types
- "this" keyword assignment in the constructor now referts to the newly created object
- can be built-in(Array, String ....) or custom
- all types in js have thier own constructors

*/
const arr = [1,2,5]

// under the hood 
const arr2 = new Array(1,2,5)

// "new" keyword is a shortcut for '.prototype.constructor()'
const arr3 = Array.prototype.constructor(1,2,5)

// other
const str = String.prototype.constructor('hello');

