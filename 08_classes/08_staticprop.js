class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const rupesh =  new User("Rupesh")
console.log(rupesh.createId());


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("IPhone","i@phone.com")

iphone.logMe()
console.log(iphone.createId());
