/*
Js Objects
- A collection of unordered key/value pairs
- Keys MUST be strings or be evaluated strings
- values can be any type ({obj}, [arr], 'strings')
- can only be looped with for-in loop
- building block for javascript
*/

const obj = {
    name: 'james',
    age: 33,
    greet: function(){
        console.log('hello');
    }
}

// for (const key in obj){
//     console.log(key);
//     console.log(obj[key])
// }

// returns all kesy
console.log(Object.keys(obj));

// returns all values
console.log(Object.values(obj));

// checking if property exist
console.log('name' in obj);
console.log('age' in obj);

// checking if property exists useing .hasOwnProperty()
console.log('Obj has property name: '+ obj.hasOwnProperty('name'))
