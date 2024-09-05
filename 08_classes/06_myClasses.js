// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Rupesh","rupesh@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const chai1 = new User("Raushan","raushan@gmail.com","123")
// console.log(chai1.encryptPassword());
// console.log(chai1.changeUsername());