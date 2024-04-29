// this keyword

const user = {
    username: "Rupesh",
    price: 999,
    course: "JS in hindi",

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
        console.log(this);
    }
}

// console.log(this) // {}
// user.welcomeMessage()
// user.username = "Raushan"
// user.welcomeMessage()

// function one(){
//     let username = "Rupesh"
//     console.log(this.username);
// }

// one()

// const two = function one(){
//         let username = "Rupesh"
//         console.log(this.username);
// }
// two();

// const arrow = () => {
//     let username = "Rupesh"
//     console.log(this);
// }

// arrow()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(5,2));

const addThree = (num1, num2) => ({username: "Rupesh"})
console.log(addThree(5,2));

