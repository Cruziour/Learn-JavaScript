// const tinderUser = new Object() //// singleton

const tinderUser = {}

tinderUser.id = '123abs'
tinderUser.name = "Rupesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "rupeshkr99000@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rupesh",
            lastname: "Raushan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'a',
    4: 'b'
}
const obj5 = {
    5: 'a',
    6: 'b'
}

// const obj3 = {obj1,obj2}
// // console.log(obj3);

// const obj4 = Object.assign({},obj1, obj2)
// console.log(obj4);

// const obj6 = Object.assign({},obj1, obj2,obj5)
// console.log(obj6);

const obj7 = {...obj1, ...obj2}
console.log(obj7);
