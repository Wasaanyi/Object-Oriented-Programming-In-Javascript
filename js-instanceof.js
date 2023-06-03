/*
instanceof
- it is an opertator, like (+) or (-)
- LEFT side of argument is an "object/array/string etc"
- RIGHT side of argument MUST be a constructor

The instanceof operator checks if the prototype of the constructor 
(right argument) is part of the prototype chain of the 
(left argument)


ie (left arg) instanceof (right arg)
                         must be constructor function
*/

console.log([] instanceof Array); // true
console.log(' ' instanceof String); // false

const str = new String('');
console.log(str instanceof String); // true

console.log([] instanceof Object); // true