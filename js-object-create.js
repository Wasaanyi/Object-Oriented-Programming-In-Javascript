/*
Object.create(obj, propDescriptor)
- Creates a NEW EMPTY object and assigns its prototype as the argument object
passed in.

- Can create and object with NO prototype (does NOT link back to Object Base)
via Object.create(null)

- All javascript objects are created via this method

*/
const obj = {}
console.log(obj)
// under the hood
// const obj = Object.create(Object.prototype)
// console.log(obj.__proto__ === Object.prototype); // true



// descriptor
// Object.create(Object.prototype, descriptor)
const obj1 = {
    name: 'james'
}

// writeable - allows property to be changed when true
// enumerable - prevents property from being listed during enumaration when false 
// configurable - prevent certain changes to property e.g. deleting when false 
// are false by default
const descriptor = {
    name:{
        value:'james',
        writeable: true,
        //enumerable: false,
        //configurable: false
    }
}

const obj2 = Object.create(Object.prototype, descriptor)

// how to create an object with no prototype at all
// use Object.create(null)
const objNull = Object.create(null);
console.log(objNull)
