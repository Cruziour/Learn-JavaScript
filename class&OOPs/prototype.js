let myName = "rupesh          "
let myChannel = "Cruziour     "

Object.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}
    

// console.log(myName.trueLength())
// console.log(myChannel.trueLength())

"Shiavni".trueLength()


// let myHeros = ["thor","spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy Power is ${this.spiderman}`);
//     }
// }

// Object.prototype.rupesh = function(){
//     console.log(`rupesh is present in all objects`);
// }

// Array.prototype.raushan = function(){
//     console.log(`Raushan says hellos`);
// }
// // heroPower.rupesh()
// // myHeros.rupesh()
// // heroPower.raushan()
// // myHeros.raushan()


// // Inheritance

// const User = {
//     name: "Cruziour",
//     email: "rupeshkumarraushan0@gmail.com"
// }
// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // Modern Syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)
