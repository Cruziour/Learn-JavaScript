const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(`Value of arr is ${val}`);
    
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// Map Data Type 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, " :- ", value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, " :- ", value);
    
// }