const tinderUser = new Object() 

tinderUser.id = "123abc"
tinderUser.name = "rupesh"
tinderUser.isLoggedin = false
// console.log(tinderUser);

const regularUser = {
    email: "Rupesh0@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rupesh",
            lastname: "raushan"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {4: "f",5: "g"}

// const obj3  = {obj1, obj2}
// const obj3  = Object.assign(obj1, obj2)
// const obj3  = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "rupeshkr99000@gmial.com"
    },
    {
        id: 2,
        email: "rupeshkr99000@gmial.com"
    },
    {
        id: 3,
        email: "rupeshkr99000@gmial.com"
    },
    {
        id: 4,
        email: "rupeshkr99000@gmial.com"
    }
]

console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));