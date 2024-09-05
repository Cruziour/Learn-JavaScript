class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);    
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New Course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("Hitesh", "hitesh@gmail.com","123");

chai.logMe()
chai.addCourse()

const masalaChai = new User("Rupesh")
masalaChai.logMe();
// masalaChai.addCourse()


console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
