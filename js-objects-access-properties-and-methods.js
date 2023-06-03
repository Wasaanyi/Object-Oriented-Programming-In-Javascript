const obj = {
    name: 'james',
    age: 33,
    1: "one",
    greet: function(){
        console.log('hello');
    }
}

// accessing and updating obj properties
// obj.name
console.log(obj.name); 

// or obj['key']
// results into error
//console.log(obj.1)
console.log(obj[1])

// most of the time use the .notation but if things 
// get tricky use the [] notation
