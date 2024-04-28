// Array 
const marvel_heros = ["Iron-Man","Thor","Spider-Man"]
const dc_heros = ["SuperMan","flash","batman"]

// marvel_heros.push(dc_heros)
// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

const allnewheros = [...marvel_heros,...dc_heros] // spread opeartor
// console.log(allnewheros);

// const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);

console.log(Array.isArray("Rupesh"));
console.log(Array.from("Rupesh"));
console.log(Array.from({name: "Rupesh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

