// singleton
// Object.create() 
// object literals 

const mySym = Symbol('key1')


const JsUser = {
    name: "Rupesh",
    age: 22,
    location: "Hajipur",
    email: "rupeshkumarraushan0@gmail.com",
    isLogIn: false,
    lastLoginDay: ['Monday','Saturday'],
    [mySym]: "mykey1"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello JS User, ${this.name}`);  
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
