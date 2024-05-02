// ES6 

class User {
    constructor(username, email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Rupesh","rkr9900@gmial.com","123")
// console.log(chai.changeUserName());
// console.log(chai.encryptPassword());


// behind the scenc

function Username(username, email,password){
    this.username = username
    this.email = email
    this.password = password
}
