class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course by ${this.username}`);
    }
}

const roma = new teacher("Rupesh","rupeshkr99000@gmail.com","123")

roma.addCourse()

const masalaChai = new User("masalaChia")

// masalaChai.addCourse()
roma.logMe()
masalaChai.logMe()

// console.log(roma === masalaChai);
console.log(roma instanceof User);