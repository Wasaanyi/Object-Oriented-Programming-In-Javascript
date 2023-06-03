const me = {
    name: 'james',
    age: 28,
    isCool: true,
    favFood: ['pizza', 'burger', 'steak', 'lobster'],
    address: {
        streetName: 'shirley',
        streetNumber: '123',
        zipCode: 92627,
        state: 'California'
    }
}

Object.defineProperty(me, 'name', {
    writable: true,
    enumerable: false,
    configurable: false,
    // value: 'Iam'
})

console.log(me.name)
me.name = 'New name'
console.log(me.name)
console.log(me)
console.log('delete me.name: ',delete me.name);
console.log('delete me.age: ', delete me.age);
console.log(me)