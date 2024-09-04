const user = {
    username: "Rupesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// user.getUserDetails()
// console.log(this);

// const promiseOne = new Promise(function(resolve, reject){})
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = ()=>{
        console.log(`Welcome ${this.username}`);
        
    }
    // return this
}

const userOne = new User("rupesh",12,true)
const userTwo = new User("Rauhan",1,true)
console.log(userOne.constructor);
// console.log(userTwo);
