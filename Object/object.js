// Object 

// Singleton
// Object.create 

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    // name: "Rupesh",
    "name": "Raushan",
    [mySym]: "myKey1",
    age: 21,
    email: "rupeshkr99000@gmail.com",
    isLoggedIn:  false,
    lastLoginDays: ["Monday","Saturday"],
    "full name": "Rupesh Kumar Raushan",

    greeting: function(){
        console.log("Hello Js user");
    }
    
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser[mySym]);

// JsUser.email = "rupeshkumarraushan0@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "cruziorwithcode@gmail.com"

// console.log(JsUser);

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greetingTwo());
