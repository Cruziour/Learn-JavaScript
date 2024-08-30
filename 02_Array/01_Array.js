// Array 
// const myArr = [0,1,2,3,4,5]
// const myHeros = ['shaktiman','naagraj']

// const myArr2 = new Array(1,2,3)
// // console.log(myArr[1]);


// Array method 

// myArr.push(6)
// myArr.push(7)

// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice 

// console.log("A",myArr);
// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("C", myArr);


const marvelHeros = ['Thor','Ironman','spiderman']
const dcHeros = ['superman','flash','batman']

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

// const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Rupesh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

