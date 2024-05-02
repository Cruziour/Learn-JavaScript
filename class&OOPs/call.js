function SetUserName(username){
    // complex DB Call 
    this.username = username
    console.log("called");
}

function createUser(username, email, passsword){
    SetUserName.call(this, username)
    
    this.email = email
    this.passsword = passsword
}

const chai = new createUser("chai","chai@gmial.com","123")

console.log(chai);