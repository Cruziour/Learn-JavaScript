class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password.toUpperCase()}rohan`
    }
    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const chai = new User("chai@google.ai","rupesh")
console.log(chai.email);
console.log(chai.password);
