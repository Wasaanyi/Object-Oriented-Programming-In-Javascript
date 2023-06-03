// proving functions are special types of objects
// functions have special methods like call, apply, bind etc.
function greet(){
    console.log('Hello there');
}

// accepts other properties
greet.age = 3

// accepts other properties like functions
greet.hello = function(){
    console.log("Hello new function");
}

greet();
greet.hello();
console.log(greet.age);


// Arrays as special types of objects
// have keys ordered with numerical values from 0
const arr = [5, true, 'james', {}];
console.log(arr.length);

// accepts element with string key
arr.year = 2004;
console.log(arr);
console.log(arr.length)
// length does not increase because its considering element with numeric keys

// accepts functions
arr.greet = function () {
    console.log('hello')
}
console.log(arr)

// hence they are special types of object with ordered numeric keys.

