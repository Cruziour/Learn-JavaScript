const user = {
    username: "Cruziour",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details');
        // console.log(`User Name : ${this.username}`);
        console.log(this);
    }
}

console.log(user["username"]);
// console.log(user["getUserDetails()"]);
// console.log(user.getUserDetails());
console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLogedIn = isLogedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this

}

const userOne = new User("Rupesh", 12, true)
// console.log(userOne)
const userTwo = new User("Raushan", 10, false)
console.log(userOne.constructor)
// console.log(userTwo)