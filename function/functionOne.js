// function  calculateCartPrice(...num1) {
//     return num1
// }
function  calculateCartPrice(val1,val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(100,200,300,400,500,800,600,700));

const user = {
    userName: "Rupesh",
    price: 999
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.userName} and price is ${anyObject.price}`);
} 

// handleObject(user)
// handleObject({userName: "Raushan", price: 399})

const myNewArr = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr))

// nested scope

function one(){
    const userName = "Rupesh"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Rupesh"
    if(username === "Rupesh"){
        const website = " Youtube"
        console.log(username + website)
    }
    console.log(website)
}


console.log(username)
