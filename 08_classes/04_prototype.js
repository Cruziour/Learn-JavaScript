let myName = "Rupesh           "
// console.log(myName.truelength);




let myHeros = ['thor','spiderman']

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Rupesh = function(){
    console.log(`Rupesh present in all objects`);
    
}

heroPower.Rupesh()
myHeros.Rupesh()

// inheritance

const user = {
    name: "Chai",
    email: "chai@google.com"
}
const Teacher = {
    makevide: true
}

const TeachingSuppoert = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assigment',
    fullTime: true,
    __proto__: TeachingSuppoert
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSuppoert, Teacher)

let anotherUsername = "ChaiAurCode                "

String.prototype.truelength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.truelength()
myName.truelength()

